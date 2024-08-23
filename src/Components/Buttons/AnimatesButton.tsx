import React, { useRef, useEffect } from 'react';
import { Button, ButtonProps } from '@mui/material';
import gsap from 'gsap';

const AnimatedButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const buttonElement = buttonRef.current;

    if (buttonElement) {
      const tl = gsap.timeline({ paused: true });

      tl.to(buttonElement, {
        '--border-width-horizontal': '100%',
        duration: 0.5,
        ease: 'power1.inOut',
      })
        .to(buttonElement, {
          '--border-width-vertical': '100%',
          duration: 0.5,
          ease: 'power1.inOut',
        }, 0); 

      buttonElement.addEventListener('mouseenter', () => tl.play());
      buttonElement.addEventListener('mouseleave', () => tl.reverse());

      return () => {
        buttonElement.removeEventListener('mouseenter', () => tl.play());
        buttonElement.removeEventListener('mouseleave', () => tl.reverse());
      };
    }
  }, []);

  return (
    <Button
      ref={buttonRef}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        padding: '0 20px',
        height: '42px',
        borderRadius: '4px',
        backgroundColor: 'transparent',
        color: '#FC0000',
        fontSize: '1em',
        fontWeight: 'bold',
        letterSpacing: '0.04em',
        textTransform: 'none',
        '--border-width-horizontal': '0%', 
        '--border-width-vertical': '0%',  
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          width: '0',
          height: '0',
          backgroundColor: 'transparent',
          transition: 'none', 
        },
        '&::before': {
          top: 0,
          left: 0,
          width: 'var(--border-width-horizontal)',
          height: '2px',
          backgroundColor: '#FFFFFF',
          transformOrigin: 'left center',
        },
        '&::after': {
          bottom: 0,
          right: 0,
          width: 'var(--border-width-horizontal)',
          height: '2px',
          backgroundColor: '#FFFFFF',
          transformOrigin: 'right center',
        },
        '&:hover': {
          backgroundColor: '#FC0000',
          color: '#FFFFFF',
          '&::before': {
            width: '100%',
            transition: 'width 0.5s ease-out', 
          },
          '&::after': {
            width: '100%',
            transition: 'width 0.5s ease-out', 
          },
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default AnimatedButton;
