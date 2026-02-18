import React,{useState} from 'react'

const Search = (props) => {
  const [search,setSearch] = useState("");
  const handleSearch = () =>{
    props.setCity(search)
  }
  return (
    <div className='flex items-center gap-2 w-[90%] my-0 mx-auto py-8 md:w-[78%]'>
      <input 
      type="text" 
      placeholder='See Default City' 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className='w-full bg-gray-700 py-4 px-6 rounded-2xl md:w-8/12' />
      <i className="fa-solid fa-crosshairs text-3xl cursor-pointer" onClick={handleSearch}></i>
    </div>
  )
}

export default Search
