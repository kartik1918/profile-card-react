import React from "react"

export default function Card() {
    return (
        <main className="content">
            <h2>Kartik Gupta</h2>
            <p className="designation">Frontend Developer</p>
            <p className="website">kartikgupta.website</p>
            <div className="buttons">
                <button className="email">
                    <i className="fas fa-envelope"></i>
                    Email   
                </button>
                <button className="prof-social">
                    <i className="fab fa-linkedin"></i>
                    LinkedIn
                </button>
            </div>
            <div className="info">
                <p className="para-title">About</p>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <p className="para-title">Interests</p>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </main>
    )
}