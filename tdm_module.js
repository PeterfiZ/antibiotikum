let tdmChart = null;

function fillTdmWithTestData() {
    document.getElementById('birthYear').value = 1975;
    document.getElementById('gender').value = 'male';
    document.getElementById('weight').value = 82;
    document.getElementById('height').value = 180;
    document.getElementById('creatinine').value = 110;
    
    calculateGFR();
    
    document.getElementById('antibiotic').value = 'gentamicin';
    updateDrugInfo();
    document.getElementById('severity').value = 'severe';
    
    document.getElementById('dose').value = 320;
    document.getElementById('troughLevel').value = 2.8;
    document.getElementById('interval').value = 24;
    document.getElementById('steadyState').value = 'yes';
    
    validateTdmInputs();
}

function setupTdmInputValidation() {
    const inputs = document.querySelectorAll('.tdm-input');
    inputs.forEach(input => {
        input.addEventListener('input', validateTdmInputs);
    });
    validateTdmInputs(); // Initial check
}

function validateTdmInputs() {
    let isGfrFormValid = true;
    ['birthYear', 'weight', 'height', 'creatinine'].forEach(id => {
        const input = document.getElementById(id);
        if (!validateInput(input, 0)) isGfrFormValid = false;
    });
    document.getElementById('gfr-calc-btn').disabled = !isGfrFormValid;

    let isInitialDoseFormValid = true;
    if (!validateInput(document.getElementById('weight'), 0)) isInitialDoseFormValid = false;
    
    const manualGfrInput = document.getElementById('manualGFR');
    const gfrResultDiv = document.getElementById('gfrResult');
    if (!manualGfrInput.value && gfrResultDiv.classList.contains('hidden')) {
        isInitialDoseFormValid = false;
    }
    validateInput(manualGfrInput, 0, false); // Validate but don't require

    document.getElementById('initial-dose-btn').disabled = !isInitialDoseFormValid;

    let isTdmFormValid = true;
    ['dose', 'troughLevel', 'interval', 'weight'].forEach(id => {
        if (!validateInput(document.getElementById(id), 0)) isTdmFormValid = false;
    });

    const manualGfrInputTdm = document.getElementById('manualGFR');
    const gfrResultDivTdm = document.getElementById('gfrResult');
     if (!manualGfrInputTdm.value) {
        isTdmFormValid = false;
    }

    document.getElementById('tdm-calc-btn').disabled = !isTdmFormValid;
}


function validateInput(input, minValue, isRequired = true) {
    if (!input) return false;
    const value = parseFloat(input.value);
    const errorEl = input.nextElementSibling;
    let isValid = true;

    if (input.value === '' && !isRequired) {
        input.classList.remove('border-red-500');
        if (errorEl && errorEl.classList.contains('error-message')) errorEl.classList.add('hidden');
        return true;
    }

    if (input.value === '' || isNaN(value) || value < minValue) {
        input.classList.add('border-red-500');
        if (errorEl && errorEl.classList.contains('error-message')) {
            errorEl.textContent = `Érvénytelen érték (min: ${minValue}).`;
            errorEl.classList.remove('hidden');
        }
        isValid = false;
    } else {
        input.classList.remove('border-red-500');
        if (errorEl && errorEl.classList.contains('error-message')) errorEl.classList.add('hidden');
    }
    return isValid;
}

function calculateAge(birthYear) {
    const today = new Date();
    return today.getFullYear() - birthYear;
}

function calculateGFR() {
    const birthYear = parseInt(document.getElementById('birthYear').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;
    const creatinine = parseFloat(document.getElementById('creatinine').value);

    if (!birthYear || !weight || !height || !creatinine) { alert("Kérlek, tölts ki minden mezőt a GFR számításhoz!"); return; }

    const age = calculateAge(birthYear);
    const creatinineMgDl = creatinine / 88.4; // Convert μmol/L to mg/dL

    // CKD-EPI formula
    let kappa, alpha;
    if (gender === 'female') {
        kappa = 0.7;
        alpha = creatinineMgDl <= 0.7 ? -0.329 : -1.209;
    } else {
        kappa = 0.9;
        alpha = creatinineMgDl <= 0.9 ? -0.411 : -1.209;
    }

    const minCreatKappa = Math.min(creatinineMgDl / kappa, 1);
    const maxCreatKappa = Math.max(creatinineMgDl / kappa, 1);
    
    let gfr = 141 * Math.pow(minCreatKappa, alpha) * Math.pow(maxCreatKappa, -1.209) * Math.pow(0.993, age);
    
    if (gender === 'female') {
        gfr *= 1.018;
    }

    document.getElementById('gfrResult').classList.remove('hidden');
    document.getElementById('gfrValue').textContent = `${gfr.toFixed(1)} mL/min/1.73m²`;
    document.getElementById('manualGFR').value = gfr.toFixed(1);
    validateTdmInputs();
}

function updateDrugInfo() {
    const antibiotic = document.getElementById('antibiotic').value;
    const drug = tdm_data[antibiotic];
    document.getElementById('drugInfo').innerHTML = `
        <div class="font-semibold text-emerald-800 mb-1">${drug.name}</div>
        <div class="text-emerald-700 space-y-0.5 text-xs">${drug.info}</div>
    `;
}

function updateDialysisInfo() {
    const dialysisType = document.getElementById('dialysisType').value;
    const dialysisInfoDiv = document.getElementById('dialysisInfo');
    
    if (dialysisType === 'none') {
        dialysisInfoDiv.classList.add('hidden');
    } else {
        const dialysis = dialysisData[dialysisType];
        dialysisInfoDiv.classList.remove('hidden');
        dialysisInfoDiv.innerHTML = `
            <div class="text-sm font-medium text-orange-800 mb-2">${dialysis.name}</div>
            <div class="text-xs text-orange-700">${dialysis.info}</div>
        `;
    }
}

function calculateInitialDose() {
     const weight = parseFloat(document.getElementById('weight').value);
     const antibiotic = document.getElementById('antibiotic').value;
     const severity = document.getElementById('severity').value;
     const gfr = parseFloat(document.getElementById('manualGFR').value);
     const dialysisType = document.getElementById('dialysisType').value;

     if (!weight) { alert("Kérlek, add meg a testsúlyt!"); return; }

     const drug = tdm_data[antibiotic];
     let resultHTML = '';
     
     resultHTML += `<div class="flex justify-between text-xs mb-2 border-b border-slate-100 pb-1">
         <span>💊 ${drug.name}</span>
         <span>⚖️ ${weight} kg</span>
     </div>`;
     
     // Check if dialysis is selected
     if (dialysisType !== 'none') {
         const dialysisInfo = drug.dialysis[dialysisType];
         const dialysisName = dialysisData[dialysisType].name;
         const recommendedDose = Math.round(dialysisInfo.dose * weight);
         
         resultHTML += `<div class="text-xs space-y-1">
             <div class="text-cyan-900 font-medium">🏥 ${dialysisName}</div>
             <div>Dózis: ${dialysisInfo.dose} mg/kg × ${weight} = ${recommendedDose} mg</div>
             ${dialysisInfo.postDialysis ? `<div class="text-red-600 font-bold">⚠️ Dialízis UTÁN!</div>` : ''}
         </div>`;

         resultHTML += `<div class="mt-2 bg-white p-2 rounded border border-green-200 shadow-sm text-center">
             <div class="font-bold text-green-600 uppercase text-[10px]">🎯 Javasolt Dózis:</div>
             <div class="text-sm font-bold text-green-700">${recommendedDose} mg ${dialysisInfo.interval} óránként</div>
         </div>`;

         resultHTML += `<div class="mt-2">
             <div class="font-semibold text-xs">📋 Info:</div>
             <div class="text-[10px]">${dialysisInfo.info}</div>
         </div>`;
         
     } else {
         // Normal GFR-based dosing
         if (!gfr) {
            alert("Kérlek, számítsd ki vagy add meg a GFR értéket!"); return;
         }
         
         let baseDosePerKg = drug.dosing[severity];
         const baseDose = baseDosePerKg * weight;
         
         // GFR adjustment
         let gfrAdjustment = 1;
         let gfrNote = "Normál vesefunkció";
         if (gfr < 60) {
             gfrAdjustment = 0.75;
             gfrNote = "Enyhe veseelégtelenség";
         }
         if (gfr < 30) {
             gfrAdjustment = 0.5;
             gfrNote = "Közepes veseelégtelenség";
         }
         if (gfr < 15) {
             gfrAdjustment = 0.25;
             gfrNote = "Súlyos veseelégtelenség";
         }

         const recommendedDose = Math.round(baseDose * gfrAdjustment);
         
         let interval = 24;
         if (antibiotic === 'vancomycin') {
             interval = gfr > 50 ? 12 : gfr > 20 ? 24 : 48;
         } else {
             interval = gfr > 60 ? 24 : gfr > 30 ? 36 : 48;
         }

         resultHTML += `<div class="text-xs space-y-0.5">
             <div>Alap: ${baseDosePerKg} mg/kg</div>
             <div>Korrekció (GFR ${gfr}): ${(gfrAdjustment * 100).toFixed(0)}%</div>
         </div>`;

         resultHTML += `<div class="mt-2 bg-white p-2 rounded border border-green-200 shadow-sm text-center">
             <div class="font-bold text-green-600 uppercase text-[10px]">🎯 Javasolt Dózis:</div>
             <div class="text-sm font-bold text-green-700">${recommendedDose} mg ${interval} óránként</div>
         </div>`;

     }

     const resultColumn = document.getElementById('initialDoseResultColumn');
     const resultContent = document.getElementById('initialDoseContent');
     
     resultContent.innerHTML = resultHTML;
     resultColumn.classList.remove('hidden');
}

function calculateTroughBasedTDM() {
    const dose = parseFloat(document.getElementById('dose').value);
    const troughLevel = parseFloat(document.getElementById('troughLevel').value);
    const interval = parseFloat(document.getElementById('interval').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const gfr = parseFloat(document.getElementById('manualGFR').value);
    const antibiotic = document.getElementById('antibiotic').value;
    const steadyState = document.getElementById('steadyState').value;

    if (!dose || !troughLevel || !interval || !weight || isNaN(gfr)) { alert("Kérlek, töltsd ki a TDM számításhoz szükséges mezőket (beleértve a GFR-t is)!"); return; }

    const drug = tdm_data[antibiotic];
    
    // Estimate pharmacokinetic parameters based on patient characteristics
    let estimatedKe;
    let estimatedVd = drug.vd * weight;
    
    // GFR-based elimination constant estimation
    if (antibiotic === 'vancomycin') {
        // Vancomycin clearance correlation with GFR
        const clearance = (0.689 * gfr + 3.66) / 60; // L/h
        estimatedKe = clearance / estimatedVd;
    } else if (antibiotic === 'voriconazole') {
        // Voriconazole has non-linear kinetics, hepatic metabolism
        // Clearance is not directly related to GFR
        const clearance = 4.6; // L/h (average adult clearance)
        estimatedKe = clearance / estimatedVd;
    } else {
        // Aminoglycosides clearance correlation with GFR
        const clearance = (1.73 * gfr / 100) * 1.2; // L/h
        estimatedKe = clearance / estimatedVd;
    }
    
    const estimatedHalfLife = 0.693 / estimatedKe;
    
    // Calculate what the peak would have been
    const estimatedPeak = troughLevel / Math.exp(-estimatedKe * interval);
    
    // Target levels
    const targetTroughMin = drug.targetTrough[0];
    const targetTroughMax = drug.targetTrough[1];
    const targetPeakMin = drug.targetPeak[0];
    const targetPeakMax = drug.targetPeak[1];
    const targetPeak = (targetPeakMin + targetPeakMax) / 2;
    const targetTrough = (targetTroughMin + targetTroughMax) / 2;
    
    // Dose adjustment calculation
    let newDose = dose;
    let newInterval = interval;
    let nextDoseDelay = 0; // Hours to wait before next dose
    let nextDoseRecommendation = "";
    let doseModificationReason = "";
    
    // If trough is outside target range, adjust dose
    if (troughLevel < targetTroughMin) {
        // Increase dose to achieve minimum trough
        newDose = Math.round(dose * (targetTrough / troughLevel));
        doseModificationReason = `Alacsony völgyszint miatt dózis emelés: <strong class="text-green-700">${dose} mg → ${newDose} mg</strong>`;
    } else if (troughLevel > targetTroughMax) {
        if (antibiotic === 'vancomycin' || antibiotic === 'voriconazole') {
            // For vancomycin and voriconazole, prefer dose reduction
            newDose = Math.round(dose * (targetTroughMax / troughLevel));
            doseModificationReason = `Magas völgyszint miatt dózis csökkentés: <strong class="text-green-700">${dose} mg → ${newDose} mg</strong>`;
        } else {
            // For aminoglycosides (gentamicin, amikacin)
            const targetTroughForDelay = targetTroughMax; // Wait until trough drops to max acceptable level
            
            // Calculate time needed for trough to drop to target level
            nextDoseDelay = Math.log(troughLevel / targetTroughForDelay) / estimatedKe;
            
            if (nextDoseDelay > 0) {
                nextDoseRecommendation = `A következő dózis a völgyszint ${targetTrough} mg/L alá csökkenését követően, ${Math.ceil(nextDoseDelay)} óra múlva adható`;
            }
            
            // Determine if dose reduction or interval extension is better
            const targetTroughFuture = targetTroughMax * 0.8; // Aim for 80% of max for future doses
            const calculatedInterval = Math.log(dose / (estimatedVd * targetTroughFuture)) / estimatedKe;
            
            if (calculatedInterval <= 48) {
                // Extend interval if reasonable
                newInterval = Math.ceil(calculatedInterval / 12) * 12; // Round to nearest 12 hours
                doseModificationReason = `Magas völgyszint miatt intervallum hosszabbítás: <strong class="text-green-700">${interval}h → ${newInterval}h</strong> (dózis: ${dose} mg változatlan)`;
            } else {
                // If interval would be too long, reduce dose instead
                newDose = Math.round(dose * (targetTroughFuture / troughLevel));
                doseModificationReason = `Magas völgyszint miatt dózis csökkentés: <strong class="text-green-700">${dose} mg → ${newDose} mg</strong> (intervallum: ${interval}h változatlan)`;
            }
        }
    }
    
    // Predict new levels with adjusted dosing
    const newPredictedTrough = (newDose / estimatedVd) * Math.exp(-estimatedKe * newInterval);
    const newPredictedPeak = (newDose / estimatedVd) * Math.exp(-estimatedKe * 1);

    // Display results
    const pkResults = document.getElementById('pkResults');
    const doseRecommendation = document.getElementById('doseRecommendation');
    const clinicalNotes = document.getElementById('clinicalNotes');

    pkResults.innerHTML = `
 <div class="flex justify-between py-1 border-b"><span class="text-gray-600">Becsült eliminációs konstans (k):</span> <span class="font-semibold">${estimatedKe.toFixed(4)} h⁻¹</span></div>
 <div class="flex justify-between py-1 border-b"><span class="text-gray-600">Becsült felezési idő (t½):</span> <span class="font-semibold">${estimatedHalfLife.toFixed(1)} óra</span></div>
 <div class="flex justify-between py-1 border-b"><span class="text-gray-600">Becsült eloszlási térfogat (Vd):</span> <span class="font-semibold">${(estimatedVd/weight).toFixed(2)} L/kg</span></div>
 <div class="flex justify-between py-1 border-b"><span class="text-gray-600">Jelenlegi völgyszint:</span> <span class="font-semibold">${troughLevel.toFixed(1)} mg/L</span></div>
 <div class="flex justify-between py-1"><span class="text-gray-600">Becsült csúcsszint:</span> <span class="font-semibold">${estimatedPeak.toFixed(1)} mg/L</span></div>
    `;
    
    let recommendation = `<div class="mb-4">`;
    if (troughLevel >= targetTroughMin && troughLevel <= targetTroughMax) {
        recommendation += `<div class="text-green-600 font-bold text-xl">✓ Jelenlegi völgyszint megfelelő (${troughLevel.toFixed(1)} mg/L)</div>`;
    } else if (troughLevel < targetTroughMin) {
        recommendation += `<div class="text-orange-600 font-bold text-xl">⚠ Völgyszint alacsony (${troughLevel.toFixed(1)} mg/L) - hatástalanság kockázata</div>`;
    } else { recommendation += `<div class="text-red-600 font-bold text-xl">⚠ Völgyszint magas (${troughLevel.toFixed(1)} mg/L) - toxicitás kockázata</div>`; }
    
    if (estimatedPeak >= targetPeakMin && estimatedPeak <= targetPeakMax) {
        recommendation += `<div class="text-green-600">✓ Becsült csúcsszint megfelelő (${estimatedPeak.toFixed(1)} mg/L)</div>`;
    } else if (estimatedPeak < targetPeakMin) {
        recommendation += `<div class="text-orange-600">⚠ Becsült csúcsszint alacsony (${estimatedPeak.toFixed(1)} mg/L)</div>`;
    } else {
        recommendation += `<div class="text-red-600">⚠ Becsült csúcsszint magas (${estimatedPeak.toFixed(1)} mg/L)</div>`;
    }
    
    recommendation += `<div class="mt-4 text-lg"><strong>Javasolt módosítás:</strong></div>`;
    
    if ((antibiotic === 'gentamicin' || antibiotic === 'amikacin') && troughLevel > targetTroughMax && nextDoseDelay > 0) {
        recommendation += `
            <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-4" role="alert">
                <div class="flex">
                    <div class="py-1"><svg class="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zM9 9a1 1 0 0 0 2 0V7a1 1 0 1 0-2 0v2zm0 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"/></svg></div>
                    <div>
                        <p class="font-bold">Azonnali intézkedés szükséges!</p>
                        <p class="text-sm"> 
                            <strong>Következő dózis időzítése:</strong> ${nextDoseRecommendation}.<br/>
                            <strong>Teendő:</strong> A következő dózis beadása előtt ${Math.ceil(nextDoseDelay)} óra múlva völgyszint ellenőrzés.<br/>
                            <strong>Cél:</strong> Völgyszint ≤${targetTroughMax} mg/L.
                        </p>
                    </div>
                </div>
            </div>`;
    }
    
    recommendation += `<div class="bg-green-50 p-4 rounded-lg mt-2 border-2 border-green-200">`;

    if (doseModificationReason) {
        recommendation += `<div class="font-bold text-green-800 mb-2 text-base">📊 Dózismódosítás részletei:</div>`;
        recommendation += `<div class="text-green-700 mb-3 text-base">${doseModificationReason}</div>`;
    }
    if (newDose !== dose || newInterval !== interval || nextDoseDelay > 0) {
        recommendation += `<div class="text-green-900 text-lg font-bold">Új dózisbeállítás: ${newDose} mg ${newInterval} óránként</div>`;
        // Calculate dose per kg for reference
        const dosePerKg = (newDose / weight).toFixed(1);
        recommendation += `<span class="text-sm opacity-80 ml-2">(${dosePerKg} mg/kg)</span></div>`;
    } else if (nextDoseDelay === 0) {
        recommendation += `<div class="text-green-900 text-xl font-bold">Jelenlegi dózis megtartható<br>
        <span class="text-base font-normal">Következő TDM: 3-5 nap múlva</span></div>`;
    }
    
    recommendation += `</div>`;
    
    document.getElementById('doseRecommendation').innerHTML = recommendation;
    
    // Clinical notes
    const dialysisType = document.getElementById('dialysisType').value;
    let notes = `<div><strong>Klinikai megjegyzések:</strong></div>`;
    
    if (dialysisType !== 'none') {
        const dialysisInfo = drug.dialysis[dialysisType];
        const dialysisName = dialysisData[dialysisType].name;
        notes += `<div class="bg-orange-100 p-3 rounded-lg mt-3">`;
        notes += `<div class="font-medium text-orange-800">${dialysisName} specifikus megjegyzések:</div>`;
        notes += `<div class="text-sm text-orange-700 mt-1">• ${dialysisInfo.info}</div>`;
        
        if (dialysisType === 'hd') {
            notes += `<div class="text-sm text-orange-700">• Dialízis napján: szérumszint mérés dialízis előtt és után</div>`;
            notes += `<div class="text-sm text-orange-700">• Következő dózis csak dialízis után!</div>`;
        } else if (dialysisType === 'crrt') {
            notes += `<div class="text-sm text-orange-700">• Folyamatos clearance miatt gyakoribb TDM szükséges</div>`;
            notes += `<div class="text-sm text-orange-700">• Szűrő csere után dózis újraértékelése</div>`;
        } else if (dialysisType === 'pd') {
            notes += `<div class="text-sm text-orange-700">• Peritoneális clearance figyelembevétele</div>`;
            notes += `<div class="text-sm text-orange-700">• Peritonitis esetén dózis növelés szükséges</div>`;
        }
        notes += `</div>`;
    }
    
    if (antibiotic === 'vancomycin') {
        notes += `<div>• Vancomycin esetén a völgyszint alapú dózisbeállítás az elsődleges</div>`;
        notes += `<div>• AUC/MIC >400 elérése a cél súlyos fertőzésekben</div>`;
        notes += `<div>• Red Man Syndrome elkerülése: ≥60 perc infúzió</div>`;
    } else if (antibiotic === 'voriconazole') {
        notes += `<div>• Voriconazole: nem-lineáris farmakokinetika</div>`;
        notes += `<div>• CYP2C19 polimorfizmus befolyásolja a clearance-t</div>`;
        notes += `<div>• Májfunkció monitorozása (transzaminázok)</div>`;
        notes += `<div>• Vizuális zavarok gyakori mellékhatás</div>`;
        notes += `<div>• Gyógyszer-interakciók: CYP3A4 inhibitor</div>`;
        
        if (troughLevel > targetTroughMax) {
            notes += `<div class="bg-yellow-100 border border-yellow-300 p-3 rounded-lg mt-3">`;
            notes += `<div class="font-medium text-yellow-800">Emelkedett voriconazole völgyszint kezelése:</div>`;
            notes += `<div class="text-sm text-yellow-700 mt-1">`;
            notes += `• Dózis csökkentés szükséges (>5.5 mg/L toxikus)<br>`;
            notes += `• Májfunkció ellenőrzése (ALT, AST, bilirubin)<br>`;
            notes += `• Vizuális zavarok fokozott monitorozása<br>`;
            notes += `• Egyéb CYP3A4 szubsztrátok dózisának felülvizsgálata<br>`;
            notes += `• Következő TDM: 3-5 nap múlva`;
            notes += `</div></div>`;
        } else if (troughLevel < targetTroughMin) {
            notes += `<div class="bg-orange-100 border border-orange-300 p-3 rounded-lg mt-3">`;
            notes += `<div class="font-medium text-orange-800">Alacsony voriconazole völgyszint:</div>`;
            notes += `<div class="text-sm text-orange-700 mt-1">`;
            notes += `• Terápiás hatástalanság kockázata (<1 mg/L)<br>`;
            notes += `• CYP2C19 rapid metabolizer gyanúja<br>`;
            notes += `• Dózis emelés vagy gyakoribb adagolás<br>`;
            notes += `• Compliance ellenőrzése<br>`;
            notes += `• Alternatív antimikotikum mérlegelése`;
            notes += `</div></div>`;
        }
    } else {
        notes += `<div>• Aminoglikozidok: napi 1x adagolás preferált</div>`;
        notes += `<div>• Post-antibiotikus hatás kihasználása</div>`;
        notes += `<div>• Ototoxicitás és nefrotoxicitás monitorozása</div>`;
        
        // Special notes for elevated aminoglycoside levels
        if (troughLevel > targetTroughMax) {
            notes += `<div class="bg-yellow-100 border border-yellow-300 p-3 rounded-lg mt-3">`;
            notes += `<div class="font-medium text-yellow-800">Emelkedett aminoglikozid völgyszint kezelése:</div>`;
            notes += `<div class="text-sm text-yellow-700 mt-1">`;
            notes += `• Dózis kihagyása amíg völgyszint ≤${targetTroughMax} mg/L<br>`;
            notes += `• Napi völgyszint ellenőrzés szükséges<br>`;
            notes += `• Vesefunkció és hallás monitorozása fokozottan<br>`;
            notes += `• Egyéb nefrotoxikus szerek kerülése<br>`;
            notes += `• Megfelelő hidratálás biztosítása`;
            notes += `</div></div>`;
        }
    }
    
    if (steadyState === 'no') {
        notes += `<div class="text-orange-600 mt-2">⚠ Steady-state még nem érhető el - óvatos értelmezés szükséges!</div>`;
    }
    
    if (troughLevel > targetTroughMax) {
        notes += `<div class="text-red-600 mt-2">⚠ Magas völgyszint - azonnali dózismódosítás szükséges!</div>`;
    }
    
    clinicalNotes.innerHTML = notes;
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('pk-details-card').classList.add('hidden'); // Alapértelmezetten elrejtjük

    drawTdmChart({ k: estimatedKe, Cmax: newPredictedPeak, interval: newInterval }, { targetPeak, targetTrough });
}

function togglePkDetails() {
    const pkCard = document.getElementById('pk-details-card');
    pkCard.classList.toggle('hidden');
}

function drawTdmChart(pkParams, targets) {
    const ctx = document.getElementById('tdmChart').getContext('2d');
    if (tdmChart !== null) {
        tdmChart.destroy();
    }

    const { k, Cmax, interval } = pkParams;
    const { targetPeak, targetTrough } = targets;

    const labels = [];
    const dataPoints = [];
    const simulationTime = interval * 2; // Szimuláljunk két dózisintervallumot

    for (let t = 0; t <= simulationTime; t += 0.5) {
        labels.push(t);
        let concentration;
        if (t < interval) {
            concentration = Cmax * Math.exp(-k * t);
        } else {
            // Koncentráció a második dózis után
            const timeAfterSecondDose = t - interval;
            const troughBeforeSecondDose = Cmax * Math.exp(-k * interval);
            const peakAfterSecondDose = troughBeforeSecondDose + Cmax; // Egyszerűsített feltételezés
            concentration = peakAfterSecondDose * Math.exp(-k * timeAfterSecondDose);
        }
        dataPoints.push(concentration.toFixed(2));
    }

    tdmChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Koncentráció (mg/L)',
                data: dataPoints,
                borderColor: 'rgb(59, 130, 246)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                fill: true,
                tension: 0.1
            }, {
                label: 'Cél csúcsszint',
                data: Array(labels.length).fill(targetPeak),
                borderColor: 'rgb(22, 163, 74)',
                borderDash: [5, 5],
                fill: false,
                pointRadius: 0
            }, {
                label: 'Cél völgyszint',
                data: Array(labels.length).fill(targetTrough),
                borderColor: 'rgb(220, 38, 38)',
                borderDash: [5, 5],
                fill: false,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: { display: true, text: 'Várható koncentráció-idő görbe' },
                legend: { position: 'top' }
            },
            scales: {
                x: { title: { display: true, text: 'Idő (óra)' } },
                y: { title: { display: true, text: 'Koncentráció (mg/L)', beginAtZero: true } }
            }
        }
    });
}
