import LessonView, { type Lesson } from '../components/LessonView';
import { mamLessons } from '../content/mamLeccion';

export default function MamLeccionPage() {
  return (
    <LessonView
      language="Mam"
      field="mam"
      color="#b07a12"
      intro="Idioma maya del occidente de Guatemala. Vocabulario, frases, gramática y una nota cultural en cada lección."
      lessons={mamLessons as Lesson[]}
    />
  );
}
