// @ts-ignore
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom/client';

(() => {

    const Header: React.FC = () => {
        return (
            <header>
                Hello <span>John</span>!
            </header>
        )
    }

    const Form: React.FC = () => {
        return (
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/>
                    <button type="submit">Submit</button>
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email"/>
                    <button type="submit">Submit</button>
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password"/>
                    <button type="submit">Submit</button>
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }

    const App: React.FC = () => {
        return (
            <div className="App">
                <Header/>
                <Form/>
            </div>
        );
    };

    ReactDOM.createRoot(document.getElementById('root')!).render(
        <App />
    );


    /**
     * The task:
     * 1. implement form submit logic to a backend server
     *  1.1. the backend URL is `POST https://example.com/api { name: string, email: string, password: string }`
     *  1.2. the backend response is `{ id: string, name: string, email: string, token: string }` - token is JWT
     * 2. show spinner while waiting for the response
     * 3. after backend response, save make sure Component displays the user's name dynamically
     * 4. make sure it works also after page refresh
     */
})();