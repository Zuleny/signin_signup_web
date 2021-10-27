import { Connection } from "../conection";

export class User{
    private _connection: Connection = Connection.getInstance();
    
    /**
     * get all data of a specific id
     * @param id identifier to get data
     * @returns data of user or null if not found
     */
     public getById = async (id: any): Promise<any | null> => {
        try {
            let entity: any = (await this._connection.query(`select * from usuario where email = '${id}';`)).rows[0];
            return entity;
        } catch (error) {
            console.error("Error into User > getById: " + error);
            return null;
        }
    }

    /**
     * create a new user
     * @param entity new user data object
     * @returns a created user data object
     */
    public create = async (entity: any): Promise<any | null> =>{
        try {
            await this._connection.query(`insert into usuario values('${entity.email}','${entity.nombre}', '${entity.telefono}','${entity.contrasenia}', '${entity.direccion}', '${entity.genero}');`);
            return true;
        } catch (error) {
            console.error("Error into modelo user > create: " + error);
            return false;
        }
    }
}