class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: props.firstValue
        };
    }

    clickHandlerDec = () => {
        const oldState = this.state;
        const newState = {...oldState};
        (newState.counter > this.props.min) ? newState.counter-- : alert(`Min Value ${this.props.min} reached!`);
        this.setState(newState);
    }

    clickHandler = () => {
        const oldState = this.state;
        const newState = {...oldState};
        (newState.counter < this.props.max) ? newState.counter++ : alert(`Max Value ${this.props.max} reached!`);
        this.setState(newState);
    }

    render() {
        return (
            <div className={'counter_box'}>
                <h1>Counter</h1>
                <div>
                    <button onClick={this.clickHandlerDec}>-</button>
                    <span>Count: {this.state.counter}</span>
                    <button onClick={this.clickHandler}>+</button>
                </div>
            </div>
        );
    }
}

