## Use margin auto to implement align-self: flex-end under flex

Use margin auto to implement align-self: flex-end under flex

### Difficulty

The core point is to use FFC/GFC so that margin: auto can automatically allocate remaining space.

Under `dispaly: flex`:

+ Prior to alignment via justify-content and align-self, any positive free space is distributed to auto margins in that dimension.

> [CSS Flexible Box Layout Module Level 1 -- 8.1. Aligning with auto margins](https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#auto-margins)

A simple translation, the general idea is that in the **flex formatting context**, the element with `margin: auto` is set, and before being aligned through `justify-content` and `align-self`, any free space is will be allocated to the automatic margin in that direction.

Here, a very important point is that margin auto takes effect not only in the horizontal direction, but also in the vertical direction to automatically allocate the remaining space.
 
HTML：

```HTML
<ul class="g-flex">
    <li>liA</li>
    <li>liB</li>
    <li>liC</li>
    <li>liD</li>
    <li>liE</li>
</ul>
```

SCSS：
```scss
.g-flex {
    height: 200px;
    box-sizing: border-box;
    background: #037d65;
    
    display: flex;
    // display: flex-inline;
    // justify-content: space-around;
}

li {
    // align-self: center;
    width: 100px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    
    margin: auto;
    margin-bottom: 0;
    margin-top: auto;
}

li:nth-child(1) {
    height: 100px;
    background: #336699;
}

li:nth-child(2) {
    height: 120px;
    background: #669933;
}

li:nth-child(3) {
    height: 140px;
    background: #996633;
}

li:nth-child(4) {
    height: 160px;
    background: #229955;
}

li:nth-child(5) {
    height: 180px;
    background: #199652;
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="use-margin-auto-to-simulate-align-self" src="https://codepen.io/dvha/embed/RwEYazP?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/RwEYazP">
  use-margin-auto-to-simulate-align-self</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>