import React from "react";
import "./Card.css";

import Button from "../Button/Button";

export default function Card() {
    return (
        <main>
            <div className="card-header">
                <img src="images/portrait.PNG" alt="Gabriel Hamdan portrait" />
                <div>
                    <h1>Gabriel Hamdan</h1>
                    <h3>Frontend Developer</h3>
                    <a href="https://gabrielhamdan.github.io/portfolio/" target="_blank" className="portfolio-link">gabrielhamdan.github.io/portfolio</a>
                </div>
                <div className="btn-container">
                    <Button icon={"fa-solid fa-envelope"} url={"mailto:gabriel_hamdan@hotmail.com"} label="Email" color={"#374151"} />
                    <Button icon={"fa-brands fa-linkedin"} url={"https://www.linkedin.com/in/gabriel-hamdan"} label="LinkedIn" backgroundColor={"#5093E2"} color={"white"} />
                </div>
                <div className="text">
                    <div className="text-container">
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga architecto non, sequi quod dignissimos cum dolorum, explicabo error earum rem maiores voluptate vitae molestias aliquid odio est aspernatur suscipit? Odio.</p>
                    </div>
                    <div className="text-container">
                        <h2>Interests</h2>
                        <p>Ut saepe deleniti velit nobis quam placeat architecto, aut dolorem cumque, culpa, optio fugit quibusdam incidunt enim sapiente libero ratione cupiditate sed!</p>
                    </div>
                </div>
                <div className="social-media">
                    <i className="fa-brands fa-twitter-square"></i>
                    <i className="fa-brands fa-facebook-square"></i>
                    <i className="fa-brands fa-instagram-square"></i>
                    <a href="https://github.com/gabrielhamdan" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github-square"></i>
                    </a>
                </div>
            </div>
        </main>
    )
}