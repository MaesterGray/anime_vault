<script lang='ts'>
	import type { AnimeProp } from "$lib";
  import { fetchNewData } from "$lib/utils";
  import AnimeCard from "./AnimeCard.svelte";
  let pagenumber = $state(1)

  let ancestor:HTMLElement ;

  let options = {
    rootMargin: "0px",
  threshold: 1.0,
  }
  

let fetching = $state(false)
let animeArray:AnimeProp[] = $state([])

async function getNewData(){
  pagenumber = pagenumber + 1
  fetching = true
const request = await fetchNewData(pagenumber)
try {
  request.animes.forEach((anime)=> {
    animeArray.push(anime)
  });
fetching=false

} catch (error) {
  console.log('error')
}
}
$effect(()=>{
  if (ancestor) {
    
 let observer = new IntersectionObserver(()=>{getNewData(),options})
 observer.observe(ancestor)
    
  

//   
  }

})

</script>

<section class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
  {#if animeArray.length !== 0}
  {#each animeArray as anime ,i}
  <AnimeCard {...anime} />
  
  {/each}
  {/if}
</section>

<div class="flex justify-center items-center w-full" bind:this={ancestor}>
  {#if fetching}
  <div>
    <img
      src="./spinner.svg"
      alt="spinner"
      width={56}
      height={56}
      class="object-contain"
    />
  </div>
  {/if}
  
    
  </div>
   

    