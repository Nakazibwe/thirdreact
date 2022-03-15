/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from "./components/Todos";
import "./App.css";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
// import { v4 } from "uuid";
import About from "./components/pages/About";
import axios from "axios";
class App extends Component {
  state = {
    todos: []
  };
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => this.setState({todos:res.data}))
  }
  //Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id == id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  //Delete Todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    }));
    
  };
  //AddTodo
  addTodo = (title) => {
   axios.post('https://jsonplaceholder.typicode.com/todos',{
     title,
     completed:false
   })
   .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Routes>
            <Route
                path = '/'  element={
                  <React.Fragment>
                    <AddTodo addTodo = {this.addTodo}/>
                    <Todos
                      todos={this.state.todos}
                      markComplete={this.markComplete}
                      delTodo={this.delTodo}
                    />
                  </React.Fragment>
                }/>
              <Route path = '/about' element ={ <About/>}/> 
            </Routes>
 
            
            

            
          </div>
        </div>
      </Router>
    );
  }
} 

export default App;
