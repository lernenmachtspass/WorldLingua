
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
    // A0 — 01
    lesson("fr-a0-01", "A0", "Bonjour ! Les salutations", "Salutations",
      "Apprenez à saluer quelqu’un, à remercier et à prendre congé.",
      [
        v("Bonjour", "Hello / Good morning", "你好；日安", "salutation"),
        v("Salut", "Hi / Bye", "嗨；再见（非正式）", "salutation"),
        v("Bonsoir", "Good evening", "晚上好", "salutation"),
        v("Bonne nuit", "Good night", "晚安（睡前）", "expression"),
        v("Au revoir", "Goodbye", "再见", "expression"),
        v("Merci", "Thank you", "谢谢", "expression"),
        v("S'il vous plaît", "Please", "请（礼貌）", "expression"),
        v("Pardon", "Sorry / Excuse me", "对不起；劳驾", "expression")
      ],
      [
        s("Bonjour, comment allez-vous ?", "Hello, how are you?", "您好，您好吗？"),
        s("Salut, ça va ?", "Hi, how are you?", "嗨，你好吗？"),
        s("Merci beaucoup.", "Thank you very much.", "非常感谢。"),
        s("Un café, s'il vous plaît.", "A coffee, please.", "请给我一杯咖啡。"),
        s("Au revoir et bonne journée !", "Goodbye and have a nice day!", "再见，祝您今天愉快！")
      ],
      [
        d("A", "Bonjour !", "Hello!"),
        d("B", "Bonjour ! Comment allez-vous ?", "Hello! How are you?"),
        d("A", "Très bien, merci. Et vous ?", "Very well, thank you. And you?"),
        d("B", "Très bien, merci. Au revoir !", "Very well, thank you. Goodbye!"),
        d("A", "Au revoir !", "Goodbye!")
      ],
      [
        e("Comment dit-on « 谢谢 » en français ?", "Merci", ["Merci", "Pardon", "Salut"]),
        e("Quelle expression utilise-t-on avant de dormir ?", "Bonne nuit", ["Bonjour", "Bonne nuit", "Bonsoir"]),
        e("Complétez : Un thé, ___ plaît.", "s'il vous", ["s'il vous", "au revoir", "merci"])
      ]
    ),

    // A0 — 02
    lesson("fr-a0-02", "A0", "Je m'appelle…", "Présentations",
      "Présentez-vous, dites votre nom et demandez le nom d’une autre personne.",
      [
        v("Je", "I", "我", "pronom"),
        v("m'appeler", "to be called", "名叫", "verbe"),
        v("Comment", "How / What", "怎样；什么", "adverbe"),
        v("Vous", "You (formal/plural)", "您；你们", "pronom"),
        v("Tu", "You (informal)", "你（非正式）", "pronom"),
        v("Enchanté(e)", "Nice to meet you", "很高兴认识你", "expression"),
        v("être", "to be", "是", "verbe"),
        v("habiter", "to live", "居住", "verbe")
      ],
      [
        s("Je m'appelle Marie.", "My name is Marie.", "我叫玛丽。"),
        s("Comment vous appelez-vous ?", "What is your name? (formal)", "您叫什么名字？"),
        s("Comment tu t'appelles ?", "What is your name? (informal)", "你叫什么名字？"),
        s("Je suis allemand.", "I am German. (male speaker)", "我是德国人（男性）。"),
        s("J'habite à Berlin.", "I live in Berlin.", "我住在柏林。")
      ],
      [
        d("A", "Bonjour ! Je m'appelle Paul.", "Hello! My name is Paul."),
        d("B", "Bonjour Paul. Moi, c'est Anna.", "Hello Paul. I'm Anna."),
        d("A", "Enchanté !", "Nice to meet you!"),
        d("B", "Enchantée ! Vous habitez où ?", "Nice to meet you! Where do you live?"),
        d("A", "J'habite à Paris.", "I live in Paris.")
      ],
      [
        e("Comment demande-t-on le nom de quelqu’un poliment ?", "Comment vous appelez-vous ?", ["Comment vous appelez-vous ?", "Vous habitez où ?", "Ça va ?"]),
        e("Complétez : Je ___ Paul.", "m'appelle", ["m'appelle", "habite", "suis appelé"]),
        e("Que signifie « Enchanté » ?", "Nice to meet you", ["Goodbye", "Nice to meet you", "Good night"])
      ]
    ),

    // A0 — 03
    lesson("fr-a0-03", "A0", "Les nombres et l’âge", "Nombres",
      "Apprenez les nombres de base et à dire votre âge.",
      [
        v("zéro", "zero", "零", "nom"),
        v("un", "one", "一", "nombre"),
        v("deux", "two", "二", "nombre"),
        v("trois", "three", "三", "nombre"),
        v("dix", "ten", "十", "nombre"),
        v("vingt", "twenty", "二十", "nombre"),
        v("l'âge", "age", "年龄", "nom", "masculin"),
        v("avoir", "to have", "有；用于表达年龄", "verbe")
      ],
      [
        s("J'ai vingt ans.", "I am twenty years old.", "我二十岁。"),
        s("Quel âge as-tu ?", "How old are you?", "你多大了？"),
        s("J'ai trente ans.", "I am thirty years old.", "我三十岁。"),
        s("Mon numéro est le cinq.", "My number is five.", "我的号码是五。"),
        s("Nous sommes trois.", "There are three of us.", "我们有三个人。")
      ],
      [
        d("A", "Quel âge as-tu ?", "How old are you?"),
        d("B", "J'ai vingt-cinq ans. Et toi ?", "I'm twenty-five. And you?"),
        d("A", "J'ai vingt-huit ans.", "I'm twenty-eight."),
        d("B", "D'accord, merci !", "All right, thank you!")
      ],
      [
        e("Comment dit-on « 十 » en français ?", "dix", ["deux", "dix", "vingt"]),
        e("Complétez : J'___ dix-huit ans.", "ai", ["ai", "suis", "est"]),
        e("Quelle question demande l’âge ?", "Quel âge as-tu ?", ["Comment tu t'appelles ?", "Quel âge as-tu ?", "Où habites-tu ?"])
      ]
    ),

    // A0 — 04
    lesson("fr-a0-04", "A0", "Pays et langues", "Pays et langues",
      "Dites d’où vous venez et quelles langues vous parlez.",
      [
        v("le pays", "country", "国家", "nom", "masculin"),
        v("la France", "France", "法国", "nom propre", "féminin"),
        v("l'Allemagne", "Germany", "德国", "nom propre", "féminin"),
        v("l'Espagne", "Spain", "西班牙", "nom propre", "féminin"),
        v("la Chine", "China", "中国", "nom propre", "féminin"),
        v("la langue", "language", "语言", "nom", "féminin"),
        v("parler", "to speak", "说；讲", "verbe"),
        v("venir de", "to come from", "来自", "expression")
      ],
      [
        s("Je viens de Chine.", "I come from China.", "我来自中国。"),
        s("J'habite en Allemagne.", "I live in Germany.", "我住在德国。"),
        s("Je parle chinois.", "I speak Chinese.", "我说中文。"),
        s("Elle parle français et anglais.", "She speaks French and English.", "她会说法语和英语。"),
        s("Quelle langue parlez-vous ?", "What language do you speak?", "您说什么语言？")
      ],
      [
        d("A", "Vous venez d'où ?", "Where are you from?"),
        d("B", "Je viens d'Espagne.", "I'm from Spain."),
        d("A", "Vous parlez français ?", "Do you speak French?"),
        d("B", "Oui, un peu. Je parle aussi espagnol.", "Yes, a little. I also speak Spanish.")
      ],
      [
        e("Comment dit-on « 中国 » en français ?", "la Chine", ["la France", "la Chine", "l'Espagne"]),
        e("Complétez : Je ___ français.", "parle", ["parle", "viens", "habite à"]),
        e("« Je viens d'Allemagne » signifie…", "I come from Germany", ["I live in Germany", "I come from Germany", "I speak German"])
      ]
    ),

    // A0 — 05
    lesson("fr-a0-05", "A0", "La famille", "Famille",
      "Apprenez les mots courants pour parler de votre famille.",
      [
        v("la famille", "family", "家庭", "nom", "féminin"),
        v("la mère", "mother", "母亲", "nom", "féminin"),
        v("le père", "father", "父亲", "nom", "masculin"),
        v("les parents", "parents", "父母", "nom", "pluriel"),
        v("le frère", "brother", "兄弟", "nom", "masculin"),
        v("la sœur", "sister", "姐妹", "nom", "féminin"),
        v("l'enfant", "child", "孩子", "nom", "masculin"),
        v("ensemble", "together", "一起", "adverbe")
      ],
      [
        s("J'ai un frère et une sœur.", "I have a brother and a sister.", "我有一个兄弟和一个姐妹。"),
        s("Ma mère habite à Lyon.", "My mother lives in Lyon.", "我母亲住在里昂。"),
        s("Mon père travaille à Paris.", "My father works in Paris.", "我父亲在巴黎工作。"),
        s("Nous sommes cinq dans ma famille.", "There are five people in my family.", "我家有五口人。"),
        s("Nous mangeons ensemble le dimanche.", "We eat together on Sundays.", "我们星期天一起吃饭。")
      ],
      [
        d("A", "Tu as des frères et sœurs ?", "Do you have any siblings?"),
        d("B", "Oui, j'ai deux sœurs.", "Yes, I have two sisters."),
        d("A", "Et tes parents, ils habitent où ?", "And where do your parents live?"),
        d("B", "Ils habitent à Marseille.", "They live in Marseille.")
      ],
      [
        e("Comment dit-on « 父亲 » en français ?", "le père", ["la mère", "le père", "la sœur"]),
        e("Complétez : J'ai un ___ et une sœur.", "frère", ["frère", "père", "enfant"]),
        e("« ensemble » signifie…", "together", ["alone", "together", "tomorrow"])
      ]
    ),

    // A0 — 06
    lesson("fr-a0-06", "A0", "Les objets du quotidien", "Objets",
      "Identifiez des objets courants à la maison et en classe.",
      [
        v("le livre", "book", "书", "nom", "masculin"),
        v("le téléphone", "phone", "电话；手机", "nom", "masculin"),
        v("la table", "table", "桌子", "nom", "féminin"),
        v("la chaise", "chair", "椅子", "nom", "féminin"),
        v("la clé", "key", "钥匙", "nom", "féminin"),
        v("le sac", "bag", "包", "nom", "masculin"),
        v("la porte", "door", "门", "nom", "féminin"),
        v("la fenêtre", "window", "窗户", "nom", "féminin")
      ],
      [
        s("Le livre est sur la table.", "The book is on the table.", "书在桌子上。"),
        s("Où est mon téléphone ?", "Where is my phone?", "我的手机在哪里？"),
        s("La clé est dans le sac.", "The key is in the bag.", "钥匙在包里。"),
        s("La fenêtre est ouverte.", "The window is open.", "窗户开着。"),
        s("Pouvez-vous fermer la porte ?", "Can you close the door?", "您能把门关上吗？")
      ],
      [
        d("A", "Où est mon livre ?", "Where is my book?"),
        d("B", "Il est sur la table.", "It's on the table."),
        d("A", "Et mes clés ?", "And my keys?"),
        d("B", "Elles sont dans ton sac.", "They're in your bag.")
      ],
      [
        e("Comment dit-on « 书 » en français ?", "le livre", ["le sac", "le livre", "la clé"]),
        e("Complétez : La clé est dans le ___.", "sac", ["sac", "fenêtre", "chaise"]),
        e("Quel objet sert à ouvrir une porte ?", "la clé", ["la table", "la clé", "le livre"])
      ]
    ),

    // A1 — 01
    lesson("fr-a1-01", "A1", "Au café", "Au café",
      "Commandez une boisson ou quelque chose à manger et demandez l’addition.",
      [
        v("le café", "coffee", "咖啡", "nom", "masculin"),
        v("le thé", "tea", "茶", "nom", "masculin"),
        v("l'eau", "water", "水", "nom", "féminin"),
        v("le croissant", "croissant", "羊角面包", "nom", "masculin"),
        v("commander", "to order", "点餐；点单", "verbe"),
        v("vouloir", "to want", "想要", "verbe"),
        v("l'addition", "bill", "账单", "nom", "féminin"),
        v("ensemble", "together", "一起；合计", "adverbe")
      ],
      [
        s("Je voudrais un café, s'il vous plaît.", "I would like a coffee, please.", "请给我一杯咖啡。"),
        s("Vous désirez autre chose ?", "Would you like anything else?", "您还需要别的吗？"),
        s("Je prends aussi un croissant.", "I'll also have a croissant.", "我还要一个羊角面包。"),
        s("L'addition, s'il vous plaît.", "The bill, please.", "请结账。"),
        s("On paie ensemble.", "We'll pay together.", "我们一起付款。")
      ],
      [
        d("Serveur", "Bonjour, vous désirez ?", "Hello, what would you like?"),
        d("Cliente", "Un thé et un croissant, s'il vous plaît.", "A tea and a croissant, please."),
        d("Serveur", "Bien sûr. Autre chose ?", "Of course. Anything else?"),
        d("Cliente", "Non merci. C'est tout.", "No, thank you. That's all."),
        d("Serveur", "Très bien, je vous apporte ça.", "Very well, I'll bring that to you.")
      ],
      [
        e("Comment commander poliment ?", "Je voudrais un café, s'il vous plaît.", ["Je voudrais un café, s'il vous plaît.", "Donne café.", "Je café veux"]),
        e("Que signifie « l'addition » ?", "bill", ["menu", "bill", "table"]),
        e("Complétez : Je ___ aussi un croissant.", "prends", ["prends", "suis", "vais"])
      ]
    ),

    // A1 — 02
    lesson("fr-a1-02", "A1", "Ma journée", "Vie quotidienne",
      "Décrivez votre routine quotidienne et vos horaires habituels.",
      [
        v("se lever", "to get up", "起床", "verbe pronominal"),
        v("prendre le petit-déjeuner", "to have breakfast", "吃早餐", "expression"),
        v("travailler", "to work", "工作", "verbe"),
        v("étudier", "to study", "学习", "verbe"),
        v("la pause déjeuner", "lunch break", "午休；午餐休息时间", "nom", "féminin"),
        v("rentrer", "to return home", "回家", "verbe"),
        v("tard", "late", "晚；迟", "adverbe"),
        v("fatigué(e)", "tired", "疲倦的", "adjectif")
      ],
      [
        s("Je me lève à sept heures.", "I get up at seven.", "我七点起床。"),
        s("Je prends le petit-déjeuner à la maison.", "I have breakfast at home.", "我在家吃早餐。"),
        s("Je travaille du lundi au vendredi.", "I work from Monday to Friday.", "我从星期一工作到星期五。"),
        s("À midi, j'ai une pause déjeuner.", "At noon, I have a lunch break.", "中午我有午餐休息时间。"),
        s("Je rentre tard et je suis fatigué.", "I come home late and I'm tired.", "我很晚回家，而且很累。")
      ],
      [
        d("A", "À quelle heure tu te lèves ?", "What time do you get up?"),
        d("B", "Je me lève à six heures et demie.", "I get up at half past six."),
        d("A", "Tu travailles loin de chez toi ?", "Do you work far from home?"),
        d("B", "Non, je rentre généralement à dix-huit heures.", "No, I usually get home at six p.m.")
      ],
      [
        e("Que signifie « se lever » ?", "to get up", ["to go to bed", "to get up", "to work"]),
        e("Complétez : Je ___ à sept heures.", "me lève", ["me lève", "me appelle", "suis lever"]),
        e("Quand prend-on généralement le déjeuner ?", "À midi", ["À minuit", "À midi", "Le matin tôt"])
      ]
    ),

    // A1 — 03
    lesson("fr-a1-03", "A1", "L'heure et les dates", "Temps",
      "Demandez l’heure et parlez des jours, des dates et des rendez-vous.",
      [
        v("l'heure", "time / hour", "时间；小时", "nom", "féminin"),
        v("aujourd'hui", "today", "今天", "adverbe"),
        v("demain", "tomorrow", "明天", "adverbe"),
        v("hier", "yesterday", "昨天", "adverbe"),
        v("la semaine", "week", "星期；周", "nom", "féminin"),
        v("le mois", "month", "月份", "nom", "masculin"),
        v("la date", "date", "日期", "nom", "féminin"),
        v("à quelle heure", "at what time", "几点", "expression")
      ],
      [
        s("Quelle heure est-il ?", "What time is it?", "现在几点？"),
        s("Il est neuf heures et demie.", "It's half past nine.", "现在九点半。"),
        s("Nous sommes le vingt octobre.", "Today is the twentieth of October.", "今天是十月二十日。"),
        s("Le rendez-vous est demain matin.", "The appointment is tomorrow morning.", "预约在明天上午。"),
        s("Je travaille trois jours par semaine.", "I work three days a week.", "我每周工作三天。")
      ],
      [
        d("A", "Quelle heure est-il ?", "What time is it?"),
        d("B", "Il est dix heures moins le quart.", "It's a quarter to ten."),
        d("A", "Le cours commence à dix heures ?", "Does the class start at ten?"),
        d("B", "Oui, aujourd'hui, comme prévu.", "Yes, today, as planned.")
      ],
      [
        e("Comment dit-on « 明天 » en français ?", "demain", ["hier", "demain", "aujourd'hui"]),
        e("« Il est neuf heures et demie » signifie…", "It's half past nine", ["It's nine o'clock", "It's half past nine", "It's half past ten"]),
        e("Complétez : À ___ heure commence le film ?", "quelle", ["quel", "quelle", "quels"])
      ]
    ),

    // A1 — 04
    lesson("fr-a1-04", "A1", "Faire les courses", "Achats",
      "Demandez le prix, comparez des articles et payez vos achats.",
      [
        v("le magasin", "shop / store", "商店", "nom", "masculin"),
        v("le prix", "price", "价格", "nom", "masculin"),
        v("combien", "how much / how many", "多少", "adverbe"),
        v("cher / chère", "expensive", "贵的", "adjectif"),
        v("bon marché", "inexpensive", "便宜的", "expression"),
        v("acheter", "to buy", "购买", "verbe"),
        v("payer", "to pay", "付款", "verbe"),
        v("la monnaie", "change", "找零；零钱", "nom", "féminin")
      ],
      [
        s("Combien coûte ce pantalon ?", "How much does these trousers cost?", "这条裤子多少钱？"),
        s("Cette veste est trop chère.", "This jacket is too expensive.", "这件夹克太贵了。"),
        s("Je voudrais acheter deux pommes.", "I would like to buy two apples.", "我想买两个苹果。"),
        s("Je peux payer par carte ?", "Can I pay by card?", "我可以刷卡付款吗？"),
        s("Gardez la monnaie.", "Keep the change.", "零钱不用找了。")
      ],
      [
        d("Vendeuse", "Bonjour, je peux vous aider ?", "Hello, can I help you?"),
        d("Client", "Oui, combien coûte cette chemise ?", "Yes, how much is this shirt?"),
        d("Vendeuse", "Elle coûte trente euros.", "It costs thirty euros."),
        d("Client", "D'accord, je la prends. Je peux payer par carte ?", "All right, I'll take it. Can I pay by card?"),
        d("Vendeuse", "Bien sûr.", "Of course.")
      ],
      [
        e("Comment demander le prix ?", "Combien ça coûte ?", ["Combien ça coûte ?", "Où est-ce ?", "Quelle heure est-il ?"]),
        e("Quel mot signifie « expensive » ?", "cher / chère", ["bon marché", "cher / chère", "gratuit"]),
        e("Complétez : Je peux ___ par carte ?", "payer", ["payer", "coûter", "acheter à"])
      ]
    ),

    // A1 — 05
    lesson("fr-a1-05", "A1", "Les aliments et les boissons", "Alimentation",
      "Parlez des aliments, des boissons et de vos préférences.",
      [
        v("le pain", "bread", "面包", "nom", "masculin"),
        v("le fromage", "cheese", "奶酪", "nom", "masculin"),
        v("la pomme", "apple", "苹果", "nom", "féminin"),
        v("les légumes", "vegetables", "蔬菜", "nom", "masculin pluriel"),
        v("la viande", "meat", "肉", "nom", "féminin"),
        v("le poisson", "fish", "鱼", "nom", "masculin"),
        v("avoir faim", "to be hungry", "饿", "expression"),
        v("avoir soif", "to be thirsty", "渴", "expression")
      ],
      [
        s("J'achète du pain et du fromage.", "I buy bread and cheese.", "我买面包和奶酪。"),
        s("Je mange beaucoup de légumes.", "I eat a lot of vegetables.", "我吃很多蔬菜。"),
        s("Je préfère le poisson à la viande.", "I prefer fish to meat.", "比起肉，我更喜欢鱼。"),
        s("J'ai faim. On mange ?", "I'm hungry. Shall we eat?", "我饿了。我们吃饭吗？"),
        s("J'ai soif, je voudrais de l'eau.", "I'm thirsty; I'd like some water.", "我渴了，想喝点水。")
      ],
      [
        d("A", "Qu'est-ce qu'on mange ce soir ?", "What are we eating tonight?"),
        d("B", "Du poisson avec des légumes.", "Fish with vegetables."),
        d("A", "Très bien. Tu as acheté du pain ?", "Great. Did you buy bread?"),
        d("B", "Oui, et aussi du fromage.", "Yes, and some cheese too.")
      ],
      [
        e("Comment dit-on « 面包 » en français ?", "le pain", ["le pain", "le poisson", "la viande"]),
        e("Que signifie « avoir soif » ?", "to be thirsty", ["to be hungry", "to be thirsty", "to be tired"]),
        e("Complétez : Je préfère le poisson ___ la viande.", "à", ["de", "à", "pour"])
      ]
    ),

    // A1 — 06
    lesson("fr-a1-06", "A1", "Loisirs et week-end", "Loisirs",
      "Parlez de vos loisirs et de ce que vous aimez faire le week-end.",
      [
        v("le loisir", "leisure activity", "休闲活动", "nom", "masculin"),
        v("lire", "to read", "阅读", "verbe"),
        v("nager", "to swim", "游泳", "verbe"),
        v("faire du vélo", "to cycle", "骑自行车", "expression"),
        v("écouter de la musique", "to listen to music", "听音乐", "expression"),
        v("sortir", "to go out", "外出", "verbe"),
        v("le week-end", "weekend", "周末", "nom", "masculin"),
        v("préférer", "to prefer", "更喜欢", "verbe")
      ],
      [
        s("J'aime lire avant de dormir.", "I like reading before going to sleep.", "我喜欢睡前阅读。"),
        s("Le week-end, je fais du vélo.", "I cycle at the weekend.", "周末我骑自行车。"),
        s("Elle écoute souvent de la musique.", "She often listens to music.", "她经常听音乐。"),
        s("Nous sortons avec des amis le samedi.", "We go out with friends on Saturdays.", "星期六我们和朋友外出。"),
        s("Je préfère rester à la maison aujourd'hui.", "I prefer to stay at home today.", "今天我更愿意待在家里。")
      ],
      [
        d("A", "Qu'est-ce que tu fais le week-end ?", "What do you do at the weekend?"),
        d("B", "Je fais du vélo et je lis.", "I cycle and read."),
        d("A", "Tu sors aussi avec tes amis ?", "Do you also go out with your friends?"),
        d("B", "Oui, souvent le samedi soir.", "Yes, often on Saturday evenings.")
      ],
      [
        e("Que signifie « lire » ?", "to read", ["to swim", "to read", "to go out"]),
        e("Complétez : Le week-end, je ___ du vélo.", "fais", ["fais", "suis", "vais à"]),
        e("Quelle expression signifie « to listen to music » ?", "écouter de la musique", ["faire du vélo", "écouter de la musique", "sortir"])
      ]
    ),

    // A2 — 01
    lesson("fr-a2-01", "A2", "Se déplacer en ville", "Orientation",
      "Demandez votre chemin et comprenez des indications simples en ville.",
      [
        v("le carrefour", "intersection", "十字路口", "nom", "masculin"),
        v("tout droit", "straight ahead", "一直向前", "expression"),
        v("tourner", "to turn", "转弯", "verbe"),
        v("le feu", "traffic light", "交通信号灯", "nom", "masculin"),
        v("en face de", "opposite", "在……对面", "expression"),
        v("l'arrêt", "stop", "车站；停靠点", "nom", "masculin"),
        v("la gare", "train station", "火车站", "nom", "féminin"),
        v("la distance", "distance", "距离", "nom", "féminin")
      ],
      [
        s("Allez tout droit jusqu'au carrefour.", "Go straight ahead to the intersection.", "一直走到十字路口。"),
        s("Tournez à gauche au feu.", "Turn left at the traffic light.", "在红绿灯处左转。"),
        s("La pharmacie est en face de la gare.", "The pharmacy is opposite the station.", "药店在火车站对面。"),
        s("Où se trouve l'arrêt de bus ?", "Where is the bus stop?", "公交车站在哪里？"),
        s("C'est à cinq minutes à pied.", "It's a five-minute walk.", "步行五分钟就到。")
      ],
      [
        d("A", "Excusez-moi, où est la gare ?", "Excuse me, where is the station?"),
        d("B", "Allez tout droit, puis tournez à droite.", "Go straight ahead, then turn right."),
        d("A", "C'est loin d'ici ?", "Is it far from here?"),
        d("B", "Non, c'est à environ cinq minutes à pied.", "No, it's about a five-minute walk."),
        d("A", "Merci beaucoup !", "Thank you very much!")
      ],
      [
        e("Que signifie « tout droit » ?", "straight ahead", ["to the left", "straight ahead", "opposite"]),
        e("Complétez : Tournez ___ gauche.", "à", ["à", "de", "en"]),
        e("Quelle expression indique une distance à pied ?", "à cinq minutes à pied", ["en face de", "à cinq minutes à pied", "tout droit"])
      ]
    ),

    // A2 — 02
    lesson("fr-a2-02", "A2", "Prendre rendez-vous", "Rendez-vous",
      "Fixez un rendez-vous, proposez un autre horaire ou annulez poliment.",
      [
        v("le rendez-vous", "appointment", "预约；约会", "nom", "masculin"),
        v("fixer", "to arrange / set", "确定；安排", "verbe"),
        v("déplacer", "to reschedule", "改期；挪动", "verbe"),
        v("annuler", "to cancel", "取消", "verbe"),
        v("convenir", "to suit / be convenient", "合适；方便", "verbe"),
        v("disponible", "available", "有空的；可用的", "adjectif"),
        v("la confirmation", "confirmation", "确认", "nom", "féminin"),
        v("malheureusement", "unfortunately", "遗憾的是", "adverbe")
      ],
      [
        s("Je voudrais prendre rendez-vous.", "I would like to make an appointment.", "我想预约。"),
        s("Est-ce que mardi vous convient ?", "Does Tuesday suit you?", "星期二对您方便吗？"),
        s("Je suis disponible après quinze heures.", "I'm available after 3 p.m.", "我下午三点以后有空。"),
        s("Nous devons déplacer le rendez-vous.", "We have to reschedule the appointment.", "我们必须更改预约时间。"),
        s("Vous recevrez une confirmation par e-mail.", "You will receive a confirmation by email.", "您将收到电子邮件确认。")
      ],
      [
        d("A", "Bonjour, je voudrais prendre rendez-vous.", "Hello, I would like to make an appointment."),
        d("B", "Bien sûr. Êtes-vous disponible mardi matin ?", "Of course. Are you available on Tuesday morning?"),
        d("A", "Malheureusement, je travaille. Mercredi après-midi, c'est possible ?", "Unfortunately, I work. Is Wednesday afternoon possible?"),
        d("B", "Oui, quinze heures vous convient ?", "Yes, does 3 p.m. suit you?"),
        d("A", "Parfait, merci pour la confirmation.", "Perfect, thank you for confirming.")
      ],
      [
        e("Quel verbe signifie « to cancel » ?", "annuler", ["fixer", "annuler", "convenir"]),
        e("Complétez : Mardi, cela vous ___ ?", "convient", ["convient", "annule", "déplace"]),
        e("Que signifie « disponible » ?", "available", ["busy", "available", "cancelled"])
      ]
    ),

    // A2 — 03
    lesson("fr-a2-03", "A2", "Voyage et hébergement", "Voyage",
      "Réservez une chambre et demandez des informations pratiques pendant un voyage.",
      [
        v("le séjour", "stay", "停留；住宿", "nom", "masculin"),
        v("réserver", "to book", "预订", "verbe"),
        v("la chambre", "room", "房间", "nom", "féminin"),
        v("la réservation", "booking", "预订", "nom", "féminin"),
        v("le petit-déjeuner", "breakfast", "早餐", "nom", "masculin"),
        v("compris", "included", "包含在内的", "adjectif"),
        v("la réception", "reception desk", "前台", "nom", "féminin"),
        v("la disponibilité", "availability", "可用情况；空房情况", "nom", "féminin")
      ],
      [
        s("J'ai réservé une chambre pour deux nuits.", "I booked a room for two nights.", "我预订了两晚的房间。"),
        s("Le petit-déjeuner est-il compris ?", "Is breakfast included?", "包含早餐吗？"),
        s("À quelle heure ouvre la réception ?", "What time does reception open?", "前台几点开放？"),
        s("Nous arriverons vers dix-neuf heures.", "We will arrive at around seven p.m.", "我们大约晚上七点到达。"),
        s("Avez-vous une chambre disponible ?", "Do you have a room available?", "您有空房吗？")
      ],
      [
        d("Réceptionniste", "Bonsoir, bienvenue à l'hôtel.", "Good evening, welcome to the hotel."),
        d("Client", "Bonsoir, j'ai une réservation au nom de Martin.", "Good evening, I have a reservation under the name Martin."),
        d("Réceptionniste", "Pour deux nuits, c'est bien cela ?", "For two nights, is that correct?"),
        d("Client", "Oui. Le petit-déjeuner est-il compris ?", "Yes. Is breakfast included?"),
        d("Réceptionniste", "Oui, il est servi de sept à dix heures.", "Yes, it is served from seven to ten.")
      ],
      [
        e("Que signifie « réserver » ?", "to book", ["to arrive", "to book", "to leave"]),
        e("Complétez : Le petit-déjeuner est-il ___ ?", "compris", ["compris", "réservé", "disponible à"]),
        e("« au nom de Martin » signifie…", "under the name Martin", ["near Martin", "under the name Martin", "from Martin"])
      ]
    ),

    // A2 — 04
    lesson("fr-a2-04", "A2", "Chez le médecin", "Santé",
      "Décrivez des symptômes simples et comprenez les conseils du médecin.",
      [
        v("le médecin", "doctor", "医生", "nom", "masculin"),
        v("la douleur", "pain", "疼痛", "nom", "féminin"),
        v("avoir mal à", "to have pain in", "……疼", "expression"),
        v("la fièvre", "fever", "发烧；发热", "nom", "féminin"),
        v("tousser", "to cough", "咳嗽", "verbe"),
        v("se reposer", "to rest", "休息", "verbe pronominal"),
        v("le médicament", "medicine", "药物", "nom", "masculin"),
        v("l'ordonnance", "prescription", "处方", "nom", "féminin")
      ],
      [
        s("J'ai mal à la tête depuis hier.", "I've had a headache since yesterday.", "我从昨天开始头疼。"),
        s("J'ai aussi un peu de fièvre.", "I also have a slight fever.", "我还有点发烧。"),
        s("Depuis quand toussez-vous ?", "How long have you been coughing?", "您咳嗽多久了？"),
        s("Vous devez vous reposer.", "You need to rest.", "您需要休息。"),
        s("Prenez ce médicament deux fois par jour.", "Take this medicine twice a day.", "这种药每天服用两次。")
      ],
      [
        d("Médecin", "Qu'est-ce qui ne va pas ?", "What's wrong?"),
        d("Patient", "J'ai mal à la gorge et je tousse.", "I have a sore throat and I'm coughing."),
        d("Médecin", "Avez-vous de la fièvre ?", "Do you have a fever?"),
        d("Patient", "Oui, depuis hier soir.", "Yes, since yesterday evening."),
        d("Médecin", "Reposez-vous et prenez ce médicament.", "Rest and take this medicine.")
      ],
      [
        e("Comment dit-on « 医生 » en français ?", "le médecin", ["le médecin", "le médicament", "la douleur"]),
        e("Complétez : J'ai mal ___ la tête.", "à", ["à", "de", "en"]),
        e("Quel conseil donne-t-on à une personne malade ?", "Vous devez vous reposer.", ["Vous devez courir.", "Vous devez vous reposer.", "Vous devez travailler davantage."])
      ]
    ),

    // A2 — 05
    lesson("fr-a2-05", "A2", "La météo et les projets", "Météo",
      "Parlez du temps qu’il fait et adaptez vos projets à la météo.",
      [
        v("le temps", "weather", "天气", "nom", "masculin"),
        v("ensoleillé", "sunny", "晴朗的", "adjectif"),
        v("nuageux", "cloudy", "多云的", "adjectif"),
        v("la pluie", "rain", "雨", "nom", "féminin"),
        v("le vent", "wind", "风", "nom", "masculin"),
        v("prévoir", "to plan / forecast", "计划；预测", "verbe"),
        v("à cause de", "because of", "由于；因为", "expression"),
        v("reporter", "to postpone", "推迟", "verbe")
      ],
      [
        s("Quel temps fait-il aujourd'hui ?", "What's the weather like today?", "今天天气怎么样？"),
        s("Il fera beau demain.", "The weather will be nice tomorrow.", "明天天气会很好。"),
        s("À cause de la pluie, nous restons à la maison.", "Because of the rain, we're staying at home.", "因为下雨，我们待在家里。"),
        s("Nous avions prévu une promenade.", "We had planned a walk.", "我们原计划去散步。"),
        s("Nous devons reporter le pique-nique.", "We have to postpone the picnic.", "我们必须推迟野餐。")
      ],
      [
        d("A", "On fait une promenade demain ?", "Shall we go for a walk tomorrow?"),
        d("B", "La météo annonce de la pluie.", "The forecast says it will rain."),
        d("A", "Alors, on peut reporter la sortie.", "Then we can postpone the outing."),
        d("B", "Bonne idée. On se retrouve dimanche ?", "Good idea. Shall we meet on Sunday?")
      ],
      [
        e("Que signifie « nuageux » ?", "cloudy", ["sunny", "cloudy", "windy"]),
        e("Complétez : ___ cause de la pluie, nous restons ici.", "À", ["À", "En", "De"]),
        e("Quel verbe signifie « to postpone » ?", "reporter", ["prévoir", "reporter", "ensoleiller"])
      ]
    ),

    // A2 — 06
    lesson("fr-a2-06", "A2", "Le logement et le quartier", "Logement",
      "Décrivez votre logement, votre quartier et les services à proximité.",
      [
        v("le logement", "accommodation / housing", "住房", "nom", "masculin"),
        v("le loyer", "rent", "房租", "nom", "masculin"),
        v("le propriétaire", "landlord / owner", "房东；所有者", "nom", "masculin"),
        v("le quartier", "neighbourhood", "街区", "nom", "masculin"),
        v("à proximité", "nearby", "在附近", "expression"),
        v("bruyant", "noisy", "吵闹的", "adjectif"),
        v("lumineux", "bright", "明亮的", "adjectif"),
        v("déménager", "to move house", "搬家", "verbe")
      ],
      [
        s("Mon appartement est lumineux et calme.", "My apartment is bright and quiet.", "我的公寓明亮而安静。"),
        s("Le loyer est un peu élevé.", "The rent is a little high.", "房租有点高。"),
        s("Il y a un supermarché à proximité.", "There is a supermarket nearby.", "附近有一家超市。"),
        s("Le quartier est agréable, mais parfois bruyant.", "The neighbourhood is pleasant but sometimes noisy.", "这个街区很宜人，但有时很吵。"),
        s("Nous allons déménager le mois prochain.", "We're moving house next month.", "我们下个月要搬家。")
      ],
      [
        d("A", "Comment est ton nouvel appartement ?", "What's your new apartment like?"),
        d("B", "Il est lumineux et proche du centre.", "It's bright and close to the centre."),
        d("A", "Et le quartier ?", "And the neighbourhood?"),
        d("B", "Il y a des magasins à proximité, mais le loyer est élevé.", "There are shops nearby, but the rent is high.")
      ],
      [
        e("Que signifie « le loyer » ?", "rent", ["neighbourhood", "rent", "owner"]),
        e("Complétez : Il y a une pharmacie ___ proximité.", "à", ["à", "de", "en"]),
        e("Quel adjectif signifie « bright » ?", "lumineux", ["bruyant", "lumineux", "cher"])
      ]
    ),

    // B1 — 01
    lesson("fr-b1-01", "B1", "Exprimer son opinion et argumenter", "Opinion",
      "Présentez votre point de vue, justifiez vos arguments et réagissez à une opinion différente.",
      [
        v("l'avis", "opinion", "意见", "nom", "masculin"),
        v("l'avantage", "advantage", "优点；优势", "nom", "masculin"),
        v("l'inconvénient", "disadvantage", "缺点；不利之处", "nom", "masculin"),
        v("justifier", "to justify", "证明……合理；解释原因", "verbe"),
        v("être d'accord", "to agree", "同意", "expression"),
        v("contredire", "to contradict", "反驳", "verbe"),
        v("d'une part", "on the one hand", "一方面", "expression"),
        v("d'autre part", "on the other hand", "另一方面", "expression")
      ],
      [
        s("À mon avis, les transports publics devraient être moins chers.", "In my opinion, public transport should be cheaper.", "我认为公共交通应该更便宜。"),
        s("Le principal avantage est la réduction du trafic.", "The main advantage is the reduction in traffic.", "主要优点是减少交通拥堵。"),
        s("Cependant, il existe aussi des inconvénients.", "However, there are also disadvantages.", "不过，也存在一些缺点。"),
        s("Je suis d'accord avec vous sur ce point.", "I agree with you on this point.", "在这一点上我同意您的看法。"),
        s("Pourriez-vous justifier votre opinion ?", "Could you justify your opinion?", "您能解释一下自己的观点吗？")
      ],
      [
        d("A", "À mon avis, le télétravail est très utile.", "In my opinion, working from home is very useful."),
        d("B", "Je suis d'accord, car il permet de gagner du temps.", "I agree because it saves time."),
        d("A", "D'autre part, les échanges avec les collègues peuvent être plus difficiles.", "On the other hand, communication with colleagues can be more difficult."),
        d("B", "C'est vrai. Il faut donc trouver un bon équilibre.", "That's true. So we need to find a good balance.")
      ],
      [
        e("Quelle expression introduit une opinion personnelle ?", "À mon avis", ["À mon avis", "Au revoir", "À proximité"]),
        e("Quel mot signifie « disadvantage » ?", "l'inconvénient", ["l'avantage", "l'inconvénient", "l'avis"]),
        e("Complétez : Je suis ___ avec vous.", "d'accord", ["d'accord", "avantage", "contredire"])
      ]
    ),

    // B1 — 02
    lesson("fr-b1-02", "B1", "Les problèmes au travail", "Travail",
      "Décrivez une difficulté professionnelle, proposez des solutions et demandez un retour.",
      [
        v("le défi", "challenge", "挑战", "nom", "masculin"),
        v("la solution", "solution", "解决方案", "nom", "féminin"),
        v("proposer", "to suggest", "提出；建议", "verbe"),
        v("la réunion", "meeting", "会议", "nom", "féminin"),
        v("la tâche", "task", "任务", "nom", "féminin"),
        v("terminer", "to finish", "完成", "verbe"),
        v("le retour", "feedback", "反馈", "nom", "masculin"),
        v("à temps", "on time", "按时", "expression")
      ],
      [
        s("Nous devons résoudre ce problème rapidement.", "We need to solve this problem quickly.", "我们必须尽快解决这个问题。"),
        s("Je voudrais proposer une autre solution.", "I would like to suggest another solution.", "我想提出另一个解决方案。"),
        s("La réunion a été reportée à jeudi.", "The meeting has been postponed to Thursday.", "会议已推迟到星期四。"),
        s("Je n'ai pas terminé toutes les tâches à temps.", "I didn't finish all the tasks on time.", "我没有按时完成所有任务。"),
        s("Merci pour votre retour détaillé.", "Thank you for your detailed feedback.", "感谢您提供详细反馈。")
      ],
      [
        d("A", "Nous risquons de ne pas terminer le projet à temps.", "We may not finish the project on time."),
        d("B", "Quelle solution proposez-vous ?", "What solution do you suggest?"),
        d("A", "Nous pourrions répartir les tâches différemment.", "We could distribute the tasks differently."),
        d("B", "Bonne idée. Parlons-en pendant la réunion.", "Good idea. Let's discuss it during the meeting."),
        d("A", "D'accord, je préparerai une proposition.", "All right, I'll prepare a proposal.")
      ],
      [
        e("Quel mot signifie « challenge » ?", "le défi", ["le défi", "le retour", "la réunion"]),
        e("Complétez : Je voudrais ___ une solution.", "proposer", ["proposer", "retourner", "réunion"]),
        e("Que signifie « à temps » ?", "on time", ["too late", "on time", "next week"])
      ]
    ),

    // B1 — 03
    lesson("fr-b1-03", "B1", "Études et apprentissage", "Éducation",
      "Parlez de vos méthodes d’apprentissage, de vos objectifs et des difficultés rencontrées.",
      [
        v("l'apprentissage", "learning", "学习", "nom", "masculin"),
        v("la compétence", "skill", "技能；能力", "nom", "féminin"),
        v("améliorer", "to improve", "提高；改善", "verbe"),
        v("s'entraîner", "to practise", "练习", "verbe pronominal"),
        v("la réussite", "success", "成功", "nom", "féminin"),
        v("échouer", "to fail", "失败", "verbe"),
        v("l'objectif", "goal", "目标", "nom", "masculin"),
        v("progresser", "to make progress", "进步", "verbe")
      ],
      [
        s("Mon objectif est d'améliorer mon français oral.", "My goal is to improve my spoken French.", "我的目标是提高法语口语。"),
        s("Il faut s'entraîner régulièrement pour progresser.", "You need to practise regularly to make progress.", "要想进步，就必须定期练习。"),
        s("Cette méthode m'aide à mieux comprendre.", "This method helps me understand better.", "这个方法帮助我更好地理解。"),
        s("Même si j'échoue parfois, je continue à apprendre.", "Even if I sometimes fail, I keep learning.", "即使有时失败，我仍继续学习。"),
        s("La réussite demande du temps et des efforts.", "Success takes time and effort.", "成功需要时间和努力。")
      ],
      [
        d("A", "Comment améliores-tu ton français ?", "How are you improving your French?"),
        d("B", "J'écoute des podcasts et je parle avec des amis.", "I listen to podcasts and speak with friends."),
        d("A", "Tu trouves cela efficace ?", "Do you find that effective?"),
        d("B", "Oui, je fais encore des erreurs, mais je progresse.", "Yes, I still make mistakes, but I'm making progress.")
      ],
      [
        e("Que signifie « progresser » ?", "to make progress", ["to forget", "to make progress", "to fail"]),
        e("Complétez : Mon ___ est de parler couramment.", "objectif", ["objectif", "échec", "méthode de transport"]),
        e("Quel adverbe complète naturellement « s'entraîner ___ » ?", "régulièrement", ["régulièrement", "hier matin", "en face"])
      ]
    ),

    // B1 — 04
    lesson("fr-b1-04", "B1", "Environnement et développement durable", "Environnement",
      "Discutez des gestes écologiques et des choix qui réduisent l’impact environnemental.",
      [
        v("l'environnement", "environment", "环境", "nom", "masculin"),
        v("durable", "sustainable", "可持续的", "adjectif"),
        v("réduire", "to reduce", "减少", "verbe"),
        v("le déchet", "waste", "废弃物", "nom", "masculin"),
        v("recycler", "to recycle", "回收利用", "verbe"),
        v("la consommation", "consumption", "消费；消耗", "nom", "féminin"),
        v("la ressource", "resource", "资源", "nom", "féminin"),
        v("protéger", "to protect", "保护", "verbe")
      ],
      [
        s("Nous devons protéger l'environnement.", "We must protect the environment.", "我们必须保护环境。"),
        s("Il est important de réduire les déchets.", "It is important to reduce waste.", "减少废弃物很重要。"),
        s("Le recyclage permet d'économiser des ressources.", "Recycling helps save resources.", "回收利用有助于节约资源。"),
        s("Une consommation plus responsable est nécessaire.", "More responsible consumption is necessary.", "更负责任的消费方式是必要的。"),
        s("Les transports publics peuvent réduire les émissions.", "Public transport can reduce emissions.", "公共交通可以减少排放。")
      ],
      [
        d("A", "Que fais-tu pour protéger l'environnement ?", "What do you do to protect the environment?"),
        d("B", "Je prends le vélo et j'évite les emballages inutiles.", "I cycle and avoid unnecessary packaging."),
        d("A", "Tu tries aussi tes déchets ?", "Do you also sort your waste?"),
        d("B", "Oui, et j'essaie de consommer moins.", "Yes, and I try to consume less.")
      ],
      [
        e("Que signifie « durable » dans ce contexte ?", "sustainable", ["sustainable", "expensive", "temporary"]),
        e("Complétez : Il faut ___ les déchets.", "réduire", ["réduire", "consommer davantage", "oublier"]),
        e("Quel verbe signifie « to recycle » ?", "recycler", ["protéger", "recycler", "réserver"])
      ]
    ),

    // B1 — 05
    lesson("fr-b1-05", "B1", "Médias et vie numérique", "Médias",
      "Parlez de l’usage des médias numériques, de la fiabilité des informations et de la vie privée.",
      [
        v("les médias", "media", "媒体", "nom", "masculin pluriel"),
        v("la source", "source", "来源", "nom", "féminin"),
        v("fiable", "reliable", "可靠的", "adjectif"),
        v("partager", "to share", "分享", "verbe"),
        v("les données", "data", "数据", "nom", "féminin pluriel"),
        v("la vie privée", "privacy", "隐私", "nom", "féminin"),
        v("vérifier", "to check / verify", "核实；检查", "verbe"),
        v("le réseau social", "social network", "社交网络", "nom", "masculin")
      ],
      [
        s("Je vérifie la source avant de partager une information.", "I check the source before sharing information.", "分享信息前，我会核实来源。"),
        s("Toutes les informations en ligne ne sont pas fiables.", "Not all online information is reliable.", "网上的信息并非都可靠。"),
        s("Il faut protéger ses données personnelles.", "You need to protect your personal data.", "必须保护个人数据。"),
        s("Les réseaux sociaux facilitent les échanges.", "Social networks make communication easier.", "社交网络让交流更方便。"),
        s("Cependant, ils peuvent aussi menacer la vie privée.", "However, they can also threaten privacy.", "然而，它们也可能威胁隐私。")
      ],
      [
        d("A", "Tu as vu cette nouvelle sur les réseaux sociaux ?", "Have you seen this news on social media?"),
        d("B", "Oui, mais je ne sais pas si la source est fiable.", "Yes, but I don't know if the source is reliable."),
        d("A", "On devrait vérifier avant de la partager.", "We should check before sharing it."),
        d("B", "Exactement, surtout quand il s'agit de données personnelles.", "Exactly, especially when personal data is involved.")
      ],
      [
        e("Que signifie « fiable » ?", "reliable", ["reliable", "private", "digital"]),
        e("Complétez : Il faut ___ la source.", "vérifier", ["partager sans lire", "vérifier", "effacer les médias"]),
        e("Quelle expression signifie « privacy » ?", "la vie privée", ["la vie privée", "la source", "les données mobiles"])
      ]
    ),

    // B1 — 06
    lesson("fr-b1-06", "B1", "Expériences et projets d'avenir", "Expériences",
      "Racontez une expérience passée, tirez-en une leçon et présentez vos projets.",
      [
        v("l'expérience", "experience", "经历；经验", "nom", "féminin"),
        v("se souvenir de", "to remember", "记得", "verbe pronominal"),
        v("réussir à", "to manage to", "成功做到", "expression"),
        v("apprendre de", "to learn from", "从……中学习", "expression"),
        v("à l'avenir", "in the future", "将来", "expression"),
        v("envisager", "to consider", "考虑；设想", "verbe"),
        v("l'objectif", "goal", "目标", "nom", "masculin"),
        v("réaliser", "to achieve", "实现", "verbe")
      ],
      [
        s("Cette expérience m'a beaucoup appris.", "This experience taught me a lot.", "这段经历让我学到了很多。"),
        s("Je me souviens encore de mon premier voyage seul.", "I still remember my first trip alone.", "我仍然记得第一次独自旅行。"),
        s("J'ai réussi à terminer le projet malgré les difficultés.", "I managed to finish the project despite the difficulties.", "尽管遇到困难，我还是成功完成了项目。"),
        s("À l'avenir, j'aimerais travailler à l'étranger.", "In the future, I would like to work abroad.", "将来我想去国外工作。"),
        s("Mon objectif est de réaliser ce projet dans deux ans.", "My goal is to achieve this project within two years.", "我的目标是在两年内实现这个计划。")
      ],
      [
        d("A", "Quelle expérience t'a le plus marqué ?", "Which experience had the greatest impact on you?"),
        d("B", "Mon séjour à l'étranger m'a appris à être plus indépendant.", "My stay abroad taught me to be more independent."),
        d("A", "Et quels sont tes projets pour l'avenir ?", "And what are your plans for the future?"),
        d("B", "J'envisage de reprendre mes études et de réaliser un nouveau projet.", "I'm considering returning to my studies and completing a new project.")
      ],
      [
        e("Que signifie « à l'avenir » ?", "in the future", ["in the past", "in the future", "at the moment"]),
        e("Complétez : J'ai réussi ___ terminer le projet.", "à", ["à", "de", "pour"]),
        e("Quel verbe signifie « to consider » ?", "envisager", ["se souvenir", "envisager", "réussir"])
      ]
    )
  ];

  const course = {
    code: "fr",
    language: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    levels: ["A0", "A1", "A2", "B1"],
    lessons: lessons
  };

  window.WorldLinguaLanguages = window.WorldLinguaLanguages || {};
  window.WorldLinguaLanguages.fr = course;
})();
