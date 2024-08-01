import {
  AlsoListed,
  AssociatedCompany,
  CompanySize,
  MarketplaceDetail,
} from "../models/models";

export const apolloAssociatedCompanyExample: AssociatedCompany = {
  id: "apollo",
  name: "Apollo.io",
  logoLink: "/image/apollo-logo.jpeg",
  website: "https://www.apollo.io",
  distributionCount: 57,
  industry: "Sales Intelligence Software",
  companySize: CompanySize.FiveHundredToThousand,
  about:
    "Apollo is a market sales platform that helps accelerate the growth of an organization.",
};

export const zendeskAssociatedCompanyExample: AssociatedCompany = {
  id: "zendesk",
  name: "Zendesk",
  logoLink: "/image/zendesk-logo.jpeg",
  website: "https://www.zendesk.com/",
  distributionCount: 23,
  industry: "Customer Support Software",
  companySize: CompanySize.FiveHundredToThousand,
  about: "",
};

export const brazeAssociatedCompanyExample: AssociatedCompany = {
  id: "braze",
  name: "Braze",
  logoLink: "/image/braze-logo.jpeg",
  website: "https://www.braze.com/",
  distributionCount: 47,
  industry: "Customer Engagement Platform",
  companySize: CompanySize.HundredToFiveHundred,
  about: "",
};

export const alsoListed: AlsoListed[] = [
  {
    id: "braze",
    name: "Braze Integration Marketplace",
    logoLink: "/image/braze-logo.jpeg",
    type: "Affiliate",
  },
  {
    id: "hubspot",
    name: "HubSpot App Marketplace",
    logoLink: "/image/hubspot-logo.jpeg",
    type: "App & integration",
  },
  {
    id: "zendesk",
    name: "Zendesk Marketplace",
    logoLink: "/image/zendesk-logo.jpeg",
    type: "App & integration",
  },
  {
    id: "apollo",
    name: "Apollo Integrations",
    logoLink: "/image/apollo-logo.jpeg",
    type: "App & integration",
  },
];

export const apolloDetail: MarketplaceDetail = {
  id: "apollo",
  name: "Apollo Integrations",
  rank: 89,
  activeBuyersCount: 160000,
  previousBuyersCount: 135000,
  buyerCountChange: 5.23,
  type: "App & integration",
  listingCount: 138,
  newListingCount: 2,
  features: ["categories", "sponsored listings", "", "", "", "", ""],
  logoLink: "/image/apollo-logo.jpeg",
};

export const zendeskDetail: MarketplaceDetail = {
  id: "zendesk",
  name: "Zendesk Marketplace",
  rank: 37,
  activeBuyersCount: 99000,
  previousBuyersCount: 87000,
  buyerCountChange: 10.38,
  type: "App & integration",
  listingCount: 99,
  newListingCount: 13,
  features: ["categories", "sponsored listings", "", "", "", "", ""],
  logoLink: "/image/zendesk-logo.jpeg",
};

export const brazeDetail: MarketplaceDetail = {
  id: "braze",
  name: "Braze Integration Marketplace",
  rank: 17,
  activeBuyersCount: 5830,
  previousBuyersCount: 3300,
  buyerCountChange: 20.62,
  type: "Affiliate",
  listingCount: 291,
  newListingCount: 29,
  features: ["categories", "sponsored listings", "", "", "", "", ""],
  logoLink: "/image/braze-logo.jpeg",
};
