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
        <div className='header'>
            <div className="logo"><img src="https://cdn.ntv.com.tr/img/logo.svg?v=6507b" width="90" height="34"></img></div>
        </div>
        <div className='navbar'>Sağlık</div>
        <div className='altNavbar'><div className="altNavbarText">Sağlık Haberleri</div></div>
        <div className='slickSlider'>Slider Alanı</div>
        <div className='slider2'>2. slider</div>
        
        <div className='list'>
              <div className='list1'>
                  <a href = {dataPull2?.arr2?.[0]?.id}  target = '_blank'>
                        <img src={dataPull2?.arr2?.[0]?.description.substring(10 , dataPull2?.arr2?.[0]?.description.indexOf(' ' , 10)-1 )}></img>
                        <div className='cardListTitle'>
                              {dataPull2?.arr2?.[0]?.title}
                        </div>
                </a>

              </div>
              <div className='list2'>
                  <a href = {dataPull2?.arr2?.[1]?.id}  target = '_blank'>
                              <img src={dataPull2?.arr2?.[1]?.description.substring(10 , dataPull2?.arr2?.[1]?.description.indexOf(' ' , 10)-1 )}></img>
                              <div className='cardListTitle'>
                                    {dataPull2?.arr2?.[1]?.title}
                              </div>
                  </a>
              </div>
              
        </div>
        <div className='multiple'>
            <div className='multipleIn'>

                  <div className='newsDivDis'>
                              {arr2.arr2.map((value, index) => {
                              
                              return <div className='newsDivhealth' key={index}>
                              <a href = {value?.id} target = '_blank' textDecoration='none'>
                                    <img src = {value?.description.substring(10,value?.description.indexOf(' ' , 10)  -1 )} className='newsimage'></img>
                                    <div className='newstitlehealth'>{value?.title}</div>
                              
                              </a>

                              

                              </div>
                              
                              })}
                  </div>
                  
            </div>
      
      </div>
        <div className='showMorehealt'>Daha Fazla Göster</div>
        <div className='footerCopyRighthealth'>NTV icon copyright</div>
        <div className='footerhealth'>Kurumsal</div>
        <div className='footerIconshealth'>Ntv'yi Keşfet</div>  
    
    </>
  )
}

export default Health;