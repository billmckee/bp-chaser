import { useState } from "react";

// Team color palettes for custom SVG badges
const TEAM_COLORS = {
  1:  { primary: "#003087", secondary: "#E4002C", name: "NYY" },
  2:  { primary: "#BD3039", secondary: "#0C2340", name: "BOS" },
  3:  { primary: "#0E3386", secondary: "#CC3433", name: "CHC" },
  4:  { primary: "#005A9C", secondary: "#EF3E42", name: "LAD" },
  5:  { primary: "#FD5A1E", secondary: "#27251F", name: "SFG" },
  6:  { primary: "#DF4601", secondary: "#000000", name: "BAL" },
  7:  { primary: "#FDB827", secondary: "#27251F", name: "PIT" },
  8:  { primary: "#C41E3A", secondary: "#0C2340", name: "STL" },
  9:  { primary: "#C6011F", secondary: "#000000", name: "CIN" },
  10: { primary: "#27251F", secondary: "#C4CED4", name: "CWS" },
  11: { primary: "#E31937", secondary: "#002B5C", name: "CLE" },
  12: { primary: "#0C2C56", secondary: "#FA4616", name: "DET" },
  13: { primary: "#004687", secondary: "#C09A5B", name: "KCR" },
  14: { primary: "#002B5C", secondary: "#D31145", name: "MIN" },
  15: { primary: "#002D62", secondary: "#EB6E1F", name: "HOU" },
  16: { primary: "#003278", secondary: "#C0111F", name: "TEX" },
  17: { primary: "#BA0021", secondary: "#003263", name: "LAA" },
  18: { primary: "#0C2C56", secondary: "#005C5C", name: "SEA" },
  19: { primary: "#003831", secondary: "#EFB21E", name: "OAK" },
  20: { primary: "#002D72", secondary: "#FF5910", name: "NYM" },
  21: { primary: "#E81828", secondary: "#002D72", name: "PHI" },
  22: { primary: "#AB0003", secondary: "#14225A", name: "WSN" },
  23: { primary: "#CE1141", secondary: "#13274F", name: "ATL" },
  24: { primary: "#00A3E0", secondary: "#EF3340", name: "MIA" },
  25: { primary: "#12284B", secondary: "#FFC52F", name: "MIL" },
  26: { primary: "#A71930", secondary: "#E3D4AD", name: "ARI" },
  27: { primary: "#33006F", secondary: "#C4CED4", name: "COL" },
  28: { primary: "#2F241D", secondary: "#FFC425", name: "SDP" },
  29: { primary: "#092C5C", secondary: "#8FBCE6", name: "TBR" },
  30: { primary: "#134A8E", secondary: "#E8291C", name: "TOR" },
};

function TeamBadge({ id, size = 40 }) {
  const colors = TEAM_COLORS[id] || { primary: "#333", secondary: "#999", name: "MLB" };
  const s = size;
  const r = s / 2;
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx={r} cy={r} r={r - 1} fill={colors.primary} />
      <circle cx={r} cy={r} r={r - 1} fill="none" stroke={colors.secondary} strokeWidth={s * 0.06} />
      <circle cx={r} cy={r} r={r * 0.55} fill="none" stroke={colors.secondary} strokeWidth={s * 0.04} strokeOpacity="0.4" />
      <text
        x={r} y={r + s * 0.11}
        textAnchor="middle"
        fill={colors.secondary}
        fontSize={s * 0.22}
        fontWeight="800"
        fontFamily="'Arial Black', sans-serif"
        letterSpacing={s * 0.01}
      >
        {colors.name}
      </text>
      {/* Decorative stitch lines */}
      <path d={`M ${r * 0.55} ${r} Q ${r} ${r * 0.4} ${r * 1.45} ${r}`} stroke={colors.secondary} strokeWidth={s*0.025} strokeOpacity="0.25" fill="none"/>
      <path d={`M ${r * 0.55} ${r} Q ${r} ${r * 1.6} ${r * 1.45} ${r}`} stroke={colors.secondary} strokeWidth={s*0.025} strokeOpacity="0.25" fill="none"/>
    </svg>
  );
}

const STADIUMS = [
  { id: 1,  name: "Yankee Stadium",           team: "New York Yankees",       league: "AL East",    city: "Bronx, NY",         capacity: 54251, opened: 2009, surface: "Grass" },
  { id: 2,  name: "Fenway Park",               team: "Boston Red Sox",         league: "AL East",    city: "Boston, MA",        capacity: 37755, opened: 1912, surface: "Grass" },
  { id: 3,  name: "Wrigley Field",             team: "Chicago Cubs",           league: "NL Central", city: "Chicago, IL",       capacity: 41649, opened: 1914, surface: "Grass" },
  { id: 4,  name: "Dodger Stadium",            team: "Los Angeles Dodgers",    league: "NL West",    city: "Los Angeles, CA",   capacity: 56000, opened: 1962, surface: "Grass" },
  { id: 5,  name: "Oracle Park",               team: "San Francisco Giants",   league: "NL West",    city: "San Francisco, CA", capacity: 41915, opened: 2000, surface: "Grass" },
  { id: 6,  name: "Camden Yards",              team: "Baltimore Orioles",      league: "AL East",    city: "Baltimore, MD",     capacity: 45971, opened: 1992, surface: "Grass" },
  { id: 7,  name: "PNC Park",                  team: "Pittsburgh Pirates",     league: "NL Central", city: "Pittsburgh, PA",    capacity: 38362, opened: 2001, surface: "Grass" },
  { id: 8,  name: "Busch Stadium",             team: "St. Louis Cardinals",    league: "NL Central", city: "St. Louis, MO",     capacity: 44494, opened: 2006, surface: "Grass" },
  { id: 9,  name: "Great American Ball Park",  team: "Cincinnati Reds",        league: "NL Central", city: "Cincinnati, OH",    capacity: 42319, opened: 2003, surface: "Grass" },
  { id: 10, name: "Guaranteed Rate Field",     team: "Chicago White Sox",      league: "AL Central", city: "Chicago, IL",       capacity: 40615, opened: 1991, surface: "Grass" },
  { id: 11, name: "Progressive Field",         team: "Cleveland Guardians",    league: "AL Central", city: "Cleveland, OH",     capacity: 35041, opened: 1994, surface: "Grass" },
  { id: 12, name: "Comerica Park",             team: "Detroit Tigers",         league: "AL Central", city: "Detroit, MI",       capacity: 41083, opened: 2000, surface: "Grass" },
  { id: 13, name: "Kauffman Stadium",          team: "Kansas City Royals",     league: "AL Central", city: "Kansas City, MO",   capacity: 37903, opened: 1973, surface: "Grass" },
  { id: 14, name: "Target Field",              team: "Minnesota Twins",        league: "AL Central", city: "Minneapolis, MN",   capacity: 38544, opened: 2010, surface: "Grass" },
  { id: 15, name: "Minute Maid Park",          team: "Houston Astros",         league: "AL West",    city: "Houston, TX",       capacity: 41168, opened: 2000, surface: "Grass" },
  { id: 16, name: "Globe Life Field",          team: "Texas Rangers",          league: "AL West",    city: "Arlington, TX",     capacity: 40738, opened: 2020, surface: "Grass" },
  { id: 17, name: "Angel Stadium",             team: "Los Angeles Angels",     league: "AL West",    city: "Anaheim, CA",       capacity: 45517, opened: 1966, surface: "Grass" },
  { id: 18, name: "T-Mobile Park",             team: "Seattle Mariners",       league: "AL West",    city: "Seattle, WA",       capacity: 47929, opened: 1999, surface: "Turf"  },
  { id: 19, name: "Oakland Coliseum",          team: "Oakland Athletics",      league: "AL West",    city: "Oakland, CA",       capacity: 46765, opened: 1968, surface: "Grass" },
  { id: 20, name: "Citi Field",                team: "New York Mets",          league: "NL East",    city: "Queens, NY",        capacity: 41922, opened: 2009, surface: "Grass" },
  { id: 21, name: "Citizens Bank Park",        team: "Philadelphia Phillies",  league: "NL East",    city: "Philadelphia, PA",  capacity: 42792, opened: 2004, surface: "Grass" },
  { id: 22, name: "Nationals Park",            team: "Washington Nationals",   league: "NL East",    city: "Washington, DC",    capacity: 41339, opened: 2008, surface: "Grass" },
  { id: 23, name: "Truist Park",               team: "Atlanta Braves",         league: "NL East",    city: "Atlanta, GA",       capacity: 41084, opened: 2017, surface: "Grass" },
  { id: 24, name: "loanDepot park",            team: "Miami Marlins",          league: "NL East",    city: "Miami, FL",         capacity: 36742, opened: 2012, surface: "Grass" },
  { id: 25, name: "American Family Field",     team: "Milwaukee Brewers",      league: "NL Central", city: "Milwaukee, WI",     capacity: 41900, opened: 2001, surface: "Grass" },
  { id: 26, name: "Chase Field",               team: "Arizona Diamondbacks",   league: "NL West",    city: "Phoenix, AZ",       capacity: 48519, opened: 1998, surface: "Grass" },
  { id: 27, name: "Coors Field",               team: "Colorado Rockies",       league: "NL West",    city: "Denver, CO",        capacity: 50398, opened: 1995, surface: "Grass" },
  { id: 28, name: "Petco Park",                team: "San Diego Padres",       league: "NL West",    city: "San Diego, CA",     capacity: 40209, opened: 2004, surface: "Grass" },
  { id: 29, name: "Tropicana Field",           team: "Tampa Bay Rays",         league: "AL East",    city: "St. Petersburg, FL",capacity: 25000, opened: 1990, surface: "Turf"  },
  { id: 30, name: "Rogers Centre",             team: "Toronto Blue Jays",      league: "AL East",    city: "Toronto, ON",       capacity: 49286, opened: 1989, surface: "Turf"  },
];

const SAMPLE_MEMORIES = [
  { id: 1, stadiumId: 3, content: "Dad got a foul ball in the 7th! Wrigley was electric — sold out, ivy on the walls, perfect summer afternoon. We did the ballpark tour in the morning. Absolutely bucket list.", date: "2022-07-15", title: "The Wrigley Day" },
  { id: 2, stadiumId: 6, content: "Camden Yards is the gold standard for retro parks. Had crab cakes at Boog's BBQ stand. Dad got a little emotional during the anthem — said it reminded him of Memorial Stadium.", date: "2019-06-16", title: "Father's Day at Camden" },
];

// ─── Icon Components ───────────────────────────────────────────────────────────
const HomeIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const StadiumIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);
const MemoryIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
  </svg>
);
const SettingsIcon = ({ active }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const StarIcon = ({ filled }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);
const BackIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

// ─── Toggle ────────────────────────────────────────────────────────────────────
function Toggle({ on, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none ${on ? "bg-red-500" : "bg-slate-600"}`}
    >
      <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200 ${on ? "translate-x-6" : "translate-x-1"}`} />
    </button>
  );
}

// ─── Main App ──────────────────────────────────────────────────────────────────
export default function BPChaser() {
  const [activeTab, setActiveTab] = useState("home");
  const [visited, setVisited] = useState(new Set([3,6,7,8,13,14,15,1,11,4,22,24,2,28]));
  const [wishlist, setWishlist] = useState(new Set([5,27,17,9]));
  const [memories, setMemories] = useState(SAMPLE_MEMORIES);
  const [selectedStadium, setSelectedStadium] = useState(null);
  const [memoryModal, setMemoryModal] = useState(false);
  const [addMemoryStadium, setAddMemoryStadium] = useState(null);
  const [newMemory, setNewMemory] = useState({ title: "", content: "", stadiumId: null });
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [notifications, setNotifications] = useState({ gameDay: true, newParks: true, milestones: true, memories: false });
  const [profile, setProfile] = useState({ name: "Baseball Fan", email: "fan@bpchaser.com", team: "Chicago Cubs" });
  const [editingProfile, setEditingProfile] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const total = STADIUMS.length;
  const visitedCount = visited.size;
  const pct = Math.round((visitedCount / total) * 100);

  const filtered = STADIUMS.filter(s => {
    const q = search.toLowerCase();
    const match = s.name.toLowerCase().includes(q) || s.team.toLowerCase().includes(q) || s.city.toLowerCase().includes(q);
    if (filter === "visited") return visited.has(s.id) && match;
    if (filter === "wishlist") return wishlist.has(s.id) && match;
    if (filter === "unvisited") return !visited.has(s.id) && match;
    return match;
  });

  const toggleVisited = id => setVisited(p => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const toggleWishlist = id => setWishlist(p => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; });

  const saveMemory = () => {
    if (!newMemory.content.trim()) return;
    setMemories(p => [...p, { id: Date.now(), stadiumId: addMemoryStadium?.id || newMemory.stadiumId, content: newMemory.content, title: newMemory.title || "My Memory", date: new Date().toISOString().split("T")[0] }]);
    setNewMemory({ title: "", content: "", stadiumId: null });
    setMemoryModal(false);
    setAddMemoryStadium(null);
  };

  const stadiumMemories = selectedStadium ? memories.filter(m => m.stadiumId === selectedStadium.id) : [];

  const TABS = [
    { id: "home",     label: "Home",     Icon: HomeIcon },
    { id: "stadiums", label: "Stadiums", Icon: StadiumIcon },
    { id: "memories", label: "Memories", Icon: MemoryIcon },
    { id: "settings", label: "Settings", Icon: SettingsIcon },
  ];

  return (
    <div className={`font-sans antialiased min-h-screen ${darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-100 text-slate-900"}`} style={{ maxWidth: 430, margin: "0 auto", position: "relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=DM+Serif+Display:ital@0;1&display=swap');
        * { box-sizing: border-box; }
        .font-display { font-family: 'DM Serif Display', serif; }
        .font-ui { font-family: 'Outfit', sans-serif; }
        body { font-family: 'Outfit', sans-serif; }
        input, textarea, select { font-family: 'Outfit', sans-serif; }
        ::-webkit-scrollbar { display: none; }
        .tab-content { padding-bottom: 90px; }
        .glass { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
      `}</style>

      {/* ── HEADER ── */}
      <header className={`sticky top-0 z-40 glass border-b px-5 py-4 ${darkMode ? "bg-slate-950/90 border-slate-800" : "bg-white/90 border-slate-200"}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center shadow-lg shadow-red-900/40">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <circle cx="12" cy="12" r="10" fill="white" stroke="#dc2626" strokeWidth="1.5"/>
                <path d="M5.5 12 Q12 6 18.5 12" stroke="#dc2626" strokeWidth="1.2" fill="none"/>
                <path d="M5.5 12 Q12 18 18.5 12" stroke="#dc2626" strokeWidth="1.2" fill="none"/>
                <path d="M5.5 12 Q8 9 9.5 12 Q8 15 5.5 12" stroke="#dc2626" strokeWidth="0.8" fill="none"/>
                <path d="M18.5 12 Q16 9 14.5 12 Q16 15 18.5 12" stroke="#dc2626" strokeWidth="0.8" fill="none"/>
              </svg>
            </div>
            <div>
              <h1 className="font-display text-xl leading-none" style={{color: darkMode ? "#f1f5f9" : "#0f172a"}}>BP Chaser</h1>
              <p className="font-ui text-xs tracking-widest uppercase mt-0.5" style={{color: darkMode ? "#64748b" : "#94a3b8"}}>Ballpark Passport</p>
            </div>
          </div>
          <div className="text-right">
            <div className="font-ui font-800 text-2xl leading-none text-red-500">{visitedCount}<span className="text-base font-normal" style={{color: darkMode ? "#475569" : "#94a3b8"}}>/{total}</span></div>
            <div className="text-xs mt-1" style={{color: darkMode ? "#475569" : "#94a3b8"}}>{pct}% complete</div>
          </div>
        </div>
        {/* Progress bar */}
        <div className={`mt-3 h-1.5 rounded-full overflow-hidden ${darkMode ? "bg-slate-800" : "bg-slate-200"}`}>
          <div className="h-full rounded-full bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-700" style={{ width: `${pct}%` }} />
        </div>
      </header>

      {/* ── TAB BAR ── */}
      <nav className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full z-40 glass border-t ${darkMode ? "bg-slate-950/95 border-slate-800" : "bg-white/95 border-slate-200"}`} style={{ maxWidth: 430 }}>
        <div className="flex">
          {TABS.map(({ id, label, Icon }) => {
            const active = activeTab === id;
            return (
              <button key={id} onClick={() => setActiveTab(id)} className={`flex-1 flex flex-col items-center gap-1 py-3 transition-colors font-ui ${active ? "text-red-500" : darkMode ? "text-slate-500" : "text-slate-400"}`}>
                <Icon active={active} />
                <span className="text-xs font-medium">{label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* ── CONTENT ── */}
      <div className="tab-content">

        {/* HOME TAB */}
        {activeTab === "home" && (
          <div className="px-4 pt-5 space-y-5">
            {/* Hero card */}
            <div className="rounded-2xl overflow-hidden relative" style={{ background: "linear-gradient(135deg, #7f1d1d 0%, #991b1b 40%, #1e293b 100%)" }}>
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 400 180">
                  <circle cx="320" cy="90" r="120" fill="white" opacity="0.15"/>
                  <circle cx="320" cy="90" r="80" fill="none" stroke="white" strokeWidth="1" opacity="0.2"/>
                </svg>
              </div>
              <div className="relative p-6">
                <p className="font-ui text-xs tracking-widest uppercase text-red-300 mb-1">Parks Visited</p>
                <div className="flex items-end gap-3 mb-4">
                  <span className="font-display text-7xl leading-none text-white">{visitedCount}</span>
                  <span className="font-display text-3xl leading-none text-red-300 mb-2">/ {total}</span>
                </div>
                <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                  <div className="h-full rounded-full bg-white transition-all duration-700" style={{ width: `${pct}%` }} />
                </div>
                <p className="font-ui text-sm text-red-200 mt-2">{total - visitedCount} parks left to chase</p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "On Wishlist", value: wishlist.size, accent: "text-amber-400" },
                { label: "Memories", value: memories.length, accent: "text-sky-400" },
              ].map(({ label, value, accent }) => (
                <div key={label} className={`rounded-2xl p-4 ${darkMode ? "bg-slate-900 border border-slate-800" : "bg-white border border-slate-200 shadow-sm"}`}>
                  <div className={`font-display text-4xl ${accent}`}>{value}</div>
                  <div className={`font-ui text-xs mt-1 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>{label}</div>
                </div>
              ))}
            </div>

            {/* Recent memories */}
            <div>
              <h2 className={`font-display text-xl mb-3 ${darkMode ? "text-slate-100" : "text-slate-800"}`}>Recent Memories</h2>
              <div className="space-y-3">
                {memories.slice().reverse().slice(0,3).map(mem => {
                  const stadium = STADIUMS.find(s => s.id === mem.stadiumId);
                  return (
                    <div key={mem.id} className={`rounded-2xl p-4 ${darkMode ? "bg-slate-900 border border-slate-800" : "bg-white border border-slate-200 shadow-sm"}`}>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className={`font-ui font-semibold text-sm ${darkMode ? "text-slate-100" : "text-slate-800"}`}>{mem.title}</span>
                        {stadium && <TeamBadge id={mem.stadiumId} size={28} />}
                      </div>
                      <p className={`font-ui text-sm leading-relaxed line-clamp-2 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>{mem.content}</p>
                      <p className={`font-ui text-xs mt-2 ${darkMode ? "text-slate-600" : "text-slate-400"}`}>{mem.date}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STADIUMS TAB */}
        {activeTab === "stadiums" && (
          <div className="pt-4">
            <div className="px-4 mb-3">
              <div className="flex items-center justify-between mb-3">
                <h2 className={`font-display text-xl ${darkMode ? "text-slate-100" : "text-slate-800"}`}>All 30 Parks</h2>
                <span className={`font-ui text-xs ${darkMode ? "text-slate-500" : "text-slate-400"}`}>{filtered.length} shown</span>
              </div>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search team, city, or stadium…"
                className={`w-full rounded-xl px-4 py-2.5 text-sm font-ui outline-none border transition-colors ${darkMode ? "bg-slate-900 border-slate-700 text-slate-100 placeholder-slate-500 focus:border-slate-500" : "bg-white border-slate-200 text-slate-800 placeholder-slate-400 focus:border-slate-300"}`}
              />
            </div>
            {/* Filter pills */}
            <div className="flex gap-2 px-4 mb-4 overflow-x-auto pb-1">
              {[["all","All"],["visited",`Visited (${visited.size})`],["wishlist",`Wishlist (${wishlist.size})`],["unvisited","Unvisited"]].map(([val, label]) => (
                <button key={val} onClick={() => setFilter(val)}
                  className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-ui font-medium transition-all border ${filter === val ? "bg-red-600 border-red-600 text-white" : darkMode ? "border-slate-700 text-slate-400 bg-transparent" : "border-slate-200 text-slate-500 bg-white"}`}>
                  {label}
                </button>
              ))}
            </div>
            {/* Stadium list */}
            <div className="px-4 space-y-2">
              {filtered.map(s => {
                const isV = visited.has(s.id);
                const isW = wishlist.has(s.id);
                const memCount = memories.filter(m => m.stadiumId === s.id).length;
                return (
                  <div key={s.id} onClick={() => setSelectedStadium(s)}
                    className={`rounded-2xl p-3.5 flex items-center gap-3 cursor-pointer transition-all active:scale-98 border ${
                      isV ? darkMode ? "bg-red-950/30 border-red-900/50" : "bg-red-50 border-red-200"
                      : isW ? darkMode ? "bg-amber-950/20 border-amber-900/40" : "bg-amber-50 border-amber-200"
                      : darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"
                    }`}>
                    <TeamBadge id={s.id} size={44} />
                    <div className="flex-1 min-w-0">
                      <div className={`font-ui font-semibold text-sm truncate ${darkMode ? "text-slate-100" : "text-slate-800"}`}>{s.name}</div>
                      <div className={`font-ui text-xs mt-0.5 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>{s.team}</div>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className={`font-ui text-xs px-2 py-0.5 rounded-full ${darkMode ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-500"}`}>{s.league}</span>
                        {memCount > 0 && <span className="font-ui text-xs text-sky-400">📸 {memCount}</span>}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2" onClick={e => e.stopPropagation()}>
                      <button onClick={() => toggleVisited(s.id)}
                        className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all border ${isV ? "bg-red-600 border-red-600 text-white" : darkMode ? "border-slate-700 text-slate-500" : "border-slate-200 text-slate-400"}`}>
                        <CheckIcon />
                      </button>
                      <button onClick={() => toggleWishlist(s.id)}
                        className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all border ${isW ? "bg-amber-500 border-amber-500 text-white" : darkMode ? "border-slate-700 text-slate-500" : "border-slate-200 text-slate-400"}`}>
                        <StarIcon filled={isW} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* MEMORIES TAB */}
        {activeTab === "memories" && (
          <div className="px-4 pt-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className={`font-display text-xl ${darkMode ? "text-slate-100" : "text-slate-800"}`}>Memories</h2>
              <button onClick={() => setMemoryModal(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-600 text-white text-xs font-ui font-semibold">
                <PlusIcon /> Add Memory
              </button>
            </div>
            {memories.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-5xl mb-3">📸</div>
                <p className={`font-ui text-sm ${darkMode ? "text-slate-500" : "text-slate-400"}`}>No memories yet. Start logging your games!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {memories.slice().reverse().map(mem => {
                  const stadium = STADIUMS.find(s => s.id === mem.stadiumId);
                  return (
                    <div key={mem.id} className={`rounded-2xl p-4 border ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className={`font-ui font-semibold text-sm ${darkMode ? "text-slate-100" : "text-slate-800"}`}>{mem.title}</span>
                        {stadium && <TeamBadge id={mem.stadiumId} size={32} />}
                      </div>
                      {stadium && <p className={`font-ui text-xs mb-2 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>{stadium.name}</p>}
                      <p className={`font-ui text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{mem.content}</p>
                      <p className={`font-ui text-xs mt-3 ${darkMode ? "text-slate-600" : "text-slate-400"}`}>{mem.date}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* SETTINGS TAB */}
        {activeTab === "settings" && (
          <div className="px-4 pt-5 pb-8 space-y-6">
            {/* Profile */}
            <div className={`rounded-2xl p-5 text-center border ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-red-900/30">
                <span className="text-2xl">⚾</span>
              </div>
              <div className={`font-ui font-semibold text-base ${darkMode ? "text-slate-100" : "text-slate-800"}`}>{profile.name}</div>
              <div className={`font-ui text-xs mt-1 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>{profile.email}</div>
              <button onClick={() => setEditingProfile(true)}
                className={`mt-3 px-4 py-1.5 rounded-full text-xs font-ui font-medium border transition-colors ${darkMode ? "border-slate-700 text-slate-400 hover:border-slate-500" : "border-slate-200 text-slate-500"}`}>
                Edit Profile
              </button>
            </div>

            {/* Notifications */}
            {[
              { section: "Notifications", rows: [
                { icon: "🔔", label: "Game Day Reminders", sub: "Alerts on days you have tickets", key: "gameDay" },
                { icon: "🏟️", label: "New Park Openings",  sub: "When new MLB venues are added",  key: "newParks" },
                { icon: "🏆", label: "Milestone Alerts",   sub: "Celebrate park count milestones", key: "milestones" },
                { icon: "📸", label: "Memory Prompts",     sub: "Reminders to log after games",    key: "memories" },
              ]},
            ].map(({ section, rows }) => (
              <div key={section}>
                <p className={`font-ui text-xs font-semibold tracking-widest uppercase mb-2 px-1 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>{section}</p>
                <div className={`rounded-2xl overflow-hidden border divide-y ${darkMode ? "bg-slate-900 border-slate-800 divide-slate-800" : "bg-white border-slate-200 divide-slate-100 shadow-sm"}`}>
                  {rows.map(({ icon, label, sub, key }) => (
                    <div key={key} onClick={() => setNotifications(p => ({ ...p, [key]: !p[key] }))} className="flex items-center gap-3 px-4 py-3.5 cursor-pointer">
                      <span className="text-lg w-7 text-center">{icon}</span>
                      <div className="flex-1">
                        <div className={`font-ui text-sm font-medium ${darkMode ? "text-slate-200" : "text-slate-700"}`}>{label}</div>
                        <div className={`font-ui text-xs mt-0.5 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>{sub}</div>
                      </div>
                      <Toggle on={notifications[key]} onToggle={() => setNotifications(p => ({ ...p, [key]: !p[key] }))} />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Appearance */}
            <div>
              <p className={`font-ui text-xs font-semibold tracking-widest uppercase mb-2 px-1 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>Appearance</p>
              <div className={`rounded-2xl overflow-hidden border ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
                <div onClick={() => setDarkMode(p => !p)} className="flex items-center gap-3 px-4 py-3.5 cursor-pointer">
                  <span className="text-lg w-7 text-center">{darkMode ? "🌙" : "☀️"}</span>
                  <div className="flex-1">
                    <div className={`font-ui text-sm font-medium ${darkMode ? "text-slate-200" : "text-slate-700"}`}>Dark Mode</div>
                    <div className={`font-ui text-xs mt-0.5 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>{darkMode ? "Looking sharp at night" : "Bright stadium vibes"}</div>
                  </div>
                  <Toggle on={darkMode} onToggle={() => setDarkMode(p => !p)} />
                </div>
              </div>
            </div>

            {/* Data & About */}
            <div>
              <p className={`font-ui text-xs font-semibold tracking-widest uppercase mb-2 px-1 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>Data & About</p>
              <div className={`rounded-2xl overflow-hidden border divide-y ${darkMode ? "bg-slate-900 border-slate-800 divide-slate-800" : "bg-white border-slate-200 divide-slate-100 shadow-sm"}`}>
                {[
                  { icon: "☁️", label: "iCloud Sync", sub: "Memories backed up" },
                  { icon: "📤", label: "Export My Data", sub: "Download all your stats" },
                  { icon: "⭐", label: "Rate BP Chaser", sub: "Leave an App Store review" },
                  { icon: "💬", label: "Send Feedback", sub: "Help us improve" },
                ].map(({ icon, label, sub }) => (
                  <div key={label} className="flex items-center gap-3 px-4 py-3.5 cursor-pointer">
                    <span className="text-lg w-7 text-center">{icon}</span>
                    <div className="flex-1">
                      <div className={`font-ui text-sm font-medium ${darkMode ? "text-slate-200" : "text-slate-700"}`}>{label}</div>
                      <div className={`font-ui text-xs mt-0.5 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>{sub}</div>
                    </div>
                    <span className={darkMode ? "text-slate-600" : "text-slate-300"}><ChevronRight /></span>
                  </div>
                ))}
              </div>
            </div>

            <button className={`w-full py-3 rounded-2xl font-ui font-medium text-sm border transition-colors ${darkMode ? "border-red-900/50 text-red-400 hover:bg-red-950/30" : "border-red-200 text-red-500 hover:bg-red-50"}`}>
              Sign Out
            </button>
            <p className={`text-center font-ui text-xs ${darkMode ? "text-slate-700" : "text-slate-400"}`}>BP Chaser · v1.0.0</p>
          </div>
        )}
      </div>

      {/* ── STADIUM DETAIL MODAL ── */}
      {selectedStadium && (
        <div className={`fixed inset-0 z-50 overflow-y-auto ${darkMode ? "bg-slate-950" : "bg-slate-50"}`} style={{ maxWidth: 430, margin: "0 auto" }}>
          {/* Header */}
          <div className={`sticky top-0 z-10 glass px-4 py-4 border-b ${darkMode ? "bg-slate-950/95 border-slate-800" : "bg-white/95 border-slate-200"}`}>
            <button onClick={() => setSelectedStadium(null)} className={`flex items-center gap-1.5 text-sm font-ui font-medium mb-4 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
              <BackIcon /> Back
            </button>
            <div className="flex items-center gap-4">
              <TeamBadge id={selectedStadium.id} size={56} />
              <div>
                <h2 className={`font-display text-xl leading-tight ${darkMode ? "text-slate-100" : "text-slate-800"}`}>{selectedStadium.name}</h2>
                <p className={`font-ui text-sm mt-0.5 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>{selectedStadium.team}</p>
                <p className={`font-ui text-xs mt-0.5 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>{selectedStadium.city} · {selectedStadium.league}</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button onClick={() => toggleVisited(selectedStadium.id)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-ui font-semibold transition-all border flex items-center justify-center gap-2 ${visited.has(selectedStadium.id) ? "bg-red-600 border-red-600 text-white" : darkMode ? "border-slate-700 text-slate-400" : "border-slate-200 text-slate-500"}`}>
                <CheckIcon /> {visited.has(selectedStadium.id) ? "Visited" : "Mark Visited"}
              </button>
              <button onClick={() => toggleWishlist(selectedStadium.id)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-ui font-semibold transition-all border flex items-center justify-center gap-2 ${wishlist.has(selectedStadium.id) ? "bg-amber-500 border-amber-500 text-white" : darkMode ? "border-slate-700 text-slate-400" : "border-slate-200 text-slate-500"}`}>
                <StarIcon filled={wishlist.has(selectedStadium.id)} /> {wishlist.has(selectedStadium.id) ? "Wishlisted" : "Wishlist"}
              </button>
            </div>
          </div>
          {/* Body */}
          <div className="px-4 pt-5 pb-24 space-y-5">
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Opened", value: selectedStadium.opened },
                { label: "Capacity", value: selectedStadium.capacity.toLocaleString() },
                { label: "Surface", value: selectedStadium.surface },
                { label: "League", value: selectedStadium.league },
              ].map(({ label, value }) => (
                <div key={label} className={`rounded-2xl p-4 border ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
                  <p className={`font-ui text-xs ${darkMode ? "text-slate-500" : "text-slate-400"}`}>{label}</p>
                  <p className={`font-display text-2xl mt-1 ${darkMode ? "text-slate-100" : "text-slate-800"}`}>{value}</p>
                </div>
              ))}
            </div>
            {/* Memories */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className={`font-display text-lg ${darkMode ? "text-slate-100" : "text-slate-800"}`}>Memories</h3>
                <button onClick={() => { setAddMemoryStadium(selectedStadium); setMemoryModal(true); }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600 text-white text-xs font-ui font-semibold">
                  <PlusIcon /> Add
                </button>
              </div>
              {stadiumMemories.length === 0 ? (
                <p className={`font-ui text-sm text-center py-8 ${darkMode ? "text-slate-600" : "text-slate-400"}`}>No memories yet for this park.</p>
              ) : (
                <div className="space-y-3">
                  {stadiumMemories.map(mem => (
                    <div key={mem.id} className={`rounded-2xl p-4 border ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
                      <p className={`font-ui font-semibold text-sm mb-2 ${darkMode ? "text-slate-100" : "text-slate-800"}`}>{mem.title}</p>
                      <p className={`font-ui text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{mem.content}</p>
                      <p className={`font-ui text-xs mt-2 ${darkMode ? "text-slate-600" : "text-slate-400"}`}>{mem.date}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── ADD MEMORY MODAL ── */}
      {memoryModal && (
        <div className={`fixed inset-0 z-50 flex flex-col ${darkMode ? "bg-slate-950" : "bg-slate-50"}`} style={{ maxWidth: 430, margin: "0 auto" }}>
          <div className={`flex items-center justify-between px-4 py-4 border-b ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
            <h2 className={`font-display text-xl ${darkMode ? "text-slate-100" : "text-slate-800"}`}>Add Memory</h2>
            <button onClick={() => { setMemoryModal(false); setAddMemoryStadium(null); }}
              className={`w-8 h-8 rounded-xl flex items-center justify-center border ${darkMode ? "border-slate-700 text-slate-400" : "border-slate-200 text-slate-500"}`}>
              <XIcon />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4">
            {addMemoryStadium ? (
              <div className={`flex items-center gap-3 p-3 rounded-2xl border ${darkMode ? "bg-slate-900 border-slate-700" : "bg-amber-50 border-amber-200"}`}>
                <TeamBadge id={addMemoryStadium.id} size={36} />
                <div>
                  <p className={`font-ui font-semibold text-sm ${darkMode ? "text-slate-100" : "text-slate-800"}`}>{addMemoryStadium.name}</p>
                  <p className={`font-ui text-xs ${darkMode ? "text-slate-500" : "text-slate-500"}`}>{addMemoryStadium.team}</p>
                </div>
              </div>
            ) : (
              <div>
                <label className={`block font-ui text-xs font-semibold tracking-wider uppercase mb-1.5 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>Stadium</label>
                <select value={newMemory.stadiumId || ""} onChange={e => setNewMemory(p => ({ ...p, stadiumId: parseInt(e.target.value) }))}
                  className={`w-full rounded-xl px-4 py-2.5 text-sm font-ui outline-none border ${darkMode ? "bg-slate-900 border-slate-700 text-slate-100" : "bg-white border-slate-200 text-slate-800"}`}>
                  <option value="">Select a stadium…</option>
                  {STADIUMS.filter(s => visited.has(s.id)).map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </div>
            )}
            <div>
              <label className={`block font-ui text-xs font-semibold tracking-wider uppercase mb-1.5 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>Title</label>
              <input value={newMemory.title} onChange={e => setNewMemory(p => ({ ...p, title: e.target.value }))}
                placeholder="e.g. Father's Day 2024 at Camden…"
                className={`w-full rounded-xl px-4 py-2.5 text-sm font-ui outline-none border ${darkMode ? "bg-slate-900 border-slate-700 text-slate-100 placeholder-slate-600" : "bg-white border-slate-200 text-slate-800 placeholder-slate-400"}`} />
            </div>
            <div>
              <label className={`block font-ui text-xs font-semibold tracking-wider uppercase mb-1.5 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>Your Memory</label>
              <textarea value={newMemory.content} onChange={e => setNewMemory(p => ({ ...p, content: e.target.value }))}
                placeholder="Write about the game, the food, the moments that made it special…"
                rows={5}
                className={`w-full rounded-xl px-4 py-3 text-sm font-ui outline-none border resize-none leading-relaxed ${darkMode ? "bg-slate-900 border-slate-700 text-slate-100 placeholder-slate-600" : "bg-white border-slate-200 text-slate-800 placeholder-slate-400"}`} />
            </div>
            <div className={`rounded-xl border-2 border-dashed p-6 text-center cursor-pointer transition-colors ${darkMode ? "border-slate-700 hover:border-slate-500" : "border-slate-200 hover:border-slate-300"}`}>
              <div className="text-2xl mb-1">📷</div>
              <p className={`font-ui text-xs ${darkMode ? "text-slate-500" : "text-slate-400"}`}>Tap to attach photos</p>
            </div>
            <button onClick={saveMemory} className="w-full py-3.5 rounded-2xl bg-red-600 text-white font-ui font-semibold text-sm hover:bg-red-700 transition-colors">
              Save Memory
            </button>
          </div>
        </div>
      )}

      {/* ── EDIT PROFILE MODAL ── */}
      {editingProfile && (
        <div className={`fixed inset-0 z-50 flex flex-col ${darkMode ? "bg-slate-950" : "bg-slate-50"}`} style={{ maxWidth: 430, margin: "0 auto" }}>
          <div className={`flex items-center justify-between px-4 py-4 border-b ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
            <h2 className={`font-display text-xl ${darkMode ? "text-slate-100" : "text-slate-800"}`}>Edit Profile</h2>
            <button onClick={() => setEditingProfile(false)}
              className={`w-8 h-8 rounded-xl flex items-center justify-center border ${darkMode ? "border-slate-700 text-slate-400" : "border-slate-200 text-slate-500"}`}>
              <XIcon />
            </button>
          </div>
          <div className="flex-1 px-4 py-5 space-y-4">
            {[
              { label: "Display Name", key: "name", placeholder: "Your name" },
              { label: "Email", key: "email", placeholder: "you@email.com" },
            ].map(({ label, key, placeholder }) => (
              <div key={key}>
                <label className={`block font-ui text-xs font-semibold tracking-wider uppercase mb-1.5 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>{label}</label>
                <input value={profile[key]} onChange={e => setProfile(p => ({ ...p, [key]: e.target.value }))} placeholder={placeholder}
                  className={`w-full rounded-xl px-4 py-2.5 text-sm font-ui outline-none border ${darkMode ? "bg-slate-900 border-slate-700 text-slate-100" : "bg-white border-slate-200 text-slate-800"}`} />
              </div>
            ))}
            <div>
              <label className={`block font-ui text-xs font-semibold tracking-wider uppercase mb-1.5 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>Favorite Team</label>
              <select value={profile.team} onChange={e => setProfile(p => ({ ...p, team: e.target.value }))}
                className={`w-full rounded-xl px-4 py-2.5 text-sm font-ui outline-none border ${darkMode ? "bg-slate-900 border-slate-700 text-slate-100" : "bg-white border-slate-200 text-slate-800"}`}>
                {STADIUMS.map(s => <option key={s.id} value={s.team}>{s.team}</option>)}
              </select>
            </div>
            <button onClick={() => setEditingProfile(false)} className="w-full py-3.5 rounded-2xl bg-red-600 text-white font-ui font-semibold text-sm mt-2">
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
