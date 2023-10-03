## mask-image realizes the gradual appearance of text

Use `mask` to achieve the fade effect of text.

### key point

The most important conclusion of using mask is: **The content of the element with the mask attribute added will overlap with the transparent part of the gradient represented by the mask, and the overlapping part will become transparent**.

HTML：

```html
<p>Hello Mask</p>
<p class="radial">Hello Mask</p>
```

SCSS：
```scss
p {
    margin: auto;
    font-family: "Reggae One", cursive;
    font-size: 48px;
    color: #fff;
    mask: radial-gradient(
        circle at 0 50%,
        #000,
        transparent 10%,
        transparent 0
    );
    mask-size: 100%;
    animation: scale 5s infinite;
}
.radial {
    mask: radial-gradient(
        circle at 50% 0,
        #000,
        transparent 20%,
        transparent 0
    );
    mask-size: 100% 100%;
    animation: scale2 5s infinite;
}
@keyframes scale {
    50%,
    100% {
        mask-size: 2000%;
    }
}
@keyframes scale2 {
    50%,
    100% {
        mask-size: 100% 2000%;
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="bg-mask-text-show" src="https://codepen.io/dvha/embed/WNLKyer?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/WNLKyer">
  bg-mask-text-show</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>