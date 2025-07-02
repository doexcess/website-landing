import React from 'react';

const OtherLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div>{children} </div>;
};

export default OtherLayout;
