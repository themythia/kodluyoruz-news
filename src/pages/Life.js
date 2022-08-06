import React, { useState , useEffect} from 'react'
import "./Life.css"

const Life = (arr = {}) => {
  const [dataPull , setDataPull] = useState(null);
  
  useEffect(() => {
    
  setDataPull (arr) 
   
  }, [arr])
  // console.log(arr)
  // console.log(arr.arr[2])
  // console.log(dataPull?.arr?.[4])
  
  
  // console.log(dataPull.arr)

  

  // console.log(arr)
  // console.log(arr[0]?.["title"])
  // console.log(arr["arr"])
  // console.log(arr.arr[0]?.["title"])
  // console.log(arr[0])
   

  return (
     <>
        <div> 
              <div className='header'>Life</div>
              <div className='navbar'>Kategori</div>
        </div>
        <div className='slickSlider'>Slider Alanı</div>
        <div className='listItem'>
            {/* <div className='listItem2'>{dataPull.arr[0]}</div> */}
            <div className='listItem2'>list2</div>
            <div className='listItem2'>{dataPull?.arr?.[4]?.src}</div>
            {/* <div className='listItem2'>{dataPull?.arr?.[4]?.title}</div> */}
        </div>
        {/* 2li card */}
        <div className='card'> 
            <div className='card1'>card1</div>
            <div className='card2'>card2</div>
        </div>
        <div className='content'>
              <div className='contentAll'>
                1
              </div>
              <div className='contentAll'>
                2
              </div>
              <div className='contentAll'>
                3
              </div>
        </div>
        <div className='redCard'>
          <div className='redCardMain'>
              <div className='redCardIn'></div>
              <div className='redCardIn'></div>
              <div className='redCardIn'></div>
              <div className='redCardIn'></div>
              <div className='redCardIn'></div>
              <div className='redCardIn'></div>
          </div>
        </div>
        <div className='ntvContent'>
          <ul className='ulCard'>
            <li className='listCard'>
            {dataPull?.arr?.[0]?.title}
            </li>
            <li className='listCard'>
            {dataPull?.arr?.[1]?.title}
            </li>
            <li className='listCard'>
            {dataPull?.arr?.[2]?.description}
            </li>
          </ul>
        </div>

        <div className='bigImg'>
          <div>
              <div>
                big image
              </div>
          </div>
        </div>

      {/* multiple ıtems */}
        <div className='innerContent'>
          <div className='innerContentIn'>
              <div className='multipleItems2'>{dataPull?.arr?.[0]?.description}</div>
              
              
              
              <div className='multipleItems2'>{dataPull?.arr?.[1]?.title}</div>
              <div className='multipleItems2'>{dataPull?.arr?.[2]?.title}</div>
              <div className='multipleItems2'>{dataPull?.arr?.[3]?.title}</div>
              <div className='multipleItems2'>{dataPull?.arr?.[4]?.description}</div>
              <div className='multipleItems2'>{dataPull?.arr?.[5]?.title}</div>
              <div className='multipleItems2'>{dataPull?.arr?.[6]?.title}</div>
              <div className='multipleItems2'>{dataPull?.arr?.[7]?.title}</div>
              <div className='multipleItems2'>{dataPull?.arr?.[8]?.title}</div>
              <div className='multipleItems2'>{dataPull?.arr?.[9]?.title}</div>
              <div className='multipleItems2'>{dataPull?.arr?.[10]?.title}</div>
              <div className='multipleItems2'>{dataPull?.arr?.[11]?.title}</div>
              <div className='multipleItems2'>{dataPull?.arr?.[12]?.title}</div>
              <div className='multipleItems2'>{dataPull?.arr?.[13]?.title}</div>
              <div className='multipleItems2'>{dataPull?.arr?.[14]?.title}</div>
              <div className='multipleItems2'>{dataPull?.arr?.[15]?.title}</div>
              <div className='multipleItems2'>{dataPull?.arr?.[16]?.title}</div>
              <div className='multipleItems2'>{dataPull?.arr?.[17]?.title}</div>

          
            
              

          </div>
        </div>

        <div className='showMore'>
            Daha Fazla Göster
        </div>
        <div className='footerIcons '>Ntv'yi Keşfet</div>


        
      
    
    
    
    
    
    
    </>
  )
}

export default Life;