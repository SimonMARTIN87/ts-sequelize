import {List} from './list';
import { Ticket } from './ticket';

List.hasMany(Ticket);
Ticket.belongsTo(List);

export {
    List,
    Ticket
};