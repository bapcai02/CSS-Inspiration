## 3D maze line effects

3D maze line effects.

Here [Use linear gradient to implement maze-like graphics](./background/bg-linear-gradient-maze.md), a simple maze-like line image is implemented using linear gradient, and here we implement a 3D one.

This effect can also be used with filters and blending modes.

HTML:

```pug
// pug template
-for(var j=0; j<10; j++)
    div.g-grid
        - for(var i=0; i<400; i++)
            div.g-box
```

SCSS：
```scss
$count: 400;
$containerCount: 10;

html,
body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform-style: preserve-3d;
    perspective: 2500;
    animation: spectiveMove 40s infinite alternate linear;
    filter: blur(1px) contrast(2);
    // mix-blend-mode: screen;
    background: linear-gradient(45deg, #000, #444);
}

@function randomRotate() {
    $r: random(100);
    @if $r > 50 { @return 45  }
    @if $r <= 50      { @return -45 }
}

.g-grid {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100vmin;
    height: 100vmin;
    margin: 0 auto;
    display: grid;
    grid-template-columns:  repeat(20, 5%);
    grid-template-rows: repeat(20, 5%);
    // transform: translate3d(0, 0, #{random(50)}px);
}

@for $i from 1 to $count + 1 {
    .g-box:nth-child(#{$i}) {
        background: linear-gradient(#{randomRotate()}deg, transparent 49.5%, deeppink 49.5%, deeppink 50.5%, transparent 50.5%);
        transform: translate3d(0, 0, #{random(100)}px);
    }
    
}

@for $i from 1 to $containerCount + 1 {
    .g-grid:nth-child(#{$i}) {
        transform: translate3d(-50%, 0, #{180 * $i + random(50)}px) rotateZ(#{random(90)}deg);
    }
}

@keyframes spectiveMove {
    100% {
        perspective: 600;
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="3d-maze" src="https://codepen.io/dvha/embed/xxmJdzM?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/xxmJdzM">
  3d-maze</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>