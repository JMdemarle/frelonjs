import { I18n } from 'i18n-js';

import fr from '../locales/fr.json';
import en from '../locales/en.json';

const i18n = new I18n();

i18n.defaultLocale = 'fr';
i18n.locale = 'fr';
i18n.fallbacks = true;
i18n.translations = { en, fr };

export default i18n;
