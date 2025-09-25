// Enhanced Sikkim Monastery Chatbot JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing chatbot...');
    
    class SikkimMonasteryBot {
        constructor() {
            this.currentLanguage = 'en';
            this.messageHistory = [];
            this.currentCarouselIndex = 0;
            this.carouselInterval = null;
            this.isTyping = false;
            
            this.monasteries = [
                {
                    name: "Rumtek Monastery",
                    description: "The largest and most famous monastery in Sikkim. It is the seat of the Karmapa (head of the Kagyu school of Tibetan Buddhism). Built in the 16th century and rebuilt in the 20th century, it is known for its stunning architecture, vibrant murals, golden stupa, and a vast collection of sacred texts.",
                    icon: "fas fa-mountain",
                    established: "16th century",
                    school: "Kagyu"
                },
                {
                    name: "Enchey Monastery",
                    description: "Located on a hill above Gangtok, this monastery is known for its annual Chaam dances and peaceful ambiance.",
                    icon: "fas fa-temple",
                    established: "1909",
                    school: "Nyingma"
                },
                {
                    name: "Pemayangtse Monastery",
                    description: "One of the oldest and most important monasteries in Sikkim, known for its seven-storied wooden sculpture and ancient manuscripts.",
                    icon: "fas fa-pagoda",
                    established: "1705",
                    school: "Nyingma"
                }
            ];

            this.responses = {
                en: {
                    greeting: [
                        "Hello! I'm your guide to the sacred monasteries of Sikkim. How can I help you explore these spiritual treasures today?",
                        "Welcome to Sikkim Monasteries Digital Heritage! I'm here to share the rich history and culture of our monasteries.",
                        "Namaste! I'm delighted to help you discover the magnificent monasteries of Sikkim. What would you like to know?"
                    ],
                    features: "Our platform offers amazing features including:\n\n🎯 **Virtual Tours**: Experience 360° panoramic views of monastery interiors and surroundings\n📍 **Interactive Map**: Geo-tagged monastery locations with detailed travel routes\n📚 **Digital Archives**: Access scanned manuscripts, murals, and historical documents\n🎧 **Smart Audio Guide App**: Location-based audio guides in multiple languages\n📅 **Cultural Calendar**: Stay updated with events, festivals, and rituals schedule\n\nWould you like to explore any specific feature?",
                    map: "Our interactive map feature allows you to:\n\n🗺️ Explore geo-tagged locations of all major monasteries\n🚗 Get detailed travel routes and transportation options\n📱 Access GPS navigation for easy monastery visits\n🏔️ View monastery locations in the context of Sikkim's beautiful landscape\n📊 See visitor information and best times to visit\n\nYou can find monasteries in different regions of Sikkim with detailed accessibility information.",
                    audio: "Our Smart Audio Guide App offers:\n\n🎧 Location-based audio commentary in 5 languages\n📱 Offline downloads for remote monastery visits\n👥 Expert narration by Buddhist scholars and local guides\n🔊 High-quality audio with ambient monastery sounds\n📖 Synchronized text for hearing-impaired visitors\n🎵 Traditional chants and prayer recordings\n\nThe app automatically detects your location and provides relevant information as you explore each monastery.",
                    archives: "Our Digital Archives contain:\n\n📜 Ancient manuscripts and texts in Tibetan, Sanskrit, and local languages\n🎨 High-resolution images of murals, thangkas, and sculptures\n📚 Historical documents and chronicles of monastery founding\n🖼️ Photographic collections from different time periods\n🔍 Advanced search functionality to find specific content\n📱 Mobile-friendly viewing with zoom capabilities\n\nAll materials are digitally preserved and accessible for research and educational purposes.",
                    monasteries: "Sikkim is home to numerous sacred monasteries:\n\n🏛️ **Rumtek Monastery** - The largest monastery, seat of the Karmapa (Kagyu school, 16th century)\n🌸 **Enchey Monastery** - Famous for Chaam dances, located above Gangtok (Nyingma school, 1909)\n🏔️ **Pemayangtse Monastery** - One of the oldest, known for wooden sculptures (Nyingma school, 1705)\n⛩️ **Tashiding Monastery** - Sacred pilgrimage site with holy water spring\n🌺 **Do Drul Chorten** - Beautiful stupa with prayer wheels\n\nEach monastery has unique architecture, rituals, and historical significance. Which one interests you most?",
                    default: [
                        "I'd be happy to help you learn about Sikkim's monasteries! You can ask me about features, monastery locations, visiting information, or our digital archives.",
                        "Feel free to ask me about monastery history, festivals, virtual tours, or how to plan your visit to these sacred places.",
                        "I can provide information about specific monasteries, our platform features, cultural events, or practical visiting tips. What interests you most?"
                    ]
                },
                hi: {
                    greeting: [
                        "नमस्ते! मैं सिक्किम के पवित्र मठों का आपका गाइड हूं। आज मैं इन आध्यात्मिक खजानों की खोज में आपकी कैसे सहायता कर सकता हूं?",
                        "सिक्किम मठ डिजिटल विरासत में आपका स्वागत है! मैं यहां हमारे मठों के समृद्ध इतिहास और संस्कृति को साझा करने के लिए हूं।",
                        "नमस्ते! सिक्किम के शानदार मठों की खोज में आपकी मदद करने में मुझे खुशी हो रही है। आप क्या जानना चाहेंगे?"
                    ],
                    features: "हमारे प्लेटफॉर्म में अद्भुत सुविधाएं हैं:\n\n🎯 **वर्चुअल टूर**: मठ के अंदरूनी हिस्सों और आसपास के 360° दृश्य\n📍 **इंटरैक्टिव मैप**: विस्तृत यात्रा मार्गों के साथ मठों के जियो-टैग्ड स्थान\n📚 **डिजिटल अभिलेखागार**: स्कैन किए गए पांडुलिपियों, भित्ति चित्रों और ऐतिहासिक दस्तावेजों तक पहुंच\n🎧 **स्मार्ट ऑडियो गाइड ऐप**: कई भाषाओं में स्थान-आधारित ऑडियो गाइड\n📅 **सांस्कृतिक कैलेंडर**: कार्यक्रमों, त्योहारों और अनुष्ठानों की अपडेट\n\nक्या आप किसी विशिष्ट सुविधा का अन्वेषण करना चाहते हैं?",
                    map: "हमारी इंटरैक्टिव मैप सुविधा आपको यह करने की अनुमति देती है:\n\n🗺️ सभी प्रमुख मठों के जियो-टैग्ड स्थानों की खोज\n🚗 विस्तृत यात्रा मार्ग और परिवहन विकल्प प्राप्त करें\n📱 आसान मठ यात्राओं के लिए GPS नेवीगेशन एक्सेस करें\n🏔️ सिक्किम के सुंदर परिदृश्य के संदर्भ में मठ स्थान देखें\n📊 आगंतुक जानकारी और यात्रा के सर्वोत्तम समय देखें",
                    audio: "हमारा स्मार्ट ऑडियो गाइड ऐप प्रदान करता है:\n\n🎧 5 भाषाओं में स्थान-आधारित ऑडियो कमेंटरी\n📱 दूरदराज के मठ यात्राओं के लिए ऑफलाइन डाउनलोड\n👥 बौद्ध विद्वानों और स्थानीय गाइडों द्वारा विशेषज्ञ कथन\n🔊 परिवेशी मठ ध्वनियों के साथ उच्च गुणवत्ता ऑडियो\n📖 श्रवण-बाधित आगंतुकों के लिए सिंक्रोनाइज़्ड टेक्स्ट\n🎵 पारंपरिक मंत्र और प्रार्थना रिकॉर्डिंग",
                    archives: "हमारे डिजिटल अभिलेखागार में शामिल है:\n\n📜 तिब्बती, संस्कृत और स्थानीय भाषाओं में प्राचीन पांडुलिपियां\n🎨 भित्ति चित्रों, थंगकाओं और मूर्तियों की उच्च-रिज़ॉल्यूशन छवियां\n📚 मठ स्थापना के ऐतिहासिक दस्तावेज और इतिहास\n🖼️ विभिन्न समय अवधि के फोटोग्राफिक संग्रह\n🔍 विशिष्ट सामग्री खोजने के लिए उन्नत खोज कार्यक्षमता\n📱 ज़ूम क्षमताओं के साथ मोबाइल-फ्रेंडली देखना",
                    monasteries: "सिक्किम में कई पवित्र मठ हैं:\n\n🏛️ **रुमटेक मठ** - सबसे बड़ा मठ, कर्मापा की सीट (कागयू स्कूल, 16वीं सदी)\n🌸 **एन्चे मठ** - छाम नृत्यों के लिए प्रसिद्ध, गंगटोक के ऊपर स्थित (न्यिंगमा स्कूल, 1909)\n🏔️ **पेमायंग्त्से मठ** - सबसे पुराने में से एक, लकड़ी की मूर्तियों के लिए प्रसिद्ध (न्यिंगमा स्कूल, 1705)\n⛩️ **ताशिदिंग मठ** - पवित्र जल के झरने के साथ पवित्र तीर्थ स्थल\n🌺 **दो द्रुल चोर्तेन** - प्रार्थना पहियों के साथ सुंदर स्तूप",
                    default: [
                        "सिक्किम के मठों के बारे में जानने में आपकी मदद करने में मुझे खुशी होगी! आप मुझसे सुविधाओं, मठ स्थानों, यात्रा जानकारी, या हमारे डिजिटल अभिलेखागार के बारे में पूछ सकते हैं।",
                        "मठ इतिहास, त्योहारों, वर्चुअल टूर, या इन पवित्र स्थानों की यात्रा की योजना के बारे में मुझसे पूछने में संकोच न करें।",
                        "मैं विशिष्ट मठों, हमारी प्लेटफॉर्म सुविधाओं, सांस्कृतिक कार्यक्रमों, या व्यावहारिक यात्रा सुझावों के बारे में जानकारी प्रदान कर सकता हूं। आपको सबसे अधिक क्या दिलचस्पी है?"
                    ]
                }
            };

            this.init();
        }

        init() {
            try {
                this.initElements();
                this.initEventListeners();
                this.initCarousel();
                this.animateStats();
                this.startCarouselAutoplay();
                console.log('Chatbot initialized successfully');
            } catch (error) {
                console.error('Error initializing chatbot:', error);
            }
        }

        initElements() {
            // Chat elements
            this.chatMessages = document.getElementById('chat-messages');
            this.messageInput = document.getElementById('message-input');
            this.sendBtn = document.getElementById('send-btn');
            this.typingIndicator = document.getElementById('typing-indicator');
            this.charCounter = document.getElementById('char-counter');
            this.quickSuggestions = document.getElementById('quick-suggestions');

            // UI elements
            this.languageBtn = document.getElementById('language-btn');
            this.langText = document.getElementById('lang-text');
            this.searchBtn = document.getElementById('search-btn');
            this.searchBar = document.getElementById('search-bar');
            this.searchInput = document.getElementById('search-input');
            this.searchClose = document.getElementById('search-close');
            this.exportBtn = document.getElementById('export-btn');
            this.clearBtn = document.getElementById('clear-btn');
            this.voiceBtn = document.getElementById('voice-btn');

            // Carousel elements
            this.carouselSlides = document.getElementById('monastery-carousel');
            this.prevBtn = document.getElementById('prev-btn');
            this.nextBtn = document.getElementById('next-btn');
            this.carouselDots = document.querySelector('.carousel-dots');
            
            console.log('Elements found:', {
                chatMessages: !!this.chatMessages,
                messageInput: !!this.messageInput,
                sendBtn: !!this.sendBtn,
                languageBtn: !!this.languageBtn,
                carouselSlides: !!this.carouselSlides
            });
        }

        initEventListeners() {
            // Chat input
            if (this.messageInput) {
                this.messageInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        this.sendMessage();
                    }
                });

                this.messageInput.addEventListener('input', () => {
                    this.updateCharCounter();
                });
                
                console.log('Message input listeners added');
            }

            if (this.sendBtn) {
                this.sendBtn.addEventListener('click', () => {
                    console.log('Send button clicked');
                    this.sendMessage();
                });
                console.log('Send button listener added');
            }

            // Language toggle
            if (this.languageBtn) {
                this.languageBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log('Language button clicked');
                    this.toggleLanguage();
                });
                console.log('Language button listener added');
            }

            // Search functionality
            if (this.searchBtn) {
                this.searchBtn.addEventListener('click', () => this.toggleSearch());
            }
            if (this.searchClose) {
                this.searchClose.addEventListener('click', () => this.toggleSearch());
            }
            if (this.searchInput) {
                this.searchInput.addEventListener('input', (e) => this.searchMessages(e.target.value));
            }

            // Export and clear
            if (this.exportBtn) {
                this.exportBtn.addEventListener('click', () => {
                    console.log('Export button clicked');
                    this.exportChat();
                });
            }
            if (this.clearBtn) {
                this.clearBtn.addEventListener('click', () => this.clearChat());
            }

            // Voice button (visual only)
            if (this.voiceBtn) {
                this.voiceBtn.addEventListener('click', () => this.handleVoiceInput());
            }

            // Carousel controls
            if (this.prevBtn) {
                this.prevBtn.addEventListener('click', () => this.previousSlide());
            }
            if (this.nextBtn) {
                this.nextBtn.addEventListener('click', () => this.nextSlide());
            }

            // Action buttons - use more flexible selector
            setTimeout(() => {
                const actionButtons = document.querySelectorAll('.action-btn, .suggestion-chip, .faq-question');
                console.log('Found action buttons:', actionButtons.length);
                
                actionButtons.forEach((btn, index) => {
                    const query = btn.dataset.query || btn.textContent.trim();
                    btn.addEventListener('click', (e) => {
                        e.preventDefault();
                        console.log(`Action button ${index} clicked:`, query);
                        this.sendQuickMessage(query);
                    });
                });
            }, 100);

            // Keyboard shortcuts
            document.addEventListener('keydown', (e) => {
                if (e.ctrlKey && e.key === 'l') {
                    e.preventDefault();
                    this.toggleLanguage();
                }
            });

            console.log('All event listeners initialized');
        }

        initCarousel() {
            if (!this.carouselSlides || !this.carouselDots) return;
            
            this.carouselSlides.innerHTML = '';
            this.carouselDots.innerHTML = '';

            this.monasteries.forEach((monastery, index) => {
                // Create slide
                const slide = document.createElement('div');
                slide.className = 'carousel-slide';
                slide.innerHTML = `
                    <div class="monastery-icon">
                        <i class="${monastery.icon}"></i>
                    </div>
                    <div class="monastery-name">${monastery.name}</div>
                    <div class="monastery-info">${monastery.description.substring(0, 100)}...</div>
                    <div class="monastery-meta">
                        <span>Est. ${monastery.established}</span>
                        <span>${monastery.school}</span>
                    </div>
                `;
                this.carouselSlides.appendChild(slide);

                // Create dot
                const dot = document.createElement('div');
                dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
                dot.addEventListener('click', () => this.goToSlide(index));
                this.carouselDots.appendChild(dot);
            });

            this.updateCarouselDisplay();
            console.log('Carousel initialized');
        }

        animateStats() {
            const stats = document.querySelectorAll('.stat-number');
            stats.forEach(stat => {
                const target = parseInt(stat.dataset.target);
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;

                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    stat.textContent = Math.floor(current);
                }, 16);
            });
            console.log('Stats animation started');
        }

        sendMessage() {
            if (!this.messageInput || !this.chatMessages) {
                console.error('Required chat elements not found');
                return;
            }

            const message = this.messageInput.value.trim();
            if (!message) {
                console.log('Empty message, not sending');
                return;
            }

            console.log('Sending message:', message);

            this.addMessage(message, 'user');
            this.messageInput.value = '';
            this.updateCharCounter();

            // Show typing indicator
            this.showTypingIndicator();

            // Simulate processing delay
            setTimeout(() => {
                this.hideTypingIndicator();
                const response = this.generateResponse(message);
                this.addMessage(response, 'bot');
                this.showQuickSuggestions();
            }, 1500 + Math.random() * 1000);
        }

        sendQuickMessage(query) {
            if (!this.messageInput) {
                console.error('Message input not found');
                return;
            }
            
            console.log('Sending quick message:', query);
            this.messageInput.value = query;
            this.sendMessage();
        }

        addMessage(content, sender) {
            if (!this.chatMessages) {
                console.error('Chat messages container not found');
                return;
            }
            
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender}`;
            
            const currentTime = new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            });

            const avatar = sender === 'user' ? 
                '<i class="fas fa-user"></i>' : 
                '<i class="fas fa-robot"></i>';

            messageDiv.innerHTML = `
                <div class="message-avatar">${avatar}</div>
                <div class="message-content">
                    <div class="message-bubble">${this.formatMessage(content)}</div>
                    <div class="message-time">${currentTime}</div>
                    ${sender === 'bot' ? `
                        <div class="message-reactions">
                            <button class="reaction-btn" data-reaction="helpful">
                                <i class="fas fa-thumbs-up"></i>
                            </button>
                            <button class="reaction-btn" data-reaction="not-helpful">
                                <i class="fas fa-thumbs-down"></i>
                            </button>
                        </div>
                    ` : ''}
                </div>
            `;

            // Remove welcome message if exists
            const welcomeMessage = this.chatMessages.querySelector('.welcome-message');
            if (welcomeMessage && this.messageHistory.length === 0) {
                welcomeMessage.remove();
            }

            this.chatMessages.appendChild(messageDiv);
            this.chatMessages.scrollTop = this.chatMessages.scrollHeight;

            // Add reaction listeners
            if (sender === 'bot') {
                messageDiv.querySelectorAll('.reaction-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => this.handleReaction(e, messageDiv));
                });
            }

            // Store in history
            this.messageHistory.push({
                content,
                sender,
                timestamp: Date.now(),
                time: currentTime
            });

            console.log('Message added:', sender, content.substring(0, 50) + '...');
        }

        formatMessage(content) {
            // Convert markdown-style formatting to HTML
            return content
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                .replace(/\n/g, '<br>');
        }

        generateResponse(message) {
            const lowerMessage = message.toLowerCase();
            const responses = this.responses[this.currentLanguage];

            console.log('Generating response for:', lowerMessage, 'Language:', this.currentLanguage);

            // Greeting patterns
            if (lowerMessage.match(/^(hi|hello|hey|namaste|namaskar|tell me about)/)) {
                return this.getRandomResponse(responses.greeting);
            }

            // Feature-specific responses
            if (lowerMessage.includes('feature') || lowerMessage.includes('सुविधा') || 
                lowerMessage.toLowerCase() === 'features') {
                return responses.features;
            }

            if (lowerMessage.includes('map') || lowerMessage.includes('मैप') || 
                lowerMessage.includes('नक्शा')) {
                return responses.map;
            }

            if (lowerMessage.includes('audio') || lowerMessage.includes('guide') || 
                lowerMessage.includes('ऑडियो') || lowerMessage.includes('गाइड')) {
                return responses.audio;
            }

            if (lowerMessage.includes('archive') || lowerMessage.includes('अभिलेखागार')) {
                return responses.archives;
            }

            if (lowerMessage.includes('monastery') || lowerMessage.includes('monasteries') || 
                lowerMessage.includes('मठ') || lowerMessage.includes('गुम्बा') ||
                lowerMessage.includes('monastery info') || lowerMessage.includes('platform features') ||
                lowerMessage.includes('interactive map')) {
                return responses.monasteries;
            }

            // Default response
            return this.getRandomResponse(responses.default);
        }

        getRandomResponse(responses) {
            return responses[Math.floor(Math.random() * responses.length)];
        }

        showTypingIndicator() {
            if (!this.typingIndicator) return;
            
            this.isTyping = true;
            this.typingIndicator.classList.remove('hidden');
            if (this.chatMessages) {
                this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
            }
            console.log('Typing indicator shown');
        }

        hideTypingIndicator() {
            if (!this.typingIndicator) return;
            
            this.isTyping = false;
            this.typingIndicator.classList.add('hidden');
            console.log('Typing indicator hidden');
        }

        showQuickSuggestions() {
            if (!this.quickSuggestions) return;
            
            const suggestions = this.currentLanguage === 'en' ? 
                ['Tell me more', 'Show map', 'Audio guide', 'Visit info'] :
                ['और बताएं', 'मैप दिखाएं', 'ऑडियो गाइड', 'यात्रा जानकारी'];

            this.quickSuggestions.innerHTML = suggestions.map(suggestion => 
                `<button class="quick-suggestion" data-query="${suggestion}">${suggestion}</button>`
            ).join('');

            this.quickSuggestions.style.display = 'flex';

            // Add click listeners
            this.quickSuggestions.querySelectorAll('.quick-suggestion').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const query = e.currentTarget.dataset.query;
                    this.sendQuickMessage(query);
                    this.quickSuggestions.style.display = 'none';
                });
            });

            // Hide after 10 seconds
            setTimeout(() => {
                if (this.quickSuggestions) {
                    this.quickSuggestions.style.display = 'none';
                }
            }, 10000);
        }

        toggleLanguage() {
            console.log('Toggling language from:', this.currentLanguage);
            
            this.currentLanguage = this.currentLanguage === 'en' ? 'hi' : 'en';
            
            if (this.currentLanguage === 'hi') {
                if (this.langText) this.langText.textContent = 'हिं';
                if (this.languageBtn) {
                    const flag = this.languageBtn.querySelector('.flag');
                    if (flag) flag.textContent = '🇮🇳';
                }
                if (this.messageInput) this.messageInput.placeholder = 'सिक्किम मठों के बारे में पूछें...';
            } else {
                if (this.langText) this.langText.textContent = 'EN';
                if (this.languageBtn) {
                    const flag = this.languageBtn.querySelector('.flag');
                    if (flag) flag.textContent = '🇬🇧';
                }
                if (this.messageInput) this.messageInput.placeholder = 'Ask about Sikkim monasteries...';
            }

            if (this.languageBtn) {
                this.languageBtn.classList.add('btn-loading');
                setTimeout(() => {
                    this.languageBtn.classList.remove('btn-loading');
                }, 500);
            }

            console.log('Language toggled to:', this.currentLanguage);
            
            // Show confirmation message
            this.addMessage(
                this.currentLanguage === 'en' ? 
                    'Language switched to English. How can I help you?' :
                    'भाषा हिंदी में बदल गई। मैं आपकी कैसे मदद कर सकता हूं?',
                'bot'
            );
        }

        exportChat() {
            const chatData = this.messageHistory.length > 0 ? 
                this.messageHistory.map(msg => 
                    `[${msg.time}] ${msg.sender.toUpperCase()}: ${msg.content}`
                ).join('\n\n') : 
                'No chat history to export.';

            const blob = new Blob([chatData], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `sikkim-monastery-chat-${new Date().toISOString().split('T')[0]}.txt`;
            a.click();
            URL.revokeObjectURL(url);

            // Show success feedback
            if (this.exportBtn) {
                const originalHTML = this.exportBtn.innerHTML;
                this.exportBtn.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    this.exportBtn.innerHTML = originalHTML;
                }, 2000);
            }
            
            console.log('Chat exported');
        }

        clearChat() {
            if (!this.chatMessages) return;
            
            if (confirm('Are you sure you want to clear the chat history?')) {
                this.chatMessages.innerHTML = `
                    <div class="welcome-message">
                        <div class="welcome-icon">
                            <i class="fas fa-mountain"></i>
                        </div>
                        <h2>Welcome to Sikkim Monasteries Digital Heritage</h2>
                        <p>I'm your virtual guide to the sacred monasteries of Sikkim. Ask me anything about these spiritual treasures!</p>
                        <div class="suggestion-chips">
                            <button class="suggestion-chip" data-query="Tell me about the monasteries">Monastery Info</button>
                            <button class="suggestion-chip" data-query="features">Platform Features</button>
                            <button class="suggestion-chip" data-query="map">Interactive Map</button>
                        </div>
                    </div>
                `;
                this.messageHistory = [];
                
                // Re-add suggestion chip listeners
                setTimeout(() => {
                    document.querySelectorAll('.suggestion-chip').forEach(chip => {
                        chip.addEventListener('click', (e) => {
                            const query = e.currentTarget.dataset.query;
                            this.sendQuickMessage(query);
                        });
                    });
                }, 100);
                
                console.log('Chat cleared');
            }
        }

        handleVoiceInput() {
            if (!this.voiceBtn) return;
            
            // Visual feedback only (no actual voice recording)
            this.voiceBtn.classList.add('btn-loading');
            this.voiceBtn.style.color = '#ea4335';
            
            setTimeout(() => {
                this.voiceBtn.classList.remove('btn-loading');
                this.voiceBtn.style.color = '';
                
                // Show a message about voice feature
                this.addMessage(
                    this.currentLanguage === 'en' ? 
                        'Voice input feature is coming soon! For now, please type your questions.' :
                        'वॉयस इनपुट सुविधा जल्द ही आ रही है! अभी कृपया अपने प्रश्न टाइप करें।',
                    'bot'
                );
            }, 2000);
        }

        updateCharCounter() {
            if (!this.messageInput || !this.charCounter) return;
            
            const length = this.messageInput.value.length;
            this.charCounter.textContent = `${length}/500`;
            
            if (length > 400) {
                this.charCounter.style.color = '#ea4335';
            } else if (length > 300) {
                this.charCounter.style.color = '#fbbc04';
            } else {
                this.charCounter.style.color = '';
            }
        }

        handleReaction(e, messageDiv) {
            const btn = e.currentTarget;
            const isActive = btn.classList.contains('active');
            
            // Remove active class from all reaction buttons in this message
            messageDiv.querySelectorAll('.reaction-btn').forEach(b => b.classList.remove('active'));
            
            // Toggle current button
            if (!isActive) {
                btn.classList.add('active');
                console.log('Reaction activated:', btn.dataset.reaction);
            }
        }

        toggleSearch() {
            if (!this.searchBar) return;
            
            this.searchBar.classList.toggle('hidden');
            if (!this.searchBar.classList.contains('hidden')) {
                if (this.searchInput) this.searchInput.focus();
            } else {
                if (this.searchInput) this.searchInput.value = '';
                this.highlightMessages('');
            }
        }

        searchMessages(query) {
            this.highlightMessages(query);
        }

        highlightMessages(query) {
            if (!this.chatMessages) return;
            
            const messages = this.chatMessages.querySelectorAll('.message-bubble');
            messages.forEach(message => {
                const text = message.textContent;
                if (query && text.toLowerCase().includes(query.toLowerCase())) {
                    const regex = new RegExp(`(${query})`, 'gi');
                    message.innerHTML = text.replace(regex, '<mark>$1</mark>');
                    message.closest('.message').style.opacity = '1';
                } else {
                    message.innerHTML = this.formatMessage(text);
                    message.closest('.message').style.opacity = query ? '0.3' : '1';
                }
            });
        }

        // Carousel methods
        nextSlide() {
            this.currentCarouselIndex = (this.currentCarouselIndex + 1) % this.monasteries.length;
            this.updateCarouselDisplay();
        }

        previousSlide() {
            this.currentCarouselIndex = (this.currentCarouselIndex - 1 + this.monasteries.length) % this.monasteries.length;
            this.updateCarouselDisplay();
        }

        goToSlide(index) {
            this.currentCarouselIndex = index;
            this.updateCarouselDisplay();
        }

        updateCarouselDisplay() {
            if (!this.carouselSlides) return;
            
            const offset = -this.currentCarouselIndex * 100;
            this.carouselSlides.style.transform = `translateX(${offset}%)`;
            
            // Update dots
            document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentCarouselIndex);
            });
        }

        startCarouselAutoplay() {
            this.carouselInterval = setInterval(() => {
                this.nextSlide();
            }, 5000);

            // Pause on hover
            const carousel = document.querySelector('.monastery-carousel');
            if (carousel) {
                carousel.addEventListener('mouseenter', () => {
                    clearInterval(this.carouselInterval);
                });

                carousel.addEventListener('mouseleave', () => {
                    this.startCarouselAutoplay();
                });
            }
        }
    }

    // Initialize the application
    window.monasteryBot = new SikkimMonasteryBot();
    console.log('Chatbot instance created and assigned to window.monasteryBot');
});