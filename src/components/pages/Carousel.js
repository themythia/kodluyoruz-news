import React, { useEffect, useState } from 'react';
import { getPosts } from './getposts';
import '../../index.css';


const Carousel = () => {
    const[button , setButton] = useState('');
    const [data, setData] = useState(10)

    useEffect(() => {
      getPosts().then((items) => setData(items));
    }, []);

    let holdData = [];
    for (let i=0; i < 10; i++) {
    holdData.push(data[i])
    }



const holdDataList = holdData.map(function (each , value) {
  return (
   
   <li key={value}>
    <a 
    href={each?.['description']
     ? each['description'].substring(
      10,
       each['description'].indexOf(' ', 
       10) -1
      )
    : ' '
  }
  >
    <img src={
              each?.['description']
                ? each['description'].substring(
                    10,
                    each['description'].indexOf(' ', 10) - 1
                  )
                : ''
            }
            alt='Html tutorial'>

            </img>
  </a>
  <div className='block items-center justify-center p-4 text-16-19 font-bold line-clamp-2 '>
          {each?.['title'] ? each['title'] : ''}
        </div>
   </li>
   
    
  );
});



return (
  
  <>
  <div></div>
  <span className=' flex items-center justify-center' >
  {[...Array(10)].map((_,index) => <button key = {index}className='bg-white-500 border-2 border-indigo-100 hover:bg-blue-700 hover:text-white text-black font-bold py-2 px-4 rounded-full' >{index + 1}</button>)}
</span>
    
 
  </>
)
}

export default Carousel
