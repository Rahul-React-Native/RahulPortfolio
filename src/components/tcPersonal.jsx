import React from "react";
import "./CSS/TcPersonal.css";

import image1 from "../../public/assets/creating-geofencing.jpeg"; // replace with your actual path
import image2 from "../../public/assets/iphone.png";
import image3 from "../../public/assets/googlplay.png";
import image4 from "../../public/assets/appstore.svg";

export default function TcPersonalScreen() {
    return (
        <div className="project-page">

            {/* TOP NAVIGATION */}
            <nav className="project-nav">
                <div className="proj-logo" onClick={() => window.history.back()}>
                    ← Back
                </div>

        
            </nav>

            {/* MAIN HERO SECTION */}
            <section className="project-hero">
                <h1 className="proj-title">Timecard personal App</h1>
                <p className="proj-subtitle">React Native • Redux • Maps • GPS Attendance</p>


                <div
                    style={{
                        display: "flex",
                        justifyContent: "center", // centers horizontally
                        alignItems: "center",     // centers vertically if container has height
                        gap: "20px",              // space between images
                        height: "100vh",          // full viewport height
                        backgroundColor: '#0f0018',// optional, match your dark background
                        marginLeft: 400,
                        alignSelf: 'center'
                    }}
                >
                    <div>
                        <img src={image1} style={{ maxWidth: "300px", width: "100%" }} />
                        <a href="https://play.google.com/store/apps/details?id=com.geotimecard_personal" target="_blank" rel="noopener noreferrer">
                            <img
                                src={image3}
                                style={{ maxWidth: "300px", width: "100%" }}
                                alt="GT Card App"
                            />
                        </a>
                    </div>
                    <div style={{ marginBottom: '180px' }}>
                        <img src={image2} style={{ maxWidth: "1100px", width: "100%", marginBottom: '190px' }} />
                        <a href="https://apps.apple.com/us/app/timecards-personal/id6743415483" target="_blank" rel="noopener noreferrer">
                            <img
                                src={image4}
                                style={{
                                    maxWidth: "400px",
                                    width: "100%",
                                    height: "120px",
                                    marginLeft: 350,
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
                    <h2>📱 Project Overview</h2>
                    <p>
                        A production-ready mobile application built for employee attendance,
                        GPS validation, project allocation, break system, and real-time
                        tracking. Designed for Android & iOS using React Native.
                    </p>
                </div>

                <div className="card">
                    <h2>✨ Key Features</h2>
                    <ul>
                        <li>GPS-based attendance</li>
                        <li>Auto Clock In / Clock Out with live time</li>
                        <li>Break management system</li>
                        <li>Project allocation</li>
                        <li>User dashboard & reports</li>
                        <li>Google Maps integration</li>
                    </ul>
                </div>

                <div className="card">
                    <h2>🛠 Tech Stack</h2>
                    <ul>
                        <li>React Native cli</li>
                        <li>Redux Toolkit + Sagas</li>
                        <li>Google Maps API</li>
                        <li>Firebase</li>
                    </ul>
                </div>

                <div className="card">
                    <h2>👨‍💻 My Role</h2>
                    <p>
                        Designed UI/UX, developed the entire app, integrated location
                        services, authentication, maps, and project modules. Optimized for
                        both Android & iOS platforms.
                    </p>
                </div>
            </section>

        </div>
    );
}
