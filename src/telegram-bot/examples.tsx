import React, { useState } from 'react';
import { useTelegramBot } from './useTelegramBot';

// Пример 1: Простая форма обратной связи
export const ContactForm: React.FC = () => {
  const [message, setMessage] = useState('');
  const { sendMessage, loading, error } = useTelegramBot();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const success = await sendMessage({
      text: `📞 Новое сообщение с сайта\n\n💬 ${message}`,
      parseMode: 'HTML',
    });

    if (success) {
      setMessage('');
      alert('Сообщение отправлено!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ваше сообщение..."
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Отправка...' : 'Отправить'}
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

// Пример 2: Уведомления о событиях
export const EventNotifier: React.FC = () => {
  const { sendMessage } = useTelegramBot();

  const notifyEvent = async (eventName: string, details: string) => {
    await sendMessage({
      text: `🎉 Новое событие: ${eventName}\n\n📋 ${details}`,
      parseMode: 'HTML',
    });
  };

  return (
    <div>
      <button onClick={() => notifyEvent('Пользователь зарегистрировался', 'Новый участник DAO')}>
        Уведомить о регистрации
      </button>
    </div>
  );
};

// Пример 3: Мониторинг ошибок
export const ErrorReporter: React.FC = () => {
  const { sendMessage } = useTelegramBot();

  const reportError = async (error: Error, context: string) => {
    await sendMessage({
      text: `🚨 Ошибка на сайте\n\n📍 Контекст: ${context}\n❌ Ошибка: ${error.message}\n⏰ Время: ${new Date().toLocaleString('ru-RU')}`,
      parseMode: 'HTML',
    });
  };

  return (
    <div>
      <button onClick={() => reportError(new Error('Тестовая ошибка'), 'Тестовый компонент')}>
        Отправить тестовую ошибку
      </button>
    </div>
  );
};

// Пример 4: Статистика и аналитика
export const AnalyticsReporter: React.FC = () => {
  const { sendMessage } = useTelegramBot();

  const sendDailyReport = async (stats: any) => {
    const report = `📊 Ежедневный отчет\n\n👥 Посетители: ${stats.visitors}\n📈 Конверсия: ${stats.conversion}%\n💰 Доход: $${stats.revenue}`;
    
    await sendMessage({
      text: report,
      parseMode: 'HTML',
    });
  };

  return (
    <div>
      <button onClick={() => sendDailyReport({ visitors: 1000, conversion: 2.5, revenue: 5000 })}>
        Отправить ежедневный отчет
      </button>
    </div>
  );
}; 