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
  className = '',
}) => {
  const baseClasses =
    'font-aspekta font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500',
    outline:
      'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    gradient:
      'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500',
  };

  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
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
      className={`rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-aspekta font-semibold text-white shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl ${className}`}
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

export const SocialButton: React.FC<SocialButtonProps> = ({
  children,
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl bg-gray-100 px-4 py-2 font-aspekta font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-200 ${className}`}
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
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-3 py-1.5 font-aspekta font-medium transition-colors duration-200 ${
        isActive ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
      className="fixed bottom-8 right-8 rounded-full bg-primary-600 p-3 text-white shadow-lg transition-colors duration-200 hover:bg-primary-700"
      aria-label="Scroll to top"
    >
      <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

// Showcase компонент
export const ButtonShowcase: React.FC = () => {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h2 className="mb-4 text-2xl font-bold">Основные кнопки</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="gradient">Gradient Button</Button>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-bold">Размеры кнопок</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="small">Small Button</Button>
          <Button size="medium">Medium Button</Button>
          <Button size="large">Large Button</Button>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-bold">Состояния кнопок</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Normal Button</Button>
          <Button disabled>Disabled Button</Button>
          <Button className="opacity-75">Loading...</Button>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-bold">Специализированные кнопки</h2>
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-lg font-semibold">CTA Button</h3>
            <CTAButton>Start proving now</CTAButton>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">Social Button</h3>
            <SocialButton>Telegram</SocialButton>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">Language Switcher</h3>
            <div className="flex gap-2">
              <LanguageButton isActive={true} onClick={() => {}}>
                RU
              </LanguageButton>
              <LanguageButton isActive={false} onClick={() => {}}>
                EN
              </LanguageButton>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">Scroll To Top</h3>
            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </div>
  );
};
