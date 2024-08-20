import React from 'react';

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

const Page = ({ params }: {
    params: { postid: string, commentid: string }
}) => {

    const random = getRandomInt(2)

    if (random === 1) {
        throw new Error('error loading this comment')
    }
     return (
        <div>
            <h1>Comment {params.commentid} for blog post {params.postid}</h1>
        </div>
    );
}

export default Page;
