import React,{Component} from 'react';
import {
    Card, CardBody,
    CardTitle
  } from 'reactstrap';
  import ImageDetails from './ImageDetails';
  import './grid.css';

class Grid extends Component{
  state={
    selectedImage:-1,
    show:false
   
  }

  showImage(id){
    console.log("ID IS", id);
    this.setState({selectedImage:id});
    this.setState({show:true})
  }
  handleClose  = () => {
    console.log("close ")
    this.setState({show:false})
  }


        render(){
      
         
        
          return(<div className='card-columns'>
             {   this.state.setSelectedImage !==-1 && this.props.data[this.state.selectedImage]? <ImageDetails url={this.props.data[this.state.selectedImage].Image} handleClose={this.handleClose} show={this.state.show}/>:null}
          {this.props.data.map((item,index)=>{
              return(
                
                  <div className='card-container'>
                  <Card key={index} >
            
                  
                  <div className="text-center"><img src={item.Thumbnail} className="rounded" alt="..." onClick={(e)=>this.showImage(index)}/></div>
                  <CardBody>
                    <CardTitle>{`Name:${item.Name}`}</CardTitle>
                    <CardTitle>{`Location: ${item.Location}`}</CardTitle>
                    <CardTitle>{`Established on: ${item.Established}`}</CardTitle>
                    <CardTitle>{`Area: ${item.Area}`}</CardTitle>
                    <CardTitle>{`Visitors:  ${ item[ `Recreation visitors` ]}`}</CardTitle>
                  
                    <div class="card-footer">{item.Description} </div>
                    
                  </CardBody>
                </Card>
                </div>
              
              )
          })}
          
        </div>)

                 

  

        }

}
export default Grid;

