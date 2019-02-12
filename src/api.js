
import { BaseUrl_Dev_Api } from "./config/apiConfig";

const baseUrl = BaseUrl_Dev_Api

export function post(endPoint, reqdata) {
    
    return fetch(baseUrl + endPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqdata),
    }).then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.resultCode === 1) {
                return ({ error: null, response: responseJson })
            } else {
                return ({ error: responseJson })
            }
        })
}
export function get(endPoint) {
    return fetch(baseUrl + endPoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.resultCode === 1) {
                return ({ error: null, response: responseJson })
            } else {
                return ({ error: responseJson })
            }
        })
}
export function authorizedGet(endPoint,reqdata) {
    return fetch(baseUrl + endPoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': reqdata.token
        }
    }).then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.resultCode === 1) {
                return ({ error: null, response: responseJson })
            } else {
                return ({ error: responseJson })
            }
        })
}
export function authorizedPost(endPoint, reqdata) {
    return fetch(baseUrl + endPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': reqdata.token
        }, body: JSON.stringify({
            reqdata
        }),
    }).then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.resultCode === 1) {
                return ({ error: null, response: responseJson })
            } else if(responseJson.resultCode === 0){
                return ({ error: responseJson })
            }
        })
}


export function getSample(endPoint) {
    return fetch(baseUrl+endPoint)
    .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.resultCode === 1) {
                return ({ error: null, response: responseJson })
            } else {
                return ({ error: responseJson })
            }
        })
}