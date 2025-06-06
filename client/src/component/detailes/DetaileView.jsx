import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetailes } from "../../redux/action/prductAction";
import { Box, Grid, styled} from '@mui/material';
import ActionItem from "./ActionItem";
import ProductDetail from "./productDetaile";
const Component=styled(Box)`
background:#F2F2F2;
margin-top:55px;

`;
const Container=styled(Grid)`
background:#FFFFFF;
display:flex;
`
const RightComponent=styled(Grid)`
margin-top:50px
display:flex;


`
const DetailView=()=>{
    const dispatch=useDispatch();
    
    const {id}=useParams()  ;
  const {loading,product} = useSelector(state=> state.getProductDetailes);
 useEffect(()=>{
    if(product && id !== product.id)
    dispatch(getProductDetailes(id))
    },[dispatch,id,product,loading])
    return(
 <Component> 
      {  product && Object.keys(product).length &&
        <Container container >
                <Grid item lg={4} md={4} sm={8} xs={12}><ActionItem product={product}></ActionItem> </Grid>
                <RightComponent item lg={8} md={8} sm={8} xs={12}>
                 
                 <ProductDetail product={product}></ProductDetail>
                </RightComponent>
         </Container>
      
      }
       </Component>

    )
}
export default DetailView;