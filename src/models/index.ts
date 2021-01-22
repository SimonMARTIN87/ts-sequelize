// pour éviter les dépendances cycliques, on crée toutes les associations ici
// et on les ré-exporte un pti module tranquilou.

import {List} from './list';
import { Ticket } from './ticket';

List.hasMany(Ticket);
Ticket.belongsTo(List);

export {
    List,
    Ticket
};