## Pseudo elements implement loading effect

Pseudo elements implement dotted loading effects.

### key point

+ Very interesting, using animation to control the content of pseudo elements

You can understand it at a glance:

HTML:
```html
<p>Loading</p>
```

SCSS：
```scss
p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);  
    font-size: 6vw;
    line-height: 8vw;
}

p::after {
    content: "";
    position: absolute;
    top: 0%;
    bottom: 0;
    animation: dot 3s infinite steps(3, start);
    line-height: 9vw;
}

@keyframes dot {
    33.33% {
        content: ".";
    }
    66.67% {
        content: "..";
    }
    100% {
        content: "...";
    }
}
```
The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS implements loading effect" src="https://codepen.io/Chokcoco/embed/yrJpQG?height=300&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/yrJpQG'>CSS implements loading effect</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>