const qeqchiLessons = [
  {
    id: 1,
    title: "Saludos y Presentaciones",
    level: "Principiante",
    description: "Aprende saludos básicos y cómo presentarte en Q'eqchi'.",
    content: {
      vocabulary: [
        { qeqchi: "Sa'sa", spanish: "Buenos días" },
        { qeqchi: "Xik'waq", spanish: "Buenas tardes" },
        { qeqchi: "Xik'aq'a", spanish: "Buenas noches" },
        { qeqchi: "Ch'ool", spanish: "Gracias" },
        { qeqchi: "Jah", spanish: "Sí" },
        { qeqchi: "Moko", spanish: "No" },
        { qeqchi: "In", spanish: "Yo" },
        { qeqchi: "Aat", spanish: "Tú" },
        { qeqchi: "Are'", spanish: "Él/Ella" },
        { qeqchi: "Li wachoch", spanish: "Mi nombre" }
      ],
      phrases: [
        { qeqchi: "Sa'sa. Achike ab'an?", spanish: "Buenos días. ¿Cómo te llamas?" },
        { qeqchi: "Li wachoch en...", spanish: "Mi nombre es..." },
        { qeqchi: "Ch'ool chaach'ool", spanish: "Gracias a ti" },
        { qeqchi: "Achike awan?", spanish: "¿Cómo estás?" },
        { qeqchi: "Utz nawan", spanish: "Estoy bien" }
      ],
      grammar: "En Q'eqchi', los saludos varían según la hora: 'Sa'sa' (mañana), 'Xik'waq' (tarde), 'Xik'aq'a' (noche). Los pronombres personales son 'in' (yo), 'aat' (tú), 'are'' (él/ella).",
      culturalNote: "En la cultura Q'eqchi', el saludo es importante y suele incluir preguntas sobre la familia y el origen. Se usa 'ajaw' (señor) o 'ixaqil' (señora) para mostrar respeto.",
      exercises: [
        {
          type: "matching",
          instructions: "Une cada saludo con su traducción",
          items: [
            { question: "Sa'sa", answer: "Buenos días" },
            { question: "Ch'ool", answer: "Gracias" },
            { question: "Achike awan?", answer: "¿Cómo estás?" },
            { question: "Li wachoch", answer: "Mi nombre" }
          ]
        },
        {
          type: "fillBlank",
          instructions: "Completa las frases",
          items: [
            { question: "_____ en Juan.", answer: "Li wachoch" },
            { question: "_____ chaach'ool.", answer: "Ch'ool" },
            { question: "Achike _____?", answer: "ab'an" }
          ]
        }
      ]
    }
  },
  {
    id: 2,
    title: "Números y Conteo",
    level: "Principiante",
    description: "Aprende los números en Q'eqchi' y cómo contar objetos.",
    content: {
      vocabulary: [
        { qeqchi: "Jun", spanish: "Uno" },
        { qeqchi: "Kaab'", spanish: "Dos" },
        { qeqchi: "Oox", spanish: "Tres" },
        { qeqchi: "Kyaa", spanish: "Cuatro" },
        { qeqchi: "Jo'", spanish: "Cinco" },
        { qeqchi: "Waq", spanish: "Seis" },
        { qeqchi: "Wuqub'", spanish: "Siete" },
        { qeqchi: "Wajxaq", spanish: "Ocho" },
        { qeqchi: "B'elej", spanish: "Nueve" },
        { qeqchi: "Lajun", spanish: "Diez" }
      ],
      phrases: [
        { qeqchi: "Jachaak keb'?", spanish: "¿Cuántos?" },
        { qeqchi: "Jun tz'i'", spanish: "Un perro" },
        { qeqchi: "Kaab' aatin", spanish: "Dos personas" },
        { qeqchi: "Oox ja", spanish: "Tres casas" },
        { qeqchi: "Lajun quetzales", spanish: "Diez quetzales" }
      ],
      grammar: "Los números en Q'eqchi' siguen el sistema vigesimal (base 20). Se colocan antes del sustantivo sin cambiar de género. Ejemplo: 'Kaab' tz'i'' (dos perros), 'Kaab' ixq' (dos mujeres).",
      culturalNote: "El sistema numérico Q'eqchi' proviene del antiguo sistema maya. El número 20 (k'al) se usa en mercados tradicionales para contar cacao o maíz.",
      exercises: [
        {
          type: "matching",
          instructions: "Une cada número",
          items: [
            { question: "Jun", answer: "Uno" },
            { question: "Oox", answer: "Tres" },
            { question: "Jo'", answer: "Cinco" },
            { question: "Lajun", answer: "Diez" }
          ]
        },
        {
          type: "translation",
          instructions: "Traduce al Q'eqchi'",
          items: [
            { question: "Cuatro casas", answer: "Kyaa ja" },
            { question: "Siete perros", answer: "Wuqub' tz'i'" },
            { question: "¿Cuántas personas?", answer: "Jachaak keb' aatin?" }
          ]
        }
      ]
    }
  },
  {
    id: 3,
    title: "Familia y Relaciones",
    level: "Principiante",
    description: "Aprende vocabulario sobre familia y relaciones en Q'eqchi'.",
    content: {
      vocabulary: [
        { qeqchi: "Yuc", spanish: "Padre" },
        { qeqchi: "Na'", spanish: "Madre" },
        { qeqchi: "Suku'n", spanish: "Hermano (de hombre)" },
        { qeqchi: "Kik'el", spanish: "Hermana (de mujer)" },
        { qeqchi: "Ala", spanish: "Hijo/Hija" },
        { qeqchi: "Mam", spanish: "Abuelo" },
        { qeqchi: "Xmam", spanish: "Abuela" },
        { qeqchi: "Ajaw", spanish: "Señor (respeto)" },
        { qeqchi: "Ixaqil", spanish: "Señora (respeto)" },
        { qeqchi: "Kojol", spanish: "Esposo" }
      ],
      phrases: [
        { qeqchi: "Li yuc", spanish: "Mi padre" },
        { qeqchi: "La na'", spanish: "Tu madre" },
        { qeqchi: "Jachaak keb' awachalal?", spanish: "¿Cuántos hermanos tienes?" },
        { qeqchi: "K'o kaab' usuku'n", spanish: "Tengo dos hermanos" },
        { qeqchi: "Are' li na'", spanish: "Ella es mi madre" }
      ],
      grammar: "Los términos de parentesco usan prefijos posesivos: 'li' (mi), 'la' (tu), 'ri' (su). Ejemplo: 'li yuc' (mi padre), 'la na'' (tu madre).",
      culturalNote: "En Q'eqchi', la familia extendida es fundamental. Los ancianos son altamente respetados y se les llama 'ajaw' o 'ixaqil'.",
      exercises: [
        {
          type: "matching",
          instructions: "Une cada término familiar",
          items: [
            { question: "Yuc", answer: "Padre" },
            { question: "Mam", answer: "Abuelo" },
            { question: "Ala", answer: "Hijo/Hija" },
            { question: "Suku'n", answer: "Hermano (de hombre)" }
          ]
        },
        {
          type: "fillBlank",
          instructions: "Completa las frases",
          items: [
            { question: "_____ en María.", answer: "Li na'" },
            { question: "K'o oox _____.", answer: "usuku'n" },
            { question: "Are' _____.", answer: "li yuc" }
          ]
        }
      ]
    }
  },
  {
    id: 4,
    title: "Comida y Agricultura",
    level: "Principiante-Intermedio",
    description: "Vocabulario sobre alimentos y prácticas agrícolas tradicionales.",
    content: {
      vocabulary: [
        { qeqchi: "Wa", spanish: "Tortilla" },
        { qeqchi: "Ixim", spanish: "Maíz" },
        { qeqchi: "K'ix", spanish: "Chile" },
        { qeqchi: "Tz'um", spanish: "Caldo" },
        { qeqchi: "Q'an", spanish: "Plátano" },
        { qeqchi: "Ch'aj", spanish: "Sal" },
        { qeqchi: "Aq'", spanish: "Pepita" },
        { qeqchi: "Txb'al", spanish: "Comal" },
        { qeqchi: "K'u'x", spanish: "Milpa" },
        { qeqchi: "Ch'inaj", spanish: "Cacao" }
      ],
      phrases: [
        { qeqchi: "Ninb'e wa", spanish: "Quiero tortillas" },
        { qeqchi: "Utz nk'ul ti ixim", spanish: "Me gusta el maíz" },
        { qeqchi: "Achike awak?", spanish: "¿Qué comes?" },
        { qeqchi: "Ninb'an tz'um", spanish: "Hago caldo" },
        { qeqchi: "K'o k'ix chupan?", spanish: "¿Tiene chile?" }
      ],
      grammar: "Los verbos relacionados con comida usan prefijos: 'nin-' (yo), 'a-' (tú), 'y-' (él/ella). Ejemplo: 'ninb'e wa' (quiero tortillas), 'awak' (comes).",
      culturalNote: "El maíz ('ixim') es sagrado en la cultura Q'eqchi'. El cacao ('ch'inaj') se usa en ceremonias y como moneda tradicional.",
      exercises: [
        {
          type: "matching",
          instructions: "Une cada alimento",
          items: [
            { question: "Wa", answer: "Tortilla" },
            { question: "Ixim", answer: "Maíz" },
            { question: "Q'an", answer: "Plátano" },
            { question: "Txb'al", answer: "Comal" }
          ]
        },
        {
          type: "translation",
          instructions: "Traduce al español",
          items: [
            { question: "Utz nk'ul ti tz'um", answer: "Me gusta el caldo" },
            { question: "Ninb'an wa", answer: "Hago tortillas" }
          ]
        }
      ]
    }
  },
  {
    id: 5,
    title: "Verbos Cotidianos",
    level: "Intermedio",
    description: "Aprende verbos para acciones diarias en Q'eqchi'.",
    content: {
      vocabulary: [
        { qeqchi: "B'in", spanish: "Ir" },
        { qeqchi: "Tij", spanish: "Comer" },
        { qeqchi: "War", spanish: "Dormir" },
        { qeqchi: "Tz'ib'an", spanish: "Escribir" },
        { qeqchi: "Sik'in", spanish: "Leer" },
        { qeqchi: "Ch'ol", spanish: "Trabajar" },
        { qeqchi: "K'ul", spanish: "Escuchar" },
        { qeqchi: "Tzukun", spanish: "Caminar" },
        { qeqchi: "Loq'", spanish: "Comprar" },
        { qeqchi: "Q'ax", spanish: "Vender" }
      ],
      phrases: [
        { qeqchi: "Ninb'in pa tinamit", spanish: "Voy al pueblo" },
        { qeqchi: "At tij?", spanish: "¿Estás comiendo?" },
        { qeqchi: "Are' war", spanish: "Él/Ella está durmiendo" },
        { qeqchi: "Yinch'ol pa k'ayb'al", spanish: "Trabajo en el mercado" }
      ],
      grammar: "Los verbos se conjugan con prefijos: 'nin-' (yo), 'at-' (tú), 'y-' (él/ella). El tiempo presente no requiere sufijos adicionales.",
      culturalNote: "Muchos verbos reflejan actividades agrícolas, como 'k'ul' (escuchar) que también se usa para 'atender los cultivos'.",
      exercises: [
        {
          type: "conjugation",
          instructions: "Conjuga los verbos",
          items: [
            { verb: "b'in", pronoun: "yo", answer: "Ninb'in" },
            { verb: "tij", pronoun: "tú", answer: "At tij" }
          ]
        }
      ]
    }
  },
  {
    id: 6,
    title: "Partes del Cuerpo",
    level: "Principiante",
    description: "Vocabulario sobre el cuerpo humano y salud básica.",
    content: {
      vocabulary: [
        { qeqchi: "Wachoch", spanish: "Cabeza" },
        { qeqchi: "Q'ab'", spanish: "Mano" },
        { qeqchi: "Aqan", spanish: "Pie" },
        { qeqchi: "Ti'", spanish: "Boca" },
        { qeqchi: "Xikin", spanish: "Oído" },
        { qeqchi: "K'ux", spanish: "Estómago" },
        { qeqchi: "Rax", spanish: "Sangre" },
        { qeqchi: "K'ax", spanish: "Dolor" },
        { qeqchi: "Aq'omanel", spanish: "Médico" },
        { qeqchi: "Tz'ijb'al", spanish: "Remedio" }
      ],
      phrases: [
        { qeqchi: "K'o k'ax pa nuwachoch", spanish: "Me duele la cabeza" },
        { qeqchi: "At k'o k'ax?", spanish: "¿Te duele?" },
        { qeqchi: "Ninra naq aq'omanel", spanish: "Necesito un médico" }
      ],
      grammar: "Las partes del cuerpo usan prefijos posesivos: 'nu-' (mi), 'a-' (tu). Para expresar dolor: 'K'o k'ax pa [parte del cuerpo]'.",
      culturalNote: "En la medicina tradicional Q'eqchi', los dolores se tratan con hierbas y ceremonias espirituales.",
      exercises: [
        {
          type: "fillBlank",
          instructions: "Completa las frases",
          items: [
            { question: "K'o k'ax pa _____ (mi estómago)", answer: "nuk'ux" },
            { question: "_____ q'ab' (tu mano)", answer: "A" }
          ]
        }
      ]
    }
  },
  {
    id: 7,
    title: "Naturaleza y Medio Ambiente",
    level: "Intermedio",
    description: "Vocabulario sobre la naturaleza y el entorno en Q'eqchi'.",
    content: {
      vocabulary: [
        { qeqchi: "Che'", spanish: "Árbol" },
        { qeqchi: "Ha'", spanish: "Agua" },
        { qeqchi: "Juyu'", spanish: "Montaña" },
        { qeqchi: "K'iche'", spanish: "Bosque" },
        { qeqchi: "Q'ij", spanish: "Sol" },
        { qeqchi: "Ik'", spanish: "Luna" },
        { qeqchi: "Ch'aqap", spanish: "Lluvia" },
        { qeqchi: "Saq'ij", spanish: "Día" },
        { qeqchi: "Aq'a'", spanish: "Noche" },
        { qeqchi: "Tzuultaq'a", spanish: "Espíritu de la montaña" }
      ],
      phrases: [
        { qeqchi: "Yalan nim li juyu'", spanish: "La montaña es muy grande" },
        { qeqchi: "K'o ch'aqap", spanish: "Está lloviendo" },
        { qeqchi: "Utz ti ha'", spanish: "El agua es buena" }
      ],
      grammar: "Para describir fenómenos naturales se usa 'K'o' + sustantivo. Los elementos naturales son considerados seres vivos.",
      culturalNote: "El 'Tzuultaq'a' es una deidad importante que protege los recursos naturales en la cosmovisión Q'eqchi'.",
      exercises: [
        {
          type: "translation",
          instructions: "Traduce al español",
          items: [
            { question: "K'o nim che' pa k'iche'", answer: "Hay árboles grandes en el bosque" }
          ]
        }
      ]
    }
  },
  {
    id: 8,
    title: "Animales y Seres Vivos",
    level: "Principiante",
    description: "Nombres de animales comunes en Q'eqchi'.",
    content: {
      vocabulary: [
        { qeqchi: "Tz'i'", spanish: "Perro" },
        { qeqchi: "Mis", spanish: "Gato" },
        { qeqchi: "T'ur", spanish: "Pájaro" },
        { qeqchi: "Kar", spanish: "Pez" },
        { qeqchi: "Kiex", spanish: "Caballo" },
        { qeqchi: "Aatin", spanish: "Persona" },
        { qeqchi: "Chikop", spanish: "Animal" },
        { qeqchi: "K'uk'", spanish: "Quetzal" },
        { qeqchi: "Tzimin", spanish: "Tapir" },
        { qeqchi: "Xul", spanish: "Culebra" }
      ],
      phrases: [
        { qeqchi: "In k'o jun tz'i'", spanish: "Tengo un perro" },
        { qeqchi: "Are' nim t'ur", spanish: "Es un pájaro grande" },
        { qeqchi: "La ütz awach chikop?", spanish: "¿Te gustan los animales?" }
      ],
      grammar: "Para indicar posesión de animales: 'K'o' + número + animal. Los animales tienen clasificadores según sus características.",
      culturalNote: "El quetzal ('k'uk') es sagrado y representa la libertad en la cultura maya.",
      exercises: [
        {
          type: "matching",
          instructions: "Une cada animal",
          items: [
            { question: "Tz'i'", answer: "Perro" },
            { question: "K'uk'", answer: "Quetzal" }
          ]
        }
      ]
    }
  },
  {
    id: 9,
    title: "En el Mercado",
    level: "Intermedio",
    description: "Frases útiles para comprar y vender en Q'eqchi'.",
    content: {
      vocabulary: [
        { qeqchi: "K'ayb'al", spanish: "Mercado" },
        { qeqchi: "Tz'um", spanish: "Dinero" },
        { qeqchi: "Jas chik?", spanish: "¿Cuánto cuesta?" },
        { qeqchi: "Loq'", spanish: "Comprar" },
        { qeqchi: "Q'ax", spanish: "Vender" },
        { qeqchi: "Tz'aqat", spanish: "Barato" },
        { qeqchi: "Nim", spanish: "Caro" },
        { qeqchi: "Quetzal", spanish: "Quetzal (moneda)" },
        { qeqchi: "Sik'", spanish: "Peso" },
        { qeqchi: "Tz'ib'anik", spanish: "Contar (dinero)" }
      ],
      phrases: [
        { qeqchi: "Ninloq' jun wa", spanish: "Quiero comprar una tortilla" },
        { qeqchi: "Jas chik jun ixim?", spanish: "¿Cuánto cuesta un maíz?" },
        { qeqchi: "Matyox, tz'aqat", spanish: "Gracias, está barato" },
        { qeqchi: "K'o oxib' quetzal", spanish: "Son tres quetzales" }
      ],
      grammar: "Para negociar precios: 'Jas chik?' + objeto. Los números siempre preceden a la moneda (quetzal o sik').",
      culturalNote: "En los mercados Q'eqchi' tradicionales se sigue usando el trueque, especialmente con productos como maíz o cacao.",
      exercises: [
        {
          type: "dialogue",
          instructions: "Practica este diálogo",
          items: [
            { role: "Comprador", text: "Jas chik jun q'an?" },
            { role: "Vendedor", text: "Jo' quetzal" },
            { role: "Comprador", text: "Tz'aqat. Ninloq' kab'." }
          ]
        }
      ]
    }
  }
];

export { qeqchiLessons };