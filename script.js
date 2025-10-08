document.addEventListener('DOMContentLoaded', () => {

    /* DATA (PRACTICALS) */
    const PRACTICALS = {
        p1: {
            title: "Опис бізнес логіки",
            left: [
                { id: 'p1-1', label: 'Завдання системи' },
                { id: 'p1-2', label: 'Можливості адміністратора' },
                { id: 'p1-3', label: 'Можливості користувача' }
            ],
            content: {
                'p1-1': {
                    title: 'Завдання системи',

                    html: '<p class="p-biz">Проект "Pizza Day" є веб-додатком для презентації мережі піцерій.' +
                        ' Сайт пропонує користувачам переглядати інформацію про піци, які пропонуються в мережі, а також отримувати інформацію про погоду (PublicWeatherWidget).</p>' +
                        '<p class="p-biz">Додаючи сюди, загальна необхідність  даної системи полягає у збереженні всіх даних та інформації в одному місці (на одному сайті), тобто “all in one”. ' +
                        'Тож, виходячи з попереднього, ми можемо сказати, що "Pizza Day" є динамічним веб-додатком, який надає користувачам інформацію і про піцу, яку пропонує мережа, і про загальну погоду в містах, де знаходяться найпопулярніші філіали. ' +
                        'Інтуїтивно зрозумілий інтерфейс та швидкий доступ до інформації роблять сайт зручним для відвідувачів.</p>'
                },

                'p1-2': {
                    title: 'Адміністратор може:',

                    html: '<p class="p-biz"> Додавати/редагувати/видаляти піци (name, ingredients, price).</p>' +
                        '<p class="p-biz"> Додавати зображення піци для більш естетичної привабливості продукту</p>' +
                        '<p class="p-biz"> Оновлювати інгредієнти певної піци у випадку додавання якоїсь “новинки”.</p>' +
                        '<p class="p-biz"> Редагування ціни піци упродовж робочого дня у випадку знижки.</p>' +
                        '<p class="p-biz"> Видаляти всі записи про піцу в кінці робочого дня.</p>' +
                        '<p class="p-biz"> Відслідковувати та додавати дані про піци кожного дня для користувачів </p>' +
                        '<p class="p-biz"> Щоденнно моніторити погоду в містах із популярними філіалами.</p>' +
                        '<p class="p-biz"> Переглядати саме меню піц та погоду на головному сайті.</p>'



                },

                'p1-3': {
                    title: 'Користувач може:',

                    html: '<p class="p-biz"> Аналізувати наведені погодні умови для свого міста.</p>' +
                        '<p class="p-biz"> Адаптивно та зручно переглядати сторінки сайту на будь-якому пристрої.</p>' +
                        '<p class="p-biz"> Ознайомлюватися з історією закладу.</p>' +
                        '<p class="p-biz"> Ідентифіковувати найближчий філіал компанії.</p>' +
                        '<p class="p-biz"> Надати відгук компанії через соціальні мережі.</p>' +
                        '<p class="p-biz"> Переглядати саме меню піц та погоду на головному сайті.</p>'

                },
            }
        },





        p2: {
            title: "Функціональні вимоги",
            left: [
                { id: 'p2-1', label: 'Можливості системи' },
                { id: 'p2-2', label: 'Реалізовані вимоги системи' }
            ],
            content: {
                'p2-1': {
                    title: 'Можливості системи',

                    html: '<p class="p-fr"> Система надає унікальну можливість тісної взаємодії між користувачем та адміністратором' +
                        ' у вигляді прозорого додавання та оновлення асортименту продукції' +
                        ' та легкості у її відслідковуванні користувачем протягом робочого дня.</p>' +
                        '<p class="p-fr">Головна сторінка сайту містить навігаційне меню,' +
                        'яке дозволяє користувачам переходити на різні розділи сайту, такі як ' +
                        'як "Про нас", "Наші піци", "Наші найбільші філіали" та "Контакт".</p>' +
                        '<p class="p-fr">Секція "Про нас" надає коротку інформацію про компанію "Pizza Day", ' +
                        'її історію та розміщення закладів.' +
                        'Це надає користувачам контекст про те, хто і що стоїть за брендом.</p>' +

                        '<p class="p-fr">Секція "Наше меню" використовує компонент PublicPizaList, який,  ' +
                        'відображає короткий список піц, доступних для замовлення. ' +
                        'Це дозволяє користувачам попередньо ознайомитися з асортиментом піц перед відвідуванням магазину.</p>' +

                        '<p class="p-fr">Секція "Наші найбільші філіали" містить зображення філіалів компанії в різних містах,  ' +
                        'а також їх розташування. ' +
                        'Інформація про розташування допомагає користувачам знаходити найближчий до них магазин.</p>' +

                        '<p class="p-fr"> Компонент PublicWeatherWidget використовується для відображення погоди в найпопулярніших місцях,  ' +
                        'де знаходяться філіали цієї компанії, з використанням зовнішнього API. ' +
                        'Віджет може показувати загальний прогноз, стан неба та інші метеорологічні дані для заданих регіонів.</p>'
                },



                'p2-2': {
                    title: 'Реалізовані вимоги системи',

                    html: '<p class="p-fr">Система дозволяє адміну додавати нову піцу з полями: name, ingredients, price, image.</p>' +
                        '<p class="p-fr">Система дозволяє адміну редагувати інгредієнти піци.</p>' +
                        '<p class="p-fr">Система відображає оновлене меню на публічній сторінці в реальному часі.</p>' +
                        '<p class="p-fr">Віджет погоди показує опис стану неба не тільки в самому місті, а й в його околицях.</p>' +
                        '<p class="p-fr">Адмін має кнопку «delete» для видалення піци в кінці свого робочого дня.</p>'
                },
            }
        },


        p3: {
            title: "Нефункціональні вимоги",
            left: [
                { id: 'p3-0', label: 'Аналіз стабільності роботи системи', },
                { id: 'p3-1', label: 'Перевірка технологій на безпечність та зручність', }
            ],
            content: {
                'p3-0': {
                    title: 'Аналіз стабільності роботи системи',


                    html: '<p class="p-nfr">API відповідає за 300 ms на типову операцію читання (GET /api/pizza).</p>' +
                        '<p class="p-nfr">API відповідає за 600 ms для операції запису (POST/PUT).</p>' +
                        '<p class="p-nfr">Обмеження дозволених форматів зображень: jpg, png.</p>' +
                        '<p class="p-nfr"> 80% доступності для публічної частини.</p>' +
                        '<p class="p-nfr">Логування та моніторинг змін меню піци (хто, коли), моніторинг зовнішніх викликів до погодного API.</p>'
                },


                'p3-1': {
                    title: 'Перевірка технологій на безпечність та зручність',

                    html: '<p class="p-nfr"> Безпека для адмін-панелі у вигляді необхідності написання ключового слова.</p>' +
                        '<p class="p-nfr"> Обмеження розміру зображень.</p>' +
                        '<p class="p-nfr"> Конфіденційність у не зберіганні зайвих персональних даних користувачів, які відвідували сторінку сайту</p>' +
                        '<p class="p-nfr"> UX/доступність та адаптивність дизайну для різних пристроїв: мобільних, desktop, PC.</p>' +
                        '<p class="p-nfr"> Читабельність та контрасність тегів для важливих елементів.</p>' +
                        '<p class="p-nfr"> Резервне копіювання БД</p>'
                },

            }
        },




        p4: {
            title: "Діаграма UML",
            left: [
                { id: 'p4-1', label: 'Діаграма UML' }
            ],
            content: {
                'p4-1': {
                    title: 'Діаграма UML',

                    html: '<div class="result-image"><img id="resultImage" src="img/18.png" alt="Моє фото"></div>' +
                        '<p class="p-result">Більш чітке зображення можна побачити за ' +
                        '<a class="uml-link" href="https://drive.google.com/drive/folders/1CbUhsuqdjDwnLCZv2i1VhY77VKTn1Uli?usp=drive_link" target="_blank" rel="noopener noreferrer">посиланням</a>.' +
                        '</p>'
                },
            }
        },





        p5: {
            title: "Опис Frontend частини",
            left: [
                { id: 'p5-1', label: 'Застосовані технології та структура компонентів', },
                { id: 'p5-2', label: 'Загальний аналіз UI/UX' },
                { id: 'p5-3', label: 'Секції головного сайту' },
            ],
            content: {
                'p5-1': {
                    title: 'Застосовані технології та структура компонентів',


                    html: '<p class="p-frontend">Стек технологій: React.JS та синтаксис JSX; Typescript; JavaScript; CSS;</p>' +
                        '<p class="p-frontend">СreatePizaForm - одна з головних частин адмін-панелі, яка відповідає за додавання піци та її елементів (name, ingredients, price). </p>' +
                        '<p class="p-frontend">PizaListItem у свою чергу забезпечує відображення списку піц та попередньо вказаних ендпоінтів у цій ж адмін-панелі.</p>' +
                        '<p class="p-frontend">Компонент PublicPizaList слугує "мостом" передачі меню піц від адміністратора до користувачів на головномус сайті.</p>' +
                        '<p class="p-frontend">PublicWeatherWidget інтегрується із зовнішньою API погоди.</p>' +
                        '<p class="p-frontend">Як вже було частково попередньо вказано, головний сайт index.tsx - це сердце компанії та ключова точка взаємодії між адміністрацією та споживачами.</p>'
                },



                'p5-2': {
                    title: 'Загальний аналіз UI/UX',


                    html: '<p class="p-frontend">Інтерфейс прагне до простоти: адаптивний дизайн, видимі кнопки та зрозуміла навігація.</p>' +
                        '<p class="p-frontend"> Основний сценарій включає: відкриття меню → додавання адміністратором піци → користувач дивиться меню піц та погоду перед поїдкою у те чи інше місто філіалу.</p>' +
                        '<p class="p-frontend"> Всі секції та загальний текст "впадають в око", щоб користувачеві було легше сканувати сторінку.</p>' +
                        '<p class="p-frontend"> При додванні піци до меню, система зручно повідомляє про типові та найпоширеніші помилки: неправильна ціна або ж незаповнення якогось поля.</p>' +
                        '<p class="p-frontend"> Так як всім відомо, що більшість взаємодії з сайтом проходить через мобільні пристрої, тому велику увагу було приділено саме цьому аспекту: переміщення елементів та тексту при зменншенні екрану; адаптація каруселі та меню філіалів під всю ширину екрану користувача.</p>'

                },

                'p5-3': {
                    title: 'Сторінки',


                    html: 
                    '<div class="result-image"><img id="resultImage" src="img/19.jpg" alt="Моє фото"></div>'+
                    '<div class="result-image"><img id="resultImage" src="img/20.jpg" alt="Моє фото"></div>'+
                    '<div class="result-image"><img id="resultImage" src="img/21.jpg" alt="Моє фото"></div>'+
                    '<div class="result-image"><img id="resultImage" src="img/13.png" alt="Моє фото"></div>'+
                    '<div class="result-image"><img id="resultImage" src="img/14.png" alt="Моє фото"></div>'+
                    '<div class="result-image"><img id="resultImage" src="img/15.png" alt="Моє фото"></div>'+
                    '<div class="result-image"><img id="resultImage" src="img/23.jpg" alt="Моє фото"></div>'+
                    '<div class="result-image"><img id="resultImage" src="img/24.jpg" alt="Моє фото"></div>'+
                    '<div class="result-image"><img id="resultImage" src="img/25.jpg" alt="Моє фото"></div>'+
                    '<div class="result-image"><img id="resultImage" src="img/26.jpg" alt="Моє фото"></div>'

                },

            }
        },


        p6: {
            title: "Опис Backend частини",
            left: [
                { id: 'p6-1', label: 'Основні технології' },
                { id: 'p6-2', label: 'Загальні REST ендпоїнти' }
            ],
            content: {
                'p6-1': {
                    title: 'Основні технології',


                    html: '<p class="p-backend">Стек технологій: React.JS з частковим використанням Typescript; MySQL; API; мова HTTP-запитів.</p>' +
                        '<p class="p-backend">API реалізовано з використанням типових HTTP-запитів: GET, POST, PUT та DELETE.</p>' +
                        '<p class="p-backend">Були використані сутності такі як власна API та зовнішня API (PublicWeatherWidget).</p>' +
                        '<p class="p-backend">Власна - взаємодія з базою даних MySQL та "записує туди данні піц певного дня".</p>' +
                        '<p class="p-backend">Зовнішня ж використовує безкоштовний сервіс api.open-meteo.com для відслідковування та надання інформації про погоду.</p>' +
                        '<p class="p-backend">Відправлення, отримання та загальне тестування HTTP-запитів було реалізовано за допомогою API платформи "Postman".</p>'
                },


                'p6-2': {
                    title: 'Загальні REST ендпоїнти',


                    html: '<p class="p-backend">GET /api/pizа → список піц</p>' +
                        '<p class="p-backend">POST /api/piza → створити піцу (admin).</p>' +
                        '<p class="p-backend">PUT /api/piza → оновити піцу.</p>' +
                        '<p class="p-backend">DELETE /api/pizа → видалити піцу</p>' +
                        '<p class="p-backend">GET /api/weather → для зовнішнього погодного API.</p>'
                },

            }
        },






        p7: {
            title: "Результат роботи продукту",
            left: [
                { id: 'p7-1', label: 'Заповнення полів для піци та її безпосереднє додавання до списку' },
                { id: 'p7-2', label: 'Загальне відображення списку піц від адміна для користувача у певний день тижня' }
            ],
            content: {

                'p7-1': {
                    title: 'Заповнення полів для піци та її безпосереднє додавання до списку',
                    html: '<div class="result-image"><img id="resultImage" src="img/2.png" alt="Моє фото"></div>' +
                        '<p class="p-result">Натискаючи кнопку ADD, отримаємо:</p>' +
                        '<div class="result-image"><img id="resultImage" src="img/3.png" alt="Моє фото"></div>' +
                        '<p class="p-result">Ми можемо змінити форму піци.</p>' +
                        '<div class="result-image"><img id="resultImage" src="img/4.png" alt="Моє фото"></div>' +
                        '<div class="result-image"><img id="resultImage" src="img/5.png" alt="Моє фото"></div>' +
                        '<div class="result-image"><img id="resultImage" src="img/6.png" alt="Моє фото"></div>' +
                        '<p class="p-result">Або, натиснувши на відповідну кнопку, видалити її зі списку.</p>' +
                        '<div class="result-image"><img id="resultImage" src="img/7.png" alt="Моє фото"></div>' +
                        '<p class="p-result">На основному сайті для користувачів ми можемо побачити цю піцу із доданим зображенням.</p>' +
                        '<div class="result-image"><img id="resultImage" src="img/8.png" alt="Моє фото"></div>' +
                        '<p class="p-result">Також тут відображається погода в найпопулярніших місцях.</p>' +
                        '<div class="result-image"><img id="resultImage" src="img/9.png" alt="Моє фото"></div>'
                },




                'p7-2': {
                    title: 'Загальне відображення списку піц від адміна для користувача у певний день тижня',
                    html: '<p class="p-result">Загальне відображення списку піц від адміна для користувача у певний день тижня</p>' +
                        '<div class="result-image"><img id="resultImage" src="img/10.png" alt="Моє фото"></div>' +
                        '<div class="result-image"><img id="resultImage" src="img/11.png" alt="Моє фото"></div>' +
                        '<div class="result-image"><img id="resultImage" src="img/12.png" alt="Моє фото"></div>' +
                        '<div class="result-image"><img id="resultImage" src="img/13.png" alt="Моє фото"></div>' +
                        '<div class="result-image"><img id="resultImage" src="img/14.png" alt="Моє фото"></div>' +
                        '<div class="result-image"><img id="resultImage" src="img/15.png" alt="Моє фото"></div>'
                },

            }
        },




        p8: {
            title: "Висновок",
            left: [
                { id: 'p8-1', label: 'Висновок' }
            ],
            content: {
                'p8-1': {
                    title: 'Висновок',
                    html: '<p class="p-concl">Мій проект "Pizza Day", який використовує власне (PublicPizaList) та зовнішнє (PublicWeatherWidget) API, є актуальним для сьогодення, ' +
                        'так як він покращує та змінює умови для користувачів на краще у вигляді поєднання “усього” на одному, не громіздкому сайті.</p>' +
                        '<p class="p-concl">З технічної точки зору реалізовано базові клієнтські компоненти та їхню взаємодію: карусель, адаптивне меню, список філіалів, компонент погодного віджету. ' +
                        'Це дозволяє розділити відповідальність між UI-компонентами і спростити роботу з API.' +
                        'Розроблена стилістика та набір CSS-класів забезпечують читабельність інтерфейсу, а також взаємодію з ним.</p>' +
                        '<p class="p-concl"> Цей веб-додаток є неоціненним внеском у розвиток сфери швидкого харчування у будь-якій країні світу.</p>'
                },

            }
        },




        p9: {
            title: "Посилання",
            left: [
                { id: 'p9-1', label: 'Посилання' }
            ],
            content: {
                'p9-1': {
                    title: 'Посилання',


                    html: '<p class="p-links"><a class="links" href="https://github.com/Doloman040206/my-work.git" target="_blank" rel="noopener noreferrer">Посилання</a> на репозиторій веб-застосунку.</p>' +
                        '<p class="p-links"><a class="links" href="https://brown-ravens-say.loca.lt" target="_blank" rel="noopener noreferrer">Посилання</a> на загальний сайт веб-застосунку.</p>' +
                        '<p class="p-links"><a class="links" href="https://brown-ravens-say.loca.lt/admin" target="_blank" rel="noopener noreferrer">Посилання</a> на адмін-панель веб-застосунку з паролем 84.40.219.25.</p>' +
                        '<p class="p-links"><a class="links" href="https://github.com/Doloman040206/html-document.git" target="_blank" rel="noopener noreferrer">Посилання</a> на репозиторій звітного html-документу з паролем 84.40.219.25.</p>' +
                        '<p class="p-links"><a class="links" href="https://doloman040206.github.io/html-document/" target="_blank" rel="noopener noreferrer">Посилання</a> на розгорнуту сторінку звітного html-документу. </p>' +
                        '<p class="p-links"><a class="links" href="https://drive.google.com/drive/folders/1CbUhsuqdjDwnLCZv2i1VhY77VKTn1Uli?usp=drive_link" target="_blank" rel="noopener noreferrer">Посилання</a> на діаграму UML.</p>'
                },
            }
        }

    };

    /* UI ELEMENTS */
    const practicalsContainer = document.getElementById('practicalsContainer');
    const leftCol = document.getElementById('leftCol');
    const contentCard = document.getElementById('contentCard');
    const contentTitle = document.getElementById('contentTitle');
    const contentBody = document.getElementById('contentBody');
    const landingCard = document.getElementById('landingCard');

    let panelsVisible = false;
    let currentPractical = null;


    const keys = Object.keys(PRACTICALS);
    keys.forEach((k) => {
        const btn = document.createElement('button');
        btn.className = 'pill';
        btn.dataset.key = k;
        btn.textContent = PRACTICALS[k].title;
        practicalsContainer.appendChild(btn);
        btn.addEventListener('click', () => {
            // on first click reveal panels
            if (!panelsVisible) {
                revealPanels();
                panelsVisible = true;
            }
            selectPractical(k);
        });
    });

    function revealPanels() {
        leftCol.classList.remove('hidden');
        contentCard.classList.remove('hidden');
        landingCard.classList.add('hidden');
    }

    function selectPractical(key) {
        currentPractical = key;
        document.querySelectorAll('.pill').forEach(p => p.classList.toggle('active', p.dataset.key === key));
        renderLeftMenu(key);
        const first = leftCol.querySelector('.left-item');
        if (first) first.click();
        else {
            contentTitle.textContent = PRACTICALS[key].title;
            contentBody.innerHTML = '<p>Немає розділів для цієї практичної.</p>';
        }
    }

    function renderLeftMenu(key) {
        leftCol.innerHTML = '';
        const items = PRACTICALS[key].left || [];
        items.forEach(item => {
            const el = document.createElement('div');
            el.className = 'left-item';
            if (item.highlight) el.classList.add('highlight');
            el.dataset.id = item.id;
            el.tabIndex = 0;
            el.innerHTML = item.label;
            leftCol.appendChild(el);

            el.addEventListener('click', () => {
                leftCol.querySelectorAll('.left-item').forEach(li => li.classList.remove('active'));
                el.classList.add('active');
                showContentFor(key, item.id);
            });
            el.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.code === 'Space') {
                    e.preventDefault();
                    el.click();
                }
            });
        });
    }

    function showContentFor(prKey, itemId) {
        const cset = PRACTICALS[prKey].content || {};
        const data = cset[itemId];
        if (data) {
            contentTitle.textContent = data.title || PRACTICALS[prKey].title;
            contentBody.innerHTML = data.html;
        } else {
            contentTitle.textContent = PRACTICALS[prKey].title;
            contentBody.innerHTML = '<p>Вміст розділу відсутній.</p>';
        }
    }


    (function loadStudentPhoto() {
        const img = document.getElementById('studentPhoto');
        const staticPath = 'img/1.jpg';
        const tester = new Image();
        tester.onload = () => { img.src = staticPath; };
        tester.onerror = () => {};
        tester.src = staticPath;
    })();


    window.PRACTICALS = PRACTICALS;
});