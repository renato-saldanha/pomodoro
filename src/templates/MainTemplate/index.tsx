import React from 'react';
import Head from 'next/head';

type MainTemplateProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

export const MainTemplate: React.FC<MainTemplateProps> = ({ 
  children, 
  title = 'Pomodoro Tasks',
  description = 'Gerencie seus ciclos de Pomodoro com o Chronos Pomodoro'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </Head>
      <div className="min-h-screen bg-background text-primario overflow-x-hidden">
        {children}
      </div>
    </>
  );
};

export default MainTemplate;

