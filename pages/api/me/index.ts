import methods from "micro-method-router";

module.exports = methods({
  async get(req, res) {
    return res.status(200).json({
      message: "its Okay",
    });
  },
});
