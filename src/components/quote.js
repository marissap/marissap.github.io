import React, { useEffect } from "react"

function scrollingText() {
    let section = document.querySelector("#outer");
    let content = section.querySelector("#content");
    
    repeatContent(content, section.offsetWidth);
    
    let el = section.querySelector("#loop");
    el.innerHTML = el.innerHTML + el.innerHTML;
    
    function repeatContent(el, till) {
        let html = el.innerHTML;
        let counter = 0;
        
        while (el.offsetWidth < till && counter < 100) {
            el.innerHTML += html;
            counter += 1;
        }
    }
}

const Quote = () => {

    useEffect(() => {
        scrollingText()
    }, []);

    return (
        <div id="outer">
            <div>
                <div id="loop">
                    <div id="content">I want to build something that makes people fall in love." - Cameron Howe, Halt and Catch Fire<span>&#10037;</span></div>
                </div>
            </div>
        </div>
    )
}

export default Quote