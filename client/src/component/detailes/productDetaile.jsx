import { Typography,Box, styled, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { LocalOffer as Badge } from "@mui/icons-material";
const SmallText=styled(Box)`
 font-size:14px;
 vertical-align:baseline;
 &>p{
 font-size:14px;
 margin-top:10px;
 }

`

const ProductDetail=({product})=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const date=new Date(new Date().getTime()+(5*24*60*60*1000));
    return(
       <>
        <Typography>{product.title.ImageTitle}</Typography> 
      <Typography style={{marginTop:5,color:"#878787",fontSize:14}}>
     8 Ratings & 1 Reviews 
    <Box component="span"><img src={fassured} alt="nothing" style={{width:77,marginLeft:20}} /></Box>
    </Typography>
 <Typography>
 <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
 <Box component="span" style={{color:"#878787"}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
  <Box component="span" style={{color:"#388E3C"}}>{product.price.discount}off</Box>
</Typography>
<Typography>
    Available Offers
</Typography>
<SmallText>
    <Typography><Badge style={{color:"green"}}></Badge>Get extra 20% off upto ₹50 on 1 item(s) T&C </Typography>
    <Typography><Badge style={{color:"green"}}></Badge>Get extra 13% off (price inclusive of discount)</Typography>
    <Typography><Badge style={{color:"green"}}></Badge>Sign up for FlipCart Pay Later and get Flipcart Gift card worth ₹100*know More</Typography>
    <Typography><Badge style={{color:"green"}}></Badge>Buy 2 items save 5%; Buy 3 or more save 10% T&C</Typography>
    <Typography><Badge style={{color:"green"}}></Badge>5% Cashback on Flipcart Axis Bank Card</Typography>
    <Typography><Badge style={{color:"green"}}></Badge>No Cost EMI on Bajaj Finserve EMI Card on cart value above ₹2999</Typography>
</SmallText>
<Table>
    <TableBody>
        <TableRow>
            <TableCell style={{color:"#878787"}}>Delivery</TableCell>
            <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()}|  ₹40</TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{color:"#878787"}}>Warranty</TableCell>
            <TableCell style={{fontWeight:600}}>No Warranty</TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{color:"#878787"}}>Seller</TableCell>
            <TableCell><Box component="span" style={{color:"#2874f0"}}>SuperComNet</Box>
            <Typography>GST invoice available</Typography>
            <Typography>View More Seller Starting from {product.price.cost}</Typography>
            </TableCell>
            
        </TableRow>
    </TableBody>
</Table>
       </>
    )
}
export default ProductDetail;