(()=>{var e={916:()=>{var e=document.querySelector(".score-background"),t=document.querySelector(".pop-up-close-button"),o=function(){e.style.display="none"};t&&(t.addEventListener("click",o),e.addEventListener("click",(function(t){t.target===e&&o()})))},17:()=>{var e=document.querySelector("tbody");document.querySelector("table"),e&&localStorage.getItem("score")&&function(){var t=document.createElement("tr"),o=document.createElement("td");o.textContent="Твой результат";var i=document.createElement("td");i.textContent=localStorage.getItem("score"),t.append(o),t.append(i),e.append(t)}()}},t={};function o(i){var a=t[i];if(void 0!==a)return a.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,o),s.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{"use strict";const e=[[{id:1,name:"Ворон",species:"Corvus corax",description:"Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.",image:"https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"},{id:2,name:"Журавль",species:"Grus grus",description:"Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».",image:"https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3"},{id:3,name:"Ласточка",species:"Delichon urbicum",description:"Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.",image:"https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3"},{id:4,name:"Козодой",species:"Caprimulgus europaeus",description:"Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ",image:"https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3"},{id:5,name:"Кукушка",species:"Cuculus canorus",description:"Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.",image:"https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3"},{id:6,name:"Синица",species:"Parus major",description:"В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.",image:"https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3"}],[{id:1,name:"Воробей",species:"Passer domesticus",description:"Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.",image:"https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3"},{id:2,name:"Грач",species:"Corvus frugilegus",description:"Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.",image:"https://live.staticflickr.com//65535//49347123322_291c86b016.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3"},{id:3,name:"Галка",species:"Coloeus monedula",description:"Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.",image:"https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3"},{id:4,name:"Певчий дрозд",species:"Turdus philomelos",description:"Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.",image:"https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3"},{id:5,name:"Сорока",species:"Pica pica",description:"Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.",image:"https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3"},{id:6,name:"Сойка",species:"Garrulus glandarius",description:"Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.",image:"https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3"}],[{id:1,name:"Зяблик",species:"Fringilla coelebs",description:"В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.",image:"https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3"},{id:2,name:"Клёст",species:"Loxia curvirostra",description:"Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.",image:"https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3"},{id:3,name:"Горлица",species:"Streptopelia turtur",description:"Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.",image:"https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3"},{id:4,name:"Дятел",species:"Dendrocopos major",description:"Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.",image:"https://live.staticflickr.com/65535/49339376578_e933426455.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3"},{id:5,name:"Удод",species:"Upupa epops",description:"Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.",image:"https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3"},{id:6,name:"Стриж",species:"Apus apus",description:"Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.",image:"https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3"}],[{id:1,name:"Жаворонок",species:"Alauda arvensis",description:"Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.",image:"https://live.staticflickr.com/65535/47105096764_f751fba568.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3"},{id:2,name:"Соловей",species:"Luscinia luscinia",description:"Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.",image:"https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3"},{id:3,name:"Скворец",species:"Sturnus vulgaris",description:"Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.",image:"https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3"},{id:4,name:"Иволга",species:"Oriolus oriolus",description:"Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.",image:"https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3"},{id:5,name:"Свиристель",species:"Bombycilla garrulus",description:"У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.",image:"https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3"},{id:6,name:"Щегол",species:"Carduelis carduelis",description:"Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю",image:"https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3"}],[{id:1,name:"Орёл",species:"Aquila nipalensis",description:"В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров",image:"https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3"},{id:2,name:"Коршун",species:"Milvus migrans",description:"Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.",image:"https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3"},{id:3,name:"Лунь",species:"Circus cyaneus",description:"Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».",image:"https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3"},{id:4,name:"Сокол",species:"Falco peregrinus",description:"Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.",image:"https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3"},{id:5,name:"Ястреб",species:"Accipiter gentilis",description:"Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.",image:"https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3"},{id:6,name:"Филин",species:"Bubo bubo",description:"Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.",image:"https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3"}],[{id:1,name:"Альбатрос",species:"Diomedea exulans",description:"Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния",image:"https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3"},{id:2,name:"Олуша",species:"Sula nebouxii",description:"Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок",image:"https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3"},{id:3,name:"Буревестник",species:"Puffinus griseus",description:"Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.",image:"https://live.staticflickr.com//607//22136056020_935cb113f9.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3"},{id:4,name:"Пеликан",species:"Pelecanus",description:"Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.",image:"https://live.staticflickr.com/65535/49159147156_dcbbb5c12a.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3"},{id:5,name:"Пингвин",species:"Aptenodytes forsteri",description:"Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.",image:"https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3"},{id:6,name:"Чайка",species:"Larus argentatus",description:"Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.",image:"https://live.staticflickr.com/65535/48577115317_7034201dde.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3"}]],t=o.p+"assets/cbd08c29fc4a2f0108e8.jpg";var i=document.querySelector(".btn"),a=document.querySelectorAll(".levels .page-item"),s=0;i&&i.addEventListener("click",(function(){"btn next-level"===i.classList.value&&(a[s].classList.remove("active"),a[s+=1].classList.add("active"),P()),D()}));var n=document.querySelector(".playback-button"),c=document.querySelector(".time-bar__input"),r=document.querySelector(".duration"),d=document.querySelector(".current-time"),p=!1,u=0,l=new Audio,m=function(){0==p?(0==l.currentTime?(u=Math.floor(5*Math.random()),l.src=e[s][u].audio,console.log(e[s][u].name),l.play()):l.play(),p=!0):(l.pause(),p=!1),n.classList.toggle("pause")},g=function(){l.currentTime=0,m()};function w(){l.addEventListener("ended",g),c.max=Math.floor(l.duration),c.value=l.currentTime,d.textContent=_(Math.floor(l.currentTime)),c.style.background="linear-gradient(to right, #007c5d 0%, #007c5d "+100*c.value/c.max+"%, grey "+100*c.value/c.max+"%, grey 100%)",isNaN(l.duration)?r.textContent="00:00":r.textContent=_(Math.floor(l.duration))}function _(e){var t=Math.floor(e/60),o=Math.floor(e-60*t);return o<10&&(o="0".concat(o)),"".concat(t,":").concat(o)}c&&c.addEventListener("input",(function(){l.currentTime=c.value})),n&&(n.addEventListener("click",m),n.addEventListener("click",(function(){setInterval(w,500)})));var h=document.querySelector(".bird-image"),f=document.querySelector(".item-list"),v=document.querySelectorAll(".item-list .list-group-item"),b=document.querySelector(".bird-name"),C=document.querySelector(".card-body"),y=document.querySelector(".instruction"),x=document.querySelector(".btn"),k=document.querySelector(".card-body .bird-image"),S=document.querySelector("h4"),L=document.querySelector(".species"),j=document.querySelector(".bird-description"),X=document.querySelector(".audio-player"),T=document.querySelector(".score-background"),A=new Audio,E=5,M=0,q=new Audio,I=new Audio;f&&f.addEventListener("click",(function(t){var o=t.target;O(o),e[s][u].name===o.textContent?function(t){var o;t.classList.add("correct"),X.classList.add("pointer-events-none"),h.src=e[s][u].image,g(),b.textContent=e[s][u].name,x.classList.add("next-level"),o=document.querySelectorAll(".score__text"),M+=E,o.forEach((function(e){e.textContent="Score: ".concat(M)})),localStorage.setItem("score",M),q.src="https://birds-quiz.netlify.app/static/media/win.a1e9e8b6.mp3",q.play(),5==s&&(T.style.display="block")}(o):"list-group-item"===o.classList[0]&&(o.classList.add("error"),E--,I.src="https://birds-quiz.netlify.app/static/media/error.165166d5.mp3",I.play())}));var O=function(t){C.style.display="flex",j.style.display="block",y.style.display="none",k.src=e[s][t.id].image,S.textContent=e[s][t.id].name,L.textContent=e[s][t.id].species,j.textContent=e[s][t.id].description,A.src=e[s][t.id].audio},P=function(){v.forEach((function(e){e.classList.remove("correct"),e.classList.remove("error")})),b.textContent="******",h.src=t,C.style.display="none",y.style.display="block",j.style.display="none",x.classList.remove("next-level"),X.classList.remove("pointer-events-none"),E=5},D=function(){var t=0;v.forEach((function(o){o.innerHTML='<span class="li-btn"></span>'.concat(e[s][t].name),t++}))};D(),o(916);var U=document.querySelector(".card-body .playback-button"),F=document.querySelector(".card-body .time-bar__input"),N=document.querySelector(".card-body .duration"),G=document.querySelector(".card-body .current-time"),V=!1,z=function(){0==V?(A.play(),V=!0):(A.pause(),V=!1),U.classList.toggle("pause")},H=function(){A.currentTime=0,z()};function B(){A.addEventListener("ended",H),F.max=Math.floor(A.duration),F.value=A.currentTime,G.textContent=Y(Math.floor(A.currentTime)),F.style.background="linear-gradient(to right, #007c5d 0%, #007c5d "+100*F.value/F.max+"%, grey "+100*F.value/F.max+"%, grey 100%)",isNaN(A.duration)?N.textContent="00:00":N.textContent=Y(Math.floor(A.duration))}function Y(e){var t=Math.floor(e/60),o=Math.floor(e-60*t);return o<10&&(o="0".concat(o)),"".concat(t,":").concat(o)}F&&F.addEventListener("input",(function(){A.currentTime=F.value})),U&&(U.addEventListener("click",z),U.addEventListener("click",(function(){setInterval(B,500)}))),o(17)})()})();
//# sourceMappingURL=main.7ae1fbcf61d4dbdc3705.js.map