import React from 'react';

const ListItem = (props) => (
  <div>
    { props.item ?
      <li>{props.item.description}</li>
    : <li>"empty fortune"</li> }
  </div>
)

export default ListItem;

//  { props.items.map(item => <ListItem key={item.id} item={item}/>)}
//[Math.floor(Math.random() * 2)]
/* function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);*/
