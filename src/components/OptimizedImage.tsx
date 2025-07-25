import React from 'react';

interface OptimizedImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  width?: number;
  height?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  webpSrc,
  alt,
  className = '',
  loading = 'lazy',
  sizes,
  width,
  height
}) => {
  return (
    <picture>
      {webpSrc && (
        <source srcSet={webpSrc} type="image/webp" />
      )}
      <source srcSet={src} type="image/jpeg" />
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        sizes={sizes}
        width={width}
        height={height}
        decoding="async"
      />
    </picture>
  );
};

export default OptimizedImage; 