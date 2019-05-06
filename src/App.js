import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';

class App extends Component {
    
    renderHome = () => <h1>Home</h1>;
    
    renderCustomerContainer = () => <h1>Customer Container</h1>;
    
    renderCustomerListContainer = () => <CustomersContainer/>;
    
    render() {
        return(
            <Router>
                <div class="app">
                    <div className="brand large">
                        <h1>My Customers</h1>
                    </div>
                    <Route exact path="/" component={ HomeContainer }/>
                    <Route exact path="/customers" component={ this.renderCustomerListContainer }/>
                    <Switch>
                        <Route path="/customers/new" component={ NewCustomerContainer }/>
                        <Route path="/customers/:dni" render={ props => <CustomerContainer dni={ props.match.params.dni }/> }/>
                    </Switch>    
                </div>
            </Router>
        );
    }
}

export default App;
