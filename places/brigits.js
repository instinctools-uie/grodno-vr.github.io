const brigits = {
    name: 'brigits',
    style: {},
    portals: [
        {
            name: 'center',
            transformPortal: [{translate: [12, 0, 1]}]
        }
    ],
    labels: [
        {
            buttonStyle: {},
            viewStyle: {
                transform: [{translate: [12, 4, 0]}, { scale : 2.5 }, { rotateY: -90 }]
            },
            textStyle: {
                fontSize: 0.2,
                textAlign: 'center'
            },
            text: 'Monastery of St. Brigitte',
            oldImages: []
        }
    ]
};

export default brigits;