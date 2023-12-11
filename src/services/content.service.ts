'use server'

import {HotelData} from "@/interfaces/content.interfaces";
import { headers } from 'next/headers';

const headersList = headers();
const domain = headersList.get('host') || "";

let API_URL = '';

if (domain === 'https://ivanovohotel.ivhg.ru') {
  API_URL = 'http://94.241.138.67:8000/api/v1/test/hotel1';
} else if (domain === 'https://ivanovohotel.ivhg.ru') {
  API_URL = 'http://94.241.138.67:8000/api/v1/test/hotel2';
}


export const getContent = async (): Promise<HotelData> => {
  try {
    const response = await fetch(API_URL, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const json = await response.json();
    return json.result;
  } catch (error) {
    console.error('Error in getContent:', error);
    throw error;
  }
};
