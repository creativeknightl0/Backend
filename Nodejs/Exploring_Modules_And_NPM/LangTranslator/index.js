import translate from 'google-translate-api-x';
import franc from 'franc';
import langs from 'langs';
import languages from '@cospired/i18n-iso-languages';

const wordToBeTranslated = process.argv[2];
const translationLanguage = process.argv[3];

// console.log(translate); // gives out whole object of things inside

const langCode = franc(wordToBeTranslated);
// console.log(langCode);
const languageName = langs.where(3, langCode).name;
console.log('Language detected from the text: ' + languageName);

const translationLangCodeFromLanguage = languages.getAlpha2Code(translationLanguage, 'en');

const response = await translate(wordToBeTranslated, {to: translationLangCodeFromLanguage});
console.log(`Translated text from ${languageName} to ${translationLanguage}: ${response.text}`);
// console.log(response.from.language.iso);