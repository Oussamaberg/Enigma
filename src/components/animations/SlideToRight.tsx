import { motion } from "framer-motion"

function SlideToRight({children}){
return <motion.div
initial={{ opacity:0 }}
whileInView={{ opacity: 1 }}
transition={{ duration: 0.8 }}

>
    {children}
</motion.div>
}
export default SlideToRight;