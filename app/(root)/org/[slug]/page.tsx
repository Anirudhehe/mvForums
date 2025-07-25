'use client'
import Nav from "@/app/components/nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React, { useState } from "react"
import { createBlog } from "./actions"
import { useOrganization } from "@clerk/nextjs"



export default function  OrgLandingPage(){
    const [blogContent,setBlogContent] = useState('');
    const [blogTitle,setBlogTitle] = useState('');
    const presentOrg = useOrganization();
    const  handleCreateBlog = async ()=>{
    
    if(!presentOrg.organization?.id) return

    await createBlog({
        body:blogContent.trim(),
        orgId:presentOrg.organization?.id,
        title:blogTitle,
        
    })
};

    return(
        <main>
            <Nav/>
            <div className="p-10">
                <Input value={blogTitle} onChange={(e)=>setBlogTitle(e.target.value)} 
                placeholder="Title"/>
                <Textarea placeholder='Enter your blog content here...' className="mt-2" value={blogContent} 
                onChange={e=> setBlogContent(e.target.value)}/>
                <Button onClick={handleCreateBlog} className="mt-2">Create Blog</Button>
            </div>
        </main>
    )
}