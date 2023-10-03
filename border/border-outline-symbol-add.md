## Use outline to cleverly implement the plus sign

Use outline to cleverly implement the plus sign.

A surprising little trick, maybe it is a bug of `outline`. When `outline` is contracted inward, something magical happens.

> Updated on 2021/03/09, this effect has been fixed in the latest version of Chrome.

HTML：

```html
<div></div>
```

SCSS：
```scss
div {
    width: 200px;
    height: 200px;
    background-color: #fc3;
    box-sizing: border-box;
    margin: auto;
}

div {
    outline: 20px solid #000;
    outline-offset: 10px;
    animation: move 8s infinite linear;
}

@keyframes move {
    50% {
        outline-offset: -118px;
    }
    100% {
        outline-offset: -118px;
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="border-outline-symbol-add" src="https://codepen.io/dvha/embed/PoXBadN?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/PoXBadN">
  border-outline-symbol-add</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>