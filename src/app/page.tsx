import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { DateRangePicker } from "@/components/date-range-picker"
import { UserNav } from "@/components/dashboard/user-nav"
import { SalesOverviewTab } from "@/components/dashboard/sales-overview-tab"
import { MarketBasketTab } from "@/components/dashboard/market-basket-tab"
import { CustomerSegmentationTab } from "@/components/dashboard/customer-segmentation-tab"

export default function DashboardPage() {
  return (
    <div className="flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4 md:px-8">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">Retail Insights Dashboard</h1>
          <div className="ml-auto flex items-center space-x-4">
            <DateRangePicker />
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Sales Overview</TabsTrigger>
            <TabsTrigger value="market-basket">Market Basket Analysis</TabsTrigger>
            <TabsTrigger value="customer-segmentation">Customer Segmentation</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <SalesOverviewTab />
          </TabsContent>
          <TabsContent value="market-basket" className="space-y-4">
            <MarketBasketTab />
          </TabsContent>
          <TabsContent value="customer-segmentation" className="space-y-4">
              <CustomerSegmentationTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
