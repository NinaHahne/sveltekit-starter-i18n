<!-- Example About page -->

<script lang="ts">
  import { t } from '$lib/translations';
</script>

<svelte:head>
  <title>{$t('about.title')}</title>
</svelte:head>

<section class="relative flex min-h-[100dvh] flex-col items-center gap-4 pt-24">
  <h1>{$t('about.intro_text')}</h1>

  <h2>{$t('about.team')}</h2>
  <ul>
    {#each Object.values($t('about.members')) as any as { name, role }}
      <li><strong>{name}</strong> – {role}</li>
    {/each}
  </ul>
</section>
