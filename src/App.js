import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      lista: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/projetos")
      .then(res => res.json())
      .then((result) => {
        this.setState({ lista: result.data })
      });
  }

  render() {
    return (
      <>
        <div className="ui inverted fixed huge menu">
          <div className="ui container">
            <a href="index.html" className="item">CraudioFunding</a>
            <button className="ui primary button">criar projeto</button>
            <div className="ui icon input right menu">
              <input type="text" placeholder="procurar projeto..." />
              <i aria-hidden="true" className="search icon"></i>
            </div>
          </div>
        </div>
        <div className="ui stackable three column grid" id="grid-projetos">
          {
            this.state.lista.map(function (projeto) {
              return (
                <div className="column" >
                  <div className="ui card centered">
                    <div className="image"><img src="https://picsum.photos/600" alt="" /></div>
                    <div className="content">
                      <img src="https://randomuser.me/api/portraits/women/90.jpg" className="ui right floated avatar image" alt="" />
                      <div className="header">{projeto.nome}</div>
                      <div className="meta"><span className="date">{projeto.usuario}</span></div>
                      <div className="description">{projeto.descricao}</div>
                    </div>
                    <div className="content">
                      <span>
                        <i aria-hidden="true" className="chat icon"></i>10 comentários
                      </span>
                      <a href="index.html" className="right floated">
                        <i aria-hidden="true" className="heart icon"></i>5 likes
                      </a>
                    </div>
                    <div class="extra content">
                      <div class="ui large transparent left icon input">
                        <i class="heart outline icon"></i>
                        <input type="text" placeholder="adicionar comentário..." />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>

      </>
    );
  }
}
export default App;
