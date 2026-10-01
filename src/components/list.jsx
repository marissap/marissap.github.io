import React, { useState, useEffect } from 'react';
import GerminationZine from "../assets/Germination.pdf";

export default function List() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalId, setModalId] = useState(null);
    const [visible, setVisible] = useState(false);

    const modalContent = {
        ads: "Led the frontend development for the radius targeting project for geotargeting ads. Cross-functionally collaborated with designers, product, and leadership. Managed three contractors and a junior engineer. Responsible for making the decisions, trade offs, and doing the risk calculus to make sure a functional complete feature was finished under a tight timeline.",
        videoDelivery: "Worked on a global baremetal and cloud-based distributed system, from delivering video on the edge to orchestrating backbone and caching systems, and leading traffic control management. Optimized operational load by proposing, designing, and building a new microservice for fleet management. Promoted in 8 months.",
        alexa: "Rewrote the signalling layer of the Alexa Calling orchestration service that receives call directives from clients and directs connections to a fleet of servers. Mentored an intern by scoping a one-way translation project experimenting with different models on aws bedrock leading to them achieving a return offer.",
    };


    const openModal = (id) => {
        setModalId(id);
        setIsOpen(true);
        setTimeout(() => setVisible(true), 10);
    };

    const closeModal = () => {
        setVisible(false);
    };

    useEffect(() => {
        if (!visible && isOpen) {
            const timer = setTimeout(() => setIsOpen(false), 500);
            return () => clearTimeout(timer);
        }
    }, [visible, isOpen])

    return (
        <div className="about list-container" style={{ marginBottom: '0', marginBlockEnd: '0' }}>
            <style>{`
                .list-paragraph {
                    line-height: 1.4;
                    margin: 0;
                }

                .list-paragraph a {    
                    color: black;                
                    text-decoration: underline dotted #1800F7;
                    -webkit-text-decoration: underline dotted #1800F7;
                }

                .list-paragraph a:hover {
                    color: black;
                    text-decoration: underline solid #1800F7;
                    -webkit-text-decoration: underline solid #1800F7;
                }

                @media only screen and (max-width: 600px) {
                    .list-paragraph:last-of-type {
                        padding-bottom: 0.5em;
                    }
                }

                .top {                    
                    margin-bottom: 12px;                      
                }

                .list {
                    list-style: none;
                    margin: 0;
                    padding: 0 0 0 32px;
                }

                .list-item {
                    display: flex;
                    align-items: baseline;
                    gap: 10px;
                    margin-bottom: 10px;
                }

                .circle-outline {
                    width: 0.7em;
                    height: 0.7em;
                    flex-shrink: 0;
                    vertical-align: middle;
                }

                .item-text a {    
                    color: black;                
                    text-decoration: underline dotted #1800F7;
                    -webkit-text-decoration: underline dotted #1800F7;
                }

                .item-text a:hover {
                    color: black;
                    text-decoration: underline solid #1800F7;
                    -webkit-text-decoration: underline solid #1800F7;
                }

                .link-like {
                    color: black;
                    background: none;
                    border: none;
                    padding: 0;
                    margin: 0;          
                    text-decoration: underline dotted #1800F7;
                    -webkit-text-decoration: underline dotted #1800F7;
                    cursor: pointer;
                    font: inherit;
                }

                .link-like:hover {
                    color: black;
                    text-decoration: underline solid #1800F7;
                    -webkit-text-decoration: underline solid #1800F7;
                }

                .modal-backdrop {
                    position: fixed;
                    inset: 0;
                    background: transparent;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;

                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 500ms ease;
                }

                .modal-backdrop.visible {
                    opacity: 1;
                    pointer-events: auto;
                    background: rgba(0, 0, 0, 0.15);
                }

                .modal {
                    font-family: inherit;
                    background: rgba(255,255,255);
                    box-shadow: 0 0 15px 3px rgba(3, 102, 214, 0.4);
                    padding: 1.5rem;
                    border: 1px solid #1800F7;
                    border-radius: 0.5rem;
                    max-width: 500px;
                    width: 90%;
                    position: relative;
                    backdrop-filter: saturate(180%) blur(8px);

                    opacity: 0;
                    transform: translateY(-15px) scale(0.98);
                    transition: opacity 500ms ease, transform 500ms ease;
                }

                .modal.visible {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
                
                .modal-close {
                    background: none;
                    border: none;
                    padding: 0;
                    cursor: pointer;
                    position: absolute;
                    top: 0.75rem;
                    right: 0.75rem;
                    line-height: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>

            <p className="list-paragraph top">
                Technologist and <a href="/blog">writer</a>. Currently, <a href="cloudflare.com/startups">startups program lead</a> at Cloudflare and senior growth engineer.
            </p>

            <ul className="list">
                <li className="list-item">
                <svg
                    className="circle-outline"
                    viewBox="0 0 24 24"
                    stroke="#1800F7"
                    fill="none"
                    strokeWidth="2"
                >
                    <circle cx="12" cy="12" r="8" />
                </svg>
                    <div className="item-text">
                        Engineer and Tech Lead at Amazon{' '}
                        <button
                        className="link-like"
                        onClick={() => openModal("ads")}
                        >Ads</button>{' '}&{' '}
                        <button
                        className="link-like"
                        onClick={() => openModal("alexa")}
                        >Alexa</button>.
                    </div>
                </li>

                <li className="list-item">
                <svg
                    className="circle-outline"
                    viewBox="0 0 24 24"
                    stroke="#1800F7"
                    fill="none"
                    strokeWidth="2"
                >
                    <circle cx="12" cy="12" r="8" />
                </svg>
                    <div className="item-text">
                        {' '}
                        <button
                        className="link-like"
                        onClick={() => openModal("videoDelivery")}
                        >Engineered</button>{' '}
                    global video infrastructure at Twitch.
                    </div>
                </li>

                <li className="list-item">
                <svg
                    className="circle-outline"
                    viewBox="0 0 24 24"
                    stroke="#1800F7"
                    fill="none"
                    strokeWidth="2"
                >
                    <circle cx="12" cy="12" r="8" />
                </svg>
                    <div className="item-text">Created, designed, photographed, and published an original zine at <a href="/zine/">Issues Mag</a> in Toronto.</div>
                </li>

                <li className="list-item">
                <svg
                    className="circle-outline"
                    viewBox="0 0 24 24"
                    stroke="#1800F7"
                    fill="none"
                    strokeWidth="2"
                >
                    <circle cx="12" cy="12" r="8" />
                </svg>
                    <div className="item-text">Published in the Brooklyn-based zine <a href={GerminationZine} target="_blank">Germination</a>.</div>
                </li>

                <li className="list-item">
                <svg
                    className="circle-outline"
                    viewBox="0 0 24 24"
                    stroke="#1800F7"
                    fill="none"
                    strokeWidth="2"
                >
                    <circle cx="12" cy="12" r="8" />
                </svg>
                    <div className="item-text">Spent a month in Tokyo writing with <a href="https://astray.com.au/">Astray</a>.</div>
                </li>

                <li className="list-item">
                <svg
                    className="circle-outline"
                    viewBox="0 0 24 24"
                    stroke="#1800F7"
                    fill="none"
                    strokeWidth="2"
                >
                    <circle cx="12" cy="12" r="8" />
                </svg>
                    <div className="item-text">Mentored high school students through <a href="https://mindsmatternyc.org/">Minds Matter NYC</a></div>
                </li>

                <li className="list-item">
                <svg
                    className="circle-outline"
                    viewBox="0 0 24 24"
                    stroke="#1800F7"
                    fill="none"
                    strokeWidth="2"
                >
                    <circle cx="12" cy="12" r="8" />
                </svg>
                    <div className="item-text">Community organizer at the Interference Archive in Brooklyn, NY.</div>
                </li>

                <li className="list-item">
                <svg
                    className="circle-outline"
                    viewBox="0 0 24 24"
                    stroke="#1800F7"
                    fill="none"
                    strokeWidth="2"
                >
                    <circle cx="12" cy="12" r="8" />
                </svg>
                    <div className="item-text"><a href="/lathe-lamps/">Woodworker</a>, screenprinter, ceramicist, and generalist crafter/maker.</div>
                </li>

                <li className="list-item">
                <svg
                    className="circle-outline"
                    viewBox="0 0 24 24"
                    stroke="#1800F7"
                    fill="none"
                    strokeWidth="2"
                >
                    <circle cx="12" cy="12" r="8" />
                </svg>
                    <div className="item-text">News editor at my <a href="https://thefulcrum.ca/tag/marissa-phul/">university newspaper</a>.</div>
                </li>
            </ul>

            <p className="list-paragraph">
                Say hi via <a href = "mailto:marissaphul@gmail.com">email</a>, <a href="https://github.com/marissap">gihub</a>, <a href="https://www.linkedin.com/in/marissaphul">linkedin</a>, <a href="https://www.instagram.com/os.maris/">instagram</a>, or (most importantly) <a href="https://www.strava.com/athletes/53249155">strava</a>.            
            </p>

            {isOpen && (
                <div className={`modal-backdrop ${visible ? "visible" : ""}`} onClick={closeModal}>
                    <div
                        className={`modal ${visible ? "visible" : ""}`}
                        onClick={(e) => e.stopPropagation()} 
                    >
                        <p>{modalContent[modalId]}</p>
                        <button className="modal-close" onClick={closeModal}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="#1800F7"
                                strokeWidth="2"
                                strokeLinecap="round"
                            >
                                <line x1="4" y1="4" x2="16" y2="16" />
                                <line x1="16" y1="4" x2="4" y2="16" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
