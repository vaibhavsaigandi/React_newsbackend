import cookie from "js-cookie";
import { useHistory } from "react-router-dom";

//set in cookie
export const setCookie = (key, value) => {
    if (window !== undefined) {
        cookie.set(key, value, {
            expires: 1,
        });
    }
}; //key is the name of the cookie , value of the key

//remove cookie
export const removeCookie = (key) => {
    if (window !== undefined) {
        cookie.remove(key, {
            expires: 1,
        });
    }
};

//get from the cookie .... //actually we grab the token from the cookie....
export const getCookie = (key) => {
    if (window !== undefined) {
        return cookie.get(key);
    }
};

//set in local storage
export const setLocalStorage = (key, value) => {
    if (window !== undefined) {
        localStorage.setItem(key, JSON.stringify(value)); // when we store anything in the local storage we have to Stringify it.
    }
};

//remove from local storage
export const deleteLocalStorage = (key, value) => {
    if (window !== undefined) {
        localStorage.removeItem(key);
    }
};

//authenticate user by sending the data to the cookie and the localstorage during signin....
export const authenticate = async(response, next) => {
    console.log("authenticate helper function response", response);
    await setCookie("token", response.data.token);
    await setLocalStorage("user", response.data.user);
    next();
};
export const getUser = async(next) => {
    const user = await JSON.parse(localStorage.getItem("user"))
    return user;
    next();
}

//acess user info from local storage;
export const isAuth = () => {
    if (window !== undefined) {
        const cookieChecked = getCookie("token");
        if (cookieChecked) {
            if (localStorage.getItem("user")) {
                return JSON.parse(localStorage.getItem("user"));
            } else {
                return false;
            }
        }
        return false;
    }
    return false;
};

//helps the user to signout.....
export const Signout = (next) => {
    // const history = useHistory();
    removeCookie("token");
    deleteLocalStorage("user");
    next();
};

//to update the user in local storage .......
export const updateUser = (response, next) => {
    console.log("Update User in Local Storage....", response);
    if (typeof window !== "undefined") {
        let auth = JSON.parse(localStorage.getItem("user"));
        auth = response.data;
        localStorage.setItem("user", JSON.stringify(auth));
    }
    next();
};