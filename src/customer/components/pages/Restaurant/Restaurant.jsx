import { Card, Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuItemCard from './MenuItemCard';

const categories = [
    "Thali",
    "Starters",
    "Indian Main Course",
    "Rice and Biriyani",
    "Breads",
    "Accompaniments",
    "Desserts",
];

const foodType = ["Vegetarian Only", "Non-Vegerarian Only", "Both"];
const menu = [1, 1, 1, 1, 1, 1];
const Restaurant = () => {

    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedFoodType, setselectedFoodType] = useState();

    const handleFoodTypeChange = () => {
        console.log("Selected food type - ", selectedFoodType);
    }
    const handleCategoryChange = () => {

        console.log("Selected Category", selectedCategory);
    }
    return (
        <div className='px-5 lg:px-20'>

            <section>
                <h3 className='text-gray-500 py-2 mt-10'>
                    {`Home/India/Zom Restaurant/2/Order Online`}
                </h3>
                <div>
                    <img className='w-full h-[40vh] object-cover' src="https://pbs.twimg.com/media/GCuqa0KbwAACujx.jpg" alt="" />
                </div>
                <div>
                    <h1 className='text-4xl py-1 font-semibold'>{`Shah Restaurant`}</h1>
                    <p className='text-gray-500'>
                        30+ varieties of Pizzas
                    </p>
                    <p className='py-3 text-orange-300'>
                        Open now 10.30am - 12midnight (Today)
                    </p>
                </div>
            </section>
            <Divider />

            <section className='pt-[2rem] lg:flex relative'>
                <div className='space-y-10 lg:w-[20%]'>
                    <Card className=' p-5 space-y-5 lg:sticky top-28'>
                        <div>
                            <Typography sx={{ paddingBottom: "1rem" }} varient='h5'>
                                Category
                            </Typography>
                            <FormControl component={"fieldset"}>
                                <RadioGroup name='category' value={selectedCategory}
                                    onChange={handleCategoryChange}>
                                    {categories.map((item, index) => <FormControlLabel
                                        key={index}
                                        value={item}
                                        control={<Radio />}
                                        label={item}
                                        sx={{ color: "gray" }}
                                    />)}

                                </RadioGroup>
                            </FormControl>

                        </div>
                        <Divider />
                        <div>
                            <Typography sx={{ paddingBottom: "1rem" }} varient='h5'>
                                Food Type
                            </Typography>
                            <FormControl component={"fieldset"}>
                                <RadioGroup name='foodType' value={selectedFoodType}
                                    onChange={handleFoodTypeChange}>
                                    {foodType.map((item, index) => <FormControlLabel
                                        key={index}
                                        value={item}
                                        control={<Radio />}
                                        label={item}
                                        sx={{ color: "gray" }}
                                    />)}

                                </RadioGroup>
                            </FormControl>

                        </div>
                    </Card>
                </div>
                <div className='lg:w-[80%] space-y-5 lg:pl-10 '>

                    {menu.map((item) => <MenuItemCard item={item} />)}

                </div>
            </section>
        </div>
    )
}

export default Restaurant