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
    if (width === 0 || height === 0) return;

    const centerX = width / 2;
    const centerY = height / 2;
    const minDimension = Math.min(width, height);
    const orbitRadius = minDimension * 0.35;
    const imageSize = minDimension * 0.08;
    const centerImageSize = minDimension * 0.25;

    const centerImg = new Image();
    centerImg.src = centerImage;
    centerImg.crossOrigin = "anonymous";

    const surroundingImgs = surroundingImages.map(src => {
      const img = new Image();
      img.src = src;
      img.crossOrigin = "anonymous";
      return img;
    });

    let animationFrameId: number;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Draw orbit circle
      ctx.strokeStyle = 'rgba(77, 208, 225, 0.2)';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, orbitRadius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw center image with glow effect
      ctx.save();
      ctx.shadowColor = 'rgba(77, 208, 225, 0.5)';
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(centerX, centerY, centerImageSize / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      if (centerImg.complete && centerImg.naturalHeight !== 0) {
        ctx.drawImage(centerImg, centerX - centerImageSize / 2, centerY - centerImageSize / 2, centerImageSize, centerImageSize);
      }
      ctx.restore();

      // Draw surrounding images
      surroundingImgs.forEach((img, index) => {
        if (img.complete && img.naturalHeight !== 0) {
          const angle = (time * 0.0005 + index * (Math.PI * 2 / surroundingImgs.length)) % (Math.PI * 2);
          const x = centerX + Math.cos(angle) * orbitRadius;
          const y = centerY + Math.sin(angle) * orbitRadius;

          ctx.save();
          ctx.shadowColor = 'rgba(77, 208, 225, 0.3)';
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(x, y, imageSize / 2, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(img, x - imageSize / 2, y - imageSize / 2, imageSize, imageSize);
          ctx.restore();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    // Start animation immediately, images will appear when loaded
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [centerImage, surroundingImages, dimensions]);

  return (
    <div ref={containerRef} style={{ width, height, overflow: 'hidden' }} className="flex items-center justify-center">
      <canvas 
        ref={canvasRef} 
        width={dimensions.width} 
        height={dimensions.height}
        style={{ display: 'block', maxWidth: '100%', maxHeight: '100%' }}
      />
    </div>
  );
};

export default Orbit;