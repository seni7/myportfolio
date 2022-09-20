import React from 'react'
import '../componants/ProjectTemp.css'
function ProjectTemp({title, image}) {
  return (
    <div>
          <div className='product'>
        <div className='product__info'>
        <p>{title}</p>
        </div>
            <img src={image}  alt="" />
    <button onClick={'/'}>Add to Basket</button>
    </div>
    </div>
  )
}

export default ProjectTemp