import { MarketplaceDetail } from "@/lib/client/models/models";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

export interface SidebarListGroupProps {
  selectedCompanyId: string;
  setSelectedCompanyId: Dispatch<SetStateAction<string>>;
  companies: MarketplaceDetail[];
}

export const SidebarListGroup: React.FC<SidebarListGroupProps> = (
  props: SidebarListGroupProps
) => {
  const selectCompany = (companyId: string) => () => {
    props.setSelectedCompanyId(companyId);
  };

  return (
    <div>
      <div className="sidebar-highlight p-4">
        <div>Top Ranked</div>
        <div>The Hot100</div>
        <div>{props.companies.length} results</div>
      </div>
      <div className="p-3">
        <div>{/* image  */}</div>
        <div>Show the marketplace where you&apos;d be a top seller</div>
        <button>Sign in to show top picks for you</button>
      </div>
      <div className="flex flex-col">
        {props.companies.map((company) => (
          <div
            key={company.id}
            className={
              "flex border p-3 gap-2 " +
              (props.selectedCompanyId === company.id
                ? "sidebar-selected border-l-green-600 border-2"
                : "")
            }
            onClick={selectCompany(company.id)}
          >
            <Image src={company.logoLink} alt={""} width={70} height={70} />
            <div className="flex flex-col">
              <div>{company.name}</div>
              <div>{company.type}</div>
              <div>{company.activeBuyersCount} active buyers</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
