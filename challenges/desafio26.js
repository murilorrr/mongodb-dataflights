db.voos
  .deleteMany({
     "empresa.nome": "GOL",
     $and:
      [
        { "passageiros.pagos": { $lte: 10 } },
        { "passageiros.pagos": { $gte: 5 } },
      ],
  });
