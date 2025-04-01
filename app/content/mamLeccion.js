const mamLessons = [
  {
    id: 1,
    title: "Saludos y Presentaciones",
    level: "Principiante",
    description: "Aprende saludos básicos y cómo presentarte en Mam.",
    content: {
      vocabulary: [
        { mam: "Saq'ool", spanish: "Buenos días" },
        { mam: "Xiim q'ii", spanish: "Buenas tardes" },
        { mam: "Xiim aq'a", spanish: "Buenas noches" },
        { mam: "Chjonte", spanish: "Gracias" },
        { mam: "A'a", spanish: "Sí" },
        { mam: "Ma", spanish: "No" },
        { mam: "Qa", spanish: "Yo" },
        { mam: "A", spanish: "Tú" },
        { mam: "E", spanish: "Él/Ella" },
        { mam: "Tb'anil", spanish: "Mi nombre" }
      ],
      phrases: [
        { mam: "Saq'ool. Ach qab'anil?", spanish: "Buenos días. ¿Cómo te llamas?" },
        { mam: "Tb'anil ja...", spanish: "Mi nombre es..." },
        { mam: "Chjonte a", spanish: "Gracias a ti" },
        { mam: "Ach utz awach?", spanish: "¿Cómo estás?" },
        { mam: "Utz nk'ul", spanish: "Estoy bien" }
      ],
      grammar: "En Mam, los saludos cambian según la hora: 'Saq'ool' (mañana), 'Xiim q'ii' (tarde), 'Xiim aq'a' (noche). Los pronombres son cortos: 'qa' (yo), 'a' (tú), 'e' (él/ella).",
      culturalNote: "En la cultura Mam, el saludo incluye preguntar por la familia y el origen. Se usa 'txin' (señor) o 'xna' (señora) para mostrar respeto.",
      exercises: [
        {
          type: "matching",
          instructions: "Une cada saludo con su traducción",
          items: [
            { question: "Saq'ool", answer: "Buenos días" },
            { question: "Chjonte", answer: "Gracias" },
            { question: "Ach utz awach?", answer: "¿Cómo estás?" },
            { question: "Tb'anil", answer: "Mi nombre" }
          ]
        },
        {
          type: "fillBlank",
          instructions: "Completa las frases",
          items: [
            { question: "_____ ja Pedro.", answer: "Tb'anil" },
            { question: "_____ a.", answer: "Chjonte" },
            { question: "Ach _____?", answer: "qab'anil" }
          ]
        }
      ]
    }
  },
  {
    id: 2,
    title: "Números y Conteo",
    level: "Principiante",
    description: "Aprende los números en Mam y cómo contar objetos.",
    content: {
      vocabulary: [
        { mam: "Jun", spanish: "Uno" },
        { mam: "Kab'", spanish: "Dos" },
        { mam: "Oox", spanish: "Tres" },
        { mam: "Kyaaj", spanish: "Cuatro" },
        { mam: "Joo'", spanish: "Cinco" },
        { mam: "Qaq", spanish: "Seis" },
        { mam: "Juq", spanish: "Siete" },
        { mam: "Wajxaq", spanish: "Ocho" },
        { mam: "B'elej", spanish: "Nueve" },
        { mam: "Laj", spanish: "Diez" }
      ],
      phrases: [
        { mam: "Jachin ky'a?", spanish: "¿Cuántos?" },
        { mam: "Jun tz'i'", spanish: "Un perro" },
        { mam: "Kab' aaq", spanish: "Dos gallinas" },
        { mam: "Oox ja", spanish: "Tres casas" },
        { mam: "Laj q'ii", spanish: "Diez días" }
      ],
      grammar: "Los números en Mam usan el sistema vigesimal (base 20). Se colocan antes del sustantivo y no cambian en género. Ejemplo: 'Kab' tz'i'' (dos perros), 'Kab' xten' (dos mujeres).",
      culturalNote: "El sistema numérico Mam proviene del antiguo sistema maya. El número 20 (k'al) se usa en mercados tradicionales para contar frutas o verduras.",
      exercises: [
        {
          type: "matching",
          instructions: "Une cada número",
          items: [
            { question: "Jun", answer: "Uno" },
            { question: "Oox", answer: "Tres" },
            { question: "Joo'", answer: "Cinco" },
            { question: "Laj", answer: "Diez" }
          ]
        },
        {
          type: "translation",
          instructions: "Traduce al Mam",
          items: [
            { question: "Cuatro casas", answer: "Kyaaj ja" },
            { question: "Siete perros", answer: "Juq tz'i'" },
            { question: "¿Cuántos días?", answer: "Jachin ky'a q'ii?" }
          ]
        }
      ]
    }
  },
  {
    id: 3,
    title: "Familia y Relaciones",
    level: "Principiante",
    description: "Aprende vocabulario sobre familia y relaciones en Mam.",
    content: {
      vocabulary: [
        { mam: "Mej", spanish: "Padre" },
        { mam: "Xna'", spanish: "Madre" },
        { mam: "Sna'", spanish: "Hermano (de hombre)" },
        { mam: "B'ix", spanish: "Hermana (de mujer)" },
        { mam: "Ala", spanish: "Hijo/Hija" },
        { mam: "Mam", spanish: "Abuelo" },
        { mam: "Tx'utx", spanish: "Abuela" },
        { mam: "Txin", spanish: "Señor (respeto)" },
        { mam: "Xna", spanish: "Señora (respeto)" },
        { mam: "Kojol", spanish: "Esposo" }
      ],
      phrases: [
        { mam: "Qmej", spanish: "Mi padre" },
        { mam: "Axna'", spanish: "Tu madre" },
        { mam: "Jachin ky'a awachalal?", spanish: "¿Cuántos hermanos tienes?" },
        { mam: "K'o kab' qsna'", spanish: "Tengo dos hermanos" },
        { mam: "E qxna'", spanish: "Ella es mi madre" }
      ],
      grammar: "Los términos de parentesco usan prefijos posesivos: 'q-' (mi), 'a-' (tu), 'y-' (su). Ejemplo: 'qmej' (mi padre), 'axna'' (tu madre).",
      culturalNote: "En Mam, la familia extendida es fundamental. Se usan términos como 'txin' (señor) o 'xna' (señora) para mostrar respeto a ancianos.",
      exercises: [
        {
          type: "matching",
          instructions: "Une cada término familiar",
          items: [
            { question: "Mej", answer: "Padre" },
            { question: "Mam", answer: "Abuelo" },
            { question: "Ala", answer: "Hijo/Hija" },
            { question: "Sna'", answer: "Hermano (de hombre)" }
          ]
        },
        {
          type: "fillBlank",
          instructions: "Completa las frases",
          items: [
            { question: "_____ ja María.", answer: "Qxna'" },
            { question: "K'o oox _____.", answer: "qsna'" },
            { question: "E _____.", answer: "qmej" }
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
        { mam: "Wa", spanish: "Tortilla" },
        { mam: "Aq", spanish: "Frijol" },
        { mam: "Ixim", spanish: "Maíz" },
        { mam: "Tyaq", spanish: "Chile" },
        { mam: "Q'an", spanish: "Plátano" },
        { mam: "Tz'um", spanish: "Caldo" },
        { mam: "Ch'aj", spanish: "Sal" },
        { mam: "Aq'", spanish: "Pepita" },
        { mam: "Txb'al", spanish: "Comal" },
        { mam: "K'u'x", spanish: "Milpa" }
      ],
      phrases: [
        { mam: "Ninb'e wa", spanish: "Quiero tortillas" },
        { mam: "Utz nk'ul ti aq", spanish: "Me gustan los frijoles" },
        { mam: "Ach ky'a xjal?", spanish: "¿Qué vas a comer?" },
        { mam: "Ninb'an ixim", spanish: "Hago tortillas de maíz" },
        { mam: "K'o tyaq chupan?", spanish: "¿Tiene chile?" }
      ],
      grammar: "Los verbos relacionados con comida usan prefijos: 'nin-' (yo), 'x-' (tú), 't-' (él/ella). Ejemplo: 'ninb'e wa' (quiero tortillas), 'xjal' (comes).",
      culturalNote: "El maíz ('ixim') es sagrado en la cultura Mam. La milpa ('k'u'x') es un sistema agrícola tradicional que combina maíz, frijol y calabaza.",
      exercises: [
        {
          type: "matching",
          instructions: "Une cada alimento",
          items: [
            { question: "Wa", answer: "Tortilla" },
            { question: "Aq", answer: "Frijol" },
            { question: "Q'an", answer: "Plátano" },
            { question: "Txb'al", answer: "Comal" }
          ]
        },
        {
          type: "translation",
          instructions: "Traduce al español",
          items: [
            { question: "Utz nk'ul ti ixim", answer: "Me gusta el maíz" },
            { question: "Ninb'an tz'um", answer: "Hago caldo" }
          ]
        }
      ]
    }
  },
  {
    id: 5,
    title: "Verbos Cotidianos",
    level: "Intermedio",
    description: "Aprende verbos para acciones diarias en Mam.",
    content: {
      vocabulary: [
        { mam: "B'e", spanish: "Ir" },
        { mam: "Tij", spanish: "Comer" },
        { mam: "Ok", spanish: "Entrar" },
        { mam: "El", spanish: "Salir" },
        { mam: "K'ul", spanish: "Escuchar" },
        { mam: "Tz'ib'an", spanish: "Escribir" },
        { mam: "Aj", spanish: "Decir" },
        { mam: "Loq'", spanish: "Comprar" },
        { mam: "Q'ax", spanish: "Vender" },
        { mam: "War", spanish: "Dormir" }
      ],
      phrases: [
        { mam: "Ninb'e pa tinamit", spanish: "Voy al pueblo" },
        { mam: "Xtij?", spanish: "¿Vas a comer?" },
        { mam: "E war", spanish: "Él/Ella está durmiendo" }
      ],
      grammar: "Los verbos usan prefijos: 'nin-' (yo), 'x-' (tú), 't-' (él/ella). El tiempo presente no requiere sufijos adicionales.",
      culturalNote: "Muchos verbos reflejan actividades agrícolas, como 'k'ul' (escuchar) que también se usa para 'atender los cultivos'.",
      exercises: [
        {
          type: "conjugation",
          instructions: "Conjuga los verbos",
          items: [
            { verb: "b'e", pronoun: "yo", answer: "Ninb'e" },
            { verb: "tij", pronoun: "tú", answer: "Xtij" }
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
        { mam: "Tz'um", spanish: "Cabeza" },
        { mam: "Q'ab'", spanish: "Mano" },
        { mam: "Xaq", spanish: "Pie" },
        { mam: "Ti'", spanish: "Boca" },
        { mam: "Xikin", spanish: "Oído" },
        { mam: "K'ux", spanish: "Corazón/Estómago" },
        { mam: "Tz'uj", spanish: "Sangre" },
        { mam: "K'ax", spanish: "Dolor" },
        { mam: "Tz'unun", spanish: "Médico" },
        { mam: "Tz'ijb'al", spanish: "Remedio" }
      ],
      phrases: [
        { mam: "K'o k'ax pa nutz'um", spanish: "Me duele la cabeza" },
        { mam: "A k'o k'ax?", spanish: "¿Te duele?" },
        { mam: "Ninra naq tz'unun", spanish: "Necesito un médico" }
      ],
      grammar: "Las partes del cuerpo usan prefijos posesivos: 'nu-' (mi), 'a-' (tu). Para expresar dolor: 'K'o k'ax pa [parte del cuerpo]'.",
      culturalNote: "En la medicina tradicional Mam, los dolores se tratan con hierbas y ceremonias espirituales.",
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
    description: "Vocabulario sobre la naturaleza y el entorno en Mam.",
    content: {
      vocabulary: [
        { mam: "Che'", spanish: "Árbol" },
        { mam: "Ja'", spanish: "Agua" },
        { mam: "Juyu'", spanish: "Montaña" },
        { mam: "K'iche'", spanish: "Bosque" },
        { mam: "Q'ii", spanish: "Sol" },
        { mam: "Ik'", spanish: "Luna" },
        { mam: "Ch'aap", spanish: "Lluvia" },
        { mam: "Saq'ii", spanish: "Día" },
        { mam: "Aq'a", spanish: "Noche" },
        { mam: "Tzuultaq'a", spanish: "Espíritu de la montaña" }
      ],
      phrases: [
        { mam: "Yalan nim li juyu'", spanish: "La montaña es muy grande" },
        { mam: "K'o ch'aap", spanish: "Está lloviendo" },
        { mam: "Utz ti ja'", spanish: "El agua es buena" }
      ],
      grammar: "Para describir fenómenos naturales se usa 'K'o' + sustantivo. Los elementos naturales son considerados seres vivos.",
      culturalNote: "El 'Tzuultaq'a' es una deidad importante que protege los recursos naturales en la cosmovisión Mam.",
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
    description: "Nombres de animales comunes en Mam.",
    content: {
      vocabulary: [
        { mam: "Tz'i'", spanish: "Perro" },
        { mam: "Mis", spanish: "Gato" },
        { mam: "T'ut", spanish: "Pájaro" },
        { mam: "Kar", spanish: "Pez" },
        { mam: "Kiex", spanish: "Caballo" },
        { mam: "Aatin", spanish: "Persona" },
        { mam: "Chikop", spanish: "Animal" },
        { mam: "K'uk'", spanish: "Quetzal" },
        { mam: "Tzimin", spanish: "Tapir" },
        { mam: "Xul", spanish: "Culebra" }
      ],
      phrases: [
        { mam: "Qa k'o jun tz'i'", spanish: "Tengo un perro" },
        { mam: "E nim t'ut", spanish: "Es un pájaro grande" },
        { mam: "A utz awach chikop?", spanish: "¿Te gustan los animales?" }
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
    description: "Frases útiles para comprar y vender en Mam.",
    content: {
      vocabulary: [
        { mam: "K'ayb'al", spanish: "Mercado" },
        { mam: "Tz'um", spanish: "Dinero" },
        { mam: "Jas ky'a?", spanish: "¿Cuánto cuesta?" },
        { mam: "Loq'", spanish: "Comprar" },
        { mam: "Q'ax", spanish: "Vender" },
        { mam: "Tz'aqat", spanish: "Barato" },
        { mam: "Nim", spanish: "Caro" },
        { mam: "Quetzal", spanish: "Quetzal (moneda)" },
        { mam: "Sik'", spanish: "Peso" },
        { mam: "Tz'ib'anik", spanish: "Contar (dinero)" }
      ],
      phrases: [
        { mam: "Ninloq' jun wa", spanish: "Quiero comprar una tortilla" },
        { mam: "Jas ky'a jun ixim?", spanish: "¿Cuánto cuesta un maíz?" },
        { mam: "Chjonte, tz'aqat", spanish: "Gracias, está barato" },
        { mam: "K'o oxib' quetzal", spanish: "Son tres quetzales" }
      ],
      grammar: "Para negociar precios: 'Jas ky'a?' + objeto. Los números siempre preceden a la moneda (quetzal o sik').",
      culturalNote: "En los mercados Mam tradicionales se sigue usando el trueque, especialmente con productos como maíz o frijol.",
      exercises: [
        {
          type: "dialogue",
          instructions: "Practica este diálogo",
          items: [
            { role: "Comprador", text: "Jas ky'a jun q'an?" },
            { role: "Vendedor", text: "Joo' quetzal" },
            { role: "Comprador", text: "Tz'aqat. Ninloq' kab'." }
          ]
        }
      ]
    }
  }
];

export { mamLessons };