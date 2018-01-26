import { StyleSheet } from 'react-vr';

const BORDER_RADIUS = 0.036;

const styles = StyleSheet.create({
    caption: {
        width: 2.5,
        height: 0.32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        layoutOrigin: [0.5, 0.5],
        transform: [{ translate: [0, 0, -3] }],
    },
    leftItem: {
        width: '20%',
        height: '100%',
        marginRight: 0.02,
        backgroundColor: 'rgba(140, 140, 140, 0.9)',
        borderWidth: 0.02,
        borderColor: 'white',
        borderTopLeftRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS,
        alignItems: 'center',
        justifyContent: 'center',
    },
    middleItem: {
        width: '20%',
        height: '100%',
        marginRight: 0.02,
        backgroundColor: 'rgba(140, 140, 140, 0.9)',
        borderWidth: 0.02,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightItem: {
        width: '60%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        borderWidth: 0.02,
        borderColor: 'white',
        borderTopRightRadius: BORDER_RADIUS,
        borderBottomRightRadius: BORDER_RADIUS,
        paddingHorizontal: 0.08,
        justifyContent: 'center',
    },
    captionButton: {
        width: 1,
        height: 0.40,
        backgroundColor: 'red',
    },
    icon: {
        height: 0.18,
        width: 0.18,
    },
    captionContent: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        maxWidth: 1.75,
        paddingVertical: 0.025,
        paddingHorizontal: 0.075,
        borderTopRightRadius: 0.05,
        borderBottomRightRadius: 0.05,
    },
    heading: {
        fontSize: 0.12,
        color: '#ffffff',
    },
    subheading: {
        color: '#999999',
        marginTop: 0.024,
        fontSize: 0.080,
    }
});

export default styles;