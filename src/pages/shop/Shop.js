import React from 'react'
import Carousel from './component2/user/Carousel'
import HotProducts from './component2/user/HotProducts'
import TrendingVendors from './component2/user/TrendingVendors'

function Shop() {
  return (
    <div>
    <Carousel/>
    <h2><HotProducts/></h2>
      <h2><TrendingVendors/></h2>
    </div>
  )
}

export default Shop
