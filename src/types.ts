/**
 * The type of service we have delivered.
 */
export enum ServiceType {
  Coaching = 'coaching',
  Consulting = 'consulting', // Soll für Freelancing/Projekt Mithilfe stehen, als Aufträge, deren Endkunde nicht meiner war
  ClientProject = 'clientProject',
  OSS = 'openSource',
}

export enum TaskType {
  APIDesign = 'apidesign',
  AppStore = 'appStore', // Manage app store account, releases & content and beta testing & versioning
  CloudHosting = 'cloudhosting',
  Coaching = 'coaching',
  Coding = 'coding',
  Composing = 'composing',
  CustomerService = 'customerservice', // = ServiceDesk
  DatabaseCoding = 'database',
  DataModeling = 'datamodelling',
  Design = 'design',
  DesignSystem = 'designSystem',
  DevOps = 'devOps',
  Documentation = 'documentation',
  Frontend = 'frontend',
  ITArchitecture = 'itarchitecure',
  Manager = 'manager',
  MusicProduction = 'musicProduction',
  Prototyping = 'prototyping',
  ProductOwner = 'productOwner',
  QA = 'qa',
  Requirements = 'requirements',
  Refinements = 'refinements',
  Sprintplaning = 'sprintPlaning',
  Roadmap = 'roadmap',
  Rollout = 'rollout', // = Deployment
  SEO = 'seo',
  SoundDesign = 'sounddesign',
  TeamLead = 'teamLead',
  UnitTests = 'unitTest',
  UX = 'ux',
  Visualization = 'visualization',
  Writing = 'writing',
}

export enum DeliveryType {
  Content = 'content',
  Desktop = 'desktop',
  Library = 'library',
  MasterRecording = 'masterRecording',
  MobileApp = 'app',
  ProductOwnership = 'productOwnership',
  PWA = 'pwa',
  SPA = 'spa',
  Website = 'website',
}

export enum ClientSize {
  Corporate = 'corporate',
  Midsized = 'kmu',
  SmallBusiness = 'smallBusiness',
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
