
import { useState } from 'react';
import AddCart from '../Component/AddCart/AddCart';
import Animels from '../Component/Animels/Animels';
import './App.css'

function App() {
  const [addCart ,setAddcart]=useState([])
  const[totalCost , setTotalcost]=useState(0)
  const [remaining ,setRemaining]=useState(0)
   
  const handleCart=(cart)=>{

    const isexit=addCart.find((item)=> item.id===cart.id);
    let count=cart.price
   if(isexit){
       alert('already exit')
   }
   else{
    addCart.forEach(item =>{
      count=count+ item.price
    })
   
    const  remainingTotal=2500-count;
    if(count >2500){
      return alert('taka sesh')
    }
    else {
      setTotalcost(count);
      setRemaining(remainingTotal)
 
    
    }
    const NewAdd=[...addCart, cart]
    setAddcart(NewAdd);
   
   }

   }


  return (
    <>
    <h1 className='text-6xl font-bold '>Animals Fectory</h1>
    <div className='page-container'>
    <Animels handleCart={handleCart}></Animels>
    <AddCart addCart={addCart} totalCost={totalCost} remaining={remaining}></AddCart>
    </div>
    </>
  )
}

export default App;
