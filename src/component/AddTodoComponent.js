import React from 'react';

const AddTodoComponent = (props)=>(
    <form onSubmit={props.handleAddTodo.bind(this)}>
        <input name="TodoList" type="text" placeholder="To do Something...."
               onChange={props.handleInputChange.bind(this)}/>&nbsp;&nbsp;
        <button type="submit" className="btn btn-primary">Add
        </button>
    </form>
);

export default AddTodoComponent;