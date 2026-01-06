// Ez a script az 'erzekenysegAdatok' tömböt csoportosítja antibiotikumok szerint.
// Feltételezi, hogy a 'Bakterial sensitivity.js' fájl már be van töltve, és az 'erzekenysegAdatok' változó elérhető.

const antibiotikumSpektrum = (() => {
  // Ellenőrzés: létezik-e a forrás adat
  if (typeof erzekenysegAdatok === 'undefined') {
    console.error("Hiba: Az 'erzekenysegAdatok' nem található. Kérjük, töltse be előbb a 'Bakterial sensitivity.js' fájlt.");
    return {};
  }

  const spektrum = {};

  erzekenysegAdatok.forEach(adat => {
    const antibiotikum = adat["Antibiotikum"];
    const bakterium = adat["Baktérium"];
    const erzekenyseg = adat["Érzekenység"];

    // Csak akkor dolgozzuk fel, ha van antibiotikum és baktérium név is (a forrásfájlban előfordulhat hiányos adat)
    if (antibiotikum && bakterium) {
      if (!spektrum[antibiotikum]) {
        spektrum[antibiotikum] = [];
      }

      spektrum[antibiotikum].push({
        "Baktérium": bakterium,
        "Érzekenység": erzekenyseg
      });
    }
  });

  return spektrum;
})();