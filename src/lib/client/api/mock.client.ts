"use server";

import {
  alsoListed,
  apolloAssociatedCompanyExample,
  apolloDetail,
  brazeDetail,
  zendeskDetail,
} from "../mock/examples";
import {
  MarketplaceDetail,
  AlsoListed,
  AssociatedCompany,
} from "../models/models";
import { Client } from "./client";

const allMarketplaceDetails = [zendeskDetail, apolloDetail, brazeDetail];
const allAssociatedCompanies = [apolloAssociatedCompanyExample];

class MockClient implements Client {
  getMarketplaceDetails(): Promise<MarketplaceDetail[]> {
    const ret = async () => allMarketplaceDetails;
    return ret();
  }
  getAlsoListed(): Promise<AlsoListed[]> {
    const ret = async () => alsoListed;
    return ret();
  }
  getAssociatedCompany(id: string): Promise<AssociatedCompany | undefined> {
    const ret = async () =>
      allAssociatedCompanies.find((company) => company.id === id);
    return ret();
  }
}

const createClient = async () => new MockClient();

export default createClient;
