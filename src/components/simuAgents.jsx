import React from "react";
import "./CSS/TimesheetProject.css";

import image1 from "../../public/assets/androidSimu.jpeg"; // replace with your actual path
import image2 from "../../public/assets/iphoneSimu1.png";
import image3 from "../../public/assets/googlplay.png";
import image4 from "../../public/assets/appstore.svg";
import Navbar from "./Navbar";

export default function SimuAgentsProject() {
    return (
        <div className="project-page">

            {/* TOP NAVIGATION */}
            <nav className="project-nav">
                <div className="proj-logo" onClick={() => window.history.back()}>
                    ← Back
                </div>


            </nav>


            <section className="project-hero">
                I<h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">SimuAgents App</h1>
                <p className="max-w-2xl mx-auto font-Ovo">React Native • Redux • Firebase </p>



                <div
                    style={{
                        display: "flex",
                        justifyContent: "center", // centers horizontally
                        alignItems: "center",     // centers vertically if container has height
                        // gap: "20px",              // space between images
                        height: "120vh",          // full viewport height
                        backgroundColor: '#0f0018',// optional, match your dark background
                        marginLeft: 400,
                        alignSelf: 'center'
                    }}
                >
                    <div>
                        <img src={image1} style={{ maxWidth: "300px", width: "100%", height: "600px" }} />
                        <a href="https://play.google.com/store/apps/details?id=com.timecards.ai" target="_blank" rel="noopener noreferrer">
                            <img
                                src={image3}
                                style={{ maxWidth: "300px", width: "100%" }}
                                alt="GT Card App"
                            />
                        </a>
                    </div>
                    <div style={{ marginBottom: '170px' }}>
                        <img src={image2} style={{ maxWidth: "950px", width: "100%", marginBottom: '200px' }} />
                        <a href="https://apps.apple.com/us/app/simuagents/id6745402562" target="_blank" rel="noopener noreferrer">
                            <img
                                src={image4}
                                style={{
                                    maxWidth: "400px",
                                    width: "100%",
                                    height: "120px",
                                    marginLeft: 300,
                                    marginTop: '-150px'
                                }}
                                alt="GT Card App"
                            />
                        </a>

                    </div>
                </div>
            </section>

            {/* DETAILS */}
            <section className="project-details">
                <div className="card">
                    <h2 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">📱 Project Overview</h2>
                    <p className="max-w-2xl mx-auto font-Ovo">
                        A production-ready mobile application built to support both HR and technical operations. 
                        Simu HR helps employees with HR-related queries, while Simu Tech assists with technical issues and troubleshooting. 
                        Designed for Android and iOS using React Native.
                    </p>
                </div>

                <div className="card">
                    <h2 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">✨ Key Features</h2>
                    <ul className="max-w-2xl mx-auto font-Ovo space-y-2">
                        <li>Simu HR support for HR-related employee queries</li>
                        <li>Simu Tech assistance for technical issues and troubleshooting</li>
                        <li>Centralized platform for both HR and tech operations</li>
                        <li>Employee helpdesk system with quick response flow</li>
                        <li>Cross-platform support for Android & iOS</li>
                        <li>Built using React Native for optimized performance</li>
                    </ul>
                </div>

                <div className="card">
                    <h2 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">🛠 Tech Stack</h2>
                    <ul className="max-w-2xl mx-auto font-Ovo">
                        <li>React Native cli</li>
                        <li>Redux Toolkit + Sagas</li>
                        <li>axios</li>
                        <li>Firebase</li>
                    </ul>
                </div>

                <div className="card">
                    <h2 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">👨‍💻 My Role</h2>
                    <p className="max-w-2xl mx-auto font-Ovo">
                        Designed UI/UX, developed the entire app, integrated location
                        services, authentication, maps, and project modules. Optimized for
                        both Android & iOS platforms.
                    </p>
                </div>
            </section>

        </div>
    );
}
