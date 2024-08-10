import { useState } from "react";
import { data } from './Data.js';
import Button from "./Button.js";
// import Cart from "./AddToCart.js"
// import {handlePlusClick} from './AddToCart.js';
export default function Next() {
const [index, setIndex] = useState(0);
let hasNext = index < data.length - 1;

  function nextPage() {
    if (hasNext){
    setIndex(index+1);
  }}
  let d = data[index];
  return (
    <div>
      <button
        onClick={nextPage}        
        disabled={!hasNext}

        className='px-4 py-2 bg-gray-200 text-black font-semibold rounded-lg hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-black-300 mx-auto block'>
        Next
      </button>
      <div className='flex flex-row my-5 justify-center'>
    
          <div key={d.id} className='my-3 pr-6 border-2 rounded p-6'>
            <img src={d.image} alt={d.name} className='w-60 h-60' />
            <h2 className='font-bold text-center p-2'>{d.name}</h2>
            <h3 className='font-underline text-center font-bold text-gray-500'>
              Rs {d.price}
            </h3>

            
           
          </div>
        
      </div>
    </div>
  );
}
