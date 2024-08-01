import { AssociatedCompany } from "@/lib/client/models/models";
import { companySizeToText } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export interface AssociatedCompanyProps {
  company: AssociatedCompany | undefined;
}

export const AssociatedCompanyComponent: React.FC<AssociatedCompanyProps> = (
  props: AssociatedCompanyProps
) => {
  return (
    <>
      {props.company && (
        <div className="p-8 border rounded-2xl">
          <div className="flex flex-col gap-6">
            <div className="text-lg font-semibold">Associated Company</div>
            <div className="flex items-center gap-x-3">
              <Image
                src={props.company.logoLink}
                alt={""}
                width={40}
                height={40}
              />
              <div className="flex flex-col">
                <span className="font-semibold">{props.company.name}</span>
                <span className="text-sm">
                  {props.company.distributionCount} marketplaces{" "}
                  <abbr title="Number of marketplaces where this company is listed.">
                    ⓘ
                  </abbr>
                </span>
              </div>
            </div>
            <div>
              <div className="font-semibold text-sm">Website</div>
              <Link
                href={props.company.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-xs">{props.company.website}</span>
              </Link>
            </div>
            <div>
              <div className="font-semibold text-sm">Industry</div>
              <div className="text-xs">{props.company.industry}</div>
            </div>
            <div>
              <div className="font-semibold text-sm">Company Size</div>
              <div className="text-xs">
                {companySizeToText(props.company.companySize)}
              </div>
            </div>
            <div>
              <div className="font-semibold text-sm">About</div>
              <div className="text-xs">{props.company.about}</div>
            </div>
            <hr className="w-full" />
          </div>
          <div>
            <div className="flex pt-3">
              <div className="grow"></div>
              <button className="text-purple-700 text-sm">
                Show all details
              </button>
              <div className="grow"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
