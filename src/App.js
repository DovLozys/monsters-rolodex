import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          id: '1oi32jh',
          name: 'Dov'
        },
        {
          id: 'a1i32jh',
          name: 'Linda'
        },
        {
          id: 'a1oi3jh',
          name: 'Red'
        },
        {
          id: 'a1oi32j',
          name: 'Jackie'
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
