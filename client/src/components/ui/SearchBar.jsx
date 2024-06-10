import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setSearchTerm} from '../../redux/features/salesSlice'

const SearchBar = () => {
    const dispatch = useDispatch()
    const searchTerm = useSelector((state) => state.sales.searchTerm)

  return (
    <input
      type="text"
      className="border p-2 mb-4 w-full md:w-1/2 lg:w-1/3 rounded-lg"
      placeholder="Search product"
      value={searchTerm}
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
    />
  )
}

export default SearchBar