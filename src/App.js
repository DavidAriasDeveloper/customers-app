import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';

class App extends Component {
    
    renderHome = () => <h1>Home</h1>;
    
    renderCustomerContainer = () => <h1>Customer Container</h1>;
    
    renderCustomerListContainer = () => <CustomersContainer/>;
    
    render() {
        return(
            <Router>
                <div>
                    <Route exact path="/" component={ HomeContainer }/>
                    <Route exact path="/customers" component={ this.renderCustomerListContainer }/>
                    <Switch>
                        <Route path="/customers/new" component={ this.renderCustomerNewContainer }/>
                        <Route path="/customers/:dni" render={ props => <CustomerContainer dni={ props.match.params.dni }/> }/>
                    </Switch>    
                </div>
            </Router>
        );
    }
}

export default App;
