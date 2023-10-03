## Pseudo element mask to achieve line loading effect

Pseudo element mask to achieve line loading effect

### key point

This animation is very interesting. The core point is how to use CSS to achieve changes in the length of arc lines.

The core is masking.

You can understand it at a glance:

HTML:
```html
<div></div>
```

SCSS：
```scss
body,
html {
    height: 100%;
    overflow: hidden;
}

div {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 100px auto;
    transform: rotate(360deg);
    animation: rotate 45s infinite linear;
}

div::before {
    position: absolute;
    content: "";
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    box-sizing: border-box;
    border-radius: 50%;
    border-top: 3px solid #000;
    border-left: 3px solid #000;
    border-bottom: 3px solid transparent;
    border-right: 3px solid transparent;
    transform: rotate(720deg);
    animation: rotate 3s infinite ease-out;
}

div::after {
    position: absolute;
    content: "";
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    box-sizing: border-box;
    border-radius: 50%;
    border-bottom: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #fff;
    border-left: 7px solid #fff;
    transform: rotate(720deg);
    animation: rotate 3s infinite ease-in-out;
}

@keyframes rotate {
    100% {
        transform: rotate(0deg);
    }
}

```

The effect is as follows (Click `HTML/SCSS` to edit the code):

<iframe height="320" style="width: 100%;" scrolling="no" title="Linear Loading" src="https://codepen.io/Chokcoco/embed/PvqYNJ?height=320&theme-id= default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
   See the Pen <a href='https://codepen.io/Chokcoco/pen/PvqYNJ'>Linear Loading</a> by Chokcoco
   (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The first picture above is the actual effect. The second one is for everyone to understand. The white lines are changed to red. In fact, the principle is that the black lines are covered by the white lines (shown as red in Figure 2 above), causing the lines to become shorter. illusion.

> The container also adds a rotation animation to make the animation look more reasonable.