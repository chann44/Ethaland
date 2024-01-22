import { Icons } from "./icons";

export function CurrencyCluster() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Icons.Dcoin />
          <Icons.Usdc />
        </div>
        <Icons.Ticon className="self-center" />
      </div>
      <Icons.rightArrow className="w-max shrink-0" />
      <Icons.Eth />
    </div>
  );
}
