## Linear gradient to achieve inscribed angles

Linear gradients implement inscribed angles.

### key point

+ Use multiple linear gradients and a single element to set up multi-layer gradient overlay implementation


HTML：

```html
<div class="notching"></div>
```

SCSS：
```scss
.notching{
    width: 160px;
    padding: 60px 20px;
}
.notching{
    background:
    linear-gradient(135deg, transparent 15px, deeppink 0)
    top left,
    linear-gradient(-135deg, transparent 15px, deeppink 0)
    top right,
    linear-gradient(-45deg, transparent 15px, deeppink 0)
    bottom right,
    linear-gradient(45deg, transparent 15px, deeppink 0)
    bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="bg-linear-inscribed" src="https://codepen.io/dvha/embed/JjwBvwp?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/JjwBvwp">
  bg-linear-inscribed</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>