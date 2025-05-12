import React from 'react';
import { createRoot } from "react-dom/client";
import { enableHotReload } from './hotrload';
import SystemsFilters from './columns';
import { SampleContext, staticValue } from './data/context';

const Value = staticValue();
const container = document.getElementById("app") as HTMLElement;
const root = createRoot(container);
root.render(
  <SampleContext value={Value}>
    <SystemsFilters />
  </SampleContext>
);
enableHotReload?.();
