const isLogin = (login) => {
    if (login === undefined) {
        login = false;
    }
    if (login === false) {
        return false
    }
    return true
};

export default isLogin