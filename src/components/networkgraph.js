import React, { useRef, useEffect, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import ReactTooltip from 'react-tooltip';

const NetworkGraph = () => {
  const fgRef = useRef();
  const hoverNodeRef = useRef(null);
  const vibrationAmount = 1.5;
  const [tooltipContent, setTooltipContent] = useState('');
  const [tooltipId] = useState('node-tooltip');

  const data = {
    nodes: [
      { id: 'Node 1', group: 1, info: 'This is node 1' },
      { id: 'Node 2', group: 1, info: 'This is node 2' },
      { id: 'Node 3', group: 2, info: 'This is node 3' },
      { id: 'Node 4', group: 2, info: 'This is node 4' },
      { id: 'Node 5', group: 3, info: 'This is node 5' }
    ],
    links: [
      { source: 'Node 1', target: 'Node 2' },
      { source: 'Node 1', target: 'Node 3' },
      { source: 'Node 3', target: 'Node 4' },
      { source: 'Node 4', target: 'Node 5' }
    ]
  };

  // Vibrate hovered node every tick
  const onEngineTick = () => {
    const node = hoverNodeRef.current;
    if (node) {
      node.x += (Math.random() - 0.5) * vibrationAmount;
      node.y += (Math.random() - 0.5) * vibrationAmount;
    }
  };


  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <ForceGraph2D
        ref={fgRef}
        graphData={data}
        nodeAutoColorBy="group"
        linkDirectionalParticles={4}
        linkDirectionalParticleSpeed={() => 0.01}
        cooldownTicks={100}
        nodeCanvasObjectMode={() => 'after'}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.id;
          const fontSize = 12 / globalScale;
          ctx.font = `${fontSize}px Sans-Serif`;
          ctx.fillStyle = 'black';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(label, node.x, node.y + 12);
        }}
        onNodeHover={node => {
            hoverNodeRef.current = node; // update hovered node ref, no re-render!
          if (node) {
            setTooltipContent(`${node.id}: ${node.info}`);
          } else {
            setTooltipContent('');
          }
        }}
        onNodeClick={node => {
          alert(`You clicked on ${node.id}!`);
        }}
      />

      {/* Tooltip overlay */}
      <ReactTooltip
        id={tooltipId}
        getContent={() => tooltipContent}
        place="top"
        type="light"
        effect="float"
        delayShow={100}
      />
    </div>
  );
};

export default NetworkGraph;
