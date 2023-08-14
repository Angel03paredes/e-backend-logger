const validatorHandler = (schema, prop) => {
    return (req, res, next) => {
      const data = req[prop];
      const { error } = schema.validate(data);
      if (error) {
        return res.status(400).json({message:error?.message})
      }
      next();
    };
  };
  
  module.exports = validatorHandler;