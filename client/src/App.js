import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Container, Row, Nav } from 'reactstrap';

import HomePage from './containers/HomePage'
import Blog from './containers/Blog/Blog';
import PlayList from './containers/PlayList';
import AppNavbar from './components/AppNavbar';
import ListModal from './components/PlayList/ListModal';
import SongModal from './components/PlayList/SongModal';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  app = () => {
    return (
      <section className="jumbotron-header mb-3 mt-n4">
        <h1 className="jumbotron-heading display-4 text-white text-center">My PlayList App</h1>
        <p className="lead text-white text-center">Manage your Music Playlist by adding and deleting items</p>
        <Container className="col-sm-8">
          <Nav tabs className="justify-content-center mb-3"></Nav>
          <Row>
            <ListModal />
            <SongModal />
          </Row>
          <PlayList />
        </Container >
      </section>
    )
  }

  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <AppNavbar />
            <Switch>
              <Route exact path="/app" component={this.app} />
              <Redirect from="/blog/home" to="/blog" />
              <Route path="/blog" component={Blog} />
              <Route exact path="/" component={HomePage} />
            </Switch>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
