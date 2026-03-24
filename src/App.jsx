import Header from "./Header"
import List from './List'
import Footer from './Footer'
import { useState } from 'react'
import AddItem from "./AddItem";
function App() {
      const [items,setItems]=useState(JSON.parse(localStorage.getItem('shopping-list'))||[]);
    const [newItem,setNewItem]=useState('');




     const handleCheck=(id)=>{
        const listItems=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item);
        setItems(listItems);
        localStorage.setItem('shopping-list',JSON.stringify(listItems));

    }

    const handleDelete=(id)=>{
        const listItems=items.filter((item)=>item.id!==id);
        setItems(listItems);
        localStorage.setItem('shopping-list',JSON.stringify(listItems));

    }

    const addItem=(item)=>{
        const id =items.length?items[items.length-1].id+1:1;
        const newItem={id,checked:false,item};
        const listItems=[...items,newItem];
        setItems(listItems)
        localStorage.setItem('shopping-list',JSON.stringify(listItems));
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setNewItem('');
        addItem(newItem);
        console.log(submitted);
        
    }
  
  return (
    <div className="App">
    <Header title="Groceries List"/>
    <AddItem 
    newItem={newItem}
    setNewItem={setNewItem}
    handleSubmit={handleSubmit}
    />
    <List
    items={items}
    handleCheck={handleCheck}
    handleDelete={handleDelete}
    />
    <Footer
    length={items.length}
    />

    
    </div>
  )
}

export default App
