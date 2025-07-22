import React from "react";
import creator from "../assets/images/creator.jpg";
import observer from "../assets/images/baby.jpg";
import manager from "../assets/images/manager.jpg";
import explorer from "../assets/images/explorer.jpg";
import critics from "../assets/images/critik.jpg";
import ambassodor from "../assets/images/ambasodor.jpg";

const data = [
  {
    select: "Explorer",
    title: "Исследователь: Голосует за новые идеи!",
    img: explorer,
    description: "Моя гипотеза заслуживает шанса!",
    arrTitle: "Обязанности:",
    arr: [
      "Предложить минимум 1 идею за цикл голосования, зарегистрированную в блокчейн-журнале.",
      "Проголосовать за 3+ гипотезы, добавляя аргументы в прозрачный журнал.",
      "Участвовать в обсуждениях перед голосованием, оставляя минимум 2 комментария.",
    ],
    rewardTitle: "Награда в токенах:",
    reward: [
      "8 токенов управления за принятую идею (по итогам голосования).",
      "3 токена за активное голосование с аргументацией.",
      "Цель: Запускать идеи и поддерживать перспективные гипотезы через голосование, продвигая коллективный поиск истины.",
    ],
    addonTitle: "Дополнительная ответсвенность и награда:",
    addon: [
      "Запускать идеи и поддерживать перспективные гипотезы через голосование, продвигая коллективный поиск истины.",
      "Возможность стать экспертом и получать дополнительные награды.",
      "Участие в экспертной группе, оценивающей качество гипотез.",
    ],
  },
  {
    select: "Criticks",
    title: "Критик: Голосует за проверенные идеи!",
    img: critics,
    description: "Только сильные гипотезы пройдут!",
    arrTitle: "Обязанности:",
    arr: [
      "Оценить 3+ гипотезы за цикл, указав слабые места в журнале.",
      "Проголосовать за или против идей, обосновывая выбор в блокчейне.",
      "Написать минимум 3 комментария в обсуждениях, усиливая критику.",
    ],
    rewardTitle: "Награда в токенах:",
    reward: [
      "7 токенов за принятую критику (подтвержденную голосами).",
      "3 токена за голосование с прозрачной аргументацией.",
    ],
    addonTitle: "Дополнительная ответсвенность и награда:",
    addon: [
      "Оценивать и поддерживать качество гипотез, продвигая коллективный поиск истины.",
      "Возможность стать экспертом и получать дополнительные награды.",
      "Участие в экспертной группе, оценивающей качество гипотез.",
    ],
  },
  {
    select: "Creator",
    title: "Создатель: Разрабатывает новые идеи!",
    img: observer,
    description: "Мои инструменты усилят DAO!",
    arrTitle: "Обязанности:",
    arr: [
      "Предложить 1+ улучшение AI или платформы за цикл, зарегистрированное в блокчейне.",
      "Проголосовать за 3+ технических предложения, обосновав выбор.",
      "Участвовать в обсуждениях техразработок, оставляя 2+ комментария.",
    ],
    rewardTitle: "Награда в токенах:",
    reward: [
      "10 токенов управления за принятое улучшение (по итогам голосования).",
      "5 токенов за активное голосование с аргументацией.",
    ],
    addonTitle: "Дополнительная ответсвенность и награда:",
    addon: [
      "Разрабатывать и улучшать платформу, продвигая коллективный поиск истины.",
      "Возможность стать экспертом и получать дополнительные награды.",
      "Участие в экспертной группе, оценивающей качество гипотез.",
    ],
  },
  {
    select: "Observer",
    img: creator,
    title: "Наблюдатель: Следит за процессом! Голосует за уроки!",
    description: "Паттерны укажут путь!",
    arrTitle: "Обязанности:",
    arr: [
      "Предложить 1+ улучшение AI или платформы за цикл, зарегистрированное в блокчейне.",
      "Проголосовать за 3+ технических предложения, обосновав выбор.",
      "Участвовать в обсуждениях техразработок, оставляя 2+ комментария.",
    ],
    rewardTitle: "Награда в токенах:",
    reward: [
      "10 токенов за принятое техническое предложение.",
      "4 токена за голосование с аргументацией.",
    ],
    addonTitle: "Дополнительная ответсвенность и награда:",
    addon: [
      "Следить за процессом, продвигая коллективный поиск истины.",
      "Возможность стать экспертом и получать дополнительные награды.",
      "Участие в экспертной группе, оценивающей качество гипотез.",
    ],
  },
  {
    select: "Manager",
    title: "Менеджер: Голосует за порядок в DAO!",
    img: manager,
    description: "Мой голос — за справедливость!",
    arrTitle: "Обязанности:",
    arr: [
      "Предложить 1+ правило управления за цикл, записанное в блокчейн.",
      "Проголосовать за 5+ предложений, обосновав в журнале.",
      "Модерировать 2+ обсуждения перед голосованием для прозрачности.",
    ],
    rewardTitle: "Награда в токенах:",
    reward: [
      "10 токенов за принятое правило управления.",
      "4 токена за голосование с аргументацией.",
    ],
    addonTitle: "Дополнительная ответсвенность и награда:",
    addon: [
      "Обеспечивать справедливое голосование, формируя прозрачное управление.",
      "Следить за процессом, продвигая коллективный поиск истины.",
      "Возможность стать экспертом и получать дополнительные награды.",
      "Участие в экспертной группе, оценивающей качество правил управления.",
    ],
  },
  {
    select: "Ambasador",
    title: "Амбассадор: Голосует за рост DAO!",
    img: ambassodor,
    description: "Расскажу о DAO всей галактике!",
    arrTitle: "Обязанности:",
    arr: [
      "Проголосовать за 3+ предложения, продвигающих миссию DAO.",
      "Поделиться итогами голосования в Telegram/Discord (2+ поста за цикл).",
      "Привлечь 2+ новых участников к голосованию через реферальные ссылки",
    ],
    rewardTitle: "Награда в токенах:",
    reward: [
      "10 токенов за принятое техническое предложение.",
      "4 токена за голосование с аргументацией.",
    ],
    addonTitle: "Дополнительная ответсвенность и награда:",
    addon: [
      "Рассказывать о DAO всей галактике.",
      "Возможность стать экспертом и получать дополнительные награды.",
      "Участие в экспертной группе, оценивающей качество предложений.",
    ],
  },
];

export const CardBuilder = () =>
{
  const [ state, setState ] = React.useState( 5 );

  return (
    <>
      <div className="bg-[#F5F8FE] rounded-[33px] h-[35rem] grid grid-cols-[22rem_auto] gap-2 shadow-lg h-full overflow-y-auto">
        <img
          src={data[ state ].img}
          alt="getting-started"
          className="w-[20.5rem] flex  object-fill bg-red-500"
        />
        <div className="flex flex-col items-start justify-start">
          <span className="hero-title text-cyan-700 leading-relaxed mb-0">
            {data[ state ].title}
          </span>
          <span className="hero-desc font-[12rem] mt-0 font-bold text-gray-400">
            {data[ state ].description}
          </span>
          <span className="hero-title text-gray-400 text-[0.9rem] leading-relaxed mt-0">
            {data[ state ].arrTitle}
          </span>
          {data[ state ]?.arr?.map( ( x ) => (
            <div key={x} className="flex flex-row items-start justify-start">
              <span className="hero-desc text-cyan-700 leading-relaxed pr-2">
                *
              </span>
              <span className="hero-desc text-cyan-700 leading-relaxed ">
                {x}
              </span>
            </div>
          ) )}
          <span className="hero-title text-gray-400 text-[0.9rem] leading-relaxed">
            {data[ state ].rewardTitle}
          </span>
          {data[ state ]?.reward?.map( ( x ) => (
            <div key={x} className="flex flex-row items-start justify-start">
              <span className="hero-desc text-cyan-700 leading-relaxed pr-2">
                *
              </span>
              <span className="hero-desc text-cyan-700 leading-relaxed ">
                {x}
              </span>
            </div>
          ) )}
          {data?.[ state ]?.addonTitle && (
            <>
              <span className="hero-title text-gray-400 text-[0.9rem] leading-relaxed">
                {data[ state ].addonTitle}
              </span>
              {data[ state ]?.addon &&
                data?.[ state ]?.addon?.map( ( x ) => (
                  <div
                    key={x}
                    className="flex flex-row items-start justify-start"
                  >
                    <span className="hero-desc text-cyan-700 leading-relaxed pr-2">
                      *
                    </span>
                    <span className="hero-desc text-cyan-700 leading-relaxed ">
                      {x}
                    </span>
                  </div>
                ) )}
            </>
          )}
        </div>
      </div>
      <div className="flex flex-row items-start justify-start mb-10">
        {data.map( ( x, index ) => (
          <div onClick={() => setState( index )} key={index} className="flex flex-row items-start justify-start ">
            <span className="hero-title text-cyan-700 leading-relaxed mb-0 mr-4">{x.select}</span>
          </div>
        ) )}

      </div>
    </>
  );
};
