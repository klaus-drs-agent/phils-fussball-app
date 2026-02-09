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
    "Gerd Müller erzielte 365 Bundesliga-Tore - bis heute unübertroffen (Tore pro Spiel).",
    "Die Allianz Arena kostete 340 Millionen Euro und wurde 2005 eröffnet.",
    "Bayern München gewann 2013 alle sechs möglichen Titel in einem Jahr.",
    "Thomas Müller hält den Rekord für die meisten Vorlagen in einer Bundesliga-Saison: 21!",
    "Die Südkurve der Allianz Arena fasst über 20.000 Stehplätze.",
    "Bayern ist der einzige deutsche Club, der nie aus der Bundesliga abgestiegen ist - seit 1965!"
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
    "Seine Trikotnummer 47 trägt er seit der Jugend - Glückszahl!",
    "Phil Foden erzielte sein erstes Profi-Tor im Alter von 17 Jahren gegen Feyenoord.",
    "Er ist der jüngste englische Torschütze in der Champions League Geschichte.",
    "Foden gewann bereits 5x die Premier League mit Manchester City.",
    "Seine Passgenauigkeit liegt konstant über 90% - ein Wert auf Weltklasse-Niveau.",
    "Phil wurde 2024 zum Premier League Player of the Season gewählt."
];

// Random Fact Selection
let currentBayernFactIndex = 0;
let currentFodenFactIndex = 0;

function getRandomFact(factsArray, currentIndex) {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * factsArray.length);
    } while (newIndex === currentIndex && factsArray.length > 1);
    return { fact: factsArray[newIndex], index: newIndex };
}

// Dynamic News Generation (simulated - würde im echten Szenario via API laufen)
function generateBayernNews() {
    const templates = [
        { icon: "⚽", title: "Bayern gewinnt {score} gegen {team}", text: "Souveräner Heimsieg in der Allianz Arena. {player} mit starker Leistung.", url: "https://fcbayern.com/de/news" },
        { icon: "🏆", title: "{player} verlängert Vertrag bis {year}", text: "Der Verein freut sich über die langfristige Bindung des Leistungsträgers.", url: "https://fcbayern.com/de/news" },
        { icon: "📰", title: "Tuchel plant {tactic} für {competition}", text: "Der Trainer setzt auf {strategy} im wichtigen Spiel.", url: "https://fcbayern.com/de/news" },
        { icon: "💪", title: "{player} zurück im Training", text: "Nach Verletzungspause kehrt der Star zurück ins Mannschaftstraining.", url: "https://fcbayern.com/de/news" },
        { icon: "🎯", title: "Transfer-Update: Bayern beobachtet {talent}", text: "Laut Medienberichten ist der Verein an einem Youngster interessiert.", url: "https://fcbayern.com/de/news" }
    ];
    
    const teams = ["Augsburg", "Freiburg", "Hoffenheim", "Union Berlin", "Wolfsburg"];
    const players = ["Kane", "Müller", "Kimmich", "Musiala", "Sané"];
    const tactics = ["Rotation", "neue Formation", "veränderte Taktik"];
    const competitions = ["Champions League", "DFB-Pokal", "Bundesliga"];
    const strategies = ["offensive Spielweise", "kompakte Defensive", "Ballbesitzfußball"];
    const scores = ["3:1", "2:0", "4:2", "1:0", "3:0"];
    const years = ["2027", "2028", "2029"];
    const talents = ["spanisches Talent", "französischen Youngster", "brasilianisches Juwel"];
    
    return templates.map(template => {
        let title = template.title
            .replace('{score}', scores[Math.floor(Math.random() * scores.length)])
            .replace('{team}', teams[Math.floor(Math.random() * teams.length)])
            .replace('{player}', players[Math.floor(Math.random() * players.length)])
            .replace('{year}', years[Math.floor(Math.random() * years.length)])
            .replace('{tactic}', tactics[Math.floor(Math.random() * tactics.length)])
            .replace('{competition}', competitions[Math.floor(Math.random() * competitions.length)])
            .replace('{talent}', talents[Math.floor(Math.random() * talents.length)]);
        
        let text = template.text
            .replace('{player}', players[Math.floor(Math.random() * players.length)])
            .replace('{strategy}', strategies[Math.floor(Math.random() * strategies.length)]);
        
        return {
            icon: template.icon,
            title: title,
            text: text,
            url: template.url,
            time: Math.floor(Math.random() * 12) + 1
        };
    });
}

function generateFodenNews() {
    const templates = [
        { icon: "⭐", title: "Foden glänzt bei City-Sieg gegen {team}", text: "{stat} - erneut überragend im Etihad Stadium!", url: "https://mancity.com" },
        { icon: "🏴󠁧󠁢󠁥󠁮󐁧󠁿", title: "England-Nominierung: Foden im Kader", text: "Der Mittelfeldstar ist für die anstehenden Länderspiele nominiert.", url: "https://mancity.com" },
        { icon: "💬", title: "Guardiola lobt Foden nach {performance}", text: "Der Trainer zeigt sich begeistert von der Entwicklung seines Schützlings.", url: "https://mancity.com" },
        { icon: "📊", title: "Foden führt City-Statistik an", text: "{metric} - beste Werte aller Premier-League-Spieler im {month}.", url: "https://mancity.com" },
        { icon: "🎥", title: "Interview: Foden über {topic}", text: "Der Star spricht offen über seine Ziele und Ambitionen.", url: "https://mancity.com" }
    ];
    
    const teams = ["Arsenal", "Liverpool", "Chelsea", "Manchester United", "Tottenham"];
    const stats = ["Zwei Tore und eine Vorlage", "Ein Tor und zwei Assists", "Drei Scorerpunkte"];
    const performances = ["Gala-Vorstellung", "starker Leistung", "überragendem Spiel"];
    const metrics = ["Die meisten Scorerpunkte", "Höchste Passgenauigkeit", "Meiste Torvorlagen"];
    const months = ["Februar", "Januar", "Dezember"];
    const topics = ["seine Ziele", "die Champions League", "die WM-Qualifikation"];
    
    return templates.map(template => {
        let title = template.title
            .replace('{team}', teams[Math.floor(Math.random() * teams.length)])
            .replace('{performance}', performances[Math.floor(Math.random() * performances.length)])
            .replace('{topic}', topics[Math.floor(Math.random() * topics.length)]);
        
        let text = template.text
            .replace('{stat}', stats[Math.floor(Math.random() * stats.length)])
            .replace('{metric}', metrics[Math.floor(Math.random() * metrics.length)])
            .replace('{month}', months[Math.floor(Math.random() * months.length)]);
        
        return {
            icon: template.icon,
            title: title,
            text: text,
            url: template.url,
            time: Math.floor(Math.random() * 8) + 1
        };
    });
}

// Tab Navigation
const navButtons = document.querySelectorAll('.nav-btn');
const tabContents = document.querySelectorAll('.tab-content');

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;
        
        navButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(tc => tc.classList.remove('active'));
        
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
    const bayernNewsData = generateBayernNews();
    const fodenNewsData = generateFodenNews();
    
    loadNews('bayern-news-list', bayernNewsData);
    loadNews('foden-news-list', fodenNewsData);
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
                <div class="news-meta">vor ${item.time} Stunden</div>
            </div>
        `;
        container.appendChild(newsItem);
    });
}

// Daily Fact (Random bei Refresh)
function loadDailyFacts() {
    const bayernResult = getRandomFact(bayernFacts, currentBayernFactIndex);
    const fodenResult = getRandomFact(fodenFacts, currentFodenFactIndex);
    
    currentBayernFactIndex = bayernResult.index;
    currentFodenFactIndex = fodenResult.index;
    
    document.getElementById('bayern-daily-fact').textContent = bayernResult.fact;
    document.getElementById('foden-daily-fact').textContent = fodenResult.fact;
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

console.log('⚽ Phils Fußball App geladen! Made with ❤️');
