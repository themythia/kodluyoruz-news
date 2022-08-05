import React, { useEffect, useState } from 'react';
import { parseFeed } from 'htmlparser2';

const Astrology = () => {

    const style1 = 'bg-red-500 text-white border-2 mr-3 text-base px-1 py-1 rounded-full';
    const style2 = 'border-2 mr-3 bg-black text-base font-black px-1 py-1 rounded-full';
    const style3 = 'border-2 mr-3 bg-black text-base font-black px-1 py-1 rounded-full';
    const style4 = 'border-2 mr-3 text-base font-black px-1 py-1 rounded-full bg-red-500 text-white';
    const style5 = 'border-2 mr-3 text-base font-black px-1 py-1 rounded-full bg-red-500 text-white';

    const [text, setText] = useState('');
    const [txt, setTxt] = useState({ textContent: "", imageContent: "", linkContent: "" });
    const [count, setCount] = useState(0);
    const [numberClass, setNumberClass] = useState((Array(1).fill(style1) + ',' + Array(8).fill(style2) + ',' + Array(1).fill(style3)).split(','));
    const [moreNumbers, setMoreNumbers] = useState(12);

    const order1 = [10, 11, 12];
    const order2 = [13, 14];
    const order3 = [15, 16, 17];
    const order4 = [18, 19, 20, 21, 22, 23];
    const order5 = [24, 25, 26];
    const order6 = [27];
    const order7 = Array.from(Array(moreNumbers).keys(), x => x + 28)

    function more() {
        if (moreNumbers <= 60) {
            setMoreNumbers(moreNumbers + 12);
        }
    }

    useEffect(() => {
        fetch("https://pacific-caverns-96128.herokuapp.com/http://www.ntv.com.tr/n-life.rss")
            .then((res) => res.text())
            .then((data) => setText(data))
    }, []);

    useEffect(() => {
        if (text.length > 0) {
            const feed = parseFeed(text);
            console.log('feed:', feed);
            let textContents = [{ textContent: [], imageContent: [], linkContent: [] }];
            if (feed) {
                setTxt(textContents);
                for (let i = 0; i < 100; i++) {

                    textContents[0].linkContent.push(feed.items[i].link)
                    textContents[0].textContent.push(feed.items[i].description.split('alt="')[1].split('" /><p>')[0])
                    textContents[0].imageContent.push(feed.items[i].description.split('<img src=\"')[1].split('?width')[0])
                }

            }
            console.log(feed)
        }
    }, [text])

    function numbers(i) {
        let squares = (Array(9).fill(style2) + ',' + Array(1).fill(style3)).split(',');
        if (i !== 10) {
            squares[i - 1] = style4;
        } else if (i === 10) {
            squares[i - 1] = style5;
        }
        setNumberClass(squares);
        setCount(i - 1);
    }

    const handleClickNext = () => {
        let squares = (Array(9).fill(style2) + ',' + Array(1).fill(style3)).split(',');
        if (count < 9) {
            setCount(count + 1);
            if (count !== 8) {
                squares[count + 1] = style4;
            } else if (count === 8) {
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



    return (
        <div>
            <div className='flex bg-red-600 justify-around h-16 items-center'>
                <a href="/" className=''>
                    <img className='mr-36 w-32' src="https://cdn.ntv.com.tr/img/KadinLeftLogo.svg?v=6429z" alt="ntv.com.tr"></img>
                </a>
                <a href="https://ntv.com.tr">
                    <span className='text-white text-sm font-semibold'>NTV.COM.TR'ye geri dön &#8594;</span>
                </a>
            </div>
            <div className='grid grid-cols-3 grid-rows-7 gap-1 px-2 lg:w-3/4 mx-auto h-auto md:w-full sm:w-full mt-4'>
                <div className="col-span-3 row-span-4 w-full h-full  lg:col-span-3 row-span-4 w-full h-full md:col-span-3 row-span-4 w-full h-full  sm:col-span-3 row-span-4 w-full h-full ">
                    {
                        txt[0] ? (
                            <div className='w-full h-full bg-white flex flex-col justify-center relative'>
                                <a href={`${txt[0].linkContent[count]}`}>
                                    <img src={txt[0].imageContent[count]} className="bg-cover bg-center w-full h-full" alt="sportimage" />
                                </a>
                                <p className='w-full absolute bottom-1 text-center bg-white font-bold font-sans p-2 box-border text-black lg:text-2xl md:text-lg sm:text-sm'>{txt[0].textContent[count]}</p>
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
                                <ul className='bottom-0 absolute flex justify-center flex-nowrap w-full cursor-pointer bg-white lg:p-5 md:p-3 sm:p-2 '>
                                    <li onClick={() => numbers(1)} className={numberClass[0]}></li>
                                    <li onClick={() => numbers(2)} className={numberClass[1]}></li>
                                    <li onClick={() => numbers(3)} className={numberClass[2]}></li>
                                    <li onClick={() => numbers(4)} className={numberClass[3]}></li>
                                    <li onClick={() => numbers(5)} className={numberClass[4]}></li>
                                    <li onClick={() => numbers(6)} className={numberClass[5]}></li>
                                    <li onClick={() => numbers(7)} className={numberClass[6]}></li>
                                    <li onClick={() => numbers(8)} className={numberClass[7]}></li>
                                    <li onClick={() => numbers(9)} className={numberClass[8]}></li>
                                    <li onClick={() => numbers(10)} className={numberClass[9]}></li>
                                </ul>
                            </div>
                        )
                            : (<div>Loading...</div>)
                    }
                </div>

                <div className='col-span-3 row-span-auto mt-2 grid grid-cols-3 gap-4'>
                    {
                        txt[0] ? (
                            <>
                                {
                                    order1.map(item => (
                                        <div className='flex flex-col justify-center items-start col-span-3 md:col-span-1 row-span-1 w-full h-full bg-white grid grid-rows-3 sm:col-span-3 mx-auto pb-3' style={{ borderBottom: '1px solid black' }} >
                                            <a href={`${txt[0].linkContent[item]}`} className='row-span-2 w-full h-full bg-contain'>
                                                <img src={txt[0].imageContent[item]} alt='' className='row-span-2 w-full h-full bg-contain'></img>
                                            </a>
                                            <div className='row-span-1 pb-1 mt-2'>
                                                <p className='w-full h-full my-auto px-3 text-red-700 font-normal text-lg text-left uppercase' style={{ borderLeft: '3px solid rgb(185 28 28)' }}>Kültür ve Sanat</p>
                                                <p className='w-full h-full  my-auto text-black font-normal text-lg text-left'>{txt[0].textContent[item]}</p>
                                            </div>

                                        </div>
                                    ))
                                }
                            </>
                        ) : null
                    }
                </div>

                <div className="col-span-3 mt-2 grid grid-cols-2 gap-4">
                    {
                        txt[0] ? (
                            <>
                                {
                                    order2.map(item => (
                                        <div className='relative w-full mx-auto object-contain h-full bg-white flex justify-center'>
                                            <a href={`${txt[0].linkContent[item]}`}>
                                                <img src={txt[0].imageContent[item]} className="bg-cover bg-center bg-origin-padding bg-origin-border w-full h-full" alt="sportimage" />
                                            </a>
                                            <p className='w-full h-24 bottom-0 absolute text-center font-bold font-sans p-2 box-border text-white text-xl' style={{ background: "linear-gradient(0deg, rgba(2,0,36,0.6) 50%, transparent 100%)" }}>{txt[0].textContent[item]}</p>
                                        </div>
                                    ))
                                }
                            </>
                        ) : null
                    }
                </div>

                <div className='col-span-3 row-span-auto mt-2 grid grid-cols-3 gap-4'>
                    {
                        txt[0] ? (
                            <>
                                {
                                    order3.map(item => (
                                        <div className='flex flex-col justify-center items-start col-span-3 md:col-span-1 row-span-1 w-full h-full bg-white grid grid-rows-3 sm:col-span-3 mx-auto' style={{ borderBottom: '1px solid black' }}>
                                            <a href={`${txt[0].linkContent[item]}`} className='row-span-2 w-full h-full bg-contain'>
                                                <img src={txt[0].imageContent[item]} alt='' className='row-span-2 w-full h-full bg-contain'></img>
                                            </a>
                                            <div className='row-span-1 pb-1 mt-2'>
                                                <p className='w-full h-full px-3 text-red-700 font-normal text-lg text-left uppercase' style={{ borderLeft: '3px solid rgb(185 28 28)' }}>Kültür ve Sanat</p>
                                                <p className='w-full h-full  text-black font-normal text-lg text-left'>{txt[0].textContent[item]}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </>
                        ) : null
                    }
                </div>

                {/* kırmızı backgroundlu yer */}

                <div className='col-span-3 row-span-auto mt-2 grid grid-cols-3 gap-4 bg-red-600 p-5'>
                    {
                        txt[0] ? (
                            <>
                                {
                                    order4.map(item => (
                                        <div className='flex flex-col justify-center items-center col-span-3 md:col-span-1 row-span-1 w-full h-full sm:col-span-3 mx-auto '>
                                            <a href={`${txt[0].linkContent[item]}`} className='w-full h-full bg-contain relative'>
                                                <img src={txt[0].imageContent[item]} alt='' className='w-full h-full bg-contain'></img>
                                                <p className='absolute bottom-0 p-2 my-auto text-white font-bold text-left' style={{ background: "linear-gradient(0deg, rgba(2,0,36,0.6) 50%, transparent 100%)" }}>{txt[0].textContent[item]}</p>
                                            </a>

                                        </div>
                                    ))
                                }
                            </>
                        ) : null
                    }
                </div>

                {/* kırmızı backgroundlu yer */}

                <div className='col-span-3 row-span-auto mt-2 grid grid-cols-3 gap-4'>
                    {
                        txt[0] ? (
                            <>
                                {
                                    order5.map(item => (
                                        <div className='flex flex-col justify-center items-start col-span-3 md:col-span-1 row-span-1 w-full h-full bg-white grid grid-rows-3 sm:col-span-3 mx-auto' style={{ borderBottom: '1px solid black' }} >
                                            <a href={`${txt[0].linkContent[item]}`} className='row-span-2 w-full h-full bg-contain'>
                                                <img src={txt[0].imageContent[item]} alt='' className='row-span-2 w-full h-full bg-contain'></img>
                                            </a>
                                            <div className='row-span-1 pb-1 mt-2'>
                                                <p className='w-full h-full px-3 text-red-700 font-normal text-lg text-left uppercase' style={{ borderLeft: '3px solid rgb(185 28 28)' }}>Kültür ve Sanat</p>
                                                <p className='w-full h-full  text-black font-normal text-lg text-left'>{txt[0].textContent[item]}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </>
                        ) : null
                    }
                </div>

                <div className="col-span-3 mt-2 grid">
                    {
                        txt[0] ? (
                            <>
                                {
                                    order6.map(item => (
                                        <div className='relative w-full mx-auto h-full bg-white'>
                                            <p className='text-3xl mt-2 mb-2 ml-4 font-bold justify-start'>FOTO</p>
                                            <a href={`${txt[0].linkContent[item]}`}>
                                                <img src={txt[0].imageContent[item]} className="w-full h-max box-border" alt="sportimage" />
                                            </a>
                                            <p className='w-full h-28 bottom-0 absolute text-center font-bold font-sans p-2 box-border text-white text-4xl' style={{ background: "linear-gradient(0deg, rgba(2,0,36,0.6) 50%, transparent 100%)" }}>{txt[0].textContent[item]}</p>

                                        </div>
                                    ))
                                }
                            </>
                        ) : null
                    }
                </div>

                <div className='col-span-3 row-span-auto mt-2 grid grid-cols-3 gap-4 mb-3'>
                    {
                        txt[0] ? (
                            <>
                                {
                                    order7.map(item => (
                                        <div className='flex flex-col justify-center items-start col-span-3 md:col-span-1 row-span-1 w-full h-full bg-white grid grid-rows-3 sm:col-span-3 mx-auto' style={{ borderBottom: '1px solid black' }} >
                                            <a href={`${txt[0].linkContent[item]}`} className='row-span-2 w-full h-full bg-contain'>
                                                <img src={txt[0].imageContent[item]} alt='' className='row-span-2 w-full h-full bg-contain'></img>
                                            </a>
                                            <div className='row-span-1 pb-1 mt-2'>
                                                <p className='w-full h-full px-3 text-red-700 font-normal text-lg text-left uppercase' style={{ borderLeft: '3px solid rgb(185 28 28)' }}>Kültür ve Sanat</p>
                                                <p className='w-full h-full  text-black font-normal text-lg text-left'>{txt[0].textContent[item]}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </>
                        ) : null
                    }
                </div>

                <div className='col-span-3'>
                    {
                        txt[0] ? (
                            <>
                                {
                                    <div className='col-span-3 bg-white h-12 flex justify-center'>
                                        <button onClick={() => more()} className='w-full text-gray, border-2'>DAHA FAZLA GÖSTER</button>
                                    </div>
                                }
                            </>

                        ) : null

                    }
                </div>


            </div>
            <div className='mt-3'>
                {
                    txt[0] ? (
                        <>
                            {
                                <div className='flex bg-black justify-around h-16 items-center'>
                                    <a href="/" className=''>
                                        <img className='mr-36 w-32' src="https://cdn.ntv.com.tr/img/KadinLeftLogo.svg?v=6429z" alt="ntv.com.tr"></img>
                                    </a>
                                    <p className='text-white'>İletişim: n-life@ntv.com.tr</p>
                                    <a href="https://ntv.com.tr">
                                        <span className='text-white text-sm font-semibold'>&#169; Copyrigth 2022 | Tüm Hakları Saklıdır.</span>
                                    </a>
                                </div>
                            }
                        </>

                    ) : null

                }
            </div>

        </div>
    )
}

export default Astrology