
const yarısSonuPuanları = [
    { sıra: 1, sürücü: "Max Verstappen", takım: "Red Bull Racing", puan: 393 },
    { sıra: 2, sürücü: "Lando Norris", takım: "Mclaren", puan: 331 },
    { sıra: 3, sürücü: "Charles Leclerc", takım: "Ferrari", puan: 307 },
    { sıra: 4, sürücü: "Oscar Piastri", takım: "Mclaren", puan: 262 },
    { sıra: 5, sürücü: "Carlos Sainz", takım: "Ferrari", puan: 244 },
    { sıra: 6, sürücü: "George Russell", takım: "Mercedes", puan: 192 },
    { sıra: 7, sürücü: "Lewis Hamilton ", takım: "Mercedes", puan: 190 },
    { sıra: 8, sürücü: "Sergio Perez", takım: "Red Bull Racing", puan: 151 },
    { sıra: 9, sürücü: "Fernando Alonso", takım: "Aston Martin", puan: 62 },
    { sıra: 10, sürücü: "Nico Hulkenberg", takım: "Haas", puan: 31 },
    { sıra: 11, sürücü: "Yuki Tsunoda", takım: "Racing Bulls", puan: 28 },
    { sıra: 12, sürücü: "Pierre Gasly", takım: "Alpine", puan: 26 },
    { sıra: 13, sürücü: "Lance Stroll", takım: "Aston Martin", puan: 24 },
    { sıra: 14, sürücü: "Esteban Ocon", takım: "Alpine", puan: 23 },
    { sıra: 15, sürücü: "Kevin Magnussen", takım: "Haas", puan: 14 },
    { sıra: 16, sürücü: "Alexander Albon", takım: "Williams", puan: 12 },
    { sıra: 17, sürücü: "Daniel Ricciardo", takım: "Racing Bulls", puan: 12 },
    { sıra: 18, sürücü: "Oliver Bearman", takım: "Haas", puan: 7 },
    { sıra: 19, sürücü: "Franco Colapinto", takım: "Williams", puan: 5 },
    { sıra: 20, sürücü: "Liam Lawson", takım: "Racing Bulls", puan: 4 },
    { sıra: 21, sürücü: "Zhou Guanyu", takım: "Sauber", puan: 0 },
    { sıra: 22, sürücü: "Logan Sargeant", takım: "Williams", puan: 0 },
    { sıra: 23, sürücü: "Valtteri Bottas", takım: "Sauber", puan: 0 },
   


];

const takimPuanlari = [
    { takım: "Mclaren", puan: 593 },
     { takım: "Ferrari", puan: 557 },
    { takım: "Red Bull Racing", puan: 544 },
    { takım: "Mercedes", puan: 382 },
    { takım: "Aston Martin", puan: 86 },
    { takım: "Alpine", puan: 49 },
    { takım: "Haas", puan: 46 },
    { takım: "Racing Bulls", puan: 44 },
    { takım: "Williams", puan: 17 },
    { takım: "Sauber", puan: 0 },
   

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
