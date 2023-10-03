## Linear gradient implements scrolling progress bar

Use a linear gradient to implement a scrolling progress bar.

Scroll the page below and you will see that the progress bar effect is implemented at the top. This is actually a simple deception using linear gradient.

HTML:

```html
<h1>Incredible pure CSS progress bar effect</h1>

....

<p>OK, continue. This effect...</p>
```

SCSS：
```scss
body {
    position: relative;
    padding: 50px;
    font-size: 24px;
    line-height: 30px;
    background-image: linear-gradient(to right top, #ffcc00 50%, #eee 50%);
    background-size: 100% calc(100% - 100vh + 5px);
    background-repeat: no-repeat;
    z-index: 1;
}

body::after {
    content: "";
    position: fixed;
    top: 5px;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    z-index: -1;
}


/**
 * Unrelated css
 */

h1 {
    font-size: 32px;
    line-height: 60px;
}

ul {
    margin-top: 30px;
}

p {
    font-size: 24px;
    line-height: 30px;
    margin-top: 30px;
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="bg-linear-scroll-indicator" src="https://codepen.io/dvha/embed/yLGqjZa?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/yLGqjZa">
  bg-linear-scroll-indicator</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>