<script lang="ts">

  export let artistName: string;
  export let artistImagePath: string;
  export let coverImagePath: string;
  export let packName: string;
  export let price: string;
  export let size: 'md' | 'sm' = 'md';
  
  const artistAvatarSize = size === 'md' ? 'w-8' : 'w-5'
  const aristNameSize = size === 'md' ? 'text-base' : 'text-sm'
  const packNameSize = size === 'md' ? 'text-sm' : 'text-xs'
  const overlayPos = size === 'md' ? 'left-4 right-4 bottom-4' : 'left-2 right-2 bottom-2'

</script>

<div class="w-full">
  
  <div class="flex items-center mb-2">
    <div class={`${artistAvatarSize} rounded-full overflow-hidden`}>
      <img src={artistImagePath} alt={artistName} />
    </div>
    <span class={`ml-2 text-midiBlue ${aristNameSize}`}>{artistName}</span>
  </div>
  
  <div class="rounded-xl overflow-hidden relative">
    <img src={coverImagePath} alt={packName} />
  
    <!-- meta overlay -->
    <div class={`absolute z-10 bg-white/90 overflow-hidden rounded-xl py-2 px-4 flex justify-between items-center ${packNameSize} ${overlayPos}`}>
      <span class="font-bold">{packName}</span>
  
      <div class="flex">
        <div class={`${size === 'md' ? 'w-3' : 'w-2'} mr-1`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/></svg>
        </div>
        <span>{price}</span>
      </div>
      
    </div>
  </div>

</div>
