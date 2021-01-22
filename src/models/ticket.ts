import sequelize from "../dbClient";
import { DataTypes, Model } from "sequelize";
import { List } from "./list";

export interface TicketAttributes {
    id?: number;
    content: string;
    List?: List;
}

export class Ticket extends Model<TicketAttributes> implements TicketAttributes {
    id!: number;
    content!: string;
    List?: List;
}

Ticket.init({
    content: DataTypes.STRING
}, {
    sequelize,
    tableName: 'tickets',
    timestamps: false
});