import { motion } from 'framer-motion'
import { ArrowCircleUpIcon } from '@heroicons/react/outline'
import { FaGolang } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNode } from "react-icons/fa";





const LanguagesCard = ({ section }) => {
	return (
		<motion.a
		
			target="_blank"
			rel="noreferrer"
			animate={{ opacity: ['all', 'about'].includes(section) ? 1 : 0.3 }}
			className="rounded-3xl bg-[#FF8C00] dark:saturate-000 dark:brightness-1000 flex justify-center items-center col-span-1 relative text-white"
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
            style={{
                backgroundImage: 'url(\'https://image.over-blog.com/llylzRdqTE0DUCXV150E_DkU5A4=/filters:no_upscale()/image%2F0553596%2F20210120%2Fob_1846f4_matrix.gif\')', // Replace 'your-gif-url.gif' with the actual URL of your GIF
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
		>
             <FaGolang className="m-2 md:m-5 md:mb-5 xl:m-5 mb-2 mr-2 w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16" />
      <FaPython className="m-2 md:m-5 md:mb-5 xl:m-5 mb-2 mr-2 w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16" />
      <IoLogoJavascript className="m-2 md:m-5 md:mb-5 xl:m-5 mb-2 mr-2 w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16" />
      <FaNode className="m-2 md:m-5 md:mb-5 xl:m-5 mb-2 mr-2 w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-19" />
			
			</motion.a>
	)
}

export default LanguagesCard
