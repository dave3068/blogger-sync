
// Node.js version : v0.10.48

// https://github.com/google/google-api-nodejs-client/
// https://console.developers.google.com/apis/credentials
// https://developers.google.com/blogger/docs/3.0/getting_started
// https://nodejs.org/docs/latest-v0.10.x/api/

/*
REST-API:
https://www.googleapis.com/apiName/apiVersion/resourcePath?parameters

https://www.googleapis.com/blogger/v3/users/userId
https://www.googleapis.com/blogger/v3/users/self
https://www.googleapis.com/blogger/v3/users/userId/blogs
https://www.googleapis.com/blogger/v3/users/self/blogs
https://www.googleapis.com/blogger/v3/blogs/blogId
https://www.googleapis.com/blogger/v3/blogs/byurl
https://www.googleapis.com/blogger/v3/blogs/blogId/posts
https://www.googleapis.com/blogger/v3/blogs/blogId/posts/bypath
https://www.googleapis.com/blogger/v3/blogs/blogId/posts/search
https://www.googleapis.com/blogger/v3/blogs/blogId/posts/postId
https://www.googleapis.com/blogger/v3/blogs/blogId/posts/postId/comments
https://www.googleapis.com/blogger/v3/blogs/blogId/posts/postId/comments/commentId
https://www.googleapis.com/blogger/v3/blogs/blogId/pages
https://www.googleapis.com/blogger/v3/blogs/blogId/pages/pageId
*/
// GET https://www.googleapis.com/blogger/v3/blogs/2399953?key=YOUR-API-KEY
/*
API References:
https://developers.google.com/blogger/docs/3.0/reference/blogs#resource
https://developers.google.com/blogger/docs/3.0/reference/posts#resource
https://developers.google.com/blogger/docs/3.0/reference/comments#resource
*/

console.log("hi");

let API_KEY:string = 'YOUR-API-KEY';

import * as gapis from "./gapis";

gapis.setApiKey(API_KEY);

gapis.blogs.getByUrl(
    'http://blog.davyhawk.net/'
).then((ret)=>{
    console.log(ret);
    console.log(ret.posts.totalItems);
    console.log(ret.posts.selfLink);
    console.log(ret.id);
    return gapis.blogs.getPosts(ret.id, 2);
}).then((ret)=>{
    console.log("blogs.getPosts result...");
    console.log(ret);
    console.log(ret.nextPageToken);
}).catch((err)=>{
    console.error(err);
});

