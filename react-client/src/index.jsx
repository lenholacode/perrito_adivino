import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import ListItem from './components/ListItem.jsx';

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
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
//<Greeting isLoggedIn={false} />
  handleButton(){
    let randomIndex = Math.floor(Math.random() * 2)
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
