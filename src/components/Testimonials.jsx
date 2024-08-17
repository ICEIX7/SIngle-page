import React from 'react'

function Testimonials() {
    return (
      <section className='bg-gray-100 py-16'>
        <div className="container mx-auto text-center">
            <h2 className='text-3xl font-semibold text-gray-800'>Testimonials</h2>
            <div className="flex flex-wrap justify-center mt-8">
                <div className="w-full md-:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className='text-gray-600'>Amazing service! Im very satisfied with their work.</p>
                    <p className='text-gray-800 font-semibold mt-4'>ice za</p>
                    </div>
                </div>
                <div className="w-full md-:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className='text-gray-600'>เว็บกากโง่ๆ</p>
                    <p className='text-gray-800 font-semibold mt-4'>momo</p>
                    </div>
                </div>
                <div className="w-full md-:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className='text-gray-600'>ว้าวสุดยอดเลยลูกเพี่ย!!!</p>
                    <p className='text-gray-800 font-semibold mt-4'>jurie</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Testimonials