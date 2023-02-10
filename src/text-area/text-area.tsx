import React, { HTMLAttributes } from 'react';

import Input, { InputProps } from '../input';

const textAreaComp = (iProps: HTMLAttributes<HTMLTextAreaElement>) => (
  <textarea {...iProps} />
);

export interface TextAreaProps extends InputProps {}

const TextArea = (props: TextAreaProps) => (
  <Input component={textAreaComp} {...props} />
);

export default TextArea;
