import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {
    state = {
        categoria : ''
    }

    handleCategoria = e => {
        this.setState({
            categoria : e.target.value
        }, () => {
            // Pasar a la pagina principal
            this.props.consultarNoticias(this.state.categoria);
        });
    }

    componentDidMount() {
        this.setState({categoria : 'general'});
    }

    render() { 
        return ( 
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Encuentra noticias por categoría</h2>
                        <div className="input-field col s12">
                            <select
                                onChange={this.handleCategoria}
                            >
                                <option value="general">General</option>
                                <option value="business">Negocios</option>
                                <option value="technology">Tecnología</option>                              
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Formulario.propTypes = {
    consultarNoticias : PropTypes.func.isRequired
}
 
export default Formulario;