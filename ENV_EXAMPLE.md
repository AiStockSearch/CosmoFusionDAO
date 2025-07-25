# Пример файла .env для CosmoFusion DAO

# Telegram Bot (для формы подписки)
REACT_APP_TELEGRAM_HTTP_API=ваш_токен_бота_здесь
REACT_APP_TELEGRAM_CHAT_ID=ваш_chat_id_здесь

# Основные ссылки
REACT_APP_TELEGRAM_LINK=https://t.me/cosmofusiondao
REACT_APP_X_LINK=https://x.com/cosmofusiondao
REACT_APP_DISCORD_LINK=https://discord.gg/cosmofusiondao
REACT_APP_GALXE_LINK=https://galxe.com/cosmofusiondao
REACT_APP_DOCS_LINK=https://substack.com/@cosmofusiondao
REACT_APP_GITHUB_LINK=https://github.com/AiStockSearch/CosmosAI.git
REACT_APP_WORK_EMAIL=mustreetsworkspace@gmail.com

# Дополнительные ссылки
REACT_APP_PRIVACY_POLICY_LINK=
REACT_APP_WORK_WITH_US_LINK=
REACT_APP_CONTACT_US_LINK=
REACT_APP_GET_STARTED_LINK=#getting-started
REACT_APP_PARTNERS_LINK=
REACT_APP_ABOUT_US_LINK=
REACT_APP_MEDIA_EVENTS_LINK=https://galxe.com/zkcloud

# Покупки и NFT
REACT_APP_OPENSEA_LINK=https://opensea.io/collection/cosmos-nft
REACT_APP_NFT_LINK=https://stargaze.zone/collections/cosmos-nft
REACT_APP_BRIDGE_LINK=https://app.squidrouter.com/bridge?from=ETH&to=ATOM
REACT_APP_TANGEM_ORDER_LINK=https://tangem.com/en/order/

# Дополнительные ссылки
REACT_APP_GEVULOT_LABS_LINK=
REACT_APP_EXPLORER_LINK=
REACT_APP_BLOG_LINK=#dialogbook
REACT_APP_NODE_RENTAL_LINK=
REACT_APP_WHITEPAPER_LINK=https://whitepaper.cosmos.network/
REACT_APP_DISCLAIMER_LINK=
REACT_APP_SUBSTACK_LINK=https://substack.com/@cosmofusiondao
REACT_APP_MINT_SCAN_LINK=https://www.mintscan.io/cosmos

# Инструкции по настройке:

## 1. Telegram Bot
1. Создайте бота через @BotFather
2. Получите токен и добавьте в REACT_APP_TELEGRAM_HTTP_API
3. Получите Chat ID и добавьте в REACT_APP_TELEGRAM_CHAT_ID

## 2. Ссылки
- Все ссылки поддерживают fallback значения
- Если переменная не установлена, используется значение по умолчанию
- Для кастомных ссылок установите соответствующую переменную

## 3. Безопасность
- НЕ коммитьте .env файл в git
- Добавьте .env в .gitignore
- Используйте .env.example для документации

## 4. Проверка
После настройки переменных:
1. Перезапустите dev сервер
2. Проверьте, что все ссылки работают
3. Проверьте форму подписки 