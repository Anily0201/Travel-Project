import { useSpring, animated } from 'react-spring';

const RotateAnimation = ({ degrees = 360, children }) => {
  const rotate = useSpring({
    transform: `rotate(${degrees}deg)`,
    from: { transform: 'rotate(0deg)' },
  });

  return <animated.div style={rotate}>{children}</animated.div>;
};

export default RotateAnimation;
