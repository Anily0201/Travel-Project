import { useSpring, animated } from 'react-spring';

const SlideInAnimation = ({ direction = 'left', children }) => {
  const slideIn = useSpring({
    transform: 'translateX(0%)',
    from: { transform: `translateX(${direction === 'right' ? '-' : ''}100%)` },
  });

  return <animated.div style={slideIn}>{children}</animated.div>;
};

export default SlideInAnimation;
