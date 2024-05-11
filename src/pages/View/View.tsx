import ManualOrderView from "./ManualOrderView/ManualOrderView";
import MarketView from "./MarketView/MarketView";
import WorkingOrderView from "./WorkingOrderView/WorkingOrderView";

export default function View() {
  return (
    <div className="flex">
      <MarketView />
      <div className="flex flex-col">
        <ManualOrderView />
        <WorkingOrderView />
      </div>
    </div>
  )
}
