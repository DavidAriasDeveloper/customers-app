import React from 'react';
import PropTypes from 'prop-types';

const AppFrame = ({ header, body }) => {
    return (
        <div>
            <div className="app-frame">
                <AppHeader title={ props.header } />
                <div>{ body }</div>
                <div>Aplicación simple de Ejemplo</div>
            </div>
        </div>
    );
};

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired
}