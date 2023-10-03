## Use margin auto to implement justify-content: space-between under flex

Use margin auto to implement justify-content: space-between under flex

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
    height: 100px;
    margin-bottom: 100px;
    box-sizing: border-box;
    background: #037d65;
    
    display: flex;
    // justify-content: space-between;
}

li {
    width: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    
    margin: auto;
}

li:first-child {
    margin-left: 0;
}

li:last-child {
    margin-right: 0;
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="use-margin-auto-to-simulate-space-between" src="https://codepen.io/dvha/embed/yLGxOdv?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/yLGxOdv">
  use-margin-auto-to-simulate-space-between</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>