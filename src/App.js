import Form from './Components/Form'
import React,{useState,useEffect} from 'react';
import CourseList from './Components/CourseList'
import { Component } from 'react';
import './App.css'
import Start from './Components/Start';
// import quizData from './data/quiz.json'
import Questions from './Components/Questions';

class App extends Component{
  
  state={
    courses:[],
    currentCourse:''
  }
  handleChange=(e)=>
  {
    this.setState({
      currentCourse:e.target.value
    })
  }
  addCourse=(e)=>
  {
    e.preventDefault()
    if(this.state.currentCourse !=='')
    {
      let courses=this.state.courses
      courses.push(this.state.currentCourse)
      this.setState({
        courses,
        currentCourse: ''
    })
  }
}
deleteCourse=(index)=>
{
  let courses=this.state.courses
  courses.splice(index,1)
  {
    this.setState({
      courses
    })
  }
}
updateCourse=(index,newCourse)=>
{
    let courses=this.state.courses
    courses[index]=newCourse
    this.setState({
        courses
    })

}
  render()
  {
 
    const {courses}=this.state
    const Output=courses.length ? (courses.map((course,index)=>{
      return <CourseList course={course} key={index} deleteCourse={this.deleteCourse} index={index} 
      updateCourse={this.updateCourse}/>
    })):<span className='no-courses'>No Courses Available</span>
  return (
    <div className="App">
      {/* {
        {step === 1 && <start/>}
      } */}<div>
              {Output}
      <Form handleChange={this.handleChange} addCourse={this.addCourse}
      currentCourse={this.state.currentCourse}/>
      </div>
      </div>
  );
}
}


export default App;
