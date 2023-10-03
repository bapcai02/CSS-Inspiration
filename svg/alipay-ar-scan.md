## Alipay AR lucky scanning animation

Alipay AR scanning animation.

### key point

Used `stroke-dasharray` and `stroke-dashoffset` to control line animation.

For details, you can read this article of mine:

[ [Web Animation] Introduction to SVG Line Animation ](https://www.cnblogs.com/coco1s/p/6225973.html)

HTML：

```html
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300px" height="300px">
    <polygon class="g-polygon-wrap" points="150 0, 300 75, 300 225, 150 300, 0 225,  0 75, 150 0" />
    <polygon class="g-polygon-move" points="150 0, 300 75, 300 225, 150 300, 0 225,  0 75, 150 0" />
</svg>
```

SCSS：
```scss
html,
body {
    width: 100%;
    height: 100%;
    display: flex;
    background: #000;
}

svg {
    margin: auto;
    overflow: visible;
    transform: scalex(.9);
}

.g-polygon-wrap,
.g-polygon-move {
    fill: none; 
    stroke: #bf303c; 
    stroke-width: 2;
    stroke-linejoin: round;
    stroke-linecap: round;
}

.g-polygon-move {
    transform-origin: center center;
    transform: scale(1.05);
    stroke: linear-gradinet(180deg, red, transprent);
    stroke-width:1.5;
    stroke-dasharray: 280, 700;
    stroke-dashoffset: 8;
    animation: move 2.4s infinite linear;
}

@keyframes move {
    0% {
        stroke-dashoffset: 8;
    }
    100% {
        stroke-dashoffset: -972;
    }
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="alipay-ar-scan" src="https://codepen.io/dvha/embed/GRPXqyW?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/GRPXqyW">
  alipay-ar-scan</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>