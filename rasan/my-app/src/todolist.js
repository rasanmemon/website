import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Todolist extends React.Component {
    constructor(){
        super();

        this.state={
            firstname="rasan"
        }
    }
    render() {
      return (
           <ul>
               (this.state.firstname)
            </ul> 
      );
    }
  }

ReactDOM.render(<Todolist />, document.getElementById('root'));
