import Link from 'next/link'
import React from 'react'

const HandMadeCloth = () => {
  return (
    
      <div className='text-xl  flex justify-center items-center hover:underline mt-2'>
            <Link href={'/product/hand-made-cloth'}>
             Hand Made Cloth
            </Link>
      </div>
    
  )
}

export default HandMadeCloth
