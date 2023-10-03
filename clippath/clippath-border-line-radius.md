## clip-path implements border line animation 2

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
```

SCSS：
```scss
div {
    position: relative;
    margin: auto;
    width: 120px;
    line-height: 64px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    border: 2px solid gold;
    border-radius: 10px;
    background: gold;
    transition: all .3s;
    cursor: pointer;
    
    &:hover {
        filter: contrast(1.1);
    }
    
    &:active {
        filter: contrast(0.9);
    }
    
    &::before,
    &::after {
        content: "";
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        border: 2px solid gold;
        transition: all .5s;
        animation: clippath 3s infinite linear;
        border-radius: 10px;
    }
    
    &::after {
        animation: clippath 3s infinite -1.5s linear;
    }
}

@keyframes clippath {
    0%,
    100% {
        clip-path: inset(0 0 98% 0);
    }
    
    25% {
        clip-path: inset(0 98% 0 0);
    }
    50% {
        clip-path: inset(98% 0 0 0);
    }
    75% {
        clip-path: inset(0 0 0 98%);
    }
}

.bg::before {
    background: rgba(255, 215, 0, .5);
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="clippath-border-line-radius" src="https://codepen.io/dvha/embed/MWZBXRX?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/MWZBXRX">
  clippath-border-line-radius</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>