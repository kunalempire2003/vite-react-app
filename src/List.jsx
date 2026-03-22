import ItemList from "./ItemList"

const List = ({items,handleCheck,handleDelete}) => {


  return (
    <main>
      {items.length
      ?
      (<ItemList
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />):
      (
        <p style={{marginTop:'2rem'}}>😅 List is Empty!!! </p>
      )
      }
    </main>
  )
}

export default List
