import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import ListItem from './components/ListItem.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      fortune: undefined
    }
    this.handleButton = this.handleButton.bind(this)
  }

 componentDidMount() {
   axios.get('/items')
   .then(res => {
     console.log('responce of items end point front end :', res);
     this.setState({
       items: res.data
     })
   })
   .catch(err =>{
     console.log('error in item end pint :', err);
   })
    // $.ajax({
    //   url: '/items',
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  handleButton(){
    console.log('hola mundo');
    let randomIndex = Math.floor(Math.random() * 30)
    let fortune = this.state.items[randomIndex]
    this.setState({
      fortune: fortune
    })
  }

  render () {
    return (
      <div>
        <h1>Magic Doggo</h1>
        <List items={this.state.items} handleButton={this.handleButton}/>
        <ListItem item={this.state.fortune} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
