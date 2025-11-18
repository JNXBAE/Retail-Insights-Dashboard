// Mock data for the dashboard
export const kpiData = {
  totalRevenue: {
    value: 45231.89,
    change: 12.2,
  },
  subscriptions: {
    value: 2350,
    change: 15.1,
  },
  sales: {
    value: 12234,
    change: -2.3,
  },
  activeNow: {
    value: 573,
    change: 5,
  },
};

export const overviewData = [
  { name: "Jan", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Feb", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Mar", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Apr", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "May", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jun", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Jul", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Aug", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Sep", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Oct", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Nov", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Dec", total: Math.floor(Math.random() * 5000) + 1000 },
];

export const recentSalesData = [
  { name: "Olivia Martin", email: "olivia.martin@email.com", amount: 1999.00, avatar: "avatar-1" },
  { name: "Jackson Lee", email: "jackson.lee@email.com", amount: 390.00, avatar: "avatar-2" },
  { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: 299.00, avatar: "avatar-3" },
  { name: "William Kim", email: "will@email.com", amount: 99.00, avatar: "avatar-4" },
  { name: "Sofia Davis", email: "sofia.davis@email.com", amount: 39.00, avatar: "avatar-5" },
];

export const marketBasketData = [
    { item1: "Milk", item2: "Bread", support: 0.04, confidence: 0.5 },
    { item1: "Diapers", item2: "Beer", support: 0.02, confidence: 0.7 },
    { item1: "Eggs", item2: "Bacon", support: 0.03, confidence: 0.6 },
    { item1: "Cereal", item2: "Milk", support: 0.05, confidence: 0.8 },
    { item1: "Chips", item2: "Salsa", support: 0.06, confidence: 0.75 },
    { item1: "Coffee", item2: "Sugar", support: 0.04, confidence: 0.65 },
];

export const customerSegmentsData = [
    { name: 'High Value', value: 400, fill: 'hsl(var(--chart-1))' },
    { name: 'Frequent Buyers', value: 300, fill: 'hsl(var(--chart-2))' },
    { name: 'New Customers', value: 300, fill: 'hsl(var(--chart-3))' },
    { name: 'At Risk', value: 200, fill: 'hsl(var(--chart-4))' },
    { name: 'Lapsed', value: 150, fill: 'hsl(var(--chart-5))' },
];

export const customerData = [
    { id: 'CUST001', name: 'Liam Johnson', segment: 'High Value', totalSpent: 5432.10 },
    { id: 'CUST002', name: 'Emma Williams', segment: 'Frequent Buyers', totalSpent: 2109.50 },
    { id: 'CUST003', name: 'Noah Brown', segment: 'New Customers', totalSpent: 150.75 },
    { id: 'CUST004', name: 'Ava Jones', segment: 'At Risk', totalSpent: 450.00 },
    { id: 'CUST005', name: 'Oliver Garcia', segment: 'Lapsed', totalSpent: 25.00 },
    { id: 'CUST006', name: 'Sophia Miller', segment: 'High Value', totalSpent: 7890.00 },
];
