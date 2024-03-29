import React from 'react'
import Nextjs from '../assets/nextJS.png'
import Tailwind from '../assets/tailwind.png'
import Vue from '../assets/vue.png'
import Javascript from '../assets/javascript.png'
import Python from '../assets/python.png'
import Csharp from '../assets/csharp.png'
import ReactImg from '../assets/react.png'
import Mysql from '../assets/mysql.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-[#89d35e]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Nextjs} alt="NextJS icon" />
            <p className='my-4'>Next JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto mt-7' src={Tailwind} alt="Tailwind icon" />
            <p className='my-4'>Tailwind CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Javascript} alt="Javascript icon" />
            <p className='my-4'>Javascript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Python} alt="Python icon" />
            <p className='my-4'>Python</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Csharp} alt="Csharp icon" />
            <p className='my-4'>Csharp</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Vue} alt="Vue icon" />
            <p className='my-4'>Vue</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Mysql} alt="Mysql icon" />
            <p className='my-4'>Mysql</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills