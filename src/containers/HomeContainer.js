import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CustomersActions from './../components/CustomersActions';
import AppFrame from './../components/AppFrame';

class HomeContainer extends Component {
    
    handleOnClick = () => {
        console.log("HandleOn Click");
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

HomeContainer.propTypes = {
    
};

export default HomeContainer;