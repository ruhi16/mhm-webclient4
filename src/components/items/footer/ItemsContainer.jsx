import React from 'react'
import { Products, Resources, Companies, Icons, Supports } from './Menus'
import Items from './Items'

function ItemsContainer() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-5 sm:px-8 py-16'>

        <Items Links={Products} title="Madrasah"></Items>
        <Items Links={Resources} title="Resources"></Items>
        <Items Links={Companies} title="Contacts"></Items>
        <Items Links={Icons} title="Address"></Items>
        {/* <Items Links={Supports} title="Product"></Items> */}
      
    </div>
  )
}

export default ItemsContainer