'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactNode, useState } from 'react';

const navLinks = [
    {name: "Register", href: "/register"},
    {name: "Login", href: "/login"},
    {name: "ForgotPassword", href: "/forgot-password"}
]


interface LayoutProps {
    children: ReactNode
}
const Layout: FC<LayoutProps> = ({ children }) => {
    const pathName = usePathname();
    const [input, setInput] = useState("");

    return (
        <div className='bg-blue-200 h-screen'>
            <div>
                <input value={input} onChange={(e) => setInput(e.target.value)} className='outline rounded-sm text-4xl font-bold' />
            </div>
            {
                navLinks.map((link) => {
                    const isActive = pathName.startsWith(link.href);
                    return (
                        <Link href={link.href} key={link.name} className={ isActive ? 'text-yellow-500 text-2xl font-bold' : 'text-2xl'}>{link.name}</Link>
                    )
                })
            }
            {children}
        </div>
    );
}

export default Layout;
