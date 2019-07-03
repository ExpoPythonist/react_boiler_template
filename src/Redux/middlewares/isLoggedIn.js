import {
    setUserData,
    validateToken
} from "../actions";

const isLoggedIn = async (store) => {
    if (localStorage.getItem('auth')) {
        const userData = JSON.parse(localStorage.getItem('auth'));
        await store.dispatch(setUserData(userData))
        await store.dispatch(validateToken())
        return store;
    }
}

export default isLoggedIn;