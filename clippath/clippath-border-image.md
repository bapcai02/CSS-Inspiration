## Use clip-path and border-image to implement rounded gradient borders

Use clip-path and border-image to implement rounded gradient borders.

### border-image

`border-image` is the CSS specification [CSS Backgrounds and Borders Module Level 3](https://drafts.csswg.org/css-backgrounds-3/#border-images) (the latest version of the official version about background and borders) Specification) A new attribute value.

[border-image](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image)

### clip-path

A very interesting CSS property.

The `clip-path` CSS property creates a clipping region where only part of the element is visible. Parts within the area are displayed and parts outside the area are hidden. The clipping region is the path defined by the referenced embedded URL or the path of the external SVG.

[MDN - clip-path](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)

### key point


Because clip-path is used to clip the element, only the clipping area of the element can be displayed, so we can clip a rectangular element with rounded corners through `clip-path: inset()`.

HTML：

```HTML
<div class="border-image-clip-path"></div>
```

SCSS：
```scss

.border-image-clip-path {
    width: 200px;
    height: 100px;
    margin: auto;
    border: 10px solid;
    border-image: linear-gradient(45deg, gold, deeppink) 1;
    clip-path: inset(0px round 10px);
    animation: huerotate 6s infinite linear;
    filter: hue-rotate(360deg);
}

@keyframes huerotate {
    0% {
        filter: hue-rotate(0deg);
    }
    100% {
        filter: hue-rorate(360deg);
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="clippath-border-image" src="https://codepen.io/dvha/embed/WNLKyWE?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/WNLKyWE">
  clippath-border-image</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>