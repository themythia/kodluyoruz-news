import React, { useEffect, useState } from 'react';
import { parseFeed } from 'htmlparser2';
import './Sport.css';

function Sport () {

    const [ text, setText ] = useState('');
    const [ txt, setTxt ] = useState({textContent: "", imageContent: ""});

    useEffect(() => {
            fetch("https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/spor.rss")
            .then((res) => res.text())
            .then((data) => setText(data))
    },[]);

    useEffect(() => {
        if (text.length > 0){
            const feed = parseFeed(text);
            console.log('feed:', feed);
            let textContents = [{textContent: [], imageContent: []}];
            if (feed) {
                for (let i = 0;i<100;i++){
                    textContents[0].textContent.push(feed.items[i].title)
                    textContents[0].imageContent.push(feed.items[i].description.split('<img src="')[1].split('?width')[0])
                }
                setTxt(textContents);
            }
        }    
    }, [text])

    const order1 = Array.from(Array(10).keys());
    const order2 = Array.from(Array(10).keys(), x => x + 10);
    const order3 = Array.from(Array(80).keys(), x => x + 20);
    // console.log(txt)
     
    return (
        <div>
            {
                txt[0] ? (
                    <div>
                    {
                        order1.map((item) =>
                            <div key={item} className="slider">
                                <img src={txt[0].imageContent[item]} alt=""></img>
                                <p>{txt[0].textContent[item]}</p>
                            </div>
                        )
                    }
                    <hr></hr>
                    {
                        order2.map((item) =>
                            <div key={item} className="list">
                                <img src={txt[0].imageContent[item]} alt=""></img>
                                <p>{txt[0].textContent[item]}</p>
                            </div>
                        )
                    }
                    <hr></hr>
                    {
                        order3.map((item) =>
                            <div key={item} className="col">
                                <img src={txt[0].imageContent[item]} alt=""></img>
                                <p>{txt[0].textContent[item]}</p>
                            </div>
                        )
                    }
                    </div>
                ) 
                : (<div>Loading...</div>)
            }
        </div>
    )
}

export default Sport

