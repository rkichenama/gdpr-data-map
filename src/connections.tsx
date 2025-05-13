import React, { useContext, useMemo } from 'react';
import { SampleContext } from './data/context';
import { SteppedLine } from './react-lineto';

const Connections = ({ types }: { types: string[] }) => {
  const { data } = useContext(SampleContext);
  const lineMapping = useMemo(() => (
    new Map<string, string[]>(
      data
        .filter(({ system_type }) => types.includes(system_type))
        .map(({ fides_key, system_dependencies }) => ([
          `provides-${fides_key}`,
          system_dependencies.map((dep) => `consumes-${dep}`),
        ]))
    )
  ), [data]);

  console.log({lineMapping})

  return (
    <>
      {Array.from(lineMapping.entries()).map(([src, dest]) => (
        <SteppedLine
          key={`${src}-${dest}`}
          // @ts-expect-error unknown from
          from={src}
          to={dest}
        />
      ))}
    </>
  );
};

export default Connections;
