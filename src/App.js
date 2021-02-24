import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products=[
    {name:'photoshop',price:'9000'},
    {name:'camera',price:'1000'}
  ]
  const peleyers=[
    {name:'Rahul',ball:'Football'},
    {name:'Rajib',ball:'Basketball'},
    {name:'Thushar',ball:'Voliball'},
  ]
  const [count,setCount]=useState([]);
  // console.log(user);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setCount(data))
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
        <h4>Hello I am react person</h4>
        <Count></Count>
        {count.map(cd=><User name={cd.name} username={cd.username}></User>)}
    
        {products.map(pd=><Product product={pd}></Product>)}
        {peleyers.map(pl=><Friend pelear={pl}></Friend>)}
        <Person name='Remon roy' job='Programmer'></Person>
        <Person name='Niloy roy' job='Farmmer'></Person>
        <Person name='Nitto' job='Fooding'></Person>
        
      </header>
     
    </div>
  );
}



function User(props){
  const style={
    border:'2px solid tomato',
    width:'400px',
    margin:'5px',
    padding:'10px',
    borderRadius:'10px',
    background:'orange'
  }
 
  return(
    <div style={style}>
      <h2>Name:{props.name}</h2>
      <p>Username:{props.username}</p>
    </div>
  )
}

function Count() {
  const [count,setCount]=useState(10);
  return(
    <div>
      <h2>Count:{count}</h2>
      <button onClick={()=>setCount(count-1)}>decrease</button>
      <button onClick={()=>setCount(count+1)}>increase</button>
      
    </div>
  );
}

function Friend(props) {
  const style={
    background:'#ddd',
    width:'200px',
    height:'200px',
    borderRadius:'8px',
    border:'2px solid gray',
    color:'orange'

  }
  const {name,ball}=props.pelear
  return(
    <div style={style}>
    <h5>name:{name}</h5>
    <h6>Ball:{ball}</h6>
    <button>Pelear</button>
  </div>
  )
}



function Product(props) {
  // console.log(props);
  const style={
    background:'#ddd',
    width:'200px',
    height:'200px',
    borderRadius:'8px',
    border:'2px solid gray',

  }
  const {name,price}=props.product
  return(
    <div style={style}>
      <h5>{name}</h5>
      <h6>price: ${price}</h6>
      <button>Buy now</button>
    </div>
  )
}

function Person(props) {
  const style={
    border:'2px solid tomato',
    width:'400px',
    margin:'5px',
    padding:'10px',
    borderRadius:'10px',
    background:'orange'
  }
  return (
    <div style={style}>
      <h2>name:{props.name}</h2>
      <p>Profession:{props.job}</p>
    </div>
  )
}

export default App;
