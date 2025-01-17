import {body} from "express-validator";
import {blogsRepositories} from "../../blogs/blogs-db-repository";

export const blogIdValidator = body("blogId")
    .isString().withMessage('not string').trim().custom(async blogId=> {
        console.log("проверка id блога "+ blogId)
    const blog = await blogsRepositories.getById(blogId)
    console.log("то что возвращает блог" + blog)
        if(!blog){ throw new Error()
        }
    return blog
}).withMessage('no blog')
