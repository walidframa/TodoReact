import React, {useState} from 'react'
import Todo from './Todo'


class TodoList extends React.Component{
    render() {
        const {todo, onDelete, onEdit} = this.props;
        return (
            <ul>
            {
                todo.map((item, index)=>{
                    return <Todo 
                    item={item.todo} 
                    key={index}
                    handleDelete={() => {onDelete(index)}}
                    handleEdit={onEdit}
                    id={index}
                    />
                })
            }
            </ul>
        );
    };
}

export default TodoList
