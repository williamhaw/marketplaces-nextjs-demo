import { CompanySize } from "./client/models/models";

export const companySizeToText = (size: CompanySize) => {
  switch (size) {
    case CompanySize.OneToTen:
      return "1-10";
    case CompanySize.TenToHundred:
      return "10-100";
    case CompanySize.HundredToFiveHundred:
      return "100-500";
    case CompanySize.FiveHundredToThousand:
      return "500-1000";
  }
};
