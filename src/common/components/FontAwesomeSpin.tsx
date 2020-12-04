import React, {Component} from 'react';
import {Animated, Easing} from 'react-native';

class FontAwesomeSpin extends Component<any, any> {
  spinValue = new Animated.Value(0);

  componentDidMount() {
    this.spin();
  }

  spin = () => {
    this.spinValue.setValue(0);

    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => this.spin());
  };

  render() {
    const {children} = this.props;
    const rotate = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <Animated.View style={{transform: [{rotate}]}}>{children}</Animated.View>
    );
  }
}

export default FontAwesomeSpin;
