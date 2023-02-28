import React, { useState } from 'react'
import './Slider.css'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';


function Slider() {
    const [currentSlide, setcurrentSlide] = useState(0);

    const prevSlide = () => {
        setcurrentSlide(currentSlide === 0 ? 2  : (prev) => prev - 1);
    }

    const nextSlide = () => {
        setcurrentSlide(currentSlide === 2 ? 0  : (prev) => prev + 1);
    }

const data = [
    "https://media.istockphoto.com/id/909454816/photo/two-woman-doing-fun-in-lake-water.jpg?s=1024x1024&w=is&k=20&c=N2LHxYHpIf9-xJdI5NCmnbWncNCL51KvPZ_Hu68Akto=",
    "https://media.istockphoto.com/id/1179235120/photo/athletic-woman-climbing-on-overhanging-cliff-rock-with-sunset-sky-background.jpg?s=2048x2048&w=is&k=20&c=2LxasRuFEeF_b-JUJkFZLG7rUEsK1vORT0adrBemY4E=",
    "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg"
]


    return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="slider-icons">
            <div className="slider-icon" onClick={prevSlide}><KeyboardArrowLeftOutlinedIcon/></div>
            <div className="slider-icon"  onClick={nextSlide}><KeyboardArrowRightOutlinedIcon/></div>
        </div>
    </div>
  )
}

export default Slider