# @react-native-hero/code-view

There are three native views in this module.

* BarCodeView: a barcode generator
* QRCodeView: a qrcode generator
* CodeScanner: a scanner which can recognizes barcode and qrocde

## Getting started

Install the library using either Yarn:

```
yarn add @react-native-hero/code-view
```

or npm:

```
npm install --save @react-native-hero/code-view
```

## Link

- React Native v0.60+

For iOS, use `cocoapods` to link the package.

run the following command:

```
$ cd ios && pod install
```

For android, the package will be linked automatically on build.

- React Native <= 0.59

run the following command to link the package:

```
$ react-native link @react-native-hero/code-view
```

## Setup

### iOS

Add `NSCameraUsageDescription` in your `ios/${ProjectName}/Info.plist`:

```
<key>NSCameraUsageDescription</key>
<string>balabala</string>
```

### Android

Add `jitpack` in your `android/build.gradle` at the end of repositories:

```
allprojects {
  repositories {
    ...
    maven { url 'https://jitpack.io' }
  }
}
```

## Usage

```js
import {
  BarCodeView,
  QRCodeView,
  CodeScanner,
} from '@react-native-hero/code-view'

// BarCodeView
<BarCodeView
  text="xx",
  style={styles.barcode}
/>

// QRCodeView
<QRCodeView
  text="xx",
  style={styles.qrcode}
/>

// At first, make sure you have the permissions.
// ios: CAMERA
// android: CAMERA

// If you don't have these permissions, you can't use CodeScanner.

// CodeScanner
<CodeScanner
  title="将二维码放入框内，即可自动扫描"
  onScanSuccess={data => {
    data.text
  }}
  style={styles.codeScanner}
/>
