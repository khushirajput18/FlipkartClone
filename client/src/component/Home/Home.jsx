import { Box,styled } from "@mui/material";
import Banner from "./Banner";
import NavBar from "./NavBar";
import { useEffect } from "react";
import { getProducts } from "../../redux/action/prductAction";
import {useDispatch,useSelector} from 'react-redux';
import Slide from './silde'
import Mideslide from "./MidSlide";
import MideSection from "./misSection";
const Component=styled(Box)`
 padding:10px 10px ;
 background:#F2F2F2;
`
const Home=()=>{
 const {products}=useSelector(state=>state.getProducts)
console.log(products);

 
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(getProducts())
    },[dispatch])
    return(
        <>
        
    <NavBar></NavBar>
    <Component>
    <Banner></Banner>
    <Mideslide products={products} title="Deal of the Day" timer={true}></Mideslide>
       <MideSection></MideSection>
    <Slide products={products} title="Discount for You" timer={false}></Slide>
    <Slide products={products} title="Suggesting Items" timer={false}></Slide>
    <Slide products={products} title="Top Selection" timer={false}></Slide>
    <Slide products={products} title="Recommneded Items" timer={false}></Slide>
    <Slide products={products} title="Trending offers" timer={false}></Slide>
    </Component>
    </>
    )
}
export default Home;