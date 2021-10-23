import React, { Component } from "react";


class Form extends Component {

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () =>{
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    initialState = {
        nome: '',
        trabalho: '',
    }

    state = this.initialState
    render() {
        
        const {nome, trabalho}= this.state

        return (
            <form>
                <label htmlFor="nome"> Nome</label>

                <input
                type="text"
                name="nome"
                id="nome"
                value={nome}
                onChange = {this.handleChange}/>
                <label htmlFor="trabalho">Trabalho</label>
                <input
                    type="text"
                    id="trabalho"
                    name="trabalho"
                    value={trabalho}
                    onChange={this.handleChange}/>
                <input
                    type="button"
                    value="Submit"
                    onClick={this.submitForm}/>
            </form>
        )
    }
}

export default Form