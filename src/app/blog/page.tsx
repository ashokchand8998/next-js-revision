import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: {
        absolute: "Blog List Page",
    }
}

const Page = () => {
    return (
        <div>
            <Link href='/' className='text-9xl'>Home Page</Link>
            <h1>
                <Link href='/blog/1'>Blog Post 1</Link></h1>
            <h1><Link href='/blog/2'>Blog Post 2</Link></h1>
            <h1><Link href='/blog/3' replace>Blog Post 3</Link></h1>
            <h1><Link href='/blog/4'>Blog Post 4</Link></h1>
            <h1><Link href='/blog/5'>Blog Post 5</Link></h1>
            <h1><Link href='/blog/6'>Blog Post 6</Link></h1>
            <h1><Link href='/blog/7'>Blog Post 7</Link></h1>
            <h1><Link href='/blog/8'>Blog Post 8</Link></h1>
            <h1><Link href='/blog/9'>Blog Post 9</Link></h1>
        </div>
    );
}

export default Page;
