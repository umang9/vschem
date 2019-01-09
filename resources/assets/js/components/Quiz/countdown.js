import React, {Component} from 'react';
import Quiz from "../Quiz/quiz";
import Countdown from 'react-countdown-now';

// Random component
const Completionist = () => {
    return <span>Test</span>;
};
// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
    
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <span>{hours}:{minutes}:{seconds}</span>;
    }
};

class CountdownTimer extends Component {

    constructor(prop){
        super(prop);
        this.state = {
        }
    }

    render() {


        return (
            <div>
                <b>Time Limit:</b> 
                <Countdown  date={Date.now() + 36000} renderer={renderer}/>
            </div>
        );
    }
}

export default CountdownTimer;
