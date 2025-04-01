'use client';

import React from "react";
import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/Header";
import { qeqchiLessons } from '../content/qeqchiLeccion';
import Link from 'next/link';

// Definir interfaces para los tipos de datos
interface VocabularyItem {
  qeqchi: string;
  spanish: string;
}

interface ExerciseItem {
  question?: string;
  answer?: string;
  verb?: string;
  person?: string;
  role?: string;
  text?: string;
}

interface Exercise {
  type: string;
  instructions: string;
  items: ExerciseItem[];
}

interface LessonContent {
  vocabulary: VocabularyItem[];
  phrases: VocabularyItem[];
  grammar: string;
  culturalNote: string;
  exercises: Exercise[];
}

interface Lesson {
  id: number;
  title: string;
  level: string;
  description: string;
  content: LessonContent;
}

export default function QeqchiLeccionPage() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [activeTab, setActiveTab] = useState<string>('vocabulary');

  const handleLessonSelect = (lesson: Lesson): void => {
    setSelectedLesson(lesson);
    setActiveTab('vocabulary');
    // Scroll to lesson content
    document.getElementById(`lesson-${lesson.id}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderTabContent = () => {
    if (!selectedLesson) return null;

    switch (activeTab) {
      case 'vocabulary':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedLesson.content.vocabulary.map((item: VocabularyItem, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{item.qeqchi}</p>
                <p className="text-gray-600 dark:text-gray-300">{item.spanish}</p>
              </div>
            ))}
          </div>
        );
      case 'phrases':
        return (
          <div className="space-y-4">
            {selectedLesson.content.phrases.map((item: VocabularyItem, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{item.qeqchi}</p>
                <p className="text-gray-600 dark:text-gray-300">{item.spanish}</p>
              </div>
            ))}
          </div>
        );
      case 'grammar':
        return (
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Gramática</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedLesson.content.grammar}</p>
          </div>
        );
      case 'cultural':
        return (
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Nota Cultural</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedLesson.content.culturalNote}</p>
          </div>
        );
      case 'exercises':
        return (
          <div className="space-y-8">
            {selectedLesson.content.exercises.map((exercise: Exercise, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {exercise.type === 'matching' ? 'Ejercicio de Emparejamiento' : 
                   exercise.type === 'fillBlank' ? 'Completar Espacios en Blanco' : 
                   exercise.type === 'translation' ? 'Ejercicio de Traducción' : 'Ejercicio'}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{exercise.instructions}</p>
                
                <div className="space-y-3">
                  {exercise.items.map((item: ExerciseItem, itemIndex: number) => (
                    <div key={itemIndex} className="p-3 bg-gray-50 dark:bg-gray-600 rounded-lg">
                      {item.question && (
                        <p className="font-medium text-gray-800 dark:text-white">{item.question}</p>
                      )}
                      {item.role && (
                        <p className="font-medium text-blue-600 dark:text-blue-400">{item.role}:</p>
                      )}
                      {item.text && (
                        <p className="font-medium text-gray-800 dark:text-white">{item.text}</p>
                      )}
                      {item.answer && (
                        <details className="mt-2">
                          <summary className="text-blue-600 dark:text-blue-400 cursor-pointer">Ver respuesta</summary>
                          <p className="mt-1 pl-4 text-gray-600 dark:text-gray-300">{item.answer}</p>
                        </details>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 z-0 bg-blue-600 opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block p-2 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Lecciones de Q&apos;eqchi&apos;
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explora nuestras lecciones interactivas para aprender Q&apos;eqchi&apos;, uno de los idiomas mayas más importantes de Guatemala con más de 800,000 hablantes, principalmente en Alta Verapaz y Petén.
            </p>
          </div>
        </div>
      </section>

      {/* Lessons Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Selecciona una lección:</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qeqchiLessons.map((lesson) => (
            <div 
              key={lesson.id}
              className={`bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer ${selectedLesson?.id === lesson.id ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => handleLessonSelect(lesson)}
            >
              <div className="h-3 bg-blue-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-400 font-bold text-sm mr-3">
                    {lesson.id}
                  </span>
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                    {lesson.level}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {lesson.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {lesson.description}
                </p>
                <Link href={`#lesson-${lesson.id}`} className="w-full py-2 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition duration-300 text-sm font-medium inline-block text-center">
                  Ver lección
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lesson Content */}
      {selectedLesson && (
        <section id={`lesson-${selectedLesson.id}`} className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-600">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Lección {selectedLesson.id}: {selectedLesson.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {selectedLesson.description}
                </p>
              </div>
              
              {/* Tabs */}
              <div className="border-b border-gray-200 dark:border-gray-600">
                <nav className="flex overflow-x-auto">
                  {['vocabulary', 'phrases', 'grammar', 'cultural', 'exercises'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-4 px-6 font-medium text-sm whitespace-nowrap ${
                        activeTab === tab
                          ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                          : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                      }`}
                    >
                      {tab === 'vocabulary' ? 'Vocabulario' :
                       tab === 'phrases' ? 'Frases Útiles' :
                       tab === 'grammar' ? 'Gramática' :
                       tab === 'cultural' ? 'Nota Cultural' :
                       'Ejercicios'}
                    </button>
                  ))}
                </nav>
              </div>
              
              {/* Tab Content */}
              <div className="p-6">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Audio Pronunciation Guide */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 flex items-center justify-center p-6 bg-blue-50 dark:bg-blue-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Guía de Pronunciación
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                &quot;El Q&apos;eqchi&apos; es un idioma fascinante que conecta a las comunidades de Alta Verapaz y Petén.&quot;
              </p>
              <a href="#" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium">
                Acceder a recursos de audio
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer mayaLanguages={[
        { name: "K'iche'", color: "#e74c3c", speakers: "1,000,000+", region: "Central Guatemala" },
        { name: "Q'eqchi'", color: "#3498db", speakers: "800,000+", region: "Alta Verapaz, Petén" },
        { name: "Kaqchikel", color: "#2ecc71", speakers: "500,000+", region: "Central Highlands" },
        { name: "Mam", color: "#f39c12", speakers: "500,000+", region: "Western Guatemala" },
        { name: "Tz'utujil", color: "#9b59b6", speakers: "100,000+", region: "Lake Atitlán" },
      ]} />
    </div>
  );
}