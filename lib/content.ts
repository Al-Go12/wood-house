import { IMAGE_ASSETS, ImageAsset } from "./images";

export interface BrandConfig {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSupporting: string;
  location: {
    village: string;
    region: string;
    district: string;
    state: string;
    country: string;
    coordinates: string;
    elevation: string;
    googleMapsUrl: string;
    directionsEmbedQuery: string;
  };
  contact: {
    whatsappNumber: string; // Configurable E.164 digits without +
    whatsappDisplay: string;
    phoneDisplay: string;
    email: string;
    instagramHandle: string;
    instagramUrl: string;
    addressLines: string[];
    isPlaceholderContact: boolean;
  };
}

export const BRAND_CONFIG: BrandConfig = {
  name: "WOODHOUSE",
  tagline: "Stay close to nature. Discover beyond the ordinary.",
  heroHeadline: "Somewhere between the mountains and the clouds.",
  heroSupporting:
    "An intimate mountain escape in the heart of Suryanelli, where nature, adventure and slow living come together.",
  location: {
    village: "Suryanelli",
    region: "Munnar High Range",
    district: "Idukki",
    state: "Kerala",
    country: "India",
    coordinates: "10°03'24\"N 77°11'42\"E",
    elevation: "1,500m ASL (4,920 ft)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Suryanelli+Munnar+Kerala",
    directionsEmbedQuery: "Suryanelli, Munnar, Idukki, Kerala",
  },
  contact: {
    whatsappNumber: "919000000000", // Configurable in lib/content.ts
    whatsappDisplay: "+91 [00000 00000 — Configurable]",
    phoneDisplay: "+91 [00000 00000 — Configurable]",
    email: "enquiries@woodhousemunnar.com",
    instagramHandle: "@woodhouse.suryanelli",
    instagramUrl: "https://instagram.com",
    addressLines: [
      "WOODHOUSE",
      "Suryanelli High-Range Road, Near Munnar",
      "Idukki District, Kerala 685618, India",
    ],
    isPlaceholderContact: true,
  },
};

export interface CottageSpace {
  id: string;
  code: string;
  name: string;
  isPlaceholderName: boolean;
  architecturalSubtitle: string;
  editorialDescription: string;
  viewEnvironment: string;
  spatialNotes: string[];
  verifiedAmenitiesPlaceholder: string[];
  primaryImage: ImageAsset;
  secondaryImage: ImageAsset;
  detailImage: ImageAsset;
}

/**
 * SECTION 03 — THE STAY / OUR COTTAGES
 * Note: Per strict brand directives, no accommodation prices are displayed anywhere on the public website.
 * Room counts, occupancy figures, and unverified facility claims are marked as editable placeholders.
 */
export const COTTAGE_SHOWCASE: CottageSpace[] = [
  {
    id: "timber-ridge-cottage",
    code: "STUDY I",
    name: "The Ridge Timber Cottage [Editable Name Placeholder]",
    isPlaceholderName: true,
    architecturalSubtitle: "Elevated Wooden Architecture · Valley & Cloud-Line Orientation",
    editorialDescription:
      "Conceived as a quiet observation deck above the Suryanelli slopes, this timber-lined sanctuary privileges natural mountain light, tactile wood grain, and the shifting theatre of high-range mist. Rather than separating indoors from outdoors, wide openings draw the cardamom-scented breeze and distant tea ridges directly into the living space.",
    viewEnvironment: "Faces the eastern tea slopes and morning cloud drift rising from the Suryanelli basin",
    spatialNotes: [
      "Natural timber cladding and warm joinery crafted for cool high-altitude evenings",
      "Private cantilevered balcony oriented toward the mountain valley [Verify Exact Orientation]",
      "Generous bedroom sanctuary with tactile linen and unobstructed landscape framing",
      "Intimate living and reading corner for unhurried post-trek afternoons",
    ],
    verifiedAmenitiesPlaceholder: [
      "[Occupancy & Bed Configuration — Editable Placeholder]",
      "[Private Balcony / Veranda — Editable Placeholder]",
      "[Hot Water & High-Range Heating Details — Editable Placeholder]",
      "[Bespoke Tea & Estate Coffee Station — Editable Placeholder]",
    ],
    primaryImage: IMAGE_ASSETS.cottageCanopyExterior,
    secondaryImage: IMAGE_ASSETS.cottageRidgeInterior,
    detailImage: IMAGE_ASSETS.cottageVerandaMist,
  },
  {
    id: "canopy-veranda-pavilion",
    code: "STUDY II",
    name: "The Canopy Veranda Suite [Editable Name Placeholder]",
    isPlaceholderName: true,
    architecturalSubtitle: "Forest-Edge Sanctuary · Sheltered Veranda & Warm Hearth",
    editorialDescription:
      "Tucked closer to the rustling tree line, the Canopy Veranda study balances architectural intimacy with expansive mountain horizons. Stepping onto the timber deck at daybreak, the only sounds are Malabar whistling thrushes in the foliage and the distant hum of estate trails waking up below.",
    viewEnvironment: "Positioned beside mature shade trees looking out toward the high ridges of the Western Ghats",
    spatialNotes: [
      "Warm wood-panelled interiors with pitched roof geometry",
      "Deep sheltered veranda suited to monsoon watching and slow morning breakfasts",
      "Dedicated lounge alcove and handcrafted timber furnishings [Verify Inventory]",
      "Direct footpath access to the property's garden contours",
    ],
    verifiedAmenitiesPlaceholder: [
      "[Suite Dimensions & Guest Capacity — Editable Placeholder]",
      "[En-Suite Bath & Mountain Water Details — Editable Placeholder]",
      "[Wi-Fi / Connectivity Note — Editable Placeholder]",
      "[On-Request Dining & Bonfire Arrangement — Editable Placeholder]",
    ],
    primaryImage: IMAGE_ASSETS.cottageRidgeInterior,
    secondaryImage: IMAGE_ASSETS.cottageLivinghearth,
    detailImage: IMAGE_ASSETS.introTimberDetail,
  },
  {
    id: "homestead-gathering-villa",
    code: "STUDY III",
    name: "TheHighland Homestead [Editable Name Placeholder]",
    isPlaceholderName: true,
    architecturalSubtitle: "Shared Mountain Living · Built for Families & Slow Gatherings",
    editorialDescription:
      "Designed for travelers who journey together to explore the Western Ghats over several days. Shared living spaces encourage long conversations over freshly brewed high-grown tea after returning from Kolukkumalai or Anayirankal, while private sleeping quarters preserve quiet solitude.",
    viewEnvironment: "Panoramic vantage across the surrounding Suryanelli valley and misty hilltops",
    spatialNotes: [
      "Interconnected living and veranda zones for shared storytelling",
      "Warm acoustic timber interiors that shelter against high-range winds",
      "Curated outdoor seating perimeter overlooking the garden",
      "Flexible spatial arrangement for multi-day mountain stays [Verify Room Count]",
    ],
    verifiedAmenitiesPlaceholder: [
      "[Number of Bedrooms & Layout — Editable Placeholder]",
      "[Dining & Kitchenette Access — Editable Placeholder]",
      "[Parking & 4x4 Jeep Pick-up Access — Editable Placeholder]",
      "[Custom Long-Stay Provision — Editable Placeholder]",
    ],
    primaryImage: IMAGE_ASSETS.cottageVerandaMist,
    secondaryImage: IMAGE_ASSETS.cottageCanopyExterior,
    detailImage: IMAGE_ASSETS.cottageLivinghearth,
  },
];

export interface ExperienceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  operatorType: "local-partner" | "guided-arrangement" | "property-surroundings";
  operatorBadge: string;
  operatorClarification: string;
  editorialStory: string;
  terrainAndTiming: string;
  highlights: string[];
  image: ImageAsset;
}

/**
 * SECTION 04 — EXPERIENCES / THE MOUNTAINS ARE CALLING
 * Note: No activity prices are displayed. Property-provided walks are clearly distinguished
 * from expeditions operated by licensed local 4x4 unions, DTPC, or Kerala Forest Department (KFDC).
 */
export const EXPERIENCES_LIST: ExperienceItem[] = [
  {
    id: "jeep-safari",
    number: "01",
    title: "Jeep Safari",
    subtitle: "The Off-Road Ascent Through Tea Contours to Kolukkumalai",
    operatorType: "local-partner",
    operatorBadge: "Arranged via Registered Local 4x4 Operators",
    operatorClarification:
      "Operated by authorized local Suryanelli 4x4 jeep associations; pickup and departure timing coordinated upon request.",
    editorialStory:
      "Before the valley wakes, the unmistakable rumble of four-wheel-drive jeeps echoes across Suryanelli. Climbing from 1,500 metres to nearly 2,400 metres, the rugged estate track weaves through hairpin tea terraces, boulder-strewn stream crossings, and drifting cloud banks toward Kolukkumalai—one of the highest organic tea plantations in the world.",
    terrainAndTiming: "Pre-dawn departure (approx. 4:30 AM) or late-afternoon ridge run · Rugged off-road mountain track",
    highlights: [
      "Ascent along historic high-altitude tea estate tracks above Suryanelli",
      "Stops at panoramic valley lookouts and heritage tea factory precincts (subject to estate hours)",
      "Coordinated door-to-trail pickup with experienced local high-range drivers",
    ],
    image: IMAGE_ASSETS.expJeepSafari,
  },
  {
    id: "trekking",
    number: "02",
    title: "Trekking",
    subtitle: "Montane Grasslands, Shola Ridges & Sky-High Summits",
    operatorType: "guided-arrangement",
    operatorBadge: "Local Guides & KFDC / Forest Dept Permitted Routes",
    operatorClarification:
      "High-altitude peaks such as Meesapulimala and Chokramudi require official forest permissions or KFDC bookings; local ridge walks are arranged with regional guides.",
    editorialStory:
      "The Western Ghats around Suryanelli hold some of South India's rarest sky-island ecosystems—where dark stunted shola forests give way abruptly to wind-swept montane grasslands. Whether scaling the granite brow of Chokramudi or traversing ridge footpaths around Phantom Hills, every hundred metres of elevation reveals a new horizon.",
    terrainAndTiming: "Morning departures · Half-day ridge hikes to full-day permitted summit treks",
    highlights: [
      "Guided ascents to Phantom Hills and surrounding Suryanelli ridgelines",
      "Orientation and logistics guidance for Chokramudi Peak and KFDC Meesapulimala treks",
      "Encounters with endemic high-range flora, shola edges, and panoramic valley drops",
    ],
    image: IMAGE_ASSETS.expTrekking,
  },
  {
    id: "boating",
    number: "03",
    title: "Boating",
    subtitle: "Quiet Waters of Anayirankal, Mattupetty & Kundala",
    operatorType: "local-partner",
    operatorBadge: "Operated by DTPC / Dam Boating Authorities",
    operatorClarification:
      "Boating is conducted at public reservoirs (Anayirankal, Mattupetty, and Kundala) by regional tourism/hydel authorities, subject to seasonal water levels and weather.",
    editorialStory:
      "Just minutes from the winding Suryanelli road lies Anayirankal—a vast mirror of mountain water cradled between emerald tea estates and dense reserve forests whose name translates to 'where elephants descend.' Gliding across these highland lakes offers a rare perspective of the ranges from the water's surface.",
    terrainAndTiming: "Daytime hours (subject to reservoir weather & authority schedules) · Calm reservoir waters",
    highlights: [
      "Proximity to Anayirankal Reservoir, surrounded by Tata tea estates and shola forest",
      "Day excursions to Kundala Arch Dam (pedal & row boating) and Mattupetty Lake",
      "Ideal late-morning or golden-hour interlude between mountain drives",
    ],
    image: IMAGE_ASSETS.expBoating,
  },
  {
    id: "cycling",
    number: "04",
    title: "Cycling",
    subtitle: "Two Wheels Along Whispering Tea-Estate Contours",
    operatorType: "guided-arrangement",
    operatorBadge: "Arranged via Local Cycling Outfitters [Verify On-Site Fleet]",
    operatorClarification:
      "Cycles and route support can be arranged through local adventure partners or verified prior to arrival.",
    editorialStory:
      "There is no finer pace for absorbing the geometry of Munnar's hills than from the saddle of a mountain bike. Quiet tarmac ribbons and hard-packed estate lanes wind between manicured bushes of Camellia sinensis, past silver oak colonnades, small estate temples, and cool mountain streams.",
    terrainAndTiming: "Early morning or late afternoon · Rolling highland tarmac and estate trails",
    highlights: [
      "Curated loops connecting Suryanelli, Chinnakkanal, and Anayirankal backroads",
      "Minimal traffic during early morning hours with crisp 1,500m mountain air",
      "Flexible gradients ranging from gentle valley contours to challenging hill climbs",
    ],
    image: IMAGE_ASSETS.expCycling,
  },
  {
    id: "nature-walks",
    number: "05",
    title: "Nature Walks",
    subtitle: "Tea Footpaths, Cardamom Shade & Birdsong at Unhurried Pace",
    operatorType: "property-surroundings",
    operatorBadge: "From the Doorstep of WOODHOUSE",
    operatorClarification:
      "Self-guided or host-oriented walks around the immediate Suryanelli landscape and public estate footpaths.",
    editorialStory:
      "Not every memorable mountain experience requires an expedition. Step outside at first light or late afternoon to walk the red-earth footpaths where cardamom grows beneath forest shade, pepper vines climb silver oaks, and mist drifts silently across the tea pluckers' trails.",
    terrainAndTiming: "Dawn or dusk · Gentle footpaths around Suryanelli",
    highlights: [
      "Immediate immersion in the flora, spices, and birdlife of the Idukki high range",
      "Photography walks capturing morning fog and golden-hour mountain light",
      "Unhurried rhythm suitable for every traveler seeking stillness",
    ],
    image: IMAGE_ASSETS.expNatureWalks,
  },
  {
    id: "sunrise-experiences",
    number: "06",
    title: "Sunrise Experiences",
    subtitle: "Witnessing the Famous Sea of Clouds Above the Western Ghats",
    operatorType: "local-partner",
    operatorBadge: "Arranged via Local 4x4 & Trekking Guides",
    operatorClarification:
      "Sunrise access to Kolukkumalai or nearby vantage points is arranged through local jeep operators and depends on seasonal cloud conditions.",
    editorialStory:
      "In the high ranges of Suryanelli, dawn is an event of almost mythic stillness. Standing on a wind-brushed ridge at 7,900 feet while a thick white ocean of clouds fills the valleys below, the first amber rays break across the Tamil Nadu plains and set the jagged peaks of the Western Ghats alight.",
    terrainAndTiming: "4:30 AM – 7:30 AM · High-altitude viewpoints (weather & cloud conditions permitting)",
    highlights: [
      "Prime positioning in Suryanelli—the closest base village for Kolukkumalai sunrise runs",
      "Alternative quiet sunrise ridges near Phantom Hills for fewer crowds",
      "Return to WOODHOUSE in time for a slow, warm mountain breakfast",
    ],
    image: IMAGE_ASSETS.expSunrise,
  },
];

export interface DestinationItem {
  id: string;
  code: string;
  name: string;
  tagline: string;
  corridor: "Immediate High Range" | "Peaks & Reservoirs" | "Rain-Shadow & Heritage";
  locationLabel: string;
  elevation: string;
  distancePlaceholder: string; // Marked as approximate / to be verified
  accessNote: string;
  editorialDescription: string;
  longFieldNotes: string;
  highlights: string[];
  mapsUrl: string;
  image: ImageAsset;
}

/**
 * SECTION 05 — DISCOVER THE DESTINATION (A through J)
 * Note: Distances, permits, and access conditions are transparently labeled with verification notes.
 */
export const DESTINATIONS_LIST: DestinationItem[] = [
  {
    id: "suryanelli",
    code: "A",
    name: "Suryanelli",
    tagline: "The High-Range Basecamp Between Tea Estates and Cloud Peaks",
    corridor: "Immediate High Range",
    locationLabel: "Chinnakkanal Panchayat, Idukki District",
    elevation: "1,480m – 1,650m ASL",
    distancePlaceholder: "0 km · Our Home Valley",
    accessNote: "Accessible year-round by road via Munnar–Kumily SH-19 / Chinnakkanal junction.",
    editorialDescription:
      "More intimate and untamed than Munnar town, Suryanelli is a high-altitude settlement ringed by emerald tea gardens, cardamom estates, and dramatic granite ridges. It serves as the natural threshold to Kolukkumalai and the eastern rim of the Western Ghats.",
    longFieldNotes:
      "At roughly 1,500 metres above sea level, Suryanelli enjoys a microclimate defined by crisp mornings, sudden afternoon cloud drifts, and star-filled mountain nights. Historically shaped by high-range tea and spice cultivation, it remains the quintessential base for travelers who prefer raw mountain geography over crowded commercial streets.",
    highlights: [
      "Primary gateway for 4x4 ascents to Kolukkumalai",
      "Rolling tea plantations and spice-shaded footpaths right outside WOODHOUSE",
      "Cool high-range atmosphere away from urban Munnar congestion",
    ],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Suryanelli+Kerala",
    image: IMAGE_ASSETS.destSuryanelli,
  },
  {
    id: "kolukkumalai",
    code: "B",
    name: "Kolukkumalai",
    tagline: "Sea of Clouds & The World's Highest Organic Tea Estate",
    corridor: "Immediate High Range",
    locationLabel: "High Ridge Above Suryanelli (Kerala–Tamil Nadu Border)",
    elevation: "2,400m ASL (7,900 ft)",
    distancePlaceholder: "~12–15 km off-road from Suryanelli [Verify Trail Time: ~1 hr by 4x4]",
    accessNote: "Accessible only via registered local 4x4 jeeps from Suryanelli; private vehicles are not permitted on the estate off-road track.",
    editorialDescription:
      "Perched nearly 8,000 feet above sea level on a dramatic precipice overlooking the plains of Tamil Nadu, Kolukkumalai is world-renowned for its swirling sea of dawn clouds and its 1930s orthodox tea factory.",
    longFieldNotes:
      "Reached via an exhilarating one-hour 4x4 jeep climb from Suryanelli, Kolukkumalai feels like the edge of the sky. Here, tea bushes grow slowly in thin, cold mountain air, yielding a distinctly aromatic high-grown leaf. At sunrise, clouds pool below the crags like a tide against islands of stone.",
    highlights: [
      "World-famous sunrise viewpoint above a dense sea of clouds",
      "Heritage 1930s tea factory utilizing traditional orthodox rollers (verify visiting hours)",
      "Jagged mountain ridges including Jaguar Rock vantage points",
    ],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kolukkumalai+Tea+Estate",
    image: IMAGE_ASSETS.destKolukkumalai,
  },
  {
    id: "phantom-hills",
    code: "C",
    name: "Phantom Hills",
    tagline: "Quiet Wind-Sculpted Crags & Amber Mountain Sunsets",
    corridor: "Immediate High Range",
    locationLabel: "Pappadampara / Suryanelli Ridge",
    elevation: "1,620m ASL",
    distancePlaceholder: "~4–6 km from Suryanelli [Verify Local Trail Access]",
    accessNote: "Short drive and moderate footpath hike; check local weather and mist visibility before evening ascents.",
    editorialDescription:
      "Named for a natural rock formation resembling a weathered profile against the sky, Phantom Hills (locally associated with the Pappadampara ridge) offers a quieter, deeply atmospheric vantage point for sunset over the valleys.",
    longFieldNotes:
      "While mornings belong to Kolukkumalai, late afternoons belong to Phantom Hills. A short walk through grassy slopes and breezy ridges rewards hikers with sweeping 360-degree views of Anayirankal reservoir shimmering in the distance and tea valleys turning bronze in the last light.",
    highlights: [
      "Serene sunset viewpoint with far fewer visitors than central Munnar",
      "Sweeping views of the Anayirankal water body and Chinnakkanal hills",
      "Short, rewarding ridge walk ideal for late afternoon",
    ],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Phantom+Head+Peak+Suryanelli+Munnar",
    image: IMAGE_ASSETS.destPhantomHills,
  },
  {
    id: "anayirankal-dam",
    code: "D",
    name: "Anayirankal Dam",
    tagline: "Where Tea Gardens Meet Deep Forest Waters",
    corridor: "Immediate High Range",
    locationLabel: "Near Chinnakkanal / Suryanelli — Pooppara Route",
    elevation: "1,560m ASL",
    distancePlaceholder: "~7–9 km from Suryanelli [Verify Exact Road Distance]",
    accessNote: "Open during daytime hours; boating availability and reservoir access are regulated by hydel/tourism authorities.",
    editorialDescription:
      "A breathtaking earthen dam and vast reservoir hemmed in on one side by manicured Tata tea plantations and on the other by thick evergreen shola forest where wild elephants occasionally come to drink.",
    longFieldNotes:
      "Anayirankal—literally 'the place where elephants come down'—is arguably the most photogenic water body in the southern Munnar high range. Because it lies right in the Suryanelli–Chinnakkanal corridor, guests at WOODHOUSE can reach its tranquil shoreline within minutes.",
    highlights: [
      "Striking visual contrast of emerald tea slopes, blue water, and primal shola woods",
      "Pontoon and speedboat rides operated by official tourism authorities (when active)",
      "Frequent wildlife sightings along the distant forest fringe",
    ],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Anayirankal+Dam+Munnar",
    image: IMAGE_ASSETS.destAnayirankal,
  },
  {
    id: "chokramudi-peak",
    code: "E",
    name: "Chokramudi Peak",
    tagline: "A Solitary Granite Titan Above Bison Valley",
    corridor: "Peaks & Reservoirs",
    locationLabel: "Pothamedu / Bison Valley — Munnar Corridor",
    elevation: "2,195m ASL (7,200 ft)",
    distancePlaceholder: "~18–22 km from Suryanelli [Verify Route via Lockhart Gap]",
    accessNote: "Requires forest checkpost entry/permission and recommended guided accompaniment; avoid during heavy monsoon fog.",
    editorialDescription:
      "Rising isolated and dramatic beside the Lockhart Gap road, Chokramudi is a classic high-range trek across steep montane grasslands, rocky slabs, and cloud-swept ledges.",
    longFieldNotes:
      "For hikers seeking a challenging half-day ascent, Chokramudi delivers sheer vertical drama. As the trail climbs out of the lower eucalyptus belt into open high-altitude grass and granite, the entire panorama of the Idukki hills and distant reservoirs unfolds beneath your boots.",
    highlights: [
      "7,200-foot summit offering unobstructed panoramas of the High Range",
      "Rich montane grassland ecology and dramatic rock formations",
      "Pairs effortlessly with a scenic drive through Lockhart Gap tea estates",
    ],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Chokramudi+Peak+Munnar",
    image: IMAGE_ASSETS.destChokramudi,
  },
  {
    id: "meesapulimala",
    code: "F",
    name: "Meesapulimala",
    tagline: "The Second-Highest Summit in the Western Ghats",
    corridor: "Peaks & Reservoirs",
    locationLabel: "Silent Valley / Rhodo Valley, Munnar",
    elevation: "2,640m ASL (8,661 ft)",
    distancePlaceholder: "~28–35 km from Suryanelli [Access via KFDC Basecamp]",
    accessNote: "Strictly regulated reserve: trekking is permitted ONLY with advance official booking through Kerala Forest Development Corporation (KFDC).",
    editorialDescription:
      "Named for the silhouette of its ridges resembling a tiger's whiskers, Meesapulimala is a legendary UNESCO-recognized biodiversity landscape of rolling sky-meadows, wild rhododendrons, and pine-bordered streams.",
    longFieldNotes:
      "Trekking across the eight undulating hills toward Meesapulimala is one of South India's crowning mountain journeys. Because access is strictly conserved to protect fragile Nilgiri tahr and montane shola habitats, treks must be reserved in advance through official KFDC eco-tourism channels.",
    highlights: [
      "8,661-foot peak traversing Rhodo Valley and high-altitude shola-grassland mosaics",
      "Protected habitat of the endangered Nilgiri Tahr and endemic montane birds",
      "Official KFDC-regulated wilderness experience",
    ],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Meesapulimala+Munnar",
    image: IMAGE_ASSETS.destMeesapulimala,
  },
  {
    id: "mattupetty-dam",
    code: "G",
    name: "Mattupetty Dam",
    tagline: "Highland Lake, Rolling Pastures & Echoing Valleys",
    corridor: "Peaks & Reservoirs",
    locationLabel: "Munnar–Top Station Highway",
    elevation: "1,700m ASL",
    distancePlaceholder: "~32–36 km from Suryanelli via Munnar [Verify Travel Time]",
    accessNote: "Open daily; DTPC boating and dam-top promenade subject to official visiting hours.",
    editorialDescription:
      "Built in the late 1940s between steep tea-covered hills, Mattupetty's masonry dam and winding lake form the heart of the northern Munnar lake circuit, bordered by the famous Indo-Swiss livestock pastures.",
    longFieldNotes:
      "Driving north from Suryanelli past Munnar town brings you into the lush valley of Mattupetty. Its calm waters reflect groves of tall eucalyptus and rolling tea slopes, making it a classic stop on a full-day exploration toward Kundala and Top Station.",
    highlights: [
      "Tranquil lake boating surrounded by forested hills and tea estates",
      "Adjacent to the historic Indo-Swiss cattle pastures and Echo Point",
      "Key waypoint along the scenic Munnar–Kundala–Top Station highland corridor",
    ],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mattupetty+Dam+Munnar",
    image: IMAGE_ASSETS.destMattupetty,
  },
  {
    id: "kundala-lake",
    code: "H",
    name: "Kundala Lake",
    tagline: "Asia's First Arch Dam & Mist-Drifted Valley Waters",
    corridor: "Peaks & Reservoirs",
    locationLabel: "20 km Past Munnar Toward Top Station",
    elevation: "1,750m ASL",
    distancePlaceholder: "~40–44 km from Suryanelli [Verify Route Timing]",
    accessNote: "Daytime access along the Munnar–Top Station highway; pedal and row boats operated by local tourism authorities.",
    editorialDescription:
      "Set higher and quieter than Mattupetty, Kundala Lake is celebrated for its historic concrete arch dam, early-morning mist, and seasonal cherry blossoms that dot its banks twice a year.",
    longFieldNotes:
      "At Kundala, the valley opens into a gentle amphitheatre of water and pine-fringed hills. In the early hours, ribbons of white mist curl off the surface of the lake while shikara-style rowboats and pedal boats drift silently past eucalyptus groves.",
    highlights: [
      "Historic arch dam engineering framed by unspoiled mountain scenery",
      "Peaceful row and pedal boating in a quiet high-altitude basin",
      "Renowned for seasonal cherry blossoms and historic Neelakurinji hill slopes nearby",
    ],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kundala+Lake+Munnar",
    image: IMAGE_ASSETS.destKundala,
  },
  {
    id: "marayoor",
    code: "I",
    name: "Marayoor",
    tagline: "Natural Sandalwood Forests, Megalithic Dolmens & Rain-Shadow Heritage",
    corridor: "Rain-Shadow & Heritage",
    locationLabel: "40 km North of Munnar (Munnar–Udumalpet Highway)",
    elevation: "1,000m ASL",
    distancePlaceholder: "~60–65 km from Suryanelli [Full-Day Heritage Excursion]",
    accessNote: "Public highway access through the sandalwood reserve; entry into fenced Forest Department sandalwood depots and regeneration plots is subject to Kerala Forest Department permissions.",
    editorialDescription:
      "Descending from Munnar's cool tea estates into the eastern rain-shadow of the Western Ghats reveals Marayoor—the only place in Kerala with naturally growing sandalwood forests (*Santalum album*), Iron Age stone dolmens (*Muniyaras*), and GI-tagged sugarcane jaggery.",
    longFieldNotes:
      "Marayoor feels like crossing into another world. Sheltered from the southwest monsoon by towering mountain walls, its dry climate nurtures thousands of protected natural sandalwood trees, ancient megalithic burial chambers dating back over three millennia, and emerald valley floors of traditional sugarcane cultivation.",
    highlights: [
      "Kerala's only natural sandalwood forest reserve managed by the Forest Department",
      "Prehistoric Muniyara megalithic dolmens and Ezhuthupara rock paintings",
      "Traditional Marayoor jaggery (sharkara) homesteads and Lakkam Waterfalls en route",
    ],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Marayoor+Sandalwood+Forest+Kerala",
    image: IMAGE_ASSETS.destMarayoor,
  },
  {
    id: "chinnar-wildlife-sanctuary",
    code: "J",
    name: "Chinnar Wildlife Sanctuary",
    tagline: "Thorny Dry-Forest Biodiversity & The Thoovanam Cascade",
    corridor: "Rain-Shadow & Heritage",
    locationLabel: "Eastern Slopes of Western Ghats, Beyond Marayoor",
    elevation: "500m – 2,300m ASL",
    distancePlaceholder: "~72–78 km from Suryanelli [Full-Day Wilderness Corridor]",
    accessNote: "Guided treks (including Thoovanam Waterfalls) and sanctuary entry are regulated by the Kerala Forest & Wildlife Department checkpost at Chinnar/Alampetty.",
    editorialDescription:
      "Directly adjoining Marayoor on the Tamil Nadu frontier, Chinnar is a rare rain-shadow sanctuary of dry deciduous forests, riparian corridors, star tortoises, and the magnificent Thoovanam Waterfalls.",
    longFieldNotes:
      "Because Chinnar receives barely a fraction of Munnar's rainfall, its landscape shifts dramatically to dry thorn scrub, albizia groves, and riverine forests along the Chinnar and Pambar rivers. Guided forest walks lead trekkers to the roaring cascades of Thoovanam and offer glimpses of spotted deer, elephants, and the rare Grizzled Giant Squirrel.",
    highlights: [
      "Guided forest department trek to the dramatic Thoovanam Waterfalls",
      "Unique rain-shadow ecosystem hosting 225+ bird species and rare dry-zone fauna",
      "Completes the grand Munnar–Marayoor–Chinnar ecological transect",
    ],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Chinnar+Wildlife+Sanctuary+Kerala",
    image: IMAGE_ASSETS.destChinnar,
  },
];

export interface BeyondProjectItem {
  id: string;
  tag: string;
  title: string;
  statusBadge: string;
  isPlaceholder: boolean;
  description: string;
  editorialDetail: string;
  image: ImageAsset;
}

/**
 * SECTION 06 — BEYOND THE STAY
 * Note: CMS-ready structure with clearly marked editable placeholders so no unverified project
 * names, partnerships, or achievements are fabricated prior to owner confirmation.
 */
export const BEYOND_THE_STAY_PROJECTS: BeyondProjectItem[] = [
  {
    id: "initiative-01",
    tag: "INITIATIVE 01 · ECOLOGICAL STEWARDSHIP",
    title: "[Project Title Placeholder — Native High-Range Flora & Land Care]",
    statusBadge: "Editable Content Placeholder",
    isPlaceholder: true,
    description:
      "A dedicated placeholder for WOODHOUSE's land stewardship, native tree planting, and low-impact mountain architecture practices in Suryanelli.",
    editorialDetail:
      "Replace this entry in `lib/content.ts` with verified details of the owners' ongoing environmental initiatives, rainwater/soil conservation work, or botanical plantings around the property.",
    image: IMAGE_ASSETS.sandalwoodNursery,
  },
  {
    id: "initiative-02",
    tag: "INITIATIVE 02 · REGIONAL COMMUNITY & CULTURE",
    title: "[Project Title Placeholder — Local Trail & Community Connections]",
    statusBadge: "Editable Content Placeholder",
    isPlaceholder: true,
    description:
      "Highlighting how every stay connects guests with Suryanelli's local 4x4 drivers, estate guides, spice growers, and high-range culinary traditions.",
    editorialDetail:
      "Replace this entry in `lib/content.ts` with verified community collaborations, local sourcing stories, or regional tourism initiatives championed by the founders.",
    image: IMAGE_ASSETS.gallerySpicesAndFood,
  },
  {
    id: "initiative-03",
    tag: "INITIATIVE 03 · ASSOCIATED VENTURES",
    title: "[Project Title Placeholder — Sister Ventures & High-Range Projects]",
    statusBadge: "Editable Content Placeholder",
    isPlaceholder: true,
    description:
      "Structured to showcase additional hospitality, agricultural, or nature-focused ventures led by the WOODHOUSE team across Idukki and Kerala.",
    editorialDetail:
      "CMS-ready slot designed to scale as new sister properties, agro-forestry projects, or regional initiatives are published with verified details.",
    image: IMAGE_ASSETS.galleryTeaPlucking,
  },
];

/**
 * SECTION 07 — SANDALWOOD HERITAGE / CHANDANAM
 * Incorporates verified regional context on Marayoor Santalum album forests and transparent
 * verification notes regarding the Swargamedu / Chandana Research Centre reference.
 */
export const SANDALWOOD_HERITAGE_CONTENT = {
  eyebrow: "CHANDANAM · LIVING FOREST HERITAGE OF IDUKKI",
  headline: "Rooted in Nature. Preserving a Living Heritage.",
  subheadline:
    "Exploring the botanical legacy of Santalum album in the Western Ghats—from the ancient natural groves of Marayoor to high-range conservation and cultivation research around Swargamedu.",
  verificationDisclaimer:
    "Editorial Verification Note: References to regional sandalwood conservation, the Marayoor Forest Reserve, and the Chandana Research Centre / Swargamedu (Senapathy region, Idukki) are presented as an independent regional heritage feature. WOODHOUSE does not claim official affiliation with government or private research bodies; exact institutional nomenclature, ownership, and public visitor access permissions at Swargamedu and Marayoor reserves must be verified prior to visiting.",
  chapters: [
    {
      number: "I",
      title: "The Fragrant Heartwood of the Rain-Shadow",
      body: "In the rain-shadow valleys north of Munnar, where the wet monsoon winds give way to dry, sunlit slopes, grows Santalum album—Indian sandalwood, revered in Malayalam as Chandanam. For centuries, the Marayoor plateau has stood as Kerala's only natural sandalwood forest, prized for heartwood rich in santalol and protected through dedicated forest reserves and regeneration plots.",
    },
    {
      number: "II",
      title: "Swargamedu & High-Range Sandalwood Research Reference",
      body: "Across the wider Idukki hills—including the scenic ridges of Swargamedu (Senapathy panchayat) and the Marayoor experimental zones—interest in sandalwood ecology, host-plant symbiosis, and sustainable cultivation continues to deepen. This feature space is reserved to spotlight verified research and cultivation references associated with the Swargamedu Chandana Research Centre once institutional details, ownership, and visitor access protocols are formally confirmed.",
    },
    {
      number: "III",
      title: "A Delicate Ecological Symbiosis",
      body: "Few travelers realize that sandalwood is a hemi-parasitic tree: its roots form intricate subterranean connections (haustoria) with neighbouring host species to draw mineral nutrients from the rocky Western Ghats soil. Preserving sandalwood therefore means preserving an entire community of native flora, birds, and forest pollinators.",
    },
  ],
  botanicalFacts: [
    { label: "Botanical Taxon", value: "Santalum album L." },
    { label: "Regional Name", value: "Chandanam (ചന്ദനം)" },
    { label: "Primary Natural Belt", value: "Marayoor Rain-Shadow Reserve, Idukki" },
    { label: "Regional Reference", value: "Swargamedu / Senapathy [Subject to Verification]" },
  ],
};

export interface JournalArticle {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readingTime: string;
  dateLabel: string;
  locationTag: string;
  isPlaceholderArticle: boolean;
  excerpt: string;
  heroImage: ImageAsset;
  secondaryImage: ImageAsset;
  pullQuote: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  relatedDestinations: string[];
}

/**
 * SECTION 09 — JOURNAL / STORIES FROM THE HILLS
 */
export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: "a-morning-in-suryanelli",
    title: "A Morning in Suryanelli: Before the Mist Lifts from the Tea Ridges",
    subtitle: "Notes on altitude, silence, and the first hour of light at 1,500 metres.",
    category: "SLOW LIVING",
    readingTime: "4 MIN READ",
    dateLabel: "EDITION 01 · EDITORIAL PLACEHOLDER",
    locationTag: "Suryanelli, Idukki",
    isPlaceholderArticle: true,
    excerpt:
      "Long before the highway toward Munnar stirs, Suryanelli wakes to the sound of wind in silver oaks and mist drifting across emerald contours.",
    heroImage: IMAGE_ASSETS.heroMunnarMist,
    secondaryImage: IMAGE_ASSETS.introMountainValley,
    pullQuote:
      "Here in the high range, morning is not a clock hour—it is a slow negotiation between cloud and granite.",
    sections: [
      {
        heading: "The First Light at 1,500 Metres",
        paragraphs: [
          "At five-thirty in the morning, Suryanelli exists almost entirely in sound and scent. Step onto a wooden veranda and the air carries the crisp, mineral coolness of overnight mist mixed with crushed tea leaf and wild cardamom from the valley floor.",
          "Below the ridge, the headlights of early 4x4 jeeps trace golden arcs along the mountain track toward Kolukkumalai. Yet if you remain still by the timber rail as the sun clears the eastern crest, a quieter spectacle unfolds right where you stand.",
        ],
      },
      {
        heading: "Contours of Tea and Shade",
        paragraphs: [
          "As the veil of fog thins, the geometry of the hills reveals itself—hundreds of manicured green paths contouring around steep spurs, punctuated by tall Grevillea (silver oak) trees that shelter the tea bushes from high-altitude winds.",
          "Note: This essay serves as an editorial template for WOODHOUSE's 'Stories from the Hills' journal and can be updated with first-person dispatches from the property.",
        ],
      },
    ],
    relatedDestinations: ["suryanelli", "kolukkumalai", "phantom-hills"],
  },
  {
    slug: "the-journey-to-kolukkumalai",
    title: "The Journey to Kolukkumalai: Climbing Toward the Sea of Clouds",
    subtitle: "What it feels like to ascend from Suryanelli to 7,900 feet before daybreak.",
    category: "HIGH-ALTITUDE EXPEDITIONS",
    readingTime: "5 MIN READ",
    dateLabel: "EDITION 02 · EDITORIAL PLACEHOLDER",
    locationTag: "Kolukkumalai · 2,400m ASL",
    isPlaceholderArticle: true,
    excerpt:
      "Tracing the rugged boulder-strewn trail from Suryanelli up to the world's highest organic tea plantation as dawn breaks over the Western Ghats.",
    heroImage: IMAGE_ASSETS.expSunrise,
    secondaryImage: IMAGE_ASSETS.destKolukkumalai,
    pullQuote:
      "At 7,900 feet, you do not look up at the clouds; you stand on a stone prow and watch them break like surf below your feet.",
    sections: [
      {
        heading: "Where the Tarmac Ends",
        paragraphs: [
          "Suryanelli is the threshold where ordinary road travel ends and the mountain track begins. Registered local 4x4 jeeps—driven by hillsmen who know every boulder and drainage rut by heart—begin the steady climb through sleeping tea divisions.",
          "With each switchback, the air grows sharper and the horizon widens until the jagged silhouette of the Kolukkumalai ridge appears against the indigo pre-dawn sky.",
        ],
      },
      {
        heading: "Orthodox Craft in Thin Mountain Air",
        paragraphs: [
          "Beyond the sunrise viewpoint stands the historic 1930s tea factory, where high-grown leaves plucked from the surrounding slopes are withered and rolled using time-honoured orthodox methods.",
          "Always verify current factory visiting hours and local jeep union schedules prior to departure, as access conditions shift with high-range weather.",
        ],
      },
    ],
    relatedDestinations: ["kolukkumalai", "suryanelli"],
  },
  {
    slug: "the-quiet-waters-of-anayirankal",
    title: "The Quiet Waters of Anayirankal: Where Tea Slopes Meet the Shola",
    subtitle: "Exploring the serene reservoir corridor just minutes from Suryanelli.",
    category: "LANDSCAPE & WATERS",
    readingTime: "4 MIN READ",
    dateLabel: "EDITION 03 · EDITORIAL PLACEHOLDER",
    locationTag: "Anayirankal Reservoir",
    isPlaceholderArticle: true,
    excerpt:
      "Framed by manicured tea gardens on one bank and untouched evergreen shola forest on the other, Anayirankal is a study in highland stillness.",
    heroImage: IMAGE_ASSETS.destAnayirankal,
    secondaryImage: IMAGE_ASSETS.expBoating,
    pullQuote:
      "Two ecosystems face each other across the mirror of Anayirankal: the cultivated geometry of tea and the ancient tangle of the shola.",
    sections: [
      {
        heading: "A Reservoir Between Two Worlds",
        paragraphs: [
          "Drive a few kilometres from Suryanelli along the winding high-range highway and the valley suddenly opens to reveal a vast sheet of cobalt water. This is Anayirankal Dam, fed by mountain streams descending from the upper ridges.",
          "Its name recalls the generations of wild elephant herds that have followed ancestral forest corridors down to the water's edge from the surrounding evergreen reserves.",
        ],
      },
      {
        heading: "Slow Afternoon Horizons",
        paragraphs: [
          "Whether viewed from the shoreline road or from a boat on the reservoir (operated by local tourism authorities when water and weather conditions allow), Anayirankal offers a deeply restorative counterpoint to steep mountain treks.",
        ],
      },
    ],
    relatedDestinations: ["anayirankal-dam", "phantom-hills", "suryanelli"],
  },
  {
    slug: "exploring-marayoor-and-chinnar",
    title: "Into the Rain-Shadow: Marayoor's Sandalwood Groves & Ancient Dolmens",
    subtitle: "Following the northern road from Munnar into Kerala's most intriguing microclimate.",
    category: "REGIONAL HERITAGE",
    readingTime: "6 MIN READ",
    dateLabel: "EDITION 04 · EDITORIAL PLACEHOLDER",
    locationTag: "Marayoor & Chinnar",
    isPlaceholderArticle: true,
    excerpt:
      "Forty kilometres north of Munnar, the wet tea hills give way to fragrant sandalwood reserves, Iron Age Muniyaras, and the dry wilderness of Chinnar.",
    heroImage: IMAGE_ASSETS.destMarayoor,
    secondaryImage: IMAGE_ASSETS.destChinnar,
    pullQuote:
      "In the span of a single morning drive, the Western Ghats shift from mist-drenched tea gardens to sunlit sandalwood groves and three-thousand-year-old stone chambers.",
    sections: [
      {
        heading: "Crossing the Climatic Divide",
        paragraphs: [
          "Few journeys in South India illustrate the power of mountain geography as vividly as the road from Munnar down to Marayoor and Chinnar. Blocked by lofty peaks from the full force of the southwest monsoon, the Marayoor valley sits in a distinct rain-shadow.",
          "Here, protected groves of natural Santalum album (sandalwood) line the highway, guarded and conserved by the Kerala Forest Department.",
        ],
      },
      {
        heading: "Stone-Age Memory and Living Forests",
        paragraphs: [
          "On the rocky hillsides above the valley floor stand the Muniyaras—megalithic dolmens built from massive granite slabs during the Iron Age—alongside traditional farms producing GI-tagged Marayoor jaggery.",
          "Continuing a few kilometres further brings travelers to the Chinnar Wildlife Sanctuary checkpost, where guided forest trails lead toward the roaring waters of Thoovanam.",
        ],
      },
    ],
    relatedDestinations: ["marayoor", "chinnar-wildlife-sanctuary", "kundala-lake"],
  },
];

