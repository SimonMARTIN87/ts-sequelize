import sequelize from '../dbClient';
import { DataTypes, Model } from "sequelize";
import { Ticket } from './ticket';

// on commence par faire une interface pour nos modèles,
// histoire d'avoir l'autocomplétion de TS partout
export interface ListAttributes {
    // id en nullable pour pouvoir le zapper quand on fait des .create
    id?: number; 
    name: string;

    // on se prévoit aussi une propriété nullable pour chaque association qu'on va définir
    Tickets?: Array<Ticket>;
}

// Model est un type générique, auquel on peut donc passer une interface pour spécifier ce que le constructeur attend.
// la signature du constructeur devient :
// constructor(obj: ListAttributes): List
export class List extends Model<ListAttributes> implements ListAttributes {
    id!: number;
    name!: string;
    Tickets?: Array<Ticket>;

    /**
     * Lorsqu'on va appeler init, Sequelize va écraser ces attributs avec des getters et des setters
     * ce sont des fonction mais qu'on utilise comme des propriétés
     * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/get
     * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/set
     */

    // un getter Sequelize ressemble plus ou moins à ça : 
    // get name(): string {
    //     return this.dataValues?.name;
    // }
}

List.init({
    name: DataTypes.TEXT
}, {
    sequelize,
    tableName: 'lists',
    timestamps: false
});
