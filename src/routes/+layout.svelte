<script>
  import Logo from "$lib/components/Logo/Logo.svelte";
  import "../app.css";
</script>

<header class="container mx-auto flex justify-between py-4 px-4">
  <div class="flex items-center">

    <h1 class="flex align-items">
      <Logo />
      <div class="ml-2 flex flex-col font-['Poppkorn'] leading-[.5] text-4xl -mt-1 text-center text-charcoal">
        <span>MIDI</span>
        <div class="flex">
          <span class="text-[#83BFE8]">.</span>
          <span>link</span>
        </div>
      </div>
    </h1>
  </div>

  <!-- Open app button -->
  <a href="#" class="uppercase bg-charcoal text-white rounded-xl px-4 py-1 flex items-center" target="_blank">Enter Market</a>
  
</header>

<slot />