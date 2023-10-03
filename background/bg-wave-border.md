## Gradient to achieve wavy border

Gradient achieves wavy borders.

### key point

+ Use multiple linear gradients and a single element to set up multi-layer gradient overlay implementation


HTML：

```html
<body></body>
```

SCSS：
```scss
body {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #607d8b, #673ab7);
    background-size: 100% 50px;
    background-repeat: no-repeat;
    
    &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 40px;
          right: 0;
          background-repeat: repeat-x;
          height: 10px;
          background-size: 20px 20px;
          background-image: radial-gradient(circle at 10px -5px, transparent 12px, #fff 13px, #fff 20px);
    }
    
    &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 35px;
          right: 0;
          background-repeat: repeat-x;
          height: 15px;
          background-size: 40px 20px;
          background-image: radial-gradient(circle at 10px 15px, white 12px, transparent 13px);
    }
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="bg-wave-border" src="https://codepen.io/dvha/embed/RwEBJPO?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/RwEBJPO">
  bg-wave-border</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>