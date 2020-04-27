import React from 'react'
import ReactDOM from 'react-dom'


const Part = (props)=>{
  return (
  <div>
    <p>{props.part} {props.excersise}</p>
  </div>)
}


const Content = (props)=>{
  return (
  <div>
    <Part part={props.parts[0].name} excersise={props.parts[0].exercises}></Part>
    <Part part={props.parts[1].name} excersise={props.parts[1].exercises}></Part>
    <Part part={props.parts[2].name} excersise={props.parts[2].exercises}></Part>
  </div>
  )
}

const Header = (props)=>{
  return (
  <div>
    <h1>{props.course}</h1>
  </div>)
}

const Total = (props)=>{
  let total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return (
  <div>
    <p>Number of exercises {total}</p>
  </div>)
}




const App = () => {
  let course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return (
    <div>
      <Header course={course.name}></Header>


      <Content parts={course.parts}></Content>


      <Total parts={course.parts}></Total>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
