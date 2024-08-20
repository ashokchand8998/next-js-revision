import React from 'react';
import { Metadata } from 'next';

type Props = {
    params: {
        postid: string
    }
}

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Blog Post ${params.postid}`,
    }
}

const Page = ({ params }: Props) => {
    return (
        <div>
            <h1 className='text-9xl'>Details Page  {params.postid}</h1>
        </div>
    );
}

export default Page;
