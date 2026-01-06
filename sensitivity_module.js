function initSensitivityModule() {
    setupSensitivitySearch();
    // Opcionálisan: megjeleníthetjük az összes adatot induláskor, vagy üresen hagyhatjuk
    document.getElementById('sensitivity-results-container').innerHTML = '<p class="text-center text-gray-500 italic">Kérlek, válassz keresési módot és írj be egy nevet.</p>';
}

function setupSensitivitySearch() {
    const searchInput = document.getElementById('sensitivity-search');
    const modeRadios = document.getElementsByName('sensitivity-mode');
    const filterRadios = document.getElementsByName('sensitivity-filter');

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let mode = 'antibiotic';
        for (const radio of modeRadios) {
            if (radio.checked) {
                mode = radio.value;
                break;
            }
        }
        
        let filter = 'all';
        for (const radio of filterRadios) {
            if (radio.checked) {
                filter = radio.value;
                break;
            }
        }

        if (searchTerm.length < 2) {
            document.getElementById('sensitivity-results-container').innerHTML = '';
            return;
        }

        displaySensitivityResults(searchTerm, mode, filter);
    }

    searchInput.addEventListener('input', performSearch);
    for (const radio of modeRadios) {
        radio.addEventListener('change', () => {
            searchInput.value = ''; // Törlés módváltáskor
            document.getElementById('sensitivity-results-container').innerHTML = '';
            searchInput.placeholder = radio.value === 'antibiotic' ? 'Pl. Amoxicillin...' : 'Pl. E. coli...';
        });
    }
    for (const radio of filterRadios) {
        radio.addEventListener('change', performSearch);
    }
}

function displaySensitivityResults(searchTerm, mode, filter) {
    const container = document.getElementById('sensitivity-results-container');
    container.innerHTML = '';

    let data = mode === 'antibiotic' ? antibioticSpectrumData : bacteriaSensitivityData;
    
    // Keresés a kulcsok között (pl. antibiotikum nevek vagy baktérium nevek)
    const matches = Object.keys(data).filter(key => key.toLowerCase().includes(searchTerm));

    if (matches.length === 0) {
        container.innerHTML = '<p class="text-center text-gray-500">Nincs találat.</p>';
        return;
    }

    let hasResults = false;

    matches.forEach(matchKey => {
        const results = data[matchKey];
        
        const filteredResults = results.filter(item => {
            if (!filter || filter === 'all') return true;
            return item.sensitivity === filter;
        });

        if (filteredResults.length === 0) return;
        hasResults = true;
        
        const card = document.createElement('div');
        card.className = 'bg-white rounded-xl shadow-md overflow-hidden';
        const header = document.createElement('div');
        header.className = 'bg-teal-50 px-4 py-3 border-b border-teal-100 flex justify-between items-center';
        header.innerHTML = `<h3 class="font-bold text-teal-800 text-lg">${matchKey}</h3>`;
        card.appendChild(header);

        const tableContainer = document.createElement('div');
        tableContainer.className = 'p-4 overflow-x-auto';
        
        let tableHtml = `
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${mode === 'antibiotic' ? 'Baktérium' : 'Antibiotikum'}</th>
                        <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Érzékenység</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
        `;

        filteredResults.forEach(item => {
            const name = mode === 'antibiotic' ? item.bacteria : item.antibiotic;
            const sensitivity = item.sensitivity; // 'S', 'I', or 'R'
            const originalSensitivity = item.original; // The original value like 'ÉÉ'
            let badgeClass = 'bg-gray-100 text-gray-800';
            if (sensitivity === 'S') badgeClass = 'bg-green-100 text-green-800';
            if (sensitivity === 'I') badgeClass = 'bg-yellow-100 text-yellow-800';
            if (sensitivity === 'R') badgeClass = 'bg-red-100 text-red-800';

            tableHtml += `
                <tr>
                    <td class="px-4 py-2 text-sm text-gray-900">${name}</td>
                    <td class="px-4 py-2 text-sm"><span class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${badgeClass}">${originalSensitivity}</span></td>
                </tr>
            `;
        });

        tableHtml += '</tbody></table>';
        tableContainer.innerHTML = tableHtml;
        card.appendChild(tableContainer);
        container.appendChild(card);
    });

    if (!hasResults) {
        container.innerHTML = '<p class="text-center text-gray-500">Nincs találat a kiválasztott szűrővel.</p>';
    }
}