import {
  AlsoListed,
  AssociatedCompany,
  MarketplaceDetail,
} from "../models/models";

export interface Client {
  getMarketplaceDetails(): Promise<MarketplaceDetail[]>;

  getAlsoListed(id: string): Promise<AlsoListed[]>;

  getAssociatedCompany(id: string): Promise<AssociatedCompany | undefined>;
}
