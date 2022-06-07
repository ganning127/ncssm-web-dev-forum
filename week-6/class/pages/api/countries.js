// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const ENDPOINT = "https://restcountries.com/v3.1/all";
  const resp = await fetch(ENDPOINT);
  var data = await resp.json();
  // var clean = [];
  // for (let i = 0; i < data.length; i++) {
  //   clean.push({ name: data[i].name.common });
  // }

  res.status(200).json({ data });
}
