'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MessageSquare, X, ChevronUp } from 'lucide-react';
import { WhatsAppIcon } from './whatsapp-icon';

export function ConnectUs() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Options configuration
  const options = [
    {
      name: 'WhatsApp',
      icon: <WhatsAppIcon className="w-5 h-5" />,
      color: 'bg-[#25D366] text-white shadow-md',
      labelColor: 'text-[#25D366]',
      href: 'https://wa.me/971522194186',
      description: 'Chat with us',
    },
    {
      name: 'Call Support',
      icon: <Phone className="w-5 h-5" />,
      color: 'bg-blue-600 text-white shadow-md',
      labelColor: 'text-blue-600',
      href: 'tel:+971522194186',
      description: '+971 52 219 4186',
    },
    {
      name: 'Email Us',
      icon: <Mail className="w-5 h-5" />,
      color: 'bg-primary text-white shadow-md',
      labelColor: 'text-primary',
      href: 'mailto:Admin@alaatransport.com',
      description: 'Admin@alaatransport.com',
    },
  ];

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'tween',
        ease: 'easeOut',
        duration: 0.25,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 15,
      transition: {
        type: 'tween',
        ease: 'easeIn',
        duration: 0.2,
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'tween',
        ease: 'easeOut',
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 0.95,
      transition: {
        type: 'tween',
        ease: 'easeIn',
        duration: 0.15,
      },
    },
  };

  return (
    <div ref={menuRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Menu Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col gap-4 mb-4 items-end pointer-events-auto"
          >
            {options.map((option) => (
              <motion.a
                key={option.name}
                href={option.href}
                target={option.name === 'WhatsApp' ? '_blank' : undefined}
                rel={option.name === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: -4 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-shadow duration-300"
              >
                <div className="text-right">
                  <p className="text-xs text-gray-400 dark:text-zinc-500 font-sans leading-none mb-0.5">
                    {option.description}
                  </p>
                  <p className={`text-[14px] font-bold font-sans ${option.labelColor} leading-none`}>
                    {option.name}
                  </p>
                </div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-transform ${option.color}`}>
                  {option.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleMenu}
        aria-label="Connect with Us"
        aria-expanded={isOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group flex items-center gap-2 px-4 py-3 bg-primary hover:bg-primary/95 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      >
        {/* Icon container */}
        <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            <MessageSquare className="w-5 h-5 text-white fill-white/10" />
          </motion.div>

          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: isOpen ? 1 : 0, rotate: isOpen ? 0 : -180 }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            <X className="w-5 h-5 text-white" />
          </motion.div>
        </div>

        {/* Label */}
        <span className="font-bold text-sm font-sans tracking-wide pr-1 select-none">
          {isOpen ? 'Close' : 'Connect Us'}
        </span>
      </motion.button>
    </div>
  );
}
