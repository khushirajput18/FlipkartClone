import Carousel from 'react-multi-carousel';
import { styled } from '@mui/material';
import 'react-multi-carousel/lib/styles.css'
import { bannerData } from '../constant/data';
const responsive={
   desktop:{breakpoint:{max:3000,min:1024},
    items:1},
    tablet:{breakpoint:{max:1024,min:464},
    items:1},
    mobile:{breakpoint:{max:464,min:0},
    items:1}
};
const Image=styled("img")(({theme})=>({
    width:"100%",
    height:300,
    [theme.breakpoints.down("md")]:{
        objectFit:"cover",
        height:180
    }
}));
const  Banner=()=>{
    return(
     <Carousel responsive={responsive}
     swipeable={false}
     draggable={false}
     infinite={true}
     autoPlay={true}
     keyBoardControl={true}
     slidesToSlide={1}
     autoPlaySpeed={3000}
     dotListClass='custom-do-list-style'
     itemClass='carousel-item-padding-40-px'
     containerClass='carousel-container'>
        {
            bannerData.map(data=>(
                <Image src={data.url} alt="banner" />
            ))
        }
     </Carousel>
    )
}
export default Banner;