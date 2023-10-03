## Use gradients and CSS Property to implement TV noise animation

Use gradients and CSS Property to realize the noise animation of the TV snowflake screen.

### key point

CSS @property, its appearance has greatly enhanced the capabilities of CSS!

HTML：

```
<div></div>
```

SCSS：
```scss
html,
body {
    width: 100%;
    height: 100%;
    display: flex;
}

@property --length {
  syntax: '<length>';
  inherits: false;
  initial-value: 0.00085px;
}

div {
    width: 240px;
    height: 240px;
    margin: auto;
}

div {
    background-image: repeating-radial-gradient(
        circle at 17% 32%,
        rgb(4, 4, 0),
        rgb(52, 72, 197),
        rgb(115, 252, 224),
        rgb(116, 71, 5),
        rgb(223, 46, 169),
        rgb(0, 160, 56),
        rgb(234, 255, 0) var(--length)
    );
    animation: change 1s infinite alternate;
}

@keyframes change {
    100% {
        --length: 0.0009px;
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="background-css-property-tv-noise" src="https://codepen.io/dvha/embed/abPjGBp?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/abPjGBp">
  background-css-property-tv-noise</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>