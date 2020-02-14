import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      lista: [
        {
          nome: "Projeto 1",
          descricao: "descrição do projeto 1",
          usuario: "Nome do Autor"
        }
      ]
    };
  }

  render() {
    return (
      <>
        <div class="ui menu inverted fixed">
          <a class="item">CraudioFunding</a>
          <button class="ui button primary">
            criar projeto
      </button>
          <div class="ui icon input">
            <input type="text" placeholder="procurar projeto..." />
            <i aria-hidden="true" class="search icon"></i>
          </div>
        </div>

        <div class="ui grid three column container">
          <div class="column">
            <div class="ui card">
              <div class="image"><img src="/images/avatar/large/matthew.png" /></div>
              <div class="content">
                <div class="header">Matthew</div>
                <div class="meta"><span class="date">Joined in 2015</span></div>
                <div class="description">Matthew is a musician living in Nashville.</div>
              </div>
              <div class="extra content">
                <a>
                  <i aria-hidden="true" class="user icon"></i>
                  22 Friends
            </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
