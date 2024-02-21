
import { Button, Card } from '@mui/material';
import React from 'react'

const MenuItemCard = ({item}) => {
    const handleItemToCart=()=>{
        console.log("handle Item To Cart");
    }
  return (
    <Card className=' p-5 lg:flex items-center justify-between box'>
        <div className="lg:flex items-center lg:space-x-5">
            <img className='w-[7rem] h-[7rem] object-cover' src="https://media.istockphoto.com/id/183321245/photo/south-indian-crepe-masala-dosa.jpg?s=1024x1024&w=is&k=20&c=4O8j7wawlIl1LnOHyaRdTr3jbr5TyH4Q-O7DrJa6rFU=" alt="" />

            <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                <p className='font-semibold text-xl'>{`Pizza`}</p>
                <p>₹{80}</p>
                <p className='text-gray-400'>{`Rice,Sambar,chatni`}</p>
            </div>
        </div>
        <div>
            <Button onClick={handleItemToCart}>Add To Cart</Button>
        </div>
    </Card>
  )
}

export default MenuItemCard