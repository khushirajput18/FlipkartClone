import { Box, styled } from "@mui/material"
import Slide from "./silde";
const Component=styled(Box)`
display:flex;
`;
const Leftcomponent=styled(Box)(({theme})=>({
  width:"83%",
  [theme.breakpoints.down("md")]:{
    width:"100%",
  }
}));
const Rightcomponent=styled(Box)(({theme})=>({
  background:"#FFFFFF",
  padding:5,
  marginTop:10,
  marginLeft:10,
  width:"17%",
  textAlign:"center",
  [theme.breakpoints.down('md')]:{
    display:"none"
  }
}));
const Mideslide=({products,title,timer})=>{
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

return (
    <Component>
        <Leftcomponent>
         <Slide products={products} 
         title={title}
          timer={timer}
          />
        </Leftcomponent>
        <Rightcomponent>
         <img src={adURL} alt="ad" style={{width:217}} />
        </Rightcomponent>
    </Component>
)
}
export default Mideslide