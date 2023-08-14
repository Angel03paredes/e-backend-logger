"use strinct";
const { Log } = require("./../models");

class LogsController {

  // Obtiene todos los logs
  async all(req, res, next) {
    try{
        const logs = await Log.find().populate("application_id")
        return res.json({message:"Logs encontrados",data:logs})
    }catch(error){
        console.error(error);
        res
          .status(500)
          .json({ message: "Error interno del servidor", data: null });
    }
  }

  //Obitiene todos los logs dependiendo del token de la app
  async allByApp(req, res, next) {
    try{
      const {application_id} = req.app;
        const logs = await Log.find({application_id}).populate("application_id")
        return res.json({message:"Logs encontrados",data:logs})
    }catch(error){
        console.error(error);
        res
          .status(500)
          .json({ message: "Error interno del servidor", data: null });
    }
  }

  // crea un log
  async create(req, res, next) {
    try {
      const { application_id } = req?.app;
      const newLog = new Log({ ...req.body, application_id });
      const data = await newLog.save();
      res.json({ message: "Log creado", data });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error interno del servidor", data: null });
    }
  }

  // obitiene la info de un log
  async info(req, res, next) {
    try {
        const {id} = req.params;
        const log = await Log.findById(id).populate("application_id")
        res.json({ message: "Log encontrado", data:log });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error interno del servidor", data: null });
    }
  }

  // actualiza un log
  async update(req, res, next) {
    try {
        const {id} = req.params
        const logUpdated = await Log.findOneAndUpdate({_id:id},req.body,{new:true})
        res.json({ message: "Log actualizado",data:logUpdated });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error interno del servidor", data: null });
    }
}

// elimina un log
  async delete(req, res, next) {
    try {
        const {id} = req.params;
        await Log.findByIdAndDelete(id)
        res.json({ message: "Log eliminado" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error interno del servidor", data: null });
    }
  }
}

module.exports = new LogsController();
