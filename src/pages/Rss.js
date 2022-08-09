import React , {useState , useEffect} from 'react';
import axios from 'axios';
import {parseFeed} from 'htmlparser2';
import Life from './Life';
import Health from './Health';


export default function Rss ()  {

  const [health , setHealth] = useState ([null]);
  const [getData , setGetData ] = useState ({});
  const [loadMore , setLoadMore] =useState (30);


const [getData2 , setGetData2] =useState({});
const [loadMore2 , setLoadMore2] = useState(30);




  async function request () {
    const dataUrl = await axios.get("https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/yasam.rss")
    const array = parseFeed (dataUrl.data).items
     //console.log(loadMore)
    return array;

  }

  /********* */
  async function request2 () {
    const dataUrl2 = await axios.get("https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/saglik.rss")
    const array2 = parseFeed (dataUrl2.data).items
     //console.log(loadMore)
    return array2;

  }
  









  /************************ */
/*
  async function request2 () {
    const dataUrl2 = await axios.get("https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/saglik.rss")
    const array = parseFeed (dataUrl2.data).items
     //console.log(loadMore)
    return array;

  }
  */
  

/**************************** */
  useEffect (() =>  {
    request()?.then((data) => setGetData(data))
    /********* */
    request2()?.then((data) => setGetData2(data))

    
    
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
    //  console.log(getData)
    for (const key in newsArray) {
      newsArray[key] = getData[key]

    }
    /************ */

      /*array ' a tekrar bak */
    let newsArray2 = Array(loadMore2).fill();
    // console.log(getData2)
    for (const key in newsArray2) {
      newsArray2[key] = getData2[key]

    }
    
    

  return(
    <div>
    
      {/* { <Life arr = {newsArray}/> } */}

      {<Health  arr2 = {newsArray2}/>}
      
      
      
  
      
    </div>
    
    );
}

