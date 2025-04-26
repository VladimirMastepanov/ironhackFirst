import { FechDataDescription } from '../../types';

export const getRandomProjects = (
  count: number,
  data: FechDataDescription[]
): FechDataDescription[] => {
  const pickedIndices = new Set<number>();
  const projects: FechDataDescription[] = [];

  while (count > projects.length) {
    const index = Math.floor(Math.random() * data.length);
    if (pickedIndices.has(index)) {
      continue;
    }

    projects.push(data[index]);
    pickedIndices.add(index);
  }

  return projects;
};
