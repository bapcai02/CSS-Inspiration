## CSS implements waterfall flow layout (column-count)

This example uses CSS column to implement waterfall flow layout

key point,

+ column-count: The optimal number of columns the element content will be divided into
+ break-inside: avoid inserting page breaks inside elements

HTML：

```pug
// pug template engine
div.g-container
    -for(var j = 0; j<32; j++)
        div.g-item
```

SCSS：
```scss
$count: 32;

@function randomNum($max, $min: 0, $u: 1) {
	@return ($min + random($max)) * $u;
}

@function randomColor() {
    @return rgb(randomNum(255), randomNum(255), randomNum(255));
}

.g-container {
    column-count: 4;
    column-gap: .5vw;
    padding-top: .5vw;
}

.g-item {
    position: relative;
    width: 24vw;
    margin-bottom: 1vw;
    break-inside: avoid;
}

@for $i from 1 to $count+1 {
    .g-item:nth-child(#{$i}) {
        height: #{randomNum(300, 50)}px;
        background: randomColor();

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
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="masonry-layout-colum" src="https://codepen.io/dvha/embed/yLGxOxz?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/yLGxOxz">
  masonry-layout-colum</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>