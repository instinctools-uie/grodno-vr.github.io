const toys = {
    name: 'toys',
    // sound: 'audio/birds.mp3',
    style: {},
    portals: [
        {
            name: 'garadnica',
            transformPortal: [{translate: [-4, 0, 14]}]
        },
        {
            name: 'fire',
            transformPortal: [{translate: [10, 0, 10]}]
        }
    ],
    labels: [
        {
            offset: 0,
            viewStyle: {
                transform: [{translate: [1, 2, -5]}, { scale : 1.5 }]
            },
            text: 'Кукольный Театр (Театр А.Тизенгауза)',
            description: `Театр Тизенгауза в Гродно является памятником архитектуры XVIII века и первым публичным театром города. Построено здание театра в 1772 году архитекторами Мезером и Сакко, хотя сам театр начал функционировать 30 апреля 1769 года. Созданный как небольшой ансамбль вокалистов и инструменталистов, вскоре театр преобразовался в постоянный коллектив с внушительным балетным и оперным репертуаром.\n
                          Здание театра было соединено с дворцом Тизенгауза крытым переходом. Главный зал театра представлял собой полукруглое помещение с амфитеатром и ярусными галереями по периметру и был сформирован по «итальянской кривой».\n
                          В 1940-1941 года в здании работал Государственный польский театр кукол БССР, в 1945-1947 - Государственный русский драматический театр БССР, с 1947 года - драматический областной театр. В 1975 году театр вновь реконструировался: были расширены зрительный зал и сценическая коробка. С 1984 года в здании располагается театр кукол.\n
                          \nТекст holiday.by`,
            infoPosition: 1800, // pixels
            galleryStyle: {
                transform: [{translate: [-3, 5, -8]}]
            },
            oldImages: [
                {
                    source: 'places/toys/old/toysXIX-XX-1.png',
                    year: 'XIX-XX вв.',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/toys/old/toysXIX-XX-2.png',
                    year: 'XIX-XX вв.',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/toys/old/toysXIX-XX.png',
                    year: 'XIX-XX вв. Фото old.grodno.net',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/toys/old/toys1930th.png',
                    year: '1930-е, Фото harodnia.com',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                },
                {
                    source: 'places/toys/old/toys1979.png',
                    year: '1979 г. Фото oldgrodno.by',
                    style: {
                        width: 7,
                        height: 4.2
                    }
                }
            ]
        }
    ]
};

export default toys;