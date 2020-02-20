import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 4,
        }

        this.updateCounter = () => {
            if(this.state.counter > 1) {
                this.setState({counter: this.state.counter - 1})
            } else {
                this.setState({counter: 'Complete!'})
            }
        }
    }

    render() {
        return (
            <div onClick={this.updateCounter}>
                {this.state.counter}
            </div>
        )
    }
}

export default Counter;