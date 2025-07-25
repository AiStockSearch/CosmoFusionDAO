import React, { useState } from "react";
import { eventCenter } from '../analytics/eventCenter';
import { formatSubscriptionMessage, useTelegramBot } from '../telegram-bot';
import { useLocale } from '../hooks/useLocale';

export const SubscribeColumn = ( {
  title,
  linksAddons,
}: {
    title: string;
    linksAddons: any;
}): React.JSX.Element => {
  const [ name, setName ] = useState( "" );
  const [ email, setEmail ] = useState( "" );
  const [ success, setSuccess ] = useState( false );
  const { t } = useLocale();

  // Используем кастомный хук для Telegram бота
  const { sendMessage, loading, error, clearError } = useTelegramBot();

  const [ nameError, setNameError ] = useState<string>( '' );
  const [ emailError, setEmailError ] = useState<string>( '' );

  const handleSubmit = async ( e?: React.FormEvent ) =>
  {
    if ( e ) e.preventDefault();
    clearError();
    setSuccess( false );
    setNameError( '' );
    setEmailError( '' );

    // Валидация имени
    if ( !name.trim() )
    {
      setNameError( t( 'footer.subscribeForm.nameRequired' ) );
      return;
    }

    // Валидация email
    if ( !email )
    {
      setEmailError( t( 'footer.subscribeForm.emailRequired' ) );
      return;
    }

    if ( !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test( email ) )
    {
      setEmailError( t( 'footer.subscribeForm.invalidEmail' ) );
      return;
    }

    try
    {
      // Формируем сообщение с помощью утилиты
      const messageText = formatSubscriptionMessage( name, email );

      // Отправляем сообщение через хук
      const success = await sendMessage( {
        text: messageText,
        parseMode: 'HTML',
      } );

      if ( success )
      {
        // Логируем событие в аналитику
        eventCenter.logEvent(
          {
            category: 'submit',
            name: 'subscribe_form_submit',
            value: { email, name: name.trim() }
          },
          [ 'amplitude', 'firebase' ]
        );

        setSuccess( true );
        setName( "" );
        setEmail( "" );
      }
    } catch ( err )
    {
      // console.error( 'Telegram API Error:', err );
    }
  };

  return (
    <div className="mb-6 lg:ml-6 flex flex-col gap-2 pt-2 md:w-[22rem]">
      <span className="font-space-mono mb-4 text-lg font-bold text-cyan-700">
        {title}
      </span>
      <form
        className="relative mb-2 flex flex-col space-y-2"
        onSubmit={handleSubmit}
        aria-describedby="form-instructions"
      >
        <div id="form-instructions" className="sr-only">
          {t( 'footer.subscribeForm.formInstructions' )}
        </div>
        {/* Поле для имени */}
        <div className="relative">
          <input
            type="text"
            placeholder={t( 'footer.subscribeForm.namePlaceholder' )}
            className={`
              font-space-mono w-full rounded-xl px-4 py-4 focus:border-transparent 
              focus:outline-none bg-white border
              placeholder:text-gray-500
              focus:bg-gray-100
              ${nameError ? 'border-red-500' : 'border-cyan-900' }
            `}
            aria-label={t( 'footer.subscribeForm.nameLabel' )}
            aria-describedby={nameError ? "name-error" : undefined}
            aria-invalid={nameError ? "true" : "false"}
            value={name}
            onChange={( e ) =>
            {
              setName( e.target.value );
              if ( nameError ) setNameError( '' );
            }}
            disabled={loading}
            required
          />
          {nameError && (
            <div id="name-error" className="text-red-600 text-sm mt-1" role="alert">
              {nameError}
            </div>
          )}
        </div>

        {/* Поле для email */}
        <div className="relative">
          <input
            type="email"
            placeholder={t( 'footer.subscribeForm.emailPlaceholder' )}
            className={`
              font-space-mono flex-1 rounded-xl px-4 py-4 focus:border-transparent 
              focus:outline-none bg-white border
              placeholder:text-gray-500
              focus:bg-gray-100
              ${emailError ? 'border-red-500' : 'border-cyan-900' }
            `}
            aria-label={t( 'footer.subscribeForm.emailLabel' )}
            aria-describedby={emailError ? "email-error" : undefined}
            aria-invalid={emailError ? "true" : "false"}
            value={email}
            onChange={( e ) =>
            {
              setEmail( e.target.value );
              if ( emailError ) setEmailError( '' );
            }}
            disabled={loading}
            required
          />
          {emailError && (
            <div id="email-error" className="text-red-600 text-sm mt-1" role="alert">
              {emailError}
            </div>
          )}
          <button
            type="submit"
            className="
             absolute inset-y-[0.35rem] right-1 size-12 rounded-xl transition-all duration-200
             rounded-xl bg-cyan-900 border-2 border-cyan-900 text-white shadow-md
             font-bold
             transition-all duration-200 hover:bg-white hover:font-bold hover:text-cyan-900
             focus:outline-none focus:ring-2 focus:ring-cyan-400
            "
            style={{
              cursor: loading ? "not-allowed" : "pointer",
            }}
            aria-label={t( 'footer.subscribeForm.subscribeLabel' )}
            disabled={loading}
          >
            →
          </button>
        </div>
      </form>
      {success && (
        <div className="text-green-600 text-sm px-2">
          {t( 'footer.subscribeForm.successMessage' )}
        </div>
      )}
      {error && <div className="text-red-600 text-sm px-2">{error}</div>}
      <div className="flex flex-col gap-2 px-2">
        <p className="font-share-tech-mono mb-0 text-sm leading-[0.8] text-gray-500">
          {t( 'footer.subscribeForm.privacyText' )}{" "}
          <button
            type="button"
            className="text-cyan-700 underline"
            onClick={() =>
            {
              window.location.hash = "#privacy-policy";
            }}
            onKeyDown={( e ) => e.key === 'Enter' && ( window.location.hash = "#privacy-policy" )}
          >
            {t( 'footer.subscribeForm.privacyLink' )}
          </button>
          .
        </p>
      </div>

      {linksAddons?.telegram && (
        <div
          onClick={() =>
          {
            eventCenter.logEvent( { category: 'click', name: 'footer_telegram', value: { url: linksAddons.telegram } } );
            window.open( linksAddons.telegram, "_blank" );
          }}
          onKeyDown={( e ) =>
          {
            if ( e.key === 'Enter' || e.key === ' ' )
            {
              eventCenter.logEvent( { category: 'click', name: 'footer_telegram', value: { url: linksAddons.telegram } } );
              window.open( linksAddons.telegram, "_blank" );
            }
          }}
          role="button"
          tabIndex={0}
          className="flex flex-col gap-1 mb-2 border-t border-gray-200 pt-2 mt-4 cursor-pointer"
        >
          <span className="text-[0.6rem] font-space-mono font-bold text-gray-500">{t( 'footer.subscribeForm.telegramLabel' )}</span>
          <span className="text-[0.9rem] font-space-mono text-cyan-700 underline -mt-2">{linksAddons.telegram.split( "/" )[ 3 ]}</span>
        </div>
      )}
      {linksAddons?.substack && (
        <div
          onClick={() =>
          {
            eventCenter.logEvent( { category: 'click', name: 'footer_substack', value: { url: linksAddons.substack } } );
            window.open( linksAddons.substack, "_blank" );
          }}
          onKeyDown={( e ) =>
          {
            if ( e.key === 'Enter' || e.key === ' ' )
            {
              eventCenter.logEvent( { category: 'click', name: 'footer_substack', value: { url: linksAddons.substack } } );
              window.open( linksAddons.substack, "_blank" );
            }
          }}
          role="button"
          tabIndex={0}
          className="flex flex-col gap-1 cursor-pointer"
        >
          <span className="text-[0.6rem] font-space-mono  font-bold text-gray-500">{t( 'footer.subscribeForm.substackLabel' )}</span>
          <span className="text-[0.9rem] font-space-mono text-cyan-700 underline -mt-2">{linksAddons.substack.split( "/" )[ 3 ]}</span>
        </div>
      )}
    </div>
  );
};
