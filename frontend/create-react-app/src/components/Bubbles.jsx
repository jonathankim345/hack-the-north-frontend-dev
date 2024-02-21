import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css'

function Bubbles() {

    const bubbleValues = [11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 18, 21, 15, 13, 26, 17, 13, 28];

    const renderBubbleSpans = () => {
        return bubbleValues.map((value, index) => (
            <span key={index} style={{ '--i': value }}></span>
        ));
    };

    return (
        <div className="BubbleContainer">
            <div className="Bubbles">
                {renderBubbleSpans()}
                {renderBubbleSpans()}
            </div>
        </div>
    )
}

export default Bubbles;