'use server'

import { db } from "@/db"
import { CreateBlogType,blogsTable } from "@/db/schema"
import { drizzle } from "drizzle-orm/singlestore"

export const createBlog =async (payload:CreateBlogType) =>{
    const res = await db.insert(blogsTable).values(payload).returning({
        id:blogsTable.id,
    })
    return res.id; 
}