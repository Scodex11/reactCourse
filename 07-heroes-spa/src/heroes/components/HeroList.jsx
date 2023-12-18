import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./";


export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  
  return (
    <>
      <ul>
        {
            heroes.map((heroe)=> (
                <HeroCard key={heroe.id} {...heroe} />
            ))
        }
      </ul>
    </>
  );
};
