<!-- Global layout for all pages -->
<script lang="ts">
  import { locale, t } from '$lib/translations';
  import '../styles/app.css';

  let { children } = $props();
</script>

<svelte:head>
  <title>{$t('common.title')}</title>
</svelte:head>

<header>
  <nav class="flex justify-center gap-4">
    <a href="/{$locale}/">{$t('common.home')}</a>
    <a href="/{$locale}/about">{$t('common.about')}</a>
  </nav>
</header>

<main>
  {@render children()}
</main>

<footer></footer>
