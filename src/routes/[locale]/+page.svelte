<!-- Homepage / Landing page / index -->
<script lang="ts">
  import { t } from '$lib/translations';
</script>

<svelte:head>
  <title>{$t('home.title')}</title>
</svelte:head>

<section class="relative flex min-h-[100dvh] flex-col items-center gap-4 pt-24">
  <h1>{$t('home.intro_text')}</h1>
  <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
</section>
