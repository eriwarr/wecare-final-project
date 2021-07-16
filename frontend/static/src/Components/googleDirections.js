import { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class GoogleDirections extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
    }
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal(address){
    console.log(address)
  }

  render(){
    return(
      <>
        <button type="button" onClick={()=> this.handleModal("testing")}>Testing</button>
      </>
    )
  }
}
export default GoogleDirections;
