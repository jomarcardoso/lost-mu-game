export type ClassName = "Dark Knight" | "Dark Wizard" | "Fairy Elf";

export interface ICharacter {
  className: ClassName;
  name: string;
}

export const CHARACTER: ICharacter = {
  className: "Dark Knight",
  name: "",
};

export class Character implements ICharacter {
  className: ClassName = "Dark Knight";
  name = "";

  constructor(args: ICharacter = CHARACTER) {
    this.className = args.className;
    this.name = args.name;
  }
}
