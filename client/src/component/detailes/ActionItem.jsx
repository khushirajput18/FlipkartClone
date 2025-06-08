import { Box, Button, styled } from "@mui/material";
import {ShoppingCart as Cart,FlashOn as Flash} from '@mui/icons-material';

const LeftComponent=styled(Box)`
 min-width:40%;
 padding:40px 0 0 80px;
`;
const Image=styled("img")({
    padding:"15px 20px",
//    border:"1px solid #f0f0f0",
   width:"95%"
});
const StyledButton=styled(Button)`
width:46%;
height:50px;
border-radius:2px;
`
 
const ActionItem=({product})=>{
    return(
   <LeftComponent>
    <Image src={product.detailUrl} alt="noo" />
    <StyledButton variant="container" style={{marginRight:10,background:"#ff9f00"}}><Cart></Cart>Add to Cart</StyledButton>
    <StyledButton variant="container" style={{background:"#fb541b"}}><Flash></Flash>Buy Now</StyledButton>
   </LeftComponent>
    )
}
export default ActionItem;