import React,{Component} from 'react';
import Cardlist from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import './App.css';

class App extends Component{
  constructor()
  {
    super();
    this.state={
      monsters:[],
      searchField: ''
    };
    
  }
  handleChange=(e)=>
  {
    this.setState({searchField: e.target.value})
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response){  return response.json()})
    .then(users => this.setState({monsters: users}))
  }
  componentDidUpdate()
  {
    console.log(this.state)
  }
  render()
 { 
  const {monsters,searchField}=this.state;
  const filteredMonsters = monsters.filter(monster=> 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
   )
  return (
    <div className="App">
      <h1> Monster Rolodex </h1>
       <SearchBox placeholder="search monsters" handleChange={this.handleChange}></SearchBox>
       <Cardlist monsters={filteredMonsters}/>
    </div>
  );
}
}

export default App;
