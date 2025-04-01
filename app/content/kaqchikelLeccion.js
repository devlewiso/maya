const kaqchikelLessons = [
    {
      id: 1,
      title: "Saludos y Presentaciones",
      level: "Principiante",
      description: "Aprende saludos básicos y cómo presentarte en Kaqchikel.",
      content: {
        vocabulary: [
          { kaqchikel: "Ütz awäch", spanish: "Hola / Buenos días" },
          { kaqchikel: "Xok'a'", spanish: "Buenas tardes" },
          { kaqchikel: "Xok'ak'a'", spanish: "Buenas noches" },
          { kaqchikel: "Matiox", spanish: "Gracias" },
          { kaqchikel: "Jo'", spanish: "Sí" },
          { kaqchikel: "Manäq", spanish: "No" },
          { kaqchikel: "Rin", spanish: "Yo" },
          { kaqchikel: "Rat", spanish: "Tú" },
          { kaqchikel: "Rija'", spanish: "Él/Ella" },
          { kaqchikel: "Nubi'", spanish: "Mi nombre" }
        ],
        phrases: [
          { kaqchikel: "Ütz awäch. Achike abi'?", spanish: "Hola. ¿Cómo te llamas?" },
          { kaqchikel: "Nubi' ja ri'...", spanish: "Mi nombre es..." },
          { kaqchikel: "Matyox chawe", spanish: "Gracias a ti" },
          { kaqchikel: "Achike ab'anon?", spanish: "¿Cómo estás?" },
          { kaqchikel: "Utz nub'anon", spanish: "Estoy bien" }
        ],
        grammar: "En Kaqchikel, los saludos varían según la hora del día. 'Ütz awäch' se usa por la mañana, 'Xok'a'' por la tarde y 'Xok'ak'a'' por la noche. Los pronombres personales son importantes: 'Rin' (yo), 'Rat' (tú), 'Rija'' (él/ella).",
        culturalNote: "En la cultura maya Kaqchikel, los saludos son muy importantes y muestran respeto. Es común preguntar por la familia después de saludar.",
        exercises: [
          {
            type: "matching",
            instructions: "Une cada saludo con su traducción correcta",
            items: [
              { question: "Ütz awäch", answer: "Buenos días" },
              { question: "Matiox", answer: "Gracias" },
              { question: "Achike abi'?", answer: "¿Cómo te llamas?" },
              { question: "Utz nub'anon", answer: "Estoy bien" }
            ]
          },
          {
            type: "fillBlank",
            instructions: "Completa las frases con la palabra correcta",
            items: [
              { question: "_____ ja ri' Carlos.", answer: "Nubi'" },
              { question: "_____ chawe.", answer: "Matiox" },
              { question: "Achike _____?", answer: "abi'" }
            ]
          }
        ]
      }
    },
    {
      id: 2,
      title: "Números y Conteo",
      level: "Principiante",
      description: "Aprende los números en Kaqchikel y cómo contar objetos.",
      content: {
        vocabulary: [
          { kaqchikel: "Jun", spanish: "Uno" },
          { kaqchikel: "Ka'i'", spanish: "Dos" },
          { kaqchikel: "Oxi'", spanish: "Tres" },
          { kaqchikel: "Kaji'", spanish: "Cuatro" },
          { kaqchikel: "Wo'o'", spanish: "Cinco" },
          { kaqchikel: "Waqi'", spanish: "Seis" },
          { kaqchikel: "Wuqu'", spanish: "Siete" },
          { kaqchikel: "Waqxaqi'", spanish: "Ocho" },
          { kaqchikel: "B'eleje'", spanish: "Nueve" },
          { kaqchikel: "Lajuj", spanish: "Diez" }
        ],
        phrases: [
          { kaqchikel: "¿Janipe'?", spanish: "¿Cuántos?" },
          { kaqchikel: "Jun winäq", spanish: "Una persona" },
          { kaqchikel: "Ka'i' tz'i'", spanish: "Dos perros" },
          { kaqchikel: "Oxi' jay", spanish: "Tres casas" },
          { kaqchikel: "Lajuj quetzales", spanish: "Diez quetzales" }
        ],
        grammar: "En Kaqchikel, los números se usan directamente antes del sustantivo. A diferencia del español, no hay concordancia de género con los números. Los clasificadores numerales son importantes cuando se cuentan diferentes tipos de objetos.",
        culturalNote: "El sistema numérico maya es vigesimal (base 20), a diferencia del sistema decimal (base 10) usado en español. Esto refleja la antigua tradición matemática maya.",
        exercises: [
          {
            type: "matching",
            instructions: "Une cada número con su equivalente",
            items: [
              { question: "Jun", answer: "Uno" },
              { question: "Ka'i'", answer: "Dos" },
              { question: "Wo'o'", answer: "Cinco" },
              { question: "Lajuj", answer: "Diez" }
            ]
          },
          {
            type: "translation",
            instructions: "Traduce las siguientes frases al Kaqchikel",
            items: [
              { question: "Tres casas", answer: "Oxi' jay" },
              { question: "Cinco personas", answer: "Wo'o' winäq" },
              { question: "¿Cuántos perros?", answer: "¿Janipe' tz'i'?" }
            ]
          }
        ]
      }
    },
    {
      id: 3,
      title: "Familia y Relaciones",
      level: "Principiante",
      description: "Aprende vocabulario sobre la familia y relaciones personales.",
      content: {
        vocabulary: [
          { kaqchikel: "Tata'aj", spanish: "Padre" },
          { kaqchikel: "Te'ej", spanish: "Madre" },
          { kaqchikel: "Nimal", spanish: "Hermano mayor (de hombre)" },
          { kaqchikel: "Chaq'", spanish: "Hermano menor (de hombre)" },
          { kaqchikel: "Xta", spanish: "Hermana (de hombre)" },
          { kaqchikel: "Ana'", spanish: "Hermana mayor (de mujer)" },
          { kaqchikel: "Chaq'", spanish: "Hermana menor (de mujer)" },
          { kaqchikel: "Xibal", spanish: "Hermano (de mujer)" },
          { kaqchikel: "Ati't", spanish: "Abuela" },
          { kaqchikel: "Mama'", spanish: "Abuelo" }
        ],
        phrases: [
          { kaqchikel: "Ri nute'", spanish: "Mi madre" },
          { kaqchikel: "Ri atata'", spanish: "Tu padre" },
          { kaqchikel: "Ri ruxibal", spanish: "Su hermano (de ella)" },
          { kaqchikel: "Janipe' awach'alal?", spanish: "¿Cuántos hermanos tienes?" },
          { kaqchikel: "K'o ka'i' wana'", spanish: "Tengo dos hermanas mayores" }
        ],
        grammar: "En Kaqchikel, los términos de parentesco son más específicos que en español. Por ejemplo, hay diferentes palabras para 'hermano/a' dependiendo de si es mayor o menor, y del género de quien habla.",
        culturalNote: "En la cultura Kaqchikel, la familia extendida es muy importante. Los términos de parentesco reflejan una estructura social compleja donde las relaciones familiares definen roles y responsabilidades.",
        exercises: [
          {
            type: "matching",
            instructions: "Une cada término familiar con su traducción",
            items: [
              { question: "Tata'aj", answer: "Padre" },
              { question: "Nimal", answer: "Hermano mayor (de hombre)" },
              { question: "Ana'", answer: "Hermana mayor (de mujer)" },
              { question: "Ati't", answer: "Abuela" }
            ]
          },
          {
            type: "fillBlank",
            instructions: "Completa las frases con la palabra correcta",
            items: [
              { question: "Ri _____ ja ri María.", answer: "nute'" },
              { question: "K'o jun _____ (hermano menor).", answer: "chaq'" },
              { question: "Ri _____ ja ri Juan.", answer: "mama'" }
            ]
          }
        ]
      }
    },
    {
      id: 4,
      title: "Comida y Alimentación",
      level: "Principiante-Intermedio",
      description: "Aprende vocabulario relacionado con alimentos y comidas tradicionales.",
      content: {
        vocabulary: [
          { kaqchikel: "Wa'im", spanish: "Comida" },
          { kaqchikel: "Kaxlan wa'", spanish: "Pan" },
          { kaqchikel: "Ik", spanish: "Chile" },
          { kaqchikel: "Kinäq'", spanish: "Frijol" },
          { kaqchikel: "Saqwäch", spanish: "Papa" },
          { kaqchikel: "Ixim", spanish: "Maíz" },
          { kaqchikel: "Oj", spanish: "Aguacate" },
          { kaqchikel: "Kab'", spanish: "Miel" },
          { kaqchikel: "Ya'", spanish: "Agua" },
          { kaqchikel: "Q'utun", spanish: "Cocinar" }
        ],
        phrases: [
          { kaqchikel: "Ninwajo' wa'im", spanish: "Quiero comer" },
          { kaqchikel: "Jeb'ël ri wa'im", spanish: "La comida está deliciosa" },
          { kaqchikel: "Achike nawa'?", spanish: "¿Qué comes?" },
          { kaqchikel: "Ninq'utuj kinäq'", spanish: "Cocino frijoles" },
          { kaqchikel: "K'o ik chupam?", spanish: "¿Tiene chile?" }
        ],
        grammar: "En Kaqchikel, los verbos relacionados con la alimentación siguen patrones específicos. 'Wa'' significa 'comer', y 'q'utun' significa 'cocinar'. Los prefijos 'nin-' y 'na-' indican la primera y segunda persona del presente.",
        culturalNote: "El maíz (ixim) es fundamental en la cultura maya. La preparación de tortillas y otros alimentos a base de maíz tiene un significado espiritual y cultural profundo.",
        exercises: [
          {
            type: "matching",
            instructions: "Une cada alimento con su traducción",
            items: [
              { question: "Ixim", answer: "Maíz" },
              { question: "Kinäq'", answer: "Frijol" },
              { question: "Oj", answer: "Aguacate" },
              { question: "Ya'", answer: "Agua" }
            ]
          },
          {
            type: "translation",
            instructions: "Traduce las siguientes frases al español",
            items: [
              { question: "Jeb'ël ri wa'im", answer: "La comida está deliciosa" },
              { question: "Ninwajo' kaxlan wa'", answer: "Quiero pan" },
              { question: "K'o ik chupam?", answer: "¿Tiene chile?" }
            ]
          }
        ]
      }
    },
    {
      id: 5,
      title: "Verbos y Acciones Cotidianas",
      level: "Intermedio",
      description: "Aprende verbos comunes y cómo describir acciones diarias.",
      content: {
        vocabulary: [
          { kaqchikel: "B'e", spanish: "Ir" },
          { kaqchikel: "Wa'", spanish: "Comer" },
          { kaqchikel: "War", spanish: "Dormir" },
          { kaqchikel: "Samäj", spanish: "Trabajar" },
          { kaqchikel: "Tij", spanish: "Estudiar" },
          { kaqchikel: "Atin", spanish: "Bañarse" },
          { kaqchikel: "Tz'ib'an", spanish: "Escribir" },
          { kaqchikel: "Sik'in", spanish: "Leer" },
          { kaqchikel: "Loq'on", spanish: "Comprar" },
          { kaqchikel: "Ch'ajon", spanish: "Lavar" }
        ],
        phrases: [
          { kaqchikel: "Yib'e pa tinamit", spanish: "Voy al pueblo" },
          { kaqchikel: "Ninsamäj pa jay", spanish: "Trabajo en casa" },
          { kaqchikel: "Achike nawär?", spanish: "¿Dónde duermes?" },
          { kaqchikel: "Nintij nuwuj", spanish: "Estudio mi libro" },
          { kaqchikel: "Ninch'äj nutziak", spanish: "Lavo mi ropa" }
        ],
        grammar: "Los verbos en Kaqchikel se conjugan con prefijos que indican persona y tiempo. Por ejemplo, 'nin-' para primera persona singular presente, 'na-' para segunda persona singular presente, 'ni-' para tercera persona singular presente.",
        culturalNote: "El concepto del tiempo en la cultura maya es cíclico, no lineal como en la cultura occidental. Esto se refleja en cómo se habla de las acciones y eventos.",
        exercises: [
          {
            type: "conjugation",
            instructions: "Conjuga los siguientes verbos en primera persona",
            items: [
              { question: "B'e (ir)", answer: "Yib'e" },
              { question: "Samäj (trabajar)", answer: "Ninsamäj" },
              { question: "War (dormir)", answer: "Ninwär" },
              { question: "Tij (estudiar)", answer: "Nintij" }
            ]
          },
          {
            type: "translation",
            instructions: "Traduce las siguientes frases al Kaqchikel",
            items: [
              { question: "Yo leo un libro", answer: "Ninsik'ij jun wuj" },
              { question: "Tú trabajas mucho", answer: "Rat yasamäj k'ïy" },
              { question: "Él va al mercado", answer: "Rija' nib'e pa k'ayb'äl" }
            ]
          }
        ]
      }
    },
    {
      id: 6,
      title: "Tiempo y Clima",
      level: "Intermedio",
      description: "Aprende a hablar sobre el tiempo, las estaciones y el clima.",
      content: {
        vocabulary: [
          { kaqchikel: "Q'ij", spanish: "Día/Sol" },
          { kaqchikel: "Ik'", spanish: "Mes/Luna" },
          { kaqchikel: "Juna'", spanish: "Año" },
          { kaqchikel: "Job'", spanish: "Lluvia" },
          { kaqchikel: "Sutz'", spanish: "Nube" },
          { kaqchikel: "Kaq'ïq'", spanish: "Viento" },
          { kaqchikel: "Saq'ij", spanish: "Verano (estación seca)" },
          { kaqchikel: "Q'alaj", spanish: "Invierno (estación lluviosa)" },
          { kaqchikel: "Meq'en", spanish: "Frío" },
          { kaqchikel: "K'atän", spanish: "Calor" }
        ],
        phrases: [
          { kaqchikel: "Jeb'ël ri q'ij", spanish: "El día está bonito" },
          { kaqchikel: "Najin job'", spanish: "Está lloviendo" },
          { kaqchikel: "K'o sutz'", spanish: "Hay nubes" },
          { kaqchikel: "Yalan meq'en", spanish: "Hace mucho frío" },
          { kaqchikel: "Ri kaq'ïq' yalan nim ruchuk'a'", spanish: "El viento es muy fuerte" }
        ],
        grammar: "En Kaqchikel, las expresiones climáticas a menudo usan el verbo 'k'o' (haber/estar) o 'najin' (estar en proceso). Las condiciones climáticas se expresan como sustantivos más que como verbos.",
        culturalNote: "El calendario maya tradicional está estrechamente vinculado a los ciclos agrícolas y astronómicos. Las estaciones se definen principalmente por los patrones de lluvia, no por la temperatura.",
        exercises: [
          {
            type: "matching",
            instructions: "Une cada palabra con su traducción",
            items: [
              { question: "Job'", answer: "Lluvia" },
              { question: "Kaq'ïq'", answer: "Viento" },
              { question: "Meq'en", answer: "Frío" },
              { question: "Saq'ij", answer: "Verano (estación seca)" }
            ]
          },
          {
            type: "fillBlank",
            instructions: "Completa las frases con la palabra correcta",
            items: [
              { question: "Najin _____.", answer: "job'" },
              { question: "Yalan _____.", answer: "k'atän" },
              { question: "K'o _____ pa kaj.", answer: "sutz'" }
            ]
          }
        ]
      }
    },
    {
      id: 7,
      title: "Direcciones y Ubicación",
      level: "Intermedio",
      description: "Aprende a dar y pedir direcciones, y a describir ubicaciones.",
      content: {
        vocabulary: [
          { kaqchikel: "Ajxokon", spanish: "Izquierda" },
          { kaqchikel: "Ajkiq'a'", spanish: "Derecha" },
          { kaqchikel: "Chuwäch", spanish: "Adelante/Frente" },
          { kaqchikel: "Chirij", spanish: "Atrás" },
          { kaqchikel: "Chuxe'", spanish: "Debajo" },
          { kaqchikel: "Pa ruwi'", spanish: "Encima" },
          { kaqchikel: "Chunaqaj", spanish: "Cerca" },
          { kaqchikel: "Näj", spanish: "Lejos" },
          { kaqchikel: "B'ey", spanish: "Camino" },
          { kaqchikel: "K'ayb'äl", spanish: "Mercado" }
        ],
        phrases: [
          { kaqchikel: "Akuchi' k'o ri k'ayb'äl?", spanish: "¿Dónde está el mercado?" },
          { kaqchikel: "Taya' kan ri ajxokon", spanish: "Dobla a la izquierda" },
          { kaqchikel: "Chuwäch ri jay", spanish: "Frente a la casa" },
          { kaqchikel: "Näj k'o wi", spanish: "Está lejos" },
          { kaqchikel: "Tachapa' ri b'ey ri'", spanish: "Toma ese camino" }
        ],
        grammar: "En Kaqchikel, las preposiciones locativas como 'chu-' (en, a) y 'pa' (en, dentro) se combinan con sustantivos relacionales como '-wäch' (frente) y '-xe'' (debajo) para formar expresiones de ubicación.",
        culturalNote: "La orientación espacial en la cultura maya tradicional está fuertemente vinculada a los puntos cardinales, cada uno con su color y significado simbólico.",
        exercises: [
          {
            type: "matching",
            instructions: "Une cada dirección con su traducción",
            items: [
              { question: "Ajxokon", answer: "Izquierda" },
              { question: "Chuwäch", answer: "Adelante/Frente" },
              { question: "Chunaqaj", answer: "Cerca" },
              { question: "Pa ruwi'", answer: "Encima" }
            ]
          },
          {
            type: "translation",
            instructions: "Traduce las siguientes frases al Kaqchikel",
            items: [
              { question: "El mercado está cerca", answer: "Ri k'ayb'äl k'o chunaqaj" },
              { question: "Gira a la derecha", answer: "Taya' kan ri ajkiq'a'" },
              { question: "¿Dónde está el camino?", answer: "Akuchi' k'o ri b'ey?" }
            ]
          }
        ]
      }
    },
    {
      id: 8,
      title: "Salud y Bienestar",
      level: "Intermedio-Avanzado",
      description: "Aprende vocabulario relacionado con la salud, el cuerpo y el bienestar.",
      content: {
        vocabulary: [
          { kaqchikel: "Ch'akul", spanish: "Cuerpo" },
          { kaqchikel: "Jolomaj", spanish: "Cabeza" },
          { kaqchikel: "Q'ab'aj", spanish: "Brazo/Mano" },
          { kaqchikel: "Aqanaj", spanish: "Pierna/Pie" },
          { kaqchikel: "K'oxomal", spanish: "Dolor" },
          { kaqchikel: "Yab'il", spanish: "Enfermedad" },
          { kaqchikel: "Aq'omanel", spanish: "Doctor/Curandero" },
          { kaqchikel: "Aq'om", spanish: "Medicina" },
          { kaqchikel: "Raxnaqil", spanish: "Salud" },
          { kaqchikel: "K'aslem", spanish: "Vida" }
        ],
        phrases: [
          { kaqchikel: "Niq'axo nujolom", spanish: "Me duele la cabeza" },
          { kaqchikel: "Yinyawäj", spanish: "Estoy enfermo" },
          { kaqchikel: "K'o k'oxomal pa nupam", spanish: "Tengo dolor de estómago" },
          { kaqchikel: "Achike yab'il?", spanish: "¿Qué enfermedad?" },
          { kaqchikel: "Ütz nuna' ri wach'akul", spanish: "Mi cuerpo se siente bien" }
        ],
        grammar: "En Kaqchikel, las partes del cuerpo son sustantivos poseídos, lo que significa que siempre se expresan con un prefijo posesivo (nu-, a-, ru-). El verbo 'q'axo' (doler) se usa con la parte del cuerpo como sujeto.",
        culturalNote: "La medicina tradicional maya combina conocimientos herbales, espirituales y prácticas ancestrales. Los 'aj q'ij' (curanderos tradicionales) tienen un papel importante en las comunidades.",
        exercises: [
          {
            type: "matching",
            instructions: "Une cada parte del cuerpo con su traducción",
            items: [
              { question: "Jolomaj", answer: "Cabeza" },
              { question: "Q'ab'aj", answer: "Brazo/Mano" },
              { question: "Aqanaj", answer: "Pierna/Pie" },
              { question: "Ch'akul", answer: "Cuerpo" }
            ]
          },
          {
            type: "fillBlank",
            instructions: "Completa las frases con la palabra correcta",
            items: [
              { question: "Niq'axo nu_____.", answer: "jolom" },
              { question: "K'o _____ pa nuq'a'.", answer: "k'oxomal" },
              { question: "Ri _____ nuya' aq'om.", answer: "aq'omanel" }
            ]
          }
        ]
      }
    },
    {
      id: 9,
      title: "Naturaleza y Medio Ambiente",
      level: "Avanzado",
      description: "Aprende vocabulario sobre la naturaleza, plantas, animales y el entorno.",
      content: {
        vocabulary: [
          { kaqchikel: "K'iche'laj", spanish: "Bosque" },
          { kaqchikel: "Juyu'", spanish: "Montaña" },
          { kaqchikel: "Raqän ya'", spanish: "Río" },
          { kaqchikel: "Che'", spanish: "Árbol" },
          { kaqchikel: "Kotz'i'j", spanish: "Flor" },
          { kaqchikel: "Tz'i'", spanish: "Perro" },
          { kaqchikel: "Me's", spanish: "Gato" },
          { kaqchikel: "Tz'ikin", spanish: "Pájaro" },
          { kaqchikel: "Kär", spanish: "Pez" },
          { kaqchikel: "Ulew", spanish: "Tierra" }
        ],
        phrases: [
          { kaqchikel: "Ri juyu' yalan jeb'ël", spanish: "La montaña es muy hermosa" },
          { kaqchikel: "K'ïy taq che' pa k'iche'laj", spanish: "Hay muchos árboles en el bosque" },
          { kaqchikel: "Ri raqän ya' nim ruwäch", spanish: "El río es ancho" },
          { kaqchikel: "Ri tz'ikin yeq'ojoman", spanish: "Los pájaros cantan" },
          { kaqchikel: "K'o jun kotz'i'j käq rij", spanish: "Hay una flor roja" }
        ],
        grammar: "En Kaqchikel, los adjetivos generalmente siguen al sustantivo. Para describir características físicas, se usan construcciones como 'käq rij' (rojo su exterior) en lugar de simplemente 'käq' (rojo).",
        culturalNote: "La relación con la naturaleza es fundamental en la cosmovisión maya. Cada elemento natural tiene un espíritu o energía (nawal) y merece respeto.",
        exercises: [
          {
            type: "matching",
            instructions: "Une cada elemento natural con su traducción",
            items: [
              { question: "K'iche'laj", answer: "Bosque" },
              { question: "Raqän ya'", answer: "Río" },
              { question: "Kotz'i'j", answer: "Flor" },
              { question: "Tz'ikin", answer: "Pájaro" }
            ]
          },
          {
            type: "translation",
            instructions: "Traduce las siguientes frases al español",
            items: [
              { question: "Ri juyu' yalan jeb'ël", answer: "La montaña es muy hermosa" },
              { question: "K'o jun tz'i' q'ëq rij", answer: "Hay un perro negro" },
              { question: "Ri ulew k'o ruk'aslem", answer: "La tierra tiene vida" }
            ]
          }
        ]
      }
    },
  ];

export { kaqchikelLessons };