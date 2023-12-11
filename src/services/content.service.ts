'use server'

import {HotelData} from "@/interfaces/content.interfaces";
import {headers} from "next/headers";

export const getContent = async (): Promise<HotelData> => {
  const headersList = headers();
  const domain = headersList.get('host') || "";

  console.log(domain)

  let API_URL = '';

  if (domain === 'localhost:3000') {
    API_URL = 'http://94.241.138.67:8000/api/v1/test/hotel1';
  } else if (domain === 'localhost:3000') {
    API_URL = 'http://94.241.138.67:8000/api/v1/test/hotel2';
  }

  console.log('Current API_URL:', domain, 'domain');

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
