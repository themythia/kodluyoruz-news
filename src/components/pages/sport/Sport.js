import React, { useEffect, useState } from 'react';

function Sport () {

    const [ text, setText ] = useState(null);
    // const [ deneme, setDeneme ] = useState(null);
    // const [ products, setProducts ] = useState([]);

    async function initProducts(){
        await fetch("https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/spor.rss")
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => setText(data))
    }

    // useEffect(() => {
        
    //     fetch("https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/spor.rss")
    //     .then(response => response.text())
    //     .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    //     .then(data => setText(data))
    // }, [])

    useEffect(() => {
        initProducts();
    }, [])
 
  return (
    <>
    {
        text !== null ? (
        <div>
            <div>
                <p>{text.getElementsByTagName("entry")[0].childNodes[1].textContent}</p>
                <img src={text.getElementsByTagName("entry")[0].childNodes[6].textContent.split('<img src="')[1].split('?width')[0]} alt="" width="200px" />
            </div>
        </div>
        ) 
        : (<div>Loading...</div>)
    }
    </>
  )
}

export default Sport


// return (
//     <div>
//         <h1>
//             {/* deneme */}
//             {text.getElementsByTagName("entry")[0].childNodes[1].textContent}
//         </h1>
//     </div>
//   )

// if (typeof box === 'object' && box !== null && 'getElementsByTagName' in box) { 
//     const result = box.getElementsByTagName('p'); 
//   }