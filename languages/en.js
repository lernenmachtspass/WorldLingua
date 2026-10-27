
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
      "en-a0-01", "A0", "Hello and Goodbye",
      "Greetings", "Learn common greetings and polite expressions.",
      [
        v("hello", "你好", "用于问候他人", "interjection"),
        v("good morning", "早上好", "早晨使用的问候语", "greeting"),
        v("good afternoon", "下午好", "下午使用的问候语", "greeting"),
        v("good evening", "晚上好", "晚上使用的问候语", "greeting"),
        v("goodbye", "再见", "告别时使用的表达", "interjection"),
        v("see you", "回头见", "非正式告别表达", "expression"),
        v("thank you", "谢谢", "表达感谢", "expression"),
        v("please", "请", "礼貌地提出请求", "expression")
      ],
      [
        s("Hello! How are you?", "你好！你好吗？", "询问对方近况"),
        s("Good morning, Anna!", "早上好，安娜！", "早晨问候"),
        s("Good afternoon! How can I help you?", "下午好！我能帮您什么？", "礼貌地向他人提供帮助"),
        s("Thank you for your help.", "谢谢你的帮助。", "表达感谢"),
        s("Goodbye, and have a nice evening!", "再见，祝你晚上愉快！", "告别并表达祝愿")
      ],
      [
        d("A", "Hello, Peter!", "你好，彼得！"),
        d("B", "Hello, Anna! How are you?", "你好，安娜！你好吗？"),
        d("A", "I'm fine, thank you. And you?", "我很好，谢谢。你呢？"),
        d("B", "I'm fine too. See you!", "我也很好。回头见！")
      ],
      [
        e("How do you greet someone in the morning?", "Good morning", ["Good morning", "Good night", "Goodbye"]),
        e("What do you say when someone helps you?", "Thank you", ["Please", "Thank you", "Goodbye"]),
        e("Which expression can you use to say goodbye?", "See you", ["Hello", "See you", "Good morning"])
      ]
    ),

    lesson(
      "en-a0-02", "A0", "My Name Is ...",
      "Introductions", "Learn to introduce yourself and ask about names and origins.",
      [
        v("I", "我", "第一人称单数代词", "pronoun"),
        v("you", "你／您", "第二人称代词", "pronoun"),
        v("to be", "是", "用于身份、状态和特征", "verb"),
        v("to come", "来／来自", "表示移动或来源", "verb"),
        v("from", "来自／从", "表示来源或起点", "preposition"),
        v("name", "名字", "一个人的姓名", "noun"),
        v("nice to meet you", "很高兴认识你", "初次见面时的表达", "expression"),
        v("country", "国家", "一个国家或地区", "noun")
      ],
      [
        s("My name is Anna.", "我叫安娜。", "介绍自己的姓名"),
        s("What is your name?", "你叫什么名字？", "询问对方姓名"),
        s("I come from China.", "我来自中国。", "介绍自己的来源"),
        s("Which country do you come from?", "你来自哪个国家？", "询问对方来自哪里"),
        s("Nice to meet you.", "很高兴认识你。", "初次见面时表达友好")
      ],
      [
        d("A", "Hello! What is your name?", "你好！你叫什么名字？"),
        d("B", "My name is Li. And you?", "我叫李。你呢？"),
        d("A", "I'm Anna. Where do you come from?", "我叫安娜。你来自哪里？"),
        d("B", "I come from China. Nice to meet you!", "我来自中国。很高兴认识你！")
      ],
      [
        e("How do you ask someone for their name?", "What is your name?", ["What is your name?", "Where do you live?", "How old are you?"]),
        e("Complete: I come ___ China.", "from", ["in", "from", "at"]),
        e("What does “Nice to meet you” mean?", "很高兴认识你", ["再见", "很高兴认识你", "我不知道"])
      ]
    ),

    lesson(
      "en-a0-03", "A0", "Numbers and Age",
      "Numbers", "Learn numbers and how to ask and answer questions about age.",
      [
        v("one", "一", "数字 1", "number"),
        v("two", "二", "数字 2", "number"),
        v("three", "三", "数字 3", "number"),
        v("ten", "十", "数字 10", "number"),
        v("twenty", "二十", "数字 20", "number"),
        v("old", "岁／年老的", "用于描述年龄", "adjective"),
        v("age", "年龄", "一个人的年龄", "noun"),
        v("number", "数字", "表示数量的符号或数值", "noun")
      ],
      [
        s("I am four years old.", "我四岁。", "介绍年龄"),
        s("How old are you?", "你几岁？", "询问年龄"),
        s("My son is five years old.", "我儿子五岁。", "介绍家人的年龄"),
        s("The number is ten.", "这个数字是十。", "识别数字"),
        s("I have two brothers.", "我有两个兄弟。", "用数字表达数量")
      ],
      [
        d("A", "How old are you?", "你几岁？"),
        d("B", "I am six years old.", "我六岁。"),
        d("A", "And how old is your sister?", "你妹妹／姐姐几岁？"),
        d("B", "She is ten years old.", "她十岁。")
      ],
      [
        e("How do you ask about someone's age?", "How old are you?", ["How old are you?", "What is your name?", "Where do you come from?"]),
        e("What does “twenty” mean?", "二十", ["十二", "二十", "三十"]),
        e("Complete: I am five years ___.", "old", ["old", "age", "years"])
      ]
    ),

    lesson(
      "en-a0-04", "A0", "Countries and Languages",
      "Countries", "Learn to name countries and talk about languages.",
      [
        v("Germany", "德国", "欧洲国家", "proper noun"),
        v("China", "中国", "东亚国家", "proper noun"),
        v("language", "语言", "用于交流的语言系统", "noun"),
        v("German", "德语", "德国的语言", "noun"),
        v("Chinese", "中文", "中国的语言", "noun"),
        v("to speak", "说", "使用语言进行交流", "verb"),
        v("to learn", "学习", "获得知识或技能", "verb"),
        v("to live", "居住", "表示居住地点", "verb")
      ],
      [
        s("I live in Germany.", "我住在德国。", "介绍居住地"),
        s("I speak Chinese and German.", "我会说中文和德语。", "介绍语言能力"),
        s("Which language are you learning?", "你在学什么语言？", "询问学习的语言"),
        s("I am learning German.", "我在学德语。", "介绍正在学习的语言"),
        s("Do you speak English?", "你会说英语吗？", "询问语言能力")
      ],
      [
        d("A", "Where do you live?", "你住在哪里？"),
        d("B", "I live in Germany.", "我住在德国。"),
        d("A", "Which languages do you speak?", "你会说哪些语言？"),
        d("B", "I speak Chinese and I am learning German.", "我会说中文，正在学德语。")
      ],
      [
        e("Which language is mainly spoken in Germany?", "German", ["German", "Chinese", "Japanese"]),
        e("Complete: I ___ German.", "am learning", ["am learning", "am living", "am called"]),
        e("What does “language” mean?", "语言", ["国家", "语言", "年龄"])
      ]
    ),

    lesson(
      "en-a0-05", "A0", "My Family",
      "Family", "Learn the most important words for family members.",
      [
        v("family", "家庭", "与自己有亲属关系的人", "noun"),
        v("mother", "母亲", "女性家长", "noun"),
        v("father", "父亲", "男性家长", "noun"),
        v("brother", "兄弟", "男性兄弟姐妹", "noun"),
        v("sister", "姐妹", "女性兄弟姐妹", "noun"),
        v("child", "孩子", "年幼的人或子女", "noun"),
        v("parents", "父母", "母亲和父亲", "noun"),
        v("together", "一起", "共同进行某事", "adverb")
      ],
      [
        s("My family is big.", "我的家庭很大。", "介绍家庭"),
        s("My mother lives in China.", "我妈妈住在中国。", "介绍母亲的居住地"),
        s("I have a brother and a sister.", "我有一个兄弟和一个姐妹。", "介绍兄弟姐妹"),
        s("The child is playing in the garden.", "孩子在花园里玩。", "描述孩子的活动"),
        s("We eat together on Sundays.", "星期天我们一起吃饭。", "描述家庭活动")
      ],
      [
        d("A", "Do you have any brothers or sisters?", "你有兄弟姐妹吗？"),
        d("B", "Yes, I have a brother.", "有，我有一个兄弟。"),
        d("A", "Where do your parents live?", "你父母住在哪里？"),
        d("B", "They live in China.", "他们住在中国。")
      ],
      [
        e("What do you call your female parent?", "mother", ["father", "mother", "brother"]),
        e("What does “parents” mean?", "父母", ["孩子", "父母", "姐妹"]),
        e("Complete: We eat ___.", "together", ["together", "mother", "child"])
      ]
    ),

    lesson(
      "en-a0-06", "A0", "Everyday Objects",
      "Everyday Objects", "Learn simple words for things you use every day.",
      [
        v("book", "书", "用于阅读的印刷或电子作品", "noun"),
        v("table", "桌子", "用于放置物品的家具", "noun"),
        v("chair", "椅子", "供人坐的家具", "noun"),
        v("mobile phone", "手机", "便携式电话", "noun"),
        v("key", "钥匙", "用于开锁的工具", "noun"),
        v("bag", "包", "用于携带物品的容器", "noun"),
        v("to need", "需要", "表示某物是必要的", "verb"),
        v("to have", "有", "表示拥有", "verb")
      ],
      [
        s("The book is on the table.", "书在桌子上。", "描述物品的位置"),
        s("I have my mobile phone with me.", "我带着手机。", "说明随身携带的物品"),
        s("Where is my key?", "我的钥匙在哪里？", "询问物品的位置"),
        s("I need a bag.", "我需要一个包。", "表达需求"),
        s("The chair is next to the table.", "椅子在桌子旁边。", "描述家具的位置")
      ],
      [
        d("A", "Have you seen my book?", "你看到我的书了吗？"),
        d("B", "Yes, it is on the table.", "看到了，在桌子上。"),
        d("A", "Thank you! Where is my key?", "谢谢！我的钥匙在哪里？"),
        d("B", "It is next to your bag.", "在你的包旁边。")
      ],
      [
        e("What do you use to unlock a door?", "key", ["book", "key", "chair"]),
        e("Complete: I ___ a mobile phone.", "have", ["have", "am", "come"]),
        e("What does “to need” mean?", "需要", ["拥有", "需要", "阅读"])
      ]
    ),

    // ==================== A1 ====================

    lesson(
      "en-a1-01", "A1", "At the Café",
      "Food and Drink", "Learn how to order something and pay at a café.",
      [
        v("coffee", "咖啡", "用咖啡豆制作的饮料", "noun"),
        v("tea", "茶", "用茶叶冲泡的饮料", "noun"),
        v("water", "水", "常见饮用液体", "noun"),
        v("bread roll", "小面包", "一种小型面包", "noun"),
        v("would like", "想要", "礼貌地表达愿望", "verb phrase"),
        v("to order", "点餐／订购", "向服务人员提出需求", "verb"),
        v("bill", "账单", "需要支付的金额清单", "noun"),
        v("together", "一起／总共", "共同或合计", "adverb")
      ],
      [
        s("I would like a coffee, please.", "请给我一杯咖啡。", "礼貌地点咖啡"),
        s("Do you have tea as well?", "你们也有茶吗？", "询问饮品"),
        s("I will have a bread roll with that.", "我再要一个小面包。", "增加点餐"),
        s("The bill, please.", "请给我账单。", "请求结账"),
        s("We will pay together.", "我们一起付钱。", "说明共同付款")
      ],
      [
        d("A", "Good afternoon! What would you like?", "下午好！您想要什么？"),
        d("B", "A coffee and a bread roll, please.", "请给我一杯咖啡和一个小面包。"),
        d("A", "Would you like anything else?", "您还需要别的吗？"),
        d("B", "No, thank you. The bill, please.", "不用了，谢谢。请给我账单。"),
        d("A", "That will be five euros.", "一共五欧元。")
      ],
      [
        e("How do you politely order something?", "I would like a coffee, please.", ["I am coffee.", "I would like a coffee, please.", "My name is coffee."]),
        e("What does “bill” mean in a café?", "账单", ["菜单", "账单", "杯子"]),
        e("Complete: We will pay ___.", "together", ["together", "tired", "straight ahead"])
      ]
    ),

    lesson(
      "en-a1-02", "A1", "My Daily Routine",
      "Daily Life", "Learn to talk about your daily routine and habits.",
      [
        v("to get up", "起床", "离开床铺开始一天", "verb"),
        v("to have breakfast", "吃早餐", "吃早晨的第一餐", "verb phrase"),
        v("to work", "工作", "进行职业或其他工作", "verb"),
        v("to study", "学习", "获得知识或技能", "verb"),
        v("lunch break", "午休", "中午的休息时间", "noun"),
        v("go home", "回家／到家", "表示回到自己的家", "verb phrase"),
        v("late", "晚／迟", "时间比预期晚", "adverb"),
        v("tired", "疲倦的", "需要休息的状态", "adjective")
      ],
      [
        s("I get up at seven every morning.", "我每天早上七点起床。", "描述日常作息"),
        s("After that, I have breakfast with my family.", "之后我和家人一起吃早餐。", "描述早餐习惯"),
        s("I start work at nine o'clock.", "我九点开始工作。", "描述工作时间"),
        s("I go for a walk during my lunch break.", "午休时我去散步。", "描述午休活动"),
        s("I am often tired in the evening.", "晚上我经常很累。", "描述晚间状态")
      ],
      [
        d("A", "What time do you usually get up?", "你通常几点起床？"),
        d("B", "At seven. Then I have breakfast.", "七点。然后我吃早餐。"),
        d("A", "When do you go home?", "你什么时候回家？"),
        d("B", "Usually at six. After that, I am tired.", "通常六点。之后我会很累。")
      ],
      [
        e("What does “to get up” mean?", "起床", ["睡觉", "起床", "工作"]),
        e("When is a lunch break normally?", "At midday", ["In the morning", "At midday", "At midnight"]),
        e("Complete: I am often ___ in the evening.", "tired", ["tired", "straight ahead", "available"])
      ]
    ),

    lesson(
      "en-a1-03", "A1", "Time and Dates",
      "Time", "Learn to talk about times, weekdays and appointments.",
      [
        v("clock", "钟／点钟", "用于计时或表示整点", "noun"),
        v("hour", "小时", "时间单位", "noun"),
        v("minute", "分钟", "时间单位", "noun"),
        v("today", "今天", "当前这一天", "adverb"),
        v("tomorrow", "明天", "今天之后的一天", "adverb"),
        v("Monday", "星期一", "一周中的一天", "proper noun"),
        v("appointment", "约定／预约", "约定好的时间安排", "noun"),
        v("on time", "准时", "在约定时间到达或开始", "expression")
      ],
      [
        s("What time is it?", "现在几点？", "询问当前时间"),
        s("It is half past eight.", "现在八点半。", "表达时间"),
        s("Today is Monday.", "今天是星期一。", "说明星期"),
        s("I have an appointment tomorrow.", "我明天有个预约。", "说明未来安排"),
        s("Please be on time.", "请准时。", "提醒对方准时")
      ],
      [
        d("A", "What time is it?", "现在几点？"),
        d("B", "It is eight o'clock.", "现在八点。"),
        d("A", "When does the appointment start?", "预约几点开始？"),
        d("B", "Tomorrow at nine. Please be on time.", "明天九点。请准时。")
      ],
      [
        e("What does “tomorrow” mean?", "明天", ["昨天", "今天", "明天"]),
        e("What does “on time” mean?", "准时", ["迟到", "准时", "疲倦"]),
        e("Complete: Today is Monday, ___ is Tuesday.", "tomorrow", ["tomorrow", "yesterday", "late"])
      ]
    ),

    lesson(
      "en-a1-04", "A1", "Shopping and Prices",
      "Shopping", "Learn to ask about prices and make simple purchases.",
      [
        v("to buy", "购买", "用钱换取商品", "verb"),
        v("to cost", "价格为", "询问或说明价格", "verb"),
        v("price", "价格", "商品需要支付的金额", "noun"),
        v("euro", "欧元", "欧盟部分国家使用的货币", "noun"),
        v("expensive", "贵的", "价格较高", "adjective"),
        v("cheap", "便宜的", "价格较低", "adjective"),
        v("to pay", "付款", "支付所需金额", "verb"),
        v("shop", "商店", "购买商品的地方", "noun")
      ],
      [
        s("How much does this cost?", "这个多少钱？", "询问商品价格"),
        s("It costs ten euros.", "这个十欧元。", "说明价格"),
        s("That is too expensive for me.", "这对我来说太贵了。", "表达价格过高"),
        s("I will pay by card.", "我用卡付款。", "说明付款方式"),
        s("The shop is open today.", "这家商店今天营业。", "询问或说明营业情况")
      ],
      [
        d("A", "Good afternoon! What are you looking for?", "下午好！您在找什么？"),
        d("B", "How much is this bag?", "这个包多少钱？"),
        d("A", "It costs twenty euros.", "这个包二十欧元。"),
        d("B", "Great, I'll take it. Can I pay by card?", "好，我买了。我可以刷卡吗？")
      ],
      [
        e("How do you ask about a price?", "How much does this cost?", ["How much does this cost?", "What time is it?", "Where do you come from?"]),
        e("What does “expensive” mean?", "贵的", ["便宜的", "贵的", "准时的"]),
        e("How can you pay in a shop?", "By card", ["By card", "With hunger", "With tiredness"])
      ]
    ),

    lesson(
      "en-a1-05", "A1", "Food and Drink",
      "Food", "Learn to talk about food, preferences and meals.",
      [
        v("bread", "面包", "常见的烘焙食品", "noun"),
        v("cheese", "奶酪", "由乳制品制成的食品", "noun"),
        v("vegetables", "蔬菜", "可食用的植物部分", "noun"),
        v("fruit", "水果", "可食用的果实", "noun"),
        v("breakfast", "早餐", "一天中的第一餐", "noun"),
        v("lunch", "午餐", "中午吃的一餐", "noun"),
        v("delicious", "美味的", "味道很好", "adjective"),
        v("to like", "喜欢", "表达个人喜好", "verb")
      ],
      [
        s("I eat bread with cheese for breakfast.", "早餐我吃奶酪面包。", "描述早餐"),
        s("I like eating vegetables.", "我喜欢吃蔬菜。", "表达食物偏好"),
        s("Do you like apples?", "你喜欢苹果吗？", "询问食物偏好"),
        s("Lunch is very delicious.", "午餐非常美味。", "评价食物"),
        s("We buy fresh fruit.", "我们买新鲜水果。", "描述购物内容")
      ],
      [
        d("A", "What do you like to eat for breakfast?", "你早餐喜欢吃什么？"),
        d("B", "Bread with cheese and some fruit.", "面包配奶酪，还有一些水果。"),
        d("A", "Do you like vegetables too?", "你也喜欢蔬菜吗？"),
        d("B", "Yes, especially fresh vegetables.", "喜欢，尤其是新鲜蔬菜。")
      ],
      [
        e("What might someone eat for breakfast?", "Bread", ["Bread", "The bill", "The key"]),
        e("What does “delicious” mean?", "美味的", ["疲倦的", "美味的", "便宜的"]),
        e("Complete: I ___ apples.", "like", ["like", "am", "have"])
      ]
    ),

    lesson(
      "en-a1-06", "A1", "Hobbies and Weekends",
      "Free Time", "Learn to talk about hobbies and leisure activities.",
      [
        v("hobby", "爱好", "业余时间喜欢做的活动", "noun"),
        v("to read", "阅读", "理解书面文字", "verb"),
        v("to swim", "游泳", "在水中移动", "verb"),
        v("to ride a bike", "骑自行车", "骑自行车出行或锻炼", "verb"),
        v("to listen to music", "听音乐", "欣赏音乐", "verb phrase"),
        v("weekend", "周末", "星期六和星期日等休息日", "noun"),
        v("to enjoy", "喜欢／享受", "表示对活动的喜爱", "verb"),
        v("to meet", "见面", "与某人相见", "verb")
      ],
      [
        s("My hobby is reading.", "我的爱好是阅读。", "介绍个人爱好"),
        s("I enjoy swimming at the weekend.", "周末我喜欢去游泳。", "介绍周末活动"),
        s("I like listening to music in the evening.", "我晚上喜欢听音乐。", "描述音乐爱好"),
        s("Do you enjoy riding a bike?", "你喜欢骑自行车吗？", "询问爱好"),
        s("I meet my friends on Saturday.", "星期六我和朋友见面。", "安排社交活动")
      ],
      [
        d("A", "What do you do at the weekend?", "你周末做什么？"),
        d("B", "I enjoy cycling and reading books.", "我喜欢骑自行车和看书。"),
        d("A", "Would you like to go swimming on Saturday?", "你星期六想去游泳吗？"),
        d("B", "Yes, I'd love to! We can meet at ten.", "好啊！我们可以十点见面。")
      ],
      [
        e("What does “weekend” mean?", "周末", ["工作日", "周末", "早晨"]),
        e("Which verb goes with “music”?", "listen to", ["listen to", "turn", "pay"]),
        e("Complete: I like ___ books.", "reading", ["reading", "eating", "living"])
      ]
    ),

    // ==================== A2 ====================

    lesson(
      "en-a2-01", "A2", "Getting Around Town",
      "Directions", "Learn to ask for directions and understand route instructions.",
      [
        v("intersection", "十字路口", "道路交汇的地方", "noun"),
        v("straight ahead", "直走", "沿当前方向继续前进", "expression"),
        v("to turn", "转弯", "改变行进方向", "verb"),
        v("traffic lights", "红绿灯", "控制道路交通的信号灯", "noun"),
        v("opposite", "在对面", "位于另一侧", "preposition"),
        v("bus stop", "公交车站", "公共交通停靠的地点", "noun"),
        v("train station", "火车站", "列车停靠的车站", "noun"),
        v("distance", "距离", "两个地点之间的间隔", "noun")
      ],
      [
        s("Excuse me, where is the train station?", "请问，火车站在哪里？", "询问地点"),
        s("Go straight ahead here.", "请在这里直走。", "给出方向指引"),
        s("Turn left at the traffic lights.", "在红绿灯处左转。", "说明转弯位置"),
        s("The pharmacy is opposite the bus stop.", "药店在公交车站对面。", "描述地点关系"),
        s("How far is it to the train station?", "到火车站有多远？", "询问距离")
      ],
      [
        d("A", "Excuse me, how do I get to the train station?", "请问，去火车站怎么走？"),
        d("B", "Go straight ahead until you reach the traffic lights.", "请一直直走到红绿灯处。"),
        d("A", "Do I need to turn there?", "我需要在那里转弯吗？"),
        d("B", "Yes, turn right. The station is opposite the park.", "是的，请右转。火车站在公园对面。"),
        d("A", "Thank you very much!", "非常感谢！")
      ],
      [
        e("What does “straight ahead” mean?", "直走", ["左转", "直走", "右转"]),
        e("Where does a bus usually stop?", "At the bus stop", ["In the kitchen", "At the bus stop", "In the bedroom"]),
        e("What does “opposite” mean?", "在对面", ["在里面", "在对面", "在楼上"])
      ]
    ),

    lesson(
      "en-a2-02", "A2", "Making Appointments",
      "Appointments", "Learn to arrange, postpone and cancel appointments.",
      [
        v("appointment", "预约／约定", "事先约定的时间安排", "noun"),
        v("to arrange", "约定／安排", "共同确定时间或安排", "verb"),
        v("to postpone", "推迟／改期", "将安排改到其他时间", "verb"),
        v("to cancel", "取消", "通知不再进行原定安排", "verb"),
        v("to suit", "合适", "时间或安排适合某人", "verb"),
        v("available", "有空的／可用的", "可以安排或使用", "adjective"),
        v("confirmation", "确认", "对安排或信息的正式确认", "noun"),
        v("unfortunately", "遗憾的是", "表达遗憾或不便", "adverb")
      ],
      [
        s("I would like to make an appointment.", "我想预约一个时间。", "提出预约请求"),
        s("Does Tuesday at ten suit you?", "星期二十点您方便吗？", "确认时间是否合适"),
        s("Unfortunately, I have to postpone the appointment.", "很遗憾，我必须改期。", "提出改期"),
        s("Is there an appointment available on Friday?", "星期五还有可预约的时间吗？", "询问空余时间"),
        s("Thank you for the confirmation.", "感谢您的确认。", "回应预约确认")
      ],
      [
        d("A", "Good morning, I would like to make an appointment.", "您好，我想预约一个时间。"),
        d("B", "Does Tuesday at ten suit you?", "星期二十点您方便吗？"),
        d("A", "Unfortunately, I am not available then. Could we postpone it?", "很遗憾，我那时没空。我们可以改期吗？"),
        d("B", "Of course. Thursday at eleven is still available.", "当然可以。星期四十一点还有空。"),
        d("A", "That suits me. Thank you!", "这个时间合适。谢谢！")
      ],
      [
        e("What does “to postpone” mean?", "改期", ["取消", "改期", "确认"]),
        e("How can you ask whether a time is suitable?", "Does Tuesday suit you?", ["Does Tuesday suit you?", "Where is the train station?", "How much is it?"]),
        e("What does “confirmation” mean?", "确认", ["邀请", "确认", "投诉"])
      ]
    ),

    lesson(
      "en-a2-03", "A2", "Travel and Accommodation",
      "Travel", "Learn to plan a trip and check in at a hotel.",
      [
        v("trip", "旅行", "从一个地方到另一个地方的行程", "noun"),
        v("to book", "预订", "提前安排交通或住宿", "verb"),
        v("accommodation", "住宿", "旅行期间居住的地方", "noun"),
        v("hotel", "酒店", "提供住宿服务的场所", "noun"),
        v("single room", "单人间", "供一人入住的房间", "noun"),
        v("reservation", "预订", "提前保留房间或服务", "noun"),
        v("arrival", "抵达", "到达目的地", "noun"),
        v("to stay overnight", "过夜", "在某地住宿一晚或多晚", "verb phrase")
      ],
      [
        s("I would like to book a hotel room.", "我想预订一个酒店房间。", "预订住宿"),
        s("Do you have a single room available?", "你们有空余的单人间吗？", "询问房间"),
        s("My reservation is under the name Wang.", "我的预订登记在王这个名字下。", "说明预订信息"),
        s("We arrive on Friday evening.", "我们星期五晚上抵达。", "说明抵达时间"),
        s("How long would you like to stay?", "您打算住几晚？", "询问住宿时长")
      ],
      [
        d("A", "Good evening. Do you have a reservation?", "晚上好。您有预订吗？"),
        d("B", "Yes, under the name Wang.", "有，登记在王这个名字下。"),
        d("A", "For two nights in a single room?", "预订的是单人间，两晚，对吗？"),
        d("B", "That's right. What time is breakfast?", "没错。早餐是什么时候？")
      ],
      [
        e("What does “to book” mean?", "预订", ["取消", "预订", "抵达"]),
        e("Which room is intended for one person?", "A single room", ["A single room", "A restaurant", "A bus stop"]),
        e("What does “arrival” mean?", "抵达", ["离开", "抵达", "付款"])
      ]
    ),

    lesson(
      "en-a2-04", "A2", "Health and Visiting the Doctor",
      "Health", "Learn to describe symptoms and prepare for a doctor's appointment.",
      [
        v("doctor", "医生", "提供医疗服务的专业人员", "noun"),
        v("female doctor", "女医生", "女性医疗专业人员", "noun phrase"),
        v("pain", "疼痛", "身体不适或痛感", "noun"),
        v("head", "头", "身体的一部分", "noun"),
        v("stomach", "腹部／胃", "身体躯干的前部", "noun"),
        v("fever", "发烧", "体温高于正常水平的状态", "noun"),
        v("pharmacy", "药店", "购买药品的地方", "noun"),
        v("to examine", "检查", "对身体或情况进行检查", "verb")
      ],
      [
        s("I have had a headache since yesterday.", "我从昨天开始头疼。", "描述身体症状"),
        s("My stomach hurts.", "我肚子疼。", "描述疼痛部位"),
        s("I have a fever and feel weak.", "我发烧了，感觉很虚弱。", "描述身体状况"),
        s("The doctor is examining me.", "医生正在给我做检查。", "描述就医过程"),
        s("You can get the medicine at the pharmacy.", "你可以在药店买到这种药。", "说明药品获取地点")
      ],
      [
        d("A", "Good morning. What seems to be the problem?", "您好。您哪里不舒服？"),
        d("B", "I have a headache and a fever.", "我头疼，还发烧。"),
        d("A", "How long have you had these symptoms?", "这些症状持续多久了？"),
        d("B", "Since yesterday. Could you please examine me?", "从昨天开始。您能给我检查一下吗？")
      ],
      [
        e("Where can you normally buy medicine?", "At the pharmacy", ["At the pharmacy", "At the train station", "At a museum"]),
        e("What does “fever” mean?", "发烧", ["咳嗽", "发烧", "饥饿"]),
        e("Complete: My stomach ___.", "hurts", ["hurts", "straight ahead", "on time"])
      ]
    ),

    lesson(
      "en-a2-05", "A2", "Weather and Plans",
      "Weather", "Learn to describe the weather and adapt plans accordingly.",
      [
        v("weather", "天气", "某地某时的大气状况", "noun"),
        v("sunny", "晴朗的", "阳光充足的天气", "adjective"),
        v("cloudy", "多云的", "天空被云覆盖的", "adjective"),
        v("to rain", "下雨", "降水以雨的形式落下", "verb"),
        v("rain", "雨", "从云中落下的水滴", "noun"),
        v("temperature", "温度", "表示冷热程度的数值", "noun"),
        v("to plan", "计划", "提前安排未来活动", "verb"),
        v("to take place", "举行／发生", "某个活动按安排进行", "verb phrase")
      ],
      [
        s("It is sunny and warm today.", "今天晴朗而温暖。", "描述天气"),
        s("It is supposed to rain tomorrow.", "明天预计会下雨。", "谈论天气预报"),
        s("What is the temperature today?", "今天的气温是多少？", "询问气温"),
        s("We are planning a trip for Saturday.", "我们计划星期六去郊游。", "安排未来活动"),
        s("If it rains, the festival will take place indoors.", "下雨时，庆祝活动将在室内举行。", "说明天气对活动的影响")
      ],
      [
        d("A", "What will the weather be like at the weekend?", "周末天气怎么样？"),
        d("B", "It should be sunny on Saturday.", "星期六预计会晴朗。"),
        d("A", "Then we can plan a trip.", "那我们可以计划一次郊游。"),
        d("B", "Good idea! If it rains, we will stay at home.", "好主意！如果下雨，我们就待在家里。")
      ],
      [
        e("What does “cloudy” mean?", "多云的", ["晴朗的", "多云的", "炎热的"]),
        e("What do you do when you prepare a future activity?", "plan", ["plan", "cancel", "turn"]),
        e("Complete: It is supposed to ___ tomorrow.", "rain", ["rain", "book", "speak"])
      ]
    ),

    lesson(
      "en-a2-06", "A2", "Housing and Neighbourhood",
      "Housing", "Learn to talk about your home, the surrounding area and neighbours.",
      [
        v("flat", "公寓", "供人居住的房屋单元", "noun"),
        v("room", "房间", "建筑物内部的空间", "noun"),
        v("rent", "房租", "租用住房所支付的费用", "noun"),
        v("neighbour", "邻居", "住在附近的人", "noun"),
        v("neighbourhood", "社区／周边地区", "某个地点附近的区域", "noun"),
        v("surroundings", "周边环境", "某个地点附近的环境", "noun"),
        v("quiet", "安静的", "噪声较少的", "adjective"),
        v("to move house", "搬家", "搬到另一个住所", "verb phrase")
      ],
      [
        s("Our flat has three rooms.", "我们的公寓有三个房间。", "描述住房"),
        s("The rent is quite high.", "房租相当高。", "谈论住房成本"),
        s("Our neighbours are very friendly.", "我们的邻居非常友好。", "描述邻里关系"),
        s("The neighbourhood is quiet and green.", "周边环境安静而绿意盎然。", "描述居住环境"),
        s("We would like to move house next year.", "明年我们想搬家。", "谈论搬家计划")
      ],
      [
        d("A", "How do you like your new flat?", "你觉得你的新公寓怎么样？"),
        d("B", "It is bright, and the neighbourhood is quiet.", "公寓很明亮，周边环境也很安静。"),
        d("A", "How much is the rent?", "房租是多少？"),
        d("B", "It is a little expensive, but the neighbours are very nice.", "房租有点贵，不过邻居们都很好。")
      ],
      [
        e("What do you usually pay each month for a rented flat?", "Rent", ["Rent", "Temperature", "Bill"]),
        e("What does “to move house” mean?", "搬家", ["搬家", "预约", "做饭"]),
        e("Which word describes a place with little noise?", "quiet", ["expensive", "quiet", "cloudy"])
      ]
    ),

    // ==================== B1 ====================

    lesson(
      "en-b1-01", "B1", "Opinions and Arguments",
      "Discussion", "Learn to express opinions, give reasons and respond to different viewpoints.",
      [
        v("opinion", "观点", "对某个问题的个人看法", "noun"),
        v("advantage", "优点", "某种选择带来的积极方面", "noun"),
        v("disadvantage", "缺点", "某种选择带来的不利方面", "noun"),
        v("to justify", "说明理由", "用理由支持某个观点", "verb"),
        v("to agree", "同意", "认为他人的观点正确或合理", "verb"),
        v("to disagree", "不同意", "表达与他人相反的看法", "verb"),
        v("on the one hand", "一方面", "引出论证的一个方面", "expression"),
        v("on the other hand", "另一方面", "引出与前一方面相对的观点", "expression")
      ],
      [
        s("In my opinion, public transport is important.", "在我看来，公共交通很重要。", "表达个人观点"),
        s("One major advantage is that you can save money.", "一个很大的优点是可以省钱。", "提出优点并说明理由"),
        s("One disadvantage is the long travel time.", "一个缺点是路程时间长。", "指出缺点"),
        s("I agree with you because your arguments are convincing.", "我同意你，因为你的论据很有说服力。", "表达赞同并解释原因"),
        s("On the one hand, it is convenient; on the other hand, it takes a lot of time.", "一方面这很方便，另一方面也很费时间。", "比较不同方面")
      ],
      [
        d("A", "What do you think about working from home?", "你怎么看居家办公？"),
        d("B", "On the one hand, it saves time; on the other hand, you sometimes miss personal contact.", "一方面可以节省时间，另一方面有时缺少面对面的交流。"),
        d("A", "I agree. Another advantage is flexibility.", "我同意。另一个优点是灵活性。"),
        d("B", "That is true. Still, we should consider the disadvantages.", "确实如此。不过也应该考虑缺点。")
      ],
      [
        e("What does “advantage” mean?", "优点", ["缺点", "优点", "结论"]),
        e("Which expression introduces a contrasting point?", "on the other hand", ["for example", "on the other hand", "therefore"]),
        e("What does “to agree” mean?", "同意", ["同意", "拒绝付款", "改期"])
      ]
    ),

    lesson(
      "en-b1-02", "B1", "Problems at Work",
      "Work", "Learn to describe work-related problems and suggest solutions.",
      [
        v("challenge", "挑战", "需要努力解决的困难任务", "noun"),
        v("solution", "解决方案", "解决问题的方法", "noun"),
        v("to suggest", "提议", "提出一种可能的做法", "verb"),
        v("meeting", "会议", "讨论工作事项的活动", "noun"),
        v("task", "任务", "需要完成的工作", "noun"),
        v("to complete", "完成／处理", "把任务处理完毕", "verb"),
        v("feedback", "反馈", "对工作或信息的回应", "noun"),
        v("on time", "及时／准时", "在要求的时间之前或准时", "expression")
      ],
      [
        s("This task is a major challenge.", "这项任务是一个很大的挑战。", "描述工作难题"),
        s("We need to find a solution together.", "我们必须共同找到解决方案。", "提出解决问题的目标"),
        s("I suggest postponing the meeting.", "我建议推迟会议。", "提出建议"),
        s("I will complete the task by tomorrow.", "我会在明天之前完成这项任务。", "承诺完成工作"),
        s("Could you please give me some feedback?", "您能给我一些反馈吗？", "请求工作反馈")
      ],
      [
        d("A", "We have a problem with the current project.", "我们目前的项目遇到了一个问题。"),
        d("B", "What is the biggest challenge?", "最大的挑战是什么？"),
        d("A", "We need to complete the task on time.", "我们必须及时完成这项任务。"),
        d("B", "I suggest redistributing the tasks.", "我建议重新分配任务。"),
        d("A", "That is a good solution. Thanks for the suggestion.", "这是一个好方案。谢谢你的建议。")
      ],
      [
        e("What does “challenge” mean?", "挑战", ["挑战", "反馈", "预约"]),
        e("Which verb means to propose an idea?", "to suggest", ["to cancel", "to suggest", "to stay overnight"]),
        e("What does “on time” mean?", "及时／准时", ["昂贵", "及时／准时", "多云"])
      ]
    ),

    lesson(
      "en-b1-03", "B1", "Education and Learning",
      "Education", "Learn to discuss learning methods, further education and personal learning goals.",
      [
        v("education", "教育", "知识、能力和学习的发展过程", "noun"),
        v("further education", "继续教育", "完成基础教育后继续学习", "noun"),
        v("ability", "能力", "完成某项活动所需的本领", "noun"),
        v("experience", "经验", "通过实践或经历获得的知识", "noun"),
        v("to improve", "提高／改善", "使能力或情况变得更好", "verb"),
        v("exam", "考试", "检验知识或能力的评估", "noun"),
        v("goal", "目标", "希望实现的结果", "noun"),
        v("independent", "独立自主的", "能够独立完成任务", "adjective")
      ],
      [
        s("Further education is important for my career development.", "继续教育对我的职业发展很重要。", "说明继续学习的价值"),
        s("I want to improve my German.", "我想提高自己的德语水平。", "表达学习目标"),
        s("People often learn best through experience.", "人们往往能通过经验学得最好。", "谈论学习方式"),
        s("I am preparing for the exam.", "我正在为考试做准备。", "描述备考过程"),
        s("My goal is to work more independently.", "我的目标是更独立地工作。", "说明个人发展目标")
      ],
      [
        d("A", "Why do you want to take a further education course?", "你为什么想参加继续教育课程？"),
        d("B", "I want to improve my professional skills.", "我想提高自己的职业技能。"),
        d("A", "Do you already have experience with this topic?", "你在这个主题上有经验吗？"),
        d("B", "A little, but I want to become more independent.", "有一点。不过我还想变得更加独立。")
      ],
      [
        e("What does “further education” mean?", "继续教育", ["继续教育", "住宿", "邻居"]),
        e("What is used to assess knowledge?", "An exam", ["An exam", "An intersection", "A bill"]),
        e("Complete: I want to ___ my knowledge.", "improve", ["improve", "turn", "cancel"])
      ]
    ),

    lesson(
      "en-b1-04", "B1", "Environment and Sustainability",
      "Environment", "Learn to discuss environmental protection, sustainability and personal responsibility.",
      [
        v("environment", "环境", "人类和其他生物所处的自然条件", "noun"),
        v("climate change", "气候变化", "长期气候模式的变化", "noun"),
        v("sustainability", "可持续性", "兼顾长期环境和社会需求的原则", "noun"),
        v("waste", "废弃物", "不再需要的材料或物品", "noun"),
        v("to recycle", "回收利用", "将废弃材料加工后再次使用", "verb"),
        v("to avoid", "避免", "尽量不让某事发生", "verb"),
        v("energy", "能源／能量", "支持活动或运转的能量", "noun"),
        v("responsible", "负责任的", "愿意承担责任的", "adjective")
      ],
      [
        s("We should protect the environment better.", "我们应该更好地保护环境。", "提出环保主张"),
        s("Climate change affects people all over the world.", "气候变化影响全世界的人们。", "描述气候变化的影响"),
        s("Sustainability plays an important role in everyday life.", "可持续性在日常生活中发挥着重要作用。", "讨论可持续发展"),
        s("We can avoid waste and recycle more.", "我们可以减少废弃物并增加回收利用。", "提出环保行动"),
        s("Everyone is partly responsible for their energy consumption.", "每个人都对自己的能源消耗负有一定责任。", "讨论个人责任")
      ],
      [
        d("A", "What do you do to protect the environment?", "你做些什么来保护环境？"),
        d("B", "I often cycle and avoid unnecessary waste.", "我经常骑自行车，并避免产生不必要的废弃物。"),
        d("A", "That is good. We should also save energy.", "这很好。我们也应该节约能源。"),
        d("B", "Exactly. Sustainability often starts with small decisions.", "没错。可持续发展往往始于小小的选择。")
      ],
      [
        e("What does “to recycle” mean?", "回收利用", ["回收利用", "预约", "取消"]),
        e("What can you do to reduce waste?", "Avoid waste", ["Produce more waste", "Avoid waste", "Waste more energy"]),
        e("What does “responsible” mean?", "负责任的", ["疲倦的", "负责任的", "多云的"])
      ]
    ),

    lesson(
      "en-b1-05", "B1", "Media and Digital Life",
      "Media", "Learn to discuss digital media, information and responsible data use.",
      [
        v("media", "媒体", "传播信息的渠道和工具", "noun"),
        v("news", "消息／新闻", "传递的信息或新闻报道", "noun"),
        v("source", "来源", "信息或内容的出处", "noun"),
        v("reliable", "可靠的", "可信且稳定的", "adjective"),
        v("to check", "核实／检查", "确认信息是否正确", "verb"),
        v("data", "数据", "以数字或其他形式记录的信息", "noun"),
        v("privacy", "隐私", "个人生活和信息不受干扰的领域", "noun"),
        v("to publish", "发布", "使信息公开可见", "verb")
      ],
      [
        s("I usually read the news online.", "我通常在网上阅读新闻。", "描述获取信息的方式"),
        s("Not every source is reliable.", "并非每个信息来源都可靠。", "评价信息来源"),
        s("You should check important information.", "人们应该核实重要信息。", "强调信息核实"),
        s("Personal data must be protected.", "个人数据必须受到保护。", "讨论数据保护"),
        s("I do not publish all my photos online.", "我不会把所有照片都发布到网上。", "谈论网络隐私")
      ],
      [
        d("A", "Where do you get your current news?", "你在哪里了解最新新闻？"),
        d("B", "Mostly online, but I check the sources.", "通常在网上，不过我会核实信息来源。"),
        d("A", "That is important. Not all news is reliable.", "这很重要。并非所有新闻都可靠。"),
        d("B", "Exactly. We should also protect our privacy.", "没错。此外，我们也应该保护自己的隐私。")
      ],
      [
        e("What does “reliable” mean?", "可靠的", ["可靠的", "昂贵的", "准时的"]),
        e("What should you do with important information?", "Check it", ["Publish it without checking", "Check it", "Delete it immediately"]),
        e("What does “privacy” mean?", "隐私", ["价格", "隐私", "气温"])
      ]
    ),

    lesson(
      "en-b1-06", "B1", "Experiences and Future Plans",
      "Future", "Learn to talk about past experiences, personal goals and future plans.",
      [
        v("experience", "经历／经验", "通过活动或事件获得的体验或知识", "noun"),
        v("memory", "回忆", "对过去事件的记忆", "noun"),
        v("experience", "经历", "亲身经历的事件", "noun"),
        v("goal", "目标", "希望实现的结果", "noun"),
        v("to decide", "做决定", "在不同选择中确定一个", "verb"),
        v("to plan", "打算／计划", "计划在未来做某事", "verb"),
        v("possibility", "可能性／机会", "可以采取的选择或行动", "noun"),
        v("in the future", "将来", "未来的时间", "expression")
      ],
      [
        s("The trip was an unforgettable experience.", "这次旅行是一次难忘的经历。", "评价过去的经历"),
        s("I like looking back on this experience.", "我很乐意回忆这段经历。", "表达对回忆的态度"),
        s("In the future, I would like to learn more languages.", "将来我想学习更多语言。", "表达未来目标"),
        s("I plan to take a further education course next year.", "我打算明年参加继续教育。", "说明未来计划"),
        s("I have to decide between two possibilities.", "我必须在两种可能性之间做出选择。", "描述决策过程")
      ],
      [
        d("A", "What was your most important experience last year?", "去年对你来说最重要的经历是什么？"),
        d("B", "I worked on an exciting project.", "我参与了一个很有意思的项目。"),
        d("A", "What are your plans for the future?", "你将来有什么打算？"),
        d("B", "I want to learn new skills and develop my career.", "我想学习新技能，并在职业上继续发展。")
      ],
      [
        e("What does “to plan” mean in this context?", "打算／计划", ["打算／计划", "回收", "转弯"]),
        e("Which expression refers to the future?", "in the future", ["yesterday", "in the future", "a long time ago"]),
        e("What does “to decide” mean?", "做决定", ["做决定", "回忆", "预订"])
      ]
    )
  ];

  const course = {
    code: "en",
    language: "English",
    nativeName: "English",
    flag: "🇬🇧",
    levels: ["A0", "A1", "A2", "B1"],
    lessons: lessons
  };

  window.WorldLinguaLanguages = window.WorldLinguaLanguages || {};
  window.WorldLinguaLanguages.en = course;
})();
