"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { overviewData } from "@/lib/data"

export function OverviewChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
        <BarChart data={overviewData}>
            <XAxis
            dataKey="name"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            />
            <YAxis
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
                cursor={{ fill: 'hsl(var(--muted))', radius: 4 }}
                contentStyle={{ 
                  background: 'hsl(var(--background))', 
                  border: '1px solid hsl(var(--border))', 
                  borderRadius: 'var(--radius)' 
                }}
            />
            <Bar 
              dataKey="total" 
              fill="hsl(var(--primary))" 
              radius={[4, 4, 0, 0]} 
              activeBar={{ fill: 'hsl(var(--accent))' }}
            />
        </BarChart>
    </ResponsiveContainer>
  )
}
