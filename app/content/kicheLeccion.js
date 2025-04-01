const kicheLessons = [
  {
    id: 1,
    title: "Saludos y Presentaciones",
    level: "Principiante",
    description: "Aprende saludos básicos y cómo presentarte en K'iche'.",
    content: {
      vocabulary: [
        { kiche: "Saqarik", spanish: "Buenos días" },
        { kiche: "Xokaq’ij", spanish: "Buenas tardes" },
        { kiche: "Xok’a’", spanish: "Buenas noches" },
        { kiche: "Matyox", spanish: "Gracias" },
        { kiche: "Ja’", spanish: "Sí" },
        { kiche: "Manäq", spanish: "No" },
        { kiche: "In", spanish: "Yo" },
        { kiche: "Rat", spanish: "Tú" },
        { kiche: "Are’", spanish: "Él/Ella" }
      ],
      phrases: [
        { kiche: "Saqarik. Achike ab’i’?", spanish: "Buenos días. ¿Cómo te llamas?" },
        { kiche: "In nu b’i’...", spanish: "Mi nombre es..." },
        { kiche: "Matyox chawë", spanish: "Gracias a ti" },
        { kiche: "La ütz awäch?", spanish: "¿Cómo estás?" },
        { kiche: "Jeb’ël nintzij", spanish: "Estoy bien" }
      ],
      grammar: "Los pronombres personales son cortos: 'in' (yo), 'rat' (tú). Los saludos cambian según la hora del día.",
      culturalNote: "En la cultura K'iche', se debe saludar primero a los ancianos y usar 'ajaw' (señor) o 'ixöq' (señora) como muestra de respeto.",
      exercises: [
        {
          type: "matching",
          items: [
            { question: "Saqarik", answer: "Buenos días" },
            { question: "Xok’a’", answer: "Buenas noches" },
            { question: "Are’", answer: "Él/Ella" }
          ]
        }
      ]
    }
  },
  {
    id: 2,
    title: "Números del 1 al 20",
    level: "Principiante",
    description: "Aprende a contar en K'iche'.",
    content: {
      vocabulary: [
        { kiche: "Jun", spanish: "Uno" },
        { kiche: "Kib’", spanish: "Dos" },
        { kiche: "Oxib’", spanish: "Tres" },
        { kiche: "Kajib’", spanish: "Cuatro" },
        { kiche: "Jo’", spanish: "Cinco" },
        { kiche: "Waqib’", spanish: "Seis" },
        { kiche: "Wuqub’", spanish: "Siete" },
        { kiche: "Wajxaqib’", spanish: "Ocho" },
        { kiche: "B’elejeb’", spanish: "Nueve" },
        { kiche: "Lajuj", spanish: "Diez" }
      ],
      phrases: [
        { kiche: "Jun winäq", spanish: "Una persona" },
        { kiche: "Kib’ tz’i’", spanish: "Dos perros" },
        { kiche: "Jachin keb’?", spanish: "¿Cuántos?" }
      ],
      grammar: "El sistema numérico es vigesimal (base 20). Los números preceden al sustantivo.",
      culturalNote: "El número 20 se dice 'k’al' y era fundamental en el calendario maya.",
      exercises: [
        {
          type: "translation",
          items: [
            { question: "Tres casas", answer: "Oxib’ ja" },
            { question: "Cinco días", answer: "Jo’ q’ij" }
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
        { kiche: "Tata’", spanish: "Padre" },
        { kiche: "Te’", spanish: "Madre" },
        { kiche: "Achij", spanish: "Hermano" },
        { kiche: "Ixöq", spanish: "Hermana" },
        { kiche: "Ala’", spanish: "Hijo/Hija" },
        { kiche: "Mam", spanish: "Abuelo" },
        { kiche: "Mim", spanish: "Abuela" }
      ],
      phrases: [
        { kiche: "In tata’", spanish: "Mi padre" },
        { kiche: "La te’", spanish: "Tu madre" },
        { kiche: "Jachin keb’ awachalal?", spanish: "¿Cuántos hermanos tienes?" }
      ],
      grammar: "Los términos de parentesco usan prefijos posesivos: 'in' (mi), 'a' (tu).",
      culturalNote: "Las familias K'iche' suelen ser extensas, incluyendo tíos y primos como hermanos.",
      exercises: [
        {
          type: "fillBlank",
          items: [
            { question: "_____ tata’ (mi padre)", answer: "In" },
            { question: "A _____ (tu madre)", answer: "te’" }
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
        { kiche: "Wa", spanish: "Tortilla" },
        { kiche: "Ixim", spanish: "Maíz" },
        { kiche: "K’ix", spanish: "Chile" },
        { kiche: "Tz’um", spanish: "Caldo" },
        { kiche: "Q’an", spanish: "Plátano" },
        { kiche: "Ch’a", spanish: "Sal" },
        { kiche: "Aq’", spanish: "Pepita" }
      ],
      phrases: [
        { kiche: "Ninwa’ wa", spanish: "Como tortilla" },
        { kiche: "La ütz awach?", spanish: "¿Te gusta?" },
        { kiche: "Jeb’ël nintzij", spanish: "Está delicioso" }
      ],
      grammar: "El verbo 'comer' se conjuga con prefijos: 'nin-' (yo), 'a-' (tú).",
      culturalNote: "El maíz es sagrado. Se dice que los primeros hombres fueron hechos de maíz.",
      exercises: [
        {
          type: "matching",
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
        { kiche: "B’in", spanish: "Ir" },
        { kiche: "Tijon", spanish: "Comer" },
        { kiche: "War", spanish: "Dormir" },
        { kiche: "Tz’ib’an", spanish: "Escribir" },
        { kiche: "Sik’in", spanish: "Leer" }
      ],
      phrases: [
        { kiche: "Ninb’in pa tinamit", spanish: "Voy al pueblo" },
        { kiche: "At tijon?", spanish: "¿Estás comiendo?" },
        { kiche: "Are’ war", spanish: "Él/Ella está durmiendo" }
      ],
      grammar: "Los verbos usan prefijos según la persona: 'nin-' (yo), 'at-' (tú), 'are'-' (él/ella).",
      culturalNote: "Muchas actividades giran alrededor del ciclo agrícola del maíz.",
      exercises: [
        {
          type: "conjugation",
          items: [
            { verb: "b’in", person: "yo", answer: "Ninb’in" },
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
        { kiche: "Q’ij", spanish: "Sol" },
        { kiche: "Ik’", spanish: "Viento" },
        { kiche: "Ja’", spanish: "Agua" },
        { kiche: "Ch’aqap", spanish: "Lluvia" },
        { kiche: "Siwan", spanish: "Nube" }
      ],
      phrases: [
        { kiche: "K’o ch’aqap", spanish: "Está lloviendo" },
        { kiche: "Yalan q’ij", spanish: "Hace mucho sol" },
        { kiche: "Jas ütz awäch?", spanish: "¿Qué tiempo hace?" }
      ],
      grammar: "Para describir el clima se usa 'k’o' + sustantivo.",
      culturalNote: "Los fenómenos naturales tienen significado espiritual en la cosmovisión maya.",
      exercises: [
        {
          type: "translation",
          items: [
            { question: "Está nublado", answer: "K’o siwan" }
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
        { kiche: "Wachoch", spanish: "Cabeza" },
        { kiche: "Q’ab’", spanish: "Mano" },
        { kiche: "Aqan", spanish: "Pie" },
        { kiche: "Ti’", spanish: "Boca" },
        { kiche: "Xikin", spanish: "Oído" }
      ],
      phrases: [
        { kiche: "K’o k’ax pa nuwachoch", spanish: "Me duele la cabeza" },
        { kiche: "At k’o k’ax?", spanish: "¿Te duele?" }
      ],
      grammar: "Las partes del cuerpo usan prefijos posesivos: 'nu-' (mi), 'a-' (tu).",
      culturalNote: "Los dolores se explican a veces con causas espirituales y se tratan con hierbas.",
      exercises: [
        {
          type: "fillBlank",
          items: [
            { question: "_____ q’ab’ (mi mano)", answer: "Nu" }
          ]
        }
      ]
    }
  },
  {
    id: 8,
    title: "Animales comunes",
    level: "Principiante",
    description: "Nombres de animales en K'iche'.",
    content: {
      vocabulary: [
        { kiche: "Tz’i’", spanish: "Perro" },
        { kiche: "Mïs", spanish: "Gato" },
        { kiche: "Tijox", spanish: "Pájaro" },
        { kiche: "Kär", spanish: "Pez" },
        { kiche: "Chikop", spanish: "Animal" }
      ],
      phrases: [
        { kiche: "In k’o jun tz’i’", spanish: "Tengo un perro" },
        { kiche: "La ütz atzij?", spanish: "¿Te gustan los animales?" }
      ],
      grammar: "Para indicar posesión se usa 'k’o' + objeto.",
      culturalNote: "El nawal (espíritu guardián) de una persona puede asociarse a un animal.",
      exercises: [
        {
          type: "matching",
          items: [
            { question: "Tz’i’", answer: "Perro" },
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
        { kiche: "K’ayib’äl", spanish: "Mercado" },
        { kiche: "Tz’um", spanish: "Dinero" },
        { kiche: "Jas chik?", spanish: "¿Cuánto cuesta?" },
        { kiche: "Tz’aqat", spanish: "Barato" },
        { kiche: "Nim", spanish: "Caro" }
      ],
      phrases: [
        { kiche: "Ninloq’ jun...", spanish: "Quiero comprar un..." },
        { kiche: "Jas chik?", spanish: "¿Cuánto cuesta?" },
        { kiche: "Matyox, tz’aqat", spanish: "Gracias, está barato" }
      ],
      grammar: "Para preguntar precios se usa 'jas chik' + objeto.",
      culturalNote: "El regateo es común en los mercados tradicionales mayas.",
      exercises: [
        {
          type: "dialogue",
          items: [
            { role: "Comprador", text: "Jas chik jun wa?" },
            { role: "Vendedor", text: "Jun quetzal" }
          ]
        }
      ]
    }
  }
];

export { kicheLessons };