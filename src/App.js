import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
import { Robots } from './Robots';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

import { setSearchfield, requestRobots } from './action';

const mapStateToProps = state => {
  return {
    Searchfield: state.searchRobots.searchField,
    Robots: state.requestRobots.Robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
    onRequestRobots: ()=>  dispatch(requestRobots())

  }
}
class App extends Component {
  constructor(){
    super()
    this.state= {
      Robots: [],
      Searchfield: ''

    }
    
  }

onSearchChange = (event)=>{
    this.setState({Searchfield: event.target.value})
      
  }



  componentDidMount(){
    
    fetch('https://jasonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(users=>{ this.setState({Robots:users})
      })
    this.setState({Robots: Robots});
    
  }

  

  render(){

    const filteredRobots = this.state.Robots.filter(Robots=>{
      return Robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
    })

    


    return(
      <div className='tc'>
        <h1>Robofriends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <Cardlist Robots={filteredRobots}/>
          </ErrorBoundary>  
        </Scroll>
      </div>
    );
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(App);