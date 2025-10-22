import React from 'react';

type GenericHtmlProps = {
  children: React.ReactNode;
  className?: string;
};

export const GenericHtml: React.FC<GenericHtmlProps> = ({ children, className = '' }) => {
  return (
    <div className={`
      prose prose-invert max-w-none
      
      /* Mobile First - Headings */
      prose-headings:text-primario prose-headings:font-bold
      prose-h1:text-2xl sm:prose-h1:text-3xl md:prose-h1:text-4xl lg:prose-h1:text-5xl
      prose-h1:mb-4 sm:prose-h1:mb-5 md:prose-h1:mb-6
      
      prose-h2:text-xl sm:prose-h2:text-2xl md:prose-h2:text-3xl lg:prose-h2:text-4xl
      prose-h2:mt-6 sm:prose-h2:mt-7 md:prose-h2:mt-8
      prose-h2:mb-3 sm:prose-h2:mb-4
      
      prose-h3:text-lg sm:prose-h3:text-xl md:prose-h3:text-2xl lg:prose-h3:text-3xl
      prose-h3:mt-4 sm:prose-h3:mt-5 md:prose-h3:mt-6
      prose-h3:mb-2 sm:prose-h3:mb-3
      
      /* Mobile First - Paragraphs & Text */
      prose-p:text-sm sm:prose-p:text-base md:prose-p:text-lg
      prose-p:leading-relaxed prose-p:mb-3 sm:prose-p:mb-4
      prose-p:text-gray-300
      
      /* Strong & Links */
      prose-strong:text-primario prose-strong:font-semibold
      prose-a:text-link-cor prose-a:no-underline prose-a:underline-offset-4
      hover:prose-a:text-link-hover hover:prose-a:underline
      prose-a:transition-all prose-a:duration-200
      
      /* Lists */
      prose-ul:list-disc 
      prose-ul:pl-4 sm:prose-ul:pl-5 md:prose-ul:pl-6
      prose-ul:mb-3 sm:prose-ul:mb-4
      prose-ul:space-y-1 sm:prose-ul:space-y-2
      
      prose-li:text-sm sm:prose-li:text-base md:prose-li:text-lg
      prose-li:text-gray-300 prose-li:leading-relaxed
      
      /* Images */
      prose-img:rounded-lg prose-img:shadow-lg 
      prose-img:my-4 sm:prose-img:my-5 md:prose-img:my-6
      
      /* Emphasis */
      prose-em:text-gray-400 prose-em:italic
      prose-em:text-sm sm:prose-em:text-base
      
      ${className}
    `}>
      {children}
    </div>
  );
};

export default GenericHtml;

