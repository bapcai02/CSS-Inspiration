## Linear gradient simulates long shadow

CSS implements linear gradients to simulate long shadows.

### key point

+ Two pseudo-elements that borrow elements
+ Fill two pseudo-elements with gradient color, and then place them in appropriate positions through displacement and transformation

![](https://user-images.githubusercontent.com/8554143/47997592-53ca0700-e137-11e8-98d9-d803fb8378aa.png)


HTML:

```html
<div></div>
```

SCSS：
```scss
body {
    background: linear-gradient(90deg, hsl(199, 98%, 50%), hsl(199, 98%, 38%));
    overflow: hidden;
}

div {
    position: relative;
    width: 30vmin;
    height: 30vmin;
    background: #fff;
    margin: 30vmin auto;
}

div::before,
div::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
}

div::before {
    transform-origin: 0 50%;
    transform: translate(100%, 0) skewY(45deg) scaleX(.6);
    background: linear-gradient(90deg, rgba(0, 0, 0, .3), transparent);
    animation: shadowMoveY 5s infinite linear alternate;
}

div::after {
    transform-origin: 0 0;
    transform: translate(0%, 100%) skewX(45deg) scaleY(.6);
    background: linear-gradient(180deg, rgba(0, 0, 0, .3), transparent);
    animation: shadowMoveX 5s infinite linear alternate;
}

@keyframes shadowMoveX {
    to {
        transform: translate(0%, 100%) skewX(50deg) scaleY(.6);
    }
}

@keyframes shadowMoveY {
    to {
        transform: translate(100%, 0) skewY(40deg) scaleX(.6);
    }
}
```

The effect is as follows (Click `HTML/SCSS` to edit the code):

<iframe height='350' scrolling='no' title='Linear gradient simulates long shadow' src='//codepen.io/Chokcoco/embed/qJvVGy/?height=265&theme-id=0&default-tab=css,result ' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/qJvVGy/'> Linear gradient simulates long shadow</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'> CodePen</a>.
</iframe>