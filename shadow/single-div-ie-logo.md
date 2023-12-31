## Single label uses inset shadow to implement IE LOGO

A single label uses inset shdow to implement IE LOGO.

### key point

+ The key is that the outer circle similar to the star ring is implemented using inner shadows

HTML:

```html
<div class="IE"></div>
```

SCSS：
```scss
.IE {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-image: radial-gradient(#fff 38%, transparent 38%),
        radial-gradient(#09c 0%, #09c 100%);
}
.IE:before {
    content: "";
    width: 285px;
    height: 122px;
    background: none;
    border-radius: 100%;
    position: absolute;
    top: 33px;
    left: -45px;
    margin: auto;
    box-shadow: inset 0 12px 0 13px #09c, -35px -8px 0 -5px #fff;
    transform: rotate(-35deg);
}
.IE:after {
    content: "";
    width: 120px;
    height: 25px;
    background: #09c;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    margin: auto;
    box-shadow: 50px 23px 0 -2px #fff;
}
```
The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height='350' scrolling='no' title='Single label uses inset shdow to implement IE LOGO' src='//codepen.io/Chokcoco/embed/rqgGqR/?height=265&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/rqgGqR/'>Single label uses inset shdow to implement IE LOGO</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>