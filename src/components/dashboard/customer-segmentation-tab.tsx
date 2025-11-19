"use client"

import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip, Legend } from "recharts"
import { customerSegmentsData, customerData } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { ChartTooltipContent, ChartContainer, type ChartConfig } from "../ui/chart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Badge } from "../ui/badge"

const chartConfig = {
    value: {
        label: "Customers",
    },
    ...customerSegmentsData.reduce((acc, segment) => {
        acc[segment.name] = {
            label: segment.name,
            color: segment.fill,
        };
        return acc;
    }, {} as ChartConfig),
} satisfies ChartConfig;


export function CustomerSegmentationTab() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-3">
            <CardHeader>
                <CardTitle>Customer Segmentation</CardTitle>
                <CardDescription>Distribution of customers across segments.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[300px]">
                    <PieChart>
                        <Tooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dot" hideLabel />}
                        />
                        <Pie
                            data={customerSegmentsData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            innerRadius={60}
                            paddingAngle={5}
                            labelLine={false}
                        >
                        {customerSegmentsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} stroke={entry.fill} />
                        ))}
                        </Pie>
                        <Legend content={<CustomLegend />} />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>

        <Card className="lg:col-span-4">
            <CardHeader>
                <CardTitle>Customer List</CardTitle>
                <CardDescription>A sample list of customers from various segments.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead>Segment</TableHead>
                            <TableHead className="text-right">Total Spent</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {customerData.map((customer) => (
                            <TableRow key={customer.id}>
                                <TableCell>{customer.name}</TableCell>
                                <TableCell>
                                    <Badge variant="outline">{customer.segment}</Badge>
                                </TableCell>
                                <TableCell className="text-right">${customer.totalSpent.toLocaleString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
  )
}

const CustomLegend = ({ payload }: any) => {
    return (
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4 text-sm text-muted-foreground">
            {payload.map((entry: any, index: number) => (
                <div key={`item-${index}`} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }} />
                    <span>{entry.value}</span>
                </div>
            ))}
        </div>
    );
};
