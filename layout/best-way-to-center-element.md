## The most convenient way to achieve horizontal and vertical centering

The most convenient way to achieve horizontal and vertical centering

### Difficulty

The core point is to use FFC/GFC to make margin: auto center the element vertically.

Here's why, under `dispaly: flex`:

+ Prior to alignment via justify-content and align-self, any positive free space is distributed to auto margins in that dimension.

> [CSS Flexible Box Layout Module Level 1 -- 8.1. Aligning with auto margins](https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#auto-margins)

A simple translation, the general idea is that in the **flex formatting context**, the element with `margin: auto` is set, and before being aligned through `justify-content` and `align-self`, any free space is will be allocated to the automatic margin in that direction.

Here, a very important point is that margin auto takes effect not only in the horizontal direction, but also in the vertical direction to automatically allocate the remaining space.

 
HTML：

```HTML
<div class="g-container">
    <div class="g-box"></div>
</div>
```

SCSS：
```scss
.g-container {
    width: 100vw;
    height: 100vh;
    
    display: flex;
    // display: grid;
    // display: inline-flex;
    // display: inline-grid;

}

.g-box {
    width: 40vmin;
    height: 40vmin;
    background: #000;
    margin: auto;
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="best-way-to-center-element" src="https://codepen.io/dvha/embed/PoXdNQq?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/PoXdNQq">
  best-way-to-center-element</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>