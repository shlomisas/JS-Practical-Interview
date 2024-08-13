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
    const MyInput: React.FC = () => {
        return (
            <input type="text"/>
        )
    }

    const App: React.FC = () => {

        const onClick = () => {
            console.log('clicked');
        };

        return (
            <div className="App">
                <MyInput/>
            </div>
        );
    };

    ReactDOM.createRoot(document.getElementById('root')!).render(
        <App />
    );


    /**
     * The task: how to make `onClick` work?
     */
})();