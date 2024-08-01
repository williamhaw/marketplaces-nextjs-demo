import { AssociatedCompany } from "@/lib/client/models/models";
import { companySizeToText } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export interface AssociatedCompanyProps {
  company: AssociatedCompany;
}

export const AssociatedCompanyComponent: React.FC<AssociatedCompanyProps> = (
  props: AssociatedCompanyProps
) => {
  return (
    <div className="p-4 border rounded-2xl">
      <h3>Associated Company</h3>
      <div className="flex items-center gap-x-3">
        <Image src={props.company.logoLink} alt={""} width={40} height={40} />
        <div className="flex flex-col">
          <span>{props.company.name}</span>
          <span>
            {props.company.distributionCount} marketplaces{" "}
            <abbr title="Number of marketplaces where this company is listed.">
              ⓘ
            </abbr>
          </span>
        </div>
      </div>
      <div>
        <div>Website</div>
        <Link href={props.company.website}>{props.company.website}</Link>
      </div>
      <div>
        <div>Industry</div>
        <div>{props.company.industry}</div>
      </div>
      <div>
        <div>Company Size</div>
        <div>{companySizeToText(props.company.companySize)}</div>
      </div>
      <div>
        <div>About</div>
        <div>{props.company.about}</div>
      </div>
      <hr className="w-full" />
      <div className="flex pt-3">
        <div className="grow"></div>
        <button className="text-purple-700">Show all details</button>
        <div className="grow"></div>
      </div>
    </div>
  );
};
