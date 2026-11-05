export interface ImageAsset {
  id: string;
  title: string;
  src: string;
  alt: string;
  category:
    | "hero"
    | "cottages"
    | "interiors"
    | "mist-mountains"
    | "tea-plantations"
    | "kolukkumalai-jeep"
    | "sunrise-sunset"
    | "trekking"
    | "boating"
    | "forests-waterfalls"
    | "sandalwood"
    | "culture-food"
    | "destinations";
  location: string;
  coordinates?: string;
  elevation?: string;
  aspectRatio: "landscape" | "portrait" | "square" | "cinematic";
  credit: string;
  sourceUrl?: string;
  isPropertyPlaceholder?: boolean;
  placeholderNote?: string;
  palette: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

/**
 * CENTRALIZED IMAGE ASSET CONFIGURATION — WOODHOUSE (Suryanelli, Munnar, Kerala)
 *
 * All visual assets across the website are managed from this single registry.
 * - Regional landscape photographs reference Wikimedia Commons / Unsplash high-resolution photography of Munnar, Kolukkumalai, Mattupetty, Chinnar, and the Western Ghats.
 * - Property-specific photographs (WOODHOUSE cottages & interiors) are explicitly flagged with `isPropertyPlaceholder: true` so another property is never misrepresented as WOODHOUSE prior to final on-site architectural photography delivery.
 */
export const IMAGE_ASSETS: Record<string, ImageAsset> = {
  // 01. HERO & SURYANELLI / MUNNAR MIST
  heroMunnarMist: {
    id: "hero-munnar-mist",
    title: "Morning Mist Over Suryanelli & High-Range Tea Slopes",
    src: "https://images.unsplash.com/photo-1455157823797-3019317cbcf0?auto=format&fit=crop&w=2200&q=85",
    alt: "Dramatic morning mist rolling across the emerald tea plantations and mountain ridges of Munnar and Suryanelli in the Western Ghats",
    category: "hero",
    location: "Suryanelli — Munnar High Range, Idukki",
    coordinates: "10°03'24\"N 77°11'42\"E",
    elevation: "1,520m ASL",
    aspectRatio: "cinematic",
    credit: "Unsplash / Western Ghats Archive",
    isPropertyPlaceholder: false,
    palette: { primary: "#1B2B22", secondary: "#394F41", accent: "#A18A6B" },
  },

  introMountainValley: {
    id: "intro-mountain-valley",
    title: "Tea Ridges & Rolling Cloud Banks of the High Range",
    src: "https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?auto=format&fit=crop&w=1800&q=85",
    alt: "Layered mountain ridges and manicured tea estates bathed in soft highland light near Suryanelli, Munnar",
    category: "tea-plantations",
    location: "Suryanelli Valley, Munnar",
    coordinates: "10°03'18\"N 77°11'50\"E",
    elevation: "1,490m ASL",
    aspectRatio: "portrait",
    credit: "Unsplash / Munnar Highlands",
    isPropertyPlaceholder: false,
    palette: { primary: "#24382D", secondary: "#526356", accent: "#EDE7D9" },
  },

  introTimberDetail: {
    id: "intro-timber-detail",
    title: "Warm Timber Joinery & Mountain Veranda Atmosphere",
    src: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1400&q=80",
    alt: "Warm natural timber architecture framed against misty mountain conifers and highland air",
    category: "cottages",
    location: "Suryanelli, Kerala",
    aspectRatio: "square",
    credit: "Temporary Architectural Mood Placeholder",
    isPropertyPlaceholder: true,
    placeholderNote: "Temporary Architectural Mood Placeholder — Replace with verified WOODHOUSE exterior detail",
    palette: { primary: "#3A2E25", secondary: "#24382D", accent: "#A18A6B" },
  },

  // 02. THE STAY / WOODHOUSE COTTAGES (Explicitly marked as temporary placeholders per guidelines)
  cottageCanopyExterior: {
    id: "cottage-canopy-exterior",
    title: "The Timber Pavilion — Exterior Study",
    src: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1800&q=85",
    alt: "Timber-clad mountain cottage nestled amidst misty forest trees and sloping terrain",
    category: "cottages",
    location: "WOODHOUSE — Suryanelli",
    elevation: "1,500m ASL",
    aspectRatio: "landscape",
    credit: "Temporary Cottage Placeholder (Replace in lib/images.ts)",
    isPropertyPlaceholder: true,
    placeholderNote: "Temporary Cottage Placeholder — Replace with verified WOODHOUSE photography",
    palette: { primary: "#2D261E", secondary: "#24382D", accent: "#C2AE91" },
  },

  cottageRidgeInterior: {
    id: "cottage-ridge-interior",
    title: "Warm Wood Bedroom & Valley-Facing Glass",
    src: "https://images.unsplash.com/photo-1540518614846-7ede433c457?auto=format&fit=crop&w=1600&q=85",
    alt: "Minimalist warm timber bedroom interior with natural linen textures and soft mountain light",
    category: "interiors",
    location: "WOODHOUSE — Suryanelli",
    aspectRatio: "landscape",
    credit: "Temporary Interior Placeholder (Replace in lib/images.ts)",
    isPropertyPlaceholder: true,
    placeholderNote: "Temporary Interior Placeholder — Replace with verified WOODHOUSE bedroom photography",
    palette: { primary: "#3E3227", secondary: "#A18A6B", accent: "#EDE7D9" },
  },

  cottageVerandaMist: {
    id: "cottage-veranda-mist",
    title: "Private Deck & Morning Tea Overlooking the Mist",
    src: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1600&q=85",
    alt: "Wooden mountain cabin veranda overlooking quiet highland mist and green slopes",
    category: "cottages",
    location: "WOODHOUSE — Suryanelli",
    aspectRatio: "portrait",
    credit: "Temporary Veranda Placeholder (Replace in lib/images.ts)",
    isPropertyPlaceholder: true,
    placeholderNote: "Temporary Veranda Placeholder — Replace with verified WOODHOUSE deck photography",
    palette: { primary: "#29352C", secondary: "#7D6A54", accent: "#EDE7D9" },
  },

  cottageLivinghearth: {
    id: "cottage-living-hearth",
    title: "Timber Living Lounge & Reading Alcove",
    src: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1600&q=85",
    alt: "Crafted wooden interior living space designed for slow mountain evenings",
    category: "interiors",
    location: "WOODHOUSE — Suryanelli",
    aspectRatio: "portrait",
    credit: "Temporary Living Space Placeholder (Replace in lib/images.ts)",
    isPropertyPlaceholder: true,
    placeholderNote: "Temporary Living Space Placeholder — Replace with verified WOODHOUSE interior photography",
    palette: { primary: "#382C21", secondary: "#A18A6B", accent: "#F7F5EF" },
  },

  // 03. EXPERIENCES — THE 6 CORE ADVENTURES
  expJeepSafari: {
    id: "exp-jeep-safari",
    title: "4x4 Off-Road Ascent Towards Kolukkumalai",
    src: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1800&q=85",
    alt: "Rugged 4x4 jeep climbing rocky mountain estate trails through morning mist toward Kolukkumalai",
    category: "kolukkumalai-jeep",
    location: "Suryanelli — Kolukkumalai Trail",
    elevation: "1,500m to 2,400m ASL",
    aspectRatio: "landscape",
    credit: "Unsplash / High-Range Off-Road Archive",
    isPropertyPlaceholder: false,
    palette: { primary: "#24382D", secondary: "#5E5343", accent: "#EDE7D9" },
  },

  expTrekking: {
    id: "exp-trekking",
    title: "High-Altitude Shola & Grassland Ridges",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=85",
    alt: "Mountain ridge trekking trail above low clouds in the Western Ghats",
    category: "trekking",
    location: "Chokramudi & Western Ghats Ridges",
    elevation: "2,195m ASL",
    aspectRatio: "landscape",
    credit: "Unsplash / Western Ghats Trails",
    isPropertyPlaceholder: false,
    palette: { primary: "#1F3128", secondary: "#6C7A69", accent: "#EDE7D9" },
  },

  expBoating: {
    id: "exp-boating",
    title: "Still Waters of Anayirankal & Highland Reservoirs",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1800&q=85",
    alt: "Calm mountain reservoir surrounded by forested hills and tea slopes at dawn",
    category: "boating",
    location: "Anayirankal & Mattupetty Waters",
    elevation: "1,560m ASL",
    aspectRatio: "landscape",
    credit: "Unsplash / Highland Reservoir Study",
    isPropertyPlaceholder: false,
    palette: { primary: "#1E3330", secondary: "#4D645B", accent: "#EDE7D9" },
  },

  expCycling: {
    id: "exp-cycling",
    title: "Winding Tea-Estate Contours by Bicycle",
    src: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=1800&q=85",
    alt: "Cyclist riding along quiet misty mountain roads lined with emerald tea gardens",
    category: "tea-plantations",
    location: "Suryanelli — Chinnakkanal Estate Roads",
    elevation: "1,510m ASL",
    aspectRatio: "portrait",
    credit: "Unsplash / Mountain Cycling",
    isPropertyPlaceholder: false,
    palette: { primary: "#24382D", secondary: "#728069", accent: "#A18A6B" },
  },

  expNatureWalks: {
    id: "exp-nature-walks",
    title: "Quiet Footpaths Through Tea & Cardamom Canopy",
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1800&q=85",
    alt: "Sunlight filtering through tall forest trees and misty woodland trails in Kerala",
    category: "forests-waterfalls",
    location: "Suryanelli Cardamom & Shola Edge",
    elevation: "1,480m ASL",
    aspectRatio: "portrait",
    credit: "Unsplash / Forest Canopy Archive",
    isPropertyPlaceholder: false,
    palette: { primary: "#1D2E24", secondary: "#526352", accent: "#C2AE91" },
  },

  expSunrise: {
    id: "exp-sunrise",
    title: "First Gold Over the Kolukkumalai Sea of Clouds",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85",
    alt: "Golden dawn breaking over a dense sea of clouds between dark mountain peaks",
    category: "sunrise-sunset",
    location: "Kolukkumalai Sunrise Point",
    elevation: "2,400m ASL (7,900 ft)",
    aspectRatio: "cinematic",
    credit: "Unsplash / High Altitude Dawn",
    isPropertyPlaceholder: false,
    palette: { primary: "#282722", secondary: "#A18A6B", accent: "#EDE7D9" },
  },

  // 04. THE 10 DESTINATIONS OF THE MUNNAR & SURYANELLI CIRCUIT
  destSuryanelli: {
    id: "dest-suryanelli",
    title: "Suryanelli High-Range Settlement & Tea Valley",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Munnar_Overview.jpg",
    alt: "Panoramic view of high-altitude tea gardens and mist-clad ridges in Suryanelli near Munnar",
    category: "destinations",
    location: "Suryanelli, Idukki District",
    coordinates: "10°03'24\"N 77°11'42\"E",
    elevation: "1,480m — 1,650m ASL",
    aspectRatio: "landscape",
    credit: "Wikimedia Commons / Munnar Overview",
    sourceUrl: "https://commons.wikimedia.org/wiki/Category:Munnar",
    isPropertyPlaceholder: false,
    palette: { primary: "#24382D", secondary: "#5A7059", accent: "#EDE7D9" },
  },

  destKolukkumalai: {
    id: "dest-kolukkumalai",
    title: "Kolukkumalai — The World's Highest Organic Tea Estate",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Kolukkumalai_Top_View.jpg",
    alt: "Top view of Kolukkumalai mountain peak and high-altitude tea estates above the clouds",
    category: "destinations",
    location: "Kolukkumalai, Bordering Suryanelli",
    coordinates: "10°04'45\"N 77°13'19\"E",
    elevation: "2,400m ASL (7,900 ft)",
    aspectRatio: "landscape",
    credit: "Wikimedia Commons / Kolukkumalai Top View",
    sourceUrl: "https://commons.wikimedia.org/wiki/Category:Kolukkumalai",
    isPropertyPlaceholder: false,
    palette: { primary: "#1E3026", secondary: "#84755E", accent: "#EDE7D9" },
  },

  destPhantomHills: {
    id: "dest-phantom-hills",
    title: "Phantom Hills (Pappadampara) Sunset Ridge",
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1800&q=85",
    alt: "Dramatic rocky monolith and mountain ridge silhouetted against amber evening skies",
    category: "destinations",
    location: "Near Suryanelli / Chinnakkanal",
    coordinates: "10°02'55\"N 77°11'10\"E",
    elevation: "1,620m ASL",
    aspectRatio: "portrait",
    credit: "Unsplash / High Range Ridge",
    isPropertyPlaceholder: false,
    palette: { primary: "#282722", secondary: "#6E5D4F", accent: "#C2AE91" },
  },

  destAnayirankal: {
    id: "dest-anayirankal",
    title: "Anayirankal Dam & Forest Reservoir",
    src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1800&q=85",
    alt: "Serene blue reservoir waters framed by dense shola forest and tea hills at Anayirankal",
    category: "destinations",
    location: "Anayirankal, Chinnakkanal — Munnar",
    coordinates: "10°00'50\"N 77°12'26\"E",
    elevation: "1,560m ASL",
    aspectRatio: "landscape",
    credit: "Unsplash / Reservoir & Tea Hills",
    sourceUrl: "https://www.incredibleindia.gov.in/en/kerala/munnar/anayirankal",
    isPropertyPlaceholder: false,
    palette: { primary: "#1C2E2B", secondary: "#4E6861", accent: "#EDE7D9" },
  },

  destChokramudi: {
    id: "dest-chokramudi",
    title: "Chokramudi Peak — High Grassland Promontory",
    src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1800&q=85",
    alt: "Steep granite peak and montane grasslands rising into swirling mist at Chokramudi",
    category: "destinations",
    location: "Bison Valley — Munnar Route",
    coordinates: "10°02'14\"N 77°06'28\"E",
    elevation: "2,195m ASL (7,200 ft)",
    aspectRatio: "portrait",
    credit: "Unsplash / Montane Peak Study",
    isPropertyPlaceholder: false,
    palette: { primary: "#26332B", secondary: "#798272", accent: "#EDE7D9" },
  },

  destMeesapulimala: {
    id: "dest-meesapulimala",
    title: "Meesapulimala — Second Highest Peak of the Western Ghats",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c4/The_Beautiful_landscape_view_from_the_Kolukkumalai_Peak%2C_Munnar.jpg",
    alt: "Sweeping high-altitude grassland valleys and cloud-draped peaks of the Meesapulimala range",
    category: "destinations",
    location: "Silent Valley / Rhodo Valley, Munnar",
    coordinates: "10°05'47\"N 77°12'12\"E",
    elevation: "2,640m ASL (8,661 ft)",
    aspectRatio: "landscape",
    credit: "Wikimedia Commons / High Range Peaks",
    isPropertyPlaceholder: false,
    palette: { primary: "#1F3127", secondary: "#6B7B65", accent: "#EDE7D9" },
  },

  destMattupetty: {
    id: "dest-mattupetty",
    title: "Mattupetty Lake & Masonry Dam",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fb/MattupettyLake%2CMunnar.JPG",
    alt: "Calm waters of Mattupetty Lake flanked by green rolling hills and eucalyptus trees in Munnar",
    category: "destinations",
    location: "Mattupetty, Munnar",
    coordinates: "10°06'22\"N 77°07'27\"E",
    elevation: "1,700m ASL",
    aspectRatio: "landscape",
    credit: "Wikimedia Commons / Mattupetty Lake",
    isPropertyPlaceholder: false,
    palette: { primary: "#213631", secondary: "#587066", accent: "#EDE7D9" },
  },

  destKundala: {
    id: "dest-kundala",
    title: "Kundala Arch Dam & Mist-Clad Lake",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1800&q=85",
    alt: "Morning mist rising off Kundala Lake surrounded by forested slopes and cherry blossom hills",
    category: "destinations",
    location: "Kundala, Munnar — Top Station Road",
    coordinates: "10°08'35\"N 77°11'55\"E",
    elevation: "1,750m ASL",
    aspectRatio: "portrait",
    credit: "Unsplash / Highland Lake Mist",
    isPropertyPlaceholder: false,
    palette: { primary: "#24382D", secondary: "#7C8776", accent: "#F7F5EF" },
  },

  destMarayoor: {
    id: "dest-marayoor",
    title: "Marayoor — Natural Sandalwood Reserve & Dolmen Landscape",
    src: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1800&q=85",
    alt: "Sunlit dry-deciduous sandalwood grove and ancient forest landscape in the rain-shadow valley of Marayoor",
    category: "sandalwood",
    location: "Marayoor, Idukki District",
    coordinates: "10°16'35\"N 77°09'36\"E",
    elevation: "1,000m ASL",
    aspectRatio: "landscape",
    credit: "Unsplash / Dry Deciduous Forest Reserve",
    sourceUrl: "https://kfdc.kerala.gov.in/",
    isPropertyPlaceholder: false,
    palette: { primary: "#2E3A29", secondary: "#8C7658", accent: "#EDE7D9" },
  },

  destChinnar: {
    id: "dest-chinnar",
    title: "Chinnar Wildlife Sanctuary & Thoovanam River Corridor",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Chinnar_Wildlife_Sanctuary_IMG_20170625_140523_%28106%29.jpg",
    alt: "Dry deciduous forest and rocky river terrain inside Chinnar Wildlife Sanctuary on the eastern slopes of the Western Ghats",
    category: "destinations",
    location: "Chinnar, Marayoor — Udumalpet Route",
    coordinates: "10°18'16\"N 77°13'22\"E",
    elevation: "500m — 2,300m ASL",
    aspectRatio: "landscape",
    credit: "Wikimedia Commons / Chinnar Wildlife Sanctuary",
    isPropertyPlaceholder: false,
    palette: { primary: "#333B2A", secondary: "#8A7A5E", accent: "#EDE7D9" },
  },

  // 05. SANDALWOOD HERITAGE & BEYOND THE STAY
  sandalwoodBotanical: {
    id: "sandalwood-botanical",
    title: "Santalum Album — Heartwood & Canopy Study",
    src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1800&q=85",
    alt: "Ancient tree canopy and filtered morning light in a protected forest conservation zone",
    category: "sandalwood",
    location: "Marayoor & High-Range Belt, Idukki",
    aspectRatio: "portrait",
    credit: "Unsplash / Forest Conservation Study",
    isPropertyPlaceholder: false,
    palette: { primary: "#24382D", secondary: "#A18A6B", accent: "#EDE7D9" },
  },

  sandalwoodNursery: {
    id: "sandalwood-nursery",
    title: "Living Heritage — Forest Saplings & Soil Ecology",
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1600&q=85",
    alt: "Close botanical view of young forest foliage and rich earth in the Western Ghats",
    category: "sandalwood",
    location: "Swargamedu / Senapathy & Marayoor Region",
    aspectRatio: "square",
    credit: "Unsplash / Botanical Conservation",
    isPropertyPlaceholder: false,
    palette: { primary: "#223428", secondary: "#7C6A50", accent: "#EDE7D9" },
  },

  // 06. ADDITIONAL VISUAL JOURNAL / GALLERY ASSETS
  galleryWaterfall: {
    id: "gallery-waterfall",
    title: "Monsoon Cascades of the High Range",
    src: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1600&q=85",
    alt: "Forest waterfall cascading over dark granite rocks surrounded by lush ferns",
    category: "forests-waterfalls",
    location: "Lakkam / Thoovanam Corridor",
    aspectRatio: "portrait",
    credit: "Unsplash / Western Ghats Cascades",
    isPropertyPlaceholder: false,
    palette: { primary: "#1E3028", secondary: "#637368", accent: "#EDE7D9" },
  },

  gallerySpicesAndFood: {
    id: "gallery-spices-food",
    title: "High-Range Cardamom, Pepper & Slow Harvest Table",
    src: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1600&q=85",
    alt: "Whole spices, green cardamom, black pepper and warm earthen culinary textures from Idukki",
    category: "culture-food",
    location: "Idukki Spice Belt, Suryanelli",
    aspectRatio: "square",
    credit: "Unsplash / Regional Harvest Study",
    isPropertyPlaceholder: false,
    palette: { primary: "#3A2D21", secondary: "#A18A6B", accent: "#EDE7D9" },
  },

  galleryTeaPlucking: {
    id: "gallery-tea-contours",
    title: "Emerald Contours After Monsoon Rain",
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1800&q=85",
    alt: "Intricate geometric footpaths winding through deep green tea bushes in Munnar",
    category: "tea-plantations",
    location: "Lockhart & Suryanelli Estates",
    aspectRatio: "landscape",
    credit: "Unsplash / Munnar Estate Contours",
    isPropertyPlaceholder: false,
    palette: { primary: "#203628", secondary: "#4C6950", accent: "#EDE7D9" },
  },
};

export const GALLERY_COLLECTION: ImageAsset[] = [
  IMAGE_ASSETS.heroMunnarMist,
  IMAGE_ASSETS.cottageCanopyExterior,
  IMAGE_ASSETS.destKolukkumalai,
  IMAGE_ASSETS.expJeepSafari,
  IMAGE_ASSETS.cottageRidgeInterior,
  IMAGE_ASSETS.expSunrise,
  IMAGE_ASSETS.destAnayirankal,
  IMAGE_ASSETS.introMountainValley,
  IMAGE_ASSETS.galleryWaterfall,
  IMAGE_ASSETS.cottageVerandaMist,
  IMAGE_ASSETS.destMarayoor,
  IMAGE_ASSETS.gallerySpicesAndFood,
  IMAGE_ASSETS.expTrekking,
  IMAGE_ASSETS.destMattupetty,
  IMAGE_ASSETS.sandalwoodBotanical,
  IMAGE_ASSETS.galleryTeaPlucking,
];

