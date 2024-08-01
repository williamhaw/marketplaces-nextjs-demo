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
        <div className="font-semibold text-lg">Top Ranked</div>
        <div className="text-sm">The Hot100</div>
        <div className="text-xs">{props.companies.length} results</div>
      </div>
      <div className="p-3">
        <div>{/* image  */}</div>
        <div className="text-purple-600 text-base font-semibold">
          Show the marketplace where you&apos;d be a top seller
        </div>
        <button className="rounded-2xl border border-purple-600 px-4 py-1 text-sm text-purple-600">
          Sign in to show top picks for you
        </button>
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
              <div className="text-purple-600 text-base font-semibold">
                {company.name}
              </div>
              <div className="text-sm">{company.type}</div>
              <div className="text-xs">
                {company.activeBuyersCount.toLocaleString()} active buyers
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
