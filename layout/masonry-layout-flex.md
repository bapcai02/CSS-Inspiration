## CSS implements waterfall flow layout (display: flex)

This example uses CSS flex to implement waterfall flow layout

The key point is that horizontal flex layout nests multi-column vertical flex layout, and vw is used for adaptive scaling.

HTML：

```pug
// pug template engine
div.g-container
    -for(var i = 0; i<4; i++)
        div.g-queue
            -for(var j = 0; j<8; j++)
                div.g-item
```

SCSS：
```scss
$lineCount: 4;
$count: 8;

@function randomNum($max, $min: 0, $u: 1) {
	@return ($min + random($max)) * $u;
}

@function randomColor() {
    @return rgb(randomNum(255), randomNum(255), randomNum(255));
}

.g-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
}

.g-queue {
    display: flex;
    flex-direction: column;
    flex-basis: 24%;

}

.g-item {
    position: relative;
    width: 100%;
    margin: 2.5% 0;
}

@for $i from 1 to $lineCount+1 {
    .g-queue:nth-child(#{$i}) {
        @for $j from 1 to $count+1 {
            .g-item:nth-child(#{$j}) {
                height: #{randomNum(300, 50)}px;
                background: randomColor();

                &::after {
                    content: "#{$j}";
                    position: absolute;
                    color: #fff;
                    font-size: 24px;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="masonry-layout-flex" src="https://codepen.io/dvha/embed/gOZdrBa?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/gOZdrBa">
  masonry-layout-flex</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>