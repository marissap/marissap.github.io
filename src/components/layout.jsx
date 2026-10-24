import React, { useEffect, useRef } from "react"

const Layout = ({ children }) => {
  const cursorGridRef = useRef(null)

  useEffect(() => {
    const pointerMedia = window.matchMedia("(hover: hover) and (pointer: fine)")
    const canvas = cursorGridRef.current
    if (!pointerMedia.matches || !canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    const cellSize = 24
    const lifetime = 850
    const cells = new Map()
    let animationFrame = 0
    let previousX
    let previousY

    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1
      canvas.width = Math.round(window.innerWidth * pixelRatio)
      canvas.height = Math.round(window.innerHeight * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    }

    const renderCells = () => {
      const now = performance.now()
      context.clearRect(0, 0, window.innerWidth, window.innerHeight)
      let hasCells = false

      for (const [key, cell] of cells) {
        const progress = (now - cell.createdAt) / lifetime
        if (progress >= 1) {
          cells.delete(key)
          continue
        }

        hasCells = true
        const alpha = (1 - progress) ** 1.6 * cell.strength * 0.18
        const center = cellSize / 2
        const gradient = context.createRadialGradient(
          cell.x + center,
          cell.y + center,
          0,
          cell.x + center,
          cell.y + center,
          cellSize * 0.75,
        )
        gradient.addColorStop(0, `rgba(24, 0, 247, ${alpha})`)
        gradient.addColorStop(1, "rgba(24, 0, 247, 0)")
        context.fillStyle = gradient
        context.fillRect(cell.x, cell.y, cellSize, cellSize)
      }

      context.globalAlpha = 1
      return hasCells
    }

    const drawCells = () => {
      animationFrame = 0
      const hasCells = renderCells()
      if (hasCells) animationFrame = window.requestAnimationFrame(drawCells)
    }

    const addCell = (x, y, strength, createdAt) => {
      const column = Math.floor(x / cellSize)
      const row = Math.floor(y / cellSize)
      const key = `${column},${row}`
      cells.set(key, { x: column * cellSize, y: row * cellSize, strength, createdAt })
    }

    const drawTrail = (event) => {
      if (previousX === undefined) {
        previousX = event.clientX
        previousY = event.clientY
        return
      }

      const startX = previousX
      const startY = previousY
      const deltaX = event.clientX - startX
      const deltaY = event.clientY - startY
      previousX = event.clientX
      previousY = event.clientY

      const distance = Math.hypot(deltaX, deltaY)
      if (distance < 1) return

      const normalX = -deltaY / distance
      const normalY = deltaX / distance
      const steps = Math.ceil(distance / (cellSize / 2))
      const createdAt = performance.now()

      for (let step = 1; step <= steps; step += 1) {
        const amount = step / steps
        const x = startX + deltaX * amount
        const y = startY + deltaY * amount
        const strength = 0.3 + amount * 0.7

        for (const side of [-1, 0, 1]) {
          const crossStrength = side === 0 ? 1 : 0.6
          addCell(
            x + normalX * side * cellSize,
            y + normalY * side * cellSize,
            strength * crossStrength,
            createdAt,
          )
        }
      }

      renderCells()
      if (!animationFrame) animationFrame = window.requestAnimationFrame(drawCells)
    }

    resizeCanvas()
    window.addEventListener("pointermove", drawTrail, { passive: true })
    window.addEventListener("resize", resizeCanvas)
    return () => {
      window.removeEventListener("pointermove", drawTrail)
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
      cells.clear()
      context.clearRect(0, 0, window.innerWidth, window.innerHeight)
    }
  }, [])

  return (
    <div className="main-layout">
      <canvas className="cursor-grid" aria-hidden="true" ref={cursorGridRef} />
      <main>{children}</main>
    </div>
  )
}

export default Layout
