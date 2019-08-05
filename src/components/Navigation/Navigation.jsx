import React from 'react'
import { useCookies } from 'react-cookie'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';


const Navigation = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [cookies, setCookie] = useCookies(['login', 'name']);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const logOut = () => {
        setCookie('login', false);
    };
    return (
        <header>
            <Container>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>Меню</Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >

                    <MenuItem onClick={logOut}><span>Выйти</span></MenuItem>
                        <MenuItem onClick={handleClose}><Link to='/new-error'>Создать ошибку</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to='/board'>Доска ошибок</Link></MenuItem>
                </Menu>
            </Container>
        </header>
)
}


export default Navigation