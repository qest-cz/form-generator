import React, { ReactNode } from 'react';
import { Wrapper } from './styled';

export interface Props {
    children?: ReactNode;
}

const TextDivider = ({ children }: Props) => {
    return <Wrapper>{children}</Wrapper>;
};

export default TextDivider;
