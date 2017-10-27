import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './index.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/">Teste Seu gado</Link>
      </div>
    );
  }
}

class User extends React.Component {
  render() {
    return (
      <div className="user">
        <img src="https://d2ilca3l8e0i75.cloudfront.net/news/1/aPLbdsJUD4rqC1O8BLrFFS2TnFwgs9GW1WLewFwX-list-mobile.jpeg" alt="user"/>
        Gustavo
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
      <div>
        <img src="https://d2ilca3l8e0i75.cloudfront.net/news/1/aPLbdsJUD4rqC1O8BLrFFS2TnFwgs9GW1WLewFwX-list-mobile.jpeg" alt="Teste"/>
      </div>
    );
  }
}

class SeuGado extends React.Component {
  render() {
    return (
      <div className="content">
        <Header />
        <User />
        <textarea placeholder="Faça uma postagem..."/>
        <div className="cards">
            <Link className="card" to="/card"><Card /></Link>
            <Link className="card" to="/card"><Card /></Link>
            <Link className="card" to="/card"><Card /></Link>
        </div>
      </div>
    );
  }
}

class SeuGado2 extends React.Component {
  render() {
    return (
      <div className="content">
        <Header />
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/" component={SeuGado} />
        <Route path="/card" component={SeuGado2} />
      </div>
    </Router>,
    document.getElementById('root')
);
