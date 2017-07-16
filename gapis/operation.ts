import "es6-promise";
import https = require("https");

var apiKey:string = null;

export function setApiKey(key:string) {
    apiKey = key;
}

const API_HOST = "www.googleapis.com";

export type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export function request<R>(path:string, param?:any, method?:RequestMethod):Promise<R>{
    method = method || "GET";
    //
    path += `?key=${apiKey}`;
    if (param) {
        for (let k in param) {
            path += '&' + k + '=' + param[k];
        }
    }
    //
    return new Promise<R>((resolve, reject)=>{
        https.request({
            'hostname': API_HOST,
            'method': method,
            'path': path
        }, (res)=>{
            //console.log(res.statusCode);
            res.on('data', (data:Buffer)=>{
                try {
                    resolve(JSON.parse(data.toString()));
                } catch (error) {
                    reject(error);
                }
            });
        }).on('error', (err)=>{
            reject(err);
        }).end();
    });
}

