import './App.css';
import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/todo';
import InsertForm from './components/insertForm';
import Preview from './components/preview';
import * as TodoService from './service/todoService';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = { items: [], preview: { value: '', data: new Date().toISOString() }, creationDate: new Date().toISOString() };
  }

  insert = (value) => {
    TodoService.save({ value, data: new Date() }).then(saved => {
      this.setState({ items: [...this.state.items, saved] });
    });
  };

  remove = (item) => {
    TodoService.deleteItem(item._id).then(deleted => {
      this.setState({ items: this.state.items.filter(todo => todo._id !== item._id) });
    });
  };

  update = (item) => {
    console.log('item', item);
    TodoService.update(item._id, item).then(data => {
      this.setState({ items: this.state.items.map(data => data._id !== item._id ? data : item) });
    });
  };

  valueChanged = (value) => {
    this.setState({ preview: { value, data: new Date().toISOString() } });
  };


  componentDidMount() {
    TodoService.getAll().then(lst => {
      this.setState({ items: [...lst] });
    });
  }

  render() {
    return (
      <div className="container">
        <div className='py-5 text-center'>
          <h1>TODO List</h1>
        </div>
        <div className='row g-5'>
          <div className="col-md-5 col-lg-4 order-md-last">
            <InsertForm insert={this.insert} valueChanged={this.valueChanged} />
            <div className='my-2'><Preview item={this.state.preview} /></div>
          </div>
          <div className="col-md-7 col-lg-8">
            {!!this.state.items.length && this.state.items.map((item, idx) => (<Todo key={idx} disableOthersEditMode={this.disableOthersEditMode} item={item} update={this.update} remove={this.remove} />))}

            {!!!this.state.items.length && (

              <div className="card border-secondary mb-3">
                <div className="card-header">
                  <div className="d-flex justify-content-between">
                    <div>No data</div>
                    <div></div>
                  </div>
                </div>
                <div className="card-body text-secondary">
                  <h5 className="card-title">No data found</h5>
                  <p className="card-text">{this.state.creationDate}</p>
                </div>
              </div>

            )}

          </div>

        </div>
      </div>);
  };
}

export default App;
