## Double flying wing layout

The most common implementation method of double flying wing layout.

### need

The double flying wing layout has three columns on the left, middle and right. The middle column is written first in the rendering order to ensure early rendering. The left and right columns have a fixed width, and the middle column adapts to the remaining width.

The difference between the double flying wing layout and the Holy Grail layout is that the Holy Grail layout has three columns of containers on the left, middle and right. There is an extra sub-container in the middle. ** By controlling the margin or padding of the middle sub-container, the width of the left and right columns can be vacated. **.

### key point

+ The key point of the double-wing layout is to place the left and right columns in the correct position through the margin-left attribute, and to free up the width of the left and right columns by controlling the margin or padding of the middle sub-container.
+ The key point parent element of the double flying wing layout does not need to set padding
+ When the key point margin-left of the double-wing layout is a percentage, it is based on the width of its parent element.

HTML：

```pug
// pug 
div.g-container
    div.g-middle 
        div.g-middle-inner middle-inner 
    div.g-left left
    div.g-right right
```

SCSS：
```scss
.g-container {
    position: relative;
    height: 100vh;
    min-width: 400px;
    
    & > div {
        height: 100vh;
        float: left;
        text-align: center;
        color: #fff;
        line-height: 100vh;
        font-size: 3vw;
    }
}

.g-middle {
    position: relative;
    width: 100%;
    background: #cc6630;
    
    .g-middle-inner {
        margin: 0 200px;
    }
}

.g-left {
    position: relative;
    width: 200px;
    background: #ffcc00;
    margin-left: -100%;
}

.g-right {
    position: relative;
    width: 200px;
    background: pink;
    margin-left: -200px;
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="double-wing-layout" src="https://codepen.io/dvha/embed/QWzVNQd?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/QWzVNQd">
  double-wing-layout</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>