import 'semantic-ui-css/semantic.min.css'
import logo from './logo.svg';
import './App.css';

import SAC from "./Stock-Avg-Calc"
import { Container, Header, Icon } from 'semantic-ui-react';

function App() {
  return (
<div style={{marginTop: '20px'}}>
    <Container>
      <Header as='h1'>
        Stock Average Calculator
        📈<Icon name='balance scale'></Icon>
        <Icon name='calculator' ></Icon>
      </Header>
      <SAC />
    </Container>
    </div>
  );
}

export default App;
