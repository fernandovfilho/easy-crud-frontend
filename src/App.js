import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

import store from './store';

import Talentform from './components/talentForm';
import TalentList from './components/talentList';
import TalentView from './components/talentView';
import talentEdit from './components/talentEdit';
class App extends Component {
  
  
  render() {
    return (
      <Container>
      <Row>
      <Col>
      <Jumbotron className="Spacer">
      <h1 className="text-center">EASY Communication &#38; Technology</h1>
      <Provider store={store}>
      <BrowserRouter>
      <Switch>
      <Route path="/" exact={true} component={TalentList} />
      <Route path="/talent/add" exact={true} component={Talentform} />
      <Route path="/talent/view/:id" exact={true} component={TalentView} />
      <Route path="/talent/edit/:id" exact={true} component={talentEdit} />
      </Switch>
      </BrowserRouter>
      </Provider>
      </Jumbotron>
      </Col>
      </Row>
      </Container>
      );
    }
  }
  
  export default App;
