export const deleteUser = (req, res) => {
  const userId = req.params.id;

  res.json({
    success: true,
    message: `User ${userId} deleted`,
  });
};
