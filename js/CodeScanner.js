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
    showUI: PropTypes.bool,
    isTorchOn: PropTypes.bool,
    style: PropTypes.any,
    onReady: PropTypes.func,
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

  handleReady = () => {
    const { onReady } = this.props
    if (onReady) {
      onReady()
    }
  }
  handleReady

  handleScanSuccess = event => {
    const { onScanSuccess } = this.props
    if (onScanSuccess) {
      onScanSuccess(event.nativeEvent)
    }
  }

  render() {
    return (
      <RNTCodeScanner
        ref={this.scannerRef}
        {...this.props}
        onReady={this.handleReady}
        onScanSuccess={this.handleScanSuccess}
      />
    )
  }

}

const RNTCodeScanner = requireNativeComponent('RNTCodeScanner', CodeScanner)

export default CodeScanner
