class SpendElonMoney {
    constructor() {
        this.totalMoney = 412100000000; // $412.1 billion
        this.moneyLeft = this.totalMoney;
        this.purchases = new Map();
        this.currentCategory = 'all';
        this.receiptNumber = this.generateReceiptNumber();
        
        this.initializeItems();
        this.setupEventListeners();
        this.renderItems();
        this.updateDisplay();
        this.startFunFacts();
        this.updateReceiptDate();
    }

    initializeItems() {
        this.items = [
            // Tech Items
            {
                id: 'iphone16',
                name: 'iPhone 16 Pro Max',
                description: 'Latest flagship smartphone from Apple with titanium design',
                price: 1800,
                image: 'https://images.unsplash.com/photo-1726900303530-8b74f627aa4d?w=400&h=300&fit=crop',
                emoji: '📱',
                category: 'tech',
                sku: 'TECH001'
            },
            {
                id: 'macbook',
                name: 'MacBook Pro M4 Max',
                description: 'Top-tier laptop for professionals and creators',
                price: 8000,
                image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mbp14-spaceblack-select-202410?w=400&h=300&fit=crop',
                emoji: '💻',
                category: 'tech',
                sku: 'TECH002'
            },
            {
                id: 'tesla-plaid',
                name: 'Tesla Model S Plaid',
                description: 'Fastest production Tesla with ludicrous acceleration',
                price: 130000,
                image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=300&fit=crop',
                emoji: '🚗',
                category: 'vehicles',
                sku: 'VEH001'
            },
            {
                id: 'gaming-pc',
                name: 'Ultimate Gaming PC',
                description: 'Custom built with RTX 4090 and latest Intel CPU',
                price: 10000,
                image: 'https://images.unsplash.com/photo-1636488363148-818c08eec89e?w=400&h=300&fit=crop',
                emoji: '🎮',
                category: 'tech',
                sku: 'TECH003'
            },
            {
                id: 'crypto-mining-rig',
                name: 'Crypto Mining Farm',
                description: 'Industrial scale cryptocurrency mining operation',
                price: 2000000,
                image: 'https://images.dngroup.com/image/eyJ3IjoxMTAwLCJmIjoid2VicCIsImsiOiJjZjViYTkzNmNlYjI0OThmMTRhOTVjN2I3ZTRlMGE4OCIsImNyb3AiOlswLDQ4LDE2MDAsODAwXSwiciI6MiwibyI6Imdsb2JhbCJ9?w=400&h=300&fit=crop ',
                emoji: '⛏️',
                category: 'tech',
                sku: 'TECH004'
            },
            {
                id: 'xbox-collection',
                name: 'Xbox Series X',
                description: 'Massive collection of the latest Xbox consoles',
                price: 800,
                image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=300&fit=crop',
                emoji: '🎮',
                category: 'tech',
                sku: 'TECH009'
            },
            {
                id: 'playstation-collection',
                name: 'PlayStation 5',
                description: 'Army of PlayStation 5 consoles for ultimate gaming',
                price: 600,
                image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop',
                emoji: '🎮',
                category: 'tech',
                sku: 'TECH010'
            },
            {
                id: 'nintendo-collection',
                name: 'Nintendo Switch',
                description: 'Portable gaming paradise with Nintendo Switch collection',
                price: 700,
                image: 'https://images.unsplash.com/photo-1612036781124-847f8939b154?w=400&h=300&fit=crop',
                emoji: '🎮',
                category: 'tech',
                sku: 'TECH011'
            },
            {
                id: 's25-ultra',
                name: 'Samsung Galaxy S25 Ultra',
                description: 'Latest flagship Android smartphone with S Pen',
                price: 1500,
                image: 'https://images.moneycontrol.com/static-mcnews/2024/10/20241015115134_S24-Ultra-image.jpg?impolicy=website&width=770&height=431?w=400&h=300&fit=crop',
                emoji: '📱',
                category: 'tech',
                sku: 'TECH012'
            },

            // Vehicles
            {
                id: 'lamborghini',
                name: 'Lamborghini Aventador',
                description: 'Italian supercar with scissor doors and V12 engine',
                price: 500000,
                image: 'https://images.unsplash.com/photo-1618846042668-eda9c8261189?w=400&h=300&fit=crop',
                emoji: '🏎️',
                category: 'vehicles',
                sku: 'VEH002'
            },
            {
                id: 'ferrari',
                name: 'Ferrari LaFerrari',
                description: 'Hybrid hypercar limited to 499 units worldwide',
                price: 1400000,
                image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop',
                emoji: '🏎️',
                category: 'vehicles',
                sku: 'VEH005'
            },
            {
                id: 'bugatti',
                name: 'Bugatti Chiron',
                description: 'One of the fastest cars in the world, 1500 HP',
                price: 3000000,
                image: 'https://images.unsplash.com/photo-1635975229704-0a420e777a56?w=400&h=300&fit=crop',
                emoji: '🏎️',
                category: 'vehicles',
                sku: 'VEH006'
            },
            {
                id: 'Private-Jet',
                name: 'Gulfstream',
                description: 'Luxury private jet for ultimate travel comfort',
                price: 70000000,
                image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=400&h=300&fit=crop',
                emoji: '✈️',
                category: 'vehicles',
                sku: 'VEH003'
            },
            {
                id: 'yacht',
                name: 'Luxury Mega Yacht',
                description: '200ft superyacht with helicopter pad and pool',
                price: 150000000,
                image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=400&h=300&fit=crop',
                emoji: '🛥️',
                category: 'vehicles',
                sku: 'VEH004'
            },
            {
                id: 'submarine',
                name: 'Personal Submarine',
                description: 'Luxury submarine for underwater exploration',
                price: 25000000,
                image: 'https://images.unsplash.com/photo-1632703880023-4aeab3690267?qw=400&h=300&fit=crop',
                emoji: '🚤',
                category: 'vehicles',
                sku: 'VEH007'
            },
            {
                id: 'helicopter',
                name: 'Private Helicopter',
                description: 'Luxury helicopter for personal transportation',
                price: 15000000,
                image: 'https://robbreport.com/wp-content/uploads/2025/01/2.-Bell525_01.jpg?w=800?w=400&h=300&fit=crop',
                emoji: '🚁',
                category: 'vehicles',
                sku: 'VEH010'
            },
            {
                id: 'jet-skis',
                name: 'Fleet of Jet Skis',
                description: 'Collection of high-performance jet skis for water fun',
                price: 500000,
                image: 'https://laketahoethisweek.com/sites/default/files/styles/ob_very_large/public/business/to-do/jet_ski.jpg?itok=iXnl5KCQ?w=400&h=300&fit=crop',
                emoji: '🏄',
                category: 'vehicles',
                sku: 'VEH011'
            },

            // Real Estate
            {
                id: 'mansion',
                name: 'Beverly Hills Mansion',
                description: '50,000 sq ft mansion with 20 bedrooms and pool',
                price: 100000000,
                image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop',
                emoji: '🏰',
                category: 'real-estate',
                sku: 'RE001'
            },
            {
                id: 'penthouse',
                name: 'NYC Penthouse',
                description: 'Luxury penthouse overlooking Central Park',
                price: 75000000,
                image: 'https://images.unsplash.com/photo-1663729312345-9fd2a8ff256c?qw=400&h=300&fit=crop',
                emoji: '🏢',
                category: 'real-estate',
                sku: 'RE003'
            },
            {
                id: 'private-island',
                name: 'Private Tropical Island',
                description: '500-acre private island in the Caribbean',
                price: 200000000,
                image: 'https://images.unsplash.com/photo-1605538032404-d7f061325b90?w=400&h=300&fit=crop',
                emoji: '🏝️',
                category: 'real-estate',
                sku: 'RE002'
            },
            {
                id: 'ski-chalet',
                name: 'Swiss Ski Chalet',
                description: 'Luxury chalet in the Swiss Alps',
                price: 50000000,
                image: 'https://www.skisolutions.com/cdn-cgi/image/format=webp,quality=75,fit=scale-down/app/uploads/2022/01/chalet-zermatt-2.jpg?w=400&h=300&fit=crop',
                emoji: '🏔️',
                category: 'real-estate',
                sku: 'RE004'
            },
            {
                id: 'castle',
                name: 'Medieval Castle',
                description: 'Restored 12th century castle in Scotland',
                price: 80000000,
                image: 'https://www.journee-mondiale.com/en/wp-content/uploads/2025/03/2025-03-24-09-45-34_.webp?w=400&h=300&fit=crop',
                emoji: '🏰',
                category: 'real-estate',
                sku: 'RE005'
            },
            {
                id: 'malibu-mansion',
                name: 'Malibu Beach Mansion',
                description: 'Oceanfront mansion with private beach access',
                price: 200000000,
                image: 'https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1253i215%2Fb2b4m7cczbaz4za13jqytjevz7i215&w=3840&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png?w=400&h=300&fit=crop',
                emoji: '🏖️',
                category: 'real-estate',
                sku: 'RE010'
            },

            // Luxury Items
            {
                id: 'rolex',
                name: 'Rolex Daytona',
                description: 'Iconic luxury watch with precious metals',
                price: 50000,
                image: 'https://images.unsplash.com/photo-1657104996708-044ef9812f85?w=400&h=300&fit=crop',
                emoji: '⌚',
                category: 'luxury',
                sku: 'LUX001'
            },
            {
                id: 'diamond-ring',
                name: '20 Carat Diamond Ring',
                description: 'Flawless diamond ring from Tiffany & Co.',
                price: 2000000,
                image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop',
                emoji: '💍',
                category: 'luxury',
                sku: 'LUX002'
            },
            {
                id: 'art-collection',
                name: 'Picasso Painting',
                description: 'Original artwork by Pablo Picasso',
                price: 100000000,
                image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop',
                emoji: '🎨',
                category: 'luxury',
                sku: 'LUX003'
            },
            {
                id: 'wine-collection',
                name: 'Vintage Wine Collection',
                description: '1000 bottles of the world\'s finest wines',
                price: 5000000,
                image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop',
                emoji: '🍷',
                category: 'luxury',
                sku: 'LUX004'
            },
            {
                id: 'gold-bars',
                name: '100kg Gold Bars',
                description: 'Pure gold bars for investment',
                price: 6500000,
                image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&h=300&fit=crop',
                emoji: '🥇',
                category: 'luxury',
                sku: 'LUX005'
            },
            {
                id: 'golden-toilet',
                name: 'Golden Toilet',
                description: 'Solid gold toilet for the ultimate luxury bathroom',
                price: 1000000,
                image: 'https://royaltoiletry.com/wp-content/uploads/2022/01/premium-gold-toilet5.jpg?w=400&h=300&fit=crop',
                emoji: '🚽',
                category: 'luxury',
                sku: 'LUX008'
            },
            {
                id: 'money-toilet-paper',
                name: 'Money as Toilet Paper',
                description: 'Use actual dollar bills as toilet paper for a year',
                price: 50000000,
                image: 'https://www.shutterstock.com/image-illustration/expensive-toilet-paper-600nw-61577875.jpg?w=400&h=300&fit=crop',
                emoji: '💵',
                category: 'luxury',
                sku: 'LUX009'
            },

            // Experiences
            {
                id: 'space-trip',
                name: 'Trip to Space',
                description: 'Commercial space flight with Blue Origin',
                price: 28000000,
                image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop',
                emoji: '🚀',
                category: 'experiences',
                sku: 'EXP006'
            },
            {
                id: 'world-tour',
                name: 'Around the World Trip',
                description: 'First-class travel to every continent',
                price: 500000,
                image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
                emoji: '🌍',
                category: 'experiences',
                sku: 'EXP007'
            },
            {
                id: 'concert-venue',
                name: 'Private Concert',
                description: 'Hire Taylor Swift for a private performance',
                price: 10000000,
                image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
                emoji: '🎤',
                category: 'experiences',
                sku: 'EXP008'
            },
            {
                id: 'sports-team',
                name: 'Buy an NBA Team',
                description: 'Own your own professional basketball team',
                price: 3000000000,
                image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop',
                emoji: '🏀',
                category: 'experiences',
                sku: 'EXP009'
            },
            {
                id: 'movie-production',
                name: 'Produce a Movie',
                description: 'Fund a Hollywood blockbuster film',
                price: 200000000,
                image: 'https://images.unsplash.com/photo-1705107959242-b2e4228975a0?w=400&h=300&fit=crop',
                emoji: '🎬',
                category: 'experiences',
                sku: 'EXP010'
            },
            {
                id: 'become-president',
                name: 'Become President',
                description: 'Fund the most expensive presidential campaign in history',
                price: 5000000000,
                image: 'https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/gettyimages-938823062?_a=BAVAZGDX0?w=400&h=300&fit=crop',
                emoji: '🇺🇸',
                category: 'experiences',
                sku: 'EXP012'
            },
            {
                id: 'lifetime-meals',
                name: '5-Course Meals for Life',
                description: 'Michelin-star 5-course meals for breakfast, lunch & dinner for life',
                price: 500000000,
                image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop',
                emoji: '🍽️',
                category: 'experiences',
                sku: 'EXP013'
            },
            {
                id: 'hot-air-balloons',
                name: 'All Hot Air Balloons in the World',
                description: 'Own every single hot air balloon on planet Earth',
                price: 1000000000,
                image: 'https://images.unsplash.com/photo-1507608443039-bfde4fbcd142?w=400&h=300&fit=crop',
                emoji: '🎈',
                category: 'experiences',
                sku: 'EXP014'
            },
            {
                id: 'college-degree',
                name: 'Harvard MBA Degree',
                description: 'Get an MBA from Harvard Business School',
                price: 200000,
                image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop',
                emoji: '🎓',
                category: 'experiences',
                sku: 'EXP015'
            },
            {
                id: 'private-army',
                name: 'Private Army',
                description: 'Hire and maintain a private military force',
                price: 5000000000,
                image: 'https://www.securitydegreehub.com/wp-content/uploads/police-g422060657_640.jpg?w=400&h=300&fit=crop',
                emoji: '⚔️',
                category: 'experiences',
                sku: 'EXP016'
            },

            // Companies & Investments
            {
                id: 'restaurant-chain',
                name: 'McDonald\'s Franchise',
                description: 'Own 100 McDonald\'s restaurants',
                price: 250000000,
                image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop',
                emoji: '🍔',
                category: 'companies',
                sku: 'COMP001'
            },
            {
                id: 'tech-startup',
                name: 'Fund a Tech Startup',
                description: 'Invest in the next big tech company',
                price: 100000000,
                image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop',
                emoji: '💡',
                category: 'companies',
                sku: 'COMP007'
            },
            {
                id: 'social-media',
                name: 'Buy Twitter... Again',
                description: 'Acquire the social media platform',
                price: 44000000000,
                image: 'https://images.unsplash.com/photo-1611162618479-ee3d24aaef0b?qw=400&h=300&fit=crop',
                emoji: '🐦',
                category: 'companies',
                sku: 'COMP008'
            },
            {
                id: 'streaming-service',
                name: 'Start Streaming Service',
                description: 'Create a Netflix competitor',
                price: 15000000000,
                image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=300&fit=crop',
                emoji: '📺',
                category: 'companies',
                sku: 'COMP009'
            },
            {
                id: 'airline',
                name: 'Buy an Airline',
                description: 'Own a major international airline',
                price: 25000000000,
                image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop',
                emoji: '✈️',
                category: 'companies',
                sku: 'COMP010'
            },
            {
                id: 'buy-bank',
                name: 'Buy a Major Bank',
                description: 'Own one of the world\'s largest banks',
                price: 200000000,
                image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=400&h=300&fit=crop',
                emoji: '🏦',
                category: 'companies',
                sku: 'COMP012'
            },
            {
                id: 'golf-courses',
                name: '100 Golf Courses',
                description: 'Own the world\'s most prestigious golf courses',
                price: 50000000,
                image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400&h=300&fit=crop',
                emoji: '⛳',
                category: 'companies',
                sku: 'COMP013'
            },
            {
                id: 'nfl-team',
                name: 'NFL Football Team',
                description: 'Own your own National Football League franchise',
                price: 6000000000,
                image: 'https://images.unsplash.com/photo-1730657883624-069f5d0133b4?w=400&h=300&fit=crop ',
                emoji: '🏈',
                category: 'companies',
                sku: 'COMP014'
            },
            {
                id: 'buy-roblox',
                name: 'Buy Roblox Corporation',
                description: 'Acquire the popular gaming platform and metaverse company',
                price: 2500000000,
                image: 'https://i.ytimg.com/vi/n8Hpsy7xOLs/maxresdefault.jpg?w=400&h=300&fit=crop',
                emoji: '🎮',
                category: 'companies',
                sku: 'COMP015'
            },


            // Mega Expensive Items
            {
                id: 'mars-mission',
                name: 'Fund Mars Mission',
                description: 'Private mission to colonize Mars',
                price: 50000000000,
                image: 'https://i0.wp.com/spacenews.com/wp-content/uploads/2022/07/impulse-lander.jpg?fit=780%2C430&quality=89&ssl=1?w=400&h=300&fit=crop',
                emoji: '🚀',
                category: 'companies',
                sku: 'COMP011'
            },
            {
                id: 'end-hunger',
                name: 'End World Hunger',
                description: 'Solve global hunger crisis for a year',
                price: 40000000000,
                image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop',
                emoji: '🌍',
                category: 'experiences',
                sku: 'EXP011'
            },
            {
                id: 'build-city',
                name: 'Build a New City',
                description: 'Construct a smart city from scratch',
                price: 100000000000,
                image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
                emoji: '🏙️',
                category: 'real-estate',
                sku: 'RE006'
            },
            {
                id: 'own-pyramids',
                name: 'Own the Pyramids of Giza',
                description: 'Purchase the ancient pyramids and surrounding land',
                price: 75000000000,
                image: 'https://images.unsplash.com/photo-1600520611035-84157ad4084d?w=400&h=300&fit=crop',
                emoji: '🔺',
                category: 'real-estate',
                sku: 'RE009'
            },

            // New Mega Expensive & Unique Items

            {
                id: 'space-station',
                name: 'International Space Station',
                description: 'Your own personal space station orbiting Earth',
                price: 150000000000,
                image: 'https://images.unsplash.com/photo-1614314007212-0257d6e2f7d8?w=400&h=300&fit=crop',
                emoji: '🛸',
                category: 'experiences',
                sku: 'EXP001'
            },

            {
                id: 'formula1-team',
                name: 'Formula 1 Racing Team',
                description: 'Own and operate your own F1 racing team',
                price: 2000000000,
                image: 'https://images.unsplash.com/photo-1623258406180-df4c68d0798f?w=400&h=300&fit=crop',
                emoji: '🏎️',
                category: 'experiences',
                sku: 'EXP003'
            },
            {
                id: 'cruise-ship',
                name: 'Luxury Cruise Ship',
                description: 'Own the world\'s largest luxury cruise liner',
                price: 1200000000,
                image: 'https://skift.com/wp-content/uploads/2023/07/2110-96cce48cf4e.jpeg?w=400&h=300&fit=crop',
                emoji: '🚢',
                category: 'vehicles',
                sku: 'VEH008'
            },
            {
                id: 'dinosaur-skeleton',
                name: 'T-Rex Skeleton',
                description: 'Complete Tyrannosaurus Rex fossil skeleton',
                price: 32000000,
                image: 'https://images.unsplash.com/photo-1577471486886-1e34bbae345f?w=400&h=300&fit=crop',
                emoji: '🦕',
                category: 'luxury',
                sku: 'LUX006'
            },

            {
                id: 'amazon-rainforest',
                name: '1000 Acres Amazon Rainforest',
                description: 'Purchase and protect Amazon rainforest land',
                price: 50000000,
                image: 'https://images.unsplash.com/photo-1591081658714-f576fb7ea3ed?w=400&h=300&fit=crop',
                emoji: '🌳',
                category: 'real-estate',
                sku: 'RE007'
            },
            {
                id: 'satellite-network',
                name: 'Global Satellite Network',
                description: 'Deploy 10,000 satellites for global internet',
                price: 60000000000,
                image: 'https://plus.unsplash.com/premium_photo-1680391379580-4d24007be95c?w=400&h=300&fit=crop',
                emoji: '🛰️',
                category: 'tech',
                sku: 'TECH006'
            },
            {
                id: 'movie-studio',
                name: 'Hollywood Movie Studio',
                description: 'Own a major Hollywood film production studio',
                price: 5000000000,
                image: 'https://images.unsplash.com/photo-1612544409025-e1f6a56c1152?w=400&h=300&fit=crop',
                emoji: '🎬',
                category: 'companies',
                sku: 'COMP003'
            },
            {
                id: 'artificial-island',
                name: 'Artificial Island',
                description: 'Build your own artificial island in international waters',
                price: 2000000000,
                image: 'https://images.unsplash.com/photo-1670488890925-53bf45bc30ac?w=400&h=300&fit=crop',
                emoji: '🏝️',
                category: 'real-estate',
                sku: 'RE008'
            },

            {
                id: 'super-yacht-fleet',
                name: 'Fleet of 10 Super Yachts',
                description: 'Own an entire fleet of luxury superyachts',
                price: 2000000000,
                image: 'https://image.yachtbuyer.com/w1440/h560/qh/cs0-1018-4032-1552/m1/ow-1/k10adc6dd/article/content/2791496/a-wide-angle-photo-of-monaco-yacht-show-2024-and-039-s-port-hercule-with-many-superyachts-at-berth.jpg?w=400&h=300&fit=crop',
                emoji: '⛵',
                category: 'vehicles',
                sku: 'VEH009'
            },
            {
                id: 'quantum-computer',
                name: 'Quantum Computer',
                description: 'State-of-the-art quantum computing system',
                price: 100000000,
                image: 'https://images.unsplash.com/photo-1681908571122-97f349e1ace0?w=400&h=300&fit=crop',
                emoji: '🖥️',
                category: 'tech',
                sku: 'TECH008'
            },
            {
                id: 'crown-jewels',
                name: 'Replica Crown Jewels',
                description: 'Perfect replicas of the British Crown Jewels',
                price: 500000000,
                image: 'https://images.unsplash.com/photo-1742189415527-9149c0c546c8?w=400&h=300&fit=crop',
                emoji: '👑',
                category: 'luxury',
                sku: 'LUX007'
            },

            {
                id: 'theme-park',
                name: 'Disney-Style Theme Park',
                description: 'Build and operate your own massive theme park',
                price: 4000000000,
                image: 'https://images.unsplash.com/photo-1661231134304-cbff0c058932?w=400&h=300&fit=crop',
                emoji: '🎢',
                category: 'companies',
                sku: 'COMP004'
            },
            {
                id: 'diamond-mine',
                name: 'Diamond Mine',
                description: 'Own an entire diamond mining operation',
                price: 3000000000,
                image: 'https://www.bus-ex.com/sites/default/files/2019-09/Diavik_1.jpg?w=400&h=300&fit=crop',
                emoji: '💎',
                category: 'companies',
                sku: 'COMP005'
            },
            {
                id: 'olympic-games',
                name: 'Host Olympic Games',
                description: 'Fund and host your own private Olympic Games',
                price: 1000000000,
                image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop',
                emoji: '🏅',
                category: 'experiences',
                sku: 'EXP005'
            },
            {
                id: 'university',
                name: 'Ivy League University',
                description: 'Found and endow a world-class university',
                price: 1500000000,
                image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop',
                emoji: '🎓',
                category: 'companies',
                sku: 'COMP006'
            }
        ];
    }

    setupEventListeners() {
        // Category buttons
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectCategory(e.target.dataset.category);
            });
        });

        // Receipt toggle
        document.getElementById('receipt-toggle').addEventListener('click', () => {
            this.toggleReceipt();
        });

        // Close receipt
        document.getElementById('close-receipt').addEventListener('click', () => {
            this.closeReceipt();
        });

        // Clear all purchases
        document.getElementById('clear-all').addEventListener('click', () => {
            this.clearAllPurchases();
        });
    }

    selectCategory(category) {
        this.currentCategory = category;
        
        // Update active category button
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
        
        this.renderItems();
    }

    renderItems() {
        const itemsGrid = document.getElementById('items-grid');
        itemsGrid.innerHTML = '';

        const filteredItems = this.currentCategory === 'all' 
            ? this.items 
            : this.items.filter(item => item.category === this.currentCategory);

        filteredItems.forEach(item => {
            const itemCard = this.createItemCard(item);
            itemsGrid.appendChild(itemCard);
        });
    }

    createItemCard(item) {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.setAttribute('data-category', item.category);
        
        const quantity = this.purchases.get(item.id) || 0;
        const canAfford = this.moneyLeft >= item.price;
        
        card.innerHTML = `
            <div class="item-image">
                ${item.image ? 
                    `<img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                     <div class="emoji-fallback" style="display:none;">${item.emoji}</div>` 
                    : `<div class="emoji-fallback">${item.emoji}</div>`}
            </div>
            <div class="item-content">
                <h3 class="item-name">${item.name}</h3>
                <p class="item-description">${item.description}</p>
                <div class="item-price">$${this.formatNumber(item.price)}</div>
                <div class="item-actions">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="app.changeQuantity('${item.id}', -1)" ${quantity === 0 ? 'disabled' : ''}>-</button>
                        <input type="number" class="quantity-input" value="${quantity}" min="0" 
                               onchange="app.setQuantity('${item.id}', this.value)" 
                               onkeydown="if(event.key==='Enter') this.blur()">
                        <button class="quantity-btn" onclick="app.changeQuantity('${item.id}', 1)" ${!canAfford ? 'disabled' : ''}>+</button>
                    </div>
                    <button class="buy-btn" onclick="app.buyItem('${item.id}')" ${!canAfford ? 'disabled' : ''}>
                        ${canAfford ? 'Buy' : 'Too Expensive'}
                    </button>
                </div>
            </div>
        `;
        
        return card;
    }

    changeQuantity(itemId, change) {
        const item = this.items.find(i => i.id === itemId);
        const currentQuantity = this.purchases.get(itemId) || 0;
        const newQuantity = Math.max(0, currentQuantity + change);
        
        if (change > 0) {
            // Buying
            if (this.moneyLeft >= item.price) {
                this.moneyLeft -= item.price;
                this.purchases.set(itemId, newQuantity);
                this.showPurchaseEffect();
            }
        } else {
            // Selling
            if (currentQuantity > 0) {
                this.moneyLeft += item.price;
                if (newQuantity === 0) {
                    this.purchases.delete(itemId);
                } else {
                    this.purchases.set(itemId, newQuantity);
                }
            }
        }
        
        this.updateDisplay();
        this.renderItems();
        this.updateReceipt();
    }

    buyItem(itemId) {
        this.changeQuantity(itemId, 1);
    }

    setQuantity(itemId, newQuantity) {
        const item = this.items.find(i => i.id === itemId);
        const currentQuantity = this.purchases.get(itemId) || 0;
        const targetQuantity = Math.max(0, parseInt(newQuantity) || 0);
        const quantityDiff = targetQuantity - currentQuantity;
        
        if (quantityDiff > 0) {
            // Buying more items
            const totalCost = item.price * quantityDiff;
            if (this.moneyLeft >= totalCost) {
                this.moneyLeft -= totalCost;
                this.purchases.set(itemId, targetQuantity);
                this.showPurchaseEffect();
            } else {
                // Can't afford that many, calculate max affordable
                const maxAffordable = Math.floor(this.moneyLeft / item.price);
                const newTotal = currentQuantity + maxAffordable;
                if (maxAffordable > 0) {
                    this.moneyLeft -= item.price * maxAffordable;
                    this.purchases.set(itemId, newTotal);
                    this.showPurchaseEffect();
                }
            }
        } else if (quantityDiff < 0) {
            // Selling items
            const refund = item.price * Math.abs(quantityDiff);
            this.moneyLeft += refund;
            if (targetQuantity === 0) {
                this.purchases.delete(itemId);
            } else {
                this.purchases.set(itemId, targetQuantity);
            }
        }
        
        this.updateDisplay();
        this.renderItems();
        this.updateReceipt();
    }

    showPurchaseEffect() {
        const moneyElement = document.getElementById('money-left');
        moneyElement.classList.add('money-animation');
        setTimeout(() => moneyElement.classList.remove('money-animation'), 500);
    }

    updateDisplay() {
        document.getElementById('money-left').textContent = `$${this.formatNumber(this.moneyLeft)}`;
        document.getElementById('items-count').textContent = Array.from(this.purchases.values()).reduce((a, b) => a + b, 0);
        document.getElementById('total-spent').textContent = `$${this.formatNumber(this.totalMoney - this.moneyLeft)}`;
        
        // Update percentage spent
        const percentSpent = ((this.totalMoney - this.moneyLeft) / this.totalMoney * 100).toFixed(6);
        document.getElementById('percent-spent').textContent = `${percentSpent}%`;
    }

    toggleReceipt() {
        const sidebar = document.getElementById('receipt-sidebar');
        sidebar.classList.toggle('open');
        this.updateReceipt();
    }

    closeReceipt() {
        document.getElementById('receipt-sidebar').classList.remove('open');
    }

    updateReceipt() {
        const content = document.getElementById('receipt-content');
        
        if (this.purchases.size === 0) {
            content.innerHTML = `
                <div class="receipt-date" id="receipt-date">${this.getReceiptDateTime()}</div>
                <div class="cashier-info">CASHIER: ELON M. | REG: 001</div>
                <div class="receipt-divider">================================</div>
                <p class="no-purchases">No purchases yet. Start spending!</p>
            `;
            return;
        }
        
        let html = `
            <div class="receipt-date">${this.getReceiptDateTime()}</div>
            <div class="cashier-info">CASHIER: ELON M. | REG: 001 | TXN: ${this.receiptNumber}</div>
            <div class="receipt-divider">================================</div>
        `;
        
        this.purchases.forEach((quantity, itemId) => {
            const item = this.items.find(i => i.id === itemId);
            const total = item.price * quantity;
            const unitPrice = this.formatReceiptPrice(item.price);
            const totalPrice = this.formatReceiptPrice(total);
            
            html += `
                <div class="receipt-item">
                    <div class="item-line-1">
                        <span class="item-name-code">${item.sku || 'ITEM'} ${item.name.toUpperCase()}</span>
                        <span class="item-total">${totalPrice}</span>
                    </div>
                    <div class="item-line-2">
                        <span class="item-details">${quantity} @ ${unitPrice}</span>
                        <span class="item-calculation">${quantity > 1 ? `${quantity}x${unitPrice}` : ''}</span>
                    </div>
                </div>
            `;
        });
        
        content.innerHTML = html;
        
        // Update totals
        const subtotal = this.totalMoney - this.moneyLeft;
        const tax = subtotal * 0.085; // 8.5% luxury tax
        const total = subtotal + tax;
        
        document.getElementById('subtotal-amount').textContent = this.formatReceiptPrice(subtotal);
        document.getElementById('tax-amount').textContent = this.formatReceiptPrice(tax);
        document.getElementById('total-spent').textContent = this.formatReceiptPrice(total);
    }

    clearAllPurchases() {
        this.moneyLeft = this.totalMoney;
        this.purchases.clear();
        this.updateDisplay();
        this.renderItems();
        this.updateReceipt();
    }

    formatNumber(num) {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1) + 'B';
        } else if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(0) + 'K';
        }
        return num.toLocaleString();
    }

    generateReceiptNumber() {
        return Math.floor(Math.random() * 9000000) + 1000000;
    }

    updateReceiptDate() {
        const now = new Date();
        document.getElementById('receipt-date').textContent = this.getReceiptDateTime();
    }

    getReceiptDateTime() {
        const now = new Date();
        const date = now.toLocaleDateString('en-US');
        const time = now.toLocaleTimeString('en-US', { hour12: false });
        return `${date} ${time}`;
    }

    formatReceiptPrice(amount) {
        if (amount >= 1000000000) {
            return `$${(amount / 1000000000).toFixed(2)}B`;
        } else if (amount >= 1000000) {
            return `$${(amount / 1000000).toFixed(2)}M`;
        } else if (amount >= 1000) {
            return `$${(amount / 1000).toFixed(2)}K`;
        }
        return `$${amount.toFixed(2)}`;
    }

    startFunFacts() {
        const facts = [
            "Elon could buy 824 Lamborghinis and still have $411B left!",
            "Jeff Bezos would need to work 2,500 years to match Elon's wealth!",
            "You could build 2,747 International Space Stations!",
            "Elon's wealth could fund NASA for 15+ years straight!",
            "You could give every person in America $1,245!",
            "This money could buy 229 million iPhone 16 Pro Max phones!",
            "You could purchase 2,747 luxury mega yachts!",
            "Elon could buy Twitter 9.4 times with this money!",
            "You could fund 8 Mars missions with this wealth!",
            "Buy 2,061 private tropical islands in the Caribbean!",
            "You could host 412 Olympic Games with this money!",
            "Own 206 Formula 1 racing teams simultaneously!",
            "Purchase 82 Hollywood movie studios!",
            "Buy 515,125 Xbox Series X consoles!",
            "Own all the pyramids of Giza 5.5 times over!",
            "Run for president 82 times with maximum campaign spending!",
            "Buy 2,061 major banks and still have billions left!",
            "Own every hot air balloon on Earth 412 times!",
            "Fund 5-course meals for 824 people for their entire lives!",
            "Buy 412,100 golden toilets for ultimate luxury!",
            "Purchase 8,242 golf courses worldwide!",
            "Buy Roblox 165 times and dominate the metaverse!",
            "Own 68 NFL football teams - that's 2x the entire league!",
            "Purchase 25,606 Tesla Model S Plaid vehicles!",
            "Buy 137 Bugatti Chirons and still be a billionaire!"
        ];

        let currentFactIndex = 0;
        setInterval(() => {
            document.getElementById('current-fact').textContent = facts[currentFactIndex];
            currentFactIndex = (currentFactIndex + 1) % facts.length;
        }, 5000);
    }
}

// Initialize the app
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new SpendElonMoney();
}); 