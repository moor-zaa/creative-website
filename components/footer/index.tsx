import React from 'react'
import { FaDiscord, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'

const links = [
    { href: 'https://discord.com', icon: <FaDiscord /> },
    { href: 'https://twitter.com', icon: <FaTwitter /> },
    { href: 'https://youtube.com', icon: <FaYoutube /> },
    { href: 'https://github.com', icon: <FaGithub /> },
]

const Footer = () => {
    return (
        <footer className='w-screen bg-violet-300 py-4 text-black'>
            <div className='container mx-auto flex flex-col items-center px-4 gap-4 md:flex-row justify-between'>
                <p className='text-center text-sm font-light md:text-left'>&copy;Zentry 2024. All rights reserved</p>
                <div className='flex justify-center gap-4 md:justify-start me-4'>
                    {links.map(link => <a key={link.href} href={link.href} target='_blank' rel='noopener noreferrer'
                        className='text-black transition-colors duration-500 ease-in-out hover:text-white'
                    >
                        {link.icon}
                    </a>)}
                </div>
                
            </div>
        </footer>
    )
}

export default Footer