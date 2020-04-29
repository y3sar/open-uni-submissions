import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Button = ({handleClick, text})=>{
  return <button onClick={handleClick}>{text}</button>
}


const Statistic = ({text, value})=>{
  return (
  <>
      <tbody>
    <tr>
      <td width="25%">{text}</td>
      <td >{value}</td>
    </tr>
    </tbody>
  </>
  )
}

const Statistics = (props)=>{
   const {goodCount, neutralCount, badCount} = props.stats;
   

   if ([goodCount, neutralCount, badCount].every((count)=>count < 1)){
     return (<div>
        <h1>statistics</h1>
       <p>No feedback given</p>
       </div>)
   }

   else{

     let total = goodCount + neutralCount + badCount;
     let average = (goodCount*1 + neutralCount*0 + badCount*-1)/total;
   return (
   <div>
     <h1>statistics</h1>
     <table>
     <Statistic text="good" value={goodCount}></Statistic>
     <Statistic text="neutral" value={neutralCount}></Statistic>
     <Statistic text="bad" value={badCount}></Statistic>
     <Statistic text="all" value={total}></Statistic>
     <Statistic text="average" value={average}></Statistic>
     </table>
   </div>
   )
   }

}




const App = ()=>{
  const [goodCount, incrementGood] = useState(0);
  const [neutralCount, incrementNeutral] = useState(0);
  const [badCount, incrementBad] = useState(0);
  

  return (
  <div>
    <h1>give feedback</h1>
    <Button handleClick={()=>incrementGood(goodCount+1)} text="good"></Button>
    <Button handleClick={()=>incrementNeutral(neutralCount+1)} text="neutral"></Button>
    <Button handleClick={()=>incrementBad(badCount+1)} text="bad"></Button>
    <Statistics stats={{goodCount:goodCount, neutralCount:neutralCount, badCount:badCount}}></Statistics>
  </div>
)
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

