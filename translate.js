function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'pt',
    includedLanguages: 'en,es,fr,it,de',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

// Carregar o script do Google dinamicamente
document.addEventListener('DOMContentLoaded', () => {
  const script = document.createElement('script');
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.body.appendChild(script);
});