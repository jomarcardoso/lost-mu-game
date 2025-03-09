export type ClassName = "Dark Knight" | "Dark Wizard" | "Fairy Elf";

export interface Character {
  id: number;
  className: ClassName;
  name: string;
}

export const CHARACTER: Character = {
  id: 1,
  className: "Dark Knight",
  name: "",
};
