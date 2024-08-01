export interface AssociatedCompany {
  id: string;
  name: string;
  logoLink: string;
  website: string;
  distributionCount: number;
  industry: string;
  companySize: CompanySize;
  about: string;
}

export enum CompanySize {
  OneToTen,
  TenToHundred,
  HundredToFiveHundred,
  FiveHundredToThousand,
}

export interface AlsoListed {
  id: string;
  name: string;
  logoLink: string;
  type: string;
}

export interface MarketplaceDetail {
  id: string;
  name: string;
  logoLink: string;
  rank: number;
  activeBuyersCount: number;
  previousBuyersCount: number;
  buyerCountChange: number;
  type: string;
  listingCount: number;
  newListingCount: number;
  features: string[];
}
