import React from 'react'
import assets from '../../assets'

export const Header = () => {

	return (
		<div>
			<div className="relative bg-primary min-h-[140px]  bg-[url('./src/assets/icons/bootom-icon.png')] bg-no-repeat bg-cover mb-24"></div>
			<div className='container relative'>
				<div className='absolute shadow-lg rounded-lg px-2 flex bg-white w-full justify-evenly top-[-145px]'>
					<div className='space-y-2 p-4 text-center'>
						<div className='bg-orange rounded-lg p-2'>
							<img src={assets.topArrow} alt="top arrow" width='27px' height='27px' />
						</div>
						<p className='text-sm'>Chiqim</p>
					</div>
					<div className='space-y-2 p-4 text-center'>
						<div className='bg-violet-700 rounded-lg p-2'>
							<img src={assets.bottomArrow} alt="top arrow" width='27px' height='27px' />
						</div>
						<p className='text-sm'>Kirim</p>
					</div>
				</div>
			</div>
		</div>
	)
}