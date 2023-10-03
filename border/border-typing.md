## border-color transformation to achieve text input effect

Border-color transformation implements text input effect.

### key point 

+ Use border-right to achieve cursor blinking

----

HTML：

```html
<h1>Pure CSS Typing animation.</h1>
```

SCSS：
```scss
body {
    background: black;
    color: #fff;
}

h1 {
    font: bold 200% Consolas, Monaco, monospace;
    border-right: 0.1em solid;
    width: 16.5em;
    width: 26ch;
    margin: 2em 1em;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 3s steps(26, end),
        cursor-blink 0.3s step-end infinite alternate;
}

@keyframes typing {
    from {
        width: 0;
    }
}

@keyframes cursor-blink {
    50% {
        border-color: transparent;
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="border-typing" src="https://codepen.io/dvha/embed/vYvarbO?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/vYvarbO">
  border-typing</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>