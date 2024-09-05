// @ts-ignore
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom/client';

(() => {
    const Header: React.FC = () => {
        return (
            <header>Hello <span>John</span>!</header>
        )
    }

    const App: React.FC = () => {
        return (
            <div className="App">
                <Header/>
            </div>
        );
    };

    ReactDOM.createRoot(document.getElementById('root')!).render(
        <App />
    );


    /**
     * The task: how to provide Header with a dynamic user's name?
     */
})();

(() => {
    function Counter() {
        const [count, setCount] = useState(0);

        const increment = () => {
            setCount(count + 1);
            setCount(count + 1);
            setCount(count + 1);
        };

        return (
            <div>
                <p>Count: {count}</p>
                <button onClick={increment}>Increment</button>
            </div>
        );
    }

    /**
     * Task:
     *  1. Explain why clicking the button only increments the count by 1, not 3.
     *  2. How would you modify the increment function to actually increment by 3?
     */
})();

(() => {
    function ExpensiveComponent({ data }) {
        console.log('ExpensiveComponent rendered');
        return <div>{data.join(', ')}</div>;
    }

    function App() {
        const [count, setCount] = useState(0);
        const data = [1, 2, 3];

        return (
            <div>
                <button onClick={() => setCount(count + 1)}>
                    Clicked {count} times
                </button>
                <ExpensiveComponent data={data} />
            </div>
        );
    }

    /**
     * Task:
     *  1. ExpensiveComponent re-renders on every button click, even though its props haven't changed.
     *  2. How would you optimize this to prevent unnecessary re-renders?
     */
})();