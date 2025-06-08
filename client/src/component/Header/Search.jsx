import { Box, InputBase, ListItem, styled, List } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/action/prductAction";
import { Link } from "react-router-dom";

// Styled Components
const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
  position: relative;
`;

const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

const SearchIconsWrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;
`;

const ListWrapper = styled(List)`
  position: absolute;
  background: #ffffff;
  color: #000;
  margin-top: 36px;
  width: 100%;
  z-index: 10;
  max-height: 300px;
  overflow-y: auto;
`;

const Search = () => {
  const [text, setText] = useState("");
  const { products } = useSelector((state) => state.getProducts);
  console.log(products);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts()); // Make sure this is invoked
  }, [dispatch]);

  const getText = (text) => {
    setText(text);
  };

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search products, brands and more"
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <SearchIconsWrapper>
        <SearchIcon />
      </SearchIconsWrapper>

      {text && (
        <ListWrapper>
          {products
            ?.filter((product) =>
              product?.title?.longTitle
                ?.toLowerCase()
                .includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem key={product.id}>
                <Link to={`/product/${product.id}`} onClick={()=>setText('')} style={{textDecoration:"none",color:"inherit"}}>
                {product.title.longTitle}
                </Link>
                </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;
