import React , {useState , useEffect}from 'react'
import "./Health.css"



const Health = (arr2 = {}) => {
      const [dataPull2 , setDataPull2] = useState(null);
  
      useEffect(() => {
        
      setDataPull2 (arr2) 
       
      }, [arr2])
 
console.log(arr2)
  


  return (
     <>
        <div className='header'>NTV</div>
        <div className='navbar'>Sağlık</div>
        <div className='altNavbar'>Sağlık Haberleri</div>
        <div className='slickSlider'>Slider Alanı</div>
        <div className='slider2'>2. slider</div>
        
        <div className='list'>
              <div className='list1'>
                  <a href = {dataPull2?.arr2?.[0]?.id}  target = '_blank'>
                        <img src={dataPull2?.arr2?.[0]?.description.substring(10 , dataPull2?.arr2?.[0]?.description.indexOf(' ' , 10)-1 )}></img>
                        <div>
                              {dataPull2?.arr2?.[0]?.title}
                        </div>
                </a>

              </div>
              <div className='list2'>liste2</div>
              {/* <div className='listItem2'>{newArray.map(function(each,key){return <div key={key} > {each}</div>})}</div> */}
        </div>
        <div className='multiple'>
            <div className='multipleIn'>

            <div className='newsDivDis'>
                        {arr2.arr2.map((value, index) => {
                        
                        return <div className='newsDiv' key={index}>
                        <a href = {value?.id} target = '_blank' textDecoration='none'>
                              <img src = {value?.description.substring(10,value?.description.indexOf(' ' , 10)  -1 )} className='newsimage'></img>
                              <div className='newstitle'>{value?.title}</div>
                        
                        </a>

                        

                        </div>
                        
                        })}
        </div>








                  {/* <div className='multipleItems'>hata düzelticek </div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div>
                  <div className='multipleItems'>multiple items</div> */}
            </div>
        
            </div>
        <div className='showMore'>Daha Fazla Göster</div>
        <div className='footerCopyRight'>NTV icon copyright</div>
        <div className='footer'>Kurumsal</div>
        <div className='footerIcons '>Ntv'yi Keşfet</div>


        
      
    
    
    
    
    
    
    </>
  )
}

export default Health;