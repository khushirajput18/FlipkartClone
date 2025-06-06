import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Don't forget to import the carousel styles
import { Box, Button, styled, Typography } from '@mui/material';
import Countdown from 'react-countdown';
import { NavLink } from 'react-router-dom';

const Component = styled(Box)`
  margin-top: 10px;
  background: #FFFFFF;
`;

const Deal = styled(Box)`
  padding: 15px 20px;
  display:flex;
`;
const Timer=styled(Box)`
display:flex;
margin-left:10px;
align-items:center;
color:#7f7f7f;
`
const ViewButton=styled(Button)`
margin-left:auto;
background-color:#2874f0;
border-radius:2px;
font-size:13px;
`
const Image=styled('img')({
  width:'auto',
  height:150
});
 
const Text=styled(Typography)`
font-size:14px;
margin-top:5px;
`
const Slide = ({ products,title,timer }) => {
    const responsive={
        desktop:{breakpoint:{max:3000,min:1024},
         items:5},
         tablet:{breakpoint:{max:1024,min:464},
         items:2},
         mobile:{breakpoint:{max:464,min:0},
         items:1}
     };
  // Countdown render function
  const render = ({ hours, minutes, seconds }) => {
    return <Box variant="span">{hours}:{minutes}:{seconds}Left</Box>;
  };

  return (
    <Component>
      <Deal>
        <Typography variant="h6" style={{fontWeight:600}}>{title}</Typography>
      { timer &&
        <Timer>
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg" alt="timer" style={{width:24}}/>
           <Countdown date={Date.now() + 5.04e+7} renderer={render} />
        </Timer>}
        
        <ViewButton variant='contained' color='primary'>View All</ViewButton>
        </Deal>
        <Carousel
  responsive={responsive}
  swipeable={true}
  draggable={true}
  infinite={true}
  autoPlay={true}
  keyBoardControl={true}
  slidesToSlide={1}
  autoPlaySpeed={3000}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  containerClass="carousel-container"
>
 {
  products.map(product=>(
    <NavLink to={`product/${product.id}`}>
    <Box textAlign="center" style={{padding:"25px 15px"}}>
    <Image src={product.url} alt="product" />
    <Text style={{fontWeight:600, color:"#212121"}}>{product.title.shortTitle}</Text>
    <Text style={{ color:"green"}} >{product.discount}</Text>
    <Text style={{ color:"#212121",opacity:'.6'}} >{product.tagline}</Text>
    </Box>
    </NavLink>
  ))
 }


</Carousel>
 
    </Component>
  );
};

export default Slide;
