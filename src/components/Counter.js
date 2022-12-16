import React from "react";
import { CounterDisplay } from "./counterDisplay";

export class Counter extends React.Component {
    static defaultProps = {
        initialValue: 0,
        incrementBy: 1,
        milSeconds: 1000
      }

    state = {
        count: this.props.initialValue
    };
    
    componentDidMount() {
        this._interval = setInterval(() => {
            this.setState(state => {
                return {
                    count: state.count + this.props.incrementBy
                }
            });
        }, this.props.milSeconds);
    }

    componentDidUpdate() {
        if (this.state.count > 10 * this.props.initialValue)
            this.setState({count: this.props.initialValue});
    }

    componentWillUnmount() {
        clearInterval(this._interval);
    }

    render() {
        return <CounterDisplay count={this.state.count} />;
    }
}