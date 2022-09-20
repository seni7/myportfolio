import React from 'react'
import './Project.css'
import ProjectTemp from './ProjectTemp'
import apple  from '../componants/image/Apple.jpg'
function Project() {
  return (
    <div>
         <div className='home'>

           {/*  ProjectTemps */}
           <div className="home__row">
              <ProjectTemp 
                //   title="Ethiopian Christian art  Ethiopian Cross T-Shirt"
                image={apple}
              />
              
              <ProjectTemp 
                  title="MEROKEETY Women's Short Sleeve Lace Floral Cocktail Dress,  "
                  image="https://m.media-amazon.com/images/I/61Q1UPgsDNL._AC_UY445_.jpg"
              />
              <ProjectTemp
                  title="OmniPoint adjustable switches: Allow for  of actuation."
                  image="https://m.media-amazon.com/images/I/811-0kItnvL._AC_SX450_.jpg"
              />
          </div>
          <div className="home__row">
              <ProjectTemp
                  title="CAs an alternative,the Kindle eBook is available now "
                  image="https://m.media-amazon.com/images/I/41x7bwd0kDS._AC_SY780_.jpg"
              />
              <ProjectTemp
                  title="iPhone Charger, YUNSONG Nylon Braided Lightning Cable ."
                  image="https://m.media-amazon.com/images/I/51lTry8CSZL._AC_SY1000_.jpg"
              />
              <   ProjectTemp
                   title="Ethiopian Christian art Christ in Glory Ethiopian nkjn "
                   image="https://m.media-amazon.com/images/I/71FLsWWmE8L._AC_SL1500_.jpg"
             />   
          </div>
        
    </div>
    </div>
  )
}

export default Project