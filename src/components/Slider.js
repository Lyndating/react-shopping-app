import React, {useState, useRef, useEffect} from 'react';
import './Slider.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import Home_Slide1 from '../Images/Home_Slide1.png';

const homeSliderImages = [
    {title: "Netflex", subtitle:"Join now for unlimited sources", img: "https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ff59fb01-70bb-4018-ad7d-ac95b53f2d79/AU-en-20220516-popsignuptwoweeks-perspective_alpha_website_large.jpg"},
    {title: "Kinder Books", subtitle: "Up to 55% Off", img:"https://cdn.geekwire.com/wp-content/uploads/2018/06/Kindle-Unlimited-book-wall-e1529759353983.jpg" },
    {title: "Smart Phones", subtitle: "Spend & Save", img:"https://photos5.appleinsider.com/gallery/21413-24435-Screenshot_1-xl.jpg"},
    {title: "Soprts Wear", subtitle: "Spend & Save", img: "https://media1.popsugar-assets.com/files/thumbor/nru94gN-Ms9NTmyn9HZSN8LnT_s/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2012/09/38/2/192/1922729/f4e6e2504bab25e4_0824-under-armour_03/i/Run.jpeg"},
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
                <h1>{homeSliderImages[currentImage].title}</h1>
                <p>{homeSliderImages[currentImage].subtitle}</p>
            </div>
            <div 
                className='slider_right_arrow' 
                onClick={()=> {
                    if (currentImage < homeSliderImages.length) {setCurrentImage(currentImage + 1)};
                    if (currentImage === homeSliderImages.length-1) {
                        setCurrentImage(0);
                    }}}><ArrowForwardIosIcon/></div>
        </div>
    </div>


  )
}

export default Slider;