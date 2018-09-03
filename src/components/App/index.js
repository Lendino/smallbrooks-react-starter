import React, { Component } from 'react';
import { Container, Header, List, Divider } from 'semantic-ui-react';

class App extends Component {
    render() {
        return (
            <Container>
                <Divider hidden />
                <Header as="h1"><code>smallbrooks-react-starter</code></Header>
                <List bulleted>
                    <List.Item>Based on <code>create-react-app</code></List.Item>
                    <List.Item>Can be used with <code>semantic-ui-react</code></List.Item>
                    <List.Item>Supports LESS theming through <code>semantic-ui-less</code></List.Item>
                    <List.Item>All other <code>create-react-app</code> features</List.Item>
                </List>
            </Container>
        );
    }
}

export default App;
