import React from 'react';
import { useSpring, animated } from 'react-spring';

const FadeInAnimation = ({ children }) => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return <animated.div style={fadeIn}>{children}</animated.div>;
};

export default FadeInAnimation;
