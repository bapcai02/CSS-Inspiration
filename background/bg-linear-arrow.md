## Linear gradient implements arrow symbol

Linear gradient implements arrow symbol.

### key point

+ Use multiple linear gradients to piece together arrow shapes
+ Proper use of `background-position`, `background-size`


HTML：

```html
<div class="arrow"></div>
```

SCSS：
```scss
 .arrow{
    position: absolute;
    top:50%;
    left: 50%;
    transform:translate(-50%,-50%);
    width: 200px;
    height: 40px;
    text-align: center;
    color: white;
    font-size: 200%;
}
.arrow{
    background:
    linear-gradient(-135deg, transparent 10%, #04e6fb 10%, #65ff9a 100%)
    top right,
    linear-gradient(-45deg, transparent 10%, #04e6fb 10%, #65ff9a 100%)
    bottom right,
    linear-gradient(-135deg, #04e6fb 0, #65ff9a 90%, transparent 90%)
    top left,
    linear-gradient(-45deg, #04e6fb 0, #65ff9a 90%, transparent 90%)
    bottom left;
    background-size: 90% 50%;
    background-repeat: no-repeat;
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="bg-linear-arrow" src="https://codepen.io/dvha/embed/BavPxOg?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/BavPxOg">
  bg-linear-arrow</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>