import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery-1.jpg'
import gallery_2 from '../../assets/gallery-2.jpg'
import gallery_3 from '../../assets/gallery-5.jpg'
import gallery_4 from '../../assets/gallery-4.jpg'


const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
        <button className='btn btn2'>See more <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
    </div>
  )
}

export default Campus