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
    <Part part={props.part1} excersise={props.exercise1}></Part>
    <Part part={props.part2} excersise={props.excersise2}></Part>
    <Part part={props.part3} excersise={props.excersise3}></Part>
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
  return (
  <div>
    <p>Number of exercises {props.total}</p>
  </div>)
}




const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}></Header>


      <Content part1={part1} excersise1={exercises1}
      part2={part2} excersise2={exercises2}
      part3={part3} excersise3={exercises3}></Content>


      <Total total={exercises1 + exercises2 + exercises3}></Total>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
