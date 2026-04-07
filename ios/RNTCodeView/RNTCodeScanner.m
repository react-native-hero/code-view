
#import "RNTCodeScanner.h"
#import "HeroCodeView-Swift.h"

@interface RNTCodeScanner()<CodeScannerDelegate>

@end

@implementation RNTCodeScanner

- (instancetype)init {
    self = [super init];
    if (self) {
        CodeScanner *view = [[CodeScanner alloc] initWithConfiguration:[CodeScannerConfiguration new] delegate:self];
        view.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
        [self addSubview:view];
        self.scanner = view;
    }
    return self;
}

- (void)codeScannerDidReady:(CodeScanner *)codeScanner {
    // 加一个延时，回到主线程后 self.onReady 才会有值
    dispatch_async(dispatch_get_main_queue(), ^{
        self.onReady(@{});
    });
}

- (void)codeScannerDidScanSuccess:(CodeScanner *)codeScanner text:(NSString *)text {
    self.onScanSuccess(@{
                         @"text": text
                         });
}

@end
