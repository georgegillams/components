import React from 'react';

export const getJsScript = (workletUrl: string) => `
  const workletURL = '${workletUrl}';
  if(typeof CSS?.paintWorklet?.addModule === 'function'){
    CSS.paintWorklet.addModule(workletURL);
  }
`;

export const SmoothCornersWorkletLoader = ({
  workletUrl,
}: {
  workletUrl: string;
}) => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: getJsScript(workletUrl),
      }}
    />
  );
};
