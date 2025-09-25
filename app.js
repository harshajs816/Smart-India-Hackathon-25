// ===== COMPLETE JAVASCRIPT CODE FOR SIKKIM MONASTERIES MAP =====

// ===== MONASTERY DATA (All 32 monasteries) =====
const monasteries = [
    // East Sikkim (12 monasteries)
    { name: "Rumtek Monastery (Dharma Chakra Centre)", district: "East Sikkim", lat: 27.32889, lng: 88.56139, established: "1962", sect: "Karma Kagyu", description: "Largest monastery in Sikkim and seat in exile of the Gyalwang Karmapa. Famous for its golden stupa and traditional Tibetan architecture." },
    { name: "Enchey Monastery", district: "East Sikkim", lat: 27.335863, lng: 88.619194, established: "1840", sect: "Nyingma", description: "The Solitary Temple located 3 km from Gangtok centre. Built by Lama Druptob Karpo and known for its Cham dances." },
    { name: "Old Rumtek Monastery", district: "East Sikkim", lat: 27.3275, lng: 88.56, established: "1734", sect: "Karma Kagyu", description: "Original monastery built by 9th Karmapa Wangchuk Dorje. Historic site that preceded the current Rumtek complex." },
    { name: "Kathog Dorjeden Monastery", district: "East Sikkim", lat: 27.325, lng: 88.585, established: "1840", sect: "Nyingma", description: "Located above Pakyong Bazar. Known for its peaceful setting and traditional Nyingma practices." },
    { name: "Lingdum Zurmang Monastery", district: "East Sikkim", lat: 27.31, lng: 88.6, established: "1999", sect: "Kagyu", description: "Modern monastery with beautiful architecture. Part of the Zurmang tradition and popular pilgrimage site." },
    { name: "Rinak Monastery", district: "East Sikkim", lat: 27.3, lng: 88.62, established: "1841", sect: "Kagyu", description: "Founded by Saint Konchog Gyaltshen. Known for its annual masked dances and spiritual retreats." },
    { name: "Bermoik Monastery", district: "East Sikkim", lat: 27.25, lng: 88.5, established: "1873", sect: "Karma Kagyu", description: "Built by combined effort of Lamas and Laymen. Features traditional architecture and peaceful meditation halls." },
    { name: "Martam Namdzong", district: "East Sikkim", lat: 27.28, lng: 88.55, established: "1917", sect: "Buddhist", description: "Historic monastery in Martam area. Known for its scenic location and traditional Buddhist practices." },
    { name: "Singtam Monastery", district: "East Sikkim", lat: 27.23467, lng: 88.50168, established: "1992", sect: "Buddhist", description: "Modern monastery in Singtam town. Popular among local devotees and visitors to the area." },
    { name: "Simig Monastery", district: "East Sikkim", lat: 27.315, lng: 88.61, established: "1843", sect: "Buddhist", description: "Historic monastery in East Sikkim. Known for its traditional ceremonies and peaceful atmosphere." },
    { name: "Pandam Monastery", district: "East Sikkim", lat: 27.29, lng: 88.58, established: "1955", sect: "Buddhist", description: "Mid-20th century monastery. Features modern amenities while maintaining traditional Buddhist practices." },
    { name: "Rhenock Monastery", district: "East Sikkim", lat: 27.32, lng: 88.64, established: "Historic", sect: "Buddhist", description: "Monastery in Rhenock area. Part of the traditional Buddhist circuit in East Sikkim." },
    
    // North Sikkim (7 monasteries)
    { name: "Phodong Monastery", district: "North Sikkim", lat: 27.41278, lng: 88.58389, established: "1734", sect: "Karma Kagyu", description: "Home to 260 monks, rebuilt after earthquake. One of the most important monasteries in North Sikkim with beautiful murals." },
    { name: "Labrang Monastery", district: "North Sikkim", lat: 27.418881, lng: 88.585, established: "1844", sect: "Nyingma", description: "Built to perpetuate Nyingmapa School of Buddhism. Known for its extensive library and meditation retreats." },
    { name: "Phensang Monastery", district: "North Sikkim", lat: 27.42, lng: 88.57, established: "1721", sect: "Nyingma", description: "One of six biggest gompas in Sikkim, houses most monks. Famous for its annual festivals and religious ceremonies." },
    { name: "Lachen Monastery", district: "North Sikkim", lat: 27.72, lng: 88.54, established: "1858", sect: "Nyingma", description: "Also known as Ngodub Choling or Launching Gompa. Located in the scenic Lachen valley near the Tibetan border." },
    { name: "Lachung Monastery", district: "North Sikkim", lat: 27.7, lng: 88.74, established: "1880", sect: "Nyingma", description: "Located in apple orchards at confluence of rivers. Famous for its beautiful setting among snow-capped peaks." },
    { name: "Kabi Monastery", district: "North Sikkim", lat: 27.45, lng: 88.56, established: "1911", sect: "Buddhist", description: "Historic monastery on North Sikkim highway. Important site for the historic blood brotherhood treaty signing." },
    { name: "Hee Gyathang Monastery", district: "North Sikkim", lat: 27.6, lng: 88.65, established: "1914", sect: "Buddhist", description: "Remote monastery in high altitude location. Known for its pristine natural surroundings and meditation retreats." },
    
    // West Sikkim (6 monasteries)
    { name: "Pemayangtse Monastery", district: "West Sikkim", lat: 27.30444, lng: 88.25278, established: "1705", sect: "Nyingma", description: "Perfect Sublime Lotus, one of most important monasteries. Founded by Lama Lhatsun Chempo and features a seven-tiered wooden sculpture." },
    { name: "Dubdi Monastery", district: "West Sikkim", lat: 27.29, lng: 88.21, established: "1647", sect: "Nyingma", description: "Oldest monastery in Sikkim, The Hermit's Cell. Built by Lhatsun Chempo and considered the first monastery in Sikkim." },
    { name: "Sanga Choeling Monastery", district: "West Sikkim", lat: 27.26389, lng: 88.22139, established: "1697", sect: "Nyingma", description: "Island of Guhyamantra teachings, ridge-top location. Second oldest monastery with stunning views of the Himalayas." },
    { name: "Tashiding Monastery", district: "West Sikkim", lat: 27.30833, lng: 88.29806, established: "1651", sect: "Nyingma", description: "Most sacred monastery in Sikkim, Heart of Sikkim. Built on a heart-shaped hill and considered the holiest site in Sikkim." },
    { name: "Rinchenpong Monastery", district: "West Sikkim", lat: 27.28, lng: 88.24, established: "1772", sect: "Buddhist", description: "Third oldest monastery with rare Ati Buddha statue. Located on a hilltop with panoramic views of the surrounding valleys." },
    { name: "Khecheopalri Sacred Lake Monastery", district: "West Sikkim", lat: 27.33, lng: 88.2, established: "Historic", sect: "Buddhist", description: "Sacred lake blessed by Guru Padmasambhava. The wish-fulfilling lake is considered sacred by both Buddhists and Hindus." },
    
    // South Sikkim (7 monasteries)
    { name: "Ralong Monastery (New)", district: "South Sikkim", lat: 27.32, lng: 88.39, established: "1768", sect: "Kagyu", description: "Beautiful architecture near Ravangla. Modern monastery complex with traditional Tibetan design elements and peaceful gardens." },
    { name: "Ralong Monastery (Old)", district: "South Sikkim", lat: 27.3, lng: 88.37, established: "1768", sect: "Kagyu", description: "Original monastery with spiritual dignity. Historic site that maintains traditional practices and ancient Buddhist texts." },
    { name: "Doling Monastery", district: "South Sikkim", lat: 27.31, lng: 88.38, established: "18th century", sect: "Nyingma", description: "Also known as Doling Gompa, hilltop monastery. Offers spectacular views of the Kanchenjunga range and surrounding valleys." },
    { name: "Samdruptse Monastery", district: "South Sikkim", lat: 27.16494, lng: 88.3638, established: "2004", sect: "Buddhist", description: "Home to 138 ft tall Guru Padmasambhava statue. Modern pilgrimage site featuring the world's largest statue of Guru Rinpoche." },
    { name: "Bon Monastery (Kewzing)", district: "South Sikkim", lat: 27.33, lng: 88.4, established: "Modern", sect: "Bon", description: "Bon Yung Dung Monastery offering valley views. Represents the ancient Bon tradition that predates Buddhism in the region." },
    { name: "Tumlong Monastery", district: "South Sikkim", lat: 27.35, lng: 88.42, established: "Historic", sect: "Buddhist", description: "Historic monastery in Temi Tea Estate area. Located near Sikkim's only tea garden with beautiful natural surroundings." },
    { name: "Maenam Gompa", district: "South Sikkim", lat: 27.33, lng: 88.41, established: "Historic", sect: "Buddhist", description: "On trek route to Maenam Wildlife Sanctuary. Popular hiking destination with rich biodiversity and mountain views." }
];

// ===== CONFIGURATION =====
const districtColors = {
    'East Sikkim': '#2196F3',
    'North Sikkim': '#4CAF50',
    'West Sikkim': '#F44336',
    'South Sikkim': '#FF9800'
};

// ===== GLOBAL VARIABLES =====
let map;
let homeLocation = null;
let homeMarker = null;
let monasteryMarkers = [];
let activePolylines = [];
let isClickModeActive = false;

// ===== INITIALIZE MAP =====
function initializeMap() {
    console.log('Initializing Sikkim monasteries map...');
    
    // Create map centered on Sikkim
    map = L.map('map').setView([27.533, 88.512], 9);

    // Add tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(map);

    // Add monastery markers
    addMonasteryMarkers();
    
    // Populate monastery list
    populateMonasteryList();
    
    // Setup event listeners
    setupEventListeners();
    
    console.log(`✅ Map initialized with ${monasteries.length} monasteries`);
    
    // Show welcome message
    setTimeout(() => {
        showHomeStatus('Welcome! Use the buttons above to set your home location, then click monasteries to see distances.', 'info');
    }, 1000);
}

// ===== ADD MONASTERY MARKERS =====
function addMonasteryMarkers() {
    console.log('Adding monastery markers...');
    
    monasteries.forEach((monastery, index) => {
        // Create circle marker with district color
        const marker = L.circleMarker([monastery.lat, monastery.lng], {
            color: '#FFFFFF',
            fillColor: districtColors[monastery.district],
            fillOpacity: 0.9,
            radius: 8,
            weight: 2
        }).addTo(map);

        // Create popup content
        const popupContent = createMonasteryPopup(monastery, index);
        
        marker.bindPopup(popupContent, {
            className: 'custom-popup',
            maxWidth: 350
        });

        // Add click listener
        marker.on('click', () => {
            showMonasteryInfo(monastery, index);
        });

        monasteryMarkers.push({marker, data: monastery});
    });
    
    console.log(`✅ Added ${monasteryMarkers.length} monastery markers`);
}

// ===== CREATE MONASTERY POPUP CONTENT =====
function createMonasteryPopup(monastery, index) {
    let distanceInfo = '';
    
    if (homeLocation) {
        const distance = calculateDistance(
            homeLocation.lat, homeLocation.lng,
            monastery.lat, monastery.lng
        );
        distanceInfo = `
            <div style="background: rgba(33, 150, 243, 0.1); border: 1px solid #2196F3; border-radius: 6px; padding: 8px; margin: 8px 0;">
                <strong style="color: #1976d2;">📏 Distance from home: ${distance.toFixed(2)} km</strong>
            </div>
        `;
    }

    return `
        <div style="font-family: 'Inter', sans-serif; line-height: 1.4;">
            <div style="font-weight: 700; color: #8B4513; font-size: 1.1rem; margin-bottom: 8px;">
                ${monastery.name}
            </div>
            <div style="margin: 4px 0; font-size: 0.9rem;">
                <strong>District:</strong> ${monastery.district}
            </div>
            <div style="margin: 4px 0; font-size: 0.9rem;">
                <strong>Established:</strong> ${monastery.established}
            </div>
            <div style="margin: 4px 0; font-size: 0.9rem;">
                <strong>Sect:</strong> ${monastery.sect}
            </div>
            <div style="margin: 4px 0; font-size: 0.9rem;">
                <strong>Coordinates:</strong> ${monastery.lat.toFixed(6)}, ${monastery.lng.toFixed(6)}
            </div>
            ${distanceInfo}
            <div style="margin-top: 8px; font-style: italic; color: #666; font-size: 0.85rem;">
                ${monastery.description}
            </div>
        </div>
    `;
}

// ===== SHOW MONASTERY INFO & DRAW ROUTE =====
function showMonasteryInfo(monastery, index) {
    console.log(`Showing info for: ${monastery.name}`);
    
    if (homeLocation) {
        // Calculate distance
        const distance = calculateDistance(
            homeLocation.lat, homeLocation.lng,
            monastery.lat, monastery.lng
        );
        
        // Draw route line
        drawRouteToMonastery(monastery);
        
        console.log(`Distance to ${monastery.name}: ${distance.toFixed(2)} km`);
    }
}

// ===== POPULATE MONASTERY LIST =====
function populateMonasteryList(monasteriesToShow = monasteries) {
    const listContainer = document.getElementById('monastery-list');
    if (!listContainer) {
        console.error('Monastery list container not found');
        return;
    }
    
    listContainer.innerHTML = '';

    monasteriesToShow.forEach((monastery, index) => {
        const item = document.createElement('div');
        item.className = 'monastery-item';
        item.setAttribute('tabindex', '0');
        
        item.innerHTML = `
            <div class="monastery-name">${monastery.name}</div>
            <div class="monastery-details">
                ${monastery.district} • ${monastery.established} • ${monastery.sect}
            </div>
        `;
        
        // Add click handler
        const clickHandler = () => {
            map.setView([monastery.lat, monastery.lng], 14);
            
            // Find and trigger the corresponding marker
            const markerIndex = monasteries.findIndex(m => m.name === monastery.name);
            if (markerIndex !== -1 && monasteryMarkers[markerIndex]) {
                monasteryMarkers[markerIndex].marker.fire('click');
            }
        };

        item.addEventListener('click', clickHandler);
        item.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') clickHandler();
        });
        
        listContainer.appendChild(item);
    });
    
    console.log(`✅ Populated monastery list with ${monasteriesToShow.length} monasteries`);
}

// ===== SETUP EVENT LISTENERS =====
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Search functionality
    const searchInput = document.getElementById('monastery-search');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Clear lines button
    const clearLinesBtn = document.getElementById('clear-lines');
    if (clearLinesBtn) {
        clearLinesBtn.addEventListener('click', clearAllLines);
    }

    // Mobile menu toggle
    const toggle = document.getElementById('mobile-menu-toggle');
    const sidebar = document.getElementById('sidebar');
    
    if (toggle && sidebar) {
        toggle.addEventListener('click', function() {
            sidebar.classList.toggle('mobile-open');
            toggle.classList.toggle('active');
        });
    }
    
    console.log('✅ Event listeners set up');
}

// ===== SEARCH FUNCTIONALITY =====
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        populateMonasteryList(monasteries);
        return;
    }

    const filteredMonasteries = monasteries.filter(monastery => 
        monastery.name.toLowerCase().includes(searchTerm) ||
        monastery.district.toLowerCase().includes(searchTerm) ||
        monastery.sect.toLowerCase().includes(searchTerm) ||
        monastery.description.toLowerCase().includes(searchTerm)
    );

    populateMonasteryList(filteredMonasteries);
    console.log(`Search for "${searchTerm}" found ${filteredMonasteries.length} results`);
}

// ===== HOME LOCATION FUNCTIONS =====

// Set home using predefined location
function setHome(lat, lng, name) {
    console.log(`Setting home: ${name} at ${lat}, ${lng}`);
    
    // Store home location
    homeLocation = { lat: lat, lng: lng, address: name };
    
    // Remove old home marker
    if (homeMarker) {
        map.removeLayer(homeMarker);
    }
    
    // Add new home marker with house emoji
    homeMarker = L.marker([lat, lng], {
        icon: L.divIcon({
            html: '🏠',
            iconSize: [30, 30],
            iconAnchor: [15, 15],
            popupAnchor: [0, -15],
            className: 'home-marker-emoji'
        })
    }).addTo(map);
    
    // Add popup to home marker
    homeMarker.bindPopup(`
        <div style="text-align: center; font-family: 'Inter', sans-serif;">
            <div style="font-size: 18px; font-weight: bold; color: #8B4513; margin-bottom: 8px;">
                🏠 Your Home
            </div>
            <div style="margin-bottom: 5px;">
                <strong>Location:</strong> ${name}
            </div>
            <div style="margin-bottom: 5px;">
                <strong>Coordinates:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
            </div>
            <div style="font-size: 12px; color: #666;">
                Click monasteries to see distances!
            </div>
        </div>
    `, {
        maxWidth: 250,
        className: 'custom-popup'
    });
    
    // Show success message
    showHomeStatus(`✅ Home set at ${name}! Now click any monastery marker to see distance and route.`, 'success');
    
    // Center map to show home and monasteries
    const bounds = L.latLngBounds();
    bounds.extend([lat, lng]);
    monasteryMarkers.forEach(({marker}) => {
        bounds.extend(marker.getLatLng());
    });
    map.fitBounds(bounds, {padding: [20, 20]});
    
    console.log('✅ Home location set successfully');
}

// Click map to set home
function clickToSetHome() {
    const btn = document.getElementById('map-click-btn');
    if (!btn) return;
    
    btn.textContent = '👆 Now click anywhere on the map...';
    btn.style.background = '#FF9800';
    btn.disabled = true;
    isClickModeActive = true;
    
    showHomeStatus('🖱️ Click anywhere on the map to set your home location. Click will be cancelled automatically after 30 seconds.', 'warning');
    
    // Change cursor
    map.getContainer().style.cursor = 'crosshair';
    
    // Add click handler
    function handleMapClick(e) {
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;
        
        setHome(lat, lng, `Map Location`);
        
        // Reset button
        btn.textContent = '🖱️ Click Map to Set Home';
        btn.style.background = '#4CAF50';
        btn.disabled = false;
        isClickModeActive = false;
        
        // Reset cursor
        map.getContainer().style.cursor = '';
        
        // Remove click handler
        map.off('click', handleMapClick);
    }
    
    map.on('click', handleMapClick);
    
    // Auto-cancel after 30 seconds
    setTimeout(() => {
        if (isClickModeActive) {
            btn.textContent = '🖱️ Click Map to Set Home';
            btn.style.background = '#4CAF50';
            btn.disabled = false;
            isClickModeActive = false;
            map.getContainer().style.cursor = '';
            map.off('click', handleMapClick);
            showHomeStatus('⏰ Click-to-set mode timed out. Click the button again to try.', 'warning');
        }
    }, 30000);
}

// Set home from manual coordinates
function setManualHome() {
    const latInput = document.getElementById('lat-input');
    const lngInput = document.getElementById('lng-input');
    
    if (!latInput || !lngInput) return;
    
    const lat = parseFloat(latInput.value);
    const lng = parseFloat(lngInput.value);
    
    if (isNaN(lat) || isNaN(lng)) {
        showHomeStatus('❌ Please enter valid numbers for both latitude and longitude', 'error');
        return;
    }
    
    if (lat < 26 || lat > 29 || lng < 87 || lng > 90) {
        const confirmed = confirm('These coordinates are outside the Sikkim region. Continue anyway?');
        if (!confirmed) return;
    }
    
    setHome(lat, lng, 'Manual Coordinates');
    
    // Clear inputs
    latInput.value = '';
    lngInput.value = '';
}

// Show status message for home location
function showHomeStatus(message, type) {
    const statusDiv = document.getElementById('home-status');
    if (statusDiv) {
        statusDiv.innerHTML = message;
        statusDiv.className = `status-message ${type}`;
        statusDiv.style.display = 'block';
        
        // Auto-hide success and info messages after 8 seconds
        if (type === 'success' || type === 'info') {
            setTimeout(() => {
                if (statusDiv.style.display !== 'none') {
                    statusDiv.style.display = 'none';
                }
            }, 8000);
        }
    }
}

// ===== ROUTE AND DISTANCE FUNCTIONS =====

// Draw route from home to monastery
function drawRouteToMonastery(monastery) {
    if (!homeLocation) {
        console.log('No home location set, cannot draw route');
        return;
    }
    
    // Create polyline (straight line route)
    const polyline = L.polyline([
        [homeLocation.lat, homeLocation.lng],
        [monastery.lat, monastery.lng]
    ], {
        color: '#FF6B6B',
        opacity: 0.8,
        weight: 4,
        dashArray: '10, 5'
    }).addTo(map);
    
    // Store polyline for later cleanup
    activePolylines.push(polyline);
    
    console.log(`Drew route to ${monastery.name}`);
}

// Clear all route lines
function clearAllLines() {
    activePolylines.forEach(polyline => {
        map.removeLayer(polyline);
    });
    activePolylines = [];
    console.log('Cleared all route lines');
    showHomeStatus('🧹 All route lines cleared', 'info');
}

// Calculate distance using Haversine formula
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLng = toRadians(lng2 - lng1);
    
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// ===== UTILITY FUNCTIONS =====

// Quick test function
function testHomeLocation() {
    console.log('🧪 Testing home location with Gangtok...');
    setHome(27.3389, 88.6065, 'Gangtok (Test)');
}

// Debug function to show all monastery locations
function showAllMonasteries() {
    console.log('📍 All monastery locations:');
    monasteries.forEach((m, i) => {
        console.log(`${i + 1}. ${m.name} - ${m.district} (${m.lat}, ${m.lng})`);
    });
}

// ===== INITIALIZE APPLICATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🏛️ DOM loaded, initializing Sikkim monasteries map...');
    
    // Add required styles for home marker
    if (!document.getElementById('home-marker-styles')) {
        const style = document.createElement('style');
        style.id = 'home-marker-styles';
        style.textContent = `
            .home-marker-emoji {
                background: none !important;
                border: none !important;
                font-size: 24px;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                animation: bounce 2s ease-in-out infinite;
            }
            
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-5px); }
            }
            
            .status-message {
                padding: 10px;
                border-radius: 6px;
                font-size: 14px;
                line-height: 1.4;
                margin-top: 8px;
            }
            
            .status-message.success {
                background: rgba(76, 175, 80, 0.1);
                color: #4CAF50;
                border: 1px solid rgba(76, 175, 80, 0.3);
            }
            
            .status-message.error {
                background: rgba(244, 67, 54, 0.1);
                color: #F44336;
                border: 1px solid rgba(244, 67, 54, 0.3);
            }
            
            .status-message.warning {
                background: rgba(255, 152, 0, 0.1);
                color: #FF9800;
                border: 1px solid rgba(255, 152, 0, 0.3);
            }
            
            .status-message.info {
                background: rgba(33, 150, 243, 0.1);
                color: #2196F3;
                border: 1px solid rgba(33, 150, 243, 0.3);
            }
            
            .custom-popup .leaflet-popup-content-wrapper {
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            }
        `;
        document.head.appendChild(style);
    }
    
    // Initialize the map
    initializeMap();
});

// ===== HANDLE WINDOW RESIZE =====
window.addEventListener('resize', function() {
    if (map) {
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    }
});

// ===== GLOBAL FUNCTIONS (for HTML onclick handlers) =====
window.setHome = setHome;
window.clickToSetHome = clickToSetHome;
window.setManualHome = setManualHome;
window.clearAllLines = clearAllLines;
window.testHomeLocation = testHomeLocation;
window.showAllMonasteries = showAllMonasteries;

// ===== LOG INITIALIZATION =====
console.log('🏛️ Sikkim Monasteries Map JavaScript loaded successfully');
console.log(`📊 Total monasteries: ${monasteries.length}`);
console.log('🎯 Available functions: setHome(), clickToSetHome(), setManualHome(), testHomeLocation()');
