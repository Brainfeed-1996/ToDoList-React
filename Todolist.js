import React, { Component } from 'react';

class Todolist extends Component {
    constructor(){
        super();
        this.state={
            userInput: '',
            items: []
        }
    }
    onChange(event){
        this.setState({
            userInput: event.target.value
        });
    }

    addToDo(event){
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }

    deleteTodo(event){
        event.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(event.target.value);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    renderTodos(){
        return this.state.items.map((item) => {
            return(
                <div key={item}>
                    {item} | <button onClick={this.deleteTodo.bind(this)}>X</button>
                </div>
            );
        });
    }

    render(){
        return(
            <div>
                <h1>Ma To Do List</h1>
                <form>
                    <input 
                    value={this.state.userInput} 
                    type="text" 
                    placeholder="Renseigner un item"
                    onChange={this.onChange.bind(this)}
                    />
                    <button onClick={this.addToDo.bind(this)}>Ajouter</button>
                </form>
                <div>
                    {this.renderTodos()}
                </div>
            </div>
        );
    }
}
export default Todolist;
