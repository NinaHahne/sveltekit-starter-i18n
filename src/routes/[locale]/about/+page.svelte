<!-- Example About page -->

<script lang="ts">
  import { t } from '$lib/translations';
</script>

<svelte:head>
  <title>{$t('about.title')}</title>
</svelte:head>

<h1>About Us</h1>
<p>Welcome to the about page! This is an example of a nested route.</p>

<h2>Our Team</h2>
<ul>
  {#each Object.values($t('about.members')) as any as { name, role }}
    <li><strong>{name}</strong> – {role}</li>
  {/each}
</ul>
