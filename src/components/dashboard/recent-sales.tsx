import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { recentSalesData } from "@/lib/data"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function RecentSales() {
    return (
        <div className="space-y-8">
            {recentSalesData.map(sale => {
                const avatar = PlaceHolderImages.find(img => img.id === sale.avatar);
                return (
                    <div className="flex items-center" key={sale.email}>
                        <Avatar className="h-9 w-9">
                            <AvatarImage src={avatar?.imageUrl} alt="Avatar" data-ai-hint={avatar?.imageHint}/>
                            <AvatarFallback>{sale.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none">{sale.name}</p>
                            <p className="text-sm text-muted-foreground">{sale.email}</p>
                        </div>
                        <div className="ml-auto font-medium">+${sale.amount.toLocaleString()}</div>
                    </div>
                )
            })}
        </div>
    )
}
