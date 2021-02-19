import React, { Component } from 'react';
import Container from './Components/Container/Container';
import Contacts from './Components/Contacts/Contacts';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
  };

  handleName = e => {
    const currentInput = e.currentTarget.name;
    this.setState({ [currentInput]: e.target.value });
  };

  addToContact = e => {
    e.preventDefault();
    const randomId = shortid.generate();
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { name: this.state.name, number: this.state.number, id: randomId },
        ],
      };
    });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <form onSubmit={this.addToContact}>
          <label>
            {' '}
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleName}
              required
            />
            <label>
              Number
              <input
                type="number"
                name="number"
                value={this.state.number}
                onChange={this.handleName}
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </label>
        </form>
        <h2>Contacts:</h2>
        <Contacts contacts={this.state.contacts} />
      </Container>
    );
  }
}

export default App;
