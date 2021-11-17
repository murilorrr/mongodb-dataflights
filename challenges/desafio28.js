const latan = "LATAM AIRLINES BRASIL";

const totalVoosDomesticos = db.voos
  .find({ "empresa.nome": latan, natureza: "Doméstica" })
  .count();

db.resumoVoos.insertOne({ empresa: latan, totalVoosDomesticos });

db.resumoVoos.find(
  {
    empresa: latan,
  },
  { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
);
