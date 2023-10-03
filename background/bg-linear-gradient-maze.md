## Linear gradient implements maze-like graphics

Use linear gradients to implement maze-like graphics.

Random art.

HTML：

```pug
div.g-grid
    - for(var i=0; i<400; i++)
        div.g-box
```

SCSS：
```scss
$count: 400;

@function randomRotate() {
    $r: random(100);
    @if $r > 50 { @return 45  }
    @if $r <= 50      { @return -45 }
}

.g-grid {
    width: 100vmin;
    height: 100vmin;
    margin: 0 auto;
    display: grid;
    grid-template-columns:  repeat(20, 5%);
    grid-template-rows: repeat(20, 5%);
}

@for $i from 1 to $count + 1 {
    .g-box:nth-child(#{$i}) {
        background: linear-gradient(#{randomRotate()}deg, transparent 49.5%, deeppink 49.5%, deeppink 50.5%, transparent 50.5%);
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="bg-linear-gradient-maze" src="https://codepen.io/dvha/embed/PoXBexg?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/PoXBexg">
  bg-linear-gradient-maze</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>