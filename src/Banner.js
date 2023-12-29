import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Banner.css';

const Banner = () => {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();

  const importAllBannerImages = (r) => r.keys().map(r);
  const bannerImagePaths = importAllBannerImages(require.context('./Banners', false, /\.(jpg)$/));

  const animationTypes = ['fade', 'zoom', 'slideRight', 'slideLeft'];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomAnimation = animationTypes[Math.floor(Math.random() * animationTypes.length)];

      let animationProps = {};
      switch (randomAnimation) {
        case 'fade':
          animationProps = { opacity: 0, transition: { duration: 1.0 } };
          break;
        case 'zoom':
          animationProps = { scale: 0, transition: { duration: 1.0 } };
          break;
        case 'slideRight':
          animationProps = { x: '100%', transition: { duration: 1.0 } };
          break;
        case 'slideLeft':
          animationProps = { x: '-100%', transition: { duration: 1.0 } };
          break;
        default:
          animationProps = { opacity: 0, transition: { duration: 1.0 } };
          break;
      }

      controls.start(animationProps)
        .then(() => setIndex((prevIndex) => (prevIndex + 1) % bannerImagePaths.length))
        .then(() => controls.start({ opacity: 1, x: '0%', scale: 1, transition: { duration: 1.0 } }));
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerImagePaths, controls, animationTypes]);

  // Asigură-te că controls.start() este apelat doar după montarea completă a componentei
  useEffect(() => {
    controls.start({ opacity: 1, x: '0%', scale: 1, transition: { duration: 1.0 } });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 100 }}
      animate={controls}
      style={{ position: 'relative', overflow: 'hidden', height: '350px' }}
      className="banner-container"
    >
      <motion.img
        src={bannerImagePaths[index]}
        alt={`Banner Image ${index + 1}`}
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        className="banner-image"
      />
    </motion.div>
  );
};

export default Banner;

