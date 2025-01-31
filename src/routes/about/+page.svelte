<!-- Example page -->
<script>
    let team = [
        { name: "Alice", role: "Designer" },
        { name: "Bob", role: "Developer" },
        { name: "Charlie", role: "Project Manager" }
    ];
</script>

<h1>About Us</h1>
<p>Welcome to the about page! This is an example of a nested route.</p>
  
<h2>Our Team</h2>
<ul>
    {#each team as member}
        <li><strong>{member.name}</strong> – {member.role}</li>
    {/each}
</ul>
  