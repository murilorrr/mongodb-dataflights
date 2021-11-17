const totalVoosDomesticos = db.voos
  .find({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" })
  .count();

db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos });

db.resumoVoos.find(
  {
    "empresa.nome": "PASSAREDO",
  },
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
);
