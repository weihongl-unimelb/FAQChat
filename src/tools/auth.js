import {APIServer} from '../config';

const loginUrl = `${APIServer}/login`;

export default {
    // called when the user attempts to log in
    login: ({ username, password }) => {
        localStorage.setItem('username', username);
        let request = new Request(loginUrl, {
            method: "POST",
            body: `username=${username}&password=${password}`,
            headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }),
        });
        return fetch(request).then(response => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            return response.json();
        }).then( response => {
            if (response.username && response.authToken && response.roles) {
                localStorage.setItem('username', response.username);
                localStorage.setItem('authToken', response.authToken);
                localStorage.setItem('userRoles', response.roles);
            } else {
                throw new Error(response.toString());
            }
        });
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => {
        const roles = localStorage.getItem("userRoles");
        return roles ? Promise.resolve(roles) : Promise.reject();
    },
};