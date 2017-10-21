import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Todolist extends React.Component {
    constructor(){
        super();
        this.changeStatus=this.changeStatus.bind(this);

        this.state={
            task:[{
                name:"Buy Milk",
                completed:false
            },
            {
                name:"Buy Egg",
                completed:false
            },
            {
                name:"Buy Bread",
                completed:false
            }]
        }
    }
    changeStatus(index){
        // console.log(this.state.tasks[index])
        var task = this.state.task
        // var tasks = task;
        task[index].completed = !task[index].completed;
        this.setState({
            task:task
        })
    }
    render() {
      return (
           <ul>
               {
                   
                   this.state.task.map((task,index)=>{
                   return<Todoitem key={task.name} ClickHandler={this.changeStatus}index={index} detail={task}/>
               })}
               
            </ul> 
      );
    }
  }
class Todoitem extends React.Component{
    render(){
    return(
        <li onClick={() => {
            this.props.ClickHandler(this.props.index)
        }} style={{ textDecorationLine: this.props.detail.completed ? 'underline' : 'none' ,}} className={this.props.detail.completed ? 'completed':''}>
           {this.props.detail.name} 
        </li>
    )
    }
}
ReactDOM.render(<Todolist />, document.getElementById('root'));
