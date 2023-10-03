## Linear gradient background to realize striped characters

Use linear gradient background to realize striped characters.

### key point

The focus is on the repeated gradient of gradient colors white and transparent.

Combined with other CSS properties, it has many functions, such as three-dimensional striped text.

HTML:

```html
<p>All fonts are striped</p>
<p>Using linear gradient background</p>
<p>The focus is on the repeated gradient of gradient white and transparent colors</p>
<p>It has many effects when combined with other CSS properties, such as three-dimensional striped characters</p>
```

SCSS：
```scss
p {
    position: relative;
    text-align: center;
    font-size: 15vmin;
    line-height: 25vmin;
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, #fff 0%, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #fff 75%, transparent 75%, transparent 100%);
        background-size: 6px 6px;
        z-index: 1;
    }
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="bg-linear-stripe" src="https://codepen.io/dvha/embed/gOZjzyJ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/gOZjzyJ">
  bg-linear-stripe</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>