<!-- Main entry page. This page lists all available locales and links to them. Necessary for SvelteKit to find routes and translations. -->

<script lang="ts" module>
  const locales = ['de', 'en'];
</script>

<ul>
  {#each locales as locale}
    <li>
      <a href="/{locale}/">{locale}</a>
    </li>
  {/each}
</ul>
