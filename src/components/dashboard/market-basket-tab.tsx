import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { marketBasketData } from "@/lib/data"
import { Badge } from "../ui/badge"

export function MarketBasketTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Basket Analysis</CardTitle>
        <CardDescription>
          Frequently co-occurring products in customer baskets to identify cross-selling opportunities.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product Association Rule</TableHead>
              <TableHead className="text-right">Support</TableHead>
              <TableHead className="text-right">Confidence</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {marketBasketData.map((rule, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-2 font-medium">
                    <Badge variant="secondary">{rule.item1}</Badge>
                    <span>{'->'}</span>
                    <Badge variant="secondary">{rule.item2}</Badge>
                  </div>
                </TableCell>
                <TableCell className="text-right">{(rule.support * 100).toFixed(1)}%</TableCell>
                <TableCell className="text-right">{(rule.confidence * 100).toFixed(1)}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
