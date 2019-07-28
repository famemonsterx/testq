const isLogin = (login=false) => {
    if (login === false) {
        return false
    }
    return true
};
isLogin.defaultProps = {
    login: false
}

export default isLogin