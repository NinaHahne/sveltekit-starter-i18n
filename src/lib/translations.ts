import i18n from 'sveltekit-i18n';

// Function to extract locale from pathname
export function localeFromPathname(pathname: string): string {
  return pathname.substr(1, 2) || 'de';
}

// Preload all translations (SSG-friendly)
export const { t, locale, locales, loading, loadTranslations } = new i18n({
  preprocess: (input) => {
    const result: { [key: string]: unknown } = {};
    for (const key in input) {
      const root = input[key];
      if (typeof root === 'object') {
        for (const k in root) result[`${key}.${k}`] = root[k];
      } else {
        result[key] = root;
      }
    }
    return result;
  },
  loaders: [
    {
      key: 'common',
      translations: {
        de: import('../routes/de.yaml'),
        en: import('../routes/en.yaml'),
      },
    },
    {
      key: 'home',
      translations: {
        de: import('../routes/[locale]/de.yaml'),
        en: import('../routes/[locale]/en.yaml'),
      },
    },
    {
      key: 'about',
      translations: {
        de: import('../routes/[locale]/about/de.yaml'),
        en: import('../routes/[locale]/about/en.yaml'),
      },
    },
  ].flatMap(({ key, translations }) =>
    Object.entries(translations).map(([locale, translation]) => ({
      locale,
      key,
      loader: async () => (await translation).default,
    }))
  ),
});
