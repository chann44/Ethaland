import Link from "next/link";

import { siteRoutes } from "@/config/site";
import { Logo } from "@/components/logo";
import { WalletButton } from "./wallet-button";

export function SiteHeader() {
  return (
    <header className="flex h-28 items-center justify-between">
      <Link href={siteRoutes.root}>
        <Logo />
      </Link>
      <WalletButton />
    </header>
  );
}
