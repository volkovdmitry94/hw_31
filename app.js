const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Counter firstValue={10} min={-5} max={17}/>
                <CounterAdvanced firstValue={0} min={-5} max={17}/>
            </React.Fragment>
        );
    }
}

root.render(<App/>);