## border-radius transformation to achieve loading effect

Border-radius transformation achieves loading effect.

------ 

HTML：

```html
<div></div>
```

SCSS：
```scss
body {
    background: #000;
}

div {
    position: relative;
    width: 35vmin;
    height: 35vmin;
    background: linear-gradient(120deg, #34e0f0 0%, #b400ff 100%);
    opacity: .8;
    margin: 25vh auto;
    border-radius: 35%;
    animation: rotateMain 8s linear infinite;
}

div::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, #35a0f0 0%, #b233f0 100%);
    opacity: .8;
    box-shadow: 5px 5px 90px rgba(10, 102, 255, 0.5);
    border-radius: 35%;
    animation: rotateMain 8s linear 2s infinite;
}

div::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(60deg, #33580f 0%, #b7ee6d 100%);
    opacity: .8;
    box-shadow: 5px 5px 60px rgba(20, 102, 255, 0.3);
    border-radius: 35%;
    animation: rotateMain 8s linear 4s infinite;
    z-index: -1;
}

@keyframes rotateMain {
    50% {
        transform: rotateZ(180deg);
        border-radius: 50%;
    }
    100% {
        transform: rotateZ(360deg);
        border-radius: 35%;
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="border-loading" src="https://codepen.io/dvha/embed/dywjKKB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/dywjKKB">
  border-loading</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>