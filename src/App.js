import React,{Component} from 'react';
import './App.css';
import Grid from './components/grid'

class App extends Component {

  state={
    data:[]
  }

  componentDidMount(){

    fetch('./data.json')
    .then(response=>response.json())
    .then(data=>this.setState({data}))
  }

  render(){
  
    return (
      <div className="App">
        

        <Grid data={this.state.data}/>
    
         
       
      </div>
    );

  }
  
}

export default App;
