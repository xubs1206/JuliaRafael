
    const imageList = [
  "foto1.jpg",
  "foto2.jpg",
  "foto3.jpg",
  "foto4.jpg",
  "foto5.jpg",
  "foto6.jpg",
  "foto7.jpg",
  "foto8.jpg",
  "foto9.jpg",
  "foto10.jpg",
  "foto11.jpg",
  "foto12.jpg",
  "foto13.jpg",
  "foto14.jpg",
  "foto15.jpg",
  "foto16.jpg",
  "foto17.jpg",
  "foto18.jpg",
  "foto19.jpg",
  "foto20.jpg",
  "foto21.jpg",
  "foto22.jpg",
  "foto23.jpg",
  "foto24.jpg",
  "foto25.jpg",
  "foto26.jpg",
  "foto27.jpg",
  "foto28.jpg",
  "foto29.jpg",
  "foto30.jpg",
  "foto31.jpg",
  "foto32.jpg",
  "foto33.jpg",
  "foto34.jpg",
  "foto35.jpg",
  "foto36.jpg",
  "foto37.jpg",
  "foto38.jpg",
  "foto39.jpg",
  "foto40.jpg",
  "foto41.jpg",
  "foto42.jpg",
  "foto43.jpg",
  "foto44.jpg",
  "foto45.jpg",
  "foto46.jpg",
  "foto47.jpg",
  "foto48.jpg",
  "foto49.jpg",
  "foto50.jpg",
  "foto51.jpg",
  "foto52.jpg",
  "foto53.jpg",
  "foto54.jpg",
  "foto55.jpg",
  "foto56.jpg",
  "foto57.jpg",
  "foto58.jpg",
  "foto59.jpg",
  "foto60.jpg",
  
  
];

    let imageIndex = 0;

    function spawnHearts() {
      for (let i = 0; i < 60; i++) {
        setTimeout(() => createHeart(), i * 400); // 60 corações
      }
    }

    function createHeart() {
      const heart = document.createElement("div");
      heart.className = "floating-heart";

      const img = document.createElement("img");

      // Atribui a próxima imagem da lista
      img.src = imageList[imageIndex];
      imageIndex = (imageIndex + 1) % imageList.length;

      heart.style.left = Math.random() * 100 + "vw";
      heart.appendChild(img);
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 5000);
    }