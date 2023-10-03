## Use blending mode overlay to achieve text wave effect

Use blend mode overlay to achieve text wave effect

### key point

The traditional text hollow display background is more commonly used `background-clip`.

However, the background of this effect text is an animation effect and cannot be penetrated using `background-clip`. This is achieved through the characteristics of the mixing mode `mix-blend-mode`.


HTML：
```
<div class="g-container">
    <p>TEXT WAVE</p>
</div>
```

SCSS：
```scss
html, body {
    width: 100%;
    height: 100%;
    display: flex;
}

.g-container {
    margin: auto;
}

p {
    position: relative;
    font-size: 120px;
    font-weight: bold;
    background: #fff;
    color: #000;
    overflow: hidden;
    
    &::before,
    &::after {
        content: "";
        position: absolute;
        top: -923px;
        left: 50%;
        width: 2000px;
        height: 2000px;
        border-radius: 45% 48% 43% 47%;
        transform: translate(-50%, -50%);
        background: rgba(3, 169, 244, .85);
        animation: rotate 10s infinite linear;
        z-index: 1;
        mix-blend-mode: lighten;
    }
    
    &::after {
        border-radius: 43% 47% 44% 48%;
        animation: rotate 10s infinite .5s linear;
    }
}

@keyframes rotate {
    0% {
        transform: translate(-50%, -50%) rotate(0);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="mixblend-text-wave-effect" src="https://codepen.io/dvha/embed/ExGpREe?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/ExGpREe">
  mixblend-text-wave-effect</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>