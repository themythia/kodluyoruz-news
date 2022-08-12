import React , {useState , useEffect} from 'react';
import axios from 'axios';
import {parseFeed} from 'htmlparser2';
import Life from './Life';
import Health from './Health';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './NoPage';



const Rss = () => {
  const [getLifeData , setGetLifeData ] = useState ({});
  const [loadMoreLifeList , setLoadMoreLifeList] =useState (30);
  const [getHealthData , setGetHealthData] =useState({});
  const [loadMoreHealthList , setLoadMoreHealthList] = useState(62);

  async function lifeRequest () {
        const dataLifeUrl = await axios.get("https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/yasam.rss")
        const lifeArray = parseFeed (dataLifeUrl.data).items
        return lifeArray;
    
      }

   async function healthRequest () {
            const dataHealthUrl = await axios.get("https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/saglik.rss")
            const healthArray = parseFeed (dataHealthUrl.data).items
            return healthArray;
        
          }
  

  useEffect(() => {
    lifeRequest()?.then(data => setGetLifeData(data))
    healthRequest()?.then(data => setGetHealthData(data))
  
    
  }, [])
  
  useEffect(() => {
 
  }, [])
  

    const rssArray = []
    for (let i = 0; i < loadMoreLifeList; i++) {
      rssArray.push (getLifeData[i])
    }
  
  return (
    <div>
      
      <Life arr = {rssArray && rssArray}     />

    </div>
  )
}

export default Rss;







/******************************** */

// export default function Rss ()  {

//   const [health , setHealth] = useState ([null]);
//   const [getData , setGetData ] = useState ({});
//   const [loadMore , setLoadMore] =useState (30);


// const [getData2 , setGetData2] =useState({});
// const [loadMore2 , setLoadMore2] = useState(62);




//   async function request () {
//     const dataUrl = await axios.get("https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/yasam.rss")
//     const array = parseFeed (dataUrl.data).items
//      console.log(array)
//     return array;

//   }

//   /********* */
//   async function request2 () {
//     const dataUrl2 = await axios.get("https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/saglik.rss")
//     const array2 = parseFeed (dataUrl2.data).items
//      //console.log(loadMore)
//     return array2;

//   }
  


//   useEffect (() =>  {
//     console.log("first")
//     request()?.then((data) => setGetData(data))
//     /********* */
//     request2()?.then((data) => setGetData2(data))

    
    
    

//   },[]);

//     let newsArray = Array(loadMore).fill();
//      console.log(getData)
//     for (const key in newsArray) {
//       newsArray[key] = getData[key]

//     }
    

   
//     let newsArray2 = Array(loadMore2).fill();
//     for (const key in newsArray2) {
//       newsArray2[key] = getData2[key]

//     }
    
    

//   return(
//     <div> 

// {/* <Life arr = {newsArray}/> */}


//     <BrowserRouter>
//       <Routes>
//         <Route  path="/" element={<Health arr2 = {newsArray2}/>}/>
//         <Route path="health" element={<Health arr2 = {newsArray2}/>} />
//         <Route path="life" element={<Life arr = {newsArray}/>} />  
//         <Route path="*" element={<NoPage />} />
//       </Routes>
//     </BrowserRouter>
//       {/* { <Life arr = {newsArray}/> } */}

//       {/* {<Health  arr2 = {newsArray2}/>} */}
      
      
      
  
      
//     </div>
    
//     );
// }

