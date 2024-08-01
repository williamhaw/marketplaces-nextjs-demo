import {
  AlsoListed,
  AssociatedCompany,
  MarketplaceDetail,
} from "@/lib/client/models/models";
import React from "react";
import { AlsoListedComponent } from "./AlsoListed";
import { AssociatedCompanyComponent } from "./AssociatedCompany";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faRectangleList,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUpRightFromSquare,
  faPlus,
  faShare,
  faShield,
  faShop,
} from "@fortawesome/free-solid-svg-icons";

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
      <div className="flex items-center gap-3">
        <div className="grow"></div>
        <FontAwesomeIcon icon={faShare}/>
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
            <FontAwesomeIcon icon={faShield} />
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
            <abbr title="Change in buyers by percentage">
              <FontAwesomeIcon icon={faCircleQuestion} />
            </abbr>
          </div>
          <div className="text-sm">
            <FontAwesomeIcon icon={faShop} />
            <span> {props.detail.type}</span>
          </div>
          <div className="text-sm">
            <FontAwesomeIcon icon={faStar} />
            <span> {props.detail.listingCount} listings </span>
            <span>{props.detail.newListingCount} new</span>
          </div>
          <div className="text-sm">
            <FontAwesomeIcon icon={faRectangleList} />
            <span>
              {" "}
              Features: {props.detail.features.slice(0, 2).join(",")}, +
              {props.detail.features.length - 2} more
            </span>
          </div>
          <div className="flex gap-3">
            <button className="bg-lime-300 p-2 rounded-3xl w-1/4 text-sm">
              <FontAwesomeIcon icon={faPlus} />
              <span> Track</span>
            </button>
            <button className="p-2 rounded-3xl border border-purple-600 w-1/4 text-sm">
              <span>List Now </span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </button>
          </div>
        </div>
      )}
      <AlsoListedComponent alsoListed={props.alsoListed} />
      <AssociatedCompanyComponent company={props.company} />
    </div>
  );
};
