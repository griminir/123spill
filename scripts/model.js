let randomEvent = 0;
let oldRandomEvent;
let buddyEvent = 0;
let oldBuddyEvent;
let kulOMeter = 10;
let buddyText = '';
let answerRNG = '';

const greetings = [
  "Åssen henger'n",
  "Skjer'a bagera",
  '*Du slenger opp noen gangsign med hendene*',
];

const buddies = [
  (buddy1 = {
    name: 'Harry i veigrøfta',
    bilde: 'img/harry.png',
    svar: [
      'Næi men er det ikke storkaren selv som er ute og kjører, la meg få sitte påaaa',
      'Å fy faen er det deg i den stygge metalboksen dær?',
      '*han stirrer på deg blankt som om du er en fremmed*',
    ],
  }),
  (buddy2 = {
    name: 'Kjell på busstoppet',
    bilde: 'img/kjell.png',
    svar: [
      'Dritfet kjærre',
      'Traktoren til hjalmar er jo kulere en dette skrapet',
      'Hva var navne ditt igjen?',
    ],
  }),
  (buddy3 = {
    name: 'Kåre vandrene langs landeveiene med rema posene sine',
    bilde: 'img/kåre.png',
    svar: [
      'Næmmen er det om det ikke er den stiligste hjemmelaga bilen i bygda',
      'Hadde det dær vert min bil hadde jeg nok heller gått alle stedene',
      '*kåre begynner å gå fortere, mens du kjører bil sakte etter han*',
    ],
  }),
];

const events = [
  (event1 = {
    mainText:
      'Ei bestemor sitter foran deg i traffikken og kjører som en sneile',
    bilde: 'img/bestemor.png',
    button1text: 'overta henne',
    option1: function () {
      kulOMeter -= 5;
      event1.mainText =
        'Du prøver og overta bestemoren, men hun gasser på; lite visste du at ho er tidliger vinner av bygde-dragracet og hun forlater deg i støvet';
      eventViewDone();
      event1.mainText =
        'Ei bestemor sitter foran deg i traffikken og kjører som en sneile';
    },
    button2text: 'Ikke overta henne',
    option2: function () {
      kulOMeter += 10;
      event1.mainText =
        'Flaks du valge og ikke kjøre forbi, purken var rett bak i sivilbil';
      eventViewDone();
      event1.mainText =
        'Ei bestemor sitter foran deg i traffikken og kjører som en sneile';
    },
  }),
  (event2 = {
    mainText: 'Du finner hjulkapsler i solid gull langs veikanten',
    bilde: 'img/hjul.png',
    button1text: 'Plukk opp hjulkapslene',
    option1: function () {
      kulOMeter += 10;
      event2.mainText = 'Heheh bling-bling';
      eventViewDone();
      event2.mainText = 'Du finner hjulkapsler i solid gull langs veikanten';
    },
    button2text: 'La de ligge',
    option2: function () {
      kulOMeter += 0;
      event2.mainText =
        'Du trenger ikke noen smakløse hjulkapsler for å ha ei fet kjærre';
      eventViewDone();
      event2.mainText = 'Du finner hjulkapsler i solid gull langs veikanten';
    },
  }),
  (event3 = {
    mainText: 'Verdens heiteste dame går forbi',
    bilde: 'img/hotWomen.png',
    button1text: 'Plystre på henne',
    option1: function () {
      kulOMeter -= 10;
      event3.mainText = 'Dette var lite kult';
      eventViewDone();
      event3.mainText = 'Verdens heiteste dame går forbi';
    },
    button2text: 'Ikke gjør noe',
    option2: function () {
      kulOMeter += 0;
      event3.mainText =
        'Du velger å være litt gentleman og lar henne være i fred';
      eventViewDone();
      event3.mainText = 'Verdens heiteste dame går forbi';
    },
  }),
  (event4 = {
    mainText: 'Du ser at en fremmed trenger en ride',
    bilde: 'img/hiker.png',
    button1text: 'La den fremmede sitte på',
    option1: function () {
      kulOMeter -= 15;
      event4.mainText =
        'Den fremmede viser seg å være Traktor-Hjalmar; nå tror hele bøgda at dere er kompiser';
      eventViewDone();
      event4.mainText = 'Du ser at en fremmed trenger en ride';
    },
    button2text: 'Unngå øyekontakt og kjør videre',
    option2: function () {
      kulOMeter += 10;
      event4.mainText =
        'Det går rykter om at bilen din er for kul til at hvem som helst kan sitte på';
      eventViewDone();
      event4.mainText = 'Du ser at en fremmed trenger en ride';
    },
  }),
  (event5 = {
    mainText: 'Du ser ei svart katt gå over veien foran deg',
    bilde: 'img/cat.png',
    button1text: 'Gi full gass',
    option1: function () {
      kulOMeter -= 30;
      event5.mainText =
        'Blodet på panseret og pelsen i grillen ser ikke veldig kult ut';
      eventViewDone();
      event5.mainText = 'Du ser ei svart katt gå over veien foran deg';
    },
    button2text: 'Bråbrems',
    option2: function () {
      kulOMeter -= 10;
      event5.mainText =
        'Katten vandrer videre mens du sitter igjen med nakkesleng';
      eventViewDone();
      event5.mainText = 'Du ser ei svart katt gå over veien foran deg';
    },
  }),
  (event6 = {
    mainText: 'Råne-Jon kommer bakfra i kjærra si og begynner en forbikjøring',
    bilde: 'img/råne.png',
    button1text: 'Sving hardt til venstre',
    option1: function () {
      kulOMeter -= 0;
      event6.mainText =
        'Råne-Jon får et skikkelig støkk i seg og kjører ned i grøfta for tiende gang i år';
      eventViewDone();
      event6.mainText =
        'Råne-Jon kommer bakfra i kjærra si og begynner en forbikjøring';
    },
    button2text: 'La han kjøre som han vil',
    option2: function () {
      kulOMeter += 25;
      event6.mainText =
        '10 minutter senere ser du Råne-Jon i veikanten, du hopper ut av bilen din og bryter av spoileren hans. *du fant en ny spoiler til bilen din*';
      eventViewDone();
      event6.mainText =
        'Råne-Jon kommer bakfra i kjærra si og begynner en forbikjøring';
    },
  }),
  (event7 = {
    mainText: 'Et barn ser ut til og ha gått seg vil',
    bilde: 'img/barn.png',
    button1text: 'Hjelp barnet',
    option1: function () {
      kulOMeter += 20;
      event7.mainText = 'Bygdas MILF-klub har fått øyene for deg';
      eventViewDone();
      event7.mainText = 'Et barn ser ut til og ha gått seg vil';
    },
    button2text: 'Ikke plukk opp ukjente barn kan være en skjult demon',
    option2: function () {
      kulOMeter += 0;
      event7.mainText =
        'Ble heldigvis ikke middag for noen overnaturling i dag *du får kjøre vidre*';
      eventViewDone();
      event7.mainText = 'Et barn ser ut til og ha gått seg vil';
    },
  }),
  (event8 = {
    mainText:
      'Du merker at du har kjørt den samme veistrekningen i 10 minutter tilsynelatende uten å ha kommet deg noen vei',
    bilde: 'img/vei.png',
    button1text: 'Fortsett rett fram',
    option1: function () {
      kulOMeter -= 15;
      event8.mainText =
        'Du brukte en time på å komme deg noen sted; det går rykter om at du har bøgdas tregeste bil';
      eventViewDone();
      event8.mainText =
        'Du merker at du har kjørt den samme veistrekningen i 10 minutter tilsynelatende uten å ha kommet deg noen vei';
    },
    button2text: 'Snu og kjør tilbake',
    option2: function () {
      kulOMeter += 15;
      event8.mainText =
        '5 minutter senere er du tilbake i bygda, og du hører historier om den forlatte traktorveien hvor Traktor-Hjalmars bestefar forsvant. Nå har du en kul historie å dele';
      eventViewDone();
      event8.mainText =
        'Du merker at du har kjørt den samme veistrekningen i 10 minutter tilsynelatende uten å ha kommet deg noen vei';
    },
  }),
];
