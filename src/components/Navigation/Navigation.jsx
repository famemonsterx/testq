import React from 'react'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { BrowserRouter, Switch, Link, Router } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicRoute from '../PublicRoute/PublicRoute';

import Board from '../Board/Board';
import AddError from '../AddError/AddError'
import Auth from '../Auth/Auth';

const Navigation = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }
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
                    <BrowserRouter>
                    <MenuItem onClick={handleClose}><Link to='/auth'>Авторизация</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to='/new-error'>Создать ошибку</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to='/board'>Доска ошибок</Link></MenuItem>
                    </BrowserRouter>
                </Menu>
            </Container>
        </header>
)
}

export default Navigation