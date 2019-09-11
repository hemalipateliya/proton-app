import React,{Component} from 'react'; 
import {Modal,Button} from 'react-bootstrap';


class ImageDetails  extends Component{
    render()
    {
      console.log(this.props)
      return ( <Modal show={this.props.show} onHide={this.props.handleClose} animation={false}>
        <Modal.Header >
          <Modal.Title>Image</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={this.props.url} alt="big" height="35%" width="100%"></img></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>)
    }
}

export default ImageDetails;