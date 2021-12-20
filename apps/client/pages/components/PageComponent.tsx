import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export default function PageComponent({ children }: Props) {
  return (
    <motion.div
      layout
      animate={{ x: 100, opacity: 1 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        duration: .1
      }}
    >
      {children}
    </motion.div>
  );
}
