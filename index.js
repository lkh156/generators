function addAffiliation(selectbox, text, value) {
 
  var optn = document.createElement("OPTION");
  optn.text = text;
  optn.value = value;
  selectbox.options.add(optn);
}

function forceEra() {
  var output = document.getElementById("era").value;

  switch (output) {
    case "Fourth Succession War (3025-3049)":
      affialiationSuccessionWars();

    case "Clan Invasion (3050-3067)":
      clanInvasion();
      break;

    case "Jihad (3068-3085)":
      jihad();
      break;

    case "Republic Era (3085-3130)":
      republicEra();
      break;

    default:
  }
}

function affialiationSuccessionWars() {
  var successionWars = new Array(
    "Inner Sphere Major: Capellan Confederation (House Liao)",
    "Inner Sphere Major: ComStar",
    "Inner Sphere Major: Draconis Combine (House Kurita)",
    "Inner Sphere Major: Federated Suns (House Davion)",
    "Inner Sphere Major: Free Worlds League (House Marik)",
    "Inner Sphere Major: Lyran Commonwealth (House Steiner)",
    "Inner Sphere Minor: Duchy of Andurien",
    "Inner Sphere Minor: Free Rasalhague Republic",
    "Inner Sphere Minor: St. Ives Compact",
    "Inner Sphere Minor: Tikonov Free Republic",
    "Periphery: Circinus Federation",
    "Periphery: Elysian Fields",
    "Periphery: Greater Valkyrate",
    "Periphery: Illyrian Palatinate",
    "Periphery: Lothian League",
    "Perpiphery: Magistracy of Canopus",
    "Periphery: Marian Hegemony",
    "Periphery: Niops Association",
    "Periphery: Oberon Confederation",
    "Periphery: Outworlds Alliance",
    "Periphery: Rim Collection",
    "Periphery: Taurian Concordat",
    "Periphery: Tortuga Dominions",
    "Deep Periphery: Alexandrian Covenant",
    "Deep Periphery: Alfirk",
    "Deep Periphery: Axumite Providence",
    "Deep Periphery: Chainelane Isles",
    "Deep Periphery: Coreward Confederacy",
    "Deep Periphery: Hansetic League",
    "Deep Periphery: JarnFolk",
    "Deep Periphery: New Delphi Compact",
    "Deep Periphery: Nueva Castile",
    "Deep Periphery: Umayyad Caliphate",
    "Deep Periphery: Union of Samoyedic Colonies",
    "Deep Periphery: Virginian Union"
  );

  var select = document.getElementById("affiliation");
  var length = select.options.length;

  for (k = length-1; k >= 0; k--) {
      select.options[k] = null;
  }

  for (var i = 0; i < successionWars.length; i++) {
    addAffiliation(
      document.getElementById("affiliation"),
      successionWars[i],
      successionWars[i]
    );
  }
}

function clanInvasion() {
  var clanInvasion = new Array(
    "Inner Sphere Major: Capellan Confederation",
    " Inner Sphere Major: Comstar",
    "Inner Sphere Major: Draconis Combine",
    "Inner Sphere Major: Federated Commonwealth",
    "Inner Sphere Major: Free Worlds League",
    "Inner Sphere Major: Lyran Alliance",
    "Inner Sphere Major: Second Star League",
    "Inner Sphere Major: Word of Blake",
    "Inner Sphere Minor: Arc-Royal Defense Cordon",
    "Inner Sphere Minor: Clan Wolf-in-Exile",
    "Inner Sphere Minor: Duchy of Small",
    "Inner Sphere Minor: Free Rasalhague Republic",
    "Inner Sphere Minor: Saiph Triumvirate",
    "Inner Sphere Minor: Sarna Supremacy",
    "Inner Sphere Minor: St. Ives Compact",
    "Inner Sphere Minor: Sirian Holds",
    "Inner Sphere Minor: Styk Commonality",
    "Inner Sphere Minor: Terracap Confederation",
    "Periphery: Circinus Federation",
    "Periphery: Illyrian Palatinate",
    "Periphery: Lothian League",
    "Periphery: Magistracy of Canopus",
    "Periphery: Marian Hegemony",
    "Periphery: Outworlds Alliance",
    "Periphery: Rim Collection",
    "Periphery: Taurian Concordat",
    "Deep Periphery: Alexandrian Covenant",
    "Deep Periphery: Alfrik",
    "Deep Periphery: Axumite Providence",
    "Deep Periphery: Chainelane Isles",
    "Deep Periphery: Coreward Confederacy",
    "Deep Periphery: Hanseatic League",
    "Deep Periphery: Jarnfolk",
    "Deep Periphery: New Delphi Compact",
    "Deep Periphery: Nueva Castile",
    "Deep Periphery: Umayyad Caliphate",
    "Deep Periphery: Union of Samoyedic Colonies",
    "Invading Clans: Clan Diamond Shark",
    "Invading Clans: Clan Ghost Bear",
    "Invading Clans: Clan Jade Falcon",
    "Invading Clans: Clan Nova Cat",
    "Invading Clan: Clan Smoke Jaguar",
    "Invading Clans: Clan Steel Viper",
    "Invading Clans: Clan Wolf"
  );

  var select = document.getElementById("affiliation");
  var length = select.options.length;

  for (k = length-1; k >= 0; k--) {
      select.options[k] = null;
  }

  for (var i = 0; i < clanInvasion.length; i++) {
    addAffiliation(
      document.getElementById("affiliation"),
      clanInvasion[i],
      clanInvasion[i]
    );
  }
}

function jihad() {
  var jihadEra = new Array(
    "Inner Sphere Major: Capellan Confederation",
    "Inner Sphere Major: Comstar",
    "Inner Sphere Major: Draconis Combine",
    "Inner Sphere Major: Federated Commonwealth",
    "Inner Sphere Major: Free Worlds League",
    "Inner Sphere Major: Lyran Alliance",
    "Inner Sphere Major: Word of Blake",
    "Inner Sphere Minor: Abbey District",
    "Inner Sphere Minor: Azami Brotherhood",
    "Inner Sphere Minor: Clan Wolf-in-Exile",
    "Inner Sphere Minor: Duchy of Andurien",
    "Inner Sphere Minor: Duchy of Graham-Marik",
    "Inner Sphere Minor: Duchy of Oriente",
    "Inner Sphere Minor: Duchy of Orloff",
    "Inner Sphere Minor: Duchy of Tamarind",
    "Inner Sphere Minor: Free Rasalhague Republic",
    "Inner Sphere Minor: Kittery Prefecture",
    "Inner Sphere Minor: Marik Commonwealth",
    "Inner Sphere Minor: Mosiro Archipelago",
    "Inner Sphere Minor: Ohrenson-Zion Province",
    "Inner Sphere Minor: Principality of Gibson",
    "Inner Sphere Minor: Principality of Regulus",
    "Inner Sphere Minor: The Protectorate",
    "Inner Sphere Minor: Regulan Free States",
    "Inner Sphere Minor: Silver Hawk Coalition",
    "Inner Sphere Minor: Stewart Commonality",
    "Periphery: Calderon Protectorate",
    "Periphery: Circinus Federation",
    "Periphery: Fiefdom of Randis",
    "Periphery: Filtvelt Coalition",
    "Periphery: Magistracy of Canopus",
    "Periphery: Malagrotta Cooperative",
    "Periphery: Marian Hegemony",
    "Periphery: Niops Association",
    "Periphery: Outworlds Alliance",
    "Periphery: Rim Collection",
    "Periphery: Taurian Concordat",
    "Periphery: Tortuga Dominions",
    "Deep Periphery: Alexandrian Covenant",
    "Deep Periphery: Alfrik",
    "Deep Periphery: Axumite Providence",
    "Deep Periphery: Chainelane Isles",
    "Deep Periphery: Coreward Confederacy",
    "Deep Periphery: Hanseatic League",
    "Deep Periphery: Jarnfolk",
    "Deep Periphery: New Delphi Compact",
    "Deep Periphery: Nueva Castile",
    "Deep Periphery: Umayyad Caliphate",
    "Deep Periphery: Union of Samoyedic Colonies",
    "Inner Sphere Clans: Clan Jade Falcon",
    "Inner Sphere Clans: Clan Diamond Shark",
    "Inner Sphere Clans: Clan Hell's Horses",
    "Inner Sphere Clans: Clan Nova Cat",
    "Inner Sphere Clans: Clan Snow Raven",
    "Inner Sphere Clans: Clan Wolf",
    "Inner Sphere Clans: Ghost Bear Dominion"
  );

  var select = document.getElementById("affiliation");
  var length = select.options.length;

  for (k = length-1; k >= 0; k--) {
      select.options[k] = null;
  }

  for (var i = 0; i < jihadEra.length; i++) {
    addAffiliation(
      document.getElementById("affiliation"),
      jihadEra[i],
      jihadEra[i]
    );
  }
}

function republicEra() {
  var republicEra = new Array(
    "Inner Sphere Major: Capellan Confederation",
    "Inner Sphere Major: Draconis Combine",
    "Inner Sphere Major: Federated Suns",
    "Inner Sphere Major: Lyran Alliance",
    "Inner Sphere Major: Lyran Commonwealth",
    "Inner Sphere Major: Republic of the Sphere",
    "Inner Sphere Minor: Clan Wolf-in-Exile",
    "Inner Sphere Minor: Duchy of Andurien",
    "Inner Sphere Minor: Duchy of Graham-Marik",
    "Inner Sphere Minor: Duchy of Oriente",
    "Inner Sphere Minor: Duchy of Tamarind-Abbey",
    "Inner Sphere Minor: Marik-Stewart Commonwealth",
    "Inner Sphere Minor: Mosiro Archipelago",
    "Inner Sphere Minor: Principality of Regulus",
    "Inner Sphere Minor: The Protectorate",
    "Inner Sphere Minor: Rasalhague Dominion",
    "Inner Sphere Minor: Regulan Free States",
    "Inner Sphere Minor: Regulan Fiefs",
    "Inner Sphere Minor: Rim Commonality",
    "Inner Sphere Minor: Silver Hawk Coalition",
    "Periphery: Calderon Protectorate",
    "Periphery: Ferris Collective",
    "Periphery: Fiefdom of Randis",
    "Periphery: Filtvelt Coalition",
    "Periphery: Fronic Reaches",
    "Periphery: Lothian League",
    "Periphery: Magistracy of Canopus",
    "Periphery: Marian Hegemony",
    "Periphery: New Oberon Confederation",
    "Periphery: Niops Association",
    "Periphery: Outworlds Alliance",
    "Periphery: Ragnarok Union",
    "Periphery: Raven Alliance",
    "Periphery: Republic of the Barrens",
    "Periphery: Rim Collection",
    "Periphery: Taurian Concordat",
    "Periphery: Tortuga Dominions",
    "Deep Periphery: Alexandrian Covenant",
    "Deep Periphery: Alfrik",
    "Deep Periphery: Axumite Providence",
    "Deep Periphery: Chainelane Isles",
    "Deep Periphery: Coreward Confederacy",
    "Deep Periphery: Escorpion Imperio",
    "Deep Periphery: Hanseatic League",
    "Deep Periphery: Jarnfolk",
    "Deep Periphery: New Delphi Compact",
    "Deep Periphery: Nueva Castile",
    "Deep Periphery: Umayyad Caliphate",
    "Deep Periphery: Union of Samoyedic Colonies",
    "Inner Sphere Clans: Clan Jade Falcon",
    "Inner Sphere Clans: Clan Diamond Shark",
    "Inner Sphere Clans: Clan Hell's Horses",
    "Inner Sphere Clans: Clan Nova Cat",
    "Inner Sphere Clans: Clan Sea Fox",
    "Inner Sphere Clans: Clan Snow Raven",
    "Inner Sphere Clans: Clan Wolf",
    "Inner Sphere Clans: Ghost Bear Dominion"
  );

  var select = document.getElementById("affiliation");
  var length = select.options.length;

  for (k = length-1; k >= 0; k--) {
      select.options[k] = null;
  }

  for (var i = 0; i < republicEra.length; i++) {
    addAffiliation(
      document.getElementById("affiliation"),
      republicEra[i],
      republicEra[i]
    );
  }
}
