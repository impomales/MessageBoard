/* global fetch */

const APIAUTHURL = '/api/auth/';

export async function signUp(data) {
    return fetch(APIAUTHURL + 'signup', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(resp => {
                if (!resp.ok) {
                    if (resp.status >= 400 && resp.status < 500) {
                        return resp.json().then(data => {
                            let err = { errMessage: data.message };
                            throw err;
                        });
                    } else {
                        let err = { errorMessage: 'Please try again later, server is not responding.' };
                        throw err;
                    }
                }
                return resp.json();
            });
}