import React, { Component } from 'react';
class ListTodoComponent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.props.lists.map(item => (
                        <div key={item.id} >
                            <li className="list-group-item">
                                {item.id}
                                {item.todo}
                                <button type="button" className="btn btn-danger btn-xs pull-right" onClick={()=>this.props.removeTodo(item.id)}>
                                    <div className="glyphicon glyphicon-remove"></div>
                                </button>
                                <button type="button" className="btn btn-primary btn-xs pull-right" >
                                    <div className="glyphicon glyphicon-edit"></div>
                                </button>
                            </li>
                        </div>
                    ))
                    }
                </ul>
            </div>
        );
    }
}

export default ListTodoComponent;
