## Use hue-rotate to implement gradient background animation

Use hue-rotate to implement gradient background animation.

This method should be a better way to implement gradient background animation.

HTML：

```HTML
<div></div>
```

SCSS：
```scss
div {
    width: 300px;
    height: 180px;
    margin: auto;
    background: linear-gradient(45deg, #ffc107, deeppink, #9c27b0);
    animation: hueRotate 10s infinite alternate;
}

@keyframes hueRotate {
    100% {
        filter: hue-rotate(360deg);
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="filter-hue-rotate-color" src="https://codepen.io/dvha/embed/MWZBqEK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/MWZBqEK">
  filter-hue-rotate-color</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>