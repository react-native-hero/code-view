#import <React/RCTUIManager.h>

#import "RNTCodeScannerManager.h"
#import "RNTCodeScanner.h"
#import "HeroCodeView-Swift.h"

@implementation RNTCodeScannerManager

RCT_EXPORT_MODULE()

- (UIView *)view {
    return [RNTCodeScanner new];
}

RCT_CUSTOM_VIEW_PROPERTY(title, NSString, RNTCodeScanner) {
    view.scanner.guideTitle = [RCTConvert NSString:json];
}

RCT_CUSTOM_VIEW_PROPERTY(showUI, BOOL, RNTCodeScanner) {
    view.scanner.showUI = [RCTConvert BOOL:json];
}

RCT_CUSTOM_VIEW_PROPERTY(isTorchOn, BOOL, RNTCodeScanner) {
    view.scanner.isTorchOn = [RCTConvert BOOL:json];
}

RCT_EXPORT_VIEW_PROPERTY(onReady, RCTBubblingEventBlock);
RCT_EXPORT_VIEW_PROPERTY(onScanSuccess, RCTBubblingEventBlock);

RCT_EXPORT_METHOD(destroy:(nonnull NSNumber *)reactTag) {
    [self.bridge.uiManager addUIBlock:^(RCTUIManager *uiManager, NSDictionary<NSNumber *,UIView *> *viewRegistry) {
        RNTCodeScanner *view = (RNTCodeScanner *)viewRegistry[reactTag];
        [view.scanner destroy];
    }];
}

@end
