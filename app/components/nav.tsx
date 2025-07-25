'use client'
import React from 'react'
import { UserButton,OrganizationSwitcher } from '@clerk/nextjs'

const Nav: React.FC =() =>{

    return (
        <nav className='flex items-center justify-between p-4'>
            <div>
                <h1 className='font-semibold text-2xl'>MVForums</h1>
            </div>
            <div className='flex gap-2 justify-center items-center'>
            <OrganizationSwitcher afterSelectOrganizationUrl='/org/:slug'/>
            <UserButton/>
            </div>
        </nav>
    )

}

export default Nav;