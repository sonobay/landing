<script>
  import Logo from "$lib/components/Logo/Logo.svelte";
  import "../app.css";
</script>

<header class="container mx-auto flex justify-between py-4 px-4">
  <div class="flex items-center">

    <h1 class="flex align-items">
      <Logo />
      <div class="ml-2 h-9 flex -mt-1 text-center">
        <img class="w-full" src="/images/midi-link.png" alt="MIDI.link" />
      </div>
    </h1>
  </div>

  <!-- Open app button -->
  <a href="#" class="uppercase bg-charcoal text-white rounded-xl px-4 py-1 flex items-center" target="_blank">Enter Market</a>
  
</header>

<slot />