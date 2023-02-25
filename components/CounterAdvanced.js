class CounterAdvanced extends React.Component {
    constructor(props) {
        super(props);
        this.numberInput = React.createRef();
        this.state = {
            counter: props.firstValue
        };
    }
    changeHandler = () => {
        const oldState = this.state;
        const newState = {...oldState};
        const newValue = this.numberInput.current.value;
        if (newValue < this.props.min || newValue > this.props.max) {
            alert (`Your value must be between ${this.props.min} and ${this.props.max}`);
        } else {
            newState.counter = newValue;
        }
        this.setState(newState);
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
                <h1>Advanced Counter</h1>
                <div>
                    <button onClick={this.clickHandlerDec}>-</button>
                    <input onChange={this.changeHandler} type="number" ref={this.numberInput} value={this.state.counter}/>
                    <button onClick={this.clickHandler}>+</button>
                </div>
            </div>
        );
    }
}