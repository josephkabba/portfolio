import React, { useRef, useEffect, useState } from 'react';

interface OrbitProps {
  centerImage: string;
  surroundingImages: string[];
  width?: number | string;
  height?: number | string;
}

const Orbit: React.FC<OrbitProps> = ({ centerImage, surroundingImages, width = '100%', height = '100%' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [width, height]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = dimensions;
    const centerX = width / 2;
    const centerY = height / 2;
    const minDimension = Math.min(width, height);
    const orbitRadius = minDimension * 0.4;
    const imageSize = minDimension * 0.1;
    const centerImageSize = minDimension * 0.3;

    const centerImg = new Image();
    centerImg.src = centerImage;

    const surroundingImgs = surroundingImages.map(src => {
      const img = new Image();
      img.src = src;
      return img;
    });

    let animationFrameId: number;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Draw center image
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, centerImageSize / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(centerImg, centerX - centerImageSize / 2, centerY - centerImageSize / 2, centerImageSize, centerImageSize);
      ctx.restore();

      // Draw surrounding images
      surroundingImgs.forEach((img, index) => {
        const angle = (time * 0.0005 + index * (Math.PI * 2 / surroundingImgs.length)) % (Math.PI * 2);
        const x = centerX + Math.cos(angle) * orbitRadius;
        const y = centerY + Math.sin(angle) * orbitRadius;

        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, imageSize / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(img, x - imageSize / 2, y - imageSize / 2, imageSize, imageSize);
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const loadImages = Promise.all([centerImg.decode(), ...surroundingImgs.map(img => img.decode())]);
    loadImages.then(() => {
      animationFrameId = requestAnimationFrame(draw);
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [centerImage, surroundingImages, dimensions]);

  return (
    <div ref={containerRef} style={{ width, height, overflow: 'hidden' }}>
      <canvas 
        ref={canvasRef} 
        width={dimensions.width} 
        height={dimensions.height}
        style={{ display: 'block' }}
      />
    </div>
  );
};

export default Orbit;