import { motion } from 'framer-motion';

export function LoadingSpinner() {
    return (
        <motion.div 
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <motion.div 
                className="absolute inset-0"
                animate={{
                    background: [
                        'linear-gradient(45deg, #600018, #C06000, #C0A000)',
                        'linear-gradient(135deg, #C06000, #C0A000, #600018)',
                        'linear-gradient(225deg, #C0A000, #600018, #C06000)',
                        'linear-gradient(315deg, #600018, #C06000, #C0A000)'
                    ]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>
            
            <motion.div 
                className="w-24 h-24 rounded-full bg-black/20 shadow-lg backdrop-blur-sm flex items-center justify-center"
                animate={{ 
                    rotate: 360,
                }}
                transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "linear" 
                }}
            >
                <motion.div 
                    className="w-16 h-16 rounded-full"
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#600018] via-[#C06000] to-[#C0A000] opacity-90" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
