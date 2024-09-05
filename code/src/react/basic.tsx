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