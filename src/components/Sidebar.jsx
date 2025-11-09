import React from 'react';
import { LayoutDashboard, Users, Handshake, Building2, FileText, Boxes, ClipboardList, BarChart3, Workflow, Link2, Settings } from 'lucide-react';

const items = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: Users, label: 'Contacts' },
  { icon: Handshake, label: 'Deals' },
  { icon: Building2, label: 'Customers' },
  { icon: FileText, label: 'Invoices' },
  { icon: Boxes, label: 'Products' },
  { icon: ClipboardList, label: 'Projects' },
  { icon: BarChart3, label: 'Reports' },
  { icon: Workflow, label: 'Workflows' },
  { icon: Link2, label: 'Integrations' },
  { icon: Users, label: 'Team' },
  { icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 shrink-0 border-r bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 hidden lg:flex lg:flex-col">
      <div className="px-3 py-3">
        <input
          className="w-full px-3 py-2 rounded-md border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Search…"
        />
      </div>
      <nav className="flex-1 overflow-y-auto py-2">
        <ul className="space-y-1 px-2">
          {items.map(({ icon: Icon, label }) => (
            <li key={label}>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-left hover:bg-indigo-50/80">
                <Icon size={18} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-800">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-3 text-xs text-gray-500">v1.0.0</div>
    </aside>
  );
}
