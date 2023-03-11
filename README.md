# Faster DaXueXi

高仿青年大学习的完成页，再也不用忍受枯燥无味的视频了

## 原理

1. 从 `http://news.cyol.com/gb/channels/vrGlAKDl/index.html` 获取最新一期青年大学习的信息
2. 从最新一期青年大学习的链接中获取 `id`
3. 拼接字符串，获取最新一期青年大学习完成页图片的链接
4. 通过后端获取完成页的图片（绕开 CORS），并展示到页面上

> 对第二步和第三步的进一步解释：
>
> 例如获得的最新一期青年大学习的链接如下：
> `https://h5.cyol.com/special/daxuexi/fw3ka0yx6z/index.html`
>
> 其中 `fw3ka0yx6z` 就是 `id`，通过拼接字符串，可得最新一期青年大学习完成页图片的链接为：
>
> `https://h5.cyol.com/special/daxuexi/fw3ka0yx6z/images/end.jpg`
