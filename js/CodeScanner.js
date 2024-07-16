import React, {
  PureComponent,
  createRef,
} from 'react'

import ReactNative, {
  UIManager,
  requireNativeComponent,
  NativeModules,
  Platform,
} from 'react-native'

import PropTypes from 'prop-types'

const { RNTCodeScannerManager } = NativeModules

const isIOS = Platform.OS === 'ios'

class CodeScanner extends PureComponent {

  scannerRef = createRef()

  static propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.any,
    onScanSuccess: PropTypes.func,
  }

  componentWillUnmount() {
    if (isIOS) {
      RNTCodeScannerManager.destroy(this.getNativeNode())
    }
    else {
      UIManager.dispatchViewManagerCommand(
        this.getNativeNode(),
        UIManager.RNTCodeScanner.Commands.destroy,
        []
      )
    }
  }

  getNativeNode() {
    return ReactNative.findNodeHandle(this.scannerRef.current);
  }

  handleScanSuccess = event => {
    let { onScanSuccess } = this.props
    if (onScanSuccess) {
      onScanSuccess(event.nativeEvent)
    }
  }

  render() {
    return (
      <RNTCodeScanner
        ref={this.scannerRef}
        {...this.props}
        onScanSuccess={this.handleScanSuccess}
      />
    )
  }

}

const RNTCodeScanner = requireNativeComponent('RNTCodeScanner', CodeScanner)

export default RNTCodeScanner
