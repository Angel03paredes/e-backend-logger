"use strinct";
const { Application, Authorization } = require("./../models");
const { createAccessToken } = require("./../utils/jwt");

class ApplicationsController {
  //Crea una aplicación
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const appExist = await Application.exists({ name });
      if (appExist)
        return res.status(400).json({ message: "La aplicación ya existe" });
      const newApp = await Application.create({ name });
      res.json({ data: newApp, message: "Aplicación creada." });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error interno del servidor", data: null });
    }
  }

  //Genera un Token al recibir el objectId de la aplicación
  async auth(req, res, next) {
    try {
      const { application_id } = req.body;
      const appExist = await Application.exists({ _id: application_id });
      if (!appExist)
        return res.status(400).json({ message: "La aplicación no existe" });
      const token = createAccessToken({ application_id });
      const authExist = await Authorization.exists({ application_id });
      if (authExist)
        await Authorization.findOneAndUpdate(
          { application_id },
          { token },
          { new: true }
        );
      else await Authorization.create({ application_id, token });
      return res.json({ data: token, message: "Autentificación correcta" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error interno del servidor", data: null });
    }
  }

  //obtiene todas las aplicaciones
  async all(req,res,next){
    try{
      const apps = await Application.find();
      return res.json({data:apps,message:"Aplicaciones encontradas"})
    }catch(error){
      console.error(error);
      res
        .status(500)
        .json({ message: "Error interno del servidor", data: null });
    }
  }

}

module.exports = new ApplicationsController();
