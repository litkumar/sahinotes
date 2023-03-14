import React, { Component } from 'react'
import { BiSearch } from 'react-icons/bi'

export class Body extends Component {
  render() {
    return (
        <div className=' w-full'>
            {/* Search Bar */}
            <div className='flex mt-14'>
                <div className='flex mx-auto'>
                    <input type="text"  className='w-[600px] h-[49px] px-4 rounded-l-lg border'/>
                    <div>
                        <button className='bg-green-500  w-12 h-12 rounded-r-lg '>
                            <BiSearch className='text-white mx-auto' size='1.5rem'/>
                        </button>
                    </div>
                </div>
            </div>
            {/* Gradient image */}
            <div className='mt-5'>
                <img src="https://ik.imagekit.io/3wzfnznig/Rectangle_29.png?updatedAt=1678547599833" className='w-full' alt="" />
            </div>

            <div className='px-7 pt-7 bg-gray-100'>
                <div className='flex justify-between'>

                    {/* Profile , Subscribe  */}
                    <div className='flex'>
                            <div className='w-[75px] h-[75px] flex items-center text-center bg-green-400 text-white rounded-full'>
                                <h1 className='mx-auto'>OK</h1>
                            </div>
                            <div className='ml-3 mt-3'>
                                <h1 className='font-semibold'>Om Khandade</h1>
                                <p className='text-sm'>248 subscribers</p>
                            </div>
                    </div>
                    <div className='mt-3'>
                        <button className='h-9 w-24 bg-[#6FCF97] font-semibold text-sm font-sans drop-shadow-md'>SUBSCRIBE</button>
                    </div>
                </div>

                {/* Navigation Buttons */}

                <div className='flex mt-5 ml-3'>
                    <div className='flex mr-10 py-1 hover:border-b-4 border-green-600'>
                        <button className=' w-16 text-left'>Notes</button>
                        <div className='bg-green-500 w-5 h-5 rounded-sm text-white text-sm mt-1 text-center'>3</div>
                    </div>
                    <div className='flex mr-10 py-1 hover:border-b-4 border-gray-600'>
                        <button className=' w-20 text-left'>Noteslists</button>
                        <div className='bg-gray-500 w-5 h-5 rounded-sm text-white text-sm mt-1 text-center'>1</div>
                    </div>
                    <div className='flex  py-1 hover:border-b-4 border-gray-600'>
                        <button className=' w-14 text-left'>About</button>
                    </div>
                </div>
            </div>
            
        {/* Note Section */}
        <div>
            <div className='flex'>
                
                <div className='grid xl:grid-cols-3 lg:grid-cols-1 lg:gap-y-5 lg:mx-auto mt-3'>
                    <div class="container">
                        <div class="photo">
                            <img src="https://ik.imagekit.io/3wzfnznig/note1.png?updatedAt=1678557040680" className='h-full mx-auto pb-5 ' alt="" />
                            <p className='rounded-md bg-black text-white w-6 h-4 text-xs absolute bottom-7 right-7 text-center'>52</p>
                        </div>
                        <div class="title">
                            <h1 className='font-bold text-left'>First Year: Dental Anatomy - Bones Complete (4 topics)</h1>
                        </div>
                        <div class="views">
                            <p className='mr-2 text-sm'>51K views </p>
                            <li className='text-sm'>2 days ago</li>
                        </div>
                        <div class="tick">
                            <img src="https://ik.imagekit.io/3wzfnznig/tick_.png?updatedAt=1678557667539" alt="" className='absolute right-0 bottom-5' />
                        </div>
                    </div>

                    <div class="container">
                        <div class="photo">
                            <img src="https://ik.imagekit.io/3wzfnznig/notes2.png?updatedAt=1678557041565" className='h-full mx-auto pb-5' alt="" />
                            <p className='rounded-md bg-black text-white w-6 h-4 text-xs absolute bottom-7 right-7 text-center'>3</p>
                        </div>
                        <div class="title">
                            <h1 className='font-bold text-left'>CIIPS: Triz benchmarking (Lecture 8)</h1>
                        </div>
                        <div class="views">
                            <p className='mr-2 text-sm'>29K views  </p>
                            <li className='text-sm'>6 days ago</li>
                        </div>
                        <div class="tick">
                            <img src="https://ik.imagekit.io/3wzfnznig/tick_.png?updatedAt=1678557667539" alt="" className='absolute right-0 bottom-5' />
                        </div>
                    </div>

                    <div class="container">
                        <div class="photo">
                            <img src="https://ik.imagekit.io/3wzfnznig/notes3.png?updatedAt=1678557041352" className='h-full mx-auto pb-5' alt="" />
                            <p className='rounded-md bg-black text-white w-6 h-4 text-xs absolute bottom-7 right-7 text-center'>5</p>
                        </div>
                        <div class="title">
                            <h1 className='font-bold text-left'>JEE: Organic Chemistry - Halogens in 5 minutes</h1>
                        </div>
                        <div class="views">
                            <p className='mr-2 text-sm'>In Draft </p>
                            {/* <li>2 days ago</li> */}
                        </div>
                        <div class="tick">
                            <img src="https://ik.imagekit.io/3wzfnznig/tick_.png?updatedAt=1678557667539" alt="" className='absolute right-0 bottom-5 ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default Body
