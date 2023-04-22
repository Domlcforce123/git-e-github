import { Router } from "express";
import { Category } from "../model/Category";

const categoriesRoutes = Router();

const categories: Category [] = [];

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const category = new Category();
    Object.assign(category, {
        name,       //esse metodo é mais facil " semantico "
        description,
        created_at: new Date()

        //outra forma de fazer isso seria,  colocar:

        // category.name = name;
        // category.description = description;
        // category.created_at = new Date();    mas dessa forma ele seria muito mais complicado o metodo ali é mais facil
    });
    
    categories.push(category);

    return response.status(201).json({ category });

})

export { categoriesRoutes };

