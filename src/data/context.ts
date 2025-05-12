import { createContext } from 'react';
import sampleData from './sample.json';

type ElementType<T> = T extends (infer E)[] ? E : never;
export type DataType = ElementType<typeof sampleData>;

export const SampleContext = createContext<{
  data: DataType[],
  systems: string[],
  dataUsages: string[],
  dataCategories: string[],
}>({
  data: sampleData,
  systems: [],
  dataUsages: [],
  dataCategories: [],
});

export const staticValue = () => {
  return {
    data: sampleData,
    systems: Array.from(
      (new Set<string>(
      sampleData.map(({ system_type }) => system_type)
      ))
    ).sort(),
    dataUsages: Array.from(
      (new Set<string>(
      sampleData.flatMap(({ privacy_declarations }) => (
        privacy_declarations.map(({ data_use }) => data_use)
      ))
      ))
    ).sort(),
    dataCategories: Array.from(
      (new Set<string>(
      sampleData.flatMap(({ privacy_declarations }) => (
        privacy_declarations.flatMap(({ data_categories }) => data_categories)
      ))
      ))
    ).sort(),
  }
};
