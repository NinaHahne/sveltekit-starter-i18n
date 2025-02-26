<!-- Global layout for all pages -->
<script lang="ts">
  import { locale, t } from '$lib/translations';
  import '../styles/app.css';
  import { page } from '$app/state';

  let lang = $state($locale);

  // Function to toggle the language
  const toggleLocale = () => {
    const newLocale = lang === 'en' ? 'de' : 'en';
    const currentPath = page.url.pathname.replace(`/${lang}`, `/${newLocale}`);
    window.location.href = currentPath; // Forces a full reload to apply the new locale
  };

  let { children } = $props();
</script>

<svelte:head>
  <title>{$t('common.title')}</title>
</svelte:head>

<header class="fixed top-0 z-50 flex h-16 w-full justify-between bg-slate-100 p-4">
  <nav class="relative flex h-full items-center justify-center gap-4">
    <a href="/{$locale}/">{$t('common.home')}</a>
    <a href="/{$locale}/about">{$t('common.about')}</a>
  </nav>
  <button onclick={toggleLocale}>{lang === 'en' ? 'DE' : 'EN'}</button>
</header>

<main>
  {@render children()}
</main>

<footer></footer>
