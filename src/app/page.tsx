"use client";
import { MarketplaceDetailComponent } from "@/components/MarketplaceDetail";
import { SidebarListGroup } from "@/components/SidebarListGroup";
import {
  AlsoListed,
  AssociatedCompany,
  MarketplaceDetail,
} from "@/lib/client/models/models";
import { useEffect, useState } from "react";

export default function Home() {
  const [selectedCompanyId, setSelectedCompanyId] = useState("apollo");
  const [marketplaces, setMarketplaces] = useState([] as MarketplaceDetail[]);
  const [associatedCompany, setAssociatedCompany] = useState(
    undefined as AssociatedCompany | undefined
  );
  const [alsoListed, setAlsoListed] = useState([] as AlsoListed[]);

  useEffect(() => {
    const get = async () => {
      const newCompanies = await (
        await fetch("/api/bff/marketplace-details")
      ).json();
      setMarketplaces(newCompanies);
    };
    get();
  }, []);

  useEffect(() => {
    const get = async () => {
      const newAssociatedCompany = await (
        await fetch(
          "/api/bff/associated-company?" +
            new URLSearchParams({ id: selectedCompanyId })
        )
      ).json();
      setAssociatedCompany(newAssociatedCompany);
    };
    get();
  }, [selectedCompanyId]);

  useEffect(() => {
    const get = async () => {
      const newAlsoListed = await (
        await fetch(
          "/api/bff/also-listed?" +
            new URLSearchParams({ id: selectedCompanyId })
        )
      ).json();
      setAlsoListed(newAlsoListed);
    };
    get();
  }, [selectedCompanyId]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex">
        <div>
          <SidebarListGroup
            selectedCompanyId={selectedCompanyId}
            setSelectedCompanyId={setSelectedCompanyId}
            companies={marketplaces}
          />
        </div>
        <div>
          <MarketplaceDetailComponent
            detail={marketplaces.find((c) => c.id === selectedCompanyId)}
            alsoListed={alsoListed}
            company={associatedCompany}
          />
        </div>
      </div>
    </main>
  );
}
