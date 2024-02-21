import React from 'react'
import "./HomePage.css"
import MultipleItemCarousel from './MultipleItemCarousel'
import { restaurants } from '../../../../Data/Restaurants'
import RestaurantCard from './RestaurantCard'


export const HomePage = () => {
  return (
    <div>
      <section className='-z-50 banner relative flex flex-col justify-center items-center'>
        <div className='w-[50vw] z-10 text-center'>
          <p className='text-2xl lg:text-7xl font-bold z-10 py-5'> Zom Food</p>
          <p className='z-10 text-gray-300 text-xl lg:text-4xl'>Taste the Convenience: Food and Delivered!!</p>
        </div>
        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadeout"></div>
      </section>
      <section className="p-10 lg:py-10 lg:px-20">
        <div>
          <p className="text-2xl font-semibold text-gray-400 pb-10">Top Meals </p>
        </div>
        <MultipleItemCarousel />
      </section>

      <section className='px-5 lg:px-20'>
        <div>
          <h1 className="text-2xl font-semibold text-gray-400 py-3" >
            Order from Our Handpicked Favourites
          </h1>
          <div className="flex flex-wrap items-center justify-around">

            {/* {restaurants.map((item)=><RestaurantCard item={item}/>)} */}
            {restaurants.map((restaurant,index) => (
              <RestaurantCard key={restaurant.id} item={restaurant} index={index} />
            ))}

          </div>
        </div>
      </section>
    </div>
  )
}
