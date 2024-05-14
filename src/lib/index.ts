// place files you want to import through the `$lib` alias in this folder.
export type AnimeProp={
    id: string;
    name: string;
    image:{
        original: string;
    }
    kind: string;
    episodes: number;
    episodes_aired: number;
    score: string;
}