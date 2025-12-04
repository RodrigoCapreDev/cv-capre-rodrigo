import React from 'react';

export default function ColorTest() {
  return (
    <section className="p-6 rounded-lg border border-muted dark:border-muted bg-background dark:bg-background">
      <h3 className="text-xl font-semibold mb-4">Paleta de colores (test)</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded shadow-sm text-center bg-primary text-white" style={{ backgroundColor: '#19fb98' }}>
          <div className="font-medium">primary</div>
          <div className="text-sm opacity-90">#19fb98</div>
        </div>
        <div className="p-4 rounded shadow-sm text-center bg-secondary text-white" style={{ backgroundColor: '#7eb4fd' }}>
          <div className="font-medium">secondary</div>
          <div className="text-sm opacity-90">#7eb4fd</div>
        </div>
        <div className="p-4 rounded shadow-sm text-center bg-accent text-white" style={{ backgroundColor: '#4445fc' }}>
          <div className="font-medium">accent</div>
          <div className="text-sm opacity-90">#4445fc</div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded text-center bg-background dark:bg-background">
          <div className="text-sm font-medium text-muted">muted</div>
          <div className="text-sm text-muted">#94a3b8</div>
        </div>
        <div className="p-4 rounded text-center bg-background dark:bg-background">
          <div className="text-sm font-medium text-success">success</div>
          <div className="text-sm text-success">#10b981</div>
        </div>
        <div className="p-4 rounded text-center bg-background dark:bg-background">
          <div className="text-sm font-medium text-danger">danger</div>
          <div className="text-sm text-danger">#ef4444</div>
        </div>
      </div>
    </section>
  );
}
