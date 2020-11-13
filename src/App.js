import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component{
  state = {
    data: []
  };

  handleSubmit = (newValue) => {
    this.setState({data: [...this.state.data, newValue]})
  };

  componentDidUpdate(){
    localStorage.setItem('dataStore', JSON.stringify(this.state.data));
  };

  componentDidMount(){
    const dataStore = JSON.parse(localStorage.getItem('dataStore'));
    if(dataStore !== null){
      this.setState({data: dataStore});
    }
  }

  handleRemove = index =>{
    const {data} = this.state;
    this.setState({
      data: data.filter((item, i) => {
        return i !== index
      })
    });
  };

  handleOnEdit = (editValue, index) => {
    const {data} = this.state;
    data.forEach((item, i) =>{
      if(i === index){
        item.todo = editValue;
      }
    });
    this.setState({data: data});
  }


  render() {
    const {data} = this.state;
    return (
      <div className="app">
        <h1>Todo List</h1>
        <TodoForm onSubmit={this.handleSubmit} />
        {data.length === 0 
          ? <h2>Nothing to do</h2> 
          : <TodoList todo={data}
            onDelete = {this.handleRemove}
            onEdit = {this.handleOnEdit}
            />
        }
      </div>
    );
  };
}

export default App;
