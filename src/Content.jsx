import { useState } from "react"

export default function Content() {
  const [name,setName]=useState('Omnitrix');
  const [count,setCount]=useState(0);
  const handleNameChange=()=>{
    const names=['Forearms','Humangasaur','Wildmutt'];
    const int =Math.floor(Math.random()*3);
    setName(names[int]);
  }
  // const handleClick1=()=>console.log("You Clicked It!!!")
  // const handleClick2=(name)=>console.log(`${name}You Clicked It!!!`)
  // const event=(e)=>console.log(e.target.innerText)

  const handleClick=()=>{
    setCount(count+1)
    console.log(count)
  }
    const handleClick2=()=>{
    console.log( `${count} is coming from second `)
  }
  return (
    <div>
      <p>Hello Lets Create</p>
      {/* <button onClick={handleClick1}>Click It</button>
      <button onClick={()=>handleClick2('kunal')}>Click second</button>
      <button onClick={(e)=>event(e)}>new event</button> */}
      <p onDoubleClick={handleNameChange}>{name}</p>
      <p><button onClick={handleClick}>first</button></p>
      <p><button onClick={handleClick2}>second</button></p>

      
    </div>
  )
}
