'use client'
import FeedbackBlock from '@/components/FeedbackBlock'
import { FeedbacksBlocks } from '@/interfaces/content.interfaces'
import { FC } from 'react'

import { EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

import './Feedback.scss'

interface Feedback {
	borderColor: string
	feedbacks: FeedbacksBlocks
}

const Feedback: FC<Feedback> = ({ borderColor, feedbacks }) => {
	return (
		<div>
			<Swiper
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={3}
				effect={'coverflow'}
				initialSlide={1}
				coverflowEffect={{
					rotate: 0,
					stretch: -30,
					slideShadows: false,
				}}
				modules={[EffectCoverflow, Pagination]}
				pagination={{ el: '.swiper-pagination', clickable: true }}
				breakpoints={{
					0: {
						coverflowEffect: {
							scale: 0.95,
							stretch: -20,
						},
						slidesPerView: 1.15,
					},
					414: {
						slidesPerView: 1.3,
					},
					680: {
						slidesPerView: 2,
					},
					835: {
						slidesPerView: 3,
						coverflowEffect: {
							scale: 0.95,
							stretch: -30,
						},
					},
					1439: {
						coverflowEffect: {
							scale: 0.85,
						},
					},
				}}
				className='h-[816px] xl:h-[750px] lg:h-[720px] sm:h-[570px]'
			>
				{Object.entries(feedbacks).map(([feedbackKey, feedbackInfo]) => (
					<SwiperSlide key={feedbackKey} className='lg:px-0'>
						<FeedbackBlock
							borderColor={borderColor}
							feedbackInfo={feedbackInfo}
						/>
					</SwiperSlide>
				))}
				<div className='swiper-pagination bg-white'></div>
			</Swiper>
		</div>
	)
}

export default Feedback
