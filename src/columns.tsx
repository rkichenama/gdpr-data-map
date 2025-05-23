import React, { ChangeEventHandler, useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { SampleContext } from './data/context';
import System, { truncateLabel } from './column';

const Columns = styled.section`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-around;
`;

const SystemsFilters = () => {
  const {systems, dataUsages, dataCategories } = useContext(SampleContext);

  const [usages, setUsages] = useState(dataUsages);
  const [categories, setCategories] = useState(dataCategories);

  // const [visibleSystems, setVisibleSystems] = useState<Array<string>>(systems);

  const toggleUsage = useCallback<ChangeEventHandler<HTMLInputElement>>((evt) => {
    const col = evt.target.value;
    const checked = evt.target.checked;
    const set = new Set(usages);
    if (!checked) {
      set.delete(col);
    } else {
      set.add(col);
    }
    setUsages(Array.from(set));
  }, [usages, setUsages]);
  const toggleCategory = useCallback<ChangeEventHandler<HTMLInputElement>>((evt) => {
    const col = evt.target.value;
    const checked = evt.target.checked;
    const set = new Set(categories);
    if (!checked) {
      set.delete(col);
    } else {
      set.add(col);
    }
    setCategories(Array.from(set));
  }, [categories, setCategories]);

  useEffect(() => {
    setUsages(dataUsages);
  }, [dataUsages]);
  useEffect(() => {
    setCategories(dataCategories);
  }, [dataCategories]);


  return (
    <div>
      <div>
        <h2>Data Use</h2>
        {dataUsages.map((usage) => (
          <label key={usage} title={usage}>
            <input
              type='checkbox'
              value={usage}
              onChange={toggleUsage}
              defaultChecked={usages.includes(usage)}
            />
            {' '}
            {truncateLabel(usage)}
          </label>
        ))}
        <h2>Data Category</h2>
        {dataCategories.map((category) => (
          <label key={category} title={category}>
            <input
              type='checkbox'
              value={category}
              onChange={toggleCategory}
              defaultChecked={categories.includes(category)}
            />
            {' '}
            {truncateLabel(category)}
          </label>
        ))}
      </div>
      <Columns>
        {systems.map((system) => (
          <System key={system} kind={system} {...{usages, categories}} />
        ))}
      </Columns>
    </div>
  );
};

export default SystemsFilters;