import Link from 'next/link'

const NotFound = () => {
	return (
		<div className='w-full h-screen flex justify-center items-center px-4'>
			<section className='flex flex-col text-center gap-10'>
				<h1 className='text-6xl'>Ops... Error :(</h1>
				<div className='bg-black w-full text-white rounded flex justify-center items-center'>
					<Link href='/' className='w-full py-4'>
						Go main page
					</Link>
				</div>
			</section>
		</div>
	)
}

export default NotFound
