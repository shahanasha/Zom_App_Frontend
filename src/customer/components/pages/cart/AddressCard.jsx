import { Button, Card } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';

const AddressCard = ({handleSelectAddress,item,showButton}) => {
    
  return (
    <Card className='flex space-x-5 lg:w-64 m-5 p-5'>
        <HomeIcon/>
        <div className="space-y-5 text-gray-500 " >
            <h1 className="font-semibold text-lg text-white"></h1>
                <p>
                    TC 49/59(1) Alfajr,Karakkamanpam,Nemom.P.O,695020,Kerala ,India
                </p>
                {showButton && <Button variant='outlined' onClick={()=>handleSelectAddress(item)}>
                    select</Button>}  
        </div>
        
    </Card>
  )
}

export default AddressCard