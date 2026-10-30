import LessonView, { type Lesson } from '../components/LessonView';
import { kicheLessons } from '../content/kicheLeccion';

export default function KicheLeccionPage() {
  return (
    <LessonView
      language="K'iche'"
      field="kiche"
      color="#a3362a"
      intro="Idioma maya de Guatemala central. Vocabulario, frases, gramática y una nota cultural en cada lección."
      lessons={kicheLessons as Lesson[]}
    />
  );
}
