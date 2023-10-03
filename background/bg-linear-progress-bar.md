## Linear gradient simulates progress bar movement

Use a linear gradient to simulate progress bar movement.

### Knowledge points

The core difficulty lies in how to connect the beginning and end of the animation. You need to try to calculate it yourself.

HTML：

```html
<div class="bar"></div>
<div class="bar overflow"></div>
```

SCSS：
```scss
html,
body {
    width: 100%;
    height: 100%;
    display: flex;
}

.bar {
    position: relative;
    width: 400px;
    height: 30px;
    margin: auto;
    border-radius:20px;
    // border: 1px solid #000;
    background: #ffba01;
    
    &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 400px;
        height: 85px;
        background: repeating-linear-gradient(45deg, #f06a0e, #f06a0e
10px, transparent 11px, transparent 19px, #f06a0e 20px);
        background-position: 0 0;
        background-repeat: no-repeat;
        animation: move 1s linear infinite;
    }
    
}

.overflow {
    overflow: hidden;
}

@keyframes move {
    from { background-position: 0 0; }
    to { background-position: 0 -56px; }
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="bg-linear-progress-bar" src="https://codepen.io/dvha/embed/RwEByEE?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/RwEByEE">
  bg-linear-progress-bar</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>