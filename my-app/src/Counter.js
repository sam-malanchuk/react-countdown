import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            setCounter: 0,
            counter: 4,
        }

        // minus one every time the counter is clicked
        this.updateCounter = () => {
            if(this.state.counter > 1) {
                this.setState({counter: this.state.counter - 1})
            // if the counter is already at zero then keep it there
            } else {
                this.setState({counter: 0})
            }
        };

        // Set the counter back to the setCounter value
        this.resetCounter = () => this.setState({counter: this.state.setCounter});
    }

    render() {
        return (
            <div>
                <div className="counterBox" onClick={this.updateCounter}>
                    {this.state.counter}
                </div>
                <div>
                    <button onClick={this.resetCounter}>Reset Counter</button>
                </div>
            </div>
        )
    }
}

export default Counter;