import { useState } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CollapsibleBoxProps {
  title: string;
  children: ReactNode;
}

export default function CollapsibleBox({ title, children }: CollapsibleBoxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl border-2 border-[#C9A8FF] rounded-xl bg-[#C60F7B] text-[#E2DBBE] shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-4 font-bold text-xl hover:bg-[#980B5D] rounded-t-xl"
      >
        {title}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="overflow-hidden px-6 py-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
