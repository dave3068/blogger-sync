
import { request } from "./operation";

/** RFC 3339 format: "2006-12-21T16:16:23+08:00" */
type datetime = string;
type long = number;
type double = number;
type UrlResource = { "url": string };

/**
 * Blog information
 * 
 * @export
 * @interface Blog
 */
export interface Blog {
    /** The kind of this entity. */
    "kind": "blogger#blog",
    /** The ID for this resource. */
    "id": string,
    /** The name of this blog, which is usually displayed in Blogger as the blog's title. The title can include HTML. */
    "name": string,
    /** The description of this blog, which is usually displayed in Blogger underneath the blog's title. The description can include HTML. */
    "description": string,
    /** RFC 3339 date-time when this blog was published, for example "2007-02-09T10:13:10-08:00". */
    "published": datetime,
    /** RFC 3339 date-time when this blog was last updated, for example "2012-04-15T19:38:01+07:00". */
    "updated": datetime,
    /** The URL where this blog is published. */
    "url": string,
    /** The Blogger API URL to fetch this resource from. */
    "selfLink": string,
    /** The container for this blog's posts. */
    "posts": {
        /** The total number of posts on this blog. */
        "totalItems": string,
        /** The URL of the collection of posts for this blog. */
        "selfLink": string,
        /** The list of posts for this Blog. */
        "items"?: Post[]
    },
    /** The container for this blog's pages. */
    "pages": {
        /** The total number of pages for this blog. */
        "totalItems": string,
        /** The URL of the pages collection for this blog. */
        "selfLink": string
    },
    /** The JSON metadata for the post. */
    "customMetaData"?: string,
    /** The locale this blog is set to, as broken out below. */
    "locale": {
        /** The language this blog is set to, for example "en" for English. */
        "language": string,
        /** The country variant of the language, for example "US" for American English. */
        "country": string,
        /** The language variant this blog is set to. */
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
    /** The kind of this entity. */
    "kind": "blogger#post",
    /** The ID of this post. */
    "id": string,
    /** Data about the blog containing this post. */
    "blog": {
        /** The ID of the blog that contains this post. */
        "id": string
    },
    /** RFC 3339 date-time when this post was published. */
    "published": datetime,
    /** RFC 3339 date-time when this post was last updated. */
    "updated": datetime,
    /** The URL where this post is displayed. */
    "url": string,
    /** The Blogger API URL to fetch this resource from. */
    "selfLink": string,
    /** The title of the post. */
    "title": string,
    /** The title link URL, similar to atom's related link. */
    "titleLink"?: string,
    /** The content of the post. Can contain HTML markup. */
    "content": string,
    /** Display image for the Post. */
    "images"?: UrlResource[],
    /** The JSON metadata for the post. */
    "customMetaData"?: string,
    /** The author of this post. */
    "author": {
        /** The ID of the post creator. */
        "id": string,
        /** The post creator's display name. */
        "displayName": string,
        /** The URL of the post creator's profile page. */
        "url": string,
        /** The post creator's avatar. */
        "image"?: UrlResource
    },
    /** The container for this post's comments. */
    "replies": {
        /** The total number of comments on this post. */
        "totalItems": long,
        /** The Blogger API URL of to retrieve the comments for this post. */
        "selfLink": string,
        /** The list of comments for this post. */
        "items"?: Commont[]
    },
    /** The list of labels this post was tagged with. */
    "labels": string[],
    /** The location, if this post is geotagged. */
    "location": {
        /** Location name. */
        "name": string,
        /** Location's latitude. */
        "lat": double,
        /** Location's longitude. */
        "lng": double,
        /** Location's viewport span. Can be used when rendering a map preview. */
        "span": string
    },
    /** Status of the post. Only set for admin-level requests */
    "status": string
}

/**
 * Blog-PostList information
 * 
 * @export
 * @interface PostList
 */
export interface PostList {
    /** The kind of this entity. */
    "kind": "blogger#postList",
    /** Pagination token to fetch the next page, if one exists. */
    "nextPageToken": string,
    /** The list of posts for this blog. */
    "items": Post[],
    /** ETag */
    "etag"?: string
}

/**
 * Blog-Common information
 * 
 * @export
 * @interface Commont
 */
export interface Commont {
    /** The kind of this entity. */
    "kind": "blogger#comment",
    /** The status of the comment. The status is only visible to users who have Administration rights on a blog. */
    "status"?: string,
    /** The ID for this resource. */
    "id": string,
    /** Data about the comment this is in reply to. */
    "inReplyTo"?: {
        /** The ID of the parent of this comment. */
        "id": string
    },
    /** Data about the post containing this comment. */
    "post": {
        /** The identifier of the post containing this comment. */
        "id": string
    },
    /** Data about the blog containing this comment. */
    "blog": {
        /** The identifier of the blog containing this comment. */
        "id": string
    },
    /** RFC 3339 date-time date-time when this comment was published, for example "2012-04-15T19:38:01-07:00". */
    "published": datetime,
    /** RFC 3339 date-time when this comment was last updated, for example "2012-04-15T19:43:21-07:00". */
    "updated": datetime,
    /** The Blogger API URL to fetch this resource from. */
    "selfLink": string,
    /** The content of the comment, which can include HTML markup. */
    "content": string,
    /** The author of this comment. */
    "author": {
        /** The identifier of the comment creator. */
        "id": string,
        /** The comment creator's display name. */
        "displayName": string,
        /** The URL of the comment creator's profile page. */
        "url": string,
        /** The container for the creator's avatar URL. */
        "image": UrlResource
    }
}

/**
 * Blog-Page information
 * 
 * @export
 * @interface Page
 */
export interface Page {
    /** The kind of this entity. */
    "kind": "blogger#page",
    /** The ID for this resource. */
    "id": string,
    /** The status of the page for admin resources (either LIVE or DRAFT). */
    "status"?: string,
    /** Data about the blog containing this page. */
    "blog": {
        /** The ID of the blog containing this page. */
        "id": string
    },
    /** RFC 3339 date-time when this page was published. */
    "published": datetime,
    /** RFC 3339 date-time when this page was last updated. */
    "updated": datetime,
    /** The URL where this page is displayed. */
    "url": string,
    /** The API URL to fetch this resource from. */
    "selfLink": string,
    /** The title of this page. This is the name displayed in the administration user interface. */
    "title": string,
    /** The body content of this page, in HTML. */
    "content": string,
    /** The author of this page. */
    "author": {
        /** The ID of the page creator. */
        "id": string,
        /** The page creator's display name. */
        "displayName": string,
        /** The URL of the page creator's Profile page. */
        "url": string,
        /** The page creator's avatar. */
        "image": UrlResource
    }
}

export class BlogOp {
    /**
     * get Blog information by URL
     * 
     * @param url the URL of blog
     */
    getByUrl(url: string): Promise<Blog> {
        return request(
            '/blogger/v3/blogs/byurl',
            {
                'url': url
            }
        );
    }
    /**
     * get Blog-Posts by page
     * 
     * @param {string} blogId 
     * @param {number} [pageSize] default is 100
     * @param {string} [nextPageToken] 
     * @returns {Promise<PostList>} 
     * @memberof BlogOp
     */
    getPosts(blogId: string, pageSize?: number, nextPageToken?: string): Promise<PostList> {
        if (!pageSize || pageSize < 0) pageSize = 100;
        return request(
            `/blogger/v3/blogs/${blogId}/posts`,
            {
                'maxResults': pageSize,
                'pageToken': nextPageToken
            }
        );
    }
}

export var blogs: BlogOp = new BlogOp();

