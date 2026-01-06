// Ez a fájl feldolgozza a 'Bakterial sensitivity.js'-ben található nyers adatokat,
// és létrehozza a keresési funkcióhoz szükséges adatstruktúrákat.

// Feltételezi, hogy az 'erzekenysegAdatok' változó már be van töltve a 'Bakterial sensitivity.js' fájlból.

const antibioticSpectrumData = {};
const bacteriaSensitivityData = {};

if (typeof erzekenysegAdatok !== 'undefined') {
    erzekenysegAdatok.forEach(item => {
        const bacterium = item["Baktérium"];
        const antibiotic = item["Antibiotikum"];
        const sensitivityRaw = item["Érzekenység"] || 'N/A';
        const resistanceRate = item["Rezisztencia"] || item["Rezisztencia arány"] || null;

        // Érzékenységi értékek normalizálása (S, I, R) a színezéshez
        let normalizedSensitivity = 'N/A';
        const upperSens = sensitivityRaw.toUpperCase();
        
        if (['S', 'É', 'EE', 'ÉÉ'].includes(upperSens)) {
            normalizedSensitivity = 'S';
        } else if (['I', 'M'].includes(upperSens)) {
            normalizedSensitivity = 'I';
        } else if (['R'].includes(upperSens)) {
            normalizedSensitivity = 'R';
        }

        if (bacterium && antibiotic) {
            // Adatok feltöltése antibiotikum alapú kereséshez
            if (!antibioticSpectrumData[antibiotic]) {
                antibioticSpectrumData[antibiotic] = [];
            }
            antibioticSpectrumData[antibiotic].push({
                bacteria: bacterium,
                sensitivity: normalizedSensitivity,
                original: sensitivityRaw,
                resistance: resistanceRate
            });

            // Adatok feltöltése baktérium alapú kereséshez
            if (!bacteriaSensitivityData[bacterium]) {
                bacteriaSensitivityData[bacterium] = [];
            }
            bacteriaSensitivityData[bacterium].push({
                antibiotic: antibiotic,
                sensitivity: normalizedSensitivity,
                original: sensitivityRaw,
                resistance: resistanceRate
            });
        }
    });
} else {
    console.error("Hiba: Az 'erzekenysegAdatok' változó nincs definiálva. Kérjük, győződjön meg róla, hogy a 'Bakterial sensitivity.js' be van töltve ezen szkript előtt.");
}