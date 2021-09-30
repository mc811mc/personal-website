import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    lng: 'en',
    resources : {
        en: {
            translations: require('./locales/en/translation.json')
        },
        ko: {
            translations: require('./locales/ko/translations.json')
        },
        jp: {
            translations: require('./locales/jp/translation.json')
        }
    },
    ns: ['translations'],
    defaultNS: 'translations'

});

i18n.languages = ['en', 'ko', 'jp'];

export default i18n;