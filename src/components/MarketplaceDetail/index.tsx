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
    <div className="flex flex-col gap-8 px-8 bg-white">
      <div className="flex">
        <div className="grow"></div>
        <div>...</div>
      </div>
      {props.detail && (
        <div className="flex flex-col gap-3">
          <div className="text-purple-600">
            <span className="text-xs">Rank: </span>
            <span className="text-base">{props.detail.rank}</span>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src={props.detail.logoLink}
              alt={""}
              width={60}
              height={60}
            />
            <div className="text-3xl">{props.detail.name}</div>
          </div>
          <div className="flex gap-2 text-xs">
            <span>
              {props.detail.activeBuyersCount.toLocaleString()} active buyers
            </span>
            <span>
              Prev{" "}
              {props.detail.previousBuyersCount.toLocaleString("en-US", {
                maximumFractionDigits: 2,
                notation: "compact",
                compactDisplay: "short",
              })}
            </span>
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
          <div className="text-sm">
            <span>{props.detail.type}</span>
          </div>
          <div className="text-sm">
            <span>{props.detail.listingCount} listings </span>
            <span>{props.detail.newListingCount} new</span>
          </div>
          <div className="text-sm">
            Features: {props.detail.features.join(",")}
          </div>
          <div className="flex gap-3">
            <button className="bg-lime-300 p-2 rounded-3xl w-1/4 text-sm">
              Track
            </button>
            <button className="p-2 rounded-3xl border border-purple-600 w-1/4 text-sm">
              List Now
            </button>
          </div>
        </div>
      )}
      <AlsoListedComponent alsoListed={props.alsoListed} />
      <AssociatedCompanyComponent company={props.company} />
    </div>
  );
};
