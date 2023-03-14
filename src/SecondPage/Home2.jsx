import React, { Component } from 'react'
import {FiThumbsUp} from 'react-icons/fi';
import {AiOutlineShareAlt} from 'react-icons/ai';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {IoIosArrowBack} from 'react-icons/io';


export class Home2 extends Component {
  render() {
    return (
      <div className='grid xl:grid-cols-2 md:grid-cols-1'>

        <div className='mt-2'>
           <div className='flex items-center w-4/6 mx-auto my-5'>
                <IoIosArrowBack size="1.5rem"/>
                <h1 className='my-5 font-bold'>CIIPS: Triz benchmarking (Lecture 8)</h1>
           </div>
            <img src="https://ik.imagekit.io/3wzfnznig/notes.png?updatedAt=1678546270524" className='w-4/6 mx-auto h-full' alt="" />
        </div>
        <div>
            <div className='flex w-4/6 mx-auto  gap-x-5 max-xl:mt-10 md:mt-32 sm:mt-32 xs:mt-32'>
                <FiThumbsUp size="1.5rem"/>28 Likes
                <AiOutlineShareAlt size="1.5rem"/>Share
                <BsThreeDotsVertical size="1.5rem"/>
            </div>
            <div>
                <div className='grid grid-cols-3 w-4/6 ml-3 mt-10'>
                    <div className="grid justify-items-end">
                        <img src="https://ik.imagekit.io/3wzfnznig/user.png?updatedAt=1678546270942" className='rounded-full' alt="" />
                    </div>
                    <div className="grid justify-items-start px-4">
                        <h1 className='font-semibold'>Om Khandade</h1>
                        <p className='text-sm'>GPA 10</p>
                    </div>
                    <div className="grid justify-items-start content-center ">
                        <button className='rounded-full text-white bg-green-600 h-9 w-20 font-semibold text-sm'>Follow</button>
                    </div>
                </div>
            </div>
            <div className='text-start w-4/6 mx-auto  mt-10'>
                <h1 className='font-bold text-xl'>Description</h1>
                <p className='font-semibold text-sm'>Tristique posuere faucibus sed vel ut suspendisse. Pellentesque purus accumsan nisl platea odio metus. Egestas sit malesuada sit sit habitant. Odio ornare potenti neque diam urna id. Ultrices massa massa consequat habitant dui massa sapien et, morbi. Malesuada scelerisque non fermentum, velit ullamcorper vestibulum. Orci velit tortor ornare et urna arcu nisl. Ipsum neque nulla sed id venenatis.</p>
            </div>
            <div className='mt-10 text-xl'>
                <h1 className='text-start w-4/6 mx-auto mb-2 font-bold'>Resources</h1>
                <div className='flex w-4/6 mx-auto border p-3 rounded-md'>
                    <img src="https://ik.imagekit.io/3wzfnznig/book_front.png?updatedAt=1678546270127" alt="" />
                    <div className='text-start mx-5'>
                        <h1 className='font-bold text-sm'>Wheeler's Dental Anatomy, Physiology and Occlusion, 1st South Asia Edition</h1>
                        <button className='bg-orange-400 rounded-2xl text-sm font-semibold text-white p-2 mt-10'>Buy on amazon</button>
                    </div>
                </div>
            </div>
        </div>        
      </div>
    )
  }
}

export default Home2
