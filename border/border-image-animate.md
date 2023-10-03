## Use border-image to implement dynamic borders

Use border-image to implement dynamic borders.

Using `border-image`, we can also implement some interesting border animations. Regarding `border-image`, there is a very good explanation article-[Correct usage of border-image](https://aotu.io/notes/2016/11/02/border-image/index.html), This article will not explain too much about the basic definitions.

If we have a picture like this:

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e1b8128cc4e497ba601f366a0b40b08~tplv-k3u1fbpfcp-watermark.image)

You can use the features of `border-image-slice` and `border-image-repeat` to get a similar border pattern:

```CSS
div {
  width: 200px;
  height: 120px;
  border: 24px solid;
  border-image: url(image-url);
  border-image-slice: 32;
  border-image-repeat: round;
}
```
On this basis, you can change the height and width of the element at will, so that it can be expanded to a container border of any size:

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/99c4a2f549be43b19db451cd302db99d~tplv-k3u1fbpfcp-watermark.image)

[CodePen Demo -- border-image Demo](https://codepen.io/Chokcoco/pen/oNzJeKd)

Then, in this article--[How to Animate a SVG with border-image](https://css-tricks.com/how-to-animate-a-svg-with-border-image/), also It explains a border animation using `border-image`, which is very cool.

The difference from the above example is that we only need to make our pattern move, that is, we need such a background image (the Nuggets do not support SVG animation, [original image address](https://skullctf.com/images /skull-border.svg)):

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/552672644b4f459db0f2e8a4ea1ea209~tplv-k3u1fbpfcp-watermark.image)

Then, we can also get a moving frame image. The code is exactly the same, but the frame is moving:

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ce046136a20d436ba1ab8074b02d6372~tplv-k3u1fbpfcp-watermark.image)


The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="border-image-animate" src="https://codepen.io/dvha/embed/rNorKvK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/rNorKvK">
  border-image-animate</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>