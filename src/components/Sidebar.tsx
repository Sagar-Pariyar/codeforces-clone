import React from 'react';

interface SidebarProps {
  title: string;
  children: React.ReactNode;
}

export function Sidebar({ title, children }: SidebarProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}