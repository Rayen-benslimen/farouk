import { Affectation } from "./affectation";
import { Bank } from "./bank";
import { Corps } from "./corps";
import { Grade } from "./grade";

export class Fiche {
    id?: number;
    nom?: string;
    prenom?: string;
    lieu?: string;
    adresse?: string;
    email?: string;
    etatCivile?: string;
    niveau?: string;
    nbreEnfants?: number;
    salaire?: number;
    dateDeNaissance?: Date;
    bank?: Bank;
    corps?: Corps;
    grade?: Grade;
    affectation?: Affectation;
    rib?: number;
}
