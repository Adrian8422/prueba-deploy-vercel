import methods from "micro-method-router";

module.exports = methods({
  async get(req, res) {
    const token = req.headers.authorization;
    if (token) {
      return res.status(200).json({
        message: "its Okay me data example",
      });
    } else {
      return res.status(405).json({
        message: "method not allowed adrix",
      });
    }
  },
});
