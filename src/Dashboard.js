import React, { Component } from 'react';
import Modal from './Modal';
class Dashboard extends React.Component{
    state={
        isopen:false
    };
    showModal=()=>{
        this.setState({
            isopen:true
        });
    }
    hideModal=()=>{
        this.setState({
            isopen:false
        });
    }
    
    render(){
        console.log('God',this.state.isopen);
        return(
          <div>
              <Modal show={this.state.isopen} handleClose={this.hideModal}>
                   <h1>Parent </h1>
                </Modal>
                
                    
                 { this.state.isopen===false? <button onClick={this.showModal}>
                        Open
                     </button>:null
                 }
                 </div>
                    
                    );
                }
}
export default Dashboard;