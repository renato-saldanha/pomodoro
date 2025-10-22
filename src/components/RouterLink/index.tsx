import React from 'react';
import Link from 'next/link';

type RouterLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const RouterLink: React.FC<RouterLinkProps> = ({ 
  href, 
  children, 
  className = '' 
}) => {
  return (
    <Link 
      href={href} 
      className={`text-link-cor hover:text-link-hover transition-colors ${className}`}
    >
      {children}
    </Link>
  );
};

export default RouterLink;

