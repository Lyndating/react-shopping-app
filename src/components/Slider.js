import React, {useState, useRef, useEffect} from 'react';
import './Slider.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import Home_Slide1 from '../Images/Home_Slide1.png';

const homeSliderImages = [
    {title: "Netflex", subtitle:"Join now for unlimited sources", img: "https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ff59fb01-70bb-4018-ad7d-ac95b53f2d79/AU-en-20220516-popsignuptwoweeks-perspective_alpha_website_large.jpg"},
    {title: "Kinder Books", subtitle: "Up to 55% Off", img:"https://cdn.geekwire.com/wp-content/uploads/2018/06/Kindle-Unlimited-book-wall-e1529759353983.jpg" },
    {title: "Smart Phones", subtitle: "Spend & Save", img:"https://photos5.appleinsider.com/gallery/21413-24435-Screenshot_1-xl.jpg"},
    {title: "Better Reading", subtitle: "Top New Books", img: "https://www.davidjones.com/images/assetimages/2022/aw/32_wk_feb/Home/cl_book1.jpg"},
    {title: "Shop Kids", subtitle:"Spend & Save", img: "https://cdn.mos.cms.futurecdn.net/5UUusDiBhg2jFZMtvbT5sK.jpg"}
];


function Slider() {
    const [currentImage, setCurrentImage] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeOut = () => {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(()=>{
        resetTimeOut();
        timeoutRef.current = setTimeout(()=>
            setCurrentImage((prev)=>  prev === homeSliderImages.length -1 ? 0 : prev + 1),
            5000
        );
        return ()=>{
            resetTimeOut();
        };
    }, [currentImage]);

  return (
      <>
    <div className='slider_container' >
        <div className='slider_inner' style={{backgroundImage:`url(${homeSliderImages[currentImage].img})`}}>
            
            <div 
                className='slider_left_arrow' 
                onClick={()=> {
                    if (currentImage > 0) {setCurrentImage(currentImage - 1)};
                    if (currentImage ===  0) {
                        setCurrentImage(homeSliderImages.length-1);
                    }     
                    }}><ArrowBackIosIcon/></div>
            <div className='slider_center'>

            </div>
            <div 
                className='slider_right_arrow' 
                onClick={()=> {
                    if (currentImage < homeSliderImages.length) {setCurrentImage(currentImage + 1)};
                    if (currentImage === homeSliderImages.length-1) {
                        setCurrentImage(0);
                    }}}><ArrowForwardIosIcon/>
            </div>
        </div>
    </div>
    <div className='slider_titles'>
            <h1>{homeSliderImages[currentImage].title}</h1>
            <p>{homeSliderImages[currentImage].subtitle}</p>
    </div>
    </>


  )
}

export default Slider;