import { User } from "../model/user.modelo";
import { Request, Response } from "express";

export class UserController{
    private userModel = new User();

    public getSignIn = async (request: Request, response: Response): Promise<void> =>{
        response.render('signin');
    }

    public getSignUp = async (request: Request, response: Response): Promise<void> =>{
        response.render('signup');
    }

    public postUser = async (request: Request, response: Response): Promise<void> => {
        try {
            let { nombre, email, contrasenia, telefono, direccion, genero } = request.body;
            await this.userModel.create({nombre, email, contrasenia, telefono, direccion, genero});
            response.redirect('/signin');
        } catch (error) {
            console.log("Error into UserController > postUser", error);
            response.redirect('/signin');
        }
    }

    public postSignIn = async (request: Request, response: Response): Promise<void> => {
        try {
            let { email, contrasenia } = request.body;
            let entity = await this.userModel.getById(email);
            if(entity!=null){
                if(entity.email==email){
                    if(entity.contrasenia==contrasenia){
                        response.render('home');
                    }else{
                        response.redirect('/signin');        
                    }
                }
            }else{
                response.redirect('/signin');
            }
        } catch (error) {
            console.log("Error into UserController > postSignIn", error);
            response.redirect('/signin');
        }
    }
}