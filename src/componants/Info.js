import React from 'react'
import './Info.css'
import img from '../componants/image/android-icon-36x36.png'
function Info() {
  return (
    <div>
          <div className="info-container">
      
      <div className="info0">
        <div>
        <a href="https://the-snakes-game.netlify.app"><button>The Snake</button></a>
        </div>
        <div className="infoimg">
        <a href="https://github.com/seni7/The-Snake"><img src={img} alt=''/></a>  
        </div> 
        <div className="info3">
      <div>
      <a href="/"><button>Apple</button></a>
      </div>
      <div className="infoimg">
        <a href="https://github.com/seni7/Apple"><img src={img} alt=''/></a>  
        </div>
      </div>                            
      </div>

      <div className="info2">
        <div>
        <a href="https://clone-97c18.web.app"><button>Amazon</button></a>
        </div>
        <div className="infoimg">
        <a href="https://github.com/seni7/AmazonClone"><img src={img} alt=''/></a>  
        </div>
        <div className="info4">
        <div>
        <a href="/"><button>Evangadi</button></a>
        </div>
        <div className="infoimg">
        <a href="https://github.com/seni7/Evangadi"><img src={img} alt=''/></a>  
        </div>                             
      </div>
        </div>
       
 <div className="info1">
  <div>
       <div>
      <a href="https://netflix-clone-b976b.web.app"><button>Netflix</button></a>
      </div>
      <div className="infoimg">
        <a href="https://github.com/seni7/Netflix-Clone/tree/main/src"><img src={img} alt=''/></a>  
        </div>
        <div className="info13">
      <div>
      <a href="sun-tour-o4s2qw500-seni7.vercel.app"><button>SunTour</button></a>
      </div>
        <div className="infoimg">
        <a href="https://github.com/seni7/Tourism-website"><img src={img} alt=''/></a>  
        </div>
  </div>
    
      </div>
      </div>
      
      {/* <div className="info3">
      <div>
      <a href="https://netflix-clone-b976b.web.app"><button>Apple</button></a>
      </div>
      <div className="infoimg">
        <a href="https://github.com/seni7/Apple"><img src={img} alt=''/></a>  
        </div>
      </div> */}
      {/* <div className="info4">
        <div>
        <a href="https://the-snakes-game.netlify.app"><button>Evangadi</button></a>
        </div>
        <div className="infoimg">
        <a href="https://github.com/seni7/Evangadi"><img src={img} alt=''/></a>  
        </div>                             
      </div> */}
    
    </div> 
   
    </div>
  )
}

export default Info