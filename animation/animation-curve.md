## CSS implements curve movement

CSS implements curved motion.

HTML：

```html
<div class="g-container">
    <div class="g-ball"></div>
</div>
```

SCSS：
```scss
.g-container {
    position: relative;
    width: 10vmin;
    height: 70vmin;
    margin: 20vmin auto;
    // background: rgba(0, 0, 0, .1);
    transform-origin: center 0;
    animation: rotate 1.5s cubic-bezier(.5, 0, .5, 1) infinite alternate, opacity 3s linear infinite alternate;
}

.g-ball {
    position: absolute;
    width: 10vmin;
    height: 10vmin;
    border-radius: 50%;
    background: radial-gradient(circle, #fff, #000);
    top: 60vmin;
    left: 0;
    animation: move 1.5s cubic-bezier(.5, 0, .5, 1) infinite alternate;
}

@keyframes opacity {
    from, 50% {
      border: 1px dashed rgba(255, 255, 255, 0);
    }
    to {
      border: 1px dashed rgba(0, 0, 0, .2);
    }
}

@keyframes rotate {
    100% {
        transform: rotate(90deg) translate(-3vmin, 0);
    }
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="animation-curve" src="https://codepen.io/dvha/embed/XWoBRxx?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/XWoBRxx">
  animation-curve</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>