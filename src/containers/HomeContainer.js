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
            <>
                <AppFrame
                    header="Bienvenido"
                    body={
                        <>
                            Administra los clientes de tu negocio de la forma más rápida y sencilla posible desde la comodidad de tu oficina
                            <CustomersActions>
                                <button class="primary" onClick={this.handleOnClick}>Listado de clientes</button>
                            </CustomersActions>
                        </>
                    }
                ></AppFrame>
                <footer>
                    Esta es una aplicacion desarrollada por Luis David Arias Manjarrez
                </footer>
            </>
        );
    };
};

export default withRouter(HomeContainer);