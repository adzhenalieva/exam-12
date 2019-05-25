import React from 'react';
import './Backdrop.css';

const BackDrop = props => (
    props.show ? <div className="Backdrop" onClick={props.onClick}/> : null
);

export default BackDrop;