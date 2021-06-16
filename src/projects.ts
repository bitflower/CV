/**
 * The type of service we have delivered.
 */
export enum ServiceType {
  Coaching = "coaching",
  Consulting = "consulting", // Soll für Freelancing/Projekt Mithilfe stehen, als Aufträge, deren Endkunde nicht meiner war
  ClientProject = "clientProject",
  OSS = "openSource",
}

export enum TaskType {
  APIDesign = "apidesign",
  AppStore = "appStore", // Manage app store account, releases & content and beta testing & versioning
  CloudHosting = "cloudhosting",
  Coaching = "coaching",
  Coding = "coding",
  Composing = "composing",
  CustomerService = "customerservice", // = ServiceDesk
  DatabaseCoding = "database",
  DataModeling = "datamodelling",
  Design = "design",
  DesignSystem = "designSystem",
  Documentation = "documentation",
  Frontend = "frontend",
  ITArchitecture = "itarchitecure",
  MusicProduction = "musicProduction",
  Prototyping = "prototyping",
  Requirements = "requirements",
  Rollout = "rollout", // = Deployment
  SEO = "seo",
  SoundDesign = "sounddesign",
  UX = "ux",
  Visualization = "visualization",
  Writing = "writing",
  DevOps = "devOps",
  UnitTests = "unitTest",
  QA = "qa", // TODO: Prüfen, wo passend
}

export enum DeliveryType {
  Content = "content",
  Desktop = "desktop",
  Library = "library",
  MasterRecording = "masterRecording",
  MobileApp = "app",
  PWA = "pwa",
  SPA = "spa",
  Website = "website",
}

export enum ClientSize {
  Corporate = "corporate",
  Midsized = "kmu",
  SmallBusiness = "smallBusiness",
}

export interface Project {
  customer: string;
  industry: string;
  deliveryTypes: DeliveryType[];
  duration: [number, string];
  serviceType: ServiceType;
  taskTypes: TaskType[];
  timestamp: string;
  title: string;
  toolsUsed: string[];
  year: number;
  description?: string;
  clientSize?: ClientSize;
  links?: string[];
}

export const projects: Project[] = [
  {
    customer: "Automotive OEM",
    title: "Entwicklung eines strategisch wichtigen Prozesssteuerungstools",
    industry: "Automotive",
    clientSize: ClientSize.Corporate,
    serviceType: ServiceType.Consulting,
    taskTypes: [
      TaskType.Coding,
      TaskType.DataModeling,
      TaskType.Frontend,
      TaskType.Visualization,
      TaskType.APIDesign,
      TaskType.ITArchitecture,
      TaskType.Requirements,
      TaskType.Coaching,
      TaskType.UX,
      TaskType.Documentation,
      TaskType.UnitTests,
      TaskType.QA,
    ],
    year: 2018,
    timestamp: "2021-05-01",
    duration: [3, "years"],
    deliveryTypes: [DeliveryType.SPA],
    toolsUsed: [
      "Angular 11",
      "NodeJS",
      "Microservices",
      "Azure DevOps",
      "Angular Material",
      "RxJS",
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "Sketch",
      "SQL-Server",
      "Figma",
      "Design System",
      "Code Reviews",
      "Refactoring",
      "Jest",
      "SAFe",
    ],
    description: `Breitgefächerte Consulting-Leistungen bei einem Angular/Microservice Entwicklungsprojekt mit ca. 40 Mitarbeitern und Board-of-Management Attention. Als Frontend-Lead habe ich die Requirements mit Stakeholdern, Backend-Leads und dem Frontend Team abgestimmt. Ich habe Junior-Entwickler befähigt im Einsatz von Angular 8+. Ich habe Projekteinsteiger in die Codebase eingeführt. Ich habe das Design System und wesentliche, zentrale Komponenten initial umgesetzt und weiterentwickelt. Meine Rolle sah außerdem vor die Cross-Team Kommunikation zu erhöhen. Hierzu wurden von mir wöchentliche Entwickler/PO/Lead Meetings angesetzt (Dev-Insights) um Themen zu behandeln. Es war meine Verantwortung, die UI/UX-Konsistenz zu wahren sowohl während der Entwicklung als auch in der Konzeptionsphase neuer Features. Es wurden Wireframes und Mockups in Figma realisiert für einen besseren Transport des späteren Look & Feel der Anwendung. Ich habe automatisierte Komponenten Unittests geschrieben. Das Projekt wurde mit SAFe durchgeführt.`,
  },
  {
    customer: "bitflower e.K.",
    title: "Entwicklung der Low-Code Plattform CaseOS",
    industry: "SaaS",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.Consulting,
    taskTypes: [
      TaskType.Coding,
      TaskType.DataModeling,
      TaskType.Frontend,
      TaskType.Visualization,
      TaskType.APIDesign,
      TaskType.AppStore,
      TaskType.CloudHosting,
      TaskType.DatabaseCoding,
      TaskType.ITArchitecture,
      TaskType.Requirements,
      TaskType.Rollout,
      TaskType.UX,
      TaskType.Design,
      TaskType.DesignSystem,
      TaskType.UnitTests,
      TaskType.QA,
    ],
    year: 2019,
    timestamp: "2021-06-01",
    duration: [2, "years"],
    deliveryTypes: [DeliveryType.SPA, DeliveryType.MobileApp, DeliveryType.PWA],
    toolsUsed: [
      "StencilJS",
      "NodeJS",
      "ExpressJS",
      "Ionic",
      "Redux",
      "CapacitorJS",
      "Typescript",
      "HTML",
      "CSS",
      "Javascript",
      "Sketch",
      "Shoelace Web Components",
      "MongoDB",
      "NoSQL",
      "REST",
      "WebSocket",
      "Socket.IO",
      "Jest",
    ],
  },
  {
    customer: "Auftakt Medien e.K.",
    title:
      "Entwicklung einer Haushandbuch Mobile-App für iOS und Android inkl. Wartungsnotification",
    industry: "Immobilien",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.Consulting,
    taskTypes: [
      TaskType.Coding,
      TaskType.DataModeling,
      TaskType.Frontend,
      TaskType.Visualization,
      TaskType.APIDesign,
      TaskType.AppStore,
      TaskType.CloudHosting,
      TaskType.DatabaseCoding,
      TaskType.ITArchitecture,
      TaskType.Requirements,
      TaskType.Rollout,
      TaskType.QA,
    ],
    year: 2020,
    timestamp: "2020-02-01",
    duration: [3, "months"],
    deliveryTypes: [DeliveryType.SPA, DeliveryType.MobileApp, DeliveryType.PWA],
    toolsUsed: [
      "StencilJS",
      "NodeJS",
      "ExpressJS",
      "Ionic",
      "Redux",
      "CapacitorJS",
      "Typescript",
      "HTML",
      "CSS",
      "Javascript",
      "Sketch",
      "Shoelace Web Components",
      "MongoDB",
      "NoSQL",
    ],
    description: `Zur Steigerung der Kundenbindung und Überführung des bestehenden Papier-Haushandbuches wurde eine iOS- und Android-App entwickelt. Sie bietet neben den aufgearbieteten Inhalten des bestehenden Haushandbuchs die Funktionalität der Alarmierung für wiederkehrende Wartungen. Dazu gehören z.B. die Dachbegrünung, die Hauswasserfilter, die Lüftungsanlage u.a. Der Endkunde kann Inhalte selbständig ändern und neu einpflegen über den No-Code WYSIWYG-Editor. Die App funktioniert Offline and syncronisiert sich, sobald sie online ist, in Echtzeit mit dem Server um neue Inhalte und Downloads (PDF) zu laden. Dateien und Inhalte werden auf dem lokalen Geräte Filesystem gespeichert.`,
  },
  {
    customer: "bitflower e.K.",
    title:
      "Entwicklung eines konfigurierbaren NodeJS OPC UA REST/WebSocket Adapters",
    industry: "IoT",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.ClientProject,
    taskTypes: [
      TaskType.Coding,
      TaskType.Design,
      TaskType.Requirements,
      TaskType.APIDesign,
      TaskType.DevOps,
    ],
    year: 2020,
    timestamp: "2020-12-31",
    duration: [1, "months"],
    deliveryTypes: [DeliveryType.Library],
    toolsUsed: [
      "NodeJS",
      "ExpressJS",
      "Typescript",
      "JSON",
      "Javascript",
      "REST",
      "Industrie 4.0",
      "OPC UA",
      "Siemens S7 PLC",
      "PM2 Task Manager",
    ],
    description: `Es wurde ein konfigurierbarer OPC-UA Adapter geschrieben, der Daten von OPC-UA Quellen liest oder abonniert, die Daten interpretiert, prüft und ggf. transformiert. Die Daten werden per REST/WebSocket an die Zielanwendung gesendet. Bei Ausfall des Zielsystems werden die Daten im Adapter gepuffert und beim nächsten Start erneut gesendet.`,
  },
  {
    customer: "Remondis Süd GmbH",
    title:
      "Entwicklung eines Produktionszahlen-Dashboard für Ballenpressen mit OPC UA(IIoT)",
    industry: "IoT",
    clientSize: ClientSize.Midsized,
    serviceType: ServiceType.ClientProject,
    taskTypes: [
      TaskType.Coding,
      TaskType.DataModeling,
      TaskType.Design,
      TaskType.Frontend,
      TaskType.Requirements,
      TaskType.UX,
      TaskType.Visualization,
      TaskType.APIDesign,
      TaskType.CloudHosting,
      TaskType.Coaching,
      TaskType.DevOps,
      TaskType.QA,
    ],
    year: 2021,
    timestamp: "2021-02-01",
    duration: [3, "months"],
    deliveryTypes: [DeliveryType.SPA],
    toolsUsed: [
      "StencilJS",
      "NodeJS",
      "ExpressJS",
      "Ionic",
      "Redux",
      "CapacitorJS",
      "Typescript",
      "HTML",
      "CSS",
      "Javascript",
      "Sketch",
      "Shoelace Web Components",
      "Chart.js",
      "MongoDB",
      "NoSQL",
      "Industrie 4.0",
      "OPC UA",
      "Sentry.IO",
    ],
    description: `Auf Basis der Low-Code Plattform CaseOS wurde eine Dashboard zur Visualisierung der täglichen Ballenproduktionszahlen entwickelt. Eine Monats- und Jahressicht lassen den Betrachter zudem ein Controlling bzw. Planung durchführen. Er kann entscheidene KPI (Ballen/Tag, die durchschnittliche Arbeitszeit/h oder die Arbeitstage/Monat) in Echtzeit verändern und sich die Auswirkungen ansehen. Die Daten werden von der Presse in Echtzeit ohne aktives Zutun des Benutzers in den Browser gepusht und von der Siemens S7 per OPC UA abgerufen. Die Nutzer wurden nach Inbetriebnahme geschult.`,
  },
  {
    customer: "Daimler (Sub-Contract)",
    title:
      "Konzeption & Entwicklung eines komfortablen Drag n‘Drop Web-Tools zur Gestaltung der Datentabellen und Forms.",
    industry: "Automotive",
    clientSize: ClientSize.Corporate,
    serviceType: ServiceType.Consulting,
    taskTypes: [
      TaskType.Coding,
      TaskType.DataModeling,
      TaskType.Design,
      TaskType.Frontend,
      TaskType.Requirements,
      TaskType.UX,
      TaskType.Visualization,
      TaskType.APIDesign,
    ],
    year: 2017,
    timestamp: "2017-07-01",
    duration: [6, "months"],
    deliveryTypes: [DeliveryType.SPA],
    toolsUsed: [
      ".Net WebApi",
      "Oracle Database",
      "AngularJS",
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "Sketch",
      "Drag n Drop",
    ],
  },
  {
    customer: "Commerzbank (Sub-Contract)",
    title:
      "Entwicklung eines dynamischen, konfigurierbaren & web-basierten Dashboard-Frameworks.",
    industry: "Finanzen",
    clientSize: ClientSize.Corporate,
    serviceType: ServiceType.Consulting,
    taskTypes: [
      TaskType.Coding,
      TaskType.DataModeling,
      TaskType.Design,
      TaskType.Frontend,
      TaskType.Requirements,
      TaskType.UX,
      TaskType.Visualization,
      TaskType.APIDesign,
    ],
    year: 2016,
    timestamp: "2016-07-01",
    duration: [4, "months"],
    deliveryTypes: [DeliveryType.SPA],
    toolsUsed: [
      ".Net WebApi",
      "REST",
      "Oracle Database",
      "AngularJS",
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "Sketch",
      "Chart.js",
    ],
    description: `Entwicklung eines Dashboard-Systems, welches es den Endusern erlaubt, eigene Auswertungen über KPIs zu erstellen (Self-Service). Teil-Automatisierte Erstellung von SQL-Statements. Drag n Drop Editor für die Widgetplatzierung und Größe. Verschiedene Charttypen unterstützt und auch kombinierbar.`,
  },
  {
    customer: "Auftakt Medien e.K.",
    title: "Entwicklung der Onlinepräsenz der Klaus Günther GmbH",
    industry: "Industrie",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.Consulting,
    taskTypes: [TaskType.Coding],
    year: 2015,
    timestamp: "2015-10-01",
    duration: [2, "months"],
    deliveryTypes: [DeliveryType.Website],
    toolsUsed: [
      "Wordpress",
      "MySQL",
      "Bootstrap",
      "HTML",
      "CSS",
      "Javascript",
      "jQuery",
      "PHP",
    ],
    links: ["https://www.kguenther.de"],
  },
  {
    customer: "Auftakt Medien e.K.",
    title: "Google Maps Integration für die Cassis Manufaktur",
    industry: "Nahrungsmittel",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.Consulting,
    taskTypes: [TaskType.Coding],
    year: 2015,
    timestamp: "2015-03-01",
    duration: [2, "days"],
    deliveryTypes: [DeliveryType.Website],
    toolsUsed: [
      "Wordpress",
      "MySQL",
      "HTML",
      "CSS",
      "Javascript",
      "jQuery",
      "PHP",
      "Google Maps",
    ],
    links: ["https://www.cassismanufaktur.de"],
  },
  {
    customer: "Auftakt Medien e.K.",
    title: "Onlinepräsenz für Rechtsanwalt Vogel GmbH",
    industry: "Rechtsberatung",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.Consulting,
    taskTypes: [TaskType.Coding],
    year: 2014,
    timestamp: "2014-05-01",
    duration: [3, "months"],
    deliveryTypes: [DeliveryType.Website],
    toolsUsed: [
      "Wordpress",
      "MySQL",
      "HTML",
      "CSS",
      "Javascript",
      "jQuery",
      "PHP",
      "AngularJS",
      "Bootstrap",
    ],
    description: `Entwicklung einer responsive Website mit CMS.`,
    links: ["http://www.rv-gmbh.de"],
  },
  {
    customer: "Auftakt Medien e.K.",
    title: "Entwicklung einer SEO-optimierten SPA für Grüner Baum Sinsheim",
    industry: "Gastronomie",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.Consulting,
    taskTypes: [TaskType.Coding, TaskType.SEO],
    year: 2015,
    timestamp: "2015-04-01",
    duration: [4, "months"],
    deliveryTypes: [DeliveryType.Website, DeliveryType.SPA],
    toolsUsed: [
      "Wordpress",
      "MySQL",
      "Bootstrap",
      "HTML",
      "CSS",
      "Javascript",
      "AngularJS",
      "PHP",
    ],
    description: `Entwicklung einer SPA die trotzdem gute SEO-Ergebnisse liefert zu einer Zeit als die Suchmaschinen-Bots noch kein Javascript interpretierten. Hierzu wurde eine PHP-Komponente mit einer Weiche für Bots entwickelt, welche dem Bot die vollständig gerenderte Website lieferte und somit Javascript unnötig machte.`,
    links: ["https://www.gruenerbaum-sinsheim.de"],
  },
  {
    customer: "Auftakt Medien e.K.",
    title:
      "Entwicklung einer Website mit Immobilien-Portal für Wohnbau Oberriexingen",
    industry: "Immobilien",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.Consulting,
    taskTypes: [TaskType.Coding],
    year: 2014,
    timestamp: "2014-04-01",
    duration: [5, "months"],
    deliveryTypes: [DeliveryType.Website, DeliveryType.SPA],
    toolsUsed: [
      "Wordpress",
      "MySQL",
      "Bootstrap",
      "HTML",
      "CSS",
      "Javascript",
      "jQuery",
      "PHP",
      "SASS",
    ],
    description: `Entwicklung einer SEO-optimierten AJAX-Website mit client-seitigem Tausch von Inhalten, die per AJAX gelesen werden.`,
    links: ["https://www.wohnbau-oberriexingen.de"],
  },
  {
    customer: "Sigurd Roscher",
    title: "Online-Portfolio für Barbara Bonisolli Food-Fotografin",
    industry: "Marketing",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.Consulting,
    taskTypes: [TaskType.Coding],
    year: 2016,
    timestamp: "2016-09-01",
    duration: [1, "months"],
    deliveryTypes: [DeliveryType.Website],
    toolsUsed: [
      "Wordpress",
      "MySQL",
      "Bootstrap",
      "HTML",
      "CSS",
      "Javascript",
      "PHP",
    ],
    description: `Entwicklung eines grafisch schlichten aber anspruchsvollen Online-Portfolios für Barbara Bonisolli - Food Fotografin u.a. für Mc Donalds`,
    links: ["http://www.bonisolli.de"],
  },
  {
    customer: "Sigurd Roscher",
    title: "Entwicklung der WeinKulturGaden Thüngersheim Website",
    industry: "Kultur",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.Consulting,
    taskTypes: [TaskType.Coding, TaskType.CloudHosting],
    year: 2015,
    timestamp: "2015-03-01",
    duration: [1, "months"],
    deliveryTypes: [DeliveryType.Website],
    toolsUsed: ["Foundation CSS", "HTML", "CSS", "Javascript"],
    description: `Websiteentwicklung mit hohem Anspruch an Emotion und Bildmaterial.`,
    links: ["https://weinkulturgaden.de"],
  },
  {
    customer: "Sigurd Roscher",
    title: "Entwicklung der Website der Kieferchirurgie Regensburg",
    industry: "Medizin",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.Consulting,
    taskTypes: [TaskType.Coding, TaskType.CloudHosting],
    year: 2017,
    timestamp: "2017-10-01",
    duration: [3, "weeks"],
    deliveryTypes: [DeliveryType.Website],
    toolsUsed: ["HTML", "CSS", "Javascript"],
    description: `Entwicklung der Onlinepräsenz der Kieferchhirurgie Regensburg mit vielen ästhetischen Animationen und emotionalen Bildern.`,
    links: ["http://kieferchirurgie-regensburg.de"],
  },
  {
    customer: "Sigurd Roscher",
    title: "Online-Rechner Green LED Dot",
    industry: "Energie",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.Consulting,
    taskTypes: [TaskType.Coding],
    year: 2014,
    timestamp: "2014-07-01",
    duration: [1, "weeks"],
    deliveryTypes: [DeliveryType.Website],
    toolsUsed: ["HTML", "CSS", "Javascript"],
    description: `Entwicklung ein Online-Rechners für die Berechnung von Ersparnissen durch den Wechsel zu LED Birnen.`,
    links: ["http://greenleddot.com/ersparnis-rechner/"],
  },
  {
    customer: "Matthias Max",
    title: "Entwicklung der Website Trackpool",
    industry: "Musik",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.ClientProject,
    taskTypes: [TaskType.Coding, TaskType.Design, TaskType.SEO, TaskType.UX],
    year: 2001,
    timestamp: "2001-01-01",
    duration: [2, "years"],
    deliveryTypes: [DeliveryType.Website],
    toolsUsed: ["HTML", "CSS", "Javascript"],
    description: `Entwicklung einer Website zum Austausch von Musik und zum Erstellen von Künstlerprofilen.`,
  },
  {
    customer: "Breathe Music",
    title: "Entwickeln einer Website für Breathe Music",
    industry: "Musik",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.ClientProject,
    taskTypes: [
      TaskType.Coding,
      TaskType.Design,
      TaskType.SEO,
      TaskType.UX,
      TaskType.CloudHosting,
    ],
    year: 2005,
    timestamp: "2005-06-01",
    duration: [2, "years"],
    deliveryTypes: [DeliveryType.Website],
    toolsUsed: ["HTML", "CSS", "Javascript", "Photoshop", "Wordpress", "CMS"],
    description: `Entwickeln einer CMS-basierten Website für Breathe Music mit Multimedia-Features wie MP3-Player und Slideshow.`,
  },
  {
    customer: "Superstreem Media",
    title: `Entwicklung und Betrieb einer Website für Superstreem Media`,
    industry: "Musik",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.ClientProject,
    taskTypes: [
      TaskType.Coding,
      TaskType.Design,
      TaskType.SEO,
      TaskType.UX,
      TaskType.CloudHosting,
    ],
    year: 2007,
    timestamp: "2007-06-01",
    duration: [2, "years"],
    deliveryTypes: [DeliveryType.Website],
    toolsUsed: ["HTML", "CSS", "Javascript", "Photoshop"],
    description: `Entwicklung und Betrieb einer Website für Superstreem Media mit Multimedia-Features wie MP3-Player und Slideshow.`,
  },
  {
    customer: "Securikett Ulrich & Horn GmbH",
    title: `Entwicklung der Mobile-App "CODIKETT" zur Graumarktaufdeckung iOS und Android`,
    industry: "Logistik",
    clientSize: ClientSize.Midsized,
    serviceType: ServiceType.ClientProject,
    taskTypes: [TaskType.Coding, TaskType.AppStore, TaskType.QA],
    year: 2014,
    timestamp: "2014-06-01",
    duration: [5, "months"],
    deliveryTypes: [DeliveryType.MobileApp],
    toolsUsed: [
      "HTML",
      "CSS",
      "Javascript",
      "Ionic",
      "Cordova",
      "SASS",
      "AngularJS",
      "REST API",
      "XCode",
      "Android Studio",
    ],
    description: `Entwicklung einer Mobile-App zum Lesen von GS 1 Datamatrix Codes mit versteckten Identifiern. Veröffentlichen der App in den Apple und Google App-Stores und pflegen der App-Store Inhalte. Entwickleraccounts für den Kunden anlegen und verwalten. Entwickeln einer Open Source Javascript Komponente zum Lesen von GS 1-spezifischen Datamatrix Codes.`,
  },
  {
    customer: "Securikett Ulrich & Horn GmbH",
    title: `Entwicklung der Mobile-App "MILLEPADIA" für iOS und Android Mobile App`,
    industry: "Logistik",
    clientSize: ClientSize.Midsized,
    serviceType: ServiceType.ClientProject,
    taskTypes: [TaskType.Coding, TaskType.AppStore, TaskType.QA],
    year: 2016,
    timestamp: "2016-06-01",
    duration: [3, "months"],
    deliveryTypes: [DeliveryType.MobileApp],
    toolsUsed: [
      "HTML",
      "CSS",
      "Javascript",
      "Ionic",
      "Cordova",
      "SASS",
      "AngularJS",
      "XCode",
      "Android Studio",
    ],
    description: `Entwicklung einer Mobile-App zum Lesen von GS 1 Datamatrix Codes mit versteckten Identifiern. Veröffentlichen der App in den Apple und Google App-Stores und pflegen der App-Store Inhalte. Entwickleraccounts für den Kunden anlegen und verwalten. Entwickeln einer Open Source Javascript Komponente zum Lesen von GS 1-spezifischen Datamatrix Codes.`,
  },
  {
    customer: "RTS Steuerberatungsgesellschaft KG",
    title: `Online-Spiel "Tax Hero"für das Recruiting von jungen Mitarbeitern`,
    industry: "Human Resources",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.ClientProject,
    taskTypes: [
      TaskType.Coding,
      TaskType.Design,
      TaskType.UX,
      TaskType.Coaching,
      TaskType.SoundDesign,
      TaskType.APIDesign,
      TaskType.CloudHosting,
      TaskType.DataModeling,
      TaskType.ITArchitecture,
      TaskType.Requirements,
      TaskType.Documentation,
      TaskType.QA,
    ],
    year: 2015,
    timestamp: "2015-05-01",
    duration: [7, "months"],
    deliveryTypes: [DeliveryType.SPA],
    toolsUsed: [
      "HTML",
      "CSS",
      "Javascript",
      "Ionic",
      "SASS",
      "AngularJS",
      "NodeJS",
      "ExpressJS",
      "REST",
      "MongoDB",
      "NoSQL",
      "Grunt",
      "Gulp",
      "Sketch",
      "Cloud",
    ],
    description: `Mit dem Online-Spiel sollen spielerisch Bewerber gewonnen werden. Ich habe vom Vertrieb, über das Konzept, den Spielnamen, das Spieldesign sowie der Programmierung, Betrieb und Schulung sämtliche Rollen übernommen. Offlinefähigkeit für den Betrieb in Messehallen ohne Internetzugang. Gamification des Recruitung.`,
  },
  {
    customer: "Bosch.IO GmbH",
    title: `Erstellen einer Mobile-App "Smart Trunk" zum Öffnen des Kofferraum über das Internet`,
    industry: "Automotive",
    clientSize: ClientSize.Corporate,
    serviceType: ServiceType.ClientProject,
    taskTypes: [
      TaskType.Coding,
      TaskType.Design,
      TaskType.UX,
      TaskType.APIDesign,
      TaskType.DataModeling,
      TaskType.Requirements,
      TaskType.Prototyping,
    ],
    year: 2016,
    timestamp: "2016-06-28",
    duration: [1, "weeks"],
    deliveryTypes: [DeliveryType.MobileApp],
    toolsUsed: [
      "HTML",
      "CSS",
      "Javascript",
      "Ionic",
      "Cordova",
      "SASS",
      "AngularJS",
      "NodeJS",
      "REST",
      "Gulp",
      "Sketch",
    ],
    description: `Für ein internes Innovationsprojekt wurde eine Mobile App für iOS benötigt. Sie sollte Teil des Use Cases "smarter Kofferraum" in Handel und Logistik sein. Es soll aufgezeigt werden, ob solche LÖsungen in Zukunft eingesetzt werden können.`,
    links: ["https://www.youtube.com/watch?v=Xj-AQuP2AOA"],
  },
  {
    customer: "ecce AG Schweiz",
    title: "Entwicklung von 6 Windows Desktop-Apps für das SLA Management",
    industry: "IT-Services",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.Consulting,
    taskTypes: [
      TaskType.Coding,
      TaskType.Design,
      TaskType.UX,
      TaskType.APIDesign,
      TaskType.DataModeling,
      TaskType.Requirements,
      TaskType.DatabaseCoding,
      TaskType.Documentation,
      TaskType.ITArchitecture,
      TaskType.Rollout,
      TaskType.Visualization,
      TaskType.QA,
    ],
    year: 1999,
    timestamp: "1999-01-01",
    duration: [3, "years"],
    deliveryTypes: [DeliveryType.Desktop],
    toolsUsed: [
      "Visual Basic 6.0",
      "MS SQL-Server",
      "Windows Server",
      "Installshield",
      "Crystal Reports",
      "SQL",
      "Osen UI Framework",
    ],
    description: `Entwicklung von 6 Windows Desktop-Anwendungen für das Management von Service Level Agreements. Erstellen von Setups für Windows mit Installshield. Rollouts organisiert mit IT-Administratoren in Konzernen. Erstellen von Berichten mit Crytsal Reports. Endkunden der Software Postbank, Daimler und andere.`,
  },
  {
    customer: "Qtobe AG Schweiz",
    title:
      "Entwicklung einer Desktop-App mit Visual Basic.Net inkl. Reporting Engine und Migration SQL-Server zu Oracle",
    industry: "IT-Services",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.Consulting,
    taskTypes: [
      TaskType.Coding,
      TaskType.Design,
      TaskType.UX,
      TaskType.APIDesign,
      TaskType.DataModeling,
      TaskType.Requirements,
      TaskType.DatabaseCoding,
      TaskType.Documentation,
      TaskType.ITArchitecture,
      TaskType.Rollout,
      TaskType.Visualization,
      TaskType.CustomerService,
      TaskType.QA,
    ],
    year: 2001,
    timestamp: "2001-06-01",
    duration: [5, "years"],
    deliveryTypes: [DeliveryType.Desktop],
    toolsUsed: [
      "Visual Basic 6.0",
      "MS SQL-Server",
      "Windows Server",
      "Oracle Database Server",
      "Installshield",
      "Crystal Reports",
      "SQL",
      "Osen UI Framework",
    ],
    description: `Entwicklung der Q-Board IT-Servicemanagement Suite Desktop App für das Verwalten von SLAs (Service Level Agreements). Migration von MY SQL-Server zu Oracle Datenbank. Entwerfen von Tabellen, Views und SQL-Queries, Kunden, welche die Lösung verwenden: Postbank, Commerzbank, Daimler und andere.`, // TODO: Fix customer list
  },
  {
    customer: "Qtobe AG Schweiz",
    title:
      "Migration einer Visual Basic Desktop-Anwendung in eine Microsoft .Net Web-Forms-Anwendung",
    industry: "IT-Services",
    clientSize: ClientSize.Midsized,
    serviceType: ServiceType.Consulting,
    taskTypes: [
      TaskType.Coding,
      TaskType.Design,
      TaskType.UX,
      TaskType.APIDesign,
      TaskType.DataModeling,
      TaskType.Requirements,
      TaskType.DatabaseCoding,
      TaskType.Documentation,
      TaskType.ITArchitecture,
      TaskType.Rollout,
      TaskType.QA,
    ],
    year: 2006,
    timestamp: "2006-06-01",
    duration: [5, "years"],
    deliveryTypes: [DeliveryType.Website],
    toolsUsed: [
      "ASP.Net",
      "Visual Basic",
      "WebForms",
      "Windows Server",
      "Oracle Database Server",
      "Crystal Reports",
      "SQL",
    ],
    description: `Migration der bestehenden Q-Board IT-Servicemanagement Suite Web Application in eine Web-Forms-Anwendung basierend auf Microsoft ASP.Net. Die Q-Board IT-Servicemanagement Suite ist eine Software für das Verwalten von SLAs (Service Level Agreements). Kunden, welche die Lösung verwenden: Postbank, Commerzbank, Daimler und andere.`, // TODO: Fix customer list
  },
  {
    customer: "Qtobe AG Schweiz",
    title:
      "Modernisierung einer Microsoft ASP.Net WebForms-Anwendung um REST Schnittstellen und neues UI",
    industry: "IT-Services",
    clientSize: ClientSize.Midsized,
    serviceType: ServiceType.Consulting,
    taskTypes: [
      TaskType.Coding,
      TaskType.Design,
      TaskType.UX,
      TaskType.APIDesign,
      TaskType.DataModeling,
      TaskType.Requirements,
      TaskType.DatabaseCoding,
      TaskType.Documentation,
      TaskType.ITArchitecture,
      TaskType.Rollout,
      TaskType.Coaching,
      TaskType.QA,
    ],
    year: 2009,
    timestamp: "2009-06-01",
    duration: [5, "years"],
    deliveryTypes: [DeliveryType.Website, DeliveryType.SPA],
    toolsUsed: [
      "ASP.Net",
      "Visual Basic",
      "WebForms",
      ".Net Web Controller",
      "AJAX",
      "REST",
      "Angular JS",
      "IIS",
      "Windows Server",
      "Oracle Database Server",
      "SQL",
    ],
    description: `Erweiterung der bestehenden Software Q-Board IT-Servicemanagement Suite um REST Schnittstellen für Nutzung modernerer Webtechnologien wie z.B. AngularJS. Coaching von Team-Mitgliedern bzgl. neuer Webtechnologien. Die Q-Board IT-Servicemanagement Suite ist eine Software für das Verwalten von SLAs (Service Level Agreements). Kunden, welche die Lösung verwenden: Postbank, Commerzbank, Daimler und andere.`, // TODO: Fix
  },
  {
    customer: "Bosch.IO Gmbh",
    title: "Gast Blogger zu den Themen IoT & Geschäftsmodelle",
    industry: "IoT",
    clientSize: ClientSize.Corporate,
    serviceType: ServiceType.Consulting,
    taskTypes: [TaskType.Writing],
    year: 2016,
    timestamp: "2016-05-01",
    duration: [2, "years"],
    deliveryTypes: [DeliveryType.Content],
    toolsUsed: ["NotePad"],
    description: `Für Bosch.IO habe ich Gast-Beiträge zu den Themen Innovation, Geschäftsmodelle, IoT und weiteren verfasst. Diese wurden im Bosch.IO Blog veröffentlicht.`,
    links: ["https://blog.bosch-si.com/search/matthias%20max"],
  },
  {
    customer: "Mind One",
    title: "Entwicklung einer Website für mein EDM-Projekt Mind One",
    industry: "Musik",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.ClientProject,
    taskTypes: [
      TaskType.Coding,
      TaskType.Design,
      TaskType.SEO,
      TaskType.UX,
      TaskType.CloudHosting,
    ],
    year: 2001,
    timestamp: "2001-12-31",
    duration: [5, "years"],
    deliveryTypes: [DeliveryType.Website],
    toolsUsed: ["HTML", "CSS", "Javascript", "Photoshop"],
    description: `Meine erste Website überhaupt war für mein EDM-Musikprojekt Mind One. Es ging darum, mich als Künstler bekannter zu machen und mit Fans in Kontakt zu treten. Ich habe das Design, die Programmierung und das Hosting selber übernommen.`,
    links: ["https://www.discogs.com/de/artist/75223-Mind-One"],
  },
  {
    customer: "Mind One",
    title: "EDM Artist und Musikproduzent",
    industry: "Musik",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.ClientProject,
    taskTypes: [
      TaskType.SoundDesign,
      TaskType.Composing,
      TaskType.MusicProduction,
      TaskType.Design,
    ],
    year: 1999,
    timestamp: "1999-01-01",
    duration: [7, "years"],
    deliveryTypes: [DeliveryType.MasterRecording],
    toolsUsed: [
      "Steinberg Cubase",
      "Synthesizers",
      "Photoshop",
      "Mischpult",
      "Studiotechnik",
    ],
    description: `Mein EDM Artist-projekt "Mind One" wurde von vielen Bekannten DJs wie Paul van Dyk, Tiesto, Armin van Buuren und Ferry Corsten unterstützt. Die musikalischen Rechte wurden durch Lizensierung mit Lizenznehmern wie Sony, Warner oder Universal (Compilations wie Club Rotation) monetär ausgewertet. Die Verlagstätigkeiten wurden selber übernommen und mit der GEMA abgerechnet. Alle Grafikleistungen wie Plattencover, Logo und Werbebanner wurden selbst erstellt.`,
  },
  {
    customer: "Open Source",
    title:
      "GS1.js: Javascript GS1 barcode content parser for NodeJS and the browser",
    industry: "Open Source",
    serviceType: ServiceType.OSS,
    taskTypes: [TaskType.Coding],
    year: 2016,
    timestamp: "2016-05-02",
    duration: [1, "weeks"],
    deliveryTypes: [DeliveryType.Library],
    toolsUsed: ["Javascript", "Typescript", "Gulp"],
    description: `GS1JS is a Javascript GS1 barcode content parser for NodeJS and the browser written in Typescript.`,
    links: ["https://github.com/bitflower/gs1js"],
  },
  {
    customer: "Open Source",
    title:
      "Stencil-Lerna: A starter kit for developing Stencil-PWAs in a lerna monorepo",
    industry: "Open Source",
    serviceType: ServiceType.OSS,
    taskTypes: [TaskType.Coding],
    year: 2019,
    timestamp: "2019-06-02",
    duration: [1, "weeks"],
    deliveryTypes: [DeliveryType.Library],
    toolsUsed: [
      "Javascript",
      "Typescript",
      "StencilJS",
      "NodeJS",
      "Lerna",
      "Monorepo",
      "Rollup",
    ],
    description: `A starter kit for developing PWAs in a lerna monorepo including a web-component design-system in Typescript.`,
    links: ["https://github.com/bitflower/stencil-lerna"],
  },
  {
    customer: "Trademarketing Service GmbH",
    title: "Entwicklung eines Design Systems für eine POS-Management Software",
    industry: "Handel/POS",
    serviceType: ServiceType.Consulting,
    taskTypes: [
      TaskType.Coding,
      TaskType.UX,
      TaskType.Design,
      TaskType.Frontend,
      TaskType.Prototyping,
      TaskType.DesignSystem,
    ],
    year: 2016,
    timestamp: "2016-05-01",
    duration: [2, "months"],
    deliveryTypes: [DeliveryType.SPA],
    toolsUsed: [
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "Sketch",
      "Bootstrap",
    ],
    description: `Entwicklung eines HTML/CSS/Javascript Design Systems für eine neue POS-Management Software. Über die Software können Mitarbeiter Zeiten buchen, Aufträge bearbeiten und Einsätze planen. Es wurde Kein Javascript-Framework eingesetzt.`,
    links: ["https://one-promoterweb.tmsgmbh.de"],
  },
  {
    customer: "BMG Rights Management Berlin",
    clientSize: ClientSize.Midsized,
    industry: "Musik",
    serviceType: ServiceType.ClientProject,
    title:
      "Songwriter für bekannte Künstler mit Platz 1 Platzierungen und Platin-Verkäufen",
    year: 2010,
    timestamp: "2010-01-01",
    duration: [4, "years"],
    deliveryTypes: [DeliveryType.Content, DeliveryType.MasterRecording],
    description: `Songautor für Künstler wie Christian Stürmer, Beatrice Egli, Glasperlenspiel und Marco Mengoni. Platz 1 in den Charts und Platin- bzw. Goldverkaufszahlen in Dautschland, der Schweiz und Italien.`,
    taskTypes: [TaskType.Composing, TaskType.MusicProduction],
    toolsUsed: [
      "MacBook",
      "Creativity",
      "Music Theory",
      "Research",
      "Steinberg Cubase",
      "Apple Logic Audio",
      "Ableton Live",
      "Native Instruments",
      "Musical Instruments",
      "Music Studio",
    ],
  },
];
