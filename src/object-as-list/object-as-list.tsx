import React, { useState } from 'react';
import PropTypes from 'prop-types';

export interface ObjectAsListProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  value: any;
  depth?: number;
}

const ObjectAsList = (props: ObjectAsListProps) => {
  const { name, value, depth = 0, ...rest } = props;

  const [expanded, setExpanded] = useState(false);

  if (value && typeof value === 'object') {
    return (
      <>
        <div
          style={{ marginLeft: `${depth}rem` }}
          role="button"
          tabIndex={0}
          onClick={() => {
            setExpanded(!expanded);
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') {
              setExpanded(true);
            }
            if (e.key === 'ArrowLeft') {
              setExpanded(false);
            }
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              setExpanded(!expanded);
            }
          }}
          {...rest}
        >{`${expanded ? '🔽' : '▶️'} ${name || 'top-level'}:`}</div>
        {expanded &&
          Object.keys(value).map((k) => (
            <ObjectAsList key={k} name={k} value={value[k]} depth={depth + 1} />
          ))}
      </>
    );
  }

  return (
    <div
      style={{ marginLeft: `${depth}rem` }}
      {...rest}
    >{`${name}: ${value}`}</div>
  );
};

export default ObjectAsList;
