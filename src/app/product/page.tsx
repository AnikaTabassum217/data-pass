import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import HandMadeCloth from '@/components/product/HandMadeCloth'
import HandMadeFood from '@/components/product/HandMadeFood'
import Product from '@/components/product/Product'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <Breadcrumb/>
    <Product/>
    <HandMadeFood/>
    <HandMadeCloth/>
    </>
  )
}

export default page
