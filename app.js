// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('Service Worker registriert'))
        .catch(err => console.log('SW Error:', err));
}

// Bayern München Daily Facts
const bayernFacts = [
    "Der FC Bayern wurde 1900 gegründet und ist damit einer der ältesten Vereine Deutschlands.",
    "Die Allianz Arena kann ihre Farbe ändern - rot für Bayern, blau für 1860, weiß für die Nationalmannschaft.",
    "Franz Beckenbauer gewann als einziger Mensch die WM als Spieler (1974) und Trainer (1990).",
    "Bayern München hat die meisten Bundesliga-Meisterschaften: 33 Titel!",
    "Robert Lewandowski erzielte 2020/21 in einer Saison 41 Bundesliga-Tore - Rekord!",
    "Die längste Siegesserie des FC Bayern: 19 Spiele in Folge (2013/14).",
    "Bayern hat mehr als 300.000 Mitglieder - größter Sportverein der Welt!",
    "Oliver Kahn hielt 2001/02 in 15 CL-Spielen nur 3 Gegentore - legendär!",
    "Das Triple 2013 und 2020 - nur Bayern schaffte es zweimal!",
    "Gerd Müller erzielte 365 Bundesliga-Tore - bis heute unübertroffen (Tore pro Spiel)."
];

// Phil Foden Daily Facts
const fodenFacts = [
    "Phil Foden ist seit seinem 8. Lebensjahr bei Manchester City - ein echtes 'City Kid'.",
    "Er gewann 2017 die U17-WM mit England und wurde zum besten Spieler des Turniers gewählt.",
    "Pep Guardiola nannte ihn 'den talentiertesten Spieler, den ich je trainiert habe'.",
    "Foden war der jüngste Spieler, der je für City in der Champions League spielte (17 Jahre).",
    "2021 wurde er zum PFA Young Player of the Year gewählt.",
    "Sein Spitzname 'Stockport Iniesta' vergleicht ihn mit der Barca-Legende.",
    "Phil Foden gewann 2023 mit City das historische Treble (Premier League, FA Cup, Champions League).",
    "Er kann auf 6 Positionen spielen - von Links außen bis Zentrales Mittelfeld.",
    "Foden ist der erste Spieler, der in allen 4 englischen Top-Wettbewerben in einer Saison traf.",
    "Seine Trikotnummer 47 trägt er seit der Jugend - Glückszahl!"
];

// Bayern München News (Dummy Data)
const bayernNews = [
    {
        icon: "⚽",
        title: "Bayern siegt 3:1 gegen Augsburg",
        text: "Souveräner Heimsieg in der Allianz Arena. Kane mit Doppelpack.",
        url: "https://fcbayern.com"
    },
    {
        icon: "🏆",
        title: "Neuer verlängert Vertrag bis 2026",
        text: "Kapitän Manuel Neuer bleibt dem Rekordmeister langfristig erhalten.",
        url: "https://fcbayern.com"
    },
    {
        icon: "📰",
        title: "Tuchel plant Rotation für Champions League",
        text: "Trainer will gegen PSG auf frische Kräfte setzen.",
        url: "https://fcbayern.com"
    },
    {
        icon: "👕",
        title: "Neues Trikot für Saison 2026/27 vorgestellt",
        text: "Modernes Design in klassischem Rot-Weiß mit goldenen Akzenten.",
        url: "https://fcbayern.com"
    },
    {
        icon: "🎯",
        title: "Transfer-Gerüchte: Bayern an Youngster interessiert",
        text: "Laut Medienberichten soll ein 18-jähriges Talent beobachtet werden.",
        url: "https://fcbayern.com"
    }
];

// Phil Foden News (Dummy Data)
const fodenNews = [
    {
        icon: "⭐",
        title: "Foden glänzt bei City-Sieg",
        text: "Zwei Tore und eine Vorlage gegen Arsenal - Mann des Spiels!",
        url: "https://mancity.com"
    },
    {
        icon: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        title: "England-Nominierung bestätigt",
        text: "Foden ist Teil des Kaders für die anstehenden Länderspiele.",
        url: "https://mancity.com"
    },
    {
        icon: "💬",
        title: "Guardiola lobt Foden nach Gala-Vorstellung",
        text: "Der Trainer schwärmt von der Entwicklung seines Schützlings.",
        url: "https://mancity.com"
    },
    {
        icon: "📊",
        title: "Foden führt City-Statistik an",
        text: "Die meisten Scorerpunkte aller Premier-League-Spieler im Februar.",
        url: "https://mancity.com"
    },
    {
        icon: "🎥",
        title: "Interview: Foden über seine Ziele",
        text: "Der Mittelfeldstar spricht über Ambitionen für die Saison.",
        url: "https://mancity.com"
    }
];

// Tab Navigation
const navButtons = document.querySelectorAll('.nav-btn');
const tabContents = document.querySelectorAll('.tab-content');

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;
        
        // Remove active class from all
        navButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(tc => tc.classList.remove('active'));
        
        // Add active class to clicked
        btn.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Refresh Button
document.getElementById('refresh-btn').addEventListener('click', () => {
    loadAllNews();
});

// Load News
function loadAllNews() {
    loadNews('bayern-news-list', bayernNews);
    loadNews('foden-news-list', fodenNews);
    loadDailyFacts();
}

function loadNews(containerId, newsData) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    newsData.forEach(item => {
        const newsItem = document.createElement('a');
        newsItem.className = 'news-item';
        newsItem.href = item.url;
        newsItem.target = '_blank';
        newsItem.innerHTML = `
            <div class="news-icon">${item.icon}</div>
            <div class="news-content">
                <h3>${item.title}</h3>
                <p>${item.text}</p>
                <div class="news-meta">vor ${Math.floor(Math.random() * 12) + 1} Stunden</div>
            </div>
        `;
        container.appendChild(newsItem);
    });
}

// Daily Fact (basierend auf Datum)
function loadDailyFacts() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    
    const bayernFactIndex = dayOfYear % bayernFacts.length;
    const fodenFactIndex = dayOfYear % fodenFacts.length;
    
    document.getElementById('bayern-daily-fact').textContent = bayernFacts[bayernFactIndex];
    document.getElementById('foden-daily-fact').textContent = fodenFacts[fodenFactIndex];
}

// PWA Install Prompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    const installPrompt = document.createElement('div');
    installPrompt.className = 'install-prompt show';
    installPrompt.innerHTML = `
        <div>📱 App installieren für schnellen Zugriff!</div>
        <button id="install-btn">Installieren</button>
    `;
    document.body.appendChild(installPrompt);
    
    document.getElementById('install-btn').addEventListener('click', async () => {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            installPrompt.remove();
        }
        deferredPrompt = null;
    });
});

// Initial Load
loadAllNews();

console.log('⚽ Phils Fußball App geladen!');
