
type Character = {
    id?: number;
    name: string;
    age: number;
    gender: "Man" | "Kvinna" | "Icke-binär";
    // class: string; //enum
    healthPoints: number;
    strength: number;
    dexterity: number;
    intelligence: number;
    wisdom: number;
    constitution: number;
    charisma: number;
    backstory: string;
    // profession: Profession;
    profession: string;
    // species: Species;
    species: string;
    imageURL: string;
    favourite: boolean;
  };

  export default Character;
  