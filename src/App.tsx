import React, { useState } from 'react'
import { BrowserRouter, Route, Redirect, Switch, Router } from 'react-router-dom'
import Login from './Login'
import { createBrowserHistory } from 'history';
import Home from './Home'

const App: React.FC = () => {
    
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const history = createBrowserHistory();
    
    const authenticateLogin = () => {
        if (username === 'foo' && password === 'bar') {
            history.push('/home')
        } else {
            setMessage("Invalid credentials")
        }
    }

    return (
        <>
        <BrowserRouter>
            <Router history={history}>
                <div className="app-container">
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/login" />
                        </Route>

                        <Route path="/login">
                            <Login setUsername={setUsername} setPassword={setPassword} message={message} loginSubmit={authenticateLogin}/>
                        </Route>

                        <Route path="/home">
                            <Home/>
                        </Route>
                        
                        <Route path="/logout">
                            <Redirect to="/login" />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </BrowserRouter>
        </>
    )
}

export default App