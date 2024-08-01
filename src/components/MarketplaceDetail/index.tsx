import {
  AlsoListed,
  AssociatedCompany,
  MarketplaceDetail,
} from "@/lib/client/models/models";
import React from "react";
import { AlsoListedComponent } from "./AlsoListed";
import { AssociatedCompanyComponent } from "./AssociatedCompany";
import Image from "next/image";

export interface MarketplaceDetailProps {
  detail: MarketplaceDetail | undefined;
  alsoListed: AlsoListed[];
  company: AssociatedCompany | undefined;
}

export const MarketplaceDetailComponent: React.FC<MarketplaceDetailProps> = (
  props: MarketplaceDetailProps
) => {
  return (
    <div className="flex flex-col gap-8 px-8">
      <div className="flex">
        <div className="grow"></div>
        <div>...</div>
      </div>
      {props.detail && (
        <>
          <div className="text-purple-600">Rank: {props.detail.rank}</div>
          <div className="flex items-center gap-3">
            <Image
              src={props.detail.logoLink}
              alt={""}
              width={60}
              height={60}
            />
            <div>{props.detail.name}</div>
          </div>
          <div className="flex gap-2">
            <span>{props.detail.activeBuyersCount} active buyers</span>
            <span>Prev {props.detail.previousBuyersCount}</span>
            <span
              className={
                props.detail.buyerCountChange > 0
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {props.detail.buyerCountChange > 0 ? "+" : "-"}
              {props.detail.buyerCountChange}%
            </span>
          </div>
          <div>
            <span>{props.detail.type}</span>
          </div>
          <div>
            <span>{props.detail.listingCount} listings</span>
            <span>{props.detail.newListingCount} new</span>
          </div>
          <div>{props.detail.features.join(",")}</div>
          <div className="flex gap-3">
            <button>Track</button>
            <button>List Now</button>
          </div>
        </>
      )}
      <AlsoListedComponent alsoListed={props.alsoListed} />
      <AssociatedCompanyComponent company={props.company} />
    </div>
  );
};
