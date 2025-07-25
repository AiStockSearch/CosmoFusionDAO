import React, { useState } from "react";

export const SubscribeColumn = ({
  links,
  title,
  linksAddons,
}: {
  links: Array<{ text: string; link: string }>;
  title: string;
    linksAddons: any;
}): React.JSX.Element => {
  const [ email, setEmail ] = useState( "" );
  const [ loading, setLoading ] = useState( false );
  const [ success, setSuccess ] = useState( false );
  const [ error, setError ] = useState( "" );

  // Замените на ваш токен и chat_id
  const TELEGRAM_BOT_TOKEN = process.env.REACT_APP_TELEGRAM_BOT_TOKEN || "";
  const TELEGRAM_CHAT_ID = process.env.REACT_APP_TELEGRAM_CHAT_ID || "";

  const handleSubmit = async ( e?: React.FormEvent ) =>
  {
    if ( e ) e.preventDefault();
    setError( "" );
    setSuccess( false );
    if ( !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test( email ) )
    {
      setError( "Введите корректный email" );
      return;
    }
    setLoading( true );
    try
    {
      const message = `New subscriber: ${ email }`;
      const url = `https://api.telegram.org/bot${ TELEGRAM_BOT_TOKEN }/sendMessage`;
      const res = await fetch( url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( {
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
        } ),
      } );
      if ( !res.ok ) throw new Error( "Ошибка отправки" );
      setSuccess( true );
      setEmail( "" );
    } catch ( err )
    {
      setError( "Ошибка отправки. Попробуйте позже." );
    } finally
    {
      setLoading( false );
    }
  };

  return (
    <div className="mb-6 lg:ml-6 flex flex-col gap-2 pt-2 md:w-[22rem]">
      <span className="font-space-mono mb-4 text-lg font-bold text-cyan-700">
        {title}
      </span>
      <form
        className="relative mb-2 flex space-x-2 rounded-xl bg-gray-100"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="
          font-space-mono flex-1 rounded-xl px-4 py-4 focus:border-transparent 
          focus:outline-none bg-white border border-cyan-900
          placeholder:text-gray-500
          focus:bg-gray-100
          "
          aria-label="Email address"
          value={email}
          onChange={( e ) => setEmail( e.target.value )}
          disabled={loading}
        />
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
          aria-label="Subscribe"
          disabled={loading}
        >
          →
        </button>
      </form>
      {success && (
        <div className="text-green-600 text-sm px-2">
          Спасибо! Вы подписаны.
        </div>
      )}
      {error && <div className="text-red-600 text-sm px-2">{error}</div>}
      <div className="flex flex-col gap-2 px-2">
        <p className="font-share-tech-mono mb-0 text-sm leading-[0.8] text-gray-500">
          We care about your data.
        </p>
        <p className="font-share-tech-mono mb-0 text-sm leading-[0.8] text-gray-500">
          Read our{" "}
          <button
            type="button"
            className="text-cyan-700 underline"
            onClick={() =>
            {
              window.location.hash = "#privacy-policy";
            }}
          >
            privacy policy
          </button>
          .
        </p>
      </div>

      <div onClick={() => window.open( linksAddons?.telegram, "_blank" )} className="flex flex-col gap-1 mb-2 border-t border-gray-200 pt-2 mt-4">
        <span className="text-[0.6rem] font-space-mono font-bold text-gray-500">Telegram:</span>
        <span className="text-[0.9rem] font-space-mono text-cyan-700 underline -mt-2">{linksAddons?.telegram.split( "/" )[ 3 ]}</span>
      </div>
      <div onClick={() => window.open( linksAddons?.substack, "_blank" )} className="flex flex-col gap-1">
        <span className="text-[0.6rem] font-space-mono  font-bold text-gray-500">Subtract:</span>
        <span className="text-[0.9rem] font-space-mono text-cyan-700 underline -mt-2">{linksAddons?.substack.split( "/" )[ 3 ]}</span>
      </div>
    </div>
  );
};
