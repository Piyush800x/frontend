import React from 'react'
import { Blockquote } from 'flowbite-react';

const Quote = () => {
  return (
    <div className='pl-10 pr-10 flex justify-center '>
        
        <Blockquote className="my-4 border-l-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-500 dark:bg-gray-800 rounded-md pl-2 pr-2">
            "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to
            complex dashboard. Perfect choice for your next SaaS application."
        </Blockquote>
    </div>
  )
}

export default Quote
