<script lang='ts'>
    
    import AnimeCard from '$lib/components/AnimeCard.svelte';
    import Spinner from '$lib/components/Spinner.svelte';

    const { data } = $props()
 

</script>


      <div class="max-w-7xl mx-auto bg-[#0F1117]"   id='main'>
        <main class="sm:p-16 py-16 px-8 flex flex-col gap-10">
            <h2 class="text-3xl text-white font-bold">Explore Anime </h2>
      
            <section class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
              {#each data.animes as anime (anime.id)}
              <AnimeCard {...anime} />
              {/each}
            </section>
              <div  id="spinner-container" >
                <Spinner  />
                </div>
                
          </main>
        </div>