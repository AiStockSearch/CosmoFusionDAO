import React from 'react';

// Основная кнопка
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  children,
  className = ''
}) => {
  const baseClasses = 'font-aspekta font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500'
  };

  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// CTA кнопка
interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-aspekta font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl ${className}`}
    >
      {children}
    </button>
  );
};

// Социальная кнопка
interface SocialButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-100 hover:bg-gray-200 text-gray-900 font-aspekta font-medium px-4 py-2 rounded-xl transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

// Кнопка переключения языка
interface LanguageButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

export const LanguageButton: React.FC<LanguageButtonProps> = ({ 
  children, 
  isActive, 
  onClick, 
  className = '' 
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-lg font-aspekta font-medium transition-colors duration-200 ${
        isActive 
          ? 'bg-primary-600 text-white' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      } ${className}`}
    >
      {children}
    </button>
  );
};

// Кнопка прокрутки наверх
export const ScrollToTopButton: React.FC = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transition-colors duration-200"
      aria-label="Scroll to top"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

// Showcase компонент
export const ButtonShowcase: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Основные кнопки</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="gradient">Gradient Button</Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Размеры кнопок</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button size="small">Small Button</Button>
          <Button size="medium">Medium Button</Button>
          <Button size="large">Large Button</Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Состояния кнопок</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Normal Button</Button>
          <Button disabled>Disabled Button</Button>
          <Button className="opacity-75">Loading...</Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Специализированные кнопки</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">CTA Button</h3>
            <CTAButton>Start proving now</CTAButton>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Social Button</h3>
            <SocialButton>Telegram</SocialButton>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Language Switcher</h3>
            <div className="flex gap-2">
              <LanguageButton isActive={true} onClick={() => {}}>RU</LanguageButton>
              <LanguageButton isActive={false} onClick={() => {}}>EN</LanguageButton>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Scroll To Top</h3>
            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </div>
  );
}; 