import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import UserForm from './components/UserForm'
import axios from 'axios'

class App extends Component {

  state = {
    name: '',
    repos: 0
  }

 nameSearch = (e) => {
   e.preventDefault();
   const name = e.target.elements.name.value;
   this.setState({name})
   if(name){
     axios.get(`https://api.github.com/users/${name}`)
          .then(res => {
            const repos = res.data.public_repos;
            this.setState({repos})
          })
   }
 }

  render() {
    return (
      <div className="App">
        <Header />
        <UserForm nameSearch={this.nameSearch}/>
        {this.state.name !== ''? <p>{this.state.name}'s # of repo is {this.state.repos}</p> : <p>Please input valid name</p>}
      </div>
    );
  }
}

export default App;
