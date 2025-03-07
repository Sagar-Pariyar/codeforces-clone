import React from 'react';

interface ContestEntry {
  id: string;
  time: string;
  who: string;
  problem: string;
  lang: string;
  verdict: string;
  timeMs: string;
  memory: string;
}

export function ContestStatus() {
  const entries: ContestEntry[] = [
    {
      id: '308967807',
      time: '00:05:59',
      who: '244minq',
      problem: 'B - Fire and Homework',
      lang: 'C++23 (GCC 14.64)',
      verdict: '+0.5points',
      timeMs: '79 ms',
      memory: '100 KB'
    },
    // Add more entries as needed
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Contest Status</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">When</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Who</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Problem</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lang</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Verdict</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Memory</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {entries.map((entry) => (
              <tr key={entry.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.time}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{entry.who}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{entry.problem}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.lang}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">{entry.verdict}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.timeMs}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.memory}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}