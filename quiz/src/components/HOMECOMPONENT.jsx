import React, { Component } from 'react'
// import './Component.css'
import './QUIZCOMPONENT'
export default class HOMECOMPONENT extends Component {
    render() {
        return (
            <div className="home">
                <h1>Quiz App</h1>
                <div>
                    <button className="play">Play</button>
                </div>
            </div>
        )
    }
}