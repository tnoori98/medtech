'use client';

import {useEffect, useMemo, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import MriPage from './MriPage';
import {useMessages, useTranslations} from 'next-intl';

type Slide = {desc: string};

export const Spotlight = () => {
  const t = useTranslations('parallax');
  const messages = useMessages() as any;

  // Safely extract slides from messages
  const slides: Slide[] = (messages?.parallax?.slides ?? []) as Slide[];
  const slidesText = useMemo(() => slides.map(s => s.desc), [slides]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slidesText.length === 0) return;
    const id = setInterval(() => {
      setIndex(prev => (prev + 1) % slidesText.length);
    }, 2000);
    return () => clearInterval(id);
  }, [slidesText.length]);

  // Reset index if locale changes and slide count shrinks
  useEffect(() => {
    if (index >= slidesText.length) setIndex(0);
  }, [slidesText.length, index]);

  return (
    <div>
    <section className="h-screen w-full flex flex-col md:flex-row items-center md:items-stretch justify-center overflow-hidden relative px-6 md:px-20">
      <div className="w-full md:w-1/2 h-[400px] md:h-full flex items-center justify-center">
        <MriPage />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left mt-10 md:mt-0">
        <div className="bg-black/50 backdrop-blur-md p-6 rounded-xl max-w-md shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow">
            {t('title')}
          </h1>

          <div className="h-20 overflow-hidden mt-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={slidesText[index] ?? '—'}
                className="text-2xl md:text-3xl font-medium text-white drop-shadow"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -20}}
                transition={{duration: 0.5}}
              >
                {slidesText[index] ?? ''}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};
