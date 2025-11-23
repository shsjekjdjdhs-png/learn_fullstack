import Joi from "joi";

export const updateUser = (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3),
    email: Joi.string().email(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      error: error.details[0].message,
    });
  }

  const userId = req.params.id;

  res.json({
    success: true,
    message: `User ${userId} updated`,
    updatedData: req.body,
  });
};
