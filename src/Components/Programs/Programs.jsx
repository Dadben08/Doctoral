import React from 'react'
import './Programs.css'
import program from '../../assets/Program_1.jpg'
import program2 from '../../assets/program_2.jpg'
import program3 from '../../assets/program_3.jpg'
const Programs = () => {
  return (
    <div className='programs' name ='Program'>
        <div className="program">
            <img src={program} alt="" />
            <div className="caption">
            <i class='bx bx-book-reader' style={{color: '#fff', fontSize: '3rem'}} ></i>
            <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program2} alt="" />
            <div className="caption">
            <i class='bx bxs-graduation' style={{color: '#fff', fontSize: '3rem'}} ></i>
            <p>Master Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program3} alt="" />
            <div className="caption">
            <i class='bx bx-certification' style={{color: '#fff', fontSize: '3rem'}} ></i>
            <p>Post Graduate Degree</p>
            </div>
        </div>
    </div>
  )
}

export default Programs