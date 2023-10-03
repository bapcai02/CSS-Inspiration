## Use drop-shadow with clip-path to generate regular shadows

Use drop-shadow with clip-path to generate regular shadows.

### key point 

Using clip-path can make good use of some properties of SVG to draw various graphics. If you want the drawn graphics to have a shadow, `box-shadow` will definitely not work. In this case, `drop-shadow()` is very useful.

HTML:

```HTML
<div class="btn-wrap">
     <div class="btn">Receive red envelope</div>
</div>
```

SCSS：
```scss
.btn-wrap {
    margin: auto;
    filter: drop-shadow(2px 4px 3px rgba(50, 50, 0, 0.5));
}


.btn{
    content: "";
    width: 200px;
    height: 64px;
    line-height: 64px;
    text-align: center;
    background: linear-gradient(#f5e5bf, #fbe8c8, #f5e5bf);
    color: #be9451;
    font-size: 24px;
    clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0 50%);
    // box-shadow: inset 0px 0px 1px 1px #fff;
}

```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="filter-polygon-shadow" src="https://codepen.io/dvha/embed/WNLKgZV?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/WNLKgZV">
  filter-polygon-shadow</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>