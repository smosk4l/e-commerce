const getUniqueID = () => {
  return ("" + Math.random()).slice(2);
};

const Data = [
  {
    title: "Jordan 3 Retro White Cement Reimagined",
    image: "https://t.ly/npFwL",
    price: 257,
    discount: 0,
  },
  {
    title: "Nike Dunk Low Retro White Black Panda (2021)",
    image: "https://cutt.ly/o4ICWuG",
    price: 150,
    discount: 10,
  },
  {
    title: "Nike Dunk Low Retro White Black Panda (2021) (Women's)",
    image: "https://cutt.ly/24ICUf5",
    price: 141,
    discount: 0,
  },
  {
    title: "Nike Dunk Low Grey Fog",
    image: "https://cutt.ly/n4IC74H",
    price: 157,
    discount: 0,
  },
  {
    title: "Nike Dunk Low Retro White Black Panda (2021) (GS)",
    image: "https://cutt.ly/a4IVaS9",
    price: 120,
    discount: 15,
  },
  {
    title: "Jordan 5 Retro UNC University Blue",
    image: "https://cutt.ly/f4IVgFX",
    price: 270,
    discount: 0,
  },
  {
    title: "Nike Air Force 1 Low Tiffany & Co. 1837",
    image: "https://cutt.ly/O4IVxA4",
    price: 1003,
    discount: 0,
  },
  {
    title: "Nike Air Force 1 Low '07 White",
    image: "https://cutt.ly/T4ICzTq",
    price: 58,
    discount: 0,
  },
  {
    title: "Jordan 4 Retro SB Pine Green",
    image: "https://cutt.ly/E4IVnAe",
    price: 316,
    discount: 20,
  },
  {
    title: "Nike Dunk Low Next Nature White Black Panda (W)",
    image: "https://cutt.ly/04IVEsq",
    price: 129,
    discount: 0,
  },
  {
    title: "Nike Dunk Low Industrial Blue Sashiko",
    image: "https://cutt.ly/p4IVYJL",
    price: 124,
    discount: 0,
  },
  {
    title: "Nike Dunk Low SE Sand Drift (W)",
    image: "https://cutt.ly/k4IVPmq",
    price: 137,
    discount: 40,
  },
  {
    title: "Nike Dunk Low Rose Whisper (Women's)",
    image: "https://cutt.ly/D4IVSmj",
    price: 124,
    discount: 0,
  },
  {
    title: "Nike Dunk Low Light Orewood Brown Sashiko",
    image: "https://cutt.ly/O4IVJso",
    price: 153,
    discount: 0,
  },
  {
    title: "Jordan 3 Retro White Cement Reimagined (GS)",
    image: "https://cutt.ly/24IVLfH",
    price: 154,
    discount: 5,
  },
  {
    title: "Jordan 4 Retro Seafoam (Women's)",
    image: "https://cutt.ly/74IVVJt",
    price: 282,
    discount: 0,
  },
  {
    title: "Jordan 4 Retro SE Craft Photon Dust",
    image: "https://cutt.ly/Y4IVN8P",
    price: 219,
    discount: 15,
  },
];

Data.map((product) => {
  return (product.id = getUniqueID());
});

export default Data;
