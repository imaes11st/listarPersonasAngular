import { Persona } from "./persona.model";

export class PersonasService{

    personas: Persona[] = [
        new Persona('Juan ','Marin'),
        new Persona('Sofia ','Torres')];

        agregarPersona(persona: Persona){
            this.personas.push(persona);
          }
}