import { motion } from 'framer-motion'
import { DocumentTextIcon, ArrowCircleUpIcon,DesktopComputerIcon  } from '@heroicons/react/outline'
import Link from 'next/link'

const ArticleCard = ({ section }) => {
	return (
		<motion.a
			whileHover="groupHover"
			href="https://github.com/AeroticaL"
			rel="noreferrer"
			animate={{ opacity: ['all', 'about'].includes(section) ? 1 : 0.3 }}
			target="_blank"
			variants={{
				groupHover: {
					scale: 1.01,
					transition: {
						duration: 0.1,
						ease: 'easeInOut',
					},
				},
			}}
			
			className="relative flex bg-gray-200 rounded-3xl dark:bg-gray-900 bg-white col-span-2 aspect-2/1"
		>
			<div className="text-3xl  md:text-4xl 2xl:text-4xl 2xl:mt-3 m-1 md:ml-1 ml-5 md:m-1 font-nunito font-bold">

  <div className="text-2xl xl:text-4xl md:text-4xl lg:ml-5 md:ml-2 font-bold text-gray-900 dark:text-gray-50 rounded-3xl flex items-center">
    <DesktopComputerIcon className="w-5 md:w-10" />
	<br/>
    <span className=""> Previous experiences and positions:</span>
  </div>

  <div className="text-3xl xl:text-4xl md:text-4xl lg:ml-14 md:ml-1 font-bold text-gray-600 dark:text-gray-300 rounded-3xl flex items-center">
  <div className="lg:text-xl xl:text-2xl 2xl:mr-20 2xl:mt-7 font-nunito dark:text-gray-300">
	
            {" "}
             - Full Time Backend Developer for a company called 
			 
			
			<br />
			<br />
			- Freelance software solution builder for many known companies and startups such as sneakers bots, discord groups like {" "} 
			
			<br />
			<br />
			- Projects using Python,Golang NodeJS 
		</div>
  </div>
  <br />
  <br />

			

      
    </div>
	<ArrowCircleUpIcon className="absolute stroke-white dark:stroke-gray-900 bottom-0 right-0 m-2 md:m-5 md:mb-5 xl:m-5 rotate-45 mb-2 mr-2 w-8 h-8 lg:w-14 lg:h-14 md:w-10 md:h-10" />
		</motion.a>
	)
}
export default ArticleCard
