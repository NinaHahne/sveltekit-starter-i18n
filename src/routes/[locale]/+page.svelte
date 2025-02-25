<!-- Homepage / Landing page / index -->
<script lang="ts">
  import { t } from '$lib/translations';
</script>

<svelte:head>
  <title>{$t('home.title')}</title>
</svelte:head>

<h1>{$t('home.title')}</h1>
<p>{$t('home.intro_text')}</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
