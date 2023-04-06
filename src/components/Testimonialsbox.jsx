import React from 'react'

function Testimonialsbox(props) {
  return (
    <div className='my-5 text-center'>
      <img src={props.image} className='testimonialImg' alt="" />
      <p className='m-5 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, perferendis?</p>
      <h3 className='fw-bold'>{props.name}</h3>
      <p className='text-black-50'>{props.job}</p>
    </div>
  )
}

export default Testimonialsbox