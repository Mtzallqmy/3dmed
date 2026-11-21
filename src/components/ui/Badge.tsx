import React from 'react';
export const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-200 border border-cyan-400/30">{children}</span>
);
