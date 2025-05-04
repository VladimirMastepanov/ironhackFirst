import { API_QUERY } from '../../constants';
import { FechDataDescription } from '../../types';

export const getData = async (): Promise<FechDataDescription[]> => {
  try {
    const response = await fetch(API_QUERY);
    const data: FechDataDescription[] = await response.json();
    return data.reverse();
  } catch (e) {
    console.error('fetch data (getData) error:', e);
    return [];
  }
};
