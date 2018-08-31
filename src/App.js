import React, { Component } from 'react';
import { Container, Header, List } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container>
        <Header as="h1"><code>create-react-app</code></Header>
        <List bulleted>
          <List.Item>Can be used with <code>semantic-ui-react</code></List.Item>
          <List.Item>Supports less theming through <code>semantic-ui-less</code></List.Item>
          <List.Item>All other <code>create-react-app</code> features</List.Item>
        </List>
      </Container>
    );
  }
}

export default App;
