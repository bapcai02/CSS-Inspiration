## Gradient to achieve wave effect/wave progress box

Use gradients to achieve a wave effect/wavy progress box.

### key point

+ Use multiple linear gradients and a single element to set up multi-layer gradient overlay implementation


HTML：

```html
<div class="wave"></div>
```

SCSS：
```scss
.wave {
    width: 20vmax;
    height: 20vmax;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #0092d4;
    background: linear-gradient(0deg, #0092d4 0%, #6bcefb 50%, transparent 50%);
    border-radius: 50%;
    z-index: 1;
    overflow: hidden;
    cursor: pointer;
}

.wave::before,
.wave::after {
    content: "";
    position: absolute;
    transform: scaleX(1.3);
}

.wave::after {
    top: 50%;
    left: 0;
    right: 0;
    background-repeat: repeat-x;
    height: 10px;
    background-size: 20px 20px;
    background-image: radial-gradient(
        circle at 10px 15px,
        transparent 12px,
        #fff 13px,
        #fff 20px
    );
}

.wave::before {
    top: 50%;
    left: 0;
    right: 0;
    background-repeat: repeat-x;
    height: 15px;
    background-size: 40px 20px;
    background-image: radial-gradient(
        circle at 10px 0px,
        #fff 12px,
        transparent 13px
    );
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="bg-wave" src="https://codepen.io/dvha/embed/RwEBJWO?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/RwEBJWO">
  bg-wave</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>