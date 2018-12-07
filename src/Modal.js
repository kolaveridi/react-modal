import React, { Component } from 'react';
import './Modal.css';
 export default class Modal extends React.Component{
    render(){
        const{handleClose,show,children}=this.props;
        const showHideClassName=show?"modal display-block" : "modal display-none";
         

        return(
            <div className={showHideClassName}>
             <section className="modal-main">
                {children}
                <button onClick={handleClose}> Close</button>
             </section>
            </div>

        );
    }
}