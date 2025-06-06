import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  Drawer,
  ListItem,
  List
} from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButton";
import { NavLink } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import { useState } from "react";

// Styled components
const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(NavLink)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const Plusimage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});


const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none", // hide buttons on mobile
  },
}));

const MenuButton = styled(Menu)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block", // show menu on mobile
  },
}));

const Header = () => {
  const logURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleClose}>
      <List>
        <ListItem button>
          <CustomButtons />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <MenuButton onClick={handleOpen} />
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>

        <Component to="/">
          <img src={logURL} alt="not found" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                plus
              </Box>
            </SubHeading>
            <Plusimage src={subURL} alt="not found" />
          </Box>
        </Component>

        <Search />
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
