import {Result} from "@/interfaces/content.interfaces";

const API_URL_HOTEL1 = 'http://80.90.188.139:8000/api/v1/test/hotel1'
const API_URL_HOTEL2 = 'http://80.90.188.139:8000/api/v1/test/hotel2'

export const getContent = {
  async getHotel1(): Promise<Result> {
    try {
      const response = await fetch(API_URL_HOTEL1, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const json = await response.json();
      return json.result;
    } catch (error) {
      console.error('Error in getHotel1:', error);
      throw error;
    }
  },
  async getHotel2(): Promise<Result> {
    try {
      const response = await fetch(API_URL_HOTEL2, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const json = await response.json();
      return json.result;
    } catch (error) {
      console.error('Error in getHotel2:', error);
      throw error;
    }
  },
};