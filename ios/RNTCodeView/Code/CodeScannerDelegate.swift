
import Foundation

@objc public protocol CodeScannerDelegate {
    
    // 初始化成功时触发
    func codeScannerDidReady(_ codeScanner: CodeScanner)
    
    // 扫描成功时触发
    func codeScannerDidScanSuccess(_ codeScanner: CodeScanner, text: String)
    
}
