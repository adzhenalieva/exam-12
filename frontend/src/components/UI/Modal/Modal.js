import React, {Fragment} from 'react';
import BackDrop from "../Backdrop/Backdrop";


import './Modal.css';


const Modal = props => {
    return (
        <Fragment>
            <BackDrop show={props.show} onClick={props.close}/>
            <div
                className="Modal"
                style={
                    {
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }
                }>
                <button onClick={props.close}>X</button>
                {props.children}
            </div>
        </Fragment>
    );
};

export default Modal;
