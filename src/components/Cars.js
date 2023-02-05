import React from 'react';
import PropTypes from 'prop-types';

function Cars({ name, onClick }) {
    return <div style={{width: 250, cursor: 'pointer'}} onClick={onClick}>
        <div style={{color: 'white', fontSize: 24}}>Name: <b style={{ color: '#8f7cec' }}>{name}</b></div>
    </div>
};

Cars.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string
};

Cars.defaultProps = {
    onClick: () => { },
    name: 'goida'
};

export default Cars;