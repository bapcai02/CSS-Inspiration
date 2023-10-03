## Use box-reflect to implement artistic graphics

[`-webkit-box-reflect`](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-box-reflect) is a very interesting property that allows CSS to Like a mirror, reflecting what our element was originally drawn to.

### Core Points

`-webkit-box-reflect` is used to realize the nesting of multiple layers of reflection.

For detailed information, please see this article of mine:

HTML：

```HTML
<div class="g-wrap1 line3">
    <div class="g-wrap2">
        <div class="g-wrap3">
            <div class="g-wrap4"></div>
        </div>
    </div>
</div>
```

SCSS：
```scss
.g-wrap4 {
    width: 50px;
    height: 50px;
    background: linear-gradient(45deg, #000 10%, transparent 10%, transparent 30%, #000 30%, #000 50%, transparent 50%,  transparent 70%, #000 70%, #000 90%, transparent 0);
}

.radial {
    .g-wrap4 {
        width: 50px;
        height: 50px;
        background: radial-gradient(circle at 0 0, #000 30%, transparent 30%, transparent 40%, #000 40%, #000 50%, transparent 50%), radial-gradient(circle at 100% 100%, #000 10%, transparent 10%, transparent 30%, #000 30%, #000 40%, transparent 40%);
    }
}

.g-wrap4 {
    -webkit-box-reflect: right 0px;
}
.g-wrap3 {
    -webkit-box-reflect: below 0px;
}
.g-wrap2 {
    -webkit-box-reflect: left 0px;
}
.g-wrap1 {
    -webkit-box-reflect: above 0px;
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="reflect-artist" src="https://codepen.io/dvha/embed/MWZqemP?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/MWZqemP">
  reflect-artist</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>