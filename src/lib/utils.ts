import type { AnimeProp } from "$lib"
export const fetchNewData = async function(pageNumber:Number) {
    let request = await fetch(`https://shikimori.one/api/animes?page=${pageNumber}&limit=8&order=popularity`)
   let animes
    try {
     let response = await request.json()
     animes = response

    } catch (error) {
     console.log(error)
    }
    return {
     animes 
    } as {animes:AnimeProp[]}
 }