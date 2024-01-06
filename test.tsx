'use client'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, Grid, IconButton, InputBase, Link, Paper, alpha } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PhoneIcon from '@mui/icons-material/Phone';
import ComputerIcon from '@mui/icons-material/Computer';
import BuildIcon from '@mui/icons-material/Build';
import { useEffect, useState } from 'react';
import InterestsIcon from '@mui/icons-material/Interests';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
const StyledLink = styled(Link)(({ theme }) => ({
    fontFamily: 'unset',
    fontWeight: 400,
    color: 'rgb(255, 255, 255)',
    borderStyle: 'none',
    textDecoration: 'none',
    fontSize: '13px',
    lineHeight: '20px',
    overflow: 'hidden',
    margin: '15px',
    verticalAlign: 'middle',
    [theme.breakpoints.down('sm')]: {
        fontSize: '7px',
    },
}));

const CustomAppBar = styled(AppBar)(({ theme }) => ({
    minHeight: '42px',
    [`& .MuiToolbar-root`]: {
        minHeight: '42px',
    },

}));

const AppHeader = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsSticky(scrollPosition > 42);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const CustomPaper = styled(Paper)(({ theme }) => ({
        background: '#f8f8fc',
        padding: '10px',
        width: '180.36px', // Tăng chiều dài
        height: '34.78px',
        border: 'ra',
        '&:hover': {
            backgroundColor: theme.palette.action.hover, // Hiệu ứng màu xám khi di chuột vào
        },
    }));
    const theme = useTheme();
    const listItems = ['Xmas Deal', 'iPhone 15', 'MacBook rẻ nhất thị trường', 'Acer nitro', 'Laptop HP', 'Asus Rog Strix'];
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Kiểm tra màn hình có nhỏ hơn breakpoint 'sm' không
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius, // bo tròn
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
        border: `1px solid ${theme.palette.action.disabledBackground}`, // Thêm viền 1px với màu chính của theme
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        length: '25px', // Thiết lập chiều dài cố định
        width: '475.469px',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
        },
        // borderRadius: theme.shape.borderRadius,
    }));

    return (
        <Box>
            <Box sx={{ flexGrow: 1, height: '42px',width: '100%' }}>
                <CustomAppBar position="static">
                    <Grid container justifyContent="center" style={{ background: "#1435c3" }}>
                        <Toolbar>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: 'none', sm: 'block' },
                                }}
                            >
                                <LocalOfferIcon style={{ verticalAlign: 'middle' }} />
                                <StyledLink href="http://localhost:3000/">Khuyến mại</StyledLink>
                                <ApartmentIcon style={{ verticalAlign: 'middle' }} />
                                <StyledLink href="http://localhost:3000/">Hệ thống showroom</StyledLink>
                                <BusinessCenterIcon style={{ verticalAlign: 'middle' }} />
                                <StyledLink href="http://localhost:3000/">Tư vấn doanh nghiệp</StyledLink>
                                <PhoneIcon style={{ verticalAlign: 'middle' }} />
                                <StyledLink href="http://localhost:3000/">Liên hệ</StyledLink>
                                <ComputerIcon style={{ verticalAlign: 'middle' }} />
                                <StyledLink href="http://localhost:3000/">Tin công nghệ</StyledLink>
                                <BuildIcon style={{ verticalAlign: 'middle' }} />
                                <StyledLink href="http://localhost:3000/">Xây dựng cấu hình</StyledLink>
                            </Typography>
                        </Toolbar>
                    </Grid>
                </CustomAppBar>
            </Box>
            <Box style={{
                padding: '0px 300px',
                boxShadow: '0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1)',
                zIndex: '1040',
                background: '#f8f8fc',
                color: 'rgb(132, 135, 136)',
                position: isSticky ? 'fixed' : 'static',
                top: isSticky ? '0' : 'auto',
                width: '100%',
                height: '112px',
                margin: '0',
            }}>
                <Grid container alignItems="center" spacing={2} style={{ height: '100%', backgroundColor: '#f8f8fc', margin: '0', padding: '0' }}>
                    <Grid item>
                        <Box display="flex" alignItems="center">
                            <Grid item style={{ margin: '0 6.4px 0 20px' }}>
                                <InterestsIcon style={{ verticalAlign: 'middle', color: '#5FE7FF', fontSize: '38px' }} />
                            </Grid>
                            <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                                <CustomPaper variant="outlined" elevation={0} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <MenuIcon style={{ height: isSmallScreen ? '16px' : '20px', width: isSmallScreen ? '16px' : '20px' ,color:'rgb(132, 135, 136)'}} />
                                    <span style={{ fontSize: '14px', color:'rgb(132, 135, 136)' }}>Danh mục sản phẩm</span>
                                </CustomPaper>
                            </Grid>
                            <Grid item>
                                <Box display="flex" flexDirection="column" paddingTop={'28px'} paddingLeft={'10px'} paddingRight={'10px'}>
                                    <Grid item>
                                        <Search>
                                            <SearchIconWrapper>
                                                <SearchIcon />
                                            </SearchIconWrapper>
                                            <StyledInputBase
                                                placeholder="Nhập từ khoá cần tìm.."
                                                inputProps={{ 'aria-label': 'search' }}
                                            />
                                        </Search>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        {listItems.map((item, index) => (
                                            <Grid item key={index}>
                                                {/* Hiển thị mỗi phần tử trong danh sách */}
                                                <Link style={{ textDecoration: 'none', fontSize: '13px', color: "rgb(132, 135, 136)" }}>{item}</Link>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item sx={{ display: 'flex', alignItems: 'center', padding: '0 8px 0 8px' }}>
                                <AccountCircleIcon style={{ fontSize: '30px' }} />
                                <Box display="flex" alignItems="revert-layer" flexDirection="column" padding={'0px 10px 0 10px'}>
                                    <Grid item>
                                        <span style={{ fontSize: '14px' }}>Đăng nhập</span>
                                    </Grid>
                                    <Grid item>
                                        <span style={{ fontSize: '14px' }}>Đăng ký</span>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item sx={{ display: 'flex', alignItems: 'center', padding: '0 8px 0 8px' }}>
                                <NotificationsIcon style={{ fontSize: '30px' }} />
                            </Grid>
                            <Grid item sx={{ display: 'flex', alignItems: 'center', padding: '0 8px 0 8px' }}>
                                <ShoppingCartCheckoutIcon style={{ fontSize: '30px' }} />
                                <Box display="flex" alignItems="revert-layer" flexDirection="column" padding={'0px 10px 0 10px'}>
                                    <Grid item>
                                        <span style={{ fontSize: '14px' }}>Giỏ hàng của bạn</span>
                                    </Grid>
                                    <Grid item>
                                        <span style={{ fontSize: '14px' }}>(0)Sản phẩm</span>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default AppHeader;
