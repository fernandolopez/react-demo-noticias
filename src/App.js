import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias'
import Formulario from './components/Formulario'

class App extends Component {
  state = { 
    noticias: []
  }

  consultarNoticias = async (categoria = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=151292c0f3904f7bb7f229cdc8f0e5aa`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias : noticias.articles
    });
  }

  componentDidMount() {
    this.consultarNoticias();  
  }

  render() { 
    return (
      <Fragment>
        <Header
          titulo="Noticias React API"
        />
        <div className="container white contenedor-noticias">
          <Formulario
            consultarNoticias={this.consultarNoticias}
          />
          <ListaNoticias
            noticias={this.state.noticias}
          />
        </div>
      </Fragment>
    );
  }
}
 
export default App;