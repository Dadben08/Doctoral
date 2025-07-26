import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user1.jpg'
import user_2 from '../../assets/user2.jpg'
import user_3 from '../../assets/user3.jpg'
import user_4 from '../../assets/user4.webp'

const Testimonial = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx  > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {

        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
        
    }
  return (
    <div className='testimonials' id='Testimonial'>
        <img src={next_icon} alt=""  className='next-btn'  onClick={slideForward}/>
        <img src={back_icon} alt=""  className='back-btn'  onClick={slideBackward}/>
       
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Jason Statham</h3>
                                <span>Everything Doctoral, Nigeria</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quos.</p>
                    </div>
                </li> 
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Jason Statham</h3>
                                <span>Everything Doctoral, Nigeria</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quos.</p>
                    </div>
                </li>
                 <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Jason Statham</h3>
                                <span>Everything Doctoral, Nigeria</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quos.</p>
                    </div>
                </li> 
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Jason Statham</h3>
                                <span>Everything Doctoral, Nigeria</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quos.</p>
                    </div>
                </li> 
            </ul>
        </div>
    </div>
  )
}

export default Testimonial