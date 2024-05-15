import React from 'react'

import Header from '../../Components/Header/Header'
import NewArrivals from '../../Components/NewArrivals/NewArrivals'
import PopularItems from '../../Components/PopularItems/PopularItems'
import SelectYour from '../../Components/SelectYour/SelectYour'

const Home = () => {
  return (
    <div>
        <Header/>
        <SelectYour/>
        <NewArrivals/>
        <PopularItems/>

    </div>
  )
}

export default Home