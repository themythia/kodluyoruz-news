import React , {useState , useEffect} from 'react';
import axios from 'axios';
import {parseFeed} from 'htmlparser2';
import Life from './Life';


export default function Rss ()  {

  const [health , setHealth] = useState ([null]);
  const [getData , setGetData ] = useState ({});
  const [loadMore , setLoadMore] =useState (30);

  async function request () {
    const dataUrl = await axios.get("https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/saglik.rss")
    const array = parseFeed (dataUrl.data).items
     //console.log(loadMore)
    return array;

  }
  


  useEffect (() =>  {
    request()?.then((data) => setGetData(data))
    
    
    // const array = parseFeed (dataies.data).items
    // setGetData (request()) 
    // console.log(getData)
    // console.log(data)
    //))    
    
          // .then(res => setHealth(res.data));
          //  .then(res => setHealth(res));

  },[]);
  //sonradan değiştir
    let newsArray = Array(loadMore).fill();
    console.log(getData)
    for (const key in newsArray) {
      newsArray[key] = getData[key]


      
    }
    
    

  return(
    <div>
    
      { <Life arr = {newsArray}/> 
      
      }
      
      
      
      
      


      
      
      
      
      
      
      

        
       
      
  
      
    </div>
    
    );
}

