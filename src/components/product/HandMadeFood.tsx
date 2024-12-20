import Link from 'next/link'
import React from 'react'

const HandMadeFood = () => {
  return (
    <div>
      <div className='text-xl  flex justify-center items-center hover:underline mt-4'>
            <Link href={'/product/hand-made-food'}>
             Hand Made Food
            </Link>
      </div>
    </div>
  )
}

export default HandMadeFood
