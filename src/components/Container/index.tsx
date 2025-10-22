import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`
      w-full mx-auto 
      px-4 sm:px-6 md:px-8 lg:px-12
      max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl
      py-4 sm:py-6 md:py-8 lg:py-10
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Container;

