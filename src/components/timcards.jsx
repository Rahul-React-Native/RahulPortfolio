import React from "react";
import "./CSS/TimesheetProject.css";

import image1 from "../../public/assets/timcards.jpeg"; // replace with your actual path
import image2 from "../../public/assets/iphone.png";
import image3 from "../../public/assets/googlplay.png";
import image4 from "../../public/assets/appstore.svg";

export default function TimesheetProject() {
    return (
        <div className="project-page">

            {/* TOP NAVIGATION */}
            <nav className="project-nav">
                <div className="proj-logo" onClick={() => window.history.back()}>
                    ← Back
                </div>

                {/* <div className="proj-links">
          <a href="/">Home</a>
          <a href="/#work">My Work</a>
          <a href="/#contact">Contact</a>
        </div> */}
            </nav>

            {/* MAIN HERO SECTION */}
            <section className="project-hero">
                <h1 className="proj-title">Timesheet & Location Tracking App</h1>
                <p className="proj-subtitle">React Native • Redux • Maps • GPS Attendance</p>

                {/* <div className="image-row">
                    <div className="img-box">
                        <img src="/assets/timcards.jpeg" alt="Timesheet App screenshot" />
                    </div>

                    <div >
                        <img src="/assets/iphone.png" alt="Timesheet App screenshot" />
                    </div>
                </div> */}

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center", // centers horizontally
                        alignItems: "center",     // centers vertically if container has height
                        gap: "20px",              // space between images
                        height: "100vh",          // full viewport height
                        backgroundColor: '#0f0018',// optional, match your dark background
                        marginLeft: 400
                    }}
                >
                    <div>
                        <img src={image1} style={{ maxWidth: "300px", width: "100%" }} />
                        <img src={image3} style={{ maxWidth: "300px", width: "100%" }} />
                    </div>
                    <div>
                        <img src={image2} style={{ maxWidth: "1200px", width: "100%" }} />
                        <img src={image4} style={{ maxWidth: "400px", width: "100%" }} />
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
                        <li>Clock In / Clock Out with live time</li>
                        <li>Break management system</li>
                        <li>Project allocation</li>
                        <li>User dashboard & reports</li>
                        <li>Google Maps integration</li>
                    </ul>
                </div>

                <div className="card">
                    <h2>🛠 Tech Stack</h2>
                    <ul>
                        <li>React Native (Expo)</li>
                        <li>Redux Toolkit + Thunk</li>
                        <li>Google Maps API</li>
                        <li>Firebase / Node.js Backend</li>
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
