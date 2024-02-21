import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = (item) => {
    return (
        <Card className='flex justify-between items-center p-5'>

            <div className='flex items-center space-x-5'>
                <img className='h-16 w-16' src="https://media.istockphoto.com/id/1498497473/photo/barbecued-chicken.jpg?s=1024x1024&w=is&k=20&c=A819qGcpQU1G3sxi_Ct8KyZWmJpFxrS-HRjPOw4Kfgw=" alt="" />
                <div>
                    <p>Grilled Chicken</p>
                    <p className='text-gray-400'>₹499</p>
                </div>
            </div>

            <div>
                <Button variant='contained' >
                    Track
                </Button>
            </div>
        </Card>
    )
}

export default OrderCard