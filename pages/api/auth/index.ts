import methods from "micro-method-router";
import type { NextApiRequest, NextApiResponse } from "next";

module.exports = methods({
  async post(req: NextApiRequest, res: NextApiResponse) {
    const email = req.body.email;
    if (email) {
      return res.status(200).json({
        message: "its Okay",
        token: "sa9dasd9as9dsa4d9",
      });
    } else {
      return res.status(400).json({
        message: "error input email not found",
      });
    }
  },
});
