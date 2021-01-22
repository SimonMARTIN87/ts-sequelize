import sequelize from "./dbClient";
import { List, Ticket } from "./models";

async function run () {
    // ici pas de {raw: true}, on veut justement des instances de nos classes.
    const lists = await List.findAll({include: 'Tickets'});
    lists.forEach( list => {
        // on accède directement aux propriétés avec les getters
        console.log(list.id, ':', list.name);
        // ainsi qu'aux models inclus
        list.Tickets?.forEach( (ticket: Ticket) => {
            console.log('  -',ticket.id, ticket.content);
        });

    });

    // à la création ou à l'update, on a toute notre autocompletion grâce à l'interface qu'on a passé à Model
    const newList = await List.create({
        name: "ma super nouvelle liste"
    });
    // comme console.log affiche pas les getters, on ne voit pas nos attributs (il sont dant dataValues)
    console.log("CREATED : ", newList);
    // mais en fait, on peut quand même y accéder !
    console.log(newList.id, newList.name);
}

run().then( () => {
    sequelize.close ()
});