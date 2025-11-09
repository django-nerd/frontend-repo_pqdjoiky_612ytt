import React from 'react';
import { TrendingUp, Wallet, Users, Activity, AlertTriangle, AlertOctagon, AlertCircle } from 'lucide-react';

function KpiCard({ title, value, change, positive, icon: Icon }) {
  return (
    <div className="p-4 rounded-xl border bg-white shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <div className="mt-1 flex items-end gap-2">
            <span className="text-2xl font-semibold text-gray-900">{value}</span>
            <span className={"text-xs font-medium " + (positive ? 'text-green-600' : 'text-red-600')}>
              {positive ? '↑' : '↓'} {change}
            </span>
          </div>
        </div>
        <div className="h-10 w-10 rounded-lg grid place-items-center bg-indigo-50 text-indigo-600">
          <Icon size={18} />
        </div>
      </div>
    </div>
  );
}

function ActivityItem({ text }) {
  return (
    <div className="py-2 border-b last:border-b-0 text-sm text-gray-700">{text}</div>
  );
}

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Smart Alerts */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700">
          <AlertOctagon size={18} />
          <span className="text-sm font-medium">3 overdue invoices</span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200 text-yellow-700">
          <AlertTriangle size={18} />
          <span className="text-sm font-medium">5 deals stuck in proposal stage</span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-50 border border-orange-200 text-orange-700">
          <AlertCircle size={18} />
          <span className="text-sm font-medium">2 customers at churn risk</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Welcome back, Alex</h1>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <KpiCard title="Revenue (This Month)" value="$45,230" change="12%" positive icon={Wallet} />
        <KpiCard title="Pipeline Value" value="$250,000" change="8%" positive icon={TrendingUp} />
        <KpiCard title="Conversion Rate" value="18%" change="2%" positive={false} icon={Activity} />
        <KpiCard title="Active Customers" value="127" change="5" positive icon={Users} />
      </div>

      {/* Quick Stats + Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <div className="p-4 rounded-xl border bg-white shadow-sm">
            <h3 className="font-semibold mb-3">This Week vs Last Week</h3>
            <div className="h-40 rounded-md bg-gradient-to-r from-indigo-50 via-violet-50 to-fuchsia-50 border" />
            <div className="mt-4 grid grid-cols-3 text-center text-sm text-gray-600">
              <div>5 new leads</div>
              <div>3 deals closed</div>
              <div>12 tasks due</div>
            </div>
          </div>

          <div className="p-4 rounded-xl border bg-white shadow-sm">
            <h3 className="font-semibold mb-3">Customizable Widgets</h3>
            <p className="text-sm text-gray-600">Drag-and-drop to rearrange, add/remove widgets, and configure settings.</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="h-32 rounded-lg border bg-gray-50" />
              <div className="h-32 rounded-lg border bg-gray-50" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-xl border bg-white shadow-sm">
            <h3 className="font-semibold mb-3">Activity Feed</h3>
            <div className="divide-y">
              <ActivityItem text="Sarah closed deal with Acme Corp - $50K" />
              <ActivityItem text="Tom created 5 new leads" />
              <ActivityItem text="Invoice #1023 paid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
