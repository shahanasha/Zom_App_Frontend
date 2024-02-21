import React from 'react'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';

const CartItem = () => {
    return (
        <div className='px-5 '>
            <div className='lg:flex items-center lg:space-x-5'>
                <div>
                    <img className='w-[5rem] h-[5rem] object-cover' src="https://media.istockphoto.com/id/1499248214/photo/the-viral-chopped-italian-sub-sandwich.jpg?s=1024x1024&w=is&k=20&c=9WF2KxDZ14lvmHCOhn-jOImKEzTa1tV9PI9jNzwA5Ws=" alt="" />
                </div>

                <div className='flex items-center justify-between lg:w-[70%]'>
                    <div className="space-y-1 lg:space-y-3 w-full">
                        <p>sandwich</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-1'>
                                <IconButton color='primary'>
                                    <RemoveCircleIcon />
                                </IconButton>
                                <div className='w-5 h-5 text-xs'>5</div>
                                <IconButton color='primary'>
                                    <AddCircleIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <p>₹239</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem