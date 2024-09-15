'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const AnimatedLogo: React.FC<{ width: number; height: number }> = ({ width, height }) => {
  const startPosition = { x: -5, y: 10 }; 
  const [pupilPosition, setPupilPosition] = useState(startPosition);
  const [isDilated, setIsDilated] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const targetPosition = useRef(startPosition);

  useEffect(() => {
    const animationSequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000)); // Wait 3 seconds
      setIsFollowing(true);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Follow for 2 seconds before dilating
      setIsDilated(true);
      await new Promise(resolve => setTimeout(resolve, 5000)); // Continue following for 5 more seconds
      setIsFollowing(false);
      // Return to start position
      targetPosition.current = startPosition;
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for centering
      setIsDilated(false);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
      
      // Repeat the sequence
      animationSequence();
    };

    animationSequence();
  }, []);

  useEffect(() => {
    if (!isFollowing) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const x = e.clientX - centerX;
        const y = e.clientY - centerY;
        
        // Create an elliptical boundary
        const a = rect.width * 0.2; // horizontal radius
        const b = rect.height * 0.25; // vertical radius
        
        // Adjust the ellipse to restrict top movement
        let adjustedX = x;
        let adjustedY = y;
        if (y < 0) { // Top half
          adjustedX *= 0.5; // Reduce horizontal movement
          adjustedY *= 1.5; // Reduce vertical movement
        }
        
        // Calculate the distance from the center to the ellipse boundary
        const angle = Math.atan2(adjustedY, adjustedX);
        const maxDistance = (a * b) / Math.sqrt(Math.pow(b * Math.cos(angle), 2) + Math.pow(a * Math.sin(angle), 2));
        
        // Additional top restriction
        const topRestriction = Math.max(0, -Math.sin(angle)) * rect.height * 0.2;
        
        // Calculate the actual distance and clamp it to the maxDistance
        const distance = Math.min(Math.sqrt(adjustedX*adjustedX + adjustedY*adjustedY), maxDistance - topRestriction);
        
        targetPosition.current = {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance
        };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isFollowing]);

  useEffect(() => {
    const animatePupil = () => {
      setPupilPosition(current => ({
        x: current.x + (targetPosition.current.x - current.x) * 0.1,
        y: current.y + (targetPosition.current.y - current.y) * 0.1
      }));
      requestAnimationFrame(animatePupil);
    };

    const animationFrame = requestAnimationFrame(animatePupil);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const pupilSize = isDilated ? 'w-[30%] h-[30%]' : 'w-1/5 h-1/5';

  return (
    <div ref={containerRef} className="relative" style={{ width, height }}>
      <Image
        src="/images/logo-no-pupil.png"
        alt="Softmax Logo"
        width={width}
        height={height}
        className="rounded-full"
      />
      <div 
        className={`absolute top-1/2 left-1/2 ${pupilSize} transition-all duration-500 ease-out`}
        style={{ 
          transform: `translate(calc(-50% + ${pupilPosition.x}px), calc(-50% + ${pupilPosition.y}px))`,
        }}
      >
        <Image
          src="/images/pupil.png"
          alt="Pupil"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default AnimatedLogo;