
(function () {
  const v = (word, translation, meaningZh, partOfSpeech) => ({
    word,
    translation,
    meaningZh,
    partOfSpeech
  });

  const s = (text, translation, meaningZh) => ({
    text,
    translation,
    meaningZh
  });

  const d = (speaker, text, translation) => ({
    speaker,
    text,
    translation
  });

  const e = (question, answer, options, explanation = "") => ({
    question,
    answer,
    options,
    ...(explanation ? { explanation } : {})
  });

  const lesson = (
    id,
    level,
    title,
    category,
    description,
    vocabulary,
    sentences,
    dialogue,
    exercises
  ) => ({
    id,
    level,
    title,
    category,
    description,
    vocabulary,
    sentences,
    dialogue,
    exercises
  });

  const lessons = [
    // =========================================================
    // A0 - Lesson 1: Greetings
    // =========================================================
    lesson(
      "ja-a0-01",
      "A0",
      "あいさつ",
      "greetings",
      "日常生活で使う基本的なあいさつを学びます。",
      [
        v("こんにちは", "Hello", "你好", "あいさつ"),
        v("おはようございます", "Good morning", "早上好", "あいさつ"),
        v("こんばんは", "Good evening", "晚上好", "あいさつ"),
        v("さようなら", "Goodbye", "再见", "あいさつ"),
        v("またね", "See you", "回头见", "あいさつ"),
        v("ありがとう", "Thank you", "谢谢", "表現"),
        v("すみません", "Excuse me / Sorry", "不好意思／对不起", "表現"),
        v("お願いします", "Please", "拜托了／请", "表現")
      ],
      [
        s("こんにちは。", "Hello.", "你好。"),
        s("おはようございます。", "Good morning.", "早上好。"),
        s("こんばんは。", "Good evening.", "晚上好。"),
        s("ありがとうございます。", "Thank you very much.", "非常感谢。"),
        s("また明日。", "See you tomorrow.", "明天见。")
      ],
      [
        d("A", "こんにちは！", "Hello!"),
        d("B", "こんにちは！", "Hello!"),
        d("A", "お元気ですか。", "How are you?"),
        d("B", "はい、元気です。ありがとう。", "Yes, I'm fine. Thank you."),
        d("A", "では、またね。", "Well then, see you.")
      ],
      [
        e("「早上好」は日本語で何と言いますか。", "おはようございます", [
          "こんばんは",
          "おはようございます",
          "さようなら"
        ]),
        e("「Thank you」に当たる表現はどれですか。", "ありがとう", [
          "ありがとう",
          "すみません",
          "またね"
        ]),
        e("「また明日」の意味は何ですか。", "See you tomorrow", [
          "Good morning",
          "See you tomorrow",
          "Good evening"
        ])
      ]
    ),

    // =========================================================
    // A0 - Lesson 2: Introductions
    // =========================================================
    lesson(
      "ja-a0-02",
      "A0",
      "自己紹介",
      "introductions",
      "名前や出身について簡単に話せるようになります。",
      [
        v("私", "I / Me", "我", "代名詞"),
        v("名前", "Name", "名字", "名詞"),
        v("何", "What", "什么", "代名詞"),
        v("誰", "Who", "谁", "代名詞"),
        v("学生", "Student", "学生", "名詞"),
        v("先生", "Teacher", "老师", "名詞"),
        v("初めまして", "Nice to meet you", "初次见面", "表現"),
        v("よろしくお願いします", "Pleased to meet you", "请多关照", "表現")
      ],
      [
        s("私は田中です。", "I am Tanaka.", "我是田中。"),
        s("お名前は何ですか。", "What is your name?", "您叫什么名字？"),
        s("私は学生です。", "I am a student.", "我是一名学生。"),
        s("初めまして。", "Nice to meet you.", "初次见面。"),
        s("よろしくお願いします。", "Pleased to meet you.", "请多关照。")
      ],
      [
        d("A", "初めまして。私はアンナです。", "Nice to meet you. I'm Anna."),
        d("B", "初めまして。私は田中です。", "Nice to meet you. I'm Tanaka."),
        d("A", "学生ですか。", "Are you a student?"),
        d("B", "はい、大学生です。", "Yes, I'm a university student."),
        d("A", "よろしくお願いします。", "Pleased to meet you.")
      ],
      [
        e("「What is your name?」はどれですか。", "お名前は何ですか。", [
          "お名前は何ですか。",
          "お元気ですか。",
          "何時ですか。"
        ]),
        e("「学生」に当たる英語はどれですか。", "Student", [
          "Teacher",
          "Student",
          "Doctor"
        ]),
        e("初めて会ったときによく使う表現はどれですか。", "初めまして", [
          "さようなら",
          "初めまして",
          "おやすみなさい"
        ])
      ]
    ),

    // =========================================================
    // A0 - Lesson 3: Numbers and age
    // =========================================================
    lesson(
      "ja-a0-03",
      "A0",
      "数字と年齢",
      "numbers",
      "基本的な数字と年齢の尋ね方を学びます。",
      [
        v("一", "One", "一", "数字"),
        v("二", "Two", "二", "数字"),
        v("三", "Three", "三", "数字"),
        v("四", "Four", "四", "数字"),
        v("五", "Five", "五", "数字"),
        v("十", "Ten", "十", "数字"),
        v("年齢", "Age", "年龄", "名詞"),
        v("いくつ", "How many / How old", "几个／多大", "疑問詞")
      ],
      [
        s("一、二、三。", "One, two, three.", "一、二、三。"),
        s("私は二十歳です。", "I am twenty years old.", "我二十岁。"),
        s("何歳ですか。", "How old are you?", "你几岁？"),
        s("りんごを三つください。", "Three apples, please.", "请给我三个苹果。"),
        s("電話番号は何番ですか。", "What is your phone number?", "你的电话号码是多少？")
      ],
      [
        d("A", "何歳ですか。", "How old are you?"),
        d("B", "二十五歳です。", "I'm twenty-five."),
        d("A", "そうですか。", "I see."),
        d("B", "あなたは何歳ですか。", "How old are you?")
      ],
      [
        e("「三」はどの数字ですか。", "Three", [
          "Two",
          "Three",
          "Five"
        ]),
        e("「How old are you?」はどれですか。", "何歳ですか。", [
          "何歳ですか。",
          "何時ですか。",
          "何ですか。"
        ]),
        e("「二十歳です」の意味は何ですか。", "I am twenty years old", [
          "I am twelve years old",
          "I am twenty years old",
          "I have twenty apples"
        ])
      ]
    ),

    // =========================================================
    // A0 - Lesson 4: Countries and languages
    // =========================================================
    lesson(
      "ja-a0-04",
      "A0",
      "国と言語",
      "countries",
      "国籍や話せる言語について話します。",
      [
        v("国", "Country", "国家", "名詞"),
        v("日本", "Japan", "日本", "固有名詞"),
        v("ドイツ", "Germany", "德国", "固有名詞"),
        v("中国", "China", "中国", "固有名詞"),
        v("英語", "English", "英语", "名詞"),
        v("日本語", "Japanese", "日语", "名詞"),
        v("話す", "To speak", "说", "動詞"),
        v("どこ", "Where", "哪里", "疑問詞")
      ],
      [
        s("私は日本から来ました。", "I come from Japan.", "我来自日本。"),
        s("ドイツに住んでいます。", "I live in Germany.", "我住在德国。"),
        s("日本語を話します。", "I speak Japanese.", "我说日语。"),
        s("英語を少し話せます。", "I can speak a little English.", "我会说一点英语。"),
        s("どこの出身ですか。", "Where are you from?", "你来自哪里？")
      ],
      [
        d("A", "どこの出身ですか。", "Where are you from?"),
        d("B", "中国の出身です。", "I'm from China."),
        d("A", "日本語を話しますか。", "Do you speak Japanese?"),
        d("B", "はい、少し話します。", "Yes, I speak a little.")
      ],
      [
        e("「ドイツ」はどの国ですか。", "Germany", [
          "Germany",
          "Japan",
          "China"
        ]),
        e("「Japanese language」はどれですか。", "日本語", [
          "英語",
          "日本語",
          "中国"
        ]),
        e("「Where are you from?」はどれですか。", "どこの出身ですか。", [
          "どこの出身ですか。",
          "何歳ですか。",
          "何時ですか。"
        ])
      ]
    ),

    // =========================================================
    // A0 - Lesson 5: Family
    // =========================================================
    lesson(
      "ja-a0-05",
      "A0",
      "家族",
      "family",
      "家族のメンバーを表す言葉を学びます。",
      [
        v("家族", "Family", "家人", "名詞"),
        v("父", "Father", "父亲", "名詞"),
        v("母", "Mother", "母亲", "名詞"),
        v("兄", "Older brother", "哥哥", "名詞"),
        v("姉", "Older sister", "姐姐", "名詞"),
        v("弟", "Younger brother", "弟弟", "名詞"),
        v("妹", "Younger sister", "妹妹", "名詞"),
        v("子ども", "Child", "孩子", "名詞")
      ],
      [
        s("家族は四人です。", "There are four people in my family.", "我家有四口人。"),
        s("父は会社員です。", "My father is an office worker.", "我父亲是公司职员。"),
        s("母は先生です。", "My mother is a teacher.", "我母亲是老师。"),
        s("兄が一人います。", "I have one older brother.", "我有一个哥哥。"),
        s("妹は学生です。", "My younger sister is a student.", "我妹妹是学生。")
      ],
      [
        d("A", "家族は何人ですか。", "How many people are in your family?"),
        d("B", "四人です。", "There are four people."),
        d("A", "兄弟はいますか。", "Do you have any siblings?"),
        d("B", "はい、妹が一人います。", "Yes, I have one younger sister.")
      ],
      [
        e("「母」の意味は何ですか。", "Mother", [
          "Father",
          "Mother",
          "Older brother"
        ]),
        e("「Family」は日本語で何ですか。", "家族", [
          "家族",
          "学校",
          "友達"
        ]),
        e("「妹は学生です」の意味は何ですか。", "My younger sister is a student", [
          "My older sister is a teacher",
          "My younger sister is a student",
          "My mother is a student"
        ])
      ]
    ),

    // =========================================================
    // A0 - Lesson 6: Everyday objects
    // =========================================================
    lesson(
      "ja-a0-06",
      "A0",
      "身近な物",
      "everyday_objects",
      "身の回りの物の名前と、物について尋ねる表現を学びます。",
      [
        v("本", "Book", "书", "名詞"),
        v("ペン", "Pen", "笔", "名詞"),
        v("机", "Desk", "桌子", "名詞"),
        v("椅子", "Chair", "椅子", "名詞"),
        v("かばん", "Bag", "包", "名詞"),
        v("携帯電話", "Mobile phone", "手机", "名詞"),
        v("これ", "This", "这个", "代名詞"),
        v("それ", "That", "那个", "代名詞")
      ],
      [
        s("これは本です。", "This is a book.", "这是一本书。"),
        s("それは私のペンです。", "That is my pen.", "那是我的笔。"),
        s("これは誰のかばんですか。", "Whose bag is this?", "这是谁的包？"),
        s("机の上に本があります。", "There is a book on the desk.", "桌子上有一本书。"),
        s("携帯電話はどこですか。", "Where is the mobile phone?", "手机在哪里？")
      ],
      [
        d("A", "これは何ですか。", "What is this?"),
        d("B", "それは私の本です。", "That is my book."),
        d("A", "ペンもありますか。", "Do you also have a pen?"),
        d("B", "はい、かばんの中にあります。", "Yes, it's in my bag.")
      ],
      [
        e("「Book」はどれですか。", "本", [
          "本",
          "椅子",
          "かばん"
        ]),
        e("「これは本です」の意味は何ですか。", "This is a book", [
          "That is a chair",
          "This is a book",
          "Where is the book?"
        ]),
        e("「Where is the mobile phone?」はどれですか。", "携帯電話はどこですか。", [
          "携帯電話はどこですか。",
          "これは何ですか。",
          "誰の本ですか。"
        ])
      ]
    ),

    // =========================================================
    // A1 - Lesson 1: At the café
    // =========================================================
    lesson(
      "ja-a1-01",
      "A1",
      "カフェで",
      "cafe",
      "カフェで注文したり、会計をしたりする表現を学びます。",
      [
        v("コーヒー", "Coffee", "咖啡", "名詞"),
        v("お茶", "Tea", "茶", "名詞"),
        v("水", "Water", "水", "名詞"),
        v("パン", "Bread", "面包", "名詞"),
        v("注文する", "To order", "点餐", "動詞"),
        v("ください", "Please give me", "请给我", "表現"),
        v("メニュー", "Menu", "菜单", "名詞"),
        v("お会計", "Bill / Payment", "结账", "名詞")
      ],
      [
        s("コーヒーを一つください。", "One coffee, please.", "请给我一杯咖啡。"),
        s("メニューを見せてください。", "Please show me the menu.", "请让我看一下菜单。"),
        s("水もお願いします。", "Water as well, please.", "也请给我一杯水。"),
        s("ここで食べてもいいですか。", "May I eat here?", "我可以在这里吃吗？"),
        s("お会計をお願いします。", "The bill, please.", "请结账。")
      ],
      [
        d("店員", "いらっしゃいませ。", "Welcome."),
        d("客", "コーヒーとパンをください。", "Coffee and bread, please."),
        d("店員", "店内でお召し上がりですか。", "Will you have them here?"),
        d("客", "はい、ここで食べます。", "Yes, I'll eat here."),
        d("客", "お会計をお願いします。", "The bill, please.")
      ],
      [
        e("「One coffee, please.」はどれですか。", "コーヒーを一つください。", [
          "コーヒーを一つください。",
          "コーヒーはどこですか。",
          "コーヒーがありません。"
        ]),
        e("「メニュー」の意味は何ですか。", "Menu", [
          "Menu",
          "Station",
          "Ticket"
        ]),
        e("会計をしたいとき、何と言いますか。", "お会計をお願いします。", [
          "おはようございます。",
          "お会計をお願いします。",
          "どこの出身ですか。"
        ])
      ]
    ),

    // =========================================================
    // A1 - Lesson 2: Daily routine
    // =========================================================
    lesson(
      "ja-a1-02",
      "A1",
      "毎日の生活",
      "daily_routine",
      "毎日の行動や生活習慣について話します。",
      [
        v("起きる", "To get up", "起床", "動詞"),
        v("朝ご飯", "Breakfast", "早餐", "名詞"),
        v("食べる", "To eat", "吃", "動詞"),
        v("働く", "To work", "工作", "動詞"),
        v("勉強する", "To study", "学习", "動詞"),
        v("帰る", "To return home", "回家", "動詞"),
        v("寝る", "To sleep", "睡觉", "動詞"),
        v("毎日", "Every day", "每天", "副詞")
      ],
      [
        s("毎朝七時に起きます。", "I get up at seven every morning.", "我每天早上七点起床。"),
        s("朝ご飯を食べます。", "I eat breakfast.", "我吃早餐。"),
        s("九時から働きます。", "I work from nine.", "我从九点开始工作。"),
        s("夜、日本語を勉強します。", "I study Japanese in the evening.", "我晚上学习日语。"),
        s("十一時に寝ます。", "I go to bed at eleven.", "我十一点睡觉。")
      ],
      [
        d("A", "毎朝何時に起きますか。", "What time do you get up every morning?"),
        d("B", "七時に起きます。", "I get up at seven."),
        d("A", "朝ご飯を食べますか。", "Do you eat breakfast?"),
        d("B", "はい、毎朝食べます。", "Yes, I eat breakfast every morning.")
      ],
      [
        e("「起きる」の意味は何ですか。", "To get up", [
          "To sleep",
          "To get up",
          "To work"
        ]),
        e("「I study Japanese in the evening.」はどれですか。", "夜、日本語を勉強します。", [
          "夜、日本語を勉強します。",
          "朝ご飯を食べます。",
          "十一時に寝ます。"
        ]),
        e("「毎日」の意味は何ですか。", "Every day", [
          "Every day",
          "Tomorrow",
          "Last week"
        ])
      ]
    ),

    // =========================================================
    // A1 - Lesson 3: Time and dates
    // =========================================================
    lesson(
      "ja-a1-03",
      "A1",
      "時刻と日付",
      "time_dates",
      "時刻、曜日、日付を尋ねたり答えたりします。",
      [
        v("時間", "Time", "时间", "名詞"),
        v("今日", "Today", "今天", "名詞"),
        v("明日", "Tomorrow", "明天", "名詞"),
        v("昨日", "Yesterday", "昨天", "名詞"),
        v("月曜日", "Monday", "星期一", "名詞"),
        v("週末", "Weekend", "周末", "名詞"),
        v("何時", "What time", "几点", "疑問詞"),
        v("日付", "Date", "日期", "名詞")
      ],
      [
        s("今、何時ですか。", "What time is it now?", "现在几点？"),
        s("三時半です。", "It is half past three.", "现在三点半。"),
        s("今日は月曜日です。", "Today is Monday.", "今天是星期一。"),
        s("明日は休みです。", "Tomorrow is a day off.", "明天休息。"),
        s("誕生日は五月十日です。", "My birthday is May tenth.", "我的生日是五月十日。")
      ],
      [
        d("A", "今、何時ですか。", "What time is it now?"),
        d("B", "二時十五分です。", "It is 2:15."),
        d("A", "今日は何曜日ですか。", "What day is it today?"),
        d("B", "火曜日です。", "It is Tuesday.")
      ],
      [
        e("「Today」はどれですか。", "今日", [
          "今日",
          "明日",
          "昨日"
        ]),
        e("「What time is it now?」はどれですか。", "今、何時ですか。", [
          "今、何時ですか。",
          "今日は何曜日ですか。",
          "誕生日はいつですか。"
        ]),
        e("「週末」の意味は何ですか。", "Weekend", [
          "Weekday",
          "Weekend",
          "Birthday"
        ])
      ]
    ),

    // =========================================================
    // A1 - Lesson 4: Shopping and prices
    // =========================================================
    lesson(
      "ja-a1-04",
      "A1",
      "買い物と値段",
      "shopping",
      "お店で商品を探し、値段を尋ねる表現を学びます。",
      [
        v("買う", "To buy", "买", "動詞"),
        v("売る", "To sell", "卖", "動詞"),
        v("値段", "Price", "价格", "名詞"),
        v("高い", "Expensive / High", "贵／高", "形容詞"),
        v("安い", "Cheap / Inexpensive", "便宜", "形容詞"),
        v("円", "Yen", "日元", "名詞"),
        v("いくら", "How much", "多少钱", "疑問詞"),
        v("試着する", "To try on", "试穿", "動詞")
      ],
      [
        s("これはいくらですか。", "How much is this?", "这个多少钱？"),
        s("千円です。", "It is one thousand yen.", "一千日元。"),
        s("もう少し安いものはありますか。", "Do you have something cheaper?", "有便宜一点的吗？"),
        s("これを買いたいです。", "I would like to buy this.", "我想买这个。"),
        s("試着してもいいですか。", "May I try it on?", "我可以试穿吗？")
      ],
      [
        d("店員", "何かお探しですか。", "Can I help you find anything?"),
        d("客", "このシャツはいくらですか。", "How much is this shirt?"),
        d("店員", "二千円です。", "It is two thousand yen."),
        d("客", "試着してもいいですか。", "May I try it on?"),
        d("店員", "はい、どうぞ。", "Yes, go ahead.")
      ],
      [
        e("「How much is this?」はどれですか。", "これはいくらですか。", [
          "これはいくらですか。",
          "これは誰ですか。",
          "どこへ行きますか。"
        ]),
        e("「安い」の意味は何ですか。", "Cheap", [
          "Expensive",
          "Cheap",
          "Large"
        ]),
        e("服を着てサイズを確認したいときは何と言いますか。", "試着してもいいですか。", [
          "試着してもいいですか。",
          "お会計をお願いします。",
          "何時ですか。"
        ])
      ]
    ),

    // =========================================================
    // A1 - Lesson 5: Food and drink
    // =========================================================
    lesson(
      "ja-a1-05",
      "A1",
      "食べ物と飲み物",
      "food_drink",
      "食べ物や飲み物について話し、好みを伝えます。",
      [
        v("ご飯", "Rice / Meal", "米饭／饭", "名詞"),
        v("魚", "Fish", "鱼", "名詞"),
        v("肉", "Meat", "肉", "名詞"),
        v("野菜", "Vegetables", "蔬菜", "名詞"),
        v("果物", "Fruit", "水果", "名詞"),
        v("牛乳", "Milk", "牛奶", "名詞"),
        v("好き", "To like", "喜欢", "形容動詞"),
        v("苦手", "Not good at / Dislike", "不擅长／不太喜欢", "形容動詞")
      ],
      [
        s("魚が好きです。", "I like fish.", "我喜欢鱼。"),
        s("野菜を毎日食べます。", "I eat vegetables every day.", "我每天吃蔬菜。"),
        s("牛乳を一杯ください。", "A glass of milk, please.", "请给我一杯牛奶。"),
        s("辛い食べ物は苦手です。", "I'm not good with spicy food.", "我不太能吃辣。"),
        s("朝ご飯にパンを食べます。", "I eat bread for breakfast.", "我早餐吃面包。")
      ],
      [
        d("A", "何が好きですか。", "What do you like?"),
        d("B", "魚と野菜が好きです。", "I like fish and vegetables."),
        d("A", "肉も食べますか。", "Do you also eat meat?"),
        d("B", "はい、でも鶏肉が一番好きです。", "Yes, but chicken is my favourite.")
      ],
      [
        e("「Vegetables」はどれですか。", "野菜", [
          "果物",
          "野菜",
          "牛乳"
        ]),
        e("「I like fish.」はどれですか。", "魚が好きです。", [
          "魚が好きです。",
          "魚を買います。",
          "魚は高いです。"
        ]),
        e("「苦手」はどんな意味ですか。", "Not good at / Dislike", [
          "Love",
          "Not good at / Dislike",
          "Very hungry"
        ])
      ]
    ),

    // =========================================================
    // A1 - Lesson 6: Hobbies and weekends
    // =========================================================
    lesson(
      "ja-a1-06",
      "A1",
      "趣味と週末",
      "hobbies",
      "趣味や週末の予定について話します。",
      [
        v("趣味", "Hobby", "爱好", "名詞"),
        v("音楽", "Music", "音乐", "名詞"),
        v("映画", "Movie", "电影", "名詞"),
        v("読む", "To read", "读", "動詞"),
        v("泳ぐ", "To swim", "游泳", "動詞"),
        v("散歩する", "To take a walk", "散步", "動詞"),
        v("週末", "Weekend", "周末", "名詞"),
        v("一緒に", "Together", "一起", "副詞")
      ],
      [
        s("趣味は音楽を聞くことです。", "My hobby is listening to music.", "我的爱好是听音乐。"),
        s("週末に映画を見ます。", "I watch movies on weekends.", "我周末看电影。"),
        s("本を読むのが好きです。", "I like reading books.", "我喜欢读书。"),
        s("公園を散歩します。", "I take a walk in the park.", "我在公园散步。"),
        s("一緒に映画を見ませんか。", "Would you like to watch a movie together?", "要不要一起看电影？")
      ],
      [
        d("A", "週末は何をしますか。", "What do you do on weekends?"),
        d("B", "よく映画を見ます。", "I often watch movies."),
        d("A", "一緒に映画を見ませんか。", "Would you like to watch a movie together?"),
        d("B", "いいですね。", "That sounds good.")
      ],
      [
        e("「Hobby」は日本語で何ですか。", "趣味", [
          "趣味",
          "仕事",
          "天気"
        ]),
        e("「I take a walk in the park.」はどれですか。", "公園を散歩します。", [
          "公園を散歩します。",
          "本を買います。",
          "音楽を作ります。"
        ]),
        e("友達を映画に誘う表現はどれですか。", "一緒に映画を見ませんか。", [
          "何歳ですか。",
          "一緒に映画を見ませんか。",
          "これはいくらですか。"
        ])
      ]
    ),

    // =========================================================
    // A2 - Lesson 1: Getting around town
    // =========================================================
    lesson(
      "ja-a2-01",
      "A2",
      "街で道を尋ねる",
      "directions",
      "道を尋ね、目的地までの行き方を説明します。",
      [
        v("交差点", "Intersection", "十字路", "名詞"),
        v("まっすぐ", "Straight ahead", "直走", "副詞"),
        v("曲がる", "To turn", "转弯", "動詞"),
        v("信号", "Traffic light", "红绿灯", "名詞"),
        v("向かい", "Opposite side", "对面", "名詞"),
        v("駅", "Station", "车站", "名詞"),
        v("バス停", "Bus stop", "公交车站", "名詞"),
        v("道", "Road / Way", "道路／路线", "名詞")
      ],
      [
        s("駅までどう行けばいいですか。", "How can I get to the station?", "请问怎么去车站？"),
        s("この道をまっすぐ行ってください。", "Please go straight along this road.", "请沿着这条路直走。"),
        s("次の交差点を右に曲がってください。", "Turn right at the next intersection.", "请在下一个路口右转。"),
        s("銀行は駅の向かいにあります。", "The bank is opposite the station.", "银行在车站对面。"),
        s("バス停はどこですか。", "Where is the bus stop?", "公交车站在哪里？")
      ],
      [
        d("A", "すみません、駅はどこですか。", "Excuse me, where is the station?"),
        d("B", "この道をまっすぐ行ってください。", "Go straight along this road."),
        d("A", "信号のところですか。", "Is it by the traffic light?"),
        d("B", "はい、そこで右に曲がってください。", "Yes, turn right there.")
      ],
      [
        e("「Intersection」はどれですか。", "交差点", [
          "交差点",
          "駅",
          "橋"
        ]),
        e("「Go straight」 はどれですか。", "まっすぐ行く", [
          "左に曲がる",
          "まっすぐ行く",
          "戻る"
        ]),
        e("「The bank is opposite the station.」はどれですか。", "銀行は駅の向かいにあります。", [
          "銀行は駅の向かいにあります。",
          "銀行は駅の中にあります。",
          "銀行は駅の後ろにあります。"
        ])
      ]
    ),

    // =========================================================
    // A2 - Lesson 2: Making appointments
    // =========================================================
    lesson(
      "ja-a2-02",
      "A2",
      "予約・約束をする",
      "appointments",
      "予定を決めたり、変更したりする表現を学びます。",
      [
        v("予定", "Plan / Schedule", "计划／安排", "名詞"),
        v("約束", "Appointment / Promise", "约定", "名詞"),
        v("予約", "Reservation", "预约", "名詞"),
        v("変更する", "To change", "更改", "動詞"),
        v("延期する", "To postpone", "延期", "動詞"),
        v("都合", "Convenience / Availability", "是否方便", "名詞"),
        v("空いている", "To be available", "有空", "動詞"),
        v("確認する", "To confirm", "确认", "動詞")
      ],
      [
        s("明日の午後は空いていますか。", "Are you available tomorrow afternoon?", "你明天下午有空吗？"),
        s("三時に会いましょう。", "Let's meet at three.", "我们三点见吧。"),
        s("予定を変更したいです。", "I'd like to change the schedule.", "我想更改一下安排。"),
        s("予約を確認してください。", "Please confirm the reservation.", "请确认预约。"),
        s("別の日に延期できますか。", "Can we postpone it to another day?", "可以延期到另一天吗？")
      ],
      [
        d("A", "明日の午後、都合はいかがですか。", "Are you available tomorrow afternoon?"),
        d("B", "三時なら大丈夫です。", "Three o'clock works for me."),
        d("A", "では、三時に会いましょう。", "Then let's meet at three."),
        d("B", "分かりました。よろしくお願いします。", "All right. Thank you.")
      ],
      [
        e("「Are you available?」に近い表現はどれですか。", "空いていますか。", [
          "空いていますか。",
          "分かりましたか。",
          "帰りましたか。"
        ]),
        e("「To postpone」はどれですか。", "延期する", [
          "確認する",
          "延期する",
          "予約する"
        ]),
        e("「I'd like to change the schedule.」はどれですか。", "予定を変更したいです。", [
          "予定を変更したいです。",
          "予定がありません。",
          "予約を確認しました。"
        ])
      ]
    ),

    // =========================================================
    // A2 - Lesson 3: Travel and accommodation
    // =========================================================
    lesson(
      "ja-a2-03",
      "A2",
      "旅行と宿泊",
      "travel",
      "旅行の計画、ホテルの予約、チェックインの表現を学びます。",
      [
        v("旅行", "Travel / Trip", "旅行", "名詞"),
        v("ホテル", "Hotel", "酒店", "名詞"),
        v("予約する", "To reserve", "预订", "動詞"),
        v("部屋", "Room", "房间", "名詞"),
        v("荷物", "Luggage", "行李", "名詞"),
        v("パスポート", "Passport", "护照", "名詞"),
        v("チェックイン", "Check-in", "入住登记", "名詞"),
        v("出発する", "To depart", "出发", "動詞")
      ],
      [
        s("ホテルを二泊予約しました。", "I booked a hotel for two nights.", "我预订了两晚酒店。"),
        s("チェックインをお願いします。", "I'd like to check in.", "我要办理入住。"),
        s("荷物を預かってもらえますか。", "Could you keep my luggage?", "可以帮我保管行李吗？"),
        s("電車は何時に出発しますか。", "What time does the train depart?", "火车几点出发？"),
        s("パスポートを見せてください。", "Please show me your passport.", "请出示护照。")
      ],
      [
        d("スタッフ", "いらっしゃいませ。ご予約はありますか。", "Welcome. Do you have a reservation?"),
        d("客", "はい、田中の名前で予約しました。", "Yes, I booked under the name Tanaka."),
        d("スタッフ", "パスポートをお願いします。", "Your passport, please."),
        d("客", "はい、どうぞ。", "Yes, here you are."),
        d("スタッフ", "こちらがお部屋の鍵です。", "Here is your room key.")
      ],
      [
        e("「Hotel」はどれですか。", "ホテル", [
          "ホテル",
          "駅",
          "病院"
        ]),
        e("「I'd like to check in.」はどれですか。", "チェックインをお願いします。", [
          "チェックインをお願いします。",
          "チェックアウトしました。",
          "予約を変更します。"
        ]),
        e("旅行で身分証明に使うものはどれですか。", "パスポート", [
          "パスポート",
          "メニュー",
          "傘"
        ])
      ]
    ),

    // =========================================================
    // A2 - Lesson 4: Health and doctor
    // =========================================================
    lesson(
      "ja-a2-04",
      "A2",
      "病院で",
      "health",
      "体調を説明し、病院で必要な情報を伝えます。",
      [
        v("病院", "Hospital", "医院", "名詞"),
        v("医者", "Doctor", "医生", "名詞"),
        v("頭", "Head", "头", "名詞"),
        v("お腹", "Stomach", "肚子", "名詞"),
        v("痛い", "Painful", "疼", "形容詞"),
        v("熱", "Fever", "发烧", "名詞"),
        v("薬", "Medicine", "药", "名詞"),
        v("症状", "Symptom", "症状", "名詞")
      ],
      [
        s("頭が痛いです。", "I have a headache.", "我头疼。"),
        s("昨日から熱があります。", "I've had a fever since yesterday.", "我从昨天开始发烧。"),
        s("お腹が痛いです。", "I have a stomachache.", "我肚子疼。"),
        s("この薬は一日三回飲んでください。", "Please take this medicine three times a day.", "请每天服用这种药三次。"),
        s("症状を説明してください。", "Please describe your symptoms.", "请描述一下您的症状。")
      ],
      [
        d("医者", "今日はどうしましたか。", "What brings you here today?"),
        d("患者", "昨日から頭が痛いです。", "I've had a headache since yesterday."),
        d("医者", "熱はありますか。", "Do you have a fever?"),
        d("患者", "はい、少しあります。", "Yes, a slight one."),
        d("医者", "では、体温を測りましょう。", "Then let's take your temperature.")
      ],
      [
        e("「I have a headache.」はどれですか。", "頭が痛いです。", [
          "頭が痛いです。",
          "お腹がすきました。",
          "薬を買いました。"
        ]),
        e("「Medicine」はどれですか。", "薬", [
          "薬",
          "症状",
          "病院"
        ]),
        e("体の具合が悪いとき、どこへ行きますか。", "病院", [
          "映画館",
          "病院",
          "駅"
        ])
      ]
    ),

    // =========================================================
    // A2 - Lesson 5: Weather and plans
    // =========================================================
    lesson(
      "ja-a2-05",
      "A2",
      "天気と予定",
      "weather",
      "天気を説明し、天候に合わせて予定を話します。",
      [
        v("天気", "Weather", "天气", "名詞"),
        v("晴れ", "Sunny weather", "晴天", "名詞"),
        v("雨", "Rain", "雨", "名詞"),
        v("曇り", "Cloudy weather", "阴天", "名詞"),
        v("暑い", "Hot", "热", "形容詞"),
        v("寒い", "Cold", "冷", "形容詞"),
        v("傘", "Umbrella", "雨伞", "名詞"),
        v("予定", "Plan", "计划", "名詞")
      ],
      [
        s("今日はよく晴れています。", "It is sunny today.", "今天天气晴朗。"),
        s("午後から雨が降るそうです。", "It is supposed to rain this afternoon.", "听说今天下午会下雨。"),
        s("傘を持って行きましょう。", "Let's take an umbrella.", "我们带上雨伞吧。"),
        s("暑いので、家にいます。", "I'll stay home because it's hot.", "因为天气热，我待在家里。"),
        s("雨なら、予定を変更します。", "If it rains, I'll change my plans.", "如果下雨，我就改变计划。")
      ],
      [
        d("A", "明日の天気はどうでしょうか。", "What will the weather be like tomorrow?"),
        d("B", "雨が降るそうです。", "It's supposed to rain."),
        d("A", "では、散歩はやめましょうか。", "Then shall we skip the walk?"),
        d("B", "そうですね。映画を見ましょう。", "Good idea. Let's watch a movie.")
      ],
      [
        e("「Umbrella」はどれですか。", "傘", [
          "傘",
          "帽子",
          "靴"
        ]),
        e("「It is sunny today.」はどれですか。", "今日はよく晴れています。", [
          "今日はよく晴れています。",
          "今日は雪が降っています。",
          "今日はとても寒いです。"
        ]),
        e("雨の日に持って行くものはどれですか。", "傘", [
          "傘",
          "水着",
          "サングラス"
        ])
      ]
    ),

    // =========================================================
    // A2 - Lesson 6: Housing and neighbourhood
    // =========================================================
    lesson(
      "ja-a2-06",
      "A2",
      "住まいと近所",
      "housing",
      "住んでいる場所や家の設備、近所について説明します。",
      [
        v("家", "House / Home", "家", "名詞"),
        v("部屋", "Room", "房间", "名詞"),
        v("台所", "Kitchen", "厨房", "名詞"),
        v("浴室", "Bathroom", "浴室", "名詞"),
        v("近所", "Neighbourhood", "附近／邻里", "名詞"),
        v("便利", "Convenient", "方便", "形容動詞"),
        v("静か", "Quiet", "安静", "形容動詞"),
        v("引っ越す", "To move house", "搬家", "動詞")
      ],
      [
        s("駅の近くに住んでいます。", "I live near the station.", "我住在车站附近。"),
        s("この町はとても静かです。", "This town is very quiet.", "这个城镇很安静。"),
        s("近所にスーパーがあります。", "There is a supermarket nearby.", "附近有一家超市。"),
        s("台所は一階にあります。", "The kitchen is on the first floor.", "厨房在一楼。"),
        s("来月、新しい家に引っ越します。", "I'm moving to a new house next month.", "我下个月搬到新家。")
      ],
      [
        d("A", "この町に住んでどのくらいですか。", "How long have you lived in this town?"),
        d("B", "三年になります。", "It has been three years."),
        d("A", "近所は便利ですか。", "Is the neighbourhood convenient?"),
        d("B", "はい、スーパーも駅も近いです。", "Yes, both the supermarket and station are nearby.")
      ],
      [
        e("「Neighbourhood」はどれですか。", "近所", [
          "近所",
          "台所",
          "浴室"
        ]),
        e("「This town is very quiet.」はどれですか。", "この町はとても静かです。", [
          "この町はとても静かです。",
          "この町はとても暑いです。",
          "この町はとても遠いです。"
        ]),
        e("「To move house」はどれですか。", "引っ越す", [
          "引っ越す",
          "買い物する",
          "散歩する"
        ])
      ]
    ),

    // =========================================================
    // B1 - Lesson 1: Opinions and arguments
    // =========================================================
    lesson(
      "ja-b1-01",
      "B1",
      "意見と理由",
      "opinions",
      "自分の意見を述べ、理由を説明し、相手の考えに反応します。",
      [
        v("意見", "Opinion", "意见", "名詞"),
        v("理由", "Reason", "理由", "名詞"),
        v("利点", "Advantage", "优点", "名詞"),
        v("欠点", "Disadvantage", "缺点", "名詞"),
        v("賛成する", "To agree", "赞成", "動詞"),
        v("反対する", "To disagree / Oppose", "反对", "動詞"),
        v("例えば", "For example", "例如", "副詞"),
        v("一方で", "On the other hand", "另一方面", "表現")
      ],
      [
        s("私の意見では、公共交通機関は重要です。", "In my opinion, public transport is important.", "我认为公共交通很重要。"),
        s("その理由は、環境に優しいからです。", "The reason is that it is environmentally friendly.", "理由是它对环境友好。"),
        s("この方法には多くの利点があります。", "This method has many advantages.", "这种方法有很多优点。"),
        s("一方で、費用が高いという欠点もあります。", "On the other hand, one disadvantage is the high cost.", "另一方面，它也有成本高的缺点。"),
        s("私はその考えに賛成です。", "I agree with that idea.", "我赞成这个想法。")
      ],
      [
        d("A", "公共交通機関をもっと利用すべきだと思います。", "I think we should use public transport more."),
        d("B", "私も賛成です。環境に優しいですから。", "I agree. It is environmentally friendly."),
        d("A", "ただ、地方では不便な場合もあります。", "However, it can be inconvenient in rural areas."),
        d("B", "確かにそうですね。一方で、改善の余地があります。", "That's true. On the other hand, there is room for improvement.")
      ],
      [
        e("「Opinion」はどれですか。", "意見", [
          "意見",
          "理由",
          "欠点"
        ]),
        e("「I agree with that idea.」はどれですか。", "私はその考えに賛成です。", [
          "私はその考えに賛成です。",
          "私はその場所を知りません。",
          "私は予定を変更します。"
        ]),
        e("反対の考えを示す表現はどれですか。", "反対する", [
          "賛成する",
          "反対する",
          "確認する"
        ])
      ]
    ),

    // =========================================================
    // B1 - Lesson 2: Problems at work
    // =========================================================
    lesson(
      "ja-b1-02",
      "B1",
      "職場の問題",
      "work",
      "職場で問題を説明し、解決策を提案します。",
      [
        v("職場", "Workplace", "工作场所", "名詞"),
        v("課題", "Task / Challenge", "任务／课题", "名詞"),
        v("解決策", "Solution", "解决方案", "名詞"),
        v("提案する", "To propose", "提议", "動詞"),
        v("会議", "Meeting", "会议", "名詞"),
        v("報告する", "To report", "汇报", "動詞"),
        v("締め切り", "Deadline", "截止日期", "名詞"),
        v("協力する", "To cooperate", "合作", "動詞")
      ],
      [
        s("この課題は少し難しいです。", "This task is a little difficult.", "这个任务有点难。"),
        s("解決策を提案したいです。", "I'd like to propose a solution.", "我想提出一个解决方案。"),
        s("午後に会議があります。", "There is a meeting this afternoon.", "今天下午有会议。"),
        s("締め切りまでに報告書を提出します。", "I'll submit the report by the deadline.", "我会在截止日期前提交报告。"),
        s("チームで協力すれば、解決できると思います。", "I think we can solve it by working as a team.", "我认为团队合作就能解决这个问题。")
      ],
      [
        d("A", "この作業は予定より遅れています。", "This task is behind schedule."),
        d("B", "原因は何でしょうか。", "What is the reason?"),
        d("A", "必要なデータがまだ届いていません。", "The required data has not arrived yet."),
        d("B", "では、担当者に確認して、解決策を考えましょう。", "Then let's check with the person responsible and consider a solution.")
      ],
      [
        e("「Deadline」はどれですか。", "締め切り", [
          "締め切り",
          "会議",
          "休暇"
        ]),
        e("「I'd like to propose a solution.」はどれですか。", "解決策を提案したいです。", [
          "解決策を提案したいです。",
          "今日は休みたいです。",
          "報告書を読みました。"
        ]),
        e("「To cooperate」はどれですか。", "協力する", [
          "反対する",
          "協力する",
          "延期する"
        ])
      ]
    ),

    // =========================================================
    // B1 - Lesson 3: Education and learning
    // =========================================================
    lesson(
      "ja-b1-03",
      "B1",
      "学習と教育",
      "education",
      "学習方法や教育の経験について説明します。",
      [
        v("教育", "Education", "教育", "名詞"),
        v("経験", "Experience", "经验", "名詞"),
        v("能力", "Ability", "能力", "名詞"),
        v("知識", "Knowledge", "知识", "名詞"),
        v("目標", "Goal", "目标", "名詞"),
        v("身につける", "To acquire", "掌握", "動詞"),
        v("練習する", "To practise", "练习", "動詞"),
        v("成長する", "To grow", "成长", "動詞")
      ],
      [
        s("外国語を学ぶには、毎日の練習が必要です。", "Daily practice is necessary to learn a foreign language.", "学习外语需要每天练习。"),
        s("新しい知識を身につけたいです。", "I want to acquire new knowledge.", "我想掌握新知识。"),
        s("失敗から多くのことを学びました。", "I learned a lot from failure.", "我从失败中学到了很多。"),
        s("今年の目標は会話能力を高めることです。", "My goal this year is to improve my conversation skills.", "我今年的目标是提高会话能力。"),
        s("学習を続けることで成長できます。", "You can grow by continuing to learn.", "通过持续学习可以不断成长。")
      ],
      [
        d("A", "外国語を上達させるには、何が大切だと思いますか。", "What do you think is important for improving a foreign language?"),
        d("B", "毎日少しずつ練習することだと思います。", "I think practising a little every day is important."),
        d("A", "間違えることは気になりませんか。", "Does making mistakes bother you?"),
        d("B", "いいえ、間違いから学べると思います。", "No, I think we can learn from mistakes.")
      ],
      [
        e("「Knowledge」はどれですか。", "知識", [
          "知識",
          "目標",
          "経験"
        ]),
        e("「My goal this year is to improve my conversation skills.」はどれですか。", "今年の目標は会話能力を高めることです。", [
          "今年の目標は会話能力を高めることです。",
          "今年は旅行に行きません。",
          "毎日七時に起きます。"
        ]),
        e("「To practise」はどれですか。", "練習する", [
          "練習する",
          "延期する",
          "反対する"
        ])
      ]
    ),

    // =========================================================
    // B1 - Lesson 4: Environment and sustainability
    // =========================================================
    lesson(
      "ja-b1-04",
      "B1",
      "環境と持続可能性",
      "environment",
      "環境問題と、日常生活でできる対策について話します。",
      [
        v("環境", "Environment", "环境", "名詞"),
        v("気候変動", "Climate change", "气候变化", "名詞"),
        v("資源", "Resources", "资源", "名詞"),
        v("節約する", "To save / Conserve", "节约", "動詞"),
        v("再利用する", "To reuse", "再利用", "動詞"),
        v("廃棄物", "Waste", "废弃物", "名詞"),
        v("持続可能", "Sustainable", "可持续的", "形容動詞"),
        v("対策", "Measure / Countermeasure", "对策", "名詞")
      ],
      [
        s("気候変動は世界的な問題です。", "Climate change is a global problem.", "气候变化是一个全球性问题。"),
        s("水や電気を節約することが大切です。", "It is important to save water and electricity.", "节约水和电很重要。"),
        s("使える物はできるだけ再利用しましょう。", "Let's reuse things whenever possible.", "尽可能重复利用还能使用的物品吧。"),
        s("廃棄物を減らすために、買いすぎないようにしています。", "I try not to buy too much in order to reduce waste.", "为了减少废弃物，我尽量不买太多东西。"),
        s("持続可能な生活には、小さな行動も重要です。", "Small actions also matter for a sustainable lifestyle.", "对于可持续生活方式，小小的行动也很重要。")
      ],
      [
        d("A", "環境を守るために、何ができると思いますか。", "What do you think we can do to protect the environment?"),
        d("B", "まず、使い捨ての物を減らせると思います。", "First, I think we can reduce disposable products."),
        d("A", "確かにそうですね。公共交通機関も利用できます。", "That's true. We can also use public transport."),
        d("B", "はい。日常生活の小さな工夫が大切です。", "Yes. Small changes in daily life are important.")
      ],
      [
        e("「Environment」はどれですか。", "環境", [
          "環境",
          "教育",
          "経験"
        ]),
        e("「To reuse」はどれですか。", "再利用する", [
          "廃棄する",
          "再利用する",
          "浪費する"
        ]),
        e("環境負荷を減らす行動はどれですか。", "水や電気を節約する", [
          "水や電気を節約する",
          "必要のない物を毎日買う",
          "使える物をすべて捨てる"
        ])
      ]
    ),

    // =========================================================
    // B1 - Lesson 5: Media and digital life
    // =========================================================
    lesson(
      "ja-b1-05",
      "B1",
      "メディアとデジタル生活",
      "digital_life",
      "インターネット、情報、デジタル技術について話します。",
      [
        v("情報", "Information", "信息", "名詞"),
        v("報道", "News reporting", "新闻报道", "名詞"),
        v("信頼できる", "Reliable", "可靠的", "表現"),
        v("個人情報", "Personal information", "个人信息", "名詞"),
        v("共有する", "To share", "分享", "動詞"),
        v("確認する", "To verify / Confirm", "核实／确认", "動詞"),
        v("便利", "Convenient", "方便", "形容動詞"),
        v("影響", "Influence / Impact", "影响", "名詞")
      ],
      [
        s("インターネットでは多くの情報を得られます。", "You can obtain a lot of information on the internet.", "可以在互联网上获取大量信息。"),
        s("情報が正しいかどうか確認する必要があります。", "We need to check whether the information is correct.", "我们需要确认信息是否正确。"),
        s("個人情報を簡単に共有しないほうがいいです。", "It is better not to share personal information carelessly.", "最好不要随意分享个人信息。"),
        s("デジタル技術は生活に大きな影響を与えています。", "Digital technology has a major impact on our lives.", "数字技术对我们的生活产生了很大影响。"),
        s("便利な一方で、使いすぎには注意が必要です。", "Although it is convenient, we need to be careful not to overuse it.", "虽然很方便，但也需要注意不要过度使用。")
      ],
      [
        d("A", "ニュースは主にどこで見ていますか。", "Where do you mainly get your news?"),
        d("B", "インターネットで見ています。", "I get it on the internet."),
        d("A", "情報が正しいかどうか確認しますか。", "Do you check whether the information is correct?"),
        d("B", "はい、ほかの情報源とも比べます。", "Yes, I compare it with other sources.")
      ],
      [
        e("「Personal information」はどれですか。", "個人情報", [
          "個人情報",
          "交通情報",
          "天気予報"
        ]),
        e("「We need to check whether the information is correct.」はどれですか。", "情報が正しいかどうか確認する必要があります。", [
          "情報が正しいかどうか確認する必要があります。",
          "情報をすべて削除する必要があります。",
          "情報を確認せずに共有します。"
        ]),
        e("ネット上の情報を見たときに大切なことは何ですか。", "情報の正確さを確認する", [
          "すべての情報を信じる",
          "情報の正確さを確認する",
          "個人情報を公開する"
        ])
      ]
    ),

    // =========================================================
    // B1 - Lesson 6: Experiences and future plans
    // =========================================================
    lesson(
      "ja-b1-06",
      "B1",
      "経験と将来の計画",
      "experiences_future",
      "これまでの経験を説明し、将来の目標や計画について話します。",
      [
        v("経験", "Experience", "经验", "名詞"),
        v("挑戦", "Challenge", "挑战", "名詞"),
        v("目標", "Goal", "目标", "名詞"),
        v("将来", "Future", "将来", "名詞"),
        v("計画", "Plan", "计划", "名詞"),
        v("実現する", "To achieve / Realise", "实现", "動詞"),
        v("努力する", "To make an effort", "努力", "動詞"),
        v("成し遂げる", "To accomplish", "完成／实现", "動詞")
      ],
      [
        s("海外で働いた経験があります。", "I have experience working abroad.", "我有在国外工作的经历。"),
        s("新しいことに挑戦したいです。", "I want to try something new.", "我想挑战新事物。"),
        s("将来は自分の会社を持ちたいです。", "I want to have my own company in the future.", "我将来想拥有自己的公司。"),
        s("目標を実現するために努力しています。", "I'm working hard to achieve my goal.", "我正在努力实现自己的目标。"),
        s("困難があっても、最後までやり遂げたいです。", "Even if there are difficulties, I want to see it through to the end.", "即使遇到困难，我也想坚持到底。")
      ],
      [
        d("A", "将来、何をしたいですか。", "What would you like to do in the future?"),
        d("B", "海外で働いてみたいです。", "I'd like to try working abroad."),
        d("A", "そのために、何をしていますか。", "What are you doing to prepare for that?"),
        d("B", "外国語を勉強して、経験を積んでいます。", "I'm studying foreign languages and gaining experience."),
        d("A", "目標が実現するといいですね。", "I hope you achieve your goal.")
      ],
      [
        e("「Experience」はどれですか。", "経験", [
          "経験",
          "計画",
          "天気"
        ]),
        e("「I want to try something new.」はどれですか。", "新しいことに挑戦したいです。", [
          "新しいことに挑戦したいです。",
          "今日は何もしません。",
          "昨日、家に帰りました。"
        ]),
        e("「To achieve a goal」はどれですか。", "目標を実現する", [
          "目標を忘れる",
          "目標を実現する",
          "目標を変更せずに考えない"
        ])
      ]
    )
  ];

  const course = {
    code: "ja",
    language: "Japanese",
    nativeName: "日本語",
    flag: "🇯🇵",
    levels: ["A0", "A1", "A2", "B1"],
    lessons
  };

  window.WorldLinguaLanguages = window.WorldLinguaLanguages || {};
  window.WorldLinguaLanguages.ja = course;
})();
