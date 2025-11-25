const drugData = {
    gentamicin: {
        name: "Gentamicin",
        targetPeak: [5, 10],
        targetTrough: [0, 2],
        halfLife: 2.5,
        vd: 0.25,
        info: "• Célszint: 5-10 mg/L (csúcs), <2 mg/L (völgy)<br>• Dózis: 5-7 mg/kg/nap<br>• Felezési idő: 2-3 óra<br>• Nefrotoxikus, ototoxikus",
        dosing: {mild: 5, moderate: 6, severe: 7},
        dialysis: {
            hd: {dose: 2, interval: 48, postDialysis: true, info: "2 mg/kg dialízis után, 48h-ként"},
            pd: {dose: 4, interval: 24, postDialysis: false, info: "4 mg/kg 24h-ként"},
            crrt: {dose: 3, interval: 24, postDialysis: false, info: "3 mg/kg 24h-ként"}
        }
    },
    amikacin: {
        name: "Amikacin",
        targetPeak: [15, 30],
        targetTrough: [0, 5],
        halfLife: 2.5,
        vd: 0.25,
        info: "• Célszint: 15-30 mg/L (csúcs), <5 mg/L (völgy)<br>• Dózis: 15 mg/kg/nap<br>• Felezési idő: 2-3 óra<br>• Nefrotoxikus, ototoxikus",
        dosing: {mild: 15, moderate: 15, severe: 15},
        dialysis: {
            hd: {dose: 7.5, interval: 48, postDialysis: true, info: "7.5 mg/kg dialízis után, 48h-ként"},
            pd: {dose: 12, interval: 24, postDialysis: false, info: "12 mg/kg 24h-ként"},
            crrt: {dose: 10, interval: 24, postDialysis: false, info: "10 mg/kg 24h-ként"}
        }
    },
    vancomycin: {
        name: "Vancomycin",
        targetPeak: [20, 40],
        targetTrough: [10, 20],
        halfLife: 6,
        vd: 0.7,
        info: "• Célszint: 20-40 mg/L (csúcs), 10-20 mg/L (völgy)<br>• Dózis: 15 mg/kg/12h<br>• Felezési idő: 4-8 óra<br>• Nefrotoxikus, Red Man Syndrome",
        dosing: {mild: 15, moderate: 15, severe: 15},
        dialysis: {
            hd: {dose: 15, interval: 48, postDialysis: true, info: "15 mg/kg dialízis után, 48h-ként"},
            pd: {dose: 15, interval: 24, postDialysis: false, info: "15 mg/kg 24h-ként"},
            crrt: {dose: 15, interval: 12, postDialysis: false, info: "15 mg/kg 12h-ként"}
        }
    },
    voriconazole: {
        name: "Voriconazole",
        targetPeak: [2, 5.5],
        targetTrough: [1, 5.5],
        halfLife: 6,
        vd: 4.6,
        info: "• Célszint: 1-5.5 mg/L (völgy)<br>• Dózis: 6 mg/kg/12h iv, majd 4 mg/kg/12h<br>• Felezési idő: 6 óra (nem-lineáris)<br>• Hepatotoxikus, vizuális zavarok",
        dosing: {mild: 4, moderate: 4, severe: 6},
        dialysis: {
            hd: {dose: 4, interval: 12, postDialysis: false, info: "4 mg/kg 12h-ként (nem dialyzálható)"},
            pd: {dose: 4, interval: 12, postDialysis: false, info: "4 mg/kg 12h-ként (nem dialyzálható)"},
            crrt: {dose: 4, interval: 12, postDialysis: false, info: "4 mg/kg 12h-ként (nem dialyzálható)"}
        }
    }
};

const dialysisData = {
    hd: {
        name: "Hemodialízis (HD)",
        info: "• 3-4x/hét, 4 óra<br>• Dialízis után dózis szükséges<br>• Jelentős gyógyszer-eltávolítás",
        frequency: "3-4x/hét"
    },
    pd: {
        name: "Peritoneális dialízis (PD)",
        info: "• Folyamatos kezelés<br>• Mérsékelt gyógyszer-eltávolítás<br>• Napi dózisok szükségesek",
        frequency: "Folyamatos"
    },
    crrt: {
        name: "CRRT",
        info: "• 24 órás folyamatos kezelés<br>• Jelentős gyógyszer-clearance<br>• Gyakoribb dózisok szükségesek",
        frequency: "Folyamatos"
    }
};
