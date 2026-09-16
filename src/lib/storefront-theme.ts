export type CatalogProduct = {
  handle: string;
  title: string;
  price: string;
  image: string;
  imageAlt: string;
};

export type CatalogCollection = {
  semanticReference: string;
  title: string;
  products: CatalogProduct[];
};

export const themeSchema = {
  name: "Playful Gallery",
  templates: {
    index: ["announcement", "header", "lookbook", "featured-collection", "editorial", "collection-empty", "footer"],
  },
  regions: {
    header: ["announcement", "header"],
    main: ["lookbook", "featured-collection", "editorial", "collection-empty"],
    footer: ["footer"],
  },
  registeredSections: [
    "announcement",
    "header",
    "lookbook",
    "featured-collection",
    "editorial",
    "collection-empty",
    "footer",
  ],
  tokens: {
    color: ["background", "foreground", "muted", "surface", "accent", "accent-secondary", "border"],
    typography: ["font-display", "font-body"],
  },
} as const;

export const navigation = ["Shop", "Collections", "Journal", "About"];

export const featuredCollection: CatalogCollection = {
  semanticReference: "featured",
  title: "Objects to keep",
  products: [],
};

export const missingCollection: CatalogCollection = {
  semanticReference: "seasonal-edit",
  title: "Seasonal edit",
  products: [],
};