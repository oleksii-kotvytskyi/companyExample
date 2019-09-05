import en from './en';
import ua from './ua';


class Translate {

  static language;
  static en = en;
  static ua = ua;

  static lang (lang) {
    Translate.language = lang;
  };

  static __ (phrase) {
    switch (Translate.language) {
      case 'en':
        return Translate.en[phrase] === undefined ? phrase : Translate.en[phrase];
      case 'ua':
        return Translate.ua[phrase] === undefined ? phrase : Translate.ua[phrase];
      default: return;
    }
  };
}

export default Translate;
