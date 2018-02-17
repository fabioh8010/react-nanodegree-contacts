import React, { Component } from 'react'

class ContactList extends Component {
  render () {
    const people = this.props.contacts

    return (
      <ol>
        {people.map(person => (
          <li key={person.name}>
            {person.name}
          </li>
        ))}
      </ol>
    )
  }
}

class App extends Component {
  render () {
    return (
      <div>
        <ContactList contacts={[
          { 'name': 'Michael' },
          { 'name': 'Ryan' },
          { 'name': 'Tyler' }
        ]} />
        <ContactList contacts={[
          { 'name': 'Fabio' },
          { 'name': 'Truck' },
          { 'name': 'Rat' }
        ]} />
        <ContactList contacts={[]} />
      </div>
    )
  }
}

export default App
