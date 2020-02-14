import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        }
    }

    render() {
        return (
            <div>
            Counter:
                <div>
                    {this.state.counter}
                </div>
            </div>
        )
    }
}

export default Counter;