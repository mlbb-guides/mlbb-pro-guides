// ===== HERO DATA WITH OFFICIAL MLBB API IMAGES =====
// Using official Moonton CDN - verified working URLs

const HEROES_DATA = {
    // ===== TANKS =====
    tanks: [
        { name: "Atlas", tier: "S", winRate: 53.2, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_a2f68d5c30c0198006b2c85b7a5cb48b.png", color: "#4361ee" },
        { name: "Khufra", tier: "S", winRate: 52.8, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_398cd0a73db63a4b098ab28de5953a0d.png", color: "#7209b7" },
        { name: "Edith", tier: "A", winRate: 51.5, img: "https://akmweb.youngjoygame.com/web/madmin/image/04d1a3a5e49f6a68604bab57ca96ab5c.png", color: "#f72585" },
        { name: "Tigreal", tier: "A", winRate: 51.2, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_23a7a603ff9d20074777d52e2eb202f3.jpg", color: "#3a86ff" },
        { name: "Franco", tier: "A", winRate: 50.8, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_07605801972ede9147e9769ac7991aa0.png", color: "#8338ec" },
        { name: "Grock", tier: "B", winRate: 49.5, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_47c9a9a373919fd9cc0c68ff7788b32a.png", color: "#fb8500" },
        { name: "Hylos", tier: "B", winRate: 49.2, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_f3ddb1088279d711417234034024223d.png", color: "#06d6a0" },
    ],

    // ===== FIGHTERS =====
    fighters: [
        { name: "Chou", tier: "S", winRate: 52.4, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_a3dd4a2b8bd5b8f25a8dd520f2c1c71a.png", color: "#ff6b35" },
        { name: "Esmeralda", tier: "S", winRate: 53.1, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_b691012cb168b31b172da8b62552e746.png", color: "#06d6a0" },
        { name: "Yu Zhong", tier: "A", winRate: 51.9, img: "https://akmweb.youngjoygame.com/web/madmin/image/d53f0e10d58b1841219073c026febc51.jpg", color: "#ffd60a" },
        { name: "Paquito", tier: "A", winRate: 51.5, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_f3695c153689c30f8ebfd334931e0525.jpg", color: "#e63946" },
        { name: "X.Borg", tier: "A", winRate: 51.2, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_1d4d7dfe38cb5e0fcfcf06b8af6b2103.png", color: "#f77f00" },
        { name: "Aldous", tier: "B", winRate: 50.1, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_433f9653743e72e1e152428d26838f9e.png", color: "#7b2cbf" },
        { name: "Guinevere", tier: "B", winRate: 49.8, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_0bb9349ff0a17747c126ea107a11e6cd.png", color: "#ff006e" },
    ],

    // ===== ASSASSINS =====
    assassins: [
        { name: "Ling", tier: "S", winRate: 54.2, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_cdbe15a03ad4518f37d89c9e1cbf5c4e.png", color: "#9d4edd" },
        { name: "Lancelot", tier: "S", winRate: 52.7, img: "https://akmweb.youngjoygame.com/web/madmin/image/e20549844522450e535e614538699eb9.png", color: "#480ca8" },
        { name: "Fanny", tier: "S", winRate: 53.5, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_523a730c11b8c22fc6c3fcc5575c29a2.png", color: "#4cc9f0" },
        { name: "Hayabusa", tier: "A", winRate: 51.3, img: "https://akmweb.youngjoygame.com/web/madmin/image/3de2f55e701a340a02f1828e79cdb9fa.png", color: "#e63946" },
        { name: "Gusion", tier: "A", winRate: 51.0, img: "https://akmweb.youngjoygame.com/web/madmin/image/0226b7cc6015fb50aa8ff4e1c9cf8c62.png", color: "#3a86ff" },
        { name: "Helcurt", tier: "B", winRate: 49.5, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_2baf1efb2d414acedf4a89b6fa330ad2.png", color: "#6b21a8" },
        { name: "Saber", tier: "B", winRate: 49.2, img: "https://akmweb.youngjoygame.com/web/madmin/image/35a5d68d1704e2c4c6323abd4859a622.jpg", color: "#0077b6" },
    ],

    // ===== MARKSMEN =====
    marksmen: [
        { name: "Beatrix", tier: "S", winRate: 53.8, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_bc9478f69dafbf6ff27d8e19899637ca.png", color: "#00b4d8" },
        { name: "Wanwan", tier: "S", winRate: 52.1, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_d744e6f02ba1d9b5f246a5532cc2b201.png", color: "#fb8500" },
        { name: "Brody", tier: "A", winRate: 51.7, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_b09c321e1766f686935775d11ad22787.jpg", color: "#2ec4b6" },
        { name: "Clint", tier: "A", winRate: 51.4, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_324e2b04393700944b2b54f2f6c939b5.jpg", color: "#d4a373" },
        { name: "Moskov", tier: "A", winRate: 51.0, img: "https://akmweb.youngjoygame.com/web/madmin/image/2f37c7bb49843330b8b972f11b60da08.png", color: "#7209b7" },
        { name: "Layla", tier: "B", winRate: 50.5, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_a05a03db633cc03ef3f733d2786073c4.jpg", color: "#f72585" },
        { name: "Miya", tier: "B", winRate: 50.2, img: "https://akmweb.youngjoygame.com/web/madmin/image/59dbdf2e55e8c1c15f1ef7221366b06f.png", color: "#4361ee" },
    ],

    // ===== MAGES =====
    mages: [
        { name: "Yve", tier: "S", winRate: 54.1, img: "https://akmweb.youngjoygame.com/web/madmin/image/a5287c3bf2d77b64314528d437ec365b.png", color: "#8338ec" },
        { name: "Valentina", tier: "S", winRate: 53.5, img: "https://akmweb.youngjoygame.com/web/madmin/image/3fcfa9c74ac47800a3e13a5985d76e55.png", color: "#ff006e" },
        { name: "Kagura", tier: "A", winRate: 52.0, img: "https://akmweb.youngjoygame.com/web/madmin/image/b7bedaacdacd3de349e538f72fe640c9.png", color: "#06d6a0" },
        { name: "Pharsa", tier: "A", winRate: 51.8, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_212e59ee7c8490397278ba68c8063a19.png", color: "#3a0ca3" },
        { name: "Cecilion", tier: "A", winRate: 51.5, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_a66ec3b1b8036839538cc0ade8aff50c.jpg", color: "#9d0208" },
        { name: "Eudora", tier: "B", winRate: 50.8, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_ed32e3c71ecd41652fc54a7efd02aba4.jpg", color: "#0077b6" },
        { name: "Nana", tier: "B", winRate: 50.5, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_08d0332be76ff7bdd894f7c7227be56c.png", color: "#ffd60a" },
    ],

    // ===== SUPPORTS =====
    supports: [
        { name: "Floryn", tier: "S", winRate: 55.2, img: "https://akmweb.youngjoygame.com/web/madmin/image/ddd105d16922b8122368acb0a8f3606f.png", color: "#38b000" },
        { name: "Mathilda", tier: "S", winRate: 53.9, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_74d09f52db9256502ecf2c32211a8102.jpg", color: "#00b4d8" },
        { name: "Angela", tier: "A", winRate: 52.3, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_feffcc9c39731586e645dbef2ce70afd.png", color: "#ffd60a" },
        { name: "Estes", tier: "A", winRate: 52.0, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_42b2d76fe927ce57a1d29e220e2b5eea.png", color: "#70e000" },
        { name: "Rafaela", tier: "B", winRate: 51.0, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_549ab8159821398b48e7e79ceb298396.png", color: "#90e0ef" },
        { name: "Diggie", tier: "B", winRate: 50.5, img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_84b30de71c6315ecc936a8b4d5076efc.png", color: "#fb8500" },
    ]
};

// Role icons and metadata
const ROLES = [
    { id: "tanks", name: "Tank", icon: "🛡️", color: "#4361ee" },
    { id: "fighters", name: "Fighter", icon: "⚔️", color: "#ff6b35" },
    { id: "assassins", name: "Assassin", icon: "🗡️", color: "#9d4edd" },
    { id: "marksmen", name: "Marksman", icon: "🏹", color: "#00b4d8" },
    { id: "mages", name: "Mage", icon: "🔮", color: "#8338ec" },
    { id: "supports", name: "Support", icon: "💚", color: "#38b000" }
];

// ===== BUILDS DATA =====
const BUILDS_DATA = {
    "Chou": {
        role: "Fighter/Assassin",
        difficulty: "Hard",
        emblem: "Assassin - Killing Spree",
        spell: "Flicker",
        items: ["Tough Boots", "Blade of Heptaseas", "Malefic Roar", "Blade of Despair", "Endless Battle", "Immortality"],
        tips: "Use 1st skill to poke, then combo with 2nd + ult for picks. Save Flicker to extend ult range or escape.",
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_a3dd4a2b8bd5b8f25a8dd520f2c1c71a.png"
    },
    "Ling": {
        role: "Assassin",
        difficulty: "Very Hard",
        emblem: "Assassin - Killing Spree",
        spell: "Retribution",
        items: ["Rapid Boots", "Blade of Heptaseas", "Berserker's Fury", "Endless Battle", "Malefic Roar", "Blade of Despair"],
        tips: "Farm fast early game. Use walls to escape and reposition. Only engage when ult is ready.",
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_cdbe15a03ad4518f37d89c9e1cbf5c4e.png"
    },
    "Beatrix": {
        role: "Marksman",
        difficulty: "Hard",
        emblem: "Marksman - Weakness Finder",
        spell: "Flicker",
        items: ["Swift Boots", "Windtalker", "Berserker's Fury", "Scarlet Phantom", "Blade of Despair", "Malefic Roar"],
        tips: "Use Renner for burst, Nibiru for sustained damage. Switch weapons based on situation.",
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_bc9478f69dafbf6ff27d8e19899637ca.png"
    },
    "Lancelot": {
        role: "Assassin",
        difficulty: "Hard",
        emblem: "Assassin - Killing Spree",
        spell: "Retribution",
        items: ["Magic Shoes", "Blade of Heptaseas", "Endless Battle", "Blade of Despair", "Malefic Roar", "Immortality"],
        tips: "Master the skill reset timing. Use S2 for immunity frames. Target squishy backline first.",
        img: "https://akmweb.youngjoygame.com/web/madmin/image/e20549844522450e535e614538699eb9.png"
    },
    "Fanny": {
        role: "Assassin",
        difficulty: "Very Hard",
        emblem: "Assassin - Killing Spree",
        spell: "Retribution",
        items: ["Rapid Boots", "Blade of Heptaseas", "Malefic Roar", "Hunter Strike", "Blade of Despair", "Immortality"],
        tips: "Practice cable combos in custom. Energy management is key. Invade enemy jungle early.",
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_523a730c11b8c22fc6c3fcc5575c29a2.png"
    },
    "Atlas": {
        role: "Tank",
        difficulty: "Medium",
        emblem: "Tank - Concussive Blast",
        spell: "Flicker",
        items: ["Tough Boots", "Dominance Ice", "Athena's Shield", "Antique Cuirass", "Immortality", "Radiant Armor"],
        tips: "Use Flicker + Ult combo for surprise team wipes. Stay with your team in teamfights.",
        img: "https://akmwebstatic.yuanzhanapp.com/web/madmin/image_a2f68d5c30c0198006b2c85b7a5cb48b.png"
    },
    "Hayabusa": {
        role: "Assassin",
        difficulty: "Hard",
        emblem: "Assassin - Killing Spree",
        spell: "Retribution",
        items: ["Magic Shoes", "Blade of Heptaseas", "Endless Battle", "Blade of Despair", "Malefic Roar", "Immortality"],
        tips: "Use shadows to confuse enemies and escape. Ult when enemy is isolated for maximum damage.",
        img: "https://akmweb.youngjoygame.com/web/madmin/image/3de2f55e701a340a02f1828e79cdb9fa.png"
    },
    "Gusion": {
        role: "Assassin",
        difficulty: "Very Hard",
        emblem: "Assassin - Killing Spree",
        spell: "Retribution",
        items: ["Magic Shoes", "Calamity Reaper", "Genius Wand", "Holy Crystal", "Divine Glaive", "Blood Wings"],
        tips: "Master the dagger recall combo. Always aim for squishy targets. Use 2nd skill to chase or escape.",
        img: "https://akmweb.youngjoygame.com/web/madmin/image/0226b7cc6015fb50aa8ff4e1c9cf8c62.png"
    },
    "Kagura": {
        role: "Mage",
        difficulty: "Very Hard",
        emblem: "Mage - Magic Worship",
        spell: "Flicker",
        items: ["Demon Shoes", "Clock of Destiny", "Lightning Truncheon", "Holy Crystal", "Divine Glaive", "Blood Wings"],
        tips: "Master umbrella positioning. Use blue skill for poke, link + pull combo for burst damage.",
        img: "https://akmweb.youngjoygame.com/web/madmin/image/b7bedaacdacd3de349e538f72fe640c9.png"
    }
};
