import React from 'react';
import { BarChart2 } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <BarChart2 className="h-6 w-6 text-blue-600" />
      <span className="font-bold text-2xl">
        <span className="text-gray-900">Code</span>
        <span className="text-blue-600">forces</span>
      </span>
    </div>
  );
}