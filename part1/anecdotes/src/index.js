import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const MostVotes = ({anecdotes, votes})=>{
  
  const highestVote = Math.max.apply(null, votes);
  
  const highestVoteIdx = votes.indexOf(highestVote);


  return (
    <div>
    <h1>Anecdote with most votes</h1>
    <p>{anecdotes[highestVoteIdx]}</p>
    <p>has {highestVote} votes</p>
    </div>
    )
}



const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, addVote] = useState(new Array(anecdotes.length).fill(0))
  let randomIdx = Math.floor(Math.random() * anecdotes.length)
  

  const changeState = ()=>{
    randomIdx = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIdx)
    
  }

  const addVoteByIdx = (idx)=>{
    const tempVote = [...votes];
    tempVote[idx] += 1;
    return ()=>addVote(tempVote);
  }
  
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={addVoteByIdx(selected)}>vote</button>
      <button onClick={changeState}>next anecdote</button>
      <MostVotes anecdotes={anecdotes} votes={votes}></MostVotes>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
