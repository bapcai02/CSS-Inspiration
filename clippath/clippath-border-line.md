## clip-path implements border line animation

clip-path implements border line animation.

### clip-path

A very interesting CSS property.

The `clip-path` CSS property creates a clipping region where only part of the element is visible. Parts within the area are displayed and parts outside the area are hidden. The clipping region is the path defined by the referenced embedded URL or the path of the external SVG.

[MDN - clip-path](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)

### key point

Because clip-path is used to clip the element, only the clipping area of the element can be displayed, so we can draw several keyframes through animation animation.

HTML：

```HTML
<div>Hello</div>
<div class="bg">Schematic diagram</div>
```

SCSS：
```scss
div {
    position: relative;
    margin: auto;
    width: 160px;
    line-height: 160px;
    text-align: center;
    font-size: 24px;
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 2px solid gold;
        transition: all .5s;
        animation: clippath 3s infinite linear;
    }
}

@keyframes clippath {
    0%,
    100% {
        clip-path: inset(0 0 95% 0);
    }
    
    25% {
        clip-path: inset(0 95% 0 0);
    }
    50% {
        clip-path: inset(95% 0 0 0);
    }
    75% {
        clip-path: inset(0 0 0 95%);
    }
}

.bg::before {
    background: rgba(255, 215, 0, .5);
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="clippath-border-line" src="https://codepen.io/dvha/embed/ExGpRBr?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/ExGpRBr">
  clippath-border-line</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>