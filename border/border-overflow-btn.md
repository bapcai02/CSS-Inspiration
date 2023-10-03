## Cleverly use overflow and realize border line animation

Use overflow skillfully and realize border line animation.

Using overflow is a very common way to achieve CSS effects.

HTML：

```html
<div>Hover Me</div>
```

SCSS：
```scss
div {
    position: relative;
    margin: auto;
    width: 200px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    overflow: hidden;
    
    &::after {
        content: "Hover Me";
        position: absolute;
        top: 4px;
        bottom: 4px;
        right: 4px;
        left: 4px;
        line-height: 92px;
        font-size: 24px;
        background: #fff;
        border: 2px solid yellowgreen;
        cursor: pointer;
        color: yellowgreen;
    }
    
    &::before {
        content: "";
        position: absolute;
        top: 0px;
        bottom: 0px;
        right: -20px;
        left: 0px;
        background: #fff;
        transform: rotateZ(-90deg) translate(-100%, -100%);
        transform-origin: top left;
        transition: transform .3s;
        transition-timing-function: linear;
    }
    
    &:hover::before {
        transform: rotateZ(0deg) translate(0%, -0%);
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="border-overflow-btn" src="https://codepen.io/dvha/embed/poqZKqp?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/poqZKqp">
  border-overflow-btn</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>