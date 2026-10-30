'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import Header from './Header';
import Footer from './footer';
import { TejidoBand } from './Tejido';

// Cada archivo de app/content/*Leccion.js guarda la palabra maya bajo la clave del idioma
// (kiche, qeqchi, kaqchikel, mam, tzutujil); por eso los ítems se leen con `field`.
type Item = Record<string, string | undefined>;

interface Exercise {
  type: string;
  instructions?: string;
  items: Item[];
}

export interface Lesson {
  id: number;
  title: string;
  level: string;
  description: string;
  content: {
    vocabulary: Item[];
    phrases: Item[];
    grammar: string;
    culturalNote: string;
    exercises: Exercise[];
  };
}

interface LessonViewProps {
  language: string;
  field: string;
  color: string;
  intro: string;
  lessons: Lesson[];
}

const exerciseTitle: Record<string, string> = {
  matching: 'Une cada palabra',
  fillBlank: 'Completa los espacios',
  translation: 'Traduce',
};

const card = 'bg-white border border-[#e4e2da] rounded-2xl p-6 md:p-8';

export default function LessonView({ language, field, color, intro, lessons }: LessonViewProps) {
  const [selectedId, setSelectedId] = useState(lessons[0]?.id);
  const mainRef = useRef<HTMLElement>(null);
  const lesson = lessons.find((l) => l.id === selectedId) ?? lessons[0];

  function select(id: number) {
    setSelectedId(id);
    mainRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="min-h-screen bg-[#f6f5f1] text-[#14181f]">
      <Header />

      <section className="bg-white border-b border-[#e4e2da]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <nav aria-label="Ruta" className="text-sm text-[#5e6673] mb-6 flex gap-2">
            <Link href="/lecciones" className="hover:text-[#14181f]">Lecciones</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#14181f] font-semibold">{language}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 rounded-full" style={{ background: color }} />
            <span className="font-mono text-[13px] tracking-[0.08em] uppercase text-[#5e6673]">{lessons.length} lecciones</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Aprende {language}</h1>
          <p className="text-lg leading-relaxed text-[#4a5260] max-w-2xl">{intro}</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-10 flex flex-col lg:flex-row gap-8 items-start">
        {/* Índice */}
        <aside aria-label={`Lecciones de ${language}`} className="w-full lg:w-72 lg:shrink-0 bg-white border border-[#e4e2da] rounded-2xl p-4 lg:sticky lg:top-24">
          <ol className="flex flex-col gap-0.5">
            {lessons.map((l, i) => {
              const active = l.id === lesson.id;
              return (
                <li key={l.id}>
                  <button
                    onClick={() => select(l.id)}
                    aria-current={active ? 'true' : undefined}
                    className={`w-full flex gap-3 items-center text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${
                      active ? 'bg-[#e8f1ee] text-[#0a4337] font-bold' : 'text-[#3b4250] hover:bg-[#f6f5f1]'
                    }`}
                  >
                    <span className={`font-mono text-xs ${active ? '' : 'text-[#5e6673]'}`}>{String(i + 1).padStart(2, '0')}</span>
                    {l.title}
                  </button>
                </li>
              );
            })}
          </ol>
        </aside>

        {/* Lección */}
        <main ref={mainRef} className="flex-1 min-w-0 flex flex-col gap-6 scroll-mt-24">
          <section className={card}>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="font-mono text-xs tracking-[0.06em] uppercase px-2.5 py-1 rounded-md bg-[#efede6] text-[#3b4250]">{lesson.level}</span>
              <span className="font-mono text-xs tracking-[0.06em] uppercase px-2.5 py-1 rounded-md bg-[#efede6] text-[#3b4250]">
                Lección {String(lessons.indexOf(lesson) + 1).padStart(2, '0')}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">{lesson.title}</h2>
            <p className="text-[17px] leading-relaxed text-[#4a5260]">{lesson.description}</p>
          </section>

          <section className={card}>
            <h3 className="text-xl font-extrabold mb-5">Vocabulario</h3>
            <dl className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
              {lesson.content.vocabulary.map((item, i) => (
                <div key={i} className="px-4 py-3.5 border border-[#e4e2da] rounded-xl">
                  <dt className="text-lg font-extrabold">{item[field]}</dt>
                  <dd className="text-sm text-[#5e6673] mt-0.5">{item.spanish}</dd>
                </div>
              ))}
            </dl>
          </section>

          {lesson.content.phrases.length > 0 && (
            <section className={card}>
              <h3 className="text-xl font-extrabold mb-2">Frases</h3>
              <dl>
                {lesson.content.phrases.map((item, i) => (
                  <div key={i} className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-4 border-b border-[#efede6] last:border-0">
                    <dt className="text-[17px] font-bold">{item[field]}</dt>
                    <dd className="text-base text-[#4a5260]">{item.spanish}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className={card}>
              <h3 className="text-lg font-extrabold mb-3">Gramática</h3>
              <p className="text-[15px] leading-relaxed text-[#3b4250]">{lesson.content.grammar}</p>
            </section>
            <section className="bg-[#101418] text-white rounded-2xl overflow-hidden">
              <TejidoBand height={10} />
              <div className="p-6 md:p-8">
                <h3 className="text-lg font-extrabold mb-3 text-[#d9a62b]">Nota cultural</h3>
                <p className="text-[15px] leading-relaxed text-[#dce0e6]">{lesson.content.culturalNote}</p>
              </div>
            </section>
          </div>

          {lesson.content.exercises.map((exercise, i) => (
            <section key={i} className={card}>
              <h3 className="text-xl font-extrabold mb-2">Practica: {exerciseTitle[exercise.type] ?? 'Ejercicio'}</h3>
              {exercise.instructions && <p className="text-[15px] text-[#4a5260] mb-4">{exercise.instructions}</p>}
              <ul className="flex flex-col gap-2.5 mt-4">
                {exercise.items.map((item, j) => (
                  <li key={j} className="px-4 py-3.5 border border-[#e4e2da] rounded-xl">
                    <p className="font-semibold">
                      {item.role && <span className="text-[#0e5c4a]">{item.role}: </span>}
                      {item.question ?? item.verb ?? item.person ?? item.text}
                      {item.verb && item.person && <span className="text-[#5e6673] font-normal"> · {item.person}</span>}
                    </p>
                    {item.answer && (
                      <details className="mt-2 group">
                        <summary className="text-sm font-semibold text-[#0e5c4a] cursor-pointer hover:text-[#0a4337]">Ver respuesta</summary>
                        <p className="mt-1.5 text-[15px] text-[#3b4250]">{item.answer}</p>
                      </details>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="bg-white border border-[#e4e2da] rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <h3 className="text-lg font-extrabold mb-1">Guarda tu progreso</h3>
              <p className="text-[15px] text-[#4a5260]">Crea una cuenta gratis para seguir tu ruta y obtener tu constancia.</p>
            </div>
            <Link href="/signup" className="shrink-0 px-6 py-3.5 bg-[#0e5c4a] text-white font-bold rounded-xl hover:bg-[#0a4337] transition-colors text-center">
              Crear cuenta gratis
            </Link>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
