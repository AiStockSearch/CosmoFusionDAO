import React from 'react';

// TASA Orbiter Display компоненты
interface TasaHeadingProps {
  variant?: 'hero' | 'large' | 'medium' | 'semibold' | 'bold' | 'regular';
  children: React.ReactNode;
  className?: string;
}

export const TasaHeading: React.FC<TasaHeadingProps> = ({ 
  variant = 'regular', 
  children, 
  className = '' 
}) => {
  const baseClasses = 'font-tasa';
  const variantClasses = {
    hero: 'text-tasa-hero',
    large: 'text-tasa-large',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    regular: 'font-normal'
  };

  return (
    <h1 className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </h1>
  );
};

// Aspekta компоненты
interface AspektaTextProps {
  variant?: 'heading' | 'subheading' | 'body' | '450' | '500' | '550' | '600';
  children: React.ReactNode;
  className?: string;
}

export const AspektaText: React.FC<AspektaTextProps> = ({ 
  variant = 'body', 
  children, 
  className = '' 
}) => {
  const baseClasses = 'font-aspekta';
  const variantClasses = {
    heading: 'text-aspekta-heading',
    subheading: 'text-aspekta-subheading',
    body: 'text-aspekta-body',
    '450': 'font-[450]',
    '500': 'font-[500]',
    '550': 'font-[550]',
    '600': 'font-[600]'
  };

  return (
    <p className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </p>
  );
};

// Trap компоненты
interface TrapTextProps {
  variant?: 'accent' | 'large';
  children: React.ReactNode;
  className?: string;
}

export const TrapText: React.FC<TrapTextProps> = ({ 
  variant = 'accent', 
  children, 
  className = '' 
}) => {
  const baseClasses = 'font-trap';
  const variantClasses = {
    accent: 'text-trap-accent',
    large: 'text-lg font-bold'
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

// Showcase компонент
export const TypographyShowcase: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">TASA Orbiter Display</h2>
        <div className="space-y-4">
          <TasaHeading variant="hero">Hero Heading - 64px/1.1 (600 weight)</TasaHeading>
          <TasaHeading variant="large">Large Heading - 44px/1 (500 weight)</TasaHeading>
          <TasaHeading variant="medium">Medium Heading - 500 weight</TasaHeading>
          <TasaHeading variant="semibold">Semi-bold Heading - 600 weight</TasaHeading>
          <TasaHeading variant="bold">Bold Heading - 700 weight</TasaHeading>
          <TasaHeading variant="regular">Regular Heading - 400 weight</TasaHeading>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Aspekta</h2>
        <div className="space-y-4">
          <AspektaText variant="heading">Heading - 24px/1.3 (550 weight)</AspektaText>
          <AspektaText variant="subheading">Subheading - 20px/1.4 (500 weight)</AspektaText>
          <AspektaText variant="body">Body text - 16px/1.5 (450 weight)</AspektaText>
          <AspektaText variant="450">450 weight text</AspektaText>
          <AspektaText variant="500">500 weight text</AspektaText>
          <AspektaText variant="550">550 weight text</AspektaText>
          <AspektaText variant="600">600 weight text</AspektaText>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Trap</h2>
        <div className="space-y-4">
          <TrapText variant="accent">Accent text - 18px/1.2 (700 weight)</TrapText>
          <TrapText variant="large">Large accent text - 700 weight</TrapText>
        </div>
      </div>
    </div>
  );
}; 