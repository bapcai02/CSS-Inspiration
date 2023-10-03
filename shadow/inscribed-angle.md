## Use box-shadow/gradient to achieve inscribed corners

Use box-shadow/gradient to achieve inscribed corners.

### key point

+ The key point of shadow implementation is to use pseudo elements to be absolutely positioned at the corner of the container. The element itself is transparent, and the shadow spreads to form an inscribed rounded corner effect.
+ Shadow implementation shortcomings, a single label can only have 2 inscribed fillets at most
+ Radial gradient to achieve inscribed fillet can be 4 sides

HTML:

```html
<div class="shadow">Use the diffusion radius of the shadow to achieve inscribed fillets</div>
<div class="shadow2">Disadvantages of shadow implementation, a single label has at most 2 sides</div>
<div class="linear">Use radial gradient to achieve inscribed fillets</div>
<div class="linear2">Radial gradient to achieve inscribed fillet can be 4 sides</div>
```

SCSS：
```scss
body {
    background: linear-gradient(90deg, #fff, #bbb);
}

div {
    position: relative;
    width: 20vw;
    height: 8vw;
    margin: 1vw auto;
    border-radius: 1vmin;
    // background: #e91e63;
    overflow: hidden;
    line-height: 8vw;
    color: #fff;
    text-align: center;
}

.shadow {
    
    &::before {
        position: absolute;
        content: "";
        top: -2vw;
        left: -2vw;
        width: 4vw;
        height: 4vw;
        border-radius: 50%;
        box-shadow: 0 0 0 25vw #e91e63; 
        z-index: -1;
        animation: shadowmove 10s infinite;
    }
}

.shadow2 {
        &::before {
        position: absolute;
        content: "";
        top: -2vw;
        left: -2vw;
        width: 4vw;
        height: 4vw;
        border-radius: 50%;
        box-shadow: 0 0 0 15vw #e91e63; 
        z-index: -1;
    }
    
    &::after {
        position: absolute;
        content: "";
        bottom: -2vw;
        right: -2vw;
        width: 4vw;
        height: 4vw;
        border-radius: 50%;
        box-shadow: 0 0 0 15vw #e91e63; 
        z-index: -1;
    }
}

@keyframes shadowmove {
    0%{
        background: #e91e63; 
        box-shadow: 0 0 0 0 #e91e63; 
    }
    
    10% {
        background: transparent; 
        box-shadow: 0 0 0 0 #e91e63; 
    }
    
    50% {
        background: transparent; 
        box-shadow: 0 0 0 25vw #e91e63; 
    }
}

.linear {
    background-size: 100% 100%;
    background-image: radial-gradient(circle at 0 0, transparent 0, transparent 2vw, #03A9F5 2vw);
    background-repeat: no-repeat;
}

.linear2 {
    background-size: 70% 70%;
    background-image: 
        radial-gradient(circle at 100% 100%, transparent 0, transparent 2vw, #03A9F5 2vw),
        radial-gradient(circle at 0 0, transparent 0, transparent 2vw, #03A9F5 2vw),
        radial-gradient(circle at 100% 0, transparent 0, transparent 2vw, #03A9F5 2vw),
        radial-gradient(circle at 0 100%, transparent 0, transparent 2vw, #03A9F5 2vw);
    background-repeat: no-repeat;
    background-position: right bottom, left top, right top, left bottom;
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height='350' scrolling='no' title='Use box-shadow/gradient to achieve inscribed corners' src='//codepen.io/Chokcoco/embed/ZmLLRM/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/ZmLLRM/'>Use box-shadow/gradient to achieve inscribed corners</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>