import LessonView, { type Lesson } from '../components/LessonView';
import { kaqchikelLessons } from '../content/kaqchikelLeccion';

export default function KaqchikelLeccionPage() {
  return (
    <LessonView
      language="Kaqchikel"
      field="kaqchikel"
      color="#1e7a55"
      intro="Idioma maya del altiplano central. Vocabulario, frases, gramática y una nota cultural en cada lección."
      lessons={kaqchikelLessons as Lesson[]}
    />
  );
}
