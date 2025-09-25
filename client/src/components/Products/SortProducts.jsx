import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SortProducts = () => {
  const [searchParams,setSearchParams] = useSearchParams();

  const handleSort = (e) =>{
    const sortBy = e.target.value;
    searchParams.set("sortBy",sortBy);
    setSearchParams(searchParams);
  }
  return (
    <div className="bg-white p-2 font-bold text-gray-700 rounded-lg">
      <select
      onChange={handleSort}
      value={searchParams.get("sortBy")}
      id="sort" className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black">
        <option value="">Default</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow" >High to Low</option>
        <option value="popularity" >Popularity</option>
      </select>
    </div>
  );
}

export default SortProducts