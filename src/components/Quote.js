import React from 'react'
import { Blockquote } from 'flowbite-react';

const Quote = () => {
  return (
    <div className='pl-10 pr-10 flex justify-center '>
        
        <Blockquote className="my-4 border-l-4 border-blue-300 bg-gray-200 p-4 dark:border-gray-500 dark:bg-gray-800 rounded-md pl-2 pr-2">
            "Like freshly picked flowers, let your presence bloom wherever you go, spreading fragrance and beauty to those around you." - Founder
        </Blockquote>
    </div>
  )
}

export default Quote
