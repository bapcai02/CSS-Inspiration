## CSS implements waterfall flow layout (display: grid)

This example uses CSS grid to implement waterfall flow layout

key point,

+ Use `grid-template-columns`, `grid-template-rows` to split rows and columns
+ Use `grid-row` to control the size of the grid occupied by each item

HTML：

```pug
// pug template engine
div.g-container
    -for(var i = 0; i<8; i++)
            div.g-item
```

SCSS：
```scss
$count: 8;

@function randomNum($max, $min: 0, $u: 1) {
    @return ($min + random($max)) * $u;
}

@function randomColor() {
    @return rgb(randomNum(255), randomNum(255), randomNum(255));
}

.g-container {
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(8, 1fr);
}

@for $i from 1 to $count+1 {
    .g-item:nth-child(#{$i}) {
        position: relative;
        background: randomColor();
        margin: 0.5vw;

        &::after {
            content: "#{$i}";
            position: absolute;
            color: #fff;
            font-size: 2vw;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
}

.g-item {
    &:nth-child(1) {
        grid-column: 1;
        grid-row: 1 / 3;
    }
    &:nth-child(2) {
        grid-column: 2;
        grid-row: 1 / 4;
    }
    &:nth-child(3) {
        grid-column: 3;
        grid-row: 1 / 5;
    }
    &:nth-child(4) {
        grid-column: 4;
        grid-row: 1 / 6;
    }
    &:nth-child(5) {
        grid-column: 1;
        grid-row: 3 / 9;
    }
    &:nth-child(6) {
        grid-column: 2;
        grid-row: 4 / 9;
    }
    &:nth-child(7) {
        grid-column: 3;
        grid-row: 5 / 9;
    }
    &:nth-child(8) {
        grid-column: 4;
        grid-row: 6 / 9;
    }
}

```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="masonry-layout-grid" src="https://codepen.io/dvha/embed/dywqMgE?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/dywqMgE">
  masonry-layout-grid</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>