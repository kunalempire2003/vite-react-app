import React from 'react'

const SearchItem = ({ search, setSearch }) => {
  return (
    //when press enter it will not refresh the page
     <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input type="text"
        id='search'
        type='text'
        role='searchbox'
        placeholder='Search Items'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        />
     </form>
  )
}

export default SearchItem
