
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
      "de-a0-01", "A0", "Hallo! Begrüßungen",
      "Begrüßungen", "Lerne wichtige Begrüßungen und höfliche Ausdrücke.",
      [
        v("Hallo", "你好", "非正式问候语", "Interjektion"),
        v("Guten Morgen", "早上好", "上午使用的问候语", "Gruß"),
        v("Guten Tag", "你好／日安", "白天使用的问候语", "Gruß"),
        v("Guten Abend", "晚上好", "晚上使用的问候语", "Gruß"),
        v("Tschüss", "再见", "非正式告别语", "Interjektion"),
        v("Auf Wiedersehen", "再见", "正式告别语", "Gruß"),
        v("Danke", "谢谢", "表达感谢", "Interjektion"),
        v("Bitte", "请／不客气", "表示请求或回应感谢", "Interjektion")
      ],
      [
        s("Hallo! Wie geht es dir?", "你好！你好吗？", "询问对方近况"),
        s("Guten Morgen, Anna!", "早上好，安娜！", "早晨问候"),
        s("Guten Tag! Wie heißen Sie?", "您好！您叫什么名字？", "正式问候并询问姓名"),
        s("Danke für deine Hilfe.", "谢谢你的帮助。", "表达感谢"),
        s("Auf Wiedersehen und einen schönen Abend!", "再见，祝你晚上愉快！", "正式告别")
      ],
      [
        d("A", "Hallo, Peter!", "你好，彼得！"),
        d("B", "Hallo, Anna! Wie geht's?", "你好，安娜！你好吗？"),
        d("A", "Gut, danke. Und dir?", "很好，谢谢。你呢？"),
        d("B", "Auch gut. Tschüss!", "我也很好。再见！")
      ],
      [
        e("Wie begrüßt man jemanden am Morgen?", "Guten Morgen", ["Guten Morgen", "Gute Nacht", "Tschüss"]),
        e("Was sagt man, wenn man Hilfe bekommt?", "Danke", ["Bitte", "Danke", "Hallo"]),
        e("Welche Form ist eine höfliche Verabschiedung?", "Auf Wiedersehen", ["Hallo", "Auf Wiedersehen", "Guten Tag"])
      ]
    ),

    lesson(
      "de-a0-02", "A0", "Ich heiße ...",
      "Vorstellung", "Lerne, dich vorzustellen und nach Namen und Herkunft zu fragen.",
      [
        v("ich", "我", "第一人称单数代词", "Pronomen"),
        v("du", "你", "非正式第二人称代词", "Pronomen"),
        v("heißen", "叫作", "表示姓名", "Verb"),
        v("kommen", "来自", "表示来自某地", "Verb"),
        v("aus", "来自／从", "表示来源或出处", "Präposition"),
        v("der Name", "名字", "一个人的姓名", "Nomen", "der"),
        v("freut mich", "很高兴认识你", "初次见面时的表达", "Redewendung"),
        v("das Land", "国家", "一个国家或地区", "Nomen", "das")
      ],
      [
        s("Ich heiße Anna.", "我叫安娜。", "介绍自己的姓名"),
        s("Wie heißt du?", "你叫什么名字？", "询问对方姓名"),
        s("Ich komme aus China.", "我来自中国。", "介绍自己的来源"),
        s("Aus welchem Land kommst du?", "你来自哪个国家？", "询问对方来自哪里"),
        s("Freut mich, dich kennenzulernen.", "很高兴认识你。", "初次见面时表达友好")
      ],
      [
        d("A", "Hallo! Wie heißt du?", "你好！你叫什么名字？"),
        d("B", "Ich heiße Li. Und du?", "我叫李。你呢？"),
        d("A", "Ich bin Anna. Woher kommst du?", "我叫安娜。你来自哪里？"),
        d("B", "Ich komme aus China. Freut mich!", "我来自中国。很高兴认识你！")
      ],
      [
        e("Wie fragt man nach dem Namen?", "Wie heißt du?", ["Wie heißt du?", "Wo wohnst du?", "Wie alt bist du?"]),
        e("Ergänze: Ich komme ___ China.", "aus", ["in", "aus", "bei"]),
        e("Was bedeutet „Freut mich“?", "很高兴认识你", ["再见", "很高兴认识你", "我不知道"])
      ]
    ),

    lesson(
      "de-a0-03", "A0", "Zahlen und Alter",
      "Zahlen", "Lerne Zahlen und wie du nach dem Alter fragst.",
      [
        v("eins", "一", "数字 1", "Zahlwort"),
        v("zwei", "二", "数字 2", "Zahlwort"),
        v("drei", "三", "数字 3", "Zahlwort"),
        v("zehn", "十", "数字 10", "Zahlwort"),
        v("zwanzig", "二十", "数字 20", "Zahlwort"),
        v("alt", "岁／年老的", "询问年龄时使用", "Adjektiv"),
        v("das Alter", "年龄", "一个人的年龄", "Nomen", "das"),
        v("die Zahl", "数字", "表示数量的符号或数值", "Nomen", "die")
      ],
      [
        s("Ich bin vier Jahre alt.", "我四岁。", "介绍年龄"),
        s("Wie alt bist du?", "你几岁？", "询问年龄"),
        s("Mein Sohn ist fünf Jahre alt.", "我儿子五岁。", "介绍家人的年龄"),
        s("Die Zahl ist zehn.", "这个数字是十。", "识别数字"),
        s("Ich habe zwei Brüder.", "我有两个兄弟。", "用数字表达数量")
      ],
      [
        d("A", "Wie alt bist du?", "你几岁？"),
        d("B", "Ich bin sechs Jahre alt.", "我六岁。"),
        d("A", "Und wie alt ist deine Schwester?", "你妹妹／姐姐几岁？"),
        d("B", "Sie ist zehn Jahre alt.", "她十岁。")
      ],
      [
        e("Wie fragt man nach dem Alter?", "Wie alt bist du?", ["Wie alt bist du?", "Wie heißt du?", "Woher kommst du?"]),
        e("Was bedeutet „zwanzig“?", "二十", ["十二", "二十", "三十"]),
        e("Ergänze: Ich bin fünf Jahre ___.", "alt", ["alt", "Alter", "Jahre"])
      ]
    ),

    lesson(
      "de-a0-04", "A0", "Länder und Sprachen",
      "Länder", "Lerne Länder zu nennen und über Sprachen zu sprechen.",
      [
        v("Deutschland", "德国", "欧洲国家", "Eigenname"),
        v("China", "中国", "东亚国家", "Eigenname"),
        v("die Sprache", "语言", "用于交流的语言系统", "Nomen", "die"),
        v("Deutsch", "德语", "德国的语言", "Nomen"),
        v("Chinesisch", "中文", "中国的语言", "Nomen"),
        v("sprechen", "说", "使用语言进行交流", "Verb"),
        v("lernen", "学习", "获得知识或技能", "Verb"),
        v("wohnen", "居住", "表示居住地点", "Verb")
      ],
      [
        s("Ich wohne in Deutschland.", "我住在德国。", "介绍居住地"),
        s("Ich spreche Chinesisch und Deutsch.", "我会说中文和德语。", "介绍语言能力"),
        s("Welche Sprache lernst du?", "你在学什么语言？", "询问学习的语言"),
        s("Ich lerne Deutsch.", "我在学德语。", "介绍正在学习的语言"),
        s("Sprichst du Englisch?", "你会说英语吗？", "询问语言能力")
      ],
      [
        d("A", "Wo wohnst du?", "你住在哪里？"),
        d("B", "Ich wohne in Deutschland.", "我住在德国。"),
        d("A", "Welche Sprachen sprichst du?", "你会说哪些语言？"),
        d("B", "Ich spreche Chinesisch und lerne Deutsch.", "我会说中文，正在学德语。")
      ],
      [
        e("Welche Sprache spricht man in Deutschland hauptsächlich?", "Deutsch", ["Deutsch", "Chinesisch", "Japanisch"]),
        e("Ergänze: Ich ___ Deutsch.", "lerne", ["lerne", "wohne", "heiße"]),
        e("Was bedeutet „die Sprache“?", "语言", ["国家", "语言", "年龄"])
      ]
    ),

    lesson(
      "de-a0-05", "A0", "Meine Familie",
      "Familie", "Lerne die wichtigsten Wörter für Familienmitglieder.",
      [
        v("die Familie", "家庭", "与自己有亲属关系的人", "Nomen", "die"),
        v("die Mutter", "母亲", "女性家长", "Nomen", "die"),
        v("der Vater", "父亲", "男性家长", "Nomen", "der"),
        v("der Bruder", "兄弟", "男性兄弟姐妹", "Nomen", "der"),
        v("die Schwester", "姐妹", "女性兄弟姐妹", "Nomen", "die"),
        v("das Kind", "孩子", "年幼的人或子女", "Nomen", "das"),
        v("die Eltern", "父母", "母亲和父亲", "Nomen", "die"),
        v("zusammen", "一起", "共同进行某事", "Adverb")
      ],
      [
        s("Meine Familie ist groß.", "我的家庭很大。", "介绍家庭"),
        s("Meine Mutter wohnt in China.", "我妈妈住在中国。", "介绍母亲的居住地"),
        s("Ich habe einen Bruder und eine Schwester.", "我有一个兄弟和一个姐妹。", "介绍兄弟姐妹"),
        s("Das Kind spielt im Garten.", "孩子在花园里玩。", "描述孩子的活动"),
        s("Am Sonntag essen wir zusammen.", "星期天我们一起吃饭。", "描述家庭活动")
      ],
      [
        d("A", "Hast du Geschwister?", "你有兄弟姐妹吗？"),
        d("B", "Ja, ich habe einen Bruder.", "有，我有一个兄弟。"),
        d("A", "Wo wohnen deine Eltern?", "你父母住在哪里？"),
        d("B", "Sie wohnen in China.", "他们住在中国。")
      ],
      [
        e("Wie heißt die weibliche Elternperson?", "die Mutter", ["der Vater", "die Mutter", "der Bruder"]),
        e("Was bedeutet „die Eltern“?", "父母", ["孩子", "父母", "姐妹"]),
        e("Ergänze: Wir essen ___.", "zusammen", ["zusammen", "Mutter", "Kind"])
      ]
    ),

    lesson(
      "de-a0-06", "A0", "Dinge im Alltag",
      "Alltagsgegenstände", "Lerne einfache Wörter für Dinge, die du täglich benutzt.",
      [
        v("das Buch", "书", "用于阅读的印刷或电子作品", "Nomen", "das"),
        v("der Tisch", "桌子", "用于放置物品的家具", "Nomen", "der"),
        v("der Stuhl", "椅子", "供人坐的家具", "Nomen", "der"),
        v("das Handy", "手机", "便携式电话", "Nomen", "das"),
        v("der Schlüssel", "钥匙", "用于开锁的工具", "Nomen", "der"),
        v("die Tasche", "包", "用于携带物品的容器", "Nomen", "die"),
        v("brauchen", "需要", "表示某物是必要的", "Verb"),
        v("haben", "有", "表示拥有", "Verb")
      ],
      [
        s("Das Buch liegt auf dem Tisch.", "书在桌子上。", "描述物品的位置"),
        s("Ich habe mein Handy dabei.", "我带着手机。", "说明随身携带的物品"),
        s("Wo ist mein Schlüssel?", "我的钥匙在哪里？", "询问物品的位置"),
        s("Ich brauche eine Tasche.", "我需要一个包。", "表达需求"),
        s("Der Stuhl steht neben dem Tisch.", "椅子在桌子旁边。", "描述家具的位置")
      ],
      [
        d("A", "Hast du mein Buch gesehen?", "你看到我的书了吗？"),
        d("B", "Ja, es liegt auf dem Tisch.", "看到了，在桌子上。"),
        d("A", "Danke! Wo ist mein Schlüssel?", "谢谢！我的钥匙在哪里？"),
        d("B", "Er liegt neben deiner Tasche.", "在你的包旁边。")
      ],
      [
        e("Was benutzt man zum Öffnen einer Tür?", "der Schlüssel", ["das Buch", "der Schlüssel", "der Stuhl"]),
        e("Ergänze: Ich ___ ein Handy.", "habe", ["habe", "bin", "komme"]),
        e("Was bedeutet „brauchen“?", "需要", ["拥有", "需要", "阅读"])
      ]
    ),

    // ==================== A1 ====================

    lesson(
      "de-a1-01", "A1", "Im Café",
      "Essen und Trinken", "Lerne, im Café etwas zu bestellen und zu bezahlen.",
      [
        v("der Kaffee", "咖啡", "用咖啡豆制作的饮料", "Nomen", "der"),
        v("der Tee", "茶", "用茶叶冲泡的饮料", "Nomen", "der"),
        v("das Wasser", "水", "常见饮用液体", "Nomen", "das"),
        v("das Brötchen", "小面包", "一种小型面包", "Nomen", "das"),
        v("möchten", "想要", "礼貌地表达愿望", "Verb"),
        v("bestellen", "点餐／订购", "向服务人员提出需求", "Verb"),
        v("die Rechnung", "账单", "需要支付的金额清单", "Nomen", "die"),
        v("zusammen", "一起／总共", "共同或合计", "Adverb")
      ],
      [
        s("Ich möchte einen Kaffee, bitte.", "请给我一杯咖啡。", "礼貌地点咖啡"),
        s("Haben Sie auch Tee?", "你们也有茶吗？", "询问饮品"),
        s("Ich nehme ein Brötchen dazu.", "我再要一个小面包。", "增加点餐"),
        s("Die Rechnung, bitte.", "请给我账单。", "请求结账"),
        s("Wir bezahlen zusammen.", "我们一起付钱。", "说明共同付款")
      ],
      [
        d("A", "Guten Tag! Was möchten Sie?", "您好！您想要什么？"),
        d("B", "Einen Kaffee und ein Brötchen, bitte.", "请给我一杯咖啡和一个小面包。"),
        d("A", "Möchten Sie noch etwas?", "您还需要别的吗？"),
        d("B", "Nein, danke. Die Rechnung, bitte.", "不用了，谢谢。请给我账单。"),
        d("A", "Das macht fünf Euro.", "一共五欧元。")
      ],
      [
        e("Was sagt man, wenn man höflich etwas bestellen möchte?", "Ich möchte einen Kaffee, bitte.", ["Ich bin Kaffee.", "Ich möchte einen Kaffee, bitte.", "Ich heiße Kaffee."]),
        e("Was bedeutet „die Rechnung“?", "账单", ["菜单", "账单", "杯子"]),
        e("Ergänze: Wir bezahlen ___.", "zusammen", ["zusammen", "müde", "geradeaus"])
      ]
    ),

    lesson(
      "de-a1-02", "A1", "Mein Alltag",
      "Alltag", "Lerne, über deinen Tagesablauf und deine Gewohnheiten zu sprechen.",
      [
        v("aufstehen", "起床", "离开床铺开始一天", "Verb"),
        v("frühstücken", "吃早餐", "吃早晨的第一餐", "Verb"),
        v("arbeiten", "工作", "进行职业或其他工作", "Verb"),
        v("lernen", "学习", "获得知识或技能", "Verb"),
        v("die Mittagspause", "午休", "中午的休息时间", "Nomen", "die"),
        v("nach Hause", "回家／到家", "表示回到自己的家", "Adverb"),
        v("spät", "晚／迟", "时间比预期晚", "Adverb"),
        v("müde", "疲倦的", "需要休息的状态", "Adjektiv")
      ],
      [
        s("Ich stehe jeden Morgen um sieben Uhr auf.", "我每天早上七点起床。", "描述日常作息"),
        s("Danach frühstücke ich mit meiner Familie.", "之后我和家人一起吃早餐。", "描述早餐习惯"),
        s("Um neun Uhr beginne ich zu arbeiten.", "我九点开始工作。", "描述工作时间"),
        s("In der Mittagspause gehe ich spazieren.", "午休时我去散步。", "描述午休活动"),
        s("Abends bin ich oft müde.", "晚上我经常很累。", "描述晚间状态")
      ],
      [
        d("A", "Wann stehst du normalerweise auf?", "你通常几点起床？"),
        d("B", "Um sieben Uhr. Dann frühstücke ich.", "七点。然后我吃早餐。"),
        d("A", "Wann kommst du nach Hause?", "你什么时候回家？"),
        d("B", "Meistens um sechs Uhr. Danach bin ich müde.", "通常六点。之后我会很累。")
      ],
      [
        e("Was bedeutet „aufstehen“?", "起床", ["睡觉", "起床", "工作"]),
        e("Wann findet normalerweise die Mittagspause statt?", "Mittags", ["Morgens", "Mittags", "Mitternachts"]),
        e("Ergänze: Abends bin ich oft ___.", "müde", ["müde", "geradeaus", "verfügbar"])
      ]
    ),

    lesson(
      "de-a1-03", "A1", "Zeit und Datum",
      "Zeit", "Lerne, Uhrzeiten, Wochentage und Termine zu nennen.",
      [
        v("die Uhr", "钟／点钟", "用于计时或表示整点", "Nomen", "die"),
        v("die Stunde", "小时", "时间单位", "Nomen", "die"),
        v("die Minute", "分钟", "时间单位", "Nomen", "die"),
        v("heute", "今天", "当前这一天", "Adverb"),
        v("morgen", "明天", "今天之后的一天", "Adverb"),
        v("der Montag", "星期一", "一周中的一天", "Nomen", "der"),
        v("der Termin", "约定／预约", "约定好的时间安排", "Nomen", "der"),
        v("pünktlich", "准时的", "在约定时间到达或开始", "Adjektiv")
      ],
      [
        s("Wie spät ist es?", "现在几点？", "询问当前时间"),
        s("Es ist halb neun.", "现在八点半。", "表达时间"),
        s("Heute ist Montag.", "今天是星期一。", "说明星期"),
        s("Morgen habe ich einen Termin.", "我明天有个预约。", "说明未来安排"),
        s("Bitte sei pünktlich.", "请准时。", "提醒对方准时")
      ],
      [
        d("A", "Wie spät ist es?", "现在几点？"),
        d("B", "Es ist acht Uhr.", "现在八点。"),
        d("A", "Wann beginnt der Termin?", "预约几点开始？"),
        d("B", "Morgen um neun Uhr. Bitte sei pünktlich.", "明天九点。请准时。")
      ],
      [
        e("Was bedeutet „morgen“?", "明天", ["昨天", "今天", "明天"]),
        e("Was bedeutet „pünktlich“?", "准时", ["迟到", "准时", "疲倦"]),
        e("Ergänze: Heute ist Montag, ___ ist Dienstag.", "morgen", ["morgen", "gestern", "spät"])
      ]
    ),

    lesson(
      "de-a1-04", "A1", "Einkaufen und Preise",
      "Einkaufen", "Lerne, nach Preisen zu fragen und einfache Einkäufe zu erledigen.",
      [
        v("kaufen", "购买", "用钱换取商品", "Verb"),
        v("kosten", "价格为", "询问或说明价格", "Verb"),
        v("der Preis", "价格", "商品需要支付的金额", "Nomen", "der"),
        v("der Euro", "欧元", "欧盟部分国家使用的货币", "Nomen", "der"),
        v("teuer", "贵的", "价格较高", "Adjektiv"),
        v("billig", "便宜的", "价格较低", "Adjektiv"),
        v("bezahlen", "付款", "支付所需金额", "Verb"),
        v("das Geschäft", "商店", "购买商品的地方", "Nomen", "das")
      ],
      [
        s("Wie viel kostet das?", "这个多少钱？", "询问商品价格"),
        s("Das kostet zehn Euro.", "这个十欧元。", "说明价格"),
        s("Das ist mir zu teuer.", "这对我来说太贵了。", "表达价格过高"),
        s("Ich bezahle mit Karte.", "我用卡付款。", "说明付款方式"),
        s("Das Geschäft ist heute geöffnet.", "这家商店今天营业。", "询问或说明营业情况")
      ],
      [
        d("A", "Guten Tag! Was suchen Sie?", "您好！您在找什么？"),
        d("B", "Wie viel kostet diese Tasche?", "这个包多少钱？"),
        d("A", "Sie kostet zwanzig Euro.", "这个包二十欧元。"),
        d("B", "Gut, ich nehme sie. Kann ich mit Karte bezahlen?", "好，我买了。我可以刷卡吗？")
      ],
      [
        e("Wie fragt man nach dem Preis?", "Wie viel kostet das?", ["Wie viel kostet das?", "Wie spät ist das?", "Woher kommt das?"]),
        e("Was bedeutet „teuer“?", "贵的", ["便宜的", "贵的", "准时的"]),
        e("Womit kann man bezahlen?", "Mit Karte", ["Mit Karte", "Mit Hunger", "Mit Müdigkeit"])
      ]
    ),

    lesson(
      "de-a1-05", "A1", "Essen und Trinken",
      "Lebensmittel", "Lerne, über Lebensmittel, Vorlieben und Mahlzeiten zu sprechen.",
      [
        v("das Brot", "面包", "常见的烘焙食品", "Nomen", "das"),
        v("der Käse", "奶酪", "由乳制品制成的食品", "Nomen", "der"),
        v("das Gemüse", "蔬菜", "可食用的植物部分", "Nomen", "das"),
        v("das Obst", "水果", "可食用的果实", "Nomen", "das"),
        v("das Frühstück", "早餐", "一天中的第一餐", "Nomen", "das"),
        v("das Mittagessen", "午餐", "中午吃的一餐", "Nomen", "das"),
        v("lecker", "美味的", "味道很好", "Adjektiv"),
        v("mögen", "喜欢", "表达个人喜好", "Verb")
      ],
      [
        s("Zum Frühstück esse ich Brot mit Käse.", "早餐我吃奶酪面包。", "描述早餐"),
        s("Ich esse gern Gemüse.", "我喜欢吃蔬菜。", "表达食物偏好"),
        s("Magst du Äpfel?", "你喜欢苹果吗？", "询问食物偏好"),
        s("Das Mittagessen ist sehr lecker.", "午餐非常美味。", "评价食物"),
        s("Wir kaufen frisches Obst.", "我们买新鲜水果。", "描述购物内容")
      ],
      [
        d("A", "Was isst du gern zum Frühstück?", "你早餐喜欢吃什么？"),
        d("B", "Brot mit Käse und etwas Obst.", "面包配奶酪，还有一些水果。"),
        d("A", "Magst du auch Gemüse?", "你也喜欢蔬菜吗？"),
        d("B", "Ja, besonders frisches Gemüse.", "喜欢，尤其是新鲜蔬菜。")
      ],
      [
        e("Was isst man normalerweise zum Frühstück?", "Brot", ["Brot", "Die Rechnung", "Der Schlüssel"]),
        e("Was bedeutet „lecker“?", "美味的", ["疲倦的", "美味的", "便宜的"]),
        e("Ergänze: Ich ___ gern Äpfel.", "mag", ["mag", "bin", "habe"])
      ]
    ),

    lesson(
      "de-a1-06", "A1", "Hobbys und Wochenende",
      "Freizeit", "Lerne, über Hobbys und Freizeitaktivitäten zu sprechen.",
      [
        v("das Hobby", "爱好", "业余时间喜欢做的活动", "Nomen", "das"),
        v("lesen", "阅读", "理解书面文字", "Verb"),
        v("schwimmen", "游泳", "在水中移动", "Verb"),
        v("Rad fahren", "骑自行车", "骑自行车出行或锻炼", "Verb"),
        v("Musik hören", "听音乐", "欣赏音乐", "Redewendung"),
        v("das Wochenende", "周末", "星期六和星期日等休息日", "Nomen", "das"),
        v("gern", "喜欢地", "表达做某事的喜好", "Adverb"),
        v("treffen", "见面", "与某人相见", "Verb")
      ],
      [
        s("Mein Hobby ist Lesen.", "我的爱好是阅读。", "介绍个人爱好"),
        s("Am Wochenende gehe ich gern schwimmen.", "周末我喜欢去游泳。", "介绍周末活动"),
        s("Ich höre abends gern Musik.", "我晚上喜欢听音乐。", "描述音乐爱好"),
        s("Fährst du gern Rad?", "你喜欢骑自行车吗？", "询问爱好"),
        s("Am Samstag treffe ich meine Freunde.", "星期六我和朋友见面。", "安排社交活动")
      ],
      [
        d("A", "Was machst du am Wochenende?", "你周末做什么？"),
        d("B", "Ich fahre gern Rad und lese Bücher.", "我喜欢骑自行车和看书。"),
        d("A", "Möchtest du am Samstag schwimmen gehen?", "你星期六想去游泳吗？"),
        d("B", "Ja, gern! Wir können uns um zehn treffen.", "好啊！我们可以十点见面。")
      ],
      [
        e("Was bedeutet „das Wochenende“?", "周末", ["工作日", "周末", "早晨"]),
        e("Welche Aktivität passt zu „Musik“?", "hören", ["hören", "abbiegen", "bezahlen"]),
        e("Ergänze: Ich ___ gern Bücher.", "lese", ["lese", "esse", "wohne"])
      ]
    ),

    // ==================== A2 ====================

    lesson(
      "de-a2-01", "A2", "Unterwegs in der Stadt",
      "Orientierung", "Lerne, nach dem Weg zu fragen und Wegbeschreibungen zu verstehen.",
      [
        v("die Kreuzung", "十字路口", "道路交汇的地方", "Nomen", "die"),
        v("geradeaus", "直走", "沿当前方向继续前进", "Adverb"),
        v("abbiegen", "转弯", "改变行进方向", "Verb"),
        v("die Ampel", "红绿灯", "控制道路交通的信号灯", "Nomen", "die"),
        v("gegenüber", "在对面", "位于另一侧", "Präposition"),
        v("die Haltestelle", "车站／停靠站", "公共交通停靠的地点", "Nomen", "die"),
        v("der Bahnhof", "火车站", "列车停靠的车站", "Nomen", "der"),
        v("die Entfernung", "距离", "两个地点之间的间隔", "Nomen", "die")
      ],
      [
        s("Entschuldigung, wo ist der Bahnhof?", "请问，火车站在哪里？", "询问地点"),
        s("Gehen Sie hier geradeaus.", "请在这里直走。", "给出方向指引"),
        s("An der Ampel müssen Sie links abbiegen.", "在红绿灯处您需要左转。", "说明转弯位置"),
        s("Die Apotheke liegt gegenüber der Haltestelle.", "药店在车站对面。", "描述地点关系"),
        s("Wie weit ist es bis zum Bahnhof?", "到火车站有多远？", "询问距离")
      ],
      [
        d("A", "Entschuldigung, wie komme ich zum Bahnhof?", "请问，去火车站怎么走？"),
        d("B", "Gehen Sie geradeaus bis zur Ampel.", "请一直直走到红绿灯处。"),
        d("A", "Muss ich dort abbiegen?", "我需要在那里转弯吗？"),
        d("B", "Ja, biegen Sie rechts ab. Der Bahnhof ist gegenüber dem Park.", "是的，请右转。火车站在公园对面。"),
        d("A", "Vielen Dank!", "非常感谢！")
      ],
      [
        e("Was bedeutet „geradeaus“?", "直走", ["左转", "直走", "右转"]),
        e("Wo hält normalerweise ein Bus?", "An der Haltestelle", ["Am Kühlschrank", "An der Haltestelle", "Im Schlafzimmer"]),
        e("Was bedeutet „gegenüber“?", "在对面", ["在里面", "在对面", "在楼上"])
      ]
    ),

    lesson(
      "de-a2-02", "A2", "Termine vereinbaren",
      "Termine", "Lerne, Termine zu vereinbaren, zu verschieben und abzusagen.",
      [
        v("der Termin", "预约／约定", "事先约定的时间安排", "Nomen", "der"),
        v("vereinbaren", "约定", "共同确定时间或安排", "Verb"),
        v("verschieben", "推迟／改期", "将安排改到其他时间", "Verb"),
        v("absagen", "取消", "通知不再进行原定安排", "Verb"),
        v("passen", "合适", "时间或安排适合某人", "Verb"),
        v("verfügbar", "有空的／可用的", "可以安排或使用", "Adjektiv"),
        v("die Bestätigung", "确认", "对安排或信息的正式确认", "Nomen", "die"),
        v("leider", "遗憾的是", "表达遗憾或不便", "Adverb")
      ],
      [
        s("Ich möchte einen Termin vereinbaren.", "我想预约一个时间。", "提出预约请求"),
        s("Passt Ihnen Dienstag um zehn Uhr?", "星期二十点您方便吗？", "确认时间是否合适"),
        s("Leider muss ich den Termin verschieben.", "很遗憾，我必须改期。", "提出改期"),
        s("Ist am Freitag noch ein Termin verfügbar?", "星期五还有可预约的时间吗？", "询问空余时间"),
        s("Vielen Dank für die Bestätigung.", "感谢您的确认。", "回应预约确认")
      ],
      [
        d("A", "Guten Tag, ich möchte einen Termin vereinbaren.", "您好，我想预约一个时间。"),
        d("B", "Passt Ihnen Dienstag um zehn Uhr?", "星期二十点您方便吗？"),
        d("A", "Leider nicht. Können wir den Termin verschieben?", "很遗憾，不方便。我们可以改期吗？"),
        d("B", "Natürlich. Am Donnerstag um elf Uhr wäre noch etwas verfügbar.", "当然可以。星期四十一点还有空。"),
        d("A", "Das passt. Vielen Dank!", "这个时间合适。非常感谢！")
      ],
      [
        e("Was bedeutet „verschieben“?", "改期", ["取消", "改期", "确认"]),
        e("Was fragt man, wenn man wissen möchte, ob eine Zeit passt?", "Passt Ihnen Dienstag?", ["Passt Ihnen Dienstag?", "Wo ist der Bahnhof?", "Was kostet das?"]),
        e("Was bedeutet „die Bestätigung“?", "确认", ["邀请", "确认", "投诉"])
      ]
    ),

    lesson(
      "de-a2-03", "A2", "Reisen und Unterkunft",
      "Reisen", "Lerne, eine Reise zu planen und im Hotel einzuchecken.",
      [
        v("die Reise", "旅行", "从一个地方到另一个地方的行程", "Nomen", "die"),
        v("buchen", "预订", "提前安排交通或住宿", "Verb"),
        v("die Unterkunft", "住宿", "旅行期间居住的地方", "Nomen", "die"),
        v("das Hotel", "酒店", "提供住宿服务的场所", "Nomen", "das"),
        v("das Einzelzimmer", "单人间", "供一人入住的房间", "Nomen", "das"),
        v("die Reservierung", "预订", "提前保留房间或服务", "Nomen", "die"),
        v("die Ankunft", "抵达", "到达目的地", "Nomen", "die"),
        v("übernachten", "过夜", "在某地住宿一晚或多晚", "Verb")
      ],
      [
        s("Ich möchte ein Hotelzimmer buchen.", "我想预订一个酒店房间。", "预订住宿"),
        s("Haben Sie ein Einzelzimmer frei?", "你们有空余的单人间吗？", "询问房间"),
        s("Meine Reservierung ist auf den Namen Wang.", "我的预订登记在王这个名字下。", "说明预订信息"),
        s("Wir kommen am Freitagabend an.", "我们星期五晚上抵达。", "说明抵达时间"),
        s("Wie lange möchten Sie übernachten?", "您打算住几晚？", "询问住宿时长")
      ],
      [
        d("A", "Guten Abend. Haben Sie eine Reservierung?", "晚上好。您有预订吗？"),
        d("B", "Ja, auf den Namen Wang.", "有，登记在王这个名字下。"),
        d("A", "Für zwei Nächte in einem Einzelzimmer?", "预订的是单人间，两晚，对吗？"),
        d("B", "Genau. Wann ist das Frühstück?", "没错。早餐是什么时候？")
      ],
      [
        e("Was bedeutet „buchen“?", "预订", ["取消", "预订", "抵达"]),
        e("Welche Unterkunft ist für eine Person gedacht?", "Das Einzelzimmer", ["Das Einzelzimmer", "Das Restaurant", "Die Haltestelle"]),
        e("Was bedeutet „die Ankunft“?", "抵达", ["离开", "抵达", "付款"])
      ]
    ),

    lesson(
      "de-a2-04", "A2", "Gesundheit und Arztbesuch",
      "Gesundheit", "Lerne, Beschwerden zu beschreiben und einen Arztbesuch vorzubereiten.",
      [
        v("der Arzt", "医生", "提供医疗服务的专业人员", "Nomen", "der"),
        v("die Ärztin", "女医生", "女性医疗专业人员", "Nomen", "die"),
        v("die Schmerzen", "疼痛", "身体不适或痛感", "Nomen", "die"),
        v("der Kopf", "头", "身体的一部分", "Nomen", "der"),
        v("der Bauch", "腹部", "身体躯干的前部", "Nomen", "der"),
        v("das Fieber", "发烧", "体温高于正常水平的状态", "Nomen", "das"),
        v("die Apotheke", "药店", "购买药品的地方", "Nomen", "die"),
        v("untersuchen", "检查", "对身体或情况进行检查", "Verb")
      ],
      [
        s("Ich habe seit gestern Kopfschmerzen.", "我从昨天开始头疼。", "描述身体症状"),
        s("Mein Bauch tut weh.", "我肚子疼。", "描述疼痛部位"),
        s("Ich habe Fieber und fühle mich schwach.", "我发烧了，感觉很虚弱。", "描述身体状况"),
        s("Die Ärztin untersucht mich.", "女医生给我做检查。", "描述就医过程"),
        s("Das Medikament bekomme ich in der Apotheke.", "我可以在药店买到这种药。", "询问药品获取地点")
      ],
      [
        d("A", "Guten Tag. Was fehlt Ihnen?", "您好。您哪里不舒服？"),
        d("B", "Ich habe Kopfschmerzen und Fieber.", "我头疼，还发烧。"),
        d("A", "Seit wann haben Sie diese Beschwerden?", "这些症状从什么时候开始的？"),
        d("B", "Seit gestern. Können Sie mich bitte untersuchen?", "从昨天开始。您能给我检查一下吗？")
      ],
      [
        e("Wo kauft man normalerweise Medikamente?", "In der Apotheke", ["In der Apotheke", "Am Bahnhof", "Im Museum"]),
        e("Was bedeutet „Fieber“?", "发烧", ["咳嗽", "发烧", "饥饿"]),
        e("Ergänze: Mein Bauch tut ___.", "weh", ["weh", "geradeaus", "pünktlich"])
      ]
    ),

    lesson(
      "de-a2-05", "A2", "Wetter und Pläne",
      "Wetter", "Lerne, das Wetter zu beschreiben und Pläne davon abhängig zu machen.",
      [
        v("das Wetter", "天气", "某地某时的大气状况", "Nomen", "das"),
        v("sonnig", "晴朗的", "阳光充足的天气", "Adjektiv"),
        v("bewölkt", "多云的", "天空被云覆盖的", "Adjektiv"),
        v("regnen", "下雨", "降水以雨的形式落下", "Verb"),
        v("der Regen", "雨", "从云中落下的水滴", "Nomen", "der"),
        v("die Temperatur", "温度", "表示冷热程度的数值", "Nomen", "die"),
        v("planen", "计划", "提前安排未来活动", "Verb"),
        v("stattfinden", "举行／发生", "某个活动按安排进行", "Verb")
      ],
      [
        s("Heute ist es sonnig und warm.", "今天晴朗而温暖。", "描述天气"),
        s("Morgen soll es regnen.", "明天预计会下雨。", "谈论天气预报"),
        s("Wie hoch ist die Temperatur heute?", "今天的气温是多少？", "询问气温"),
        s("Wir planen einen Ausflug am Samstag.", "我们计划星期六去郊游。", "安排未来活动"),
        s("Bei Regen findet das Fest drinnen statt.", "下雨时，庆祝活动将在室内举行。", "说明天气对活动的影响")
      ],
      [
        d("A", "Wie wird das Wetter am Wochenende?", "周末天气怎么样？"),
        d("B", "Am Samstag soll es sonnig sein.", "星期六预计会晴朗。"),
        d("A", "Dann können wir einen Ausflug planen.", "那我们可以计划一次郊游。"),
        d("B", "Gute Idee! Bei Regen bleiben wir zu Hause.", "好主意！如果下雨，我们就待在家里。")
      ],
      [
        e("Was bedeutet „bewölkt“?", "多云的", ["晴朗的", "多云的", "炎热的"]),
        e("Was macht man, wenn man eine Aktivität vorbereiten möchte?", "planen", ["planen", "absagen", "abbiegen"]),
        e("Ergänze: Morgen soll es ___.", "regnen", ["regnen", "buchen", "sprechen"])
      ]
    ),

    lesson(
      "de-a2-06", "A2", "Wohnen und Nachbarschaft",
      "Wohnen", "Lerne, über deine Wohnung, die Umgebung und Nachbarn zu sprechen.",
      [
        v("die Wohnung", "公寓", "供人居住的房屋单元", "Nomen", "die"),
        v("das Zimmer", "房间", "建筑物内部的空间", "Nomen", "das"),
        v("die Miete", "房租", "租用住房所支付的费用", "Nomen", "die"),
        v("der Nachbar", "男邻居", "住在附近的人", "Nomen", "der"),
        v("die Nachbarin", "女邻居", "住在附近的女性", "Nomen", "die"),
        v("die Umgebung", "周边环境", "某个地点附近的区域", "Nomen", "die"),
        v("ruhig", "安静的", "噪声较少的", "Adjektiv"),
        v("umziehen", "搬家", "搬到另一个住所", "Verb")
      ],
      [
        s("Unsere Wohnung hat drei Zimmer.", "我们的公寓有三个房间。", "描述住房"),
        s("Die Miete ist ziemlich hoch.", "房租相当高。", "谈论住房成本"),
        s("Unsere Nachbarn sind sehr freundlich.", "我们的邻居非常友好。", "描述邻里关系"),
        s("Die Umgebung ist ruhig und grün.", "周边环境安静而绿意盎然。", "描述居住环境"),
        s("Nächstes Jahr möchten wir umziehen.", "明年我们想搬家。", "谈论搬家计划")
      ],
      [
        d("A", "Wie gefällt dir deine neue Wohnung?", "你觉得你的新公寓怎么样？"),
        d("B", "Sie ist hell und die Umgebung ist ruhig.", "公寓很明亮，周边环境也很安静。"),
        d("A", "Wie hoch ist die Miete?", "房租是多少？"),
        d("B", "Sie ist etwas teuer, aber die Nachbarn sind sehr nett.", "房租有点贵，不过邻居们都很好。")
      ],
      [
        e("Was bezahlt man normalerweise jeden Monat für eine Mietwohnung?", "Die Miete", ["Die Miete", "Die Temperatur", "Die Rechnung"]),
        e("Was bedeutet „umziehen“?", "搬家", ["搬家", "预约", "做饭"]),
        e("Welches Wort beschreibt eine Wohnung mit wenig Lärm?", "ruhig", ["teuer", "ruhig", "bewölkt"])
      ]
    ),

    // ==================== B1 ====================

    lesson(
      "de-b1-01", "B1", "Meinung und Argumente",
      "Diskussion", "Lerne, Meinungen zu formulieren, zu begründen und auf andere Positionen zu reagieren.",
      [
        v("die Meinung", "观点", "对某个问题的个人看法", "Nomen", "die"),
        v("der Vorteil", "优点", "某种选择带来的积极方面", "Nomen", "der"),
        v("der Nachteil", "缺点", "某种选择带来的不利方面", "Nomen", "der"),
        v("begründen", "说明理由", "用理由支持某个观点", "Verb"),
        v("zustimmen", "同意", "认为他人的观点正确或合理", "Verb"),
        v("widersprechen", "反驳／不同意", "表达与他人相反的看法", "Verb"),
        v("einerseits", "一方面", "引出论证的一个方面", "Adverb"),
        v("andererseits", "另一方面", "引出与前一方面相对的观点", "Adverb")
      ],
      [
        s("Meiner Meinung nach ist öffentliche Verkehrsmittel wichtig.", "在我看来，公共交通很重要。", "表达个人观点"),
        s("Ein großer Vorteil ist, dass man Geld sparen kann.", "一个很大的优点是可以省钱。", "提出优点并说明理由"),
        s("Ein Nachteil ist die lange Fahrzeit.", "一个缺点是路程时间长。", "指出缺点"),
        s("Ich stimme dir zu, weil deine Argumente überzeugend sind.", "我同意你，因为你的论据很有说服力。", "表达赞同并解释原因"),
        s("Einerseits ist es praktisch, andererseits kostet es viel Zeit.", "一方面这很方便，另一方面也很费时间。", "比较不同方面")
      ],
      [
        d("A", "Was hältst du von der Arbeit im Homeoffice?", "你怎么看居家办公？"),
        d("B", "Einerseits spart man Zeit, andererseits fehlt manchmal der persönliche Kontakt.", "一方面可以节省时间，另一方面有时缺少面对面的交流。"),
        d("A", "Da stimme ich dir zu. Ein weiterer Vorteil ist die Flexibilität.", "我同意。另一个优点是灵活性。"),
        d("B", "Das stimmt. Trotzdem sollte man die Nachteile berücksichtigen.", "确实如此。不过也应该考虑缺点。")
      ],
      [
        e("Was bedeutet „der Vorteil“?", "优点", ["缺点", "优点", "结论"]),
        e("Welcher Ausdruck leitet einen Gegensatz ein?", "andererseits", ["zum Beispiel", "andererseits", "deshalb"]),
        e("Was bedeutet „zustimmen“?", "同意", ["同意", "拒绝付款", "改期"])
      ]
    ),

    lesson(
      "de-b1-02", "B1", "Probleme am Arbeitsplatz",
      "Beruf", "Lerne, berufliche Probleme zu beschreiben und Lösungen vorzuschlagen.",
      [
        v("die Herausforderung", "挑战", "需要努力解决的困难任务", "Nomen", "die"),
        v("die Lösung", "解决方案", "解决问题的方法", "Nomen", "die"),
        v("vorschlagen", "提议", "提出一种可能的做法", "Verb"),
        v("die Besprechung", "会议", "讨论工作事项的活动", "Nomen", "die"),
        v("die Aufgabe", "任务", "需要完成的工作", "Nomen", "die"),
        v("erledigen", "完成／处理", "把任务处理完毕", "Verb"),
        v("die Rückmeldung", "反馈", "对工作或信息的回应", "Nomen", "die"),
        v("rechtzeitig", "及时的", "在要求的时间之前或准时", "Adjektiv")
      ],
      [
        s("Diese Aufgabe ist eine große Herausforderung.", "这项任务是一个很大的挑战。", "描述工作难题"),
        s("Wir müssen gemeinsam eine Lösung finden.", "我们必须共同找到解决方案。", "提出解决问题的目标"),
        s("Ich schlage vor, die Besprechung zu verschieben.", "我建议推迟会议。", "提出建议"),
        s("Ich werde die Aufgabe bis morgen erledigen.", "我会在明天之前完成这项任务。", "承诺完成工作"),
        s("Könnten Sie mir bitte eine Rückmeldung geben?", "您能给我一些反馈吗？", "请求工作反馈")
      ],
      [
        d("A", "Wir haben ein Problem mit dem aktuellen Projekt.", "我们目前的项目遇到了一个问题。"),
        d("B", "Was ist die größte Herausforderung?", "最大的挑战是什么？"),
        d("A", "Wir müssen die Aufgabe rechtzeitig erledigen.", "我们必须及时完成这项任务。"),
        d("B", "Ich schlage vor, die Aufgaben neu zu verteilen.", "我建议重新分配任务。"),
        d("A", "Das ist eine gute Lösung. Danke für den Vorschlag.", "这是一个好方案。谢谢你的建议。")
      ],
      [
        e("Was bedeutet „die Herausforderung“?", "挑战", ["挑战", "反馈", "预约"]),
        e("Welches Verb bedeutet, eine Idee zu nennen?", "vorschlagen", ["absagen", "vorschlagen", "übernachten"]),
        e("Was bedeutet „rechtzeitig“?", "及时", ["昂贵", "及时", "多云"])
      ]
    ),

    lesson(
      "de-b1-03", "B1", "Bildung und Lernen",
      "Bildung", "Lerne, über Lernmethoden, Weiterbildung und persönliche Lernziele zu sprechen.",
      [
        v("die Bildung", "教育", "知识、能力和学习的发展过程", "Nomen", "die"),
        v("die Weiterbildung", "继续教育", "完成基础教育后继续学习", "Nomen", "die"),
        v("die Fähigkeit", "能力", "完成某项活动所需的本领", "Nomen", "die"),
        v("die Erfahrung", "经验", "通过实践或经历获得的知识", "Nomen", "die"),
        v("sich verbessern", "提高／改善", "使自己的能力或情况变得更好", "Verb"),
        v("die Prüfung", "考试", "检验知识或能力的评估", "Nomen", "die"),
        v("das Ziel", "目标", "希望实现的结果", "Nomen", "das"),
        v("selbstständig", "独立自主的", "能够独立完成任务", "Adjektiv")
      ],
      [
        s("Weiterbildung ist für meine berufliche Entwicklung wichtig.", "继续教育对我的职业发展很重要。", "说明继续学习的价值"),
        s("Ich möchte meine Deutschkenntnisse verbessern.", "我想提高自己的德语水平。", "表达学习目标"),
        s("Durch Erfahrung lernt man oft am besten.", "人们往往能通过经验学得最好。", "谈论学习方式"),
        s("Ich bereite mich auf die Prüfung vor.", "我正在为考试做准备。", "描述备考过程"),
        s("Mein Ziel ist es, selbstständiger zu arbeiten.", "我的目标是更独立地工作。", "说明个人发展目标")
      ],
      [
        d("A", "Warum möchtest du einen Weiterbildungskurs machen?", "你为什么想参加继续教育课程？"),
        d("B", "Ich möchte meine beruflichen Fähigkeiten verbessern.", "我想提高自己的职业技能。"),
        d("A", "Hast du schon Erfahrung mit diesem Thema?", "你在这个主题上有经验吗？"),
        d("B", "Ein bisschen. Ich möchte aber noch selbstständiger werden.", "有一点。不过我还想变得更加独立。")
      ],
      [
        e("Was bedeutet „die Weiterbildung“?", "继续教育", ["继续教育", "住宿", "邻居"]),
        e("Was braucht man zur Überprüfung von Wissen?", "Eine Prüfung", ["Eine Prüfung", "Eine Kreuzung", "Eine Rechnung"]),
        e("Ergänze: Ich möchte meine Kenntnisse ___.", "verbessern", ["verbessern", "abbiegen", "absagen"])
      ]
    ),

    lesson(
      "de-b1-04", "B1", "Umwelt und Nachhaltigkeit",
      "Umwelt", "Lerne, über Umweltschutz, nachhaltiges Verhalten und persönliche Verantwortung zu sprechen.",
      [
        v("die Umwelt", "环境", "人类和其他生物所处的自然条件", "Nomen", "die"),
        v("der Klimawandel", "气候变化", "长期气候模式的变化", "Nomen", "der"),
        v("die Nachhaltigkeit", "可持续性", "兼顾长期环境和社会需求的原则", "Nomen", "die"),
        v("der Abfall", "废弃物", "不再需要的材料或物品", "Nomen", "der"),
        v("recyceln", "回收利用", "将废弃材料加工后再次使用", "Verb"),
        v("vermeiden", "避免", "尽量不让某事发生", "Verb"),
        v("die Energie", "能源／能量", "支持活动或运转的能量", "Nomen", "die"),
        v("verantwortlich", "负责任的", "愿意承担责任的", "Adjektiv")
      ],
      [
        s("Wir sollten die Umwelt besser schützen.", "我们应该更好地保护环境。", "提出环保主张"),
        s("Der Klimawandel betrifft Menschen auf der ganzen Welt.", "气候变化影响全世界的人们。", "描述气候变化的影响"),
        s("Nachhaltigkeit spielt im Alltag eine wichtige Rolle.", "可持续性在日常生活中发挥着重要作用。", "讨论可持续发展"),
        s("Wir können Abfall vermeiden und mehr recyceln.", "我们可以减少废弃物并增加回收利用。", "提出环保行动"),
        s("Jeder ist für seinen Energieverbrauch mitverantwortlich.", "每个人都对自己的能源消耗负有一定责任。", "讨论个人责任")
      ],
      [
        d("A", "Was tust du, um die Umwelt zu schützen?", "你做些什么来保护环境？"),
        d("B", "Ich fahre oft mit dem Fahrrad und vermeide unnötigen Abfall.", "我经常骑自行车，并避免产生不必要的废弃物。"),
        d("A", "Das ist gut. Wir sollten auch Energie sparen.", "这很好。我们也应该节约能源。"),
        d("B", "Genau. Nachhaltigkeit beginnt oft mit kleinen Entscheidungen.", "没错。可持续发展往往始于小小的选择。")
      ],
      [
        e("Was bedeutet „recyceln“?", "回收利用", ["回收利用", "预约", "取消"]),
        e("Was sollte man tun, um Abfall zu reduzieren?", "Abfall vermeiden", ["Mehr Abfall produzieren", "Abfall vermeiden", "Mehr Energie verschwenden"]),
        e("Was bedeutet „verantwortlich“?", "负责任的", ["疲倦的", "负责任的", "多云的"])
      ]
    ),

    lesson(
      "de-b1-05", "B1", "Medien und digitales Leben",
      "Medien", "Lerne, über digitale Medien, Informationen und den verantwortungsvollen Umgang mit Daten zu sprechen.",
      [
        v("die Medien", "媒体", "传播信息的渠道和工具", "Nomen", "die"),
        v("die Nachricht", "消息／新闻", "传递的信息或新闻报道", "Nomen", "die"),
        v("die Quelle", "来源", "信息或内容的出处", "Nomen", "die"),
        v("zuverlässig", "可靠的", "可信且稳定的", "Adjektiv"),
        v("überprüfen", "核实／检查", "确认信息是否正确", "Verb"),
        v("die Daten", "数据", "以数字或其他形式记录的信息", "Nomen", "die"),
        v("die Privatsphäre", "隐私", "个人生活和信息不受干扰的领域", "Nomen", "die"),
        v("veröffentlichen", "发布", "使信息公开可见", "Verb")
      ],
      [
        s("Ich lese Nachrichten meistens online.", "我通常在网上阅读新闻。", "描述获取信息的方式"),
        s("Nicht jede Quelle ist zuverlässig.", "并非每个信息来源都可靠。", "评价信息来源"),
        s("Man sollte wichtige Informationen überprüfen.", "人们应该核实重要信息。", "强调信息核实"),
        s("Persönliche Daten müssen geschützt werden.", "个人数据必须受到保护。", "讨论数据保护"),
        s("Ich veröffentliche nicht alle Fotos im Internet.", "我不会把所有照片都发布到网上。", "谈论网络隐私")
      ],
      [
        d("A", "Wo informierst du dich über aktuelle Nachrichten?", "你在哪里了解最新新闻？"),
        d("B", "Meistens online, aber ich überprüfe die Quellen.", "通常在网上，不过我会核实信息来源。"),
        d("A", "Das ist wichtig. Nicht alle Nachrichten sind zuverlässig.", "这很重要。并非所有新闻都可靠。"),
        d("B", "Genau. Außerdem sollte man seine Privatsphäre schützen.", "没错。此外，人们也应该保护自己的隐私。")
      ],
      [
        e("Was bedeutet „zuverlässig“?", "可靠的", ["可靠的", "昂贵的", "准时的"]),
        e("Was sollte man mit wichtigen Informationen tun?", "Sie überprüfen", ["Sie ungeprüft veröffentlichen", "Sie überprüfen", "Sie sofort löschen"]),
        e("Was bedeutet „die Privatsphäre“?", "隐私", ["价格", "隐私", "气温"])
      ]
    ),

    lesson(
      "de-b1-06", "B1", "Erfahrungen und Zukunftspläne",
      "Zukunft", "Lerne, über vergangene Erfahrungen, persönliche Ziele und Zukunftspläne zu sprechen.",
      [
        v("die Erfahrung", "经历／经验", "通过活动或事件获得的体验或知识", "Nomen", "die"),
        v("die Erinnerung", "回忆", "对过去事件的记忆", "Nomen", "die"),
        v("das Erlebnis", "经历", "亲身经历的事件", "Nomen", "das"),
        v("das Ziel", "目标", "希望实现的结果", "Nomen", "das"),
        v("sich entscheiden", "做决定", "在不同选择中确定一个", "Verb"),
        v("vorhaben", "打算", "计划在未来做某事", "Verb"),
        v("die Möglichkeit", "可能性／机会", "可以采取的选择或行动", "Nomen", "die"),
        v("in Zukunft", "将来", "未来的时间", "Redewendung")
      ],
      [
        s("Die Reise war eine unvergessliche Erfahrung.", "这次旅行是一次难忘的经历。", "评价过去的经历"),
        s("An dieses Erlebnis erinnere ich mich gern.", "我很乐意回忆这段经历。", "表达对回忆的态度"),
        s("In Zukunft möchte ich mehr Sprachen lernen.", "将来我想学习更多语言。", "表达未来目标"),
        s("Ich habe vor, nächstes Jahr eine Weiterbildung zu machen.", "我打算明年参加继续教育。", "说明未来计划"),
        s("Ich muss mich zwischen zwei Möglichkeiten entscheiden.", "我必须在两种可能性之间做出选择。", "描述决策过程")
      ],
      [
        d("A", "Was war deine wichtigste Erfahrung im letzten Jahr?", "去年对你来说最重要的经历是什么？"),
        d("B", "Ich habe an einem spannenden Projekt gearbeitet.", "我参与了一个很有意思的项目。"),
        d("A", "Was hast du in Zukunft vor?", "你将来有什么打算？"),
        d("B", "Ich möchte neue Fähigkeiten lernen und mich beruflich weiterentwickeln.", "我想学习新技能，并在职业上继续发展。")
      ],
      [
        e("Was bedeutet „vorhaben“?", "打算", ["打算", "回收", "转弯"]),
        e("Welcher Ausdruck bezieht sich auf die Zukunft?", "in Zukunft", ["gestern", "in Zukunft", "vor langer Zeit"]),
        e("Was bedeutet „sich entscheiden“?", "做决定", ["做决定", "回忆", "预订"])
      ]
    )
  ];

  const course = {
    code: "de",
    language: "German",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    levels: ["A0", "A1", "A2", "B1"],
    lessons: lessons
  };

  window.WorldLinguaLanguages = window.WorldLinguaLanguages || {};
  window.WorldLinguaLanguages.de = course;
})();
