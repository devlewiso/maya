import LessonView, { type Lesson } from '../components/LessonView';
import { tzutujilLessons } from '../content/tzutujilLeccion';

export default function TzutujilLeccionPage() {
  return (
    <LessonView
      language="Tz'utujil"
      field="tzutujil"
      color="#6a3f8c"
      intro="Idioma maya del lago de Atitlán. Vocabulario, frases, gramática y una nota cultural en cada lección."
      lessons={tzutujilLessons as Lesson[]}
    />
  );
}
