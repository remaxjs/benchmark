# Remax Benchmark

使用 https://github.com/krausest/js-framework-benchmark 的代码来测试 Remax 的性能。

## 结果

测试机器：Google Pixel 3 Android 9

| 操作                    | Remax 微信                 | 原生微信                   |
| ----------------------- | -------------------------- | -------------------------- |
| Create 500 rows         | 278ms                      | 208.3ms                    |
| Update 50 rows          | 110.6ms                    | 10ms                       |
| append 500 rows 4 times | 312ms, 377ms, 567ms, 594ms | 218ms, 198ms, 234ms, 210ms |
