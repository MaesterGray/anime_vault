<script>
    import "../app.css";

   
  </script>

<header class="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0" >
    <div class="flex-1 flex flex-col gap-10">
      <img
        src="/logo.svg"
        alt="logo"
        width={101}
        height={96}
      />
      <h1 class="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
        Explore The <span class="red-gradient">Diverse Realms</span> of
        Anime Magic
      </h1>
    </div>
    <div class="lg:flex-1 relative w-full h-[50vh] justify-center">
      <img src='/anime.png' alt="anime"  class="object-contain h-full " />
    </div>
  </header>
  <slot />

  <footer class="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]" >
    <p class="text-base font-bold text-white">@2023 EpicAnimeVault</p>
    <img
      src="/logo.svg"
      alt="logo"
      width={47}
      height={44}
      class="object-contain"
    />
    <div class="flex items-center gap-6">
      <img
        src="/tiktok.svg"
        alt="logo"
        class="object-contain"
      />
      <img
        src="/instagram.svg"
        alt="logo"
        class="object-contain"
      />
      <img
        src="/twitter.svg"
        alt="logo"
        class="object-contain"
      />
    </div>
  </footer>
