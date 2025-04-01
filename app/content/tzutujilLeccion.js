const tzutujilLessons = [
    {
      id: 1,
      title: "Saludos básicos",
      level: "Principiante",
      description: "Aprende a saludar y presentarte en Tz'utujil.",
      content: {
        vocabulary: [
          { tzutujil: "Saqarik", spanish: "Buenos días" },
          { tzutujil: "Xeruwaq", spanish: "Buenas tardes" },
          { tzutujil: "Xeruqa", spanish: "Buenas noches" },
          { tzutujil: "Matyox", spanish: "Gracias" },
          { tzutujil: "Ja'", spanish: "Sí" },
          { tzutujil: "Mani", spanish: "No" },
          { tzutujil: "In", spanish: "Yo" },
          { tzutujil: "At", spanish: "Tú" },
          { tzutujil: "Are'", spanish: "Él/Ella" }
        ],
        phrases: [
          { tzutujil: "Saqarik. Achike ab'i'?", spanish: "Buenos días. ¿Cómo te llamas?" },
          { tzutujil: "Nu b'i' ja...", spanish: "Mi nombre es..." },
          { tzutujil: "La ütz awäch?", spanish: "¿Cómo estás?" },
          { tzutujil: "Jeb'ël nintzij", spanish: "Estoy bien" }
        ],
        grammar: "Los saludos varían según la hora del día. Los pronombres son cortos: 'in' (yo), 'at' (tú).",
        culturalNote: "En las comunidades Tz'utujiles, es común saludar primero a los ancianos como muestra de respeto.",
        exercises: [
          {
            type: "matching",
            instructions: "Relaciona cada palabra en Tz'utujil con su traducción en español.",
            items: [
              { question: "Saqarik", answer: "Buenos días" },
              { question: "Matyox", answer: "Gracias" },
              { question: "Are'", answer: "Él/Ella" }
            ]
          }
        ]
      }
    },
    {
      id: 2,
      title: "Números del 1 al 20",
      level: "Principiante",
      description: "Aprende a contar en Tz'utujil.",
      content: {
        vocabulary: [
          { tzutujil: "Jun", spanish: "Uno" },
          { tzutujil: "Kab'", spanish: "Dos" },
          { tzutujil: "Oxib'", spanish: "Tres" },
          { tzutujil: "Kajib'", spanish: "Cuatro" },
          { tzutujil: "Jo'ob'", spanish: "Cinco" },
          { tzutujil: "Waqib'", spanish: "Seis" },
          { tzutujil: "Wuqub'", spanish: "Siete" },
          { tzutujil: "Wajxaqib'", spanish: "Ocho" },
          { tzutujil: "B'elejeb'", spanish: "Nueve" },
          { tzutujil: "Lajuj", spanish: "Diez" }
        ],
        phrases: [
          { tzutujil: "Jun winäq", spanish: "Una persona" },
          { tzutujil: "Kab' ja", spanish: "Dos casas" },
          { tzutujil: "Jas keb'?", spanish: "¿Cuántos?" }
        ],
        grammar: "El sistema numérico es vigesimal (base 20). Los números se anteponen al sustantivo.",
        culturalNote: "El número 20 (winäq) significa también 'persona' en Tz'utujil.",
        exercises: [
          {
            type: "translation",
            instructions: "Traduce las siguientes frases del español al Tz'utujil.",
            items: [
              { question: "Tres perros", answer: "Oxib' tz'i'" },
              { question: "Cinco tortillas", answer: "Jo'ob' wa" }
            ]
          }
        ]
      }
    },
    {
      id: 3,
      title: "Familia y parentesco",
      level: "Principiante",
      description: "Vocabulario sobre relaciones familiares.",
      content: {
        vocabulary: [
          { tzutujil: "Tata'", spanish: "Padre" },
          { tzutujil: "Te'", spanish: "Madre" },
          { tzutujil: "Achij", spanish: "Hermano (de hombre)" },
          { tzutujil: "Ixöq", spanish: "Hermana (de mujer)" },
          { tzutujil: "Ala", spanish: "Hijo/Hija" },
          { tzutujil: "Mam", spanish: "Abuelo" },
          { tzutujil: "Mim", spanish: "Abuela" }
        ],
        phrases: [
          { tzutujil: "In tata'", spanish: "Mi padre" },
          { tzutujil: "At te'", spanish: "Tu madre" },
          { tzutujil: "Jas keb' achijab'?", spanish: "¿Cuántos hermanos tienes?" }
        ],
        grammar: "Los términos de parentesco usan prefijos posesivos: 'in' (mi), 'a' (tu).",
        culturalNote: "Las familias Tz'utujiles suelen ser extensas y vivir cerca.",
        exercises: [
          {
            type: "fillBlank",
            instructions: "Completa las siguientes oraciones con la palabra correcta.",
            items: [
              { question: "_____ tata' (mi padre)", answer: "In" },
              { question: "A _____ (tu madre)", answer: "te'" }
            ]
          }
        ]
      }
    },
    {
      id: 4,
      title: "Comida tradicional",
      level: "Intermedio",
      description: "Vocabulario sobre alimentos y cocina.",
      content: {
        vocabulary: [
          { tzutujil: "Wa", spanish: "Tortilla" },
          { tzutujil: "Ixim", spanish: "Maíz" },
          { tzutujil: "K'ix", spanish: "Chile" },
          { tzutujil: "Tz'um", spanish: "Caldo" },
          { tzutujil: "Q'an", spanish: "Plátano" },
          { tzutujil: "Ch'a", spanish: "Sal" },
          { tzutujil: "Aq'", spanish: "Pepita" }
        ],
        phrases: [
          { tzutujil: "Ninwa' wa", spanish: "Como tortilla" },
          { tzutujil: "La ütz awach?", spanish: "¿Te gusta?" },
          { tzutujil: "Jeb'ël nintzij", spanish: "Está delicioso" }
        ],
        grammar: "El verbo 'comer' se conjuga con prefijos: 'nin-' (yo), 'a-' (tú).",
        culturalNote: "El maíz es sagrado en la cultura Tz'utujil.",
        exercises: [
          {
            type: "matching",
            instructions: "Relaciona cada palabra en Tz'utujil con su traducción en español.",
            items: [
              { question: "Wa", answer: "Tortilla" },
              { question: "Ixim", answer: "Maíz" }
            ]
          }
        ]
      }
    },
    {
      id: 5,
      title: "Verbos cotidianos",
      level: "Intermedio",
      description: "Acciones comunes en la vida diaria.",
      content: {
        vocabulary: [
          { tzutujil: "B'in", spanish: "Ir" },
          { tzutujil: "Tijon", spanish: "Comer" },
          { tzutujil: "War", spanish: "Dormir" },
          { tzutujil: "Tz'ib'an", spanish: "Escribir" },
          { tzutujil: "Sik'in", spanish: "Leer" }
        ],
        phrases: [
          { tzutujil: "Ninb'in pa tinamit", spanish: "Voy al pueblo" },
          { tzutujil: "At tijon?", spanish: "¿Estás comiendo?" },
          { tzutujil: "Are' war", spanish: "Él/Ella está durmiendo" }
        ],
        grammar: "Los verbos usan prefijos según la persona: 'nin-' (yo), 'at-' (tú), 'are'-' (él/ella).",
        culturalNote: "Muchas actividades giran alrededor del ciclo agrícola.",
        exercises: [
          {
            type: "conjugation",
            instructions: "Conjuga los verbos en la forma correcta según la persona.",
            items: [
              { verb: "b'in", person: "yo", answer: "Ninb'in" },
              { verb: "tijon", person: "tú", answer: "At tijon" }
            ]
          }
        ]
      }
    },
    {
      id: 6,
      title: "El clima y la naturaleza",
      level: "Intermedio",
      description: "Hablar sobre el tiempo y el entorno.",
      content: {
        vocabulary: [
          { tzutujil: "Q'ij", spanish: "Sol" },
          { tzutujil: "Ik'", spanish: "Viento" },
          { tzutujil: "Ja'", spanish: "Agua" },
          { tzutujil: "Ch'aqap", spanish: "Lluvia" },
          { tzutujil: "Siwan", spanish: "Nube" }
        ],
        phrases: [
          { tzutujil: "K'o ch'aqap", spanish: "Está lloviendo" },
          { tzutujil: "Yalan q'ij", spanish: "Hace mucho sol" },
          { tzutujil: "Jas ütz awäch?", spanish: "¿Qué tiempo hace?" }
        ],
        grammar: "Para describir el clima se usa 'k'o' + sustantivo.",
        culturalNote: "Los fenómenos naturales tienen significado espiritual.",
        exercises: [
          {
            type: "translation",
            instructions: "Traduce las siguientes frases del español al Tz'utujil.",
            items: [
              { question: "Está nublado", answer: "K'o siwan" }
            ]
          }
        ]
      }
    },
    {
      id: 7,
      title: "Partes del cuerpo",
      level: "Intermedio",
      description: "Vocabulario sobre el cuerpo humano.",
      content: {
        vocabulary: [
          { tzutujil: "Wachoch", spanish: "Cabeza" },
          { tzutujil: "Q'ab'", spanish: "Mano" },
          { tzutujil: "Aqan", spanish: "Pie" },
          { tzutujil: "Ti'", spanish: "Boca" },
          { tzutujil: "Xikin", spanish: "Oído" }
        ],
        phrases: [
          { tzutujil: "K'o k'ax pa nuwachoch", spanish: "Me duele la cabeza" },
          { tzutujil: "At k'o k'ax?", spanish: "¿Te duele?" }
        ],
        grammar: "Las partes del cuerpo usan prefijos posesivos: 'nu-' (mi), 'a-' (tu).",
        culturalNote: "Los dolores se explican a veces con causas espirituales.",
        exercises: [
          {
            type: "fillBlank",
            instructions: "Completa las siguientes oraciones con la palabra correcta.",
            items: [
              { question: "_____ q'ab' (mi mano)", answer: "Nu" }
            ]
          }
        ]
      }
    },
    {
      id: 8,
      title: "Animales comunes",
      level: "Principiante",
      description: "Nombres de animales en Tz'utujil.",
      content: {
        vocabulary: [
          { tzutujil: "Tz'i'", spanish: "Perro" },
          { tzutujil: "Mïs", spanish: "Gato" },
          { tzutujil: "Tijox", spanish: "Pájaro" },
          { tzutujil: "Kär", spanish: "Pez" },
          { tzutujil: "Chikop", spanish: "Animal" }
        ],
        phrases: [
          { tzutujil: "In k'o jun tz'i'", spanish: "Tengo un perro" },
          { tzutujil: "La ütz atzij?", spanish: "¿Te gustan los animales?" }
        ],
        grammar: "Para indicar posesión se usa 'k'o' + objeto.",
        culturalNote: "Algunos animales tienen significado en la cosmovisión.",
        exercises: [
          {
            type: "matching",
            instructions: "Relaciona cada palabra en Tz'utujil con su traducción en español.",
            items: [
              { question: "Tz'i'", answer: "Perro" },
              { question: "Tijox", answer: "Pájaro" }
            ]
          }
        ]
      }
    },
    {
      id: 9,
      title: "En el mercado",
      level: "Intermedio",
      description: "Frases útiles para comprar en el mercado.",
      content: {
        vocabulary: [
          { tzutujil: "K'ayib'äl", spanish: "Mercado" },
          { tzutujil: "Tz'um", spanish: "Dinero" },
          { tzutujil: "Jas chik?", spanish: "¿Cuánto cuesta?" },
          { tzutujil: "Tz'aqat", spanish: "Barato" },
          { tzutujil: "Nim", spanish: "Caro" }
        ],
        phrases: [
          { tzutujil: "Ninloq' jun...", spanish: "Quiero comprar un..." },
          { tzutujil: "Jas chik?", spanish: "¿Cuánto cuesta?" },
          { tzutujil: "Matyox, tz'aqat", spanish: "Gracias, está barato" }
        ],
        grammar: "Para preguntar precios se usa 'jas chik' + objeto.",
        culturalNote: "El regateo es común en los mercados tradicionales.",
        exercises: [
          {
            type: "dialogue",
            instructions: "Lee el diálogo y completa las respuestas.",
            items: [
              { role: "Comprador", text: "Jas chik jun wa?" },
              { role: "Vendedor", text: "Jun quetzal" }
            ]
          }
        ]
      }
    }
];

export { tzutujilLessons };