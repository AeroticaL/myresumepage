import { motion } from 'framer-motion'
import { ArrowCircleUpIcon } from '@heroicons/react/outline'
import { FaGolang } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNode } from "react-icons/fa";





const HobbiesCard = ({ section }) => {
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
                backgroundImage: 'url(\'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDI2OW1iYWF0Z3BnYW1ib3o2MHVpNjczNzN5YjBjY2dicGc2d2FibSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hComt8hkAXJi3657Mk/giphy.gif\')', // Replace 'your-gif-url.gif' with the actual URL of your GIF
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
		>
             <div className="text-[#ffffff] dark:text-[#000000] xl:text-3xl  lg:text-lg text-sm font-bold">
                HOBBIES 
            </div>
			
			</motion.a>
	)
}

export default HobbiesCard
