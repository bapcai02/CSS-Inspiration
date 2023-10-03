## Angular gradient implements pure CSS ring progress chart

Angular gradient implements a pure CSS donut progress chart.

### key point

+ Use angular gradient `conic-gradient` and **mask** to achieve a trailing ring progress bar

HTML：

```html
<div class="g-container">
    <div class="g-circle"></div>
</div>
```

SCSS：
```scss
body, html {
    width: 100%;
    height: 100%;
    display: flex;
    background: #333;
}

.g-container {
    position: relative;
    width: 200px;
    height: 200px;
    margin: auto;
    border-radius: 50%;
    box-sizing: border-box;
    border: 6px solid #444;
}
.g-circle {
    position: absolute;
    top: -6px;
    left: -6px;
    bottom: -6px;
    right: -6px;
    border-radius: 50%;
    background: conic-gradient(#fc0 0%, transparent 40%, transparent);
    animation: rotate 3s ease-in-out infinite;
    transition-origin: 50% 50%;
    
    &::before {
        content: "";
        position: absolute;
        top: 6px;
        left: 6px;
        bottom: 6px;
        right: 6px;
        background: #333;
        border-radius: 50%;
        // z-index: 1;
    }
    
    &::after {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        top: 0;
        left: 50%;
        transform: translate(-50%, -3px);
        border-radius: 50%;
        background: #fc0;
        box-shadow: 0 0 4px 2px #fc0;
    }
}

@keyframes rotate {
    100% {
        transform: rotate(-360deg);
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="bg-conic-circle-loading" src="https://codepen.io/dvha/embed/preview/QWzBrve?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/QWzBrve">
  bg-conic-circle-loading</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>