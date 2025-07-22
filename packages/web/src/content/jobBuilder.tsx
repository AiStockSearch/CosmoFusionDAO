import creator from "../assets/images/creator.jpg";
import observer from "../assets/images/baby.jpg";
import manager from "../assets/images/manager.jpg";
import explorer from "../assets/images/explorer.jpg";
import critics from "../assets/images/critik.jpg";
import ambassodor from "../assets/images/ambasodor.jpg";
export const listArrayBuilder = [
  {
    select: { ru: "Исследователь", en: "Explorer" },
    title: { ru: "Исследователь: Голосует за новые идеи!", en: "Explorer: Votes for new ideas!" },
    img: explorer,
    description: { ru: "Моя гипотеза заслуживает шанса!", en: "My hypothesis deserves a chance!" },
    arrTitle: { ru: "Обязанности:", en: "Responsibilities:" },
    arr: [
      { ru: "Предложить минимум 1 идею за цикл голосования, зарегистрированную в блокчейн-журнале.", en: "Propose at least 1 idea per voting cycle, registered in the blockchain journal." },
      { ru: "Проголосовать за 3+ гипотезы, добавляя аргументы в прозрачный журнал.", en: "Vote for 3+ hypotheses, adding arguments to the transparent journal." },
      { ru: "Участвовать в обсуждениях перед голосованием, оставляя минимум 2 комментария.", en: "Participate in discussions before voting, leaving at least 2 comments." },
    ],
    rewardTitle: { ru: "Награда в токенах:", en: "Token reward:" },
    reward: [
      { ru: "8 токенов управления за принятую идею (по итогам голосования).", en: "8 governance tokens for an accepted idea (by voting results)." },
      { ru: "3 токена за активное голосование с аргументацией.", en: "3 tokens for active voting with argumentation." },
      { ru: "Цель: Запускать идеи и поддерживать перспективные гипотезы через голосование, продвигая коллективный поиск истины.", en: "Goal: Launch ideas and support promising hypotheses through voting, advancing the collective search for truth." },
    ],
    addonTitle: { ru: "Дополнительная ответсвенность и награда:", en: "Additional responsibility and reward:" },
    addon: [
      { ru: "Запускать идеи и поддерживать перспективные гипотезы через голосование, продвигая коллективный поиск истины.", en: "Launch ideas and support promising hypotheses through voting, advancing the collective search for truth." },
      { ru: "Возможность стать экспертом и получать дополнительные награды.", en: "Opportunity to become an expert and receive additional rewards." },
      { ru: "Участие в экспертной группе, оценивающей качество гипотез.", en: "Participation in the expert group evaluating the quality of hypotheses." },
    ],
  },
  {
    select: { ru: "Критик", en: "Critic" },
    title: { ru: "Критик: Голосует за проверенные идеи!", en: "Critic: Votes for proven ideas!" },
    img: critics,
    description: { ru: "Только сильные гипотезы пройдут!", en: "Only strong hypotheses will pass!" },
    arrTitle: { ru: "Обязанности:", en: "Responsibilities:" },
    arr: [
      { ru: "Оценить 3+ гипотезы за цикл, указав слабые места в журнале.", en: "Evaluate 3+ hypotheses per cycle, indicating weaknesses in the journal." },
      { ru: "Проголосовать за или против идей, обосновывая выбор в блокчейне.", en: "Vote for or against ideas, justifying the choice in the blockchain." },
      { ru: "Написать минимум 3 комментария в обсуждениях, усиливая критику.", en: "Write at least 3 comments in discussions, strengthening criticism." },
    ],
    rewardTitle: { ru: "Награда в токенах:", en: "Token reward:" },
    reward: [
      { ru: "7 токенов за принятую критику (подтвержденную голосами).", en: "7 tokens for accepted criticism (confirmed by votes)." },
      { ru: "3 токена за голосование с прозрачной аргументацией.", en: "3 tokens for voting with transparent argumentation." },
    ],
    addonTitle: { ru: "Дополнительная ответсвенность и награда:", en: "Additional responsibility and reward:" },
    addon: [
      { ru: "Оценивать и поддерживать качество гипотез, продвигая коллективный поиск истины.", en: "Evaluate and maintain the quality of hypotheses, advancing the collective search for truth." },
      { ru: "Возможность стать экспертом и получать дополнительные награды.", en: "Opportunity to become an expert and receive additional rewards." },
      { ru: "Участие в экспертной группе, оценивающей качество гипотез.", en: "Participation in the expert group evaluating the quality of hypotheses." },
    ],
  },
  {
    select: { ru: "Создатель", en: "Creator" },
    title: { ru: "Создатель: Разрабатывает новые идеи!", en: "Creator: Develops new ideas!" },
    img: observer,
    description: { ru: "Мои инструменты усилят DAO!", en: "My tools will strengthen the DAO!" },
    arrTitle: { ru: "Обязанности:", en: "Responsibilities:" },
    arr: [
      { ru: "Предложить 1+ улучшение AI или платформы за цикл, зарегистрированное в блокчейне.", en: "Propose 1+ AI or platform improvement per cycle, registered in the blockchain." },
      { ru: "Проголосовать за 3+ технических предложения, обосновав выбор.", en: "Vote for 3+ technical proposals, justifying the choice." },
      { ru: "Участвовать в обсуждениях техразработок, оставляя 2+ комментария.", en: "Participate in technical discussions, leaving 2+ comments." },
    ],
    rewardTitle: { ru: "Награда в токенах:", en: "Token reward:" },
    reward: [
      { ru: "10 токенов управления за принятое улучшение (по итогам голосования).", en: "10 governance tokens for an accepted improvement (by voting results)." },
      { ru: "5 токенов за активное голосование с аргументацией.", en: "5 tokens for active voting with argumentation." },
    ],
    addonTitle: { ru: "Дополнительная ответсвенность и награда:", en: "Additional responsibility and reward:" },
    addon: [
      { ru: "Разрабатывать и улучшать платформу, продвигая коллективный поиск истины.", en: "Develop and improve the platform, advancing the collective search for truth." },
      { ru: "Возможность стать экспертом и получать дополнительные награды.", en: "Opportunity to become an expert and receive additional rewards." },
      { ru: "Участие в экспертной группе, оценивающей качество гипотез.", en: "Participation in the expert group evaluating the quality of hypotheses." },
    ],
  },
  {
    select: { ru: "Наблюдатель", en: "Observer" },
    img: creator,
    title: { ru: "Наблюдатель: Следит за процессом! Голосует за уроки!", en: "Observer: Monitors the process! Votes for lessons!" },
    description: { ru: "Паттерны укажут путь!", en: "Patterns will show the way!" },
    arrTitle: { ru: "Обязанности:", en: "Responsibilities:" },
    arr: [
      { ru: "Предложить 1+ улучшение AI или платформы за цикл, зарегистрированное в блокчейне.", en: "Propose 1+ AI or platform improvement per cycle, registered in the blockchain." },
      { ru: "Проголосовать за 3+ технических предложения, обосновав выбор.", en: "Vote for 3+ technical proposals, justifying the choice." },
      { ru: "Участвовать в обсуждениях техразработок, оставляя 2+ комментария.", en: "Participate in technical discussions, leaving 2+ comments." },
    ],
    rewardTitle: { ru: "Награда в токенах:", en: "Token reward:" },
    reward: [
      { ru: "10 токенов за принятое техническое предложение.", en: "10 tokens for an accepted technical proposal." },
      { ru: "4 токена за голосование с аргументацией.", en: "4 tokens for voting with argumentation." },
    ],
    addonTitle: { ru: "Дополнительная ответсвенность и награда:", en: "Additional responsibility and reward:" },
    addon: [
      { ru: "Следить за процессом, продвигая коллективный поиск истины.", en: "Monitor the process, advancing the collective search for truth." },
      { ru: "Возможность стать экспертом и получать дополнительные награды.", en: "Opportunity to become an expert and receive additional rewards." },
      { ru: "Участие в экспертной группе, оценивающей качество гипотез.", en: "Participation in the expert group evaluating the quality of hypotheses." },
    ],
  },
  {
    select: { ru: "Менеджер", en: "Manager" },
    title: { ru: "Менеджер: Голосует за порядок в DAO!", en: "Manager: Votes for order in the DAO!" },
    img: manager,
    description: { ru: "Мой голос — за справедливость!", en: "My vote is for justice!" },
    arrTitle: { ru: "Обязанности:", en: "Responsibilities:" },
    arr: [
      { ru: "Предложить 1+ правило управления за цикл, записанное в блокчейн.", en: "Propose 1+ governance rule per cycle, recorded in the blockchain." },
      { ru: "Проголосовать за 5+ предложений, обосновав в журнале.", en: "Vote for 5+ proposals, justifying in the journal." },
      { ru: "Модерировать 2+ обсуждения перед голосованием для прозрачности.", en: "Moderate 2+ discussions before voting for transparency." },
    ],
    rewardTitle: { ru: "Награда в токенах:", en: "Token reward:" },
    reward: [
      { ru: "10 токенов за принятое правило управления.", en: "10 tokens for an accepted governance rule." },
      { ru: "4 токена за голосование с аргументацией.", en: "4 tokens for voting with argumentation." },
    ],
    addonTitle: { ru: "Дополнительная ответсвенность и награда:", en: "Additional responsibility and reward:" },
    addon: [
      { ru: "Обеспечивать справедливое голосование, формируя прозрачное управление.", en: "Ensure fair voting, forming transparent governance." },
      { ru: "Следить за процессом, продвигая коллективный поиск истины.", en: "Monitor the process, advancing the collective search for truth." },
      { ru: "Возможность стать экспертом и получать дополнительные награды.", en: "Opportunity to become an expert and receive additional rewards." },
      { ru: "Участие в экспертной группе, оценивающей качество правил управления.", en: "Participation in the expert group evaluating the quality of governance rules." },
    ],
  },
  {
    select: { ru: "Амбассадор", en: "Ambassador" },
    title: { ru: "Амбассадор: Голосует за рост DAO!", en: "Ambassador: Votes for DAO growth!" },
    img: ambassodor,
    description: { ru: "Расскажу о DAO всей галактике!", en: "I will tell the whole galaxy about the DAO!" },
    arrTitle: { ru: "Обязанности:", en: "Responsibilities:" },
    arr: [
      { ru: "Проголосовать за 3+ предложения, продвигающих миссию DAO.", en: "Vote for 3+ proposals promoting the DAO mission." },
      { ru: "Поделиться итогами голосования в Telegram/Discord (2+ поста за цикл).", en: "Share voting results in Telegram/Discord (2+ posts per cycle)." },
      { ru: "Привлечь 2+ новых участников к голосованию через реферальные ссылки", en: "Attract 2+ new participants to voting via referral links." },
    ],
    rewardTitle: { ru: "Награда в токенах:", en: "Token reward:" },
    reward: [
      { ru: "10 токенов за принятое техническое предложение.", en: "10 tokens for an accepted technical proposal." },
      { ru: "4 токена за голосование с аргументацией.", en: "4 tokens for voting with argumentation." },
    ],
    addonTitle: { ru: "Дополнительная ответсвенность и награда:", en: "Additional responsibility and reward:" },
    addon: [
      { ru: "Рассказывать о DAO всей галактике.", en: "Tell the whole galaxy about the DAO." },
      { ru: "Возможность стать экспертом и получать дополнительные награды.", en: "Opportunity to become an expert and receive additional rewards." },
      { ru: "Участие в экспертной группе, оценивающей качество предложений.", en: "Participation in the expert group evaluating the quality of proposals." },
    ],
  },
];