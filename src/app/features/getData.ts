import { API_QUERY } from '../../constants';
import { FechDataDescription } from '../../types';

export const getData = async (): Promise<FechDataDescription[]> => {
  const response = await fetch(API_QUERY);
  const data: FechDataDescription[] = await response.json();
  return data.reverse();
};
