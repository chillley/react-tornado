import React from 'react'
import './App.css'
import routes from './routes'
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom'


export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <Link to={'/login'}>login</Link>
                    <Link to={'/main'}>main</Link>
                </div>
                <Switch>
                    {
                        routes.map(route => <Route key={route.key} path={route.path} component={route.component}/>)
                    }
                </Switch>
            </BrowserRouter>
        </div>
    )
}
