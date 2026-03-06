import { useState, useEffect } from "react";

const STADIUMS = [
  { id: 1, name: "Yankee Stadium", team: "New York Yankees", league: "AL East", city: "Bronx, NY", capacity: 54251, opened: 2009, surface: "Grass", img: "🗽" },
  { id: 2, name: "Fenway Park", team: "Boston Red Sox", league: "AL East", city: "Boston, MA", capacity: 37755, opened: 1912, surface: "Grass", img: "🦞" },
  { id: 3, name: "Wrigley Field", team: "Chicago Cubs", league: "NL Central", city: "Chicago, IL", capacity: 41649, opened: 1914, surface: "Grass", img: "🐻" },
  { id: 4, name: "Dodger Stadium", team: "Los Angeles Dodgers", league: "NL West", city: "Los Angeles, CA", capacity: 56000, opened: 1962, surface: "Grass", img: "🌴" },
  { id: 5, name: "Oracle Park", team: "San Francisco Giants", league: "NL West", city: "San Francisco, CA", capacity: 41915, opened: 2000, surface: "Grass", img: "🌉" },
  { id: 6, name: "Camden Yards", team: "Baltimore Orioles", league: "AL East", city: "Baltimore, MD", capacity: 45971, opened: 1992, surface: "Grass", img: "🦅" },
  { id: 7, name: "PNC Park", team: "Pittsburgh Pirates", league: "NL Central", city: "Pittsburgh, PA", capacity: 38362, opened: 2001, surface: "Grass", img: "⚓" },
  { id: 8, name: "Busch Stadium", team: "St. Louis Cardinals", league: "NL Central", city: "St. Louis, MO", capacity: 44494, opened: 2006, surface: "Grass", img: "🔔" },
  { id: 9, name: "Great American Ball Park", team: "Cincinnati Reds", league: "NL Central", city: "Cincinnati, OH", capacity: 42319, opened: 2003, surface: "Grass", img: "🎯" },
  { id: 10, name: "Guaranteed Rate Field", team: "Chicago White Sox", league: "AL Central", city: "Chicago, IL", capacity: 40615, opened: 1991, surface: "Grass", img: "🖤" },
  { id: 11, name: "Progressive Field", team: "Cleveland Guardians", league: "AL Central", city: "Cleveland, OH", capacity: 35041, opened: 1994, surface: "Grass", img: "🛡️" },
  { id: 12, name: "Comerica Park", team: "Detroit Tigers", league: "AL Central", city: "Detroit, MI", capacity: 41083, opened: 2000, surface: "Grass", img: "🐯" },
  { id: 13, name: "Kauffman Stadium", team: "Kansas City Royals", league: "AL Central", city: "Kansas City, MO", capacity: 37903, opened: 1973, surface: "Grass", img: "👑" },
  { id: 14, name: "Target Field", team: "Minnesota Twins", league: "AL Central", city: "Minneapolis, MN", capacity: 38544, opened: 2010, surface: "Grass", img: "⭐" },
  { id: 15, name: "Minute Maid Park", team: "Houston Astros", league: "AL West", city: "Houston, TX", capacity: 41168, opened: 2000, surface: "Grass", img: "🚀" },
  { id: 16, name: "Globe Life Field", team: "Texas Rangers", league: "AL West", city: "Arlington, TX", capacity: 40738, opened: 2020, surface: "Grass", img: "🤠" },
  { id: 17, name: "Angel Stadium", team: "Los Angeles Angels", league: "AL West", city: "Anaheim, CA", capacity: 45517, opened: 1966, surface: "Grass", img: "😇" },
  { id: 18, name: "T-Mobile Park", team: "Seattle Mariners", league: "AL West", city: "Seattle, WA", capacity: 47929, opened: 1999, surface: "Turf", img: "🧭" },
  { id: 19, name: "Oakland Coliseum", team: "Oakland Athletics", league: "AL West", city: "Oakland, CA", capacity: 46765, opened: 1968, surface: "Grass", img: "🏟️" },
  { id: 20, name: "Citi Field", team: "New York Mets", league: "NL East", city: "Queens, NY", capacity: 41922, opened: 2009, surface: "Grass", img: "🍎" },
  { id: 21, name: "Citizens Bank Park", team: "Philadelphia Phillies", league: "NL East", city: "Philadelphia, PA", capacity: 42792, opened: 2004, surface: "Grass", img: "🔔" },
  { id: 22, name: "Nationals Park", team: "Washington Nationals", league: "NL East", city: "Washington, DC", capacity: 41339, opened: 2008, surface: "Grass", img: "🏛️" },
  { id: 23, name: "Truist Park", team: "Atlanta Braves", league: "NL East", city: "Atlanta, GA", capacity: 41084, opened: 2017, surface: "Grass", img: "🪓" },
  { id: 24, name: "loanDepot park", team: "Miami Marlins", league: "NL East", city: "Miami, FL", capacity: 36742, opened: 2012, surface: "Grass", img: "🐟" },
  { id: 25, name: "American Family Field", team: "Milwaukee Brewers", league: "NL Central", city: "Milwaukee, WI", capacity: 41900, opened: 2001, surface: "Grass", img: "🧀" },
  { id: 26, name: "Chase Field", team: "Arizona Diamondbacks", league: "NL West", city: "Phoenix, AZ", capacity: 48519, opened: 1998, surface: "Grass", img: "🐍" },
  { id: 27, name: "Coors Field", team: "Colorado Rockies", league: "NL West", city: "Denver, CO", capacity: 50398, opened: 1995, surface: "Grass", img: "⛰️" },
  { id: 28, name: "Petco Park", team: "San Diego Padres", league: "NL West", city: "San Diego, CA", capacity: 40209, opened: 2004, surface: "Grass", img: "🐾" },
  { id: 29, name: "Tropicana Field", team: "Tampa Bay Rays", league: "AL East", city: "St. Petersburg, FL", capacity: 25000, opened: 1990, surface: "Turf", img: "☀️" },
  { id: 30, name: "Rogers Centre", team: "Toronto Blue Jays", league: "AL East", city: "Toronto, ON", capacity: 49286, opened: 1989, surface: "Turf", img: "🍁" },
];

const SAMPLE_MEMORIES = [
  { id: 1, stadiumId: 3, type: "note", content: "Dad got a foul ball in the 7th! Wrigley was electric — sold out, ivy on the walls, perfect summer afternoon. We did the ballpark tour in the morning. Absolutely bucket list.", date: "2022-07-15", title: "The Wrigley Day" },
  { id: 2, stadiumId: 6, type: "note", content: "Camden Yards is *the* gold standard for retro parks. Had crab cakes at the Boog's BBQ stand. Dad cried a little during the anthem — said it reminded him of Memorial Stadium.", date: "2019-06-16", title: "Father's Day at Camden" },
];

export default function BPChaser() {
  const [activeTab, setActiveTab] = useState("tracker");
  const [visited, setVisited] = useState(new Set([3, 6, 7, 8, 13, 14, 15, 1, 11, 4, 22, 24, 2, 28]));
  const [wishlist, setWishlist] = useState(new Set([5, 27, 17, 9]));
  const [memories, setMemories] = useState(SAMPLE_MEMORIES);
  const [selectedStadium, setSelectedStadium] = useState(null);
  const [memoryModal, setMemoryModal] = useState(false);
  const [newMemory, setNewMemory] = useState({ title: "", content: "", stadiumId: null });
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [addMemoryStadium, setAddMemoryStadium] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState({
    gameDay: true,
    newParks: true,
    milestones: true,
    memories: false,
  });
  const [profile, setProfile] = useState({ name: "Baseball Fan", email: "fan@bpchaser.com", favoriteTeam: "Chicago Cubs" });
  const [editingProfile, setEditingProfile] = useState(false);

  const totalParks = STADIUMS.length;
  const visitedCount = visited.size;
  const pct = Math.round((visitedCount / totalParks) * 100);

  const filteredStadiums = STADIUMS.filter(s => {
    const matchSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.city.toLowerCase().includes(searchTerm.toLowerCase());
    if (filter === "visited") return visited.has(s.id) && matchSearch;
    if (filter === "wishlist") return wishlist.has(s.id) && matchSearch;
    if (filter === "unvisited") return !visited.has(s.id) && matchSearch;
    return matchSearch;
  });

  const toggleVisited = (id) => {
    setVisited(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const toggleWishlist = (id) => {
    setWishlist(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const saveMemory = () => {
    if (!newMemory.content.trim()) return;
    setMemories(prev => [...prev, {
      id: Date.now(),
      stadiumId: addMemoryStadium?.id || newMemory.stadiumId,
      type: "note",
      content: newMemory.content,
      title: newMemory.title || "My Memory",
      date: new Date().toISOString().split("T")[0],
    }]);
    setNewMemory({ title: "", content: "", stadiumId: null });
    setMemoryModal(false);
    setAddMemoryStadium(null);
  };

  const stadiumMemories = selectedStadium ? memories.filter(m => m.stadiumId === selectedStadium.id) : [];

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "#0a0f1a",
      minHeight: "100vh",
      maxWidth: 430,
      margin: "0 auto",
      color: "#f0e6cc",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Serif+4:ital,wght@0,300;0,400;1,300&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .app-bg {
          background: 
            radial-gradient(ellipse at 20% 0%, rgba(180,30,30,0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 100%, rgba(212,160,23,0.12) 0%, transparent 50%),
            #0a0f1a;
          min-height: 100vh;
        }

        .header {
          background: linear-gradient(180deg, #0d1520 0%, rgba(13,21,32,0.95) 100%);
          border-bottom: 1px solid rgba(212,160,23,0.3);
          padding: 20px 20px 16px;
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(10px);
        }

        .logo-area {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 4px;
        }

        .logo-diamond {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #c41e3a, #8b0000);
          transform: rotate(45deg);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(196,30,58,0.4);
        }

        .logo-diamond-inner {
          transform: rotate(-45deg);
          font-size: 14px;
        }

        .app-title {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 900;
          color: #f0e6cc;
          letter-spacing: 0.02em;
          line-height: 1;
        }

        .app-subtitle {
          font-family: 'Source Serif 4', serif;
          font-size: 10px;
          color: #d4a017;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-top: 2px;
        }

        .progress-area {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 14px;
        }

        .progress-track {
          flex: 1;
          height: 6px;
          background: rgba(255,255,255,0.08);
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #c41e3a, #d4a017);
          border-radius: 3px;
          transition: width 0.6s ease;
        }

        .progress-label {
          font-family: 'Playfair Display', serif;
          font-size: 13px;
          color: #d4a017;
          white-space: nowrap;
        }

        .tab-bar {
          display: flex;
          background: #0d1520;
          border-bottom: 1px solid rgba(212,160,23,0.2);
        }

        .tab-btn {
          flex: 1;
          padding: 12px 4px 10px;
          border: none;
          background: transparent;
          color: rgba(240,230,204,0.45);
          font-family: 'Source Serif 4', serif;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s;
          border-bottom: 2px solid transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .tab-btn.active {
          color: #d4a017;
          border-bottom-color: #d4a017;
        }

        .tab-icon { font-size: 16px; }

        .content-area {
          padding: 0 0 100px;
          min-height: calc(100vh - 160px);
        }

        .section-header {
          padding: 20px 20px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          color: #f0e6cc;
        }

        .section-count {
          font-family: 'Source Serif 4', serif;
          font-size: 12px;
          color: rgba(240,230,204,0.5);
          letter-spacing: 0.05em;
        }

        .search-bar {
          margin: 0 20px 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(212,160,23,0.2);
          border-radius: 10px;
          padding: 10px 14px;
          color: #f0e6cc;
          font-family: 'Source Serif 4', serif;
          font-size: 14px;
          width: calc(100% - 40px);
          outline: none;
        }

        .search-bar::placeholder { color: rgba(240,230,204,0.3); }
        .search-bar:focus { border-color: rgba(212,160,23,0.5); }

        .filter-pills {
          display: flex;
          gap: 8px;
          padding: 0 20px 16px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .filter-pill {
          padding: 6px 14px;
          border-radius: 20px;
          border: 1px solid rgba(212,160,23,0.25);
          background: transparent;
          color: rgba(240,230,204,0.55);
          font-family: 'Source Serif 4', serif;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s;
        }

        .filter-pill.active {
          background: rgba(212,160,23,0.15);
          border-color: #d4a017;
          color: #d4a017;
        }

        .stadium-card {
          margin: 0 16px 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 14px 16px;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
          overflow: hidden;
        }

        .stadium-card:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(212,160,23,0.3);
          transform: translateY(-1px);
        }

        .stadium-card.visited {
          border-color: rgba(196,30,58,0.3);
          background: rgba(196,30,58,0.04);
        }

        .stadium-card.visited::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #c41e3a, #8b0000);
          border-radius: 14px 0 0 14px;
        }

        .stadium-card.wishlist {
          border-color: rgba(212,160,23,0.3);
          background: rgba(212,160,23,0.04);
        }

        .stadium-card.wishlist::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #d4a017, #a07010);
          border-radius: 14px 0 0 14px;
        }

        .card-top {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .card-emoji {
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        .card-info { flex: 1; min-width: 0; }

        .card-name {
          font-family: 'Playfair Display', serif;
          font-size: 15px;
          font-weight: 700;
          color: #f0e6cc;
          line-height: 1.2;
        }

        .card-team {
          font-family: 'Source Serif 4', serif;
          font-size: 11px;
          color: rgba(240,230,204,0.5);
          margin-top: 2px;
        }

        .card-city {
          font-family: 'Source Serif 4', serif;
          font-size: 11px;
          color: rgba(240,230,204,0.4);
        }

        .card-actions {
          display: flex;
          gap: 6px;
          flex-shrink: 0;
        }

        .action-btn {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.15s;
        }

        .action-btn:hover { transform: scale(1.1); }

        .action-btn.checked {
          background: rgba(196,30,58,0.2);
          border-color: rgba(196,30,58,0.4);
        }

        .action-btn.starred {
          background: rgba(212,160,23,0.2);
          border-color: rgba(212,160,23,0.4);
        }

        .card-meta {
          display: flex;
          gap: 10px;
          margin-top: 10px;
          padding-top: 10px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .meta-chip {
          font-family: 'Source Serif 4', serif;
          font-size: 10px;
          color: rgba(240,230,204,0.4);
          background: rgba(255,255,255,0.04);
          padding: 3px 8px;
          border-radius: 6px;
          letter-spacing: 0.05em;
        }

        .memory-badge {
          font-family: 'Source Serif 4', serif;
          font-size: 10px;
          color: #d4a017;
          background: rgba(212,160,23,0.1);
          padding: 3px 8px;
          border-radius: 6px;
          margin-left: auto;
        }

        /* Stadium Detail Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(5,8,15,0.92);
          z-index: 100;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          max-width: 430px;
          margin: 0 auto;
        }

        .modal-header {
          background: linear-gradient(135deg, #0d1520, #1a0810);
          padding: 20px;
          position: relative;
          border-bottom: 1px solid rgba(212,160,23,0.2);
        }

        .modal-back {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          color: #f0e6cc;
          padding: 7px 14px;
          border-radius: 8px;
          font-family: 'Source Serif 4', serif;
          font-size: 12px;
          cursor: pointer;
          margin-bottom: 16px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .modal-stadium-name {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 900;
          color: #f0e6cc;
          line-height: 1.1;
        }

        .modal-team {
          font-family: 'Source Serif 4', serif;
          font-size: 13px;
          color: #d4a017;
          margin-top: 4px;
          letter-spacing: 0.05em;
        }

        .modal-actions {
          display: flex;
          gap: 10px;
          margin-top: 16px;
        }

        .modal-action-btn {
          flex: 1;
          padding: 10px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          color: #f0e6cc;
          font-family: 'Source Serif 4', serif;
          font-size: 12px;
          letter-spacing: 0.05em;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.2s;
        }

        .modal-action-btn.active-visited {
          background: rgba(196,30,58,0.2);
          border-color: rgba(196,30,58,0.5);
          color: #ff6b6b;
        }

        .modal-action-btn.active-wish {
          background: rgba(212,160,23,0.2);
          border-color: rgba(212,160,23,0.5);
          color: #d4a017;
        }

        .modal-body { padding: 20px; }

        .stat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 24px;
        }

        .stat-box {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          padding: 12px;
        }

        .stat-label {
          font-family: 'Source Serif 4', serif;
          font-size: 10px;
          color: rgba(240,230,204,0.4);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          color: #f0e6cc;
        }

        .memories-section { }

        .mem-section-title {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          color: #f0e6cc;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .add-memory-btn {
          background: rgba(212,160,23,0.12);
          border: 1px solid rgba(212,160,23,0.3);
          color: #d4a017;
          padding: 6px 14px;
          border-radius: 8px;
          font-family: 'Source Serif 4', serif;
          font-size: 11px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .memory-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 14px;
          margin-bottom: 10px;
        }

        .memory-title {
          font-family: 'Playfair Display', serif;
          font-size: 15px;
          font-weight: 700;
          color: #f0e6cc;
          margin-bottom: 6px;
        }

        .memory-text {
          font-family: 'Source Serif 4', serif;
          font-size: 13px;
          color: rgba(240,230,204,0.65);
          line-height: 1.6;
          font-style: italic;
        }

        .memory-date {
          font-family: 'Source Serif 4', serif;
          font-size: 10px;
          color: rgba(240,230,204,0.35);
          margin-top: 8px;
          letter-spacing: 0.08em;
        }

        .empty-memories {
          text-align: center;
          padding: 30px 20px;
          color: rgba(240,230,204,0.35);
          font-family: 'Source Serif 4', serif;
          font-size: 13px;
          font-style: italic;
        }

        /* Memory Form Modal */
        .form-overlay {
          position: fixed;
          inset: 0;
          background: rgba(5,8,15,0.94);
          z-index: 200;
          display: flex;
          flex-direction: column;
          max-width: 430px;
          margin: 0 auto;
        }

        .form-header {
          padding: 20px;
          border-bottom: 1px solid rgba(212,160,23,0.2);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .form-title {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          color: #f0e6cc;
        }

        .close-btn {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          color: #f0e6cc;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 16px;
        }

        .form-body { padding: 20px; flex: 1; }

        .form-label {
          font-family: 'Source Serif 4', serif;
          font-size: 11px;
          color: rgba(240,230,204,0.5);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 8px;
          display: block;
        }

        .form-input, .form-textarea {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(212,160,23,0.2);
          border-radius: 10px;
          padding: 12px 14px;
          color: #f0e6cc;
          font-family: 'Source Serif 4', serif;
          font-size: 14px;
          outline: none;
          margin-bottom: 18px;
        }

        .form-input:focus, .form-textarea:focus {
          border-color: rgba(212,160,23,0.5);
        }

        .form-textarea {
          min-height: 140px;
          resize: none;
          line-height: 1.6;
          font-style: italic;
        }

        .form-input::placeholder, .form-textarea::placeholder {
          color: rgba(240,230,204,0.25);
          font-style: italic;
        }

        .save-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #c41e3a, #8b0000);
          border: none;
          border-radius: 12px;
          color: #f0e6cc;
          font-family: 'Playfair Display', serif;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.03em;
          transition: opacity 0.2s;
        }

        .save-btn:hover { opacity: 0.9; }

        /* Dashboard Tab */
        .dashboard-hero {
          margin: 20px 16px;
          background: linear-gradient(135deg, rgba(196,30,58,0.15), rgba(139,0,0,0.1));
          border: 1px solid rgba(196,30,58,0.25);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .dashboard-hero::before {
          content: '⚾';
          position: absolute;
          font-size: 100px;
          opacity: 0.04;
          top: -20px;
          right: -20px;
        }

        .hero-number {
          font-family: 'Playfair Display', serif;
          font-size: 64px;
          font-weight: 900;
          color: #c41e3a;
          line-height: 1;
          text-shadow: 0 4px 20px rgba(196,30,58,0.4);
        }

        .hero-denom {
          font-size: 28px;
          color: rgba(240,230,204,0.4);
        }

        .hero-label {
          font-family: 'Source Serif 4', serif;
          font-size: 12px;
          color: rgba(240,230,204,0.55);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-top: 6px;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin: 0 16px 20px;
        }

        .dash-stat {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 16px;
          text-align: center;
        }

        .dash-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          color: #d4a017;
        }

        .dash-stat-label {
          font-family: 'Source Serif 4', serif;
          font-size: 10px;
          color: rgba(240,230,204,0.45);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-top: 4px;
        }

        .recent-memories-section {
          padding: 0 16px;
        }

        .section-label {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          color: #f0e6cc;
          margin-bottom: 14px;
        }

        .league-section {
          margin-bottom: 24px;
        }

        .league-label {
          font-family: 'Source Serif 4', serif;
          font-size: 10px;
          color: rgba(212,160,23,0.7);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 0 20px 8px;
          border-bottom: 1px solid rgba(212,160,23,0.1);
          margin-bottom: 10px;
        }

        .photo-upload-area {
          border: 2px dashed rgba(212,160,23,0.25);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
          cursor: pointer;
          margin-bottom: 18px;
          transition: all 0.2s;
        }

        .photo-upload-area:hover {
          border-color: rgba(212,160,23,0.5);
          background: rgba(212,160,23,0.04);
        }

        .upload-icon { font-size: 28px; margin-bottom: 8px; }
        .upload-label {
          font-family: 'Source Serif 4', serif;
          font-size: 13px;
          color: rgba(240,230,204,0.4);
          font-style: italic;
        }

        /* Settings Tab */
        .settings-avatar {
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, #c41e3a, #8b0000);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          margin: 0 auto 12px;
          box-shadow: 0 6px 20px rgba(196,30,58,0.35);
        }

        .settings-name {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          color: #f0e6cc;
          text-align: center;
        }

        .settings-email {
          font-family: 'Source Serif 4', serif;
          font-size: 12px;
          color: rgba(240,230,204,0.45);
          text-align: center;
          margin-top: 4px;
        }

        .settings-section {
          margin: 0 16px 24px;
        }

        .settings-section-title {
          font-family: 'Source Serif 4', serif;
          font-size: 10px;
          color: rgba(212,160,23,0.7);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 10px;
          padding-left: 4px;
        }

        .settings-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          overflow: hidden;
        }

        .settings-row {
          display: flex;
          align-items: center;
          padding: 14px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          gap: 12px;
          cursor: pointer;
          transition: background 0.15s;
        }

        .settings-row:last-child { border-bottom: none; }
        .settings-row:hover { background: rgba(255,255,255,0.03); }

        .settings-row-icon {
          width: 32px;
          height: 32px;
          background: rgba(255,255,255,0.06);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          flex-shrink: 0;
        }

        .settings-row-info { flex: 1; min-width: 0; }

        .settings-row-label {
          font-family: 'Source Serif 4', serif;
          font-size: 14px;
          color: #f0e6cc;
        }

        .settings-row-sub {
          font-family: 'Source Serif 4', serif;
          font-size: 11px;
          color: rgba(240,230,204,0.4);
          margin-top: 2px;
        }

        .settings-row-right {
          font-family: 'Source Serif 4', serif;
          font-size: 11px;
          color: rgba(240,230,204,0.35);
          flex-shrink: 0;
        }

        /* Toggle Switch */
        .toggle-track {
          width: 44px;
          height: 24px;
          border-radius: 12px;
          background: rgba(255,255,255,0.1);
          position: relative;
          cursor: pointer;
          transition: background 0.25s;
          flex-shrink: 0;
        }

        .toggle-track.on { background: #c41e3a; }

        .toggle-thumb {
          width: 18px;
          height: 18px;
          background: #fff;
          border-radius: 50%;
          position: absolute;
          top: 3px;
          left: 3px;
          transition: transform 0.25s;
          box-shadow: 0 1px 4px rgba(0,0,0,0.3);
        }

        .toggle-track.on .toggle-thumb { transform: translateX(20px); }

        .edit-profile-btn {
          background: rgba(212,160,23,0.1);
          border: 1px solid rgba(212,160,23,0.25);
          color: #d4a017;
          padding: 8px 20px;
          border-radius: 20px;
          font-family: 'Source Serif 4', serif;
          font-size: 12px;
          letter-spacing: 0.06em;
          cursor: pointer;
          display: block;
          margin: 10px auto 0;
          transition: all 0.2s;
        }

        .edit-profile-btn:hover {
          background: rgba(212,160,23,0.18);
        }

        .signout-btn {
          width: calc(100% - 32px);
          margin: 0 16px;
          padding: 13px;
          background: transparent;
          border: 1px solid rgba(196,30,58,0.3);
          border-radius: 12px;
          color: rgba(196,30,58,0.8);
          font-family: 'Source Serif 4', serif;
          font-size: 14px;
          cursor: pointer;
          letter-spacing: 0.05em;
          transition: all 0.2s;
        }

        .signout-btn:hover {
          background: rgba(196,30,58,0.08);
          border-color: rgba(196,30,58,0.5);
        }

        .app-version {
          text-align: center;
          font-family: 'Source Serif 4', serif;
          font-size: 11px;
          color: rgba(240,230,204,0.2);
          padding: 16px 0 8px;
          letter-spacing: 0.08em;
        }

        /* Profile Edit Overlay */
        .profile-edit-overlay {
          position: fixed;
          inset: 0;
          background: rgba(5,8,15,0.94);
          z-index: 200;
          display: flex;
          flex-direction: column;
          max-width: 430px;
          margin: 0 auto;
        }
      
      `}</style>

      <div className="app-bg">
        {/* HEADER */}
        <div className="header">
          <div className="logo-area">
            <div className="logo-diamond">
              <span className="logo-diamond-inner">⚾</span>
            </div>
            <div>
              <div className="app-title">BP Chaser</div>
              <div className="app-subtitle">Ballpark Passport</div>
            </div>
          </div>
          <div className="progress-area">
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${pct}%` }} />
            </div>
            <div className="progress-label">{visitedCount}/{totalParks} parks</div>
          </div>
        </div>

        {/* TAB BAR */}
        <div className="tab-bar">
          {[
            { id: "dashboard", icon: "📊", label: "Home" },
            { id: "tracker", icon: "🏟️", label: "Stadiums" },
            { id: "memories", icon: "📸", label: "Memories" },
            { id: "settings", icon: "⚙️", label: "Settings" },
          ].map(t => (
            <button key={t.id} className={`tab-btn ${activeTab === t.id ? "active" : ""}`} onClick={() => setActiveTab(t.id)}>
              <span className="tab-icon">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="content-area">

          {/* DASHBOARD TAB */}
          {activeTab === "dashboard" && (
            <div>
              <div className="section-header">
                <div className="section-title">Your Journey</div>
              </div>

              <div className="dashboard-hero">
                <div className="hero-number">
                  {visitedCount}<span className="hero-denom">/{totalParks}</span>
                </div>
                <div className="hero-label">Ballparks Visited</div>
                <div className="progress-track" style={{ marginTop: 16 }}>
                  <div className="progress-fill" style={{ width: `${pct}%` }} />
                </div>
                <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 12, color: "rgba(240,230,204,0.45)", marginTop: 8 }}>
                  {pct}% of all MLB parks — {totalParks - visitedCount} remaining
                </div>
              </div>

              <div className="dashboard-grid">
                <div className="dash-stat">
                  <div className="dash-stat-num">{wishlist.size}</div>
                  <div className="dash-stat-label">On Wishlist</div>
                </div>
                <div className="dash-stat">
                  <div className="dash-stat-num">{memories.length}</div>
                  <div className="dash-stat-label">Memories</div>
                </div>
              </div>

              <div className="recent-memories-section">
                <div className="section-label">Recent Memories</div>
                {memories.slice(-3).reverse().map(mem => {
                  const stadium = STADIUMS.find(s => s.id === mem.stadiumId);
                  return (
                    <div key={mem.id} className="memory-card">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                        <div className="memory-title">{mem.title}</div>
                        {stadium && <span style={{ fontSize: 11, color: "rgba(212,160,23,0.7)", fontFamily: "'Source Serif 4', serif" }}>{stadium.name}</span>}
                      </div>
                      <div className="memory-text">{mem.content.slice(0, 120)}{mem.content.length > 120 ? "…" : ""}</div>
                      <div className="memory-date">{mem.date}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STADIUMS TAB */}
          {activeTab === "tracker" && (
            <div>
              <div className="section-header">
                <div className="section-title">All 30 Parks</div>
                <div className="section-count">{filteredStadiums.length} shown</div>
              </div>

              <input
                className="search-bar"
                placeholder="Search by team, city, or stadium…"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />

              <div className="filter-pills">
                {[["all", "All Parks"], ["visited", `Visited (${visited.size})`], ["wishlist", `Wishlist (${wishlist.size})`], ["unvisited", "Unvisited"]].map(([val, label]) => (
                  <button key={val} className={`filter-pill ${filter === val ? "active" : ""}`} onClick={() => setFilter(val)}>{label}</button>
                ))}
              </div>

              {filteredStadiums.map(stadium => {
                const isVisited = visited.has(stadium.id);
                const isWishlist = wishlist.has(stadium.id);
                const memCount = memories.filter(m => m.stadiumId === stadium.id).length;
                return (
                  <div
                    key={stadium.id}
                    className={`stadium-card ${isVisited ? "visited" : isWishlist ? "wishlist" : ""}`}
                    onClick={() => setSelectedStadium(stadium)}
                  >
                    <div className="card-top">
                      <div className="card-emoji">{stadium.img}</div>
                      <div className="card-info">
                        <div className="card-name">{stadium.name}</div>
                        <div className="card-team">{stadium.team}</div>
                        <div className="card-city">{stadium.city}</div>
                      </div>
                      <div className="card-actions" onClick={e => e.stopPropagation()}>
                        <button
                          className={`action-btn ${isVisited ? "checked" : ""}`}
                          onClick={() => toggleVisited(stadium.id)}
                          title="Mark visited"
                        >
                          {isVisited ? "✅" : "☐"}
                        </button>
                        <button
                          className={`action-btn ${isWishlist ? "starred" : ""}`}
                          onClick={() => toggleWishlist(stadium.id)}
                          title="Add to wishlist"
                        >
                          {isWishlist ? "⭐" : "☆"}
                        </button>
                      </div>
                    </div>
                    <div className="card-meta">
                      <span className="meta-chip">{stadium.league}</span>
                      <span className="meta-chip">Est. {stadium.opened}</span>
                      <span className="meta-chip">{stadium.capacity.toLocaleString()} cap</span>
                      {memCount > 0 && <span className="memory-badge">📸 {memCount} {memCount === 1 ? "memory" : "memories"}</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* MEMORIES TAB */}
          {activeTab === "memories" && (
            <div>
              <div className="section-header">
                <div className="section-title">Memories</div>
                <button className="add-memory-btn" onClick={() => setMemoryModal(true)}>
                  + Add Memory
                </button>
              </div>

              {memories.length === 0 ? (
                <div className="empty-memories">
                  <div style={{ fontSize: 40, marginBottom: 12 }}>📸</div>
                  No memories yet. Start by adding a note or photo from a game you attended.
                </div>
              ) : (
                memories.slice().reverse().map(mem => {
                  const stadium = STADIUMS.find(s => s.id === mem.stadiumId);
                  return (
                    <div key={mem.id} className="memory-card" style={{ margin: "0 16px 12px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                        <div className="memory-title">{mem.title}</div>
                      </div>
                      {stadium && (
                        <div style={{
                          display: "flex", alignItems: "center", gap: 6, marginBottom: 8,
                          fontFamily: "'Source Serif 4', serif", fontSize: 11,
                          color: "rgba(212,160,23,0.8)"
                        }}>
                          <span>{stadium.img}</span> {stadium.name}
                        </div>
                      )}
                      <div className="memory-text">{mem.content}</div>
                      <div className="memory-date">{mem.date}</div>
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* SETTINGS TAB */}
          {activeTab === "settings" && (
            <div style={{ paddingBottom: 40 }}>
              {/* Profile Card */}
              <div style={{ padding: "28px 20px 20px", textAlign: "center" }}>
                <div className="settings-avatar">⚾</div>
                <div className="settings-name">{profile.name}</div>
                <div className="settings-email">{profile.email}</div>
                <button className="edit-profile-btn" onClick={() => setEditingProfile(true)}>Edit Profile</button>
              </div>

              {/* Account */}
              <div className="settings-section">
                <div className="settings-section-title">Account</div>
                <div className="settings-card">
                  <div className="settings-row">
                    <div className="settings-row-icon">👤</div>
                    <div className="settings-row-info">
                      <div className="settings-row-label">Username</div>
                      <div className="settings-row-sub">{profile.name}</div>
                    </div>
                    <div className="settings-row-right">›</div>
                  </div>
                  <div className="settings-row">
                    <div className="settings-row-icon">📧</div>
                    <div className="settings-row-info">
                      <div className="settings-row-label">Email</div>
                      <div className="settings-row-sub">{profile.email}</div>
                    </div>
                    <div className="settings-row-right">›</div>
                  </div>
                  <div className="settings-row">
                    <div className="settings-row-icon">🔒</div>
                    <div className="settings-row-info">
                      <div className="settings-row-label">Password</div>
                      <div className="settings-row-sub">Last changed 3 months ago</div>
                    </div>
                    <div className="settings-row-right">›</div>
                  </div>
                  <div className="settings-row">
                    <div className="settings-row-icon">⚾</div>
                    <div className="settings-row-info">
                      <div className="settings-row-label">Favorite Team</div>
                      <div className="settings-row-sub">{profile.favoriteTeam}</div>
                    </div>
                    <div className="settings-row-right">›</div>
                  </div>
                </div>
              </div>

              {/* Notifications */}
              <div className="settings-section">
                <div className="settings-section-title">Push Notifications</div>
                <div className="settings-card">
                  {[
                    { key: "gameDay", icon: "🔔", label: "Game Day Reminders", sub: "Get notified on days you have tickets" },
                    { key: "newParks", icon: "🏟️", label: "New Park Openings", sub: "When new MLB venues are added" },
                    { key: "milestones", icon: "🏆", label: "Milestone Alerts", sub: "Celebrate park count milestones" },
                    { key: "memories", icon: "📸", label: "Memory Prompts", sub: "Reminders to log memories after games" },
                  ].map(({ key, icon, label, sub }) => (
                    <div key={key} className="settings-row" onClick={() => setNotifications(prev => ({ ...prev, [key]: !prev[key] }))}>
                      <div className="settings-row-icon">{icon}</div>
                      <div className="settings-row-info">
                        <div className="settings-row-label">{label}</div>
                        <div className="settings-row-sub">{sub}</div>
                      </div>
                      <div className={`toggle-track ${notifications[key] ? "on" : ""}`}>
                        <div className="toggle-thumb" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Appearance */}
              <div className="settings-section">
                <div className="settings-section-title">Appearance</div>
                <div className="settings-card">
                  <div className="settings-row" onClick={() => setDarkMode(prev => !prev)}>
                    <div className="settings-row-icon">{darkMode ? "🌙" : "☀️"}</div>
                    <div className="settings-row-info">
                      <div className="settings-row-label">Dark Mode</div>
                      <div className="settings-row-sub">{darkMode ? "Currently on — easier on the eyes at night" : "Currently off — bright stadium vibes"}</div>
                    </div>
                    <div className={`toggle-track ${darkMode ? "on" : ""}`}>
                      <div className="toggle-thumb" />
                    </div>
                  </div>
                  <div className="settings-row">
                    <div className="settings-row-icon">🗺️</div>
                    <div className="settings-row-info">
                      <div className="settings-row-label">Default Map View</div>
                      <div className="settings-row-sub">Show stadiums on a map</div>
                    </div>
                    <div className="settings-row-right">›</div>
                  </div>
                </div>
              </div>

              {/* Data & Privacy */}
              <div className="settings-section">
                <div className="settings-section-title">Data & Privacy</div>
                <div className="settings-card">
                  <div className="settings-row">
                    <div className="settings-row-icon">☁️</div>
                    <div className="settings-row-info">
                      <div className="settings-row-label">iCloud Sync</div>
                      <div className="settings-row-sub">Memories & progress backed up</div>
                    </div>
                    <div className={`toggle-track on`}><div className="toggle-thumb" /></div>
                  </div>
                  <div className="settings-row">
                    <div className="settings-row-icon">📤</div>
                    <div className="settings-row-info">
                      <div className="settings-row-label">Export My Data</div>
                      <div className="settings-row-sub">Download all memories & stats</div>
                    </div>
                    <div className="settings-row-right">›</div>
                  </div>
                  <div className="settings-row">
                    <div className="settings-row-icon">🔐</div>
                    <div className="settings-row-info">
                      <div className="settings-row-label">Privacy Policy</div>
                      <div className="settings-row-sub">How we handle your data</div>
                    </div>
                    <div className="settings-row-right">›</div>
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="settings-section">
                <div className="settings-section-title">About</div>
                <div className="settings-card">
                  <div className="settings-row">
                    <div className="settings-row-icon">⭐</div>
                    <div className="settings-row-info">
                      <div className="settings-row-label">Rate BP Chaser</div>
                      <div className="settings-row-sub">Leave a review on the App Store</div>
                    </div>
                    <div className="settings-row-right">›</div>
                  </div>
                  <div className="settings-row">
                    <div className="settings-row-icon">💬</div>
                    <div className="settings-row-info">
                      <div className="settings-row-label">Send Feedback</div>
                      <div className="settings-row-sub">Help us improve the app</div>
                    </div>
                    <div className="settings-row-right">›</div>
                  </div>
                </div>
              </div>

              <button className="signout-btn">Sign Out</button>
              <div className="app-version">BP Chaser · Version 1.0.0 · Built with ⚾</div>
            </div>
          )}

        </div>{/* end content-area */}

        {/* PROFILE EDIT OVERLAY */}
        {editingProfile && (
          <div className="profile-edit-overlay">
            <div className="form-header">
              <div className="form-title">Edit Profile</div>
              <button className="close-btn" onClick={() => setEditingProfile(false)}>✕</button>
            </div>
            <div className="form-body">
              <div className="settings-avatar" style={{ margin: "0 auto 20px" }}>⚾</div>
              <label className="form-label">Display Name</label>
              <input
                className="form-input"
                value={profile.name}
                onChange={e => setProfile(p => ({ ...p, name: e.target.value }))}
                placeholder="Your name"
              />
              <label className="form-label">Email</label>
              <input
                className="form-input"
                value={profile.email}
                onChange={e => setProfile(p => ({ ...p, email: e.target.value }))}
                placeholder="you@email.com"
              />
              <label className="form-label">Favorite Team</label>
              <select
                className="form-input"
                style={{ appearance: "none" }}
                value={profile.favoriteTeam}
                onChange={e => setProfile(p => ({ ...p, favoriteTeam: e.target.value }))}
              >
                {STADIUMS.map(s => <option key={s.id} value={s.team}>{s.team}</option>)}
              </select>
              <button className="save-btn" onClick={() => setEditingProfile(false)}>Save Changes</button>
            </div>
          </div>
        )}


        {selectedStadium && (
          <div className="modal-overlay">
            <div className="modal-header">
              <button className="modal-back" onClick={() => setSelectedStadium(null)}>← Back</button>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ fontSize: 40 }}>{selectedStadium.img}</div>
                <div>
                  <div className="modal-stadium-name">{selectedStadium.name}</div>
                  <div className="modal-team">{selectedStadium.team} · {selectedStadium.league}</div>
                  <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 11, color: "rgba(240,230,204,0.4)", marginTop: 2 }}>{selectedStadium.city}</div>
                </div>
              </div>
              <div className="modal-actions" style={{ marginTop: 16 }}>
                <button
                  className={`modal-action-btn ${visited.has(selectedStadium.id) ? "active-visited" : ""}`}
                  onClick={() => toggleVisited(selectedStadium.id)}
                >
                  {visited.has(selectedStadium.id) ? "✅ Visited" : "☐ Mark Visited"}
                </button>
                <button
                  className={`modal-action-btn ${wishlist.has(selectedStadium.id) ? "active-wish" : ""}`}
                  onClick={() => toggleWishlist(selectedStadium.id)}
                >
                  {wishlist.has(selectedStadium.id) ? "⭐ Wishlisted" : "☆ Add to Wishlist"}
                </button>
              </div>
            </div>

            <div className="modal-body">
              <div className="stat-grid">
                <div className="stat-box">
                  <div className="stat-label">Opened</div>
                  <div className="stat-value">{selectedStadium.opened}</div>
                </div>
                <div className="stat-box">
                  <div className="stat-label">Capacity</div>
                  <div className="stat-value">{selectedStadium.capacity.toLocaleString()}</div>
                </div>
                <div className="stat-box">
                  <div className="stat-label">Surface</div>
                  <div className="stat-value" style={{ fontSize: 14 }}>{selectedStadium.surface}</div>
                </div>
                <div className="stat-box">
                  <div className="stat-label">League</div>
                  <div className="stat-value" style={{ fontSize: 13 }}>{selectedStadium.league}</div>
                </div>
              </div>

              <div className="memories-section">
                <div className="mem-section-title">
                  Memories
                  <button className="add-memory-btn" onClick={() => { setAddMemoryStadium(selectedStadium); setMemoryModal(true); }}>
                    + Add
                  </button>
                </div>

                {stadiumMemories.length === 0 ? (
                  <div className="empty-memories">
                    No memories yet for this park. Attend a game and add your first memory!
                  </div>
                ) : (
                  stadiumMemories.map(mem => (
                    <div key={mem.id} className="memory-card">
                      <div className="memory-title">{mem.title}</div>
                      <div className="memory-text">{mem.content}</div>
                      <div className="memory-date">{mem.date}</div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* ADD MEMORY MODAL */}
        {memoryModal && (
          <div className="form-overlay">
            <div className="form-header">
              <div className="form-title">Add a Memory</div>
              <button className="close-btn" onClick={() => { setMemoryModal(false); setAddMemoryStadium(null); }}>✕</button>
            </div>
            <div className="form-body">
              {addMemoryStadium ? (
                <div style={{
                  display: "flex", alignItems: "center", gap: 10, marginBottom: 20,
                  padding: "10px 14px",
                  background: "rgba(212,160,23,0.08)",
                  border: "1px solid rgba(212,160,23,0.2)",
                  borderRadius: 10
                }}>
                  <span style={{ fontSize: 22 }}>{addMemoryStadium.img}</span>
                  <div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 14, color: "#f0e6cc" }}>{addMemoryStadium.name}</div>
                    <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 11, color: "rgba(212,160,23,0.7)" }}>{addMemoryStadium.team}</div>
                  </div>
                </div>
              ) : (
                <>
                  <label className="form-label">Stadium</label>
                  <select
                    className="form-input"
                    style={{ appearance: "none" }}
                    value={newMemory.stadiumId || ""}
                    onChange={e => setNewMemory(prev => ({ ...prev, stadiumId: parseInt(e.target.value) }))}
                  >
                    <option value="">Select a stadium…</option>
                    {STADIUMS.filter(s => visited.has(s.id)).map(s => (
                      <option key={s.id} value={s.id}>{s.name} — {s.team}</option>
                    ))}
                  </select>
                </>
              )}

              <label className="form-label">Memory Title</label>
              <input
                className="form-input"
                placeholder="e.g. Father's Day 2023 at Camden…"
                value={newMemory.title}
                onChange={e => setNewMemory(prev => ({ ...prev, title: e.target.value }))}
              />

              <label className="form-label">Your Memory</label>
              <textarea
                className="form-textarea"
                placeholder="Write about the game, the food, the people, the moments that made it special…"
                value={newMemory.content}
                onChange={e => setNewMemory(prev => ({ ...prev, content: e.target.value }))}
              />

              <div className="photo-upload-area">
                <div className="upload-icon">📷</div>
                <div className="upload-label">Tap to attach photos from this game</div>
                <div style={{ fontFamily: "'Source Serif 4', serif", fontSize: 10, color: "rgba(240,230,204,0.25)", marginTop: 4 }}>JPEG, PNG up to 10MB</div>
              </div>

              <button className="save-btn" onClick={saveMemory}>Save Memory</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
