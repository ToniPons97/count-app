import React from "react";

export class Counter extends React.Component {
    static defaultProps = {
        initialValue: 0,
        incrementBy: 1,
        milSeconds: 1000
      }

    state = {
        count: this.props.initialValue
    };
    
    constructor(props) {
        super(props);
        

        setInterval(() => {
            this.setState(state => {
                return {
                    count: state.count + this.props.incrementBy
                }
            });
        }, this.props.milSeconds);
    }

    render() {
        return <h1>Count: {this.state.count}</h1>
    }
}