// Application data
const appData = {
  "hotels": [
    {
      "id": 1,
      "name": "Central Hill Resort",
      "rating": 3.9,
      "reviews": 254,
      "price": 1569,
      "badge": "Best seller",
      "ranking": "#1 Best Value of 2,347 places to stay in Sikkim",
      "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      "description": "Located near MG Marg with stunning valley views. The Premium Rooms with Balcony offer amazing mountain vistas and comfortable stays.",
      "amenities": ["Free WiFi", "Mountain View", "Restaurant", "Room Service"],
      "location": "Gangtok, East Sikkim",
      "nearbyAttractions": ["MG Marg - 0.5 km", "Tsomgo Lake - 40 km"]
    },
    {
      "id": 2,
      "name": "Udaan Woodberry Hotel And Spa",
      "rating": 4.9,
      "reviews": 2001,
      "price": 4045,
      "badge": "Top-rated",
      "ranking": "#2 Best Value of 2,347 places to stay in Sikkim",
      "breakfast": true,
      "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop",
      "description": "Spectacular Kanchenjunga views from spacious rooms. Famous for pure vegetarian cuisine and proximity to monasteries.",
      "amenities": ["Kanchenjunga View", "Spa", "Restaurant", "Free WiFi"],
      "location": "Pelling, West Sikkim",
      "nearbyAttractions": ["Pemayangtse Monastery - 2 km", "Kanchenjunga Falls - 5 km"]
    },
    {
      "id": 3,
      "name": "Udaan Alpine Resort",
      "rating": 4.9,
      "reviews": 1083,
      "price": 3042,
      "badge": "Mountain View",
      "ranking": "#3 Best Value of 2,347 places to stay in Sikkim",
      "breakfast": true,
      "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop",
      "description": "Nestled in the beautiful Lachung valley with pristine mountain views. Perfect base for Yumthang Valley excursions.",
      "amenities": ["Valley View", "Mountain Trekking", "Restaurant", "Garden"],
      "location": "Lachung, North Sikkim",
      "nearbyAttractions": ["Yumthang Valley - 25 km", "Zero Point - 35 km"]
    },
    {
      "id": 4,
      "name": "The Fern Denzong Hotel & Spa Gangtok",
      "rating": 4.7,
      "reviews": 1083,
      "price": 2207,
      "badge": "City Center",
      "ranking": "#4 Best Value of 2,347 places to stay in Sikkim",
      "breakfast": true,
      "image": "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop",
      "description": "Prime location near MG Road with mesmerizing mountain views and exceptional hospitality. Easy access to major attractions.",
      "amenities": ["City Center", "Mountain View", "Spa", "Conference Room"],
      "location": "Gangtok, East Sikkim",
      "nearbyAttractions": ["MG Marg - 0.3 km", "Nathula Pass - 56 km"]
    },
    {
      "id": 5,
      "name": "The Golden Crest",
      "rating": 4.6,
      "reviews": 2227,
      "price": 1888,
      "badge": "Heritage",
      "ranking": "#5 Best Value of 2,347 places to stay in Sikkim",
      "breakfast": true,
      "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop",
      "description": "Traditional Sikkimese architecture with modern amenities. Walking distance to MG Marg and cultural sites.",
      "amenities": ["Heritage Design", "City Center", "Cultural Tours", "Free WiFi"],
      "location": "Gangtok, East Sikkim",
      "nearbyAttractions": ["Enchey Monastery - 3 km", "Rumtek Monastery - 24 km"]
    },
    {
      "id": 6,
      "name": "Udaan Keepa Hotel & Spa",
      "rating": 5.0,
      "reviews": 278,
      "price": 4968,
      "badge": "Luxury",
      "ranking": "#6 Best Value of 2,347 places to stay in Sikkim",
      "breakfast": true,
      "image": "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?w=600&h=400&fit=crop",
      "description": "Luxury accommodation with stunning Himalayan panoramas. Private balconies offer unobstructed mountain views.",
      "amenities": ["Himalayan Panorama", "Luxury Spa", "Private Balcony", "Fine Dining"],
      "location": "Gangtok, East Sikkim",
      "nearbyAttractions": ["Tsomgo Lake - 40 km", "Baba Mandir - 62 km"]
    }
  ],
  "categories": [
    {
      "name": "Mountain View Hotels",
      "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
      "description": "Wake up to breathtaking Himalayan vistas"
    },
    {
      "name": "Heritage Hotels", 
      "image": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=400&fit=crop",
      "description": "Experience traditional Sikkimese culture and architecture"
    },
    {
      "name": "Budget Hotels",
      "image": "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=400&fit=crop", 
      "description": "Comfortable stays without breaking the bank"
    },
    {
      "name": "Luxury Resorts",
      "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=400&fit=crop",
      "description": "Premium amenities and world-class service"
    }
  ],
  "nearbyAttractions": [
    {
      "name": "Nathula Pass",
      "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      "description": "Historic trade route at 14,140 feet"
    },
    {
      "name": "Tsomgo Lake",
      "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop",
      "description": "Sacred glacial lake surrounded by mountains"
    },
    {
      "name": "MG Marg",
      "image": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
      "description": "Pedestrian plaza and shopping hub of Gangtok"
    },
    {
      "name": "Gurudongmar Lake",
      "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      "description": "One of the highest lakes in the world"
    }
  ]
};

// Global variables for DOM elements
let categoriesGrid, attractionsGrid, hotelsGrid;
let loginModal, registerModal, bookingModal;
let loginBtn, registerBtn, searchBtn;
let closeLogin, closeRegister, closeBooking;
let loginOverlay, registerOverlay, bookingOverlay;
let loginForm, registerForm, bookingForm;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...');
  initializeElements();
  renderCategories();
  renderAttractions();
  renderHotels();
  setupEventListeners();
  setDefaultDates();
});

// Initialize DOM elements
function initializeElements() {
  // Grid elements
  categoriesGrid = document.getElementById('categoriesGrid');
  attractionsGrid = document.getElementById('attractionsGrid');
  hotelsGrid = document.getElementById('hotelsGrid');

  // Modal elements
  loginModal = document.getElementById('loginModal');
  registerModal = document.getElementById('registerModal');
  bookingModal = document.getElementById('bookingModal');

  // Button elements
  loginBtn = document.getElementById('loginBtn');
  registerBtn = document.getElementById('registerBtn');
  searchBtn = document.getElementById('searchBtn');

  // Close button elements
  closeLogin = document.getElementById('closeLogin');
  closeRegister = document.getElementById('closeRegister');
  closeBooking = document.getElementById('closeBooking');

  // Overlay elements
  loginOverlay = document.getElementById('loginOverlay');
  registerOverlay = document.getElementById('registerOverlay');
  bookingOverlay = document.getElementById('bookingOverlay');

  // Form elements
  loginForm = document.getElementById('loginForm');
  registerForm = document.getElementById('registerForm');
  bookingForm = document.getElementById('bookingForm');

  console.log('Elements initialized:', {
    loginModal: !!loginModal,
    registerModal: !!registerModal,
    bookingModal: !!bookingModal,
    loginBtn: !!loginBtn,
    registerBtn: !!registerBtn
  });
}

// Set default dates for search form
function setDefaultDates() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const checkinInput = document.getElementById('checkin');
  const checkoutInput = document.getElementById('checkout');
  
  if (checkinInput) {
    checkinInput.value = today.toISOString().split('T')[0];
  }
  if (checkoutInput) {
    checkoutInput.value = tomorrow.toISOString().split('T')[0];
  }
}

// Render functions
function renderCategories() {
  if (!categoriesGrid) return;
  
  categoriesGrid.innerHTML = appData.categories.map((category, index) => `
    <div class="category-card" onclick="filterHotelsByCategory('${category.name}')">
      <img src="${category.image}" alt="${category.name}" class="category-card__image" onerror="this.style.display='none'">
      <div class="category-card__content">
        <h3 class="category-card__title">${category.name}</h3>
        <p class="category-card__description">${category.description}</p>
      </div>
    </div>
  `).join('');
}

function renderAttractions() {
  if (!attractionsGrid) return;
  
  attractionsGrid.innerHTML = appData.nearbyAttractions.map(attraction => `
    <div class="attraction-card">
      <img src="${attraction.image}" alt="${attraction.name}" class="attraction-card__image" onerror="this.style.display='none'">
      <div class="attraction-card__content">
        <h3 class="attraction-card__title">${attraction.name}</h3>
        <p class="attraction-card__description">${attraction.description}</p>
      </div>
    </div>
  `).join('');
}

function renderHotels(hotels = appData.hotels) {
  if (!hotelsGrid) return;
  
  hotelsGrid.innerHTML = hotels.map(hotel => `
    <div class="hotel-card">
      <img src="${hotel.image}" alt="${hotel.name}" class="hotel-card__image" onerror="this.style.display='none'">
      <div class="hotel-card__content">
        <div class="hotel-card__header">
          <div>
            <h3 class="hotel-card__title">${hotel.name}</h3>
            <div class="hotel-card__location">${hotel.location}</div>
          </div>
          <div class="hotel-card__badge">${hotel.badge}</div>
        </div>
        
        <div class="hotel-card__rating">
          <div class="hotel-card__stars">
            ${generateStars(hotel.rating)}
          </div>
          <span class="hotel-card__reviews">${hotel.reviews} reviews</span>
        </div>
        
        <p class="hotel-card__description">${hotel.description}</p>
        
        <div class="hotel-card__amenities">
          ${hotel.amenities.map(amenity => `<span class="amenity-tag">${amenity}</span>`).join('')}
        </div>
        
        <div class="hotel-card__attractions">
          <div class="hotel-card__attractions-title">Nearby Attractions:</div>
          <div class="attractions-list">
            ${hotel.nearbyAttractions.map(attraction => `<div class="attraction-item">${attraction}</div>`).join('')}
          </div>
        </div>
        
        <div class="hotel-card__footer">
          <div>
            <span class="hotel-card__price">₹${hotel.price.toLocaleString()}</span>
            <span class="hotel-card__price-unit">/ night</span>
          </div>
          <button class="btn btn--primary" onclick="openBookingModal(${hotel.id})">Book Now</button>
        </div>
      </div>
    </div>
  `).join('');
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '';
  
  for (let i = 0; i < fullStars; i++) {
    stars += '<span class="star">★</span>';
  }
  
  if (hasHalfStar) {
    stars += '<span class="star">☆</span>';
  }
  
  return stars;
}

// Event listeners
function setupEventListeners() {
  console.log('Setting up event listeners...');
  
  // Modal open events
  if (loginBtn) {
    loginBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Login button clicked');
      openModal(loginModal);
    });
  }
  
  if (registerBtn) {
    registerBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Register button clicked');
      openModal(registerModal);
    });
  }
  
  // Modal close events
  if (closeLogin) {
    closeLogin.addEventListener('click', function(e) {
      e.preventDefault();
      closeModal(loginModal);
    });
  }
  
  if (closeRegister) {
    closeRegister.addEventListener('click', function(e) {
      e.preventDefault();
      closeModal(registerModal);
    });
  }
  
  if (closeBooking) {
    closeBooking.addEventListener('click', function(e) {
      e.preventDefault();
      closeModal(bookingModal);
    });
  }
  
  // Overlay click events
  if (loginOverlay) {
    loginOverlay.addEventListener('click', function() {
      closeModal(loginModal);
    });
  }
  
  if (registerOverlay) {
    registerOverlay.addEventListener('click', function() {
      closeModal(registerModal);
    });
  }
  
  if (bookingOverlay) {
    bookingOverlay.addEventListener('click', function() {
      closeModal(bookingModal);
    });
  }
  
  // Form submit events
  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }
  
  if (registerForm) {
    registerForm.addEventListener('submit', handleRegister);
  }
  
  if (bookingForm) {
    bookingForm.addEventListener('submit', handleBooking);
  }
  
  // Search button
  if (searchBtn) {
    searchBtn.addEventListener('click', function(e) {
      e.preventDefault();
      handleSearch();
    });
  }
}

// Modal functions
function openModal(modal) {
  if (!modal) {
    console.error('Modal not found');
    return;
  }
  
  console.log('Opening modal:', modal.id);
  modal.classList.remove('hidden');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  if (!modal) return;
  
  console.log('Closing modal:', modal.id);
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
  
  setTimeout(() => {
    if (modal.classList.contains('hidden')) {
      modal.style.display = 'none';
    }
  }, 300);
}

// Global functions
window.openBookingModal = function(hotelId) {
  console.log('Opening booking modal for hotel:', hotelId);
  const hotel = appData.hotels.find(h => h.id === hotelId);
  if (hotel && bookingModal) {
    const selectedHotelDiv = document.getElementById('selectedHotel');
    if (selectedHotelDiv) {
      selectedHotelDiv.innerHTML = `
        <div class="selected-hotel">
          <h4 class="selected-hotel__name">${hotel.name}</h4>
          <div class="selected-hotel__details">
            <p>${hotel.location}</p>
            <p><strong>₹${hotel.price.toLocaleString()}</strong> per night</p>
            <p>Rating: ${hotel.rating}/5.0 (${hotel.reviews} reviews)</p>
          </div>
        </div>
      `;
    }
    openModal(bookingModal);
  }
};

window.filterHotelsByCategory = function(categoryName) {
  console.log('Filtering hotels by category:', categoryName);
  
  let filteredHotels = appData.hotels;
  
  // Simple filtering logic based on category
  switch(categoryName) {
    case 'Mountain View Hotels':
      filteredHotels = appData.hotels.filter(hotel => 
        hotel.amenities.some(amenity => 
          amenity.toLowerCase().includes('view') || 
          amenity.toLowerCase().includes('mountain')
        )
      );
      break;
    case 'Heritage Hotels':
      filteredHotels = appData.hotels.filter(hotel => 
        hotel.badge.toLowerCase().includes('heritage') ||
        hotel.amenities.some(amenity => amenity.toLowerCase().includes('heritage'))
      );
      break;
    case 'Budget Hotels':
      filteredHotels = appData.hotels.filter(hotel => hotel.price < 2500);
      break;
    case 'Luxury Resorts':
      filteredHotels = appData.hotels.filter(hotel => 
        hotel.price > 4000 || 
        hotel.badge.toLowerCase().includes('luxury')
      );
      break;
    default:
      filteredHotels = appData.hotels;
  }
  
  renderHotels(filteredHotels);
  
  // Scroll to hotels section
  const hotelsSection = document.querySelector('.hotels');
  if (hotelsSection) {
    hotelsSection.scrollIntoView({ behavior: 'smooth' });
  }
};

// Form handlers
function handleLogin(event) {
  event.preventDefault();
  console.log('Handling login...');
  
  // Simulate login success
  showSuccessMessage(loginModal, 'Login successful! Welcome back.');
  
  setTimeout(() => {
    closeModal(loginModal);
    // Update UI to show logged in state
    if (loginBtn) loginBtn.textContent = 'Account';
    if (registerBtn) registerBtn.style.display = 'none';
  }, 2000);
}

function handleRegister(event) {
  event.preventDefault();
  console.log('Handling registration...');
  
  // Simulate registration success
  showSuccessMessage(registerModal, 'Account created successfully! Welcome to Sikkim Hotels.');
  
  setTimeout(() => {
    closeModal(registerModal);
    // Update UI to show logged in state
    if (loginBtn) loginBtn.textContent = 'Account';
    if (registerBtn) registerBtn.style.display = 'none';
  }, 2000);
}

function handleBooking(event) {
  event.preventDefault();
  console.log('Handling booking...');
  
  // Simulate booking success
  showSuccessMessage(bookingModal, 'Booking confirmed! You will receive a confirmation email shortly.');
  
  setTimeout(() => {
    closeModal(bookingModal);
  }, 3000);
}

function handleSearch() {
  console.log('Handling search...');
  
  const destinationSelect = document.getElementById('destination');
  if (!destinationSelect || !hotelsGrid) return;
  
  const destination = destinationSelect.value;
  console.log('Searching for destination:', destination);
  
  // Filter hotels based on destination
  let filteredHotels = appData.hotels;
  
  if (destination && destination !== 'All Destinations') {
    filteredHotels = appData.hotels.filter(hotel => 
      hotel.location.toLowerCase().includes(destination.toLowerCase())
    );
  }
  
  console.log('Filtered hotels:', filteredHotels.length);
  
  // Animate search results
  hotelsGrid.style.opacity = '0.5';
  
  setTimeout(() => {
    renderHotels(filteredHotels);
    hotelsGrid.style.opacity = '1';
    
    // Scroll to results
    const hotelsSection = document.querySelector('.hotels');
    if (hotelsSection) {
      hotelsSection.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }
  }, 500);
}

function showSuccessMessage(modal, message) {
  if (!modal) return;
  
  const modalBody = modal.querySelector('.modal__body');
  if (!modalBody) return;
  
  const existingMessage = modalBody.querySelector('.success-message');
  
  if (existingMessage) {
    existingMessage.remove();
  }
  
  const successDiv = document.createElement('div');
  successDiv.className = 'success-message';
  successDiv.textContent = message;
  
  modalBody.insertBefore(successDiv, modalBody.firstChild);
}

// Keyboard navigation for modals
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    if (loginModal && !loginModal.classList.contains('hidden')) {
      closeModal(loginModal);
    }
    if (registerModal && !registerModal.classList.contains('hidden')) {
      closeModal(registerModal);
    }
    if (bookingModal && !bookingModal.classList.contains('hidden')) {
      closeModal(bookingModal);
    }
  }
});