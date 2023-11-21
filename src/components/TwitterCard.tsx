import { motion } from 'framer-motion'
import { ArrowCircleUpIcon } from '@heroicons/react/outline'
const TwitterCard = ({ section }) => {
	return (
		<motion.a
			href="https://twitter.com/Aerotical_djaul"
			target="_blank"
			rel="noreferrer"
			animate={{ opacity: ['all', 'contact'].includes(section) ? 1 : 0.3 }}
			className="rounded-3xl bg-[#000000] dark:saturate-000 dark:brightness-1000 flex justify-center items-center col-span-1 relative"
			whileHover="groupHover"
			variants={{
				groupHover: {
					scale: 1.01,
					transition: {
						duration: 0.1,
						ease: 'easeInOut',
					},
				},
			}}
		>
			<div className="w-12 md:w-0 lg:w-32 xl:w-1/2">
				<svg
					viewBox="0 0 24 25"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					preserveAspectRatio="xMidYMid"
				>
					<g>
						<path
							d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
							className="fill-current text-white dark:text-gray-100"
						></path>
					</g>
				</svg>
			</div>
			<ArrowCircleUpIcon className="absolute stroke-white dark:stroke-gray-00 bottom-0 right-0 m-2 md:m-5 md:mb-5 xl:m-5 rotate-45 mb-2 mr-2 w-8 h-8 lg:w-14 lg:h-14 md:w-10 md:h-10" />
		</motion.a>
	)
}

export default TwitterCard
