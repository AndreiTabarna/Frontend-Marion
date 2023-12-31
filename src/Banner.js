import React, { useState, useEffect, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Banner.css';

const Banner = () => {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();

  const importAllBannerImages = (r) => r.keys().map(r);
  const bannerImagePaths = importAllBannerImages(require.context('./Banners', false, /\.(jpg)$/));

  const animationTypes = useMemo(() => ['fade', 'zoom', 'slideRight', 'slideLeft'], []);

  useEffect(() => {
    let isMounted = true;

    const animateBanner = async () => {
      try {
        const randomAnimation =
          animationTypes[Math.floor(Math.random() * animationTypes.length)];

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

        await controls.start(animationProps);

        if (isMounted) {
          setIndex((prevIndex) => (prevIndex + 1) % bannerImagePaths.length);
          await controls.start({
            opacity: 1,
            x: '0%',
            scale: 1,
            transition: { duration: 1.0 },
          });
        }
      } catch (error) {
        // Handle any errors (e.g., component unmounted) to prevent crashing
          console.error('Animation error:', error.message);
          
      }
    };

    const interval = setInterval(() => {
      animateBanner();
    }, 5000);

    return () => {
      clearInterval(interval);
      isMounted = false;
    };
  }, [bannerImagePaths, controls, animationTypes]);

  useEffect(() => {
    // Call controls.start() after the initial mount
    controls.start({
      opacity: 1,
      x: '0%',
      scale: 1,
      transition: { duration: 1.0 },
    });

    return () => {
      // Cleanup: Cancel ongoing animations when the component unmounts
      controls.stop();
    };
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 100 }}
      animate={controls}
      style={{ position: 'relative', overflow: 'hidden', height: '350px' }}
      className="banner-container"
    >
      <motion.img
        key={index}
        src={bannerImagePaths[index]}
        alt={`Banner Image ${index + 1}`}
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        className="banner-image"
      />
    </motion.div>
  );
};

export default Banner;

