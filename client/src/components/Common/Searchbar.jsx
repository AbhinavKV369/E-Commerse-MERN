import { useEffect, useState } from "react";
import { HiSearch, HiXCircle } from "react-icons/hi";

const suggessions = ["Samsung","Lenovo","HP","Dell","Realme","Redmi","Infinix","I Phone","Motorola","Asus","Boat","Zebronics"]

const Searchbar = () => {
  // useStates
  const [searchTerm, setSearchTerm] = useState("");
  const [placeHolder,setPlaceHolder] = useState("Samsung")
  const [isOpen, setIsOpen] = useState(false);

  // useEffect for placeholder
  useEffect(()=>{
    const ramdom = suggessions[Math.floor(Math.random()*suggessions.length)];
    setPlaceHolder(ramdom);
   const intervel = setInterval(()=>{
        const ramdom =
          suggessions[Math.floor(Math.random() * suggessions.length)];
        setPlaceHolder(ramdom);
    },1000);
    return ()=>clearInterval(intervel)
  },[]);


  const openSearch = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    setIsOpen(false)
  };

  return (
    <div
      className={
        isOpen
          ? "flex items-center justify-center absolute h-25 shadow-sm w-full top-0 left-0 right-0 bg-white transition-all duration-300 ease-in-out"
          : ""
      }>
      {isOpen ? (
        <form
          className="relative w-full flex justify-center"
          onSubmit={handleSearch}>
          <div className="flex w-1/2 sm:w-2/3 border-2 rounded-full overflow-hidden">
            <input
              className="p-5 w-full h-12 outline-none"
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              placeholder={placeHolder}
            />
            <button
              type="submit"
              className="px-4 flex items-center justify-center hover:bg-gray-200 transition">
              <HiSearch className="h-6 w-6 text-gray-900" />
            </button>
          </div>
          <div className="absolute right-8 flex items-center text-gray-600 top-2 justify-center transition-all">
            <HiXCircle onClick={openSearch} className="w-10 h-10" />
          </div>
        </form>
      ) : (
        <button
          onClick={openSearch}
          className="p-2 rounded-full hover:bg-black hover:text-white transition duration-300">
          <HiSearch className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Searchbar;
