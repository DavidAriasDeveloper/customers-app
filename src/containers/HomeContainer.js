import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CustomersActions from './../components/CustomersActions';
import AppFrame from './../components/AppFrame';

class HomeContainer extends Component {
    
    handleOnClick = () => {
        console.log("HandleOn Click");
        this.props.history.push('/customers');
    };
    
    render() {
        return(
            <div>
                <AppFrame
                    header="Home"
                    body={
                        <div>
                            Esta es la pantalla inicial
                            <CustomersActions>
                                <button onClick={this.handleOnClick}>Listado de clientes</button>
                            </CustomersActions>
                        </div>
                    }
                ></AppFrame>
            </div>
        );
    };
};

export default withRouter(HomeContainer);