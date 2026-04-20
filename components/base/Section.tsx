import { FC, ReactNode } from 'react';

const Section: FC<{ children?: ReactNode }> = ({ children }) => {
    return <section>{children}</section>;
};

export default Section;
