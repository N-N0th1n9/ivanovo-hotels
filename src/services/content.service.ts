'use server'

import artHotelContent from '@/constants/artHotelContent.json'
import ivanovoHotelContent from '@/constants/ivanovoHotelContent.json'
import { headers } from 'next/headers'

export const getContent = async () => {
	const headersList = headers()
	const domain = headersList.get('host') || ''

	let content = ivanovoHotelContent

	if (domain === 'ivanovohotel.ivhg.ru') {
		content = ivanovoHotelContent
	} else if (domain === 'arthotel.ivhg.ru') {
		content = artHotelContent
	}

	return content
}
