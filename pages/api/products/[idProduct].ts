import methods from "micro-method-router";
import type { NextApiRequest, NextApiResponse } from "next";

module.exports = methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    const token = req.headers.authorization;
    const idProduct = req.query.idProduct;
    const params = req.query.params;
    if (idProduct && token) {
      res.status(200).json({
        message: "encontrado",
        id: idProduct,
        params: params,
      });
    } else {
      res.status(405).json({ message: "methods not allowed" });
    }
  },
});
