## flex implements holy grail layout

Holy grail layout using flex.

### need

The Holy Grail layout has three columns on the left, middle and right. The middle column is written first in the rendering order to ensure early rendering. The left and right columns have a fixed width, and the middle column adapts to the remaining width.

The difference between the Holy Grail layout and the Double Flying Wing layout is that the left, middle and right columns of the Holy Grail layout do not have redundant sub-containers, and the width of the left and right columns is vacated by controlling the padding of the parent element.

### key point

+ The key point of the Holy Grail layout is to place the left and right columns in the correct position through the margin-left and left properties.
+ The key parent element of the Holy Grail layout needs to set padding
+ The key point of the holy grail layout is margin-left. When the value is a percentage, it is based on the width of its parent element.

HTML：

```pug
// pug
div.g-container
    div.g-middle middle
    div.g-left left
    div.g-right right
```

SCSS：
```scss
.g-container {
    position: relative;
    height: 100vh;
    min-width: 400px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    
    & > div {
        height: 100vh;
        text-align: center;
        color: #fff;
        line-height: 100vh;
        font-size: 3vw;
    }
}

.g-middle {
    order: 2;
    flex: auto 1 0 ;
    background: #cc6630;
}

.g-left {
    order: 1;
    flex: 200px 0 0;
    background: #ffcc00;
}

.g-right {
    order: 3;
    flex: 200px 0 0;
    background: pink;
}

```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="holy-grail-layout-flex" src="https://codepen.io/dvha/embed/bGOxpjw?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/bGOxpjw">
  holy-grail-layout-flex</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>