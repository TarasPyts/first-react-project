import React, { Component } from 'react';
import { users } from './database/usersDB';
import UserComponent from './components/UserComponent';

class App extends Component {
  render() {
    return (
      <div>
        {users.map((user, index) => {
          let clsx = index % 2 ? 'even' : 'odd';
          return <UserComponent item={user} cls={clsx} key={index} />;
        })}
      </div>
    );
  }
}

export default App;
