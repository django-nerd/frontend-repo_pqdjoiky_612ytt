import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] overflow-hidden rounded-2xl border bg-white">
      <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />

      {/* Gradient overlay - non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/10 to-transparent" />

      <div className="absolute bottom-6 left-6 max-w-xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">A modern ERP/CRM to run your business</h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600">Colorful, playful, and powerful. Orchestrate contacts, deals, invoices, and projects in one beautiful workspace.</p>
      </div>
    </section>
  );
}
