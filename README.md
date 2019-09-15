# Remax Benchmark

使用 https://github.com/krausest/js-framework-benchmark 的代码来测试 Remax 的性能。

时间统计方式是从 `setData` 调用，到回调回来的时间，取 10 次的平均值。

## 结果

测试机器：Google Pixel 3 Android 9

| 操作                    | Remax 微信               | Remax 微信（使用虚拟列表） | Remax 支付宝（使用虚拟列表） | 原生微信                | Remax 支付宝             |
| ----------------------- | ------------------------ | -------------------------- | ---------------------------- | ----------------------- | ------------------------ |
| Create 500 rows         | 473.4ms                  | 105.4ms                    | 49.9ms                       | 212.7ms                 | 508.2ms                  |
| Update 50 rows          | 232.1ms                  | 50.1ms                     | 29.1ms                       | 23.9ms                  | 179.3ms                  |
| append 500 rows 4 times | 543ms 679ms 965ms 1191ms | 87ms 63ms 40ms 41ms        | 56ms 30ms 35ms 33ms          | 252ms 458ms 240ms 234ms | 646ms 800ms 862ms 1164ms |

测试机器：iPhone 6s iOS 12.4

| 操作                    | Remax 支付宝                | 原生支付宝                 | Remax 微信 | 原生微信 |
| ----------------------- | --------------------------- | -------------------------- | ---------- | -------- |
| Create 500 rows         | 510ms                       | 376ms                      | 993ms      | 297ms    |
| Update 50 rows          | 170ms                       | 96ms                       |            |          |
| append 500 rows 4 times | 675ms, 861ms, 939ms, 1383ms | 460ms, 441ms, 442ms, 723ms |            |          |
