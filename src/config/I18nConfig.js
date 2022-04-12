import i18next from 'i18next';

export function configureI18N() {
  // Configuración de la internacionalización
  return i18next
    .init({
      debug: true,
      saveMissing: true,
      missingKeyHandler: function(lng, ns, key, fallbackValue) {
        // console.log(`Error recuperando ${lng}.${ns}.${key} (${fallbackValue})`);
      },
      fallbackLng: 'es',
      // React already does escaping
      interpolation: { escapeValue: false },
      // language to use
      lng: 'es'
    })
    .then(x => {
      i18next.addResourceBundle(
        'es',
        'common',
        require('./../i18n/common.es.json'),
        true
      );
      i18next.addResourceBundle(
        'en',
        'common',
        require('./../i18n/common.en.json'),
        true
      );
    });
}
