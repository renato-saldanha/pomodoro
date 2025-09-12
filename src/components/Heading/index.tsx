import React, { HTMLAttributes, TextareaHTMLAttributes } from 'react';

type HeadingProps = {
    children: React.ReactNode;
}

const Heading : React.FC<HeadingProps> = ({children}) => { 
    return (
        <div>            
            <h2 className='flex justify-center items-center gap-4 mt-5 font-bold'>
                {children}
            </h2>
        </div>
    )
}

export default Heading;