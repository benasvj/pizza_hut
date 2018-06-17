import React from 'react';
import Home from './components/Home';
import Pizza from './components/Pizza';
import Drinks from './components/Drinks';
import CheckOut from './components/CheckOut';
import NotFound from './components/NotFound';
import Header from './components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class AppRoutes extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route path='/' component = {Home} exact/>
                        <Route path='/pizza' component = {Pizza}/>
                        <Route path='/drinks' component = {Drinks}/>
                        <Route path='/checkout' component = {CheckOut}/>
                        <Route component = {NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    };
};

export default AppRoutes;