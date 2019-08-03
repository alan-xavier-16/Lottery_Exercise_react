import React, { Component } from 'react';
import LottoBall from './LottoBall';
import './Lottery.css';

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    }

    constructor(props) {
        super(props);
        this.state = { nums: Array.from({length: this.props.numBalls}, (el, ind) => ind)}
        this.handleClick = this.handleClick.bind(this);
    }

    // Function updates the nums array with random numbers from 1 to 'maxNum'
    generate() {
        this.setState(currentState => ({
            nums: currentState.nums.map(
                n => Math.floor(Math.random() * this.props.maxNum) + 1
            )
        }))
    };

    handleClick() {
        this.generate();
    }

    render() {
        const props = this.props;
        return(
            <div className="Lottery">
                <h1>{props.title}</h1>
                <div>
                    {
                        this.state.nums.map(ballNum => <LottoBall num={ballNum} />)
                    }
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </div>
        );
    }
}

export default Lottery;