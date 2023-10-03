## scale works with transfrom-origin to accurately control the animation direction.

scale works with transfrom-origin to accurately control the animation direction.

HTML：

```HTML
<div>Hover Me</div>
```

SCSS：
```scss
div {
    position: absolute;
    width: 200px;
    height: 60px;
    line-height: 60px;
    font-size: 32px;
    cursor: pointer;
    color: #333;
    text-align: center;
    transition: color .5s;
    margin: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

div::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 200px;
    transform: scaleX(0);
    height: 2px;
    background: deeppink;
    z-index: -1;
    transition: transform .5s;
    transform-origin: 100% 0;
}

div:hover::before {
    transform: scaleX(1);
    transform-origin: 0 0;
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="animation-direction" src="https://codepen.io/dvha/embed/yLGqbQK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/yLGqbQK">
  animation-direction</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

------

Of course, this is actually just one of the options.

It can also be achieved without using `transform-orign` + `scale`. The solution to directly use positioning is as follows:

HTML：

```HTML
<div>Hover Me</div>
```

SCSS：
```scss
div {
    position: relative;
    width: 200px;
    height: 60px;
    margin: auto;
    line-height: 60px;
    font-size: 32px;
    cursor: pointer;
    color: #333;
    text-align: center;
    transition: color .5s;
}

div::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: deeppink;
    transition: all .5s;
}

div:hover::before {
    left: 0;
    width: 200px;
}
```
<iframe height="300" style="width: 100%;" scrolling="no" title="animation-direction-2" src="https://codepen.io/dvha/embed/LYMByXK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/LYMByXK">
  animation-direction-2</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>