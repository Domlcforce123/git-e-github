import { v4 as uuidV4 } from "uuid";


class Category {
    id? : string;
    name: string;
    description: string;
    create_at: Date;

    constructor() {
        if(!this.id) {
        this.id = uuidV4();    //this = " isso "
        }
    }

}
// const suv = new Category()        metedo contrutor gera instancias ( seria os id) 
// const sedan = new Category()      

export { Category }