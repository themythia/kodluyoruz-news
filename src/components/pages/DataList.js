import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { parseFeed } from 'htmlparser2';

 


const dataList = async () => {
   
  
        const response = await axios.get(
          `https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/otomobil.rss`
        );
    
        // xmli parçalamak için parsefeed metodu kullanıldı.
        const parseData = parseFeed(response.data)
          // parse ettiğimiz verinin itemlarına ulaşmak için kullanıyoruz.
        
        return   parseData.items
          
  
        

 }
  export default dataList;