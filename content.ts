/**
 * The type of service we have delivered.
 */
enum ServiceType {
  Coaching = "coaching",
  Consulting = "consulting", // Soll für Freelancing/Projekt Mithilfe stehen, als Aufträge, deren Endkunde nicht meiner war
  ClientProject = "clientProject",
}

enum TaskType {
  APIDesign = "apidesign",
  AppStore = "appStore", // Manage app store account, releases & content and beta testing & versioning
  CloudHosting = "cloudhosting",
  Coaching = "coaching",
  Coding = "coding",
  DataModeling = "datamodelling",
  Design = "design",
  Documentation = "documentation",
  ITArchitecture = "itarchitecure",
  Prototyping = "prototyping",
  Requirements = "requirements",
  SEO = "seo",
  SoundDesign = "sounddesign",
  UX = "ux",
}

enum DeliveryType {
  MobileApp = "app",
  Website = "website",
  PWA = "pwa",
  SPA = "spa",
}

enum ClientSize {
  Corporate = "corporate",
  Midsized = "kmu",
  SmallBusiness = "smallBusiness",
}

interface Project {
  clientSize: ClientSize;
  customer: string;
  industry: string;
  deliveryTypes: DeliveryType[];
  serviceType: ServiceType;
  taskTypes: TaskType[];
  title: string;
  toolsUsed: string[];
  year: number;
  timestamp?: string; // TODO: Make requried and use to sort projects chronologically
  description?: string;
  links?: string[];
}

export const projects: Project[] = [
  {
    customer: "Auftakt Medien e.K.",
    title: "Klaus Günther GmbH Website",
    industry: "Industrie",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.Consulting,
    taskTypes: [TaskType.Coding],
    year: 2015,
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
    description: ``,
    links: ["https://www.kguenther.de"],
  },
  {
    customer: "Auftakt Medien e.K.",
    title: "Cassis Manufaktur Google Maps Integration",
    industry: "Nahrungsmittel",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.Consulting,
    taskTypes: [TaskType.Coding],
    year: 2015,
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
    description: ``,
    links: ["https://www.cassismanufaktur.de"],
  },
  {
    customer: "Auftakt Medien e.K.",
    title: "RECHTSANWALT VOGEL GMBH Website",
    industry: "Rechtsberatung",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.Consulting,
    taskTypes: [TaskType.Coding],
    year: 2014,
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
    description: `Responsive ...`,
    links: ["http://www.rv-gmbh.de"],
  },
  {
    customer: "Auftakt Medien e.K.",
    title: "Grüner Baum Sinsheim Website",
    industry: "Gastronomie",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.Consulting,
    taskTypes: [TaskType.Coding, TaskType.SEO],
    year: 2015,
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
    description: ``,
    links: ["https://www.gruenerbaum-sinsheim.de"],
  },
  {
    customer: "Auftakt Medien e.K.",
    title: "Wohnbau Oberriexingen Website",
    industry: "Immobilien",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.Consulting,
    taskTypes: [TaskType.Coding],
    year: 2014,
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
      "SASS",
    ],
    description: ``,
    links: ["https://www.wohnbau-oberriexingen.de"],
  },
  {
    customer: "Sigurd Roscher",
    title: "Barbara Bonisolli Website",
    industry: "Industrie",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.Consulting,
    taskTypes: [TaskType.Coding],
    year: 2016,
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
    description: ``,
    links: ["http://www.bonisolli.de"],
  },
  {
    customer: "Sigurd Roscher",
    title: "WeinKulturGaden Thüngersheim Website",
    industry: "Kultur",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.Consulting,
    taskTypes: [TaskType.Coding],
    year: 2015,
    deliveryTypes: [DeliveryType.Website],
    toolsUsed: ["Foundation CSS", "HTML", "CSS", "Javascript"],
    description: ``,
    links: ["https://weinkulturgaden.de"],
  },
  {
    customer: "Sigurd Roscher",
    title: "Kieferchirurgie Regensburg Website",
    industry: "Medizin",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.Consulting,
    taskTypes: [TaskType.Coding],
    year: 2017,
    deliveryTypes: [DeliveryType.Website],
    toolsUsed: ["HTML", "CSS", "Javascript"],
    description: ``,
    links: ["http://kieferchirurgie-regensburg.de"],
  },
  {
    customer: "Sigurd Roscher",
    title: "Green LED Dot Konfigurator Website",
    industry: "Energie",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.Consulting,
    taskTypes: [TaskType.Coding],
    year: 2014,
    deliveryTypes: [DeliveryType.Website],
    toolsUsed: ["HTML", "CSS", "Javascript"],
    description: ``,
    links: ["http://greenleddot.com/ersparnis-rechner/"],
  },
  {
    customer: "Matthias Max",
    title: "Trackpool Website",
    industry: "Musik",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.ClientProject,
    taskTypes: [TaskType.Coding, TaskType.Design, TaskType.SEO, TaskType.UX],
    year: 2001,
    deliveryTypes: [DeliveryType.Website],
    toolsUsed: ["HTML", "CSS", "Javascript"],
    description: ``,
  },
  {
    customer: "Mind One",
    title: "Mind One Website",
    industry: "Musik",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.ClientProject,
    taskTypes: [TaskType.Coding, TaskType.Design, TaskType.SEO, TaskType.UX],
    year: 2001,
    deliveryTypes: [DeliveryType.Website],
    toolsUsed: ["HTML", "CSS", "Javascript", "Photoshop"],
    description: ``,
  },
  {
    customer: "Breathe Music",
    title: "Breathe Music Website",
    industry: "Musik",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.ClientProject,
    taskTypes: [TaskType.Coding, TaskType.Design, TaskType.SEO, TaskType.UX],
    year: 2005,
    deliveryTypes: [DeliveryType.Website],
    toolsUsed: ["HTML", "CSS", "Javascript", "Photoshop"],
    description: ``,
  },
  {
    customer: "Superstreem Media",
    title: "Superstreem Media Website",
    industry: "Musik",
    clientSize: ClientSize.SmallBusiness,
    serviceType: ServiceType.ClientProject,
    taskTypes: [TaskType.Coding, TaskType.Design, TaskType.SEO, TaskType.UX],
    year: 2007,
    deliveryTypes: [DeliveryType.Website],
    toolsUsed: ["HTML", "CSS", "Javascript", "Photoshop"],
    description: ``,
  },
  {
    customer: "Securikett Ulrich & Horn GmbH",
    title: "CODIKETT Mobile App",
    industry: "Logistik",
    clientSize: ClientSize.Midsized,
    serviceType: ServiceType.ClientProject,
    taskTypes: [TaskType.Coding, TaskType.AppStore],
    year: 2014,
    deliveryTypes: [DeliveryType.MobileApp],
    toolsUsed: [
      "HTML",
      "CSS",
      "Javascript",
      "Ionic",
      "Cordova",
      "SASS",
      "AngularJS",
    ],
    description: `GS 1`,
  },
  {
    customer: "Securikett Ulrich & Horn GmbH",
    title: "MILLEPADIA Mobile App",
    industry: "Logistik",
    clientSize: ClientSize.Midsized,
    serviceType: ServiceType.ClientProject,
    taskTypes: [TaskType.Coding, TaskType.AppStore],
    year: 2016,
    deliveryTypes: [DeliveryType.MobileApp],
    toolsUsed: [
      "HTML",
      "CSS",
      "Javascript",
      "Ionic",
      "Cordova",
      "SASS",
      "AngularJS",
    ],
    description: `GS 1`,
  },
  {
    customer: "RTS Steuerberatungsgesellschaft KG",
    title: "Tax Hero Recruiting-Game",
    industry: "Human Resources",
    clientSize: ClientSize.Midsized,
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
    ],
    year: 2015,
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
    ],
    description: `Spielerisch Bewerber gewinnen mit TAXHERO`,
  },
  {
    customer: "Bosch.IO GmbH",
    title: "Smart Trunk Mobile App",
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
    description: `Mobile App für iOS. Was kann das zukünftige CONNECTED CAR?`,
    links: ["https://www.youtube.com/watch?v=Xj-AQuP2AOA"],
  },
  {
    customer: "ecce AG Schweiz",
    title: "SLA Admin Tool Set",
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
    description: `Tool to manage SLAs: Service Level Agreements`,
  },
];
