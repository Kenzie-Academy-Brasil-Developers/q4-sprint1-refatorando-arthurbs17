const validateShape = (schema) => async (req, res, next) => {
  const resource = req.body;
  try {
    const validated = await schema.validate(resource, {
      abortEarly: false,
      stripUnknown: true,
    });
    req.validated = validated;
    return next();
  } catch (e) {
    res.status(400).json({ error: e.errors.join(', ') });
  }
};

export default validateShape;
