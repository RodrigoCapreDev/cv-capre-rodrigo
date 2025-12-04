import React from 'react';

const records = [
  {
    title: 'Ingeniería en Sistemas de Información',
    institution: 'UTN FRLP',
    period: '2021 — Presente',
    bullets: [
      '4º año en curso, orientación desarrollo de software',
      'Proyectos: aplicaciones web con React y Django',
      'Bases de datos relacionales (SQL) y modelado'
    ]
  },
  {
    title: 'Técnico Profesional en Electrónica',
    institution: 'EST Florentino Ameghino',
    period: '2016 — 2020',
    bullets: [
      'Fundamentos de electrónica analógica y digital',
      'Microcontroladores y programación embebida',
      'Trabajo práctico en laboratorio y proyectos'
    ]
  }
];

export default function Education() {
  return (
    // compensar header sticky para que la sección no quede oculta
    <section id="education" className="mt-8 py-10 pt-16 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-white text-sm font-medium">
            Educación
          </span>
          <h2 className="text-2xl font-bold text-text dark:text-white">Formación académica</h2>
        </div>

        <div className="space-y-4">
          {records.map((r, idx) => (
            <article
              key={idx}
              className="bg-background dark:bg-background border border-muted dark:border-muted rounded-lg p-5 shadow-sm grid sm:grid-cols-6 gap-4 items-start"
            >
              <div className="sm:col-span-1 flex flex-col items-start">
                <div className="text-sm text-muted dark:text-gray-400">{r.period}</div>
                <div className="mt-3 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                  {String(idx + 1)}
                </div>
              </div>

              <div className="sm:col-span-5">
                <h3 className="text-lg font-semibold text-text dark:text-white">{r.title}</h3>
                <div className="text-sm text-muted dark:text-muted mb-3">{r.institution}</div>
                <ul className="list-disc list-inside space-y-1 text-text dark:text-muted">
                  {r.bullets.map((b, i) => (
                    <li key={i} className="text-sm">{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a
            href="/CV-Rodrigo-Capre.pdf"
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md text-sm font-medium shadow-sm hover:opacity-90"
          >
            Descargar CV
          </a>
          <a href="#projects" className="text-sm text-text dark:text-white underline-offset-2 hover:underline">
            Ver proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
