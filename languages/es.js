
(function () {
  const v = (word, translation, meaningZh, partOfSpeech, gender = "") => ({
    word, translation, meaningZh, partOfSpeech,
    ...(gender ? { gender } : {})
  });

  const s = (text, translation, meaningZh) => ({
    text, translation, meaningZh
  });

  const d = (speaker, text, translation) => ({
    speaker, text, translation
  });

  const e = (question, answer, options, explanation = "") => ({
    question, answer, options,
    ...(explanation ? { explanation } : {})
  });

  const lesson = (
    id, level, title, category, description,
    vocabulary, sentences, dialogue, exercises
  ) => ({
    id, level, title, category, description,
    vocabulary, sentences, dialogue, exercises
  });

  const lessons = [
    // ==================== A0 ====================
    lesson(
      "es-a0-01", "A0", "¡Saludos!", "Basics",
      "Learn basic greetings and polite expressions.",
      [
        v("hola", "hello", "你好", "expresión"),
        v("buenos días", "good morning", "早上好", "expresión"),
        v("buenas tardes", "good afternoon", "下午好", "expresión"),
        v("buenas noches", "good evening / good night", "晚上好／晚安", "expresión"),
        v("adiós", "goodbye", "再见", "expresión"),
        v("hasta luego", "see you later", "回头见", "expresión"),
        v("por favor", "please", "请", "expresión"),
        v("gracias", "thank you", "谢谢", "expresión")
      ],
      [
        s("Hola, ¿qué tal?", "Hello, how are you?", "你好，你怎么样？"),
        s("Buenos días, señora.", "Good morning, madam.", "早上好，女士。"),
        s("Buenas tardes a todos.", "Good afternoon, everyone.", "大家下午好。"),
        s("Muchas gracias.", "Thank you very much.", "非常感谢。"),
        s("Adiós, hasta luego.", "Goodbye, see you later.", "再见，回头见。")
      ],
      [
        d("Ana", "¡Hola!", "Hello!"),
        d("Luis", "¡Hola! ¿Qué tal?", "Hello! How are you?"),
        d("Ana", "Muy bien, gracias. ¿Y tú?", "Very well, thank you. And you?"),
        d("Luis", "Bien, gracias.", "Fine, thank you."),
        d("Ana", "¡Hasta luego!", "See you later!")
      ],
      [
        e("How do you say “hello” in Spanish?", "hola", ["hola", "adiós", "gracias"]),
        e("Choose the correct translation: «por favor».", "please", ["please", "thank you", "goodbye"]),
        e("Complete: Buenos ___.", "días", ["días", "gracias", "hola"])
      ]
    ),

    lesson(
      "es-a0-02", "A0", "Presentarse", "Basics",
      "Introduce yourself and ask someone’s name.",
      [
        v("me llamo", "my name is", "我叫", "expresión"),
        v("¿cómo te llamas?", "what is your name?", "你叫什么名字？", "pregunta"),
        v("el nombre", "name", "名字", "sustantivo", "masculino"),
        v("encantado", "pleased to meet you (male)", "很高兴认识你（男性）", "expresión"),
        v("encantada", "pleased to meet you (female)", "很高兴认识你（女性）", "expresión"),
        v("soy", "I am", "我是", "verbo"),
        v("mucho gusto", "nice to meet you", "很高兴认识你", "expresión"),
        v("¿y tú?", "and you?", "你呢？", "pregunta")
      ],
      [
        s("Me llamo Elena.", "My name is Elena.", "我叫埃莱娜。"),
        s("¿Cómo te llamas?", "What is your name?", "你叫什么名字？"),
        s("Soy de Madrid.", "I am from Madrid.", "我来自马德里。"),
        s("Mucho gusto.", "Nice to meet you.", "很高兴认识你。"),
        s("Encantada de conocerte.", "Pleased to meet you.", "很高兴认识你。")
      ],
      [
        d("Pablo", "Hola, me llamo Pablo. ¿Y tú?", "Hello, my name is Pablo. And you?"),
        d("Marta", "Me llamo Marta.", "My name is Marta."),
        d("Pablo", "Mucho gusto.", "Nice to meet you."),
        d("Marta", "Igualmente.", "Likewise."),
        d("Pablo", "¿Eres de aquí?", "Are you from here?")
      ],
      [
        e("Complete: Me ___ Carlos.", "llamo", ["llamo", "llamas", "llama"]),
        e("What does «¿Cómo te llamas?» mean?", "What is your name?", ["What is your name?", "Where do you live?", "How old are you?"]),
        e("Choose a natural expression after meeting someone.", "Mucho gusto", ["Mucho gusto", "Buenas noches", "Hasta luego"])
      ]
    ),

    lesson(
      "es-a0-03", "A0", "Números y edad", "Basics",
      "Learn numbers and say how old you are.",
      [
        v("cero", "zero", "零", "número"),
        v("uno", "one", "一", "número"),
        v("dos", "two", "二", "número"),
        v("tres", "three", "三", "número"),
        v("cinco", "five", "五", "número"),
        v("diez", "ten", "十", "número"),
        v("¿cuántos años?", "how old? / how many years?", "多少岁？", "pregunta"),
        v("tener", "to have", "有", "verbo")
      ],
      [
        s("Tengo veinte años.", "I am twenty years old.", "我二十岁。"),
        s("¿Cuántos años tienes?", "How old are you?", "你多大了？"),
        s("Mi hermano tiene diez años.", "My brother is ten years old.", "我弟弟十岁。"),
        s("El número es cinco.", "The number is five.", "数字是五。"),
        s("Tengo dos hermanas.", "I have two sisters.", "我有两个姐妹。")
      ],
      [
        d("Eva", "¿Cuántos años tienes?", "How old are you?"),
        d("Leo", "Tengo veinticinco años.", "I am twenty-five years old."),
        d("Eva", "¿Y tu hermana?", "And your sister?"),
        d("Leo", "Tiene veinte años.", "She is twenty years old.")
      ],
      [
        e("Complete: Tengo veinte ___.", "años", ["años", "nombres", "días"]),
        e("What does «tres» mean?", "three", ["three", "two", "ten"]),
        e("Choose the correct question about age.", "¿Cuántos años tienes?", ["¿Cuántos años tienes?", "¿Cómo te llamas?", "¿De dónde eres?"])
      ]
    ),

    lesson(
      "es-a0-04", "A0", "Países e idiomas", "Basics",
      "Talk about countries, nationalities and languages.",
      [
        v("España", "Spain", "西班牙", "nombre propio"),
        v("Alemania", "Germany", "德国", "nombre propio"),
        v("China", "China", "中国", "nombre propio"),
        v("el país", "country", "国家", "sustantivo", "masculino"),
        v("el idioma", "language", "语言", "sustantivo", "masculino"),
        v("español", "Spanish", "西班牙语", "sustantivo"),
        v("alemán", "German", "德语", "sustantivo"),
        v("¿de dónde?", "where from?", "来自哪里？", "pregunta")
      ],
      [
        s("Soy de China.", "I am from China.", "我来自中国。"),
        s("Vivo en Alemania.", "I live in Germany.", "我住在德国。"),
        s("Hablo español.", "I speak Spanish.", "我说西班牙语。"),
        s("¿De dónde eres?", "Where are you from?", "你来自哪里？"),
        s("Mi idioma materno es el chino.", "My mother tongue is Chinese.", "我的母语是中文。")
      ],
      [
        d("Sara", "¿De dónde eres?", "Where are you from?"),
        d("Tomás", "Soy de España. ¿Y tú?", "I am from Spain. And you?"),
        d("Sara", "Soy de Alemania.", "I am from Germany."),
        d("Tomás", "¿Hablas español?", "Do you speak Spanish?"),
        d("Sara", "Sí, un poco.", "Yes, a little.")
      ],
      [
        e("What does «Alemania» mean?", "Germany", ["Germany", "Spain", "China"]),
        e("Complete: Hablo ___.", "español", ["español", "España", "alemán"]),
        e("Which question asks where someone is from?", "¿De dónde eres?", ["¿De dónde eres?", "¿Cuántos años tienes?", "¿Qué hora es?"])
      ]
    ),

    lesson(
      "es-a0-05", "A0", "La familia", "People",
      "Learn common family words and describe relatives.",
      [
        v("la familia", "family", "家庭", "sustantivo", "femenino"),
        v("la madre", "mother", "母亲", "sustantivo", "femenino"),
        v("el padre", "father", "父亲", "sustantivo", "masculino"),
        v("la hermana", "sister", "姐妹", "sustantivo", "femenino"),
        v("el hermano", "brother", "兄弟", "sustantivo", "masculino"),
        v("los padres", "parents", "父母", "sustantivo", "plural"),
        v("el hijo", "son", "儿子", "sustantivo", "masculino"),
        v("la hija", "daughter", "女儿", "sustantivo", "femenino")
      ],
      [
        s("Tengo una hermana.", "I have a sister.", "我有一个姐妹。"),
        s("Mi madre se llama Ana.", "My mother’s name is Ana.", "我妈妈叫安娜。"),
        s("Mi padre trabaja en un hospital.", "My father works in a hospital.", "我爸爸在医院工作。"),
        s("Tengo dos hermanos.", "I have two brothers.", "我有两个兄弟。"),
        s("Mi familia vive en Berlín.", "My family lives in Berlin.", "我家住在柏林。")
      ],
      [
        d("Lucía", "¿Tienes hermanos?", "Do you have siblings?"),
        d("Diego", "Sí, tengo un hermano y una hermana.", "Yes, I have a brother and a sister."),
        d("Lucía", "¿Cómo se llama tu hermana?", "What is your sister’s name?"),
        d("Diego", "Se llama Clara.", "Her name is Clara.")
      ],
      [
        e("What does «la madre» mean?", "mother", ["mother", "sister", "daughter"]),
        e("Complete: Mi ___ se llama Pedro. (father)", "padre", ["padre", "madre", "hija"]),
        e("Which word means “parents”?", "los padres", ["los padres", "los hijos", "las hermanas"])
      ]
    ),

    lesson(
      "es-a0-06", "A0", "Objetos cotidianos", "Everyday life",
      "Name common objects and use simple descriptions.",
      [
        v("el libro", "book", "书", "sustantivo", "masculino"),
        v("la mesa", "table", "桌子", "sustantivo", "femenino"),
        v("la silla", "chair", "椅子", "sustantivo", "femenino"),
        v("el teléfono", "phone", "电话", "sustantivo", "masculino"),
        v("la llave", "key", "钥匙", "sustantivo", "femenino"),
        v("la bolsa", "bag", "包", "sustantivo", "femenino"),
        v("el bolígrafo", "pen", "圆珠笔", "sustantivo", "masculino"),
        v("grande", "big", "大的", "adjetivo")
      ],
      [
        s("El libro está en la mesa.", "The book is on the table.", "书在桌子上。"),
        s("Mi teléfono es nuevo.", "My phone is new.", "我的手机是新的。"),
        s("La silla es pequeña.", "The chair is small.", "椅子很小。"),
        s("¿Dónde está mi llave?", "Where is my key?", "我的钥匙在哪里？"),
        s("Tengo una bolsa negra.", "I have a black bag.", "我有一个黑色的包。")
      ],
      [
        d("Nora", "¿Dónde está el bolígrafo?", "Where is the pen?"),
        d("Iván", "Está encima de la mesa.", "It is on the table."),
        d("Nora", "¿Y mi teléfono?", "And my phone?"),
        d("Iván", "Está en tu bolsa.", "It is in your bag.")
      ],
      [
        e("What does «el libro» mean?", "book", ["book", "table", "chair"]),
        e("Complete: ¿Dónde está mi ___? (key)", "llave", ["llave", "mesa", "bolsa"]),
        e("Which adjective means “big”?", "grande", ["grande", "pequeño", "nuevo"])
      ]
    ),

    // ==================== A1 ====================
    lesson(
      "es-a1-01", "A1", "En la cafetería", "Food and drink",
      "Order drinks and snacks politely.",
      [
        v("el café", "coffee", "咖啡", "sustantivo", "masculino"),
        v("el té", "tea", "茶", "sustantivo", "masculino"),
        v("el agua", "water", "水", "sustantivo", "femenino"),
        v("la leche", "milk", "牛奶", "sustantivo", "femenino"),
        v("el zumo", "juice", "果汁", "sustantivo", "masculino"),
        v("el bocadillo", "sandwich", "三明治", "sustantivo", "masculino"),
        v("la cuenta", "bill", "账单", "sustantivo", "femenino"),
        v("quisiera", "I would like", "我想要", "verbo")
      ],
      [
        s("Quisiera un café con leche.", "I would like a coffee with milk.", "我想要一杯拿铁咖啡。"),
        s("¿Me trae un vaso de agua, por favor?", "Could you bring me a glass of water, please?", "请给我一杯水好吗？"),
        s("Un bocadillo de queso, por favor.", "A cheese sandwich, please.", "请给我一个奶酪三明治。"),
        s("¿Cuánto cuesta el café?", "How much does the coffee cost?", "咖啡多少钱？"),
        s("La cuenta, por favor.", "The bill, please.", "请结账。")
      ],
      [
        d("Camarero", "Buenos días. ¿Qué desea?", "Good morning. What would you like?"),
        d("Cliente", "Quisiera un café con leche y un bocadillo.", "I would like a coffee with milk and a sandwich."),
        d("Camarero", "¿Algo más?", "Anything else?"),
        d("Cliente", "No, gracias. ¿Cuánto es?", "No, thank you. How much is it?"),
        d("Camarero", "Son seis euros.", "That is six euros.")
      ],
      [
        e("Complete: Quisiera ___ café.", "un", ["un", "una", "unos"]),
        e("How do you ask for the bill?", "La cuenta, por favor.", ["La cuenta, por favor.", "Buenos días.", "Hasta mañana."]),
        e("What does «¿Cuánto cuesta?» mean?", "How much does it cost?", ["How much does it cost?", "Where is it?", "What is your name?"])
      ]
    ),

    lesson(
      "es-a1-02", "A1", "La rutina diaria", "Daily life",
      "Describe your everyday routine.",
      [
        v("levantarse", "to get up", "起床", "verbo"),
        v("desayunar", "to have breakfast", "吃早餐", "verbo"),
        v("trabajar", "to work", "工作", "verbo"),
        v("estudiar", "to study", "学习", "verbo"),
        v("comer", "to eat lunch / eat", "吃饭", "verbo"),
        v("volver", "to return", "返回", "verbo"),
        v("cenar", "to have dinner", "吃晚餐", "verbo"),
        v("acostarse", "to go to bed", "上床睡觉", "verbo")
      ],
      [
        s("Me levanto a las siete.", "I get up at seven.", "我七点起床。"),
        s("Desayuno antes de trabajar.", "I have breakfast before work.", "我上班前吃早餐。"),
        s("Trabajo de lunes a viernes.", "I work from Monday to Friday.", "我周一到周五工作。"),
        s("Vuelvo a casa a las seis.", "I return home at six.", "我六点回家。"),
        s("Me acuesto a las once.", "I go to bed at eleven.", "我十一点睡觉。")
      ],
      [
        d("Marta", "¿A qué hora te levantas?", "What time do you get up?"),
        d("Pablo", "Me levanto a las siete.", "I get up at seven."),
        d("Marta", "¿Desayunas en casa?", "Do you have breakfast at home?"),
        d("Pablo", "Sí, normalmente tomo café y pan.", "Yes, I usually have coffee and bread.")
      ],
      [
        e("Complete: Me ___ a las siete. (get up)", "levanto", ["levanto", "acuesto", "vuelvo"]),
        e("What does «cenar» mean?", "to have dinner", ["to have dinner", "to study", "to work"]),
        e("Choose the correct translation: «Vuelvo a casa».", "I return home.", ["I return home.", "I leave work.", "I go to bed."])
      ]
    ),

    lesson(
      "es-a1-03", "A1", "La hora y las fechas", "Time",
      "Ask and answer questions about time and dates.",
      [
        v("la hora", "time / hour", "时间／小时", "sustantivo", "femenino"),
        v("el minuto", "minute", "分钟", "sustantivo", "masculino"),
        v("hoy", "today", "今天", "adverbio"),
        v("mañana", "tomorrow", "明天", "adverbio"),
        v("ayer", "yesterday", "昨天", "adverbio"),
        v("el lunes", "Monday", "星期一", "sustantivo", "masculino"),
        v("la fecha", "date", "日期", "sustantivo", "femenino"),
        v("temprano", "early", "早", "adverbio")
      ],
      [
        s("¿Qué hora es?", "What time is it?", "现在几点？"),
        s("Son las ocho y media.", "It is half past eight.", "现在八点半。"),
        s("La reunión es el lunes.", "The meeting is on Monday.", "会议在星期一。"),
        s("Hoy es el quince de mayo.", "Today is the fifteenth of May.", "今天是五月十五日。"),
        s("Mañana tengo tiempo.", "I have time tomorrow.", "我明天有时间。")
      ],
      [
        d("Elena", "¿Qué hora es?", "What time is it?"),
        d("Mario", "Son las nueve menos cuarto.", "It is a quarter to nine."),
        d("Elena", "¿A qué hora empieza la reunión?", "What time does the meeting start?"),
        d("Mario", "A las diez en punto.", "At ten o’clock sharp.")
      ],
      [
        e("What does «ayer» mean?", "yesterday", ["yesterday", "today", "tomorrow"]),
        e("Complete: Son las ocho y ___. (30 minutes)", "media", ["media", "cuarto", "cinco"]),
        e("Which phrase means “What time is it?”", "¿Qué hora es?", ["¿Qué hora es?", "¿Qué fecha es?", "¿Dónde estás?"])
      ]
    ),

    lesson(
      "es-a1-04", "A1", "Compras y precios", "Shopping",
      "Ask about prices and buy things in a shop.",
      [
        v("la tienda", "shop", "商店", "sustantivo", "femenino"),
        v("el precio", "price", "价格", "sustantivo", "masculino"),
        v("barato", "cheap", "便宜的", "adjetivo"),
        v("caro", "expensive", "贵的", "adjetivo"),
        v("el dinero", "money", "钱", "sustantivo", "masculino"),
        v("pagar", "to pay", "付款", "verbo"),
        v("en efectivo", "in cash", "现金支付", "expresión"),
        v("la tarjeta", "card", "卡", "sustantivo", "femenino")
      ],
      [
        s("¿Cuánto cuesta esta camiseta?", "How much is this T-shirt?", "这件T恤多少钱？"),
        s("Es demasiado caro.", "It is too expensive.", "太贵了。"),
        s("¿Puedo pagar con tarjeta?", "Can I pay by card?", "我可以刷卡吗？"),
        s("Pago en efectivo.", "I pay in cash.", "我用现金付款。"),
        s("La tienda está abierta.", "The shop is open.", "商店开着。")
      ],
      [
        d("Cliente", "¿Cuánto cuesta esta camiseta?", "How much is this T-shirt?"),
        d("Vendedor", "Cuesta veinte euros.", "It costs twenty euros."),
        d("Cliente", "¿Tiene una más barata?", "Do you have a cheaper one?"),
        d("Vendedor", "Sí, esta cuesta quince euros.", "Yes, this one costs fifteen euros."),
        d("Cliente", "Perfecto. Pago con tarjeta.", "Perfect. I’ll pay by card.")
      ],
      [
        e("What does «barato» mean?", "cheap", ["cheap", "expensive", "open"]),
        e("Complete: ¿Puedo pagar con ___?", "tarjeta", ["tarjeta", "tienda", "precio"]),
        e("Which phrase means “in cash”?", "en efectivo", ["en efectivo", "con tarjeta", "demasiado caro"])
      ]
    ),

    lesson(
      "es-a1-05", "A1", "Comida y bebida", "Food",
      "Talk about food, meals and preferences.",
      [
        v("el pan", "bread", "面包", "sustantivo", "masculino"),
        v("el arroz", "rice", "米饭", "sustantivo", "masculino"),
        v("la fruta", "fruit", "水果", "sustantivo", "femenino"),
        v("la verdura", "vegetables", "蔬菜", "sustantivo", "femenino"),
        v("el pollo", "chicken", "鸡肉", "sustantivo", "masculino"),
        v("el pescado", "fish", "鱼肉", "sustantivo", "masculino"),
        v("tener hambre", "to be hungry", "饿", "expresión"),
        v("tener sed", "to be thirsty", "渴", "expresión")
      ],
      [
        s("Me gusta la fruta.", "I like fruit.", "我喜欢水果。"),
        s("Comemos arroz con verduras.", "We eat rice with vegetables.", "我们吃蔬菜米饭。"),
        s("¿Quieres pollo o pescado?", "Would you like chicken or fish?", "你想吃鸡肉还是鱼肉？"),
        s("Tengo hambre.", "I am hungry.", "我饿了。"),
        s("¿Me das un poco de agua?", "Can you give me some water?", "你能给我一点水吗？")
      ],
      [
        d("Sofía", "¿Qué quieres comer?", "What do you want to eat?"),
        d("Andrés", "Quiero pollo con arroz.", "I want chicken with rice."),
        d("Sofía", "¿Quieres también una ensalada?", "Would you also like a salad?"),
        d("Andrés", "Sí, y un poco de agua, por favor.", "Yes, and a little water, please.")
      ],
      [
        e("What does «el pescado» mean?", "fish", ["fish", "chicken", "bread"]),
        e("Complete: Tengo ___. I am hungry.", "hambre", ["hambre", "sed", "fruta"]),
        e("Which phrase means “vegetables”?", "la verdura", ["la verdura", "el arroz", "el pan"])
      ]
    ),

    lesson(
      "es-a1-06", "A1", "Aficiones y fines de semana", "Free time",
      "Describe hobbies and weekend activities.",
      [
        v("leer", "to read", "阅读", "verbo"),
        v("correr", "to run", "跑步", "verbo"),
        v("nadar", "to swim", "游泳", "verbo"),
        v("escuchar música", "to listen to music", "听音乐", "expresión"),
        v("ver una película", "to watch a film", "看电影", "expresión"),
        v("salir con amigos", "to go out with friends", "和朋友出去", "expresión"),
        v("el fin de semana", "weekend", "周末", "sustantivo", "masculino"),
        v("preferir", "to prefer", "更喜欢", "verbo")
      ],
      [
        s("Me gusta leer por la noche.", "I like reading at night.", "我喜欢晚上阅读。"),
        s("Los sábados voy a nadar.", "I go swimming on Saturdays.", "我星期六去游泳。"),
        s("Prefiero ver una película.", "I prefer watching a film.", "我更喜欢看电影。"),
        s("¿Qué haces los fines de semana?", "What do you do at weekends?", "你周末做什么？"),
        s("A veces salgo con mis amigos.", "Sometimes I go out with my friends.", "我有时和朋友出去。")
      ],
      [
        d("Clara", "¿Qué haces este fin de semana?", "What are you doing this weekend?"),
        d("Jorge", "Voy a ver una película.", "I am going to watch a film."),
        d("Clara", "¿Quieres salir a cenar después?", "Do you want to go out for dinner afterwards?"),
        d("Jorge", "¡Claro! Me parece una buena idea.", "Of course! That sounds like a good idea.")
      ],
      [
        e("What does «leer» mean?", "to read", ["to read", "to run", "to swim"]),
        e("Complete: Me gusta escuchar ___.", "música", ["música", "mesa", "precio"]),
        e("Which phrase means “weekend”?", "el fin de semana", ["el fin de semana", "la mañana", "la fecha"])
      ]
    ),

    // ==================== A2 ====================
    lesson(
      "es-a2-01", "A2", "Moverse por la ciudad", "Travel",
      "Ask for directions and use public transport.",
      [
        v("la estación", "station", "车站", "sustantivo", "femenino"),
        v("la parada", "stop", "站点", "sustantivo", "femenino"),
        v("el autobús", "bus", "公交车", "sustantivo", "masculino"),
        v("el tren", "train", "火车", "sustantivo", "masculino"),
        v("girar", "to turn", "转弯", "verbo"),
        v("seguir recto", "to go straight ahead", "直走", "expresión"),
        v("cerca de", "near", "在……附近", "expresión"),
        v("lejos de", "far from", "离……远", "expresión")
      ],
      [
        s("¿Dónde está la estación de tren?", "Where is the train station?", "火车站在哪里？"),
        s("Sigue recto y gira a la derecha.", "Go straight ahead and turn right.", "直走然后右转。"),
        s("La parada está cerca del banco.", "The stop is near the bank.", "车站在银行附近。"),
        s("¿Qué autobús va al centro?", "Which bus goes to the city centre?", "哪路公交车去市中心？"),
        s("La estación está lejos de aquí.", "The station is far from here.", "车站离这里很远。")
      ],
      [
        d("Turista", "Perdone, ¿cómo llego al centro?", "Excuse me, how do I get to the city centre?"),
        d("Vecina", "Siga recto y tome el autobús número cinco.", "Go straight ahead and take bus number five."),
        d("Turista", "¿Dónde está la parada?", "Where is the stop?"),
        d("Vecina", "Está enfrente del supermercado.", "It is opposite the supermarket."),
        d("Turista", "Muchas gracias por su ayuda.", "Thank you very much for your help.")
      ],
      [
        e("What does «girar a la derecha» mean?", "to turn right", ["to turn right", "to turn left", "to go straight"]),
        e("Complete: ¿Dónde está la ___ de tren?", "estación", ["estación", "fruta", "cuenta"]),
        e("Which phrase means “near”?", "cerca de", ["cerca de", "lejos de", "en efectivo"])
      ]
    ),

    lesson(
      "es-a2-02", "A2", "Concertar citas", "Communication",
      "Arrange appointments and suggest suitable times.",
      [
        v("la cita", "appointment", "预约", "sustantivo", "femenino"),
        v("quedar", "to meet / arrange to meet", "约见", "verbo"),
        v("disponible", "available", "有空的", "adjetivo"),
        v("el horario", "schedule", "时间安排", "sustantivo", "masculino"),
        v("cancelar", "to cancel", "取消", "verbo"),
        v("cambiar", "to change", "更改", "verbo"),
        v("confirmar", "to confirm", "确认", "verbo"),
        v("¿te viene bien?", "does that work for you?", "这个时间你方便吗？", "pregunta")
      ],
      [
        s("¿Te viene bien el martes?", "Does Tuesday work for you?", "星期二你方便吗？"),
        s("Tengo una cita a las diez.", "I have an appointment at ten.", "我十点有个预约。"),
        s("¿Podemos cambiar la hora?", "Can we change the time?", "我们能改一下时间吗？"),
        s("Estoy disponible por la tarde.", "I am available in the afternoon.", "我下午有空。"),
        s("Te confirmo la cita por correo.", "I will confirm the appointment by email.", "我会通过邮件确认预约。")
      ],
      [
        d("Laura", "¿Podemos quedar el jueves?", "Can we meet on Thursday?"),
        d("Miguel", "El jueves no puedo. ¿Te viene bien el viernes?", "I cannot on Thursday. Does Friday work for you?"),
        d("Laura", "Sí, estoy disponible después de las tres.", "Yes, I am available after three."),
        d("Miguel", "Perfecto. Quedamos a las cuatro.", "Perfect. Let’s meet at four."),
        d("Laura", "De acuerdo, nos vemos entonces.", "All right, see you then.")
      ],
      [
        e("What does «cancelar» mean?", "to cancel", ["to cancel", "to confirm", "to meet"]),
        e("Complete: ¿Te ___ bien el viernes?", "viene", ["viene", "tiene", "hace"]),
        e("Which phrase means “available”?", "disponible", ["disponible", "caro", "temprano"])
      ]
    ),

    lesson(
      "es-a2-03", "A2", "Viajes y alojamiento", "Travel",
      "Book accommodation and discuss travel plans.",
      [
        v("el alojamiento", "accommodation", "住宿", "sustantivo", "masculino"),
        v("la reserva", "reservation", "预订", "sustantivo", "femenino"),
        v("la habitación", "room", "房间", "sustantivo", "femenino"),
        v("la recepción", "reception", "前台", "sustantivo", "femenino"),
        v("el equipaje", "luggage", "行李", "sustantivo", "masculino"),
        v("el pasaporte", "passport", "护照", "sustantivo", "masculino"),
        v("registrarse", "to check in", "办理入住", "verbo"),
        v("la salida", "departure / exit", "出发／出口", "sustantivo", "femenino")
      ],
      [
        s("Tengo una reserva a nombre de García.", "I have a reservation under the name García.", "我以加西亚的名字预订了房间。"),
        s("¿A qué hora es el desayuno?", "What time is breakfast?", "早餐几点开始？"),
        s("La habitación tiene vistas al mar.", "The room has a sea view.", "房间可以看到海景。"),
        s("Necesito dejar mi equipaje.", "I need to leave my luggage.", "我需要寄存行李。"),
        s("El tren sale a las nueve.", "The train leaves at nine.", "火车九点出发。")
      ],
      [
        d("Recepcionista", "Buenas tardes. ¿Tiene una reserva?", "Good afternoon. Do you have a reservation?"),
        d("Huésped", "Sí, a nombre de García.", "Yes, under the name García."),
        d("Recepcionista", "Perfecto. ¿Me muestra su pasaporte?", "Perfect. Could you show me your passport?"),
        d("Huésped", "Aquí lo tiene. ¿A qué hora es el desayuno?", "Here it is. What time is breakfast?"),
        d("Recepcionista", "De siete a diez de la mañana.", "From seven to ten in the morning.")
      ],
      [
        e("What does «la habitación» mean?", "room", ["room", "passport", "luggage"]),
        e("Complete: Tengo una ___.", "reserva", ["reserva", "salida", "recepción"]),
        e("What does «registrarse» mean in a hotel?", "to check in", ["to check in", "to check out", "to book a flight"])
      ]
    ),

    lesson(
      "es-a2-04", "A2", "En el médico", "Health",
      "Describe common symptoms and communicate with a doctor.",
      [
        v("el médico", "doctor", "医生", "sustantivo", "masculino"),
        v("la consulta", "consultation", "诊疗／咨询", "sustantivo", "femenino"),
        v("el dolor", "pain", "疼痛", "sustantivo", "masculino"),
        v("la cabeza", "head", "头", "sustantivo", "femenino"),
        v("la garganta", "throat", "喉咙", "sustantivo", "femenino"),
        v("la fiebre", "fever", "发烧", "sustantivo", "femenino"),
        v("toser", "to cough", "咳嗽", "verbo"),
        v("descansar", "to rest", "休息", "verbo")
      ],
      [
        s("Me duele la cabeza.", "My head hurts.", "我头疼。"),
        s("Tengo dolor de garganta.", "I have a sore throat.", "我喉咙痛。"),
        s("Tengo fiebre desde ayer.", "I have had a fever since yesterday.", "我从昨天开始发烧。"),
        s("¿Desde cuándo se siente mal?", "Since when have you been feeling unwell?", "您从什么时候开始不舒服？"),
        s("Debe descansar y beber agua.", "You should rest and drink water.", "您应该休息并喝水。")
      ],
      [
        d("Médica", "Buenos días. ¿Qué le pasa?", "Good morning. What is the matter?"),
        d("Paciente", "Me duele la garganta y tengo tos.", "My throat hurts and I have a cough."),
        d("Médica", "¿Tiene fiebre?", "Do you have a fever?"),
        d("Paciente", "Sí, desde anoche.", "Yes, since last night."),
        d("Médica", "Descanse y beba muchos líquidos.", "Rest and drink plenty of fluids.")
      ],
      [
        e("What does «la fiebre» mean?", "fever", ["fever", "head", "throat"]),
        e("Complete: Me ___ la cabeza.", "duele", ["duele", "tose", "descansa"]),
        e("Which word means “to rest”?", "descansar", ["descansar", "toser", "pagar"])
      ]
    ),

    lesson(
      "es-a2-05", "A2", "El tiempo y los planes", "Weather",
      "Describe the weather and make plans.",
      [
        v("el tiempo", "weather", "天气", "sustantivo", "masculino"),
        v("hacer sol", "to be sunny", "晴天", "expresión"),
        v("llover", "to rain", "下雨", "verbo"),
        v("nevar", "to snow", "下雪", "verbo"),
        v("el viento", "wind", "风", "sustantivo", "masculino"),
        v("nublado", "cloudy", "多云的", "adjetivo"),
        v("la temperatura", "temperature", "温度", "sustantivo", "femenino"),
        v("llevar", "to wear / take", "穿／带", "verbo")
      ],
      [
        s("Hoy hace mucho sol.", "It is very sunny today.", "今天阳光充足。"),
        s("Mañana va a llover.", "It is going to rain tomorrow.", "明天会下雨。"),
        s("Hace frío y hay mucho viento.", "It is cold and very windy.", "天气很冷，风也很大。"),
        s("¿Qué tiempo hará el fin de semana?", "What will the weather be like at the weekend?", "周末天气会怎么样？"),
        s("Lleva una chaqueta por si hace frío.", "Take a jacket in case it is cold.", "带件夹克，以防天气冷。")
      ],
      [
        d("Inés", "¿Vamos a la playa mañana?", "Shall we go to the beach tomorrow?"),
        d("Raúl", "No sé. Parece que va a llover.", "I’m not sure. It looks like it is going to rain."),
        d("Inés", "Podemos visitar un museo.", "We can visit a museum."),
        d("Raúl", "Buena idea. Así no dependemos del tiempo.", "Good idea. That way we do not depend on the weather.")
      ],
      [
        e("What does «llover» mean?", "to rain", ["to rain", "to snow", "to shine"]),
        e("Complete: Hoy está ___. (cloudy)", "nublado", ["nublado", "soleado", "caro"]),
        e("Which phrase means “It is sunny”?", "Hace sol.", ["Hace sol.", "Hace frío.", "Hay niebla."])
      ]
    ),

    lesson(
      "es-a2-06", "A2", "La vivienda y el barrio", "Home",
      "Describe your home and local neighbourhood.",
      [
        v("el alquiler", "rent", "租金", "sustantivo", "masculino"),
        v("el piso", "flat / apartment", "公寓", "sustantivo", "masculino"),
        v("la habitación", "room", "房间", "sustantivo", "femenino"),
        v("el vecino", "neighbour (male)", "邻居（男性）", "sustantivo", "masculino"),
        v("el barrio", "neighbourhood", "街区", "sustantivo", "masculino"),
        v("la tienda de comestibles", "grocery shop", "食品杂货店", "expresión"),
        v("tranquilo", "quiet / peaceful", "安静的", "adjetivo"),
        v("mudarse", "to move house", "搬家", "verbo")
      ],
      [
        s("Vivo en un piso de dos habitaciones.", "I live in a two-room flat.", "我住在一套有两个房间的公寓里。"),
        s("El alquiler es bastante caro.", "The rent is quite expensive.", "租金相当贵。"),
        s("Mi barrio es tranquilo y seguro.", "My neighbourhood is quiet and safe.", "我住的街区安静又安全。"),
        s("Hay un supermercado cerca de casa.", "There is a supermarket near my home.", "我家附近有一家超市。"),
        s("Nos mudamos el mes que viene.", "We are moving next month.", "我们下个月搬家。")
      ],
      [
        d("Claudia", "¿Te gusta tu nuevo piso?", "Do you like your new flat?"),
        d("Pedro", "Sí, es luminoso y está cerca del centro.", "Yes, it is bright and close to the centre."),
        d("Claudia", "¿Y cómo es el barrio?", "And what is the neighbourhood like?"),
        d("Pedro", "Es tranquilo, y hay muchas tiendas.", "It is quiet, and there are many shops.")
      ],
      [
        e("What does «el alquiler» mean?", "rent", ["rent", "neighbour", "room"]),
        e("Complete: Mi ___ es tranquilo.", "barrio", ["barrio", "pasaporte", "horario"]),
        e("Which verb means “to move house”?", "mudarse", ["mudarse", "llover", "confirmar"])
      ]
    ),

    // ==================== B1 ====================
    lesson(
      "es-b1-01", "B1", "Opiniones y argumentos", "Communication",
      "Express opinions, give reasons and respond politely.",
      [
        v("la opinión", "opinion", "观点", "sustantivo", "femenino"),
        v("estar de acuerdo", "to agree", "同意", "expresión"),
        v("estar en desacuerdo", "to disagree", "不同意", "expresión"),
        v("sin embargo", "however", "然而", "conector"),
        v("por lo tanto", "therefore", "因此", "conector"),
        v("la ventaja", "advantage", "优势", "sustantivo", "femenino"),
        v("la desventaja", "disadvantage", "劣势", "sustantivo", "femenino"),
        v("desde mi punto de vista", "from my point of view", "在我看来", "expresión")
      ],
      [
        s("Desde mi punto de vista, es una buena solución.", "From my point of view, it is a good solution.", "在我看来，这是一个好办法。"),
        s("Estoy de acuerdo contigo.", "I agree with you.", "我同意你的看法。"),
        s("Sin embargo, hay que considerar los costes.", "However, the costs must be considered.", "然而，必须考虑成本。"),
        s("Una ventaja es que ahorra tiempo.", "One advantage is that it saves time.", "一个优势是它节省时间。"),
        s("Por lo tanto, propongo otra opción.", "Therefore, I propose another option.", "因此，我提出另一个方案。")
      ],
      [
        d("Elena", "Creo que deberíamos trabajar desde casa más a menudo.", "I think we should work from home more often."),
        d("Marcos", "Estoy de acuerdo, porque ahorra tiempo.", "I agree because it saves time."),
        d("Elena", "Sin embargo, algunas personas necesitan contacto personal.", "However, some people need personal contact."),
        d("Marcos", "Es verdad. Por eso necesitamos un modelo flexible.", "That is true. That is why we need a flexible model.")
      ],
      [
        e("What does «sin embargo» mean?", "however", ["however", "therefore", "for example"]),
        e("Complete: Estoy de ___ contigo.", "acuerdo", ["acuerdo", "opinión", "ventaja"]),
        e("Which phrase introduces a personal viewpoint?", "Desde mi punto de vista", ["Desde mi punto de vista", "Hasta luego", "Por favor"])
      ]
    ),

    lesson(
      "es-b1-02", "B1", "Problemas en el trabajo", "Work",
      "Discuss workplace difficulties and suggest solutions.",
      [
        v("el plazo", "deadline", "截止日期", "sustantivo", "masculino"),
        v("la tarea", "task", "任务", "sustantivo", "femenino"),
        v("la responsabilidad", "responsibility", "责任", "sustantivo", "femenino"),
        v("la reunión", "meeting", "会议", "sustantivo", "femenino"),
        v("resolver", "to solve", "解决", "verbo"),
        v("posponer", "to postpone", "推迟", "verbo"),
        v("la carga de trabajo", "workload", "工作量", "expresión"),
        v("llegar a un acuerdo", "to reach an agreement", "达成一致", "expresión")
      ],
      [
        s("No creo que podamos terminar antes del plazo.", "I do not think we can finish before the deadline.", "我认为我们无法在截止日期前完成。"),
        s("Tenemos que repartir las tareas.", "We have to divide up the tasks.", "我们必须分配任务。"),
        s("La carga de trabajo es demasiado alta.", "The workload is too high.", "工作量太大了。"),
        s("Podríamos posponer la reunión.", "We could postpone the meeting.", "我们可以推迟会议。"),
        s("Necesitamos encontrar una solución práctica.", "We need to find a practical solution.", "我们需要找到一个切实可行的解决方案。")
      ],
      [
        d("Jefa", "¿Cómo va el proyecto?", "How is the project going?"),
        d("Daniel", "Vamos retrasados porque hay demasiadas tareas.", "We are behind schedule because there are too many tasks."),
        d("Jefa", "¿Qué podemos hacer para resolverlo?", "What can we do to solve it?"),
        d("Daniel", "Podríamos repartir el trabajo y ampliar el plazo.", "We could divide the work and extend the deadline."),
        d("Jefa", "De acuerdo. Vamos a revisar el plan.", "All right. Let’s review the plan.")
      ],
      [
        e("What does «el plazo» mean?", "deadline", ["deadline", "meeting", "solution"]),
        e("Complete: Tenemos que ___ las tareas.", "repartir", ["repartir", "llover", "mudarse"]),
        e("Which phrase means “to reach an agreement”?", "llegar a un acuerdo", ["llegar a un acuerdo", "estar de viaje", "tener hambre"])
      ]
    ),

    lesson(
      "es-b1-03", "B1", "Educación y aprendizaje", "Education",
      "Discuss learning methods, study experiences and goals.",
      [
        v("el aprendizaje", "learning", "学习", "sustantivo", "masculino"),
        v("la asignatura", "subject", "学科", "sustantivo", "femenino"),
        v("el examen", "exam", "考试", "sustantivo", "masculino"),
        v("la calificación", "grade / mark", "成绩", "sustantivo", "femenino"),
        v("mejorar", "to improve", "提高", "verbo"),
        v("repasar", "to revise", "复习", "verbo"),
        v("apuntarse a", "to sign up for", "报名参加", "expresión"),
        v("el objetivo", "goal", "目标", "sustantivo", "masculino")
      ],
      [
        s("Quiero mejorar mi español hablado.", "I want to improve my spoken Spanish.", "我想提高西班牙语口语。"),
        s("Tengo que repasar antes del examen.", "I have to revise before the exam.", "考试前我必须复习。"),
        s("La asignatura más difícil es matemáticas.", "The most difficult subject is mathematics.", "最难的学科是数学。"),
        s("Mi objetivo es hablar con más fluidez.", "My goal is to speak more fluently.", "我的目标是说得更流利。"),
        s("Me he apuntado a un curso de idiomas.", "I have signed up for a language course.", "我报名参加了一门语言课程。")
      ],
      [
        d("Julia", "¿Cómo preparas los exámenes?", "How do you prepare for exams?"),
        d("Nicolás", "Repaso un poco cada día y hago ejercicios.", "I revise a little every day and do exercises."),
        d("Julia", "¿Te ayuda estudiar con otras personas?", "Does studying with other people help you?"),
        d("Nicolás", "Sí, porque podemos explicar las cosas mutuamente.", "Yes, because we can explain things to each other.")
      ],
      [
        e("What does «repasar» mean?", "to revise", ["to revise", "to forget", "to postpone"]),
        e("Complete: Mi ___ es hablar con fluidez.", "objetivo", ["objetivo", "examen", "asignatura"]),
        e("Which phrase means “to sign up for a course”?", "apuntarse a un curso", ["apuntarse a un curso", "cancelar una tarea", "llegar tarde"])
      ]
    ),

    lesson(
      "es-b1-04", "B1", "Medio ambiente y sostenibilidad", "Environment",
      "Discuss environmental issues and sustainable choices.",
      [
        v("el medio ambiente", "environment", "环境", "expresión"),
        v("la sostenibilidad", "sustainability", "可持续性", "sustantivo", "femenino"),
        v("el reciclaje", "recycling", "回收利用", "sustantivo", "masculino"),
        v("la contaminación", "pollution", "污染", "sustantivo", "femenino"),
        v("reducir", "to reduce", "减少", "verbo"),
        v("reutilizar", "to reuse", "重复使用", "verbo"),
        v("el consumo", "consumption", "消费", "sustantivo", "masculino"),
        v("la energía renovable", "renewable energy", "可再生能源", "expresión")
      ],
      [
        s("Debemos reducir el consumo de plástico.", "We should reduce plastic consumption.", "我们应该减少塑料消耗。"),
        s("El reciclaje ayuda a disminuir los residuos.", "Recycling helps reduce waste.", "回收有助于减少废弃物。"),
        s("La energía solar es una fuente renovable.", "Solar energy is a renewable source.", "太阳能是一种可再生能源。"),
        s("El transporte público puede reducir la contaminación.", "Public transport can reduce pollution.", "公共交通可以减少污染。"),
        s("Es importante consumir de forma responsable.", "It is important to consume responsibly.", "负责任地消费很重要。")
      ],
      [
        d("Paula", "¿Qué podemos hacer para proteger el medio ambiente?", "What can we do to protect the environment?"),
        d("Hugo", "Podemos usar menos plástico y reciclar más.", "We can use less plastic and recycle more."),
        d("Paula", "También podríamos ir al trabajo en bicicleta.", "We could also cycle to work."),
        d("Hugo", "Sí, así reducimos las emisiones.", "Yes, that way we reduce emissions.")
      ],
      [
        e("What does «la contaminación» mean?", "pollution", ["pollution", "recycling", "consumption"]),
        e("Complete: Debemos ___ el uso de plástico.", "reducir", ["reducir", "aumentar", "olvidar"]),
        e("Which is a renewable energy source?", "la energía solar", ["la energía solar", "el carbón", "el petróleo"])
      ]
    ),

    lesson(
      "es-b1-05", "B1", "Medios de comunicación y vida digital", "Technology",
      "Discuss online information, digital habits and privacy.",
      [
        v("las redes sociales", "social media", "社交媒体", "expresión"),
        v("la privacidad", "privacy", "隐私", "sustantivo", "femenino"),
        v("la contraseña", "password", "密码", "sustantivo", "femenino"),
        v("la fuente", "source", "来源", "sustantivo", "femenino"),
        v("compartir", "to share", "分享", "verbo"),
        v("verificar", "to verify", "核实", "verbo"),
        v("la noticia", "news item", "新闻", "sustantivo", "femenino"),
        v("la desinformación", "misinformation", "错误信息", "sustantivo", "femenino")
      ],
      [
        s("Antes de compartir una noticia, verifico la fuente.", "Before sharing a news item, I verify the source.", "分享新闻前，我会核实来源。"),
        s("Es importante proteger la privacidad en internet.", "It is important to protect privacy online.", "保护网络隐私很重要。"),
        s("Nunca compartas tu contraseña.", "Never share your password.", "永远不要分享你的密码。"),
        s("Las redes sociales facilitan la comunicación.", "Social media makes communication easier.", "社交媒体让沟通更方便。"),
        s("La desinformación puede difundirse rápidamente.", "Misinformation can spread quickly.", "错误信息可能迅速传播。")
      ],
      [
        d("Irene", "¿Lees las noticias en las redes sociales?", "Do you read the news on social media?"),
        d("Óscar", "A veces, pero siempre verifico la fuente.", "Sometimes, but I always verify the source."),
        d("Irene", "¿Por qué es tan importante?", "Why is it so important?"),
        d("Óscar", "Porque no toda la información que circula es fiable.", "Because not all information circulating is reliable.")
      ],
      [
        e("What does «la privacidad» mean?", "privacy", ["privacy", "password", "news"]),
        e("Complete: Antes de compartir, debo ___ la fuente.", "verificar", ["verificar", "olvidar", "reutilizar"]),
        e("Which word means “misinformation”?", "la desinformación", ["la desinformación", "la contraseña", "la sostenibilidad"])
      ]
    ),

    lesson(
      "es-b1-06", "B1", "Experiencias y planes de futuro", "Life experiences",
      "Describe past achievements and discuss future plans.",
      [
        v("la experiencia", "experience", "经历／经验", "sustantivo", "femenino"),
        v("conseguir", "to manage / achieve", "设法做到／实现", "verbo"),
        v("lograr", "to achieve", "实现", "verbo"),
        v("el objetivo", "goal", "目标", "sustantivo", "masculino"),
        v("la oportunidad", "opportunity", "机会", "sustantivo", "femenino"),
        v("enfrentarse a", "to face", "面对", "expresión"),
        v("dentro de unos años", "in a few years", "几年后", "expresión"),
        v("tener previsto", "to plan / intend", "计划", "expresión")
      ],
      [
        s("El año pasado conseguí terminar el proyecto.", "Last year I managed to finish the project.", "去年我成功完成了这个项目。"),
        s("Fue una experiencia muy enriquecedora.", "It was a very enriching experience.", "那是一次非常有收获的经历。"),
        s("Me gustaría trabajar en otro país.", "I would like to work in another country.", "我想在另一个国家工作。"),
        s("Tenemos previsto mudarnos el próximo año.", "We plan to move next year.", "我们计划明年搬家。"),
        s("Cada dificultad me ha enseñado algo nuevo.", "Every difficulty has taught me something new.", "每一次困难都让我学到新东西。")
      ],
      [
        d("Carla", "¿Cuál ha sido tu experiencia más interesante?", "What has been your most interesting experience?"),
        d("Mateo", "Trabajar en el extranjero durante un año.", "Working abroad for a year."),
        d("Carla", "¿Qué aprendiste de esa experiencia?", "What did you learn from that experience?"),
        d("Mateo", "Aprendí a adaptarme a situaciones nuevas.", "I learned to adapt to new situations."),
        d("Carla", "¿Qué planes tienes para el futuro?", "What plans do you have for the future?"),
        d("Mateo", "Tengo previsto seguir estudiando y mejorar mi español.", "I plan to continue studying and improve my Spanish.")
      ],
      [
        e("What does «conseguí terminar el proyecto» mean?", "I managed to finish the project", ["I managed to finish the project", "I forgot the project", "I postponed the project"]),
        e("Complete: Tenemos ___ mudarnos el próximo año.", "previsto", ["previsto", "llovido", "pagado"]),
        e("Which phrase means “in a few years”?", "dentro de unos años", ["dentro de unos años", "ayer por la mañana", "a las ocho en punto"])
      ]
    )
  ];

  const course = {
    code: "es",
    language: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
    levels: ["A0", "A1", "A2", "B1"],
    lessons
  };

  window.WorldLinguaLanguages = window.WorldLinguaLanguages || {};
  window.WorldLinguaLanguages.es = course;
})();
