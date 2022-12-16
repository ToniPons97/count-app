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
        setInterval(() => {
            this.setState(state => {
                return {
                    count: state.count > 10 * this.props.initialValue
                            ? this.props.initialValue
                            : state.count + this.props.incrementBy
                }
            });
        }, this.props.milSeconds);
    }

    render() {
        return <CounterDisplay count={this.state.count} />;
    }
}