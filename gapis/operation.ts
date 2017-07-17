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
            let val = param[k];
            if (val) {
                path += '&' + k + '=' + val;
            }
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
            // TODO : 分多块接收的处理
            res.on('data', (data:Buffer)=>{
                try {
                    let ret = JSON.parse(data.toString());
                    if (ret.hasOwnProperty("error")) {
                        reject(ret);
                    } else {
                        resolve(ret);
                    }
                } catch (error) {
                    //console.error("data format error : " + data.toString());
                    reject(error);
                }
            });
        }).on('error', (err)=>{
            reject(err);
        }).end();
    });
}

