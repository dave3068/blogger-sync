
import {request} from "./operation";

/** format: "2006-12-21T16:16:23+08:00" */
type datetime = string;
type long = number;
type double = number;

/**
 * Blog information
 * 
 * @export
 * @interface Blog
 */
export interface Blog {
    "kind": "blogger#blog",
    "id": string,
    "name": string,
    "description": string,
    "published": datetime,
    "updated": datetime,
    "url": string,
    "selfLink": string,
    "posts": {
        "totalItems": string,
        "selfLink": string
    },
    "pages": {
        "totalItems": string,
        "selfLink": string
    },
    "locale": {
        "language": string,
        "country": string,
        "variant": string
    }
}

/**
 * Blog-Post information
 * 
 * @export
 * @interface Post
 */
export interface Post {
    "kind": "blogger#post",
    "id": string,
    "blog": {
        "id": string
    },
    "published": datetime,
    "updated": datetime,
    "url": string,
    "selfLink": string,
    "title": string,
    "titleLink": string,
    "content": string,
    "images": [
        {
            "url": string
        }
    ],
    "customMetaData": string,
    "author": {
        "id": string,
        "displayName": string,
        "url": string,
        "image": {
            "url": string
        }
    },
    "replies": {
        "totalItems": long,
        "selfLink": string,
        "items": Commont[]
    },
    "labels": string[],
    "location": {
        "name": string,
        "lat": double,
        "lng": double,
        "span": string
    },
    "status": string
}

/**
 * Blog-Common information
 * 
 * @export
 * @interface Commont
 */
export interface Commont {
    "kind": "blogger#comment",
    "status": string,
    "id": string,
    "inReplyTo": {
        "id": string
    },
    "post": {
        "id": string
    },
    "blog": {
        "id": string
    },
    "published": datetime,
    "updated": datetime,
    "selfLink": string,
    "content": string,
    "author": {
        "id": string,
        "displayName": string,
        "url": string,
        "image": {
            "url": string
        }
    }
}

export class BlogOp {
    getByUrl(url:string):Promise<Blog> {
        return request(
            '/blogger/v3/blogs/byurl',
            {
                'url': url
            }
        );
    }
}

export var blogs:BlogOp = new BlogOp();

