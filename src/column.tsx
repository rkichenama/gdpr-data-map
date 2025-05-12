import React, { createRef, useCallback, useContext, useMemo } from 'react';
import styled from 'styled-components';
import { DataType, SampleContext } from './data/context';

export function truncateLabel(a: string) {
  return a.substring(a.lastIndexOf('.') + 1);
}

const Details = styled.details`
  & > summary {
    font-size: larger;
    cursor: pointer;

    &::marker {
      color: darkgray;
      font-size: 20px;
    }
  }

  & > div {
    padding: .2em 1em;
  }
`;

const Column = styled.div`
  width: clamp(96px, 4in, 20vw);
`;

const Bullets = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.2em;

  & > span {
    outline: 1px solid black;
    outline-offset: -1px;
    display: inline-block;
    padding: 4px 0.25em;
    text-align: center;
    background-color: rgba(from #369 r g b / 50%);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const Card = styled.div`
  outline: 1px solid black;
  outline-offset: -1px;
  padding: 0.25em;

  h4 {
    text-align: center;
    margin-left: 1em;
    margin-right: 1em;
  }
  & + & {
    margin-top: 1em;
  }
`;


const Categories = ({ privacy_declarations }: DataType ) => {
  const items = useMemo(() => {
    const set = new Set(privacy_declarations
      .flatMap(({ data_categories }) => (
        data_categories
      )));
    return Array.from(set)
      .sort((a, b) => {
        const left = truncateLabel(a);
        const right = truncateLabel(b);
        return left.toLowerCase().localeCompare(right.toLowerCase());
      });
  }, [privacy_declarations]);

  return (
    <Bullets>
      {items.map((item) => (
        <span key={item} title={item}>{
          truncateLabel(item)
        }</span>
      ))}
    </Bullets>
  )
};

function intersectsWith(list: string[]) {
  const set = new Set(list);

  return (items: string[]) => (
    items.some((item) => set.has(item))
  );
}

const System = ({ kind, usages, categories }: {
  kind: string,
  usages: string[],
  categories: string[],
}) => {
  const ref = createRef<HTMLDivElement | null>();
  const { data } = useContext(SampleContext);

  const hasItems = useMemo(() => intersectsWith(categories), [categories]);

  // filter the below by usage and category
  const systems = useMemo(() => (
    data.filter(({ system_type, privacy_declarations }) => {
      const hasUsages = privacy_declarations.some(({ data_use }) => usages.includes(data_use));
      const hasCategories = privacy_declarations.some(({ data_categories }) => (intersectsWith(categories)(data_categories)));

      return (
        system_type === kind
        && (!privacy_declarations.length || hasUsages)
        && (!privacy_declarations.length || hasCategories)
      );
    })
  ), [data, kind, usages, categories]);

  return (
    <Column {...{ ref }}>
      <h3>{kind}</h3>
      {systems.length
        ? systems.map((sys, i) => (
          <Card key={i}>
            <Details>
              <summary>{sys.name}</summary>
              <div>{sys.description}</div>
            </Details>
            <Categories {...sys} />
          </Card>
        ))
        : ('')}
    </Column>
  )
};

export default System;
