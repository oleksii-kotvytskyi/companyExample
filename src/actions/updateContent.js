import Translate from '../translate';

const SERVER_URL = 'http://192.168.0.105/chunks?key=';

const updateContent = (language, setUIContent) => {
  const lang = language || 'en';
  const key = 'sun_content_' + lang;
  Translate.lang(lang);

  if (localStorage.getItem(key)){
    setUIContent(JSON.parse(localStorage.getItem(key)))
  } else {
    fetch(SERVER_URL + key).then(function (response) {
      response.json().then((response) => {
        if (response.ok) {
          const uiContentData = {...response.result};
          localStorage.setItem(key, JSON.stringify(uiContentData));
          setUIContent(uiContentData);
        }
      }).catch(err => new Error(err));
    });
  }
  // localStorage.clear();
};

export default updateContent;
