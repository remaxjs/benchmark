# Remax Benchmark

使用 https://github.com/krausest/js-framework-benchmark 的代码来测试 Remax 的性能。

## 结果

测试机器：iPhone 6s iOS 12.4

| 操作            | Remax 支付宝 |
| --------------- | ------------ |
| Create 500 rows | 1589.8ms     |

测试机器：Google Pixel 3 Android 9

| 操作                    | Remax 微信                  |
| ----------------------- | --------------------------- |
| Create 500 rows         | 457.9ms                     |
| Update every 10th row   | 219.1ms                     |
| append 500 rows 4 times | 590ms, 675ms, 833ms, 1325ms |
