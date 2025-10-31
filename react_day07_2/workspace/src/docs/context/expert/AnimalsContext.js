// 팀의 제일 막내가 보고
import { createContext, useState } from "react";

export const AnimalsContext = createContext({
  state: { animals: [] },
  actions: { insert: () => {}, remove: () => {}}
});

export const AnimalsProvider = ({children}) => {
  const [animals, setAnimals] = useState(['누렁이', '점박이', '야옹이'])
  const value = {
    state: { animals: animals },
    actions: { 
      insert: (animal) => { setAnimals(animals.concat(animal)) }, 
      remove: (index) => { setAnimals(animals.filter((_, i) => i !== index)) }
    }
  }

  return (
    <AnimalsContext.Provider value={value}>
      {children}
    </AnimalsContext.Provider>
  )
}