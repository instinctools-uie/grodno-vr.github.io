import React from 'react';
import { Text, View, Animated, CylindricalPanel, Image, AmbientLight, asset } from 'react-vr';
import { Model3D, GazeButton } from '../.';

import styles from './styles';

const Easing = require('Easing');

class VRInformation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modelRotation: 50.1,
            closeOpacity: new Animated.Value(0.4),
            closeScale: new Animated.Value(1.4),
            opacity: new Animated.Value(0.1),
            scale: new Animated.Value(0.1)
        };
    }

    componentDidMount() {
        Animated.parallel([
            Animated
                .timing(
                    this.state.scale,
                    { toValue: 0.85, duration: 500, easing: Easing.in }
                ),
            Animated
                .timing(
                    this.state.opacity,
                    { toValue: 0.85, duration: 800, easing: Easing.in }
                )
        ]).start();
    }

    mouseInClose() {
        Animated.parallel([
            Animated
                .timing(
                    this.state.closeOpacity,
                    { toValue: 1, duration: 500, easing: Easing.in }
                ),
            Animated
                .timing(
                    this.state.closeScale,
                    { toValue: 0.9, duration: 800, easing: Easing.in }
                )
        ]).start();
    }

    mouseOutClose() {
        Animated.parallel([
            Animated
                .timing(
                    this.state.closeOpacity,
                    { toValue: 0.4, duration: 500, easing: Easing.in }
                ),
            Animated
                .timing(
                    this.state.closeScale,
                    { toValue: 1.4, duration: 800, easing: Easing.in }
                )
        ]).start();
    }

    renderModelControls() {
        const { model } = this.props;
        const { transform } = model.controls;
        const { opacity, scale } = this.state;

        return (
            <Animated.View
                style={[
                    styles.modelControls,
                    {
                        transform: [{ scale }, ...transform],
                        opacity
                    }
                ]}
            >
                <GazeButton
                    style={{}}
                    onClick={() => this.setState({ modelRotation: this.state.modelRotation + 15.1 })}
                >
                    <Image
                        source={asset('icons/rotate-left.png')}
                        style={styles.modelControl}
                    />
                </GazeButton>
                <GazeButton
                    style={{}}
                    onClick={() => this.setState({ modelRotation: this.state.modelRotation - 15.1 })}
                >
                    <Image
                        source={asset('icons/rotate-right.png')}
                        style={styles.modelControl}
                    />
                </GazeButton>
            </Animated.View>
        );
    }

    render() {
        const { title, description, model, translateX, width, height, onClose } = this.props;
        const { opacity, scale, closeOpacity, closeScale } = this.state;

        return (
            <AmbientLight intensity={1}>
                <CylindricalPanel
                    layer={{ width: 4096, height: 820, radius: 700 }}
                    style={{ transform: [{ translateY: 5 }], position: 'absolute', flexDirection: 'column' }}
                >
                    <Animated.View
                        style={{
                            transform: [{ scale }, { translateX }],
                            opacity,
                            width,
                            height,
                            backgroundColor: 'black'
                        }}
                    >
                        <View
                            style={{ width, alignItems: 'flex-end' }}
                        >
                            <GazeButton
                                onClick={() => onClose()}
                                onEnter={() => this.mouseInClose()}
                                onExit={() => this.mouseOutClose()}
                                style={styles.closeButton}
                            >
                                <Animated.Image
                                    source={asset('icons/x.png')}
                                    style={[
                                        styles.closeImage,
                                        {
                                            opacity: closeOpacity,
                                            transform: [{ scale: closeScale }]
                                        }
                                    ]}
                                />
                            </GazeButton>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Text
                                style={{
                                    margin: 20,
                                    fontSize: 30,
                                    fontWeight: '300',
                                    width: model ? 600 : 900
                                }}
                            >
                                {`${title.toUpperCase()}\n\n${description}`}
                            </Text>
                            { model && <View style={{
                                justifyContent: 'center',
                                alignItems: 'flex-end'
                            }}>
                                { /* <Image style={{ opacity: 0.1, width: 200, height: 200 }} source={asset('icons/3d-placeholder.png')} /> */ }
                            </View> }
                        </View>
                    </Animated.View>
                </CylindricalPanel>

                { model && <Model3D rotation={this.state.modelRotation} details={model} /> }
                { model && this.renderModelControls() }

            </AmbientLight>
        );
    }
}

export default VRInformation;