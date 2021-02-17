import React, { Component } from 'react';
import './Components.css'
export default function Result() {
    return (
        <div className="result">
            <h1 className="res">Result</h1>
            <div className="s">
                <h2 className="shead">You need more practice!</h2>
                <h2 className="sscore">Your Score: 20%</h2>
                <div className="smarks">
                    <div className="details">
                        <span>Total number of questions</span>
                        <span>Number of attempted questions</span>
                        <span>Number of correct answers</span>
                        <span>Number of wrong answers</span>
                    </div>
                    <div className="marks">
                        <span>15</span>
                        <span>9</span>
                        <span>3</span>
                        <span>6</span>
                    </div>
                </div>
            </div>
            <div className="btn">
                <button className="playbtn">Play Again</button>
                <button className="backbtn">Back to Home</button>
            </div>
        </div>
    );
}