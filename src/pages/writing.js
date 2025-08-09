import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import GerminationZine from "../assets/Germination.pdf";

const Writing = ({ location }) => {
    return (
        <Layout location={location}>
            <Header/>
            <h1 style={{
                fontFamily: `Newsreader, sans-serif`,
                fontWeight: `200`,
            }}>Published Writing</h1>
            <h4 style={{
                fontFamily: `Newsreader, sans-serif`,
                fontWeight: `200`,
            }}>Germination Zine - <i>03.31.25</i></h4>
            <p style={{
                fontFamily: `News Cycle, sans-serif`,
            }}>I wrote six vignettes following a months long period of questioning around the state of a relationship. They were written in-transit and are titled as such. Two of them were chosen to be published in a Brooklyn-based zine. Hoes for Prose is literary group based in Brooklyn which runs book clubs and publishes a zine. See more <a href="https://www.instagram.com/p/DELEbTjyVHW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">here</a>.</p>
            <br></br>
            <div class="iframe-container">
                <iframe  width="100%" height="100%" src={`${GerminationZine}#zoom=20`}></iframe>
            </div>
        </Layout>    
    )
}

export default Writing