
import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
class App extends Component {

    state = {
        characters: [],
    }

    handleSubmit = (character) =>{
      this.setState({characters: [...this.state.characters, character]})
    }
    removerCharacter = (index)=>{
        const {characters} = this.state

        this.setState({
            characters: characters.filter((characters,i)=>{
                return i !== index
            })
        })
    }

    render(){
        const {characters} = this.state
      return(
        <div className="container">
          <Table charactersData={characters} removerCharacter={this.removerCharacter} />
          <Form handleSubmit={this.handleSubmit}/>
        </div>
      )
    }
  }
export default App