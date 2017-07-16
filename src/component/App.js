import React, { Component } from 'react';
import AddTodoComponent from './AddTodoComponent';
import ListTodoComponent from './ListTodoComponent';

let id = 100;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [
                {id: 1, todo: "danh rang"},
                {id: 2, todo: "rua mat"},
                {id: 3, todo: "tap the duc"},
                {id: 4, todo: "len giuong di ngu"}]
        };

    }

    handleAddTodo(event){
        event.preventDefault();
        this.addToDo(this.state.content);
    }

    addToDo(content){
        id++;
        let item = {
            id: id,
            todo: content
        };
        this.setState({
            lists:[...this.state.lists, item]
        });
    }

    handleInputChange(event){
        const content = event.target.value;
        this.setState({
            content:content
        })
    }

    removeTodo(id){
        let lists = this.state.lists;
        let index = lists.findIndex(itemValue => {
            return itemValue.id == id
        })
        this.setState(
            {
                lists: [
                    ...lists.slice(0, index),
                    ...lists.slice(index + 1)
                ]
            }
        );
    }

    render() {
        return (
            <div className="container">
                <h1>Add Todo/Redux</h1>
                <AddTodoComponent handleInputChange = {this.handleInputChange.bind(this)} handleAddTodo={this.handleAddTodo.bind(this)}/>
                <h1>List Todo </h1>
                <ListTodoComponent lists ={this.state.lists} removeTodo={this.removeTodo.bind(this)} />
            </div>
        );
    }
}

export default App;
