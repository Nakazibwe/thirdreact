import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
    getStyle = () => {
      return {
          background:'#f4f4f4',
          padding:'10px',
          borderBottom: '1px #ccc dotted',
          textDecoration: this.props.todo.completed ? 'line-through': 'none',

      }
    }
    markComplete = () => {

    }
    render() { 
        const {id,title} = this.props.todo
        return (
            <div style = {this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{''}
               <label style={{marginLeft:'10px'}}>{title}</label>
               <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>X</button>
            </div>
            
        );
    }
}
//PropTypes
TodoItem.propTypes = {
    todo:PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired,
}
const btnStyle = {
    background:'#ff0000',
    color:'#fff',
    border: 'none',
    padding:'5px 8px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right',
}

export default TodoItem ;