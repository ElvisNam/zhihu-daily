import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.prototype.$request = function({
    method = 'GET',
    url = '',
    data = {},
    headers = { 'Content-Type': 'application/json' },
    done = (response) => {},
    fail = (response) => {}
}) {
    return new Promise((resolve, reject) => {
        if (method == 'GET' || method == 'JSONP') {
            Vue.http.get(url, {
                params: data
            }).then((response) => {
                if (typeof response.data !== 'object') {
                    try {
                        response.data = JSON.parse(response.data);
                    } catch(e) {
                        console.log(e);
                    }
                }
                if (done) {
                    done(response.data);
                }
                resolve(response.data);
            }, (response) => {
                if (typeof response.data !== 'object') {
                    try {
                        response.data = JSON.parse(response.data);
                    } catch(e) {
                        console.log(e);
                    }
                }
                if (fail) {
                    fail(response.data);
                }
                reject(response.data);
            })
        }

        if (method == 'POST') {
            Vue.http.post(url, data, {
                headers: headers
            }).then((response) => {
                if (typeof response.data !== 'object') {
                    try {
                        response.data = JSON.parse(response.data);
                    } catch(e) {
                        console.log(e);
                    }
                }
                if (done) {
                    done(response.data)
                }
                resolve(response.data)
            }, (response) => {
                if (typeof response.data !== 'object') {
                    try {
                        response.data = JSON.parse(response.data);
                    } catch(e) {
                        console.log(e);
                    }
                }
                if (fail) {
                    fail(response.data);
                }
                reject(response.data);
            })
        }
    })
};
