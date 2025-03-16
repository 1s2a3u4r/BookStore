import React, { useEffect, useState } from "react";
import Cards from "./Cards"
import axios from "axios";
import {Link} from "react-router-dom"
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book")
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook()
  }, [])
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1  className="text-2xl md:text-4xl">
         <span className="font-semibold">Welcome!</span> Unlock exclusive courses today in our <span className="text-red-500">Book</span>Store<span className="text-red-500">!</span>
        </h1>
        <p className="mt-12">
        Welcome to our exclusive collection! We’re delighted to offer you access to carefully curated items that you won’t find anywhere else. Take your time exploring, and enjoy discovering unique treasures just for you. Your journey to something extraordinary starts here! Thank you for choosing us
        </p>
        <Link to="/">
        <button className="mt-6 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-black duration-300 dark:hover:bg-white dark:hover:text-black dark:duration-200">Back</button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
          book.map((item)=>(
            <Cards key={item.id} item={item}/>
          )) 
        }
      </div>
    </div>
  )
}

export default Course
