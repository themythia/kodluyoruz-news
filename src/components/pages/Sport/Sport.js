import React, { useEffect, useState } from 'react';
import { parseFeed } from 'htmlparser2';

function Sport() {

    const style1 = 'bg-blue-900 text-white border-2 mr-2 text-base font-black px-4 py-2 rounded-full';
    const style2 = 'border-2 mr-2 text-base font-black px-4 py-2 rounded-full';
    const style3 = 'border-2 mr-2 text-base font-black px-3 py-2 rounded-full';
    const style4 = 'border-2 mr-2 text-base font-black px-4 py-2 rounded-full bg-blue-900 text-white';
    const style5 = 'border-2 mr-2 text-base font-black px-3 py-2 rounded-full bg-blue-900 text-white';


    const [text, setText] = useState('');
    const [txt, setTxt] = useState({ textContent: "", imageContent: "", linkContent: "" });
    const [count, setCount] = useState(0);
    const [ numberClass, setNumberClass ] = useState((Array(1).fill(style1) + ',' + Array(8).fill(style2) + ',' + Array(1).fill(style3)).split(','));
    const [ moreNumbers, setMoreNumbers ] = useState(12);
    const [ btn, setBtn ] = useState('text-gray');
    const [ showMore, setShowMore ] = useState('col-span-3 bg-white h-12 flex justify-center');
    


    useEffect(() => {
        fetch("https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/spor.rss")
            .then((res) => res.text())
            .then((data) => setText(data))
    }, []);

    useEffect(() => {
        if (text.length > 0) {
            const feed = parseFeed(text);
            console.log('feed:', feed);
            let textContents = [{ textContent: [], imageContent: [], linkContent: [] }];
            if (feed) {
                for (let i = 0; i < 100; i++) {
                    textContents[0].textContent.push(feed.items[i].title)
                    textContents[0].imageContent.push(feed.items[i].description.split('<img src="')[1].split('?width')[0])
                    textContents[0].linkContent.push(feed.items[i].link)
                }
                setTxt(textContents);
            }
        }
    }, [text])

    const order1 = Array.from(Array(moreNumbers).keys(), x => x);
    const order2 = Array.from(Array(3).keys(), x => x + 96);
    const order3 = Array.from(Array(1).keys(), x => x + 99);

    function more() {
        if(moreNumbers <= 84){
            setMoreNumbers(moreNumbers + 12);
        }
                
        if(moreNumbers === 84){
            setBtn('text-gray-200');
            setShowMore('col-span-3 bg-text-gray-200 h-12 flex justify-center');
        }
    }


    const handleClickNext = () => {
        let squares = (Array(9).fill(style2) + ',' + Array(1).fill(style3)).split(',');
        
        if (count < 9) {
            setCount(count + 1);
            if (count !== 8){
                squares[count + 1] = style4;
            } else if (count === 8){
                squares[count + 1] = style5;
            }
            setNumberClass(squares);
        } else {
            setCount(0);
            squares[0] = style4;
            setNumberClass(squares);
        }
    }
    const handleClickPrev = () => {
        let squares = (Array(9).fill(style2) + ',' + Array(1).fill(style3)).split(',');
        
        if (count > 0) {
            setCount(count - 1);
            squares[count - 1] = style4;
            setNumberClass(squares);
        } else {
            setCount(9);
            squares[9] = style5;
            setNumberClass(squares);
        }

    }

    // console.log(count)

    // setTimeout(() => {
    //     if(count===9){
    //         setCount(0)
    //     }else{
    //         setCount(count+1)
    //     }
    // }, 1000);

    function numbers(i) {
        let squares = (Array(9).fill(style2) + ',' + Array(1).fill(style3)).split(',');
        if(i !== 10){
            squares[i-1] = style4;
        }else if(i === 10){
            squares[i-1] = style5;
        }
        setNumberClass(squares);
        setCount(i-1); 
        
    }

    return (
        <div className='grid grid-cols-3 grid-rows-7 gap-1 lg:w-3/4 mx-auto h-auto md:w-full sm:w-full'>
            <div className="col-span-3 row-span-4 lg:col-span-2 row-span-4 md:col-span-2 row-span-4 sm:col-span-3 row-span-4 ">
                {
                    txt[0] ? (
                        <div className='relative w-full mx-auto object-contain h-full bg-white flex justify-center'>
                            <img src={txt[0].imageContent[count]} className="object-cover w-full" style={{height: "574px"}} alt="sportimage" />
                            <p className='w-full h-28 absolute bottom-20 text-center font-bold font-sans p-2 box-border text-white text-3xl' style={{background: "linear-gradient(0deg, rgba(2,0,36,0.6) 50%, transparent 100%)"}}>{txt[0].textContent[count]}</p>
                            <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none">
                                <span onClick={() => handleClickPrev()} className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                </span>
                            </button>
                            <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none">
                                <span onClick={() => handleClickNext()} className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                </span>
                            </button>
                            <ul className='absolute bottom-5 flex justify-center w-full cursor-pointer'>
                                <li onClick={() => numbers(1)} className={numberClass[0]}>1</li>
                                <li onClick={() => numbers(2)} className={numberClass[1]}>2</li>
                                <li onClick={() => numbers(3)} className={numberClass[2]}>3</li>
                                <li onClick={() => numbers(4)} className={numberClass[3]}>4</li>
                                <li onClick={() => numbers(5)} className={numberClass[4]}>5</li>
                                <li onClick={() => numbers(6)} className={numberClass[5]}>6</li>
                                <li onClick={() => numbers(7)} className={numberClass[6]}>7</li>
                                <li onClick={() => numbers(8)} className={numberClass[7]}>8</li>
                                <li onClick={() => numbers(9)} className={numberClass[8]}>9</li>
                                <li onClick={() => numbers(10)} className={numberClass[9]}>10</li>
                            </ul>
                        </div>
                    )
                        : (<div>Loading...</div>)
                }
            </div>
            <div className='grid grid-rows-3 gap-y-1 col-span-2 row-span-2 md:col-span-1 row-span-2 sm:col-span-2 row-span-2'>
                {
                    txt[0] ? (
                        <>
                            {
                                order2.map(item => (
                                    <div className='row-span-1 w-full h-full bg-white grid grid-cols-2'>
                                        <img src={txt[0].imageContent[item]} alt='' className='col-span-1 my-auto w-full h-full bg-contain'></img>
                                        <p className='col-span-1 my-auto px-2 text-blue-900 font-bold text-left'>{txt[0].textContent[item]}</p>
                                    </div>
                                ))
                            }
                        </>
                    ) : null
                }
            </div>
            <div className='md:col-span-1 row-span-2 sm:col-span-1'>
                {
                    txt[0] ? (
                        <>
                            {
                                order3.map(item => (
                                    <div className='row-span-1 w-full h-full bg-white grid grid-rows-3'>
                                        <img src={txt[0].imageContent[item]} alt='' className='row-span-2 w-full h-full bg-contain'></img>
                                        <p className='row-span-1 my-auto px-2 text-blue-900 font-bold text-left'>{txt[0].textContent[item]}</p>
                                    </div>
                                ))
                            }
                        </>
                    ) : null
                }
            </div>
            <div className=''>

            </div>
            <div className='col-span-3 row-span-auto grid grid-cols-3 gap-2 '>
                {
                    txt[0] ? (
                        <>
                            {
                                order1.map(item => (
                                    <div className='flex flex-col justify-center items-center col-span-3 mx-2 md:col-span-1 row-span-1 w-full h-full bg-white grid grid-rows-3 sm:col-span-3 mx-auto'>
                                        <img src={txt[0].imageContent[item]} alt='' className='row-span-2 w-full h-full bg-contain'></img>
                                        <p className='row-span-1 my-auto px-2 text-blue-900 font-bold text-center'>{txt[0].textContent[item]}</p>
                                    </div>
                                ))
                            }
                        </>

                    ) : null

                }
            </div>
            <div className={showMore}>
                <button onClick={() => more()} className={btn}>DAHA FAZLA GÖSTER</button>
            </div>
        </div>
    )
}

export default Sport