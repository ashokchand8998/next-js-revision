'use client';
import React from 'react';

const Error = ({error}: {
    errior: Error
}) => {
    return (
        <div>
            <h1 className='p-4 bg-red-200 text-4xl'>{error.message}</h1>
        </div>
    );
}

export default Error;
