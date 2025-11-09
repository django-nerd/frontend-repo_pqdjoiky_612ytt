import React from 'react';
import { Bell, Search, ChevronDown, User } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="h-16 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-20">
      <div className="max-w-screen-2xl mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500" />
          <span className="font-semibold text-lg tracking-tight">Flux ERP</span>
        </div>

        {/* Global Search */}
        <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
          <label className="relative w-full">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search contacts, deals, invoices…"
              className="w-full pl-10 pr-4 py-2 rounded-md border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-gray-100 rounded-md" aria-label="Notifications">
            <Bell size={20} />
            <span className="absolute -top-0.5 -right-0.5 inline-flex h-2.5 w-2.5 bg-red-500 rounded-full" />
          </button>
          <button className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 grid place-items-center text-white">
              <User size={16} />
            </div>
            <span className="hidden sm:inline text-sm font-medium">Alex Morgan</span>
            <ChevronDown size={16} className="text-gray-500" />
          </button>
        </div>
      </div>
    </header>
  );
}
