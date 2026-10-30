import LessonView, { type Lesson } from '../components/LessonView';
import { qeqchiLessons } from '../content/qeqchiLeccion';

export default function QeqchiLeccionPage() {
  return (
    <LessonView
      language="Q'eqchi'"
      field="qeqchi"
      color="#2c4a8c"
      intro="Idioma maya de Alta Verapaz y Petén. Vocabulario, frases, gramática y una nota cultural en cada lección."
      lessons={qeqchiLessons as Lesson[]}
    />
  );
}
