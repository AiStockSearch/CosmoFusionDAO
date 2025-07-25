import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SubscribeColumn } from '../footer.subscribeColumn';

// Мокаем eventCenter
jest.mock('../../analytics/eventCenter', () => ({
  eventCenter: {
    logEvent: jest.fn(),
  },
}));

// Мокаем telegram-bot модуль
jest.mock('../../telegram-bot', () => ({
  useTelegramBot: jest.fn(),
  formatSubscriptionMessage: jest.fn((name, email) => `Test message for ${name} ${email}`),
}));

describe('SubscribeColumn', () => {
  const mockProps = {
    links: [],
    title: 'Subscribe',
    linksAddons: {
      telegram: 'https://t.me/cosmofusiondao',
      substack: 'https://substack.com/@cosmofusiondao'
    }
  };

  const mockUseTelegramBot = {
    sendMessage: jest.fn(),
    loading: false,
    error: null,
    clearError: jest.fn(),
    isConfigured: true,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    // Мокаем useTelegramBot
    const { useTelegramBot, formatSubscriptionMessage } = require('../../telegram-bot');
    useTelegramBot.mockReturnValue(mockUseTelegramBot);
    formatSubscriptionMessage.mockReturnValue('Test message for John Doe test@example.com');
  });

  it('рендерит поля для имени и email', () => {
    render(<SubscribeColumn {...mockProps} />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Subscribe')).toBeInTheDocument();
  });

  it('можно ввести имя и email', () => {
    render(<SubscribeColumn {...mockProps} />);
    const nameInput = screen.getByLabelText('Name') as HTMLInputElement;
    const emailInput = screen.getByLabelText('Email address') as HTMLInputElement;
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    
    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('test@example.com');
  });

  it('не отправляет форму при пустом имени', async () => {
    render(<SubscribeColumn {...mockProps} />);
    const emailInput = screen.getByLabelText('Email address');
    const submitButton = screen.getByLabelText('Subscribe');
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);
    
    // Ждем немного, чтобы убедиться, что форма не отправляется
    await new Promise(resolve => setTimeout(resolve, 100));
    
    expect(mockUseTelegramBot.sendMessage).not.toHaveBeenCalled();
  });

  it('не отправляет форму при некорректном email', async () => {
    render(<SubscribeColumn {...mockProps} />);
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email address');
    const submitButton = screen.getByLabelText('Subscribe');
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(submitButton);
    
    // Ждем немного, чтобы убедиться, что форма не отправляется
    await new Promise(resolve => setTimeout(resolve, 100));
    
    expect(mockUseTelegramBot.sendMessage).not.toHaveBeenCalled();
  });

  it('успешно отправляет форму при корректных данных', async () => {
    mockUseTelegramBot.sendMessage.mockResolvedValue(true);

    render(<SubscribeColumn {...mockProps} />);
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email address');
    const submitButton = screen.getByLabelText('Subscribe');
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(mockUseTelegramBot.sendMessage).toHaveBeenCalledWith({
        text: 'Test message for John Doe test@example.com',
        parseMode: 'HTML',
      });
    });
    
    await waitFor(() => {
      expect(screen.getByText('Спасибо! Вы подписаны.')).toBeInTheDocument();
    });
  });

  it('показывает ошибку при неудачной отправке', async () => {
    mockUseTelegramBot.sendMessage.mockResolvedValue(false);
    mockUseTelegramBot.error = 'Unknown error occurred';

    render(<SubscribeColumn {...mockProps} />);
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email address');
    const submitButton = screen.getByLabelText('Subscribe');
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Unknown error occurred')).toBeInTheDocument();
    });
  });

  it('показывает состояние загрузки', async () => {
    mockUseTelegramBot.loading = true;
    
    render(<SubscribeColumn {...mockProps} />);
    const submitButton = screen.getByLabelText('Subscribe');
    
    expect(submitButton).toBeDisabled();
  });
});
