// أذكاري — منطق التبويبات + المسبحة الإلكترونية + الخط + الثيم
const DATA = {
  morning: [
    {t:"أَعُوذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيمِ ۝ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ، لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ.", v:"من قالها حين يُصبح أُجير من الجن حتى يُمسي. [آية الكرسي - البقرة 255]", c:1},
    {t:"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ.", v:"من قالها ثلاثاً حين يصبح وحين يمسي كفته من كل شيء.", c:3},
    {t:"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِنْ شَرِّ مَا خَلَقَ ۝ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ.", v:"تُقال ثلاث مرات صباحاً ومساءً للتحصين.", c:3},
    {t:"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ.", v:"تُقال ثلاث مرات، تكفيك من كل شيء.", c:3},
    {t:"أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.", v:"ذكر الصباح العظيم — رواه مسلم.", c:1},
    {t:"اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ.", v:"رواه الترمذي.", c:1},
    {t:"اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ. (سيد الاستغفار)", v:"من قالها موقناً بها حين يصبح فمات من يومه دخل الجنة. رواه البخاري.", c:1},
    {t:"رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.", v:"من قالها ثلاثاً حين يصبح وحين يمسي كان حقاً على الله أن يرضيه يوم القيامة.", c:3},
    {t:"اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي، وَعَنْ يَمِينِي وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.", v:"لم يكن النبي ﷺ يدع هؤلاء الدعوات حين يصبح وحين يمسي. رواه أبو داود.", c:1},
    {t:"بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.", v:"من قالها ثلاثاً حين يصبح لم تضره فجأة بلاء حتى يمسي.", c:3},
    {t:"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.", v:"من قالها حين يمسي لم تضره حُمَة تلك الليلة. وتُقال صباحاً أيضاً.", c:3},
    {t:"حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.", v:"من قالها سبعاً حين يصبح وحين يمسي كفاه الله ما أهمه.", c:7},
    {t:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.", v:"من قالها مائة مرة حين يصبح وحين يمسي لم يأت أحد يوم القيامة بأفضل مما جاء به إلا من قال مثلها أو زاد. متفق عليه.", c:100},
    {t:"لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.", v:"من قالها مائة مرة كانت له عدل عشر رقاب وكُتبت له مائة حسنة ومُحيت عنه مائة سيئة وكانت حرزاً من الشيطان.", c:100},
    {t:"اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ.", v:"من صلى عليَّ حين يصبح عشراً وحين يمسي عشراً أدركته شفاعتي يوم القيامة.", c:10},
    {t:"أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ.", v:"رواه أحمد.", c:1},
    {t:"يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.", v:"وصية النبي ﷺ لفاطمة: قوليها حين تصبحين وحين تمسين.", c:1},
    {t:"اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَٰهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَٰهَ إِلَّا أَنْتَ.", v:"تُقال ثلاث مرات صباحاً ومساءً.", c:3},
    {t:"اللَّهُمَّ فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَشَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.", v:"قلها إذا أصبحت وإذا أمسيت وإذا أخذت مضجعك. رواه أبو داود.", c:1},
    {t:"أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.", v:"كان ﷺ يستغفر في اليوم مائة مرة. رواه مسلم.", c:100},
  ],
  evening: [
    {t:"أَعُوذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيمِ ۝ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ... (آية الكرسي كاملة كما في الصباح)", v:"من قالها حين يُمسي أُجير من الجن حتى يُصبح.", c:1},
    {t:"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ.", v:"تُقال ثلاث مرات مساءً.", c:3},
    {t:"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِنْ شَرِّ مَا خَلَقَ ۝ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ.", v:"تُقال ثلاث مرات مساءً.", c:3},
    {t:"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ.", v:"تُقال ثلاث مرات مساءً.", c:3},
    {t:"أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.", v:"ذكر المساء العظيم — رواه مسلم.", c:1},
    {t:"اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ.", v:"رواه الترمذي.", c:1},
    {t:"اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ... (سيد الاستغفار كما في الصباح)", v:"من قالها موقناً بها حين يمسي فمات من ليلته دخل الجنة. رواه البخاري.", c:1},
    {t:"رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.", v:"من قالها ثلاثاً حين يمسي كان حقاً على الله أن يرضيه يوم القيامة.", c:3},
    {t:"اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ... (كما في دعاء الصباح)", v:"لا يدعها النبي ﷺ حين يمسي وحين يصبح.", c:1},
    {t:"بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.", v:"من قالها ثلاثاً حين يمسي لم تضره فجأة بلاء حتى يصبح.", c:3},
    {t:"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.", v:"من قالها حين يمسي ثلاث مرات لم تضره حُمَة تلك الليلة. رواه مسلم.", c:3},
    {t:"حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.", v:"من قالها سبعاً حين يمسي كفاه الله ما أهمه.", c:7},
    {t:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.", v:"من قالها مائة مرة حين يمسي حُطت خطاياه وإن كانت مثل زبد البحر.", c:100},
    {t:"لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.", v:"من قالها عشر مرات كان كمن أعتق أربعة أنفس من ولد إسماعيل. متفق عليه.", c:10},
    {t:"اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ.", v:"عشر مرات مساءً تُدرك بها الشفاعة.", c:10},
    {t:"أَمْسَيْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ.", v:"رواه أحمد.", c:1},
    {t:"يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.", v:"تُقال مساءً وصباحاً.", c:1},
    {t:"اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي... (ثلاثاً)", v:"تُقال ثلاث مرات مساءً.", c:3},
    {t:"اللَّهُمَّ فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، عَالِمَ الْغَيْبِ وَالشَّهَادَةِ... (كما في الصباح)", v:"قلها إذا أمسيت وإذا أصبحت.", c:1},
    {t:"آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ... إلى آخر سورة البقرة: ﴿ لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا... ﴾", v:"الآيتان من آخر سورة البقرة، من قرأهما في ليلة كفتاه. متفق عليه.", c:1},
  ]
};

const $ = (s, el=document) => el.querySelector(s);
const store = {
  get(k, d){ try{ const v = localStorage.getItem(k); return v===null?d:JSON.parse(v);}catch{return d;} },
  set(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch{} }
};

let tab = store.get('adhkari-tab', (new Date().getHours() >= 15 || new Date().getHours() < 4) ? 'evening' : 'morning');
let progress = store.get('adhkari-progress', {morning:{}, evening:{}});
let fontScale = store.get('adhkari-font', 100);
let hideDone = store.get('adhkari-hideDone', false);
let senior = store.get('adhkari-senior', false);
let searchQ = '';

const root = document.documentElement;
const cardsEl = $('#cards');
const template = $('#cardTemplate');

function applyTheme(){
  let theme = store.get('adhkari-theme', null);
  if(!theme) theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.dataset.theme = theme;
  $('#themeIcon').textContent = theme === 'dark' ? '☀️' : '🌙';
  $('#themeText').textContent = theme === 'dark' ? 'نهاري' : 'ليلي';
}
function applyFont(){
  root.style.setProperty('--dhikr-size', (1.25 * fontScale/100) + 'rem');
  if(senior){
    root.style.setProperty('--dhikr-size', (1.25 * Math.max(fontScale,140)/100) + 'rem');
    root.classList.add('senior');
  } else root.classList.remove('senior');
  $('#fontSizeLabel').textContent = (senior ? Math.max(fontScale,140) : fontScale) + '%';
  $('#seniorMode').setAttribute('aria-pressed', String(senior));
}
function applyHijri(){
  try{
    $('#hijriDate').textContent = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {dateStyle:'full'}).format(new Date());
  }catch{ $('#hijriDate').textContent = new Date().toLocaleDateString('ar'); }
}

function remainingOf(i){
  const item = DATA[tab][i];
  const done = progress[tab]?.[i] ?? 0;
  return Math.max(0, item.c - done);
}
function render(){
  document.querySelectorAll('.tab').forEach(b=>{
    const active = b.dataset.tab === tab;
    b.classList.toggle('active', active);
    b.setAttribute('aria-selected', String(active));
  });
  $('#heroTitle').textContent = tab === 'morning' ? '🌅 أذكار الصباح' : '🌙 أذكار المساء';
  $('#showDoneToggle').textContent = hideDone ? 'إظهار الكل' : 'إخفاء المنجز';
  $('#showDoneToggle').setAttribute('aria-pressed', String(!hideDone));

  cardsEl.innerHTML = '';
  const q = searchQ.trim();
  let shown = 0, doneCount = 0, totalLeft = 0;

  DATA[tab].forEach((item, i)=>{
    const rem = remainingOf(i);
    const isDone = rem === 0;
    if(isDone) doneCount++;
    else totalLeft += rem;
    if(hideDone && isDone) return;
    if(q && !(item.t.includes(q) || item.v.includes(q))) return;
    shown++;

    const node = template.content.cloneNode(true);
    const card = node.querySelector('.card');
    card.dataset.index = i;
    if(isDone) card.classList.add('done');
    node.querySelector('.card-num').textContent = 'الذكر ' + (i+1);
    node.querySelector('.repeat-badge').textContent = 'التكرار: ' + item.c;
    node.querySelector('.dhikr-text').textContent = item.t;
    node.querySelector('.dhikr-virtue').textContent = '✨ ' + item.v;
    node.querySelector('.remaining').textContent = isDone ? 'اكتمل ✓' : ('المتبقي: ' + rem);
    node.querySelector('.tasbih-count').textContent = isDone ? '' : '(' + rem + ')';
    node.querySelector('.mini-fill').style.width = (((item.c - rem)/item.c)*100) + '%';
    const btn = node.querySelector('.tasbih-btn');
    btn.disabled = isDone;
    btn.setAttribute('aria-label', 'سبّح للذكر رقم ' + (i+1) + '، المتبقي ' + rem);
    cardsEl.appendChild(node);
  });

  if(shown === 0){
    const d = document.createElement('div');
    d.className = 'empty';
    d.textContent = doneCount > 0 ? '🎉 ما شاء الله! أتممت جميع الأذكار. تقبّل الله منك.' : 'لا توجد نتائج مطابقة للبحث.';
    cardsEl.appendChild(d);
  }

  const total = DATA[tab].length;
  const pct = total ? Math.round(doneCount/total*100) : 0;
  $('#progressText').textContent = `أنجزت ${doneCount} من ${total}`;
  $('#progressPercent').textContent = pct + '%';
  $('#progressFill').style.width = pct + '%';
  $('#progressBarWrap').setAttribute('aria-valuenow', pct);
  $('#totalLeft').textContent = totalLeft;
}

cardsEl.addEventListener('click', (e)=>{
  const card = e.target.closest('.card');
  if(!card) return;
  const i = Number(card.dataset.index);
  if(e.target.closest('.tasbih-btn')){
    const item = DATA[tab][i];
    const cur = progress[tab]?.[i] ?? 0;
    if(cur < item.c){
      progress[tab][i] = cur + 1;
      store.set('adhkari-progress', progress);
      if(navigator.vibrate) navigator.vibrate(15);
      // micro animation
      const btn = card.querySelector('.tasbih-btn');
      btn.style.transform = 'scale(.95)';
      setTimeout(()=>btn.style.transform='', 90);
      const rem = remainingOf(i);
      card.querySelector('.remaining').textContent = rem === 0 ? 'اكتمل ✓' : ('المتبقي: ' + rem);
      card.querySelector('.tasbih-count').textContent = rem === 0 ? '' : '(' + rem + ')';
      card.querySelector('.mini-fill').style.width = (((item.c - rem)/item.c)*100) + '%';
      if(rem === 0){
        card.classList.add('done');
        card.querySelector('.tasbih-btn').disabled = true;
        if(navigator.vibrate) navigator.vibrate([30,50,30]);
        setTimeout(render, 450); // لإخفائه إذا كان وضع الإخفاء مفعّلاً + تحديث الإحصائيات
      }
      // تحديث الإحصائيات العامة بدون إعادة رسم كاملة
      const doneCount = DATA[tab].filter((_,k)=>remainingOf(k)===0).length;
      const total = DATA[tab].length;
      const pct = Math.round(doneCount/total*100);
      $('#progressText').textContent = `أنجزت ${doneCount} من ${total}`;
      $('#progressPercent').textContent = pct + '%';
      $('#progressFill').style.width = pct + '%';
      $('#totalLeft').textContent = DATA[tab].reduce((s,_,k)=>s+remainingOf(k),0);
      if(doneCount === total) setTimeout(()=>alert('🎉 تقبّل الله منك! أتممت ' + (tab==='morning'?'أذكار الصباح':'أذكار المساء') + ' كاملة.'), 300);
    }
  }
  if(e.target.closest('.reset-btn')){
    progress[tab][i] = 0;
    store.set('adhkari-progress', progress);
    render();
  }
});

document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click', ()=>{
  tab = b.dataset.tab;
  store.set('adhkari-tab', tab);
  render();
}));
$('#search').addEventListener('input', (e)=>{ searchQ = e.target.value; render(); });
$('#resetAll').addEventListener('click', ()=>{
  if(confirm('هل تريد تصفير تقدم ' + (tab==='morning'?'أذكار الصباح':'أذكار المساء') + '؟')){
    progress[tab] = {};
    store.set('adhkari-progress', progress);
    render();
  }
});
$('#showDoneToggle').addEventListener('click', ()=>{
  hideDone = !hideDone;
  store.set('adhkari-hideDone', hideDone);
  render();
});
$('#themeToggle').addEventListener('click', ()=>{
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  store.set('adhkari-theme', next);
  applyTheme();
});
$('#fontIncrease').addEventListener('click', ()=>{
  fontScale = Math.min(220, fontScale + 10);
  store.set('adhkari-font', fontScale);
  applyFont();
});
$('#fontDecrease').addEventListener('click', ()=>{
  fontScale = Math.max(80, fontScale - 10);
  store.set('adhkari-font', fontScale);
  applyFont();
});
$('#seniorMode').addEventListener('click', ()=>{
  senior = !senior;
  store.set('adhkari-senior', senior);
  applyFont();
});

applyTheme(); applyFont(); applyHijri(); render();
