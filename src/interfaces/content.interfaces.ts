type Color = {
	light_bg_color: string
	dark_bg_color: string
	panel_background: string
	light_text_color: string
	dark_text_color: string
	order_text: string
	light_secondary_color: string
	dark_secondary_color: string
	icon_bg: string
}

type MainInfo = {
	phone: string
	title: string
	sub_title: string
}

type AboutUsInfo = {
	title: string
	features: string[]
}

type RoomFeatures = string[]

export type RoomInfo = {
	title: string
	short_description: string
	'room-type': string
	features: RoomFeatures
}

type RoomBlocks = RoomInfo[]

type RoomsInfo = {
	title: string
	button: string
	blocks: RoomBlocks
}

export type FeedbacksInfo = {
	name: string
	text: string
}

export type FeedbacksBlocks = {
	first: FeedbacksInfo
	second: FeedbacksInfo
	third: FeedbacksInfo
}

type Feedbacks = {
	title: string
	blocks: FeedbacksBlocks
}

type AddressInfo = {
	title: string
	address: string
}

type Footer = {
	tel: 'string'
	email: 'string'
	vk: 'string'
	class: 'string'
}

export type HotelData = {
	colors: Color
	main: MainInfo
	about_us: AboutUsInfo
	rooms: RoomsInfo
	feedbacks: Feedbacks
	address: AddressInfo
	footer: Footer
}
