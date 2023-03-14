import React, { Component } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'

export class Navingation extends Component {
  render() {
    return (
        <div className='bg-gray-200 xl:w-[255px] xs:w-28 px-2 '>
            <div className=''>
                {/* Logo Of Page {Sahinote} */}
                {/* This Is CDN Link */}
                <img src="https://ik.imagekit.io/3wzfnznig/logo.png?updatedAt=1678546270675" alt="logo" className='mx-auto mt-16'/>
            </div>
            {/* Button */}
            <div className='mt-16'>
                <button className='bg-green-700 text-white xl:w-36 xs:w-12 h-10 rounded-2xl xs:rounded-full flex mx-auto px-4 py-2'>
                <AiOutlinePlus className='xl:mx-1 xl:mt-1 xs:mt-1'  />
                    <label className='md:block xs:hidden'>New Notes</label>
                </button>
            </div>
            {/* Navigation */}
            <div className='xl:ml-10 xs:px-2 mt-7'>
                <a href='' className='font-semibold xs:text-xs xs:text-center xs:underline-offset-1  text-left py-2'>Home</a>
                <br />
                <a href='' className='font-semibold xs:text-xs xs:text-center xs:underline-offset-1 text-left py-2'>Saved Notes</a>
            </div>
    </div>
    )
  }
}

export default Navingation
