
const yarısSonuPuanları = [
    { sıra: 1, sürücü: "Max Verstappen", takım: "Red Bull Racing", puan: 429 },
    { sıra: 2, sürücü: "Lando Norris", takım: "Mclaren", puan: 349 },
    { sıra: 3, sürücü: "Charles Leclerc", takım: "Ferrari", puan: 341 },
    { sıra: 4, sürücü: "Oscar Piastri", takım: "Mclaren", puan: 291 },
    { sıra: 5, sürücü: "Carlos Sainz", takım: "Ferrari", puan: 272 },
    { sıra: 6, sürücü: "George Russell", takım: "Mercedes", puan: 235 },
    { sıra: 7, sürücü: "Lewis Hamilton ", takım: "Mercedes", puan: 211 },
    { sıra: 8, sürücü: "Sergio Perez", takım: "Red Bull Racing", puan: 152 },
    { sıra: 9, sürücü: "Fernando Alonso", takım: "Aston Martin", puan: 68 },
    { sıra: 10, sürücü: "Nico Hulkenberg", takım: "Haas", puan: 37 },
    { sıra: 11, sürücü: "Pierre Gasly", takım: "Racing Bulls", puan: 36 },
    { sıra: 12, sürücü: "Yuki Tsunoda", takım: "Alpine", puan: 30 },
    { sıra: 13, sürücü: "Lance Stroll", takım: "Aston Martin", puan: 24 },
    { sıra: 14, sürücü: "Esteban Ocon", takım: "Alpine", puan: 23 },
    { sıra: 15, sürücü: "Kevin Magnussen", takım: "Haas", puan: 16 },
    { sıra: 16, sürücü: "Alexander Albon", takım: "Williams", puan: 12 },
    { sıra: 17, sürücü: "Daniel Ricciardo", takım: "Racing Bulls", puan: 12 },
    { sıra: 18, sürücü: "Oliver Bearman", takım: "Haas", puan: 7 },
    { sıra: 19, sürücü: "Franco Colapinto", takım: "Williams", puan: 5 },
    { sıra: 20, sürücü: "Zhou Guanyu", takım: "Racing Bulls", puan: 4 },
    { sıra: 21, sürücü: "Liam Lawson", takım: "Sauber", puan: 4 },
    { sıra: 22, sürücü: "Valtteri Bottas", takım: "Williams", puan: 0 },
    { sıra: 23, sürücü: "Logan Sargeant", takım: "Sauber", puan: 0 },
   


];

const takimPuanlari = [
    { takım: "Mclaren", puan: 640 },
     { takım: "Ferrari", puan: 619 },
    { takım: "Red Bull Racing", puan: 581 },
    { takım: "Mercedes", puan: 446 },
    { takım: "Aston Martin", puan: 92 },
    { takım: "Alpine", puan: 59 },
    { takım: "Haas", puan: 54 },
    { takım: "Racing Bulls", puan: 46 },
    { takım: "Williams", puan: 17 },
    { takım: "Sauber", puan: 4 },
   

];

const puanListesi = document.getElementById("puanListesi");
yarısSonuPuanları.forEach((sürücü) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${sürücü.sıra}</td>
        <td>${sürücü.sürücü}</td>
        <td>${sürücü.takım}</td>
        <td>${sürücü.puan}</td>
    `;
    puanListesi.appendChild(row);
});

const takimPuanlariListesi = document.getElementById("takimPuanlari");
takimPuanlari.forEach((takim) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${takim.takım}</td>
        <td>${takim.puan}</td>
    `;
    takimPuanlariListesi.appendChild(row);
});
