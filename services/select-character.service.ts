import { CharData } from "../dto/char.data.ts";
import { CharModel } from "../models/char.model.ts";
import { Service } from "../service.ts";

export class SelectCharacterService extends Service {
  // Store selected character data
  private selectedCharacter: any;

  // Method to create a new character with basic attributes
  createNewCharacter(name: string, characterClass: string): any {
    const character = {
      id: this.generateCharacterId(),
      name: name,
      class: characterClass,
      level: 1,
      experience: 0,
      stats: this.getDefaultStats(),
      inventory: [],
      created: new Date(),
    };
    return character;
  }

  // Generate unique character ID
  private generateCharacterId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  // Get default starting stats for new character
  private getDefaultStats(): any {
    return {
      health: 100,
      mana: 100,
      strength: 10,
      dexterity: 10,
      intelligence: 10,
    };
  }

  // Select a character to be active
  selectCharacter(character: any): void {
    this.selectedCharacter = character;
  }

  // Get currently selected character
  getSelectedCharacter(): any {
    return this.selectedCharacter;
  }

  // Clear selected character
  clearSelectedCharacter(): void {
    this.selectedCharacter = null;
  }

  // Validate character name against database and rules
  async validateCharacterName(name: string): Promise<Error | null> {
    try {
      // Check if name meets basic requirements
      if (!name || name.length < 3 || name.length > 20) {
        return new Error("Name too short or too large.");
      }

      // Check if name contains only allowed characters
      const validNameRegex = /^[a-zA-Z0-9-_]+$/;
      if (!validNameRegex.test(name)) {
        return new Error("Name contain invalid characters.");
      }

      // Check if name already exists in database
      const [result] = await this.sql<CharData[]>`
      SELECT name FROM char WHERE LOWER(name) = LOWER(${name})`;

      console.log("result", result);

      if (result?.name) {
        return new Error("Name already exists.");
      }

      return null;
    } catch (error) {
      console.error("Error validating character name:", error);

      return error;
    }
  }

  async getAll(): Promise<CharData[]> {
    try {
      const data = await this.sql<CharModel[]>`SELECT * FROM char`;

      return data.map((item) => new CharData(item));
    } catch (error) {
      throw new Error(`Failed to fetch records from char: ${error.message}`);
    }
  }

  async save(data: CharData): Promise<Error | null> {
    const errorName = await this.validateCharacterName(data.name);

    if (errorName) {
      return errorName;
    }

    if (!data?.charclass_id) {
      return new Error("Invalid character class");
    }

    try {
      const charModel = new CharModel(data);

      delete charModel.id;

      await this.sql`
        INSERT INTO char ${this.sql(charModel)}
      `;

      return null;
    } catch (error) {
      console.error("Error to insert to table Char", error);
      return error;
    }
  }

  async remove(id: number) {
    try {
      await this.sql`
        DELETE FROM char WHERE id = ${id}
      `;

      return null;
    } catch (error) {
      console.error("Error to remove from table Char", error);

      return error;
    }
  }
}
