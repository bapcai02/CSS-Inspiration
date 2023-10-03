## Stereoscopic projection

CSS implements stereoscopic projection.

### key point

+ The key point of stereoscopic projection is to facilitate the pseudo-element to generate an element with a size similar to the parent element, then rotate it and position it to a suitable position, and then assign it a shadow operation.
+ The use of color is also very important. The color of the shadow is usually darker than the color itself. Here, hsl is used to indicate that the color is easier to operate, and l controls the brightness of the color.

HTML:

```html
<div class="g-left"></div>
<div class="g-both"></div>
<div class="g-slide"></div>
```

SCSS：
```scss
div {
    position: relative;
    width: 600px;
    height: 100px;
    margin: 5vmin auto 15vmin;
    background: hsl(48, 100%, 50%);
    border-radius: 20px;
    box-shadow: 0 0 5px 2px hsl(48, 100%, 45%);
}

.g-left::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 5%;
    right: 5%;
    bottom: 0;
    border-radius: 10px;
    background: hsl(48, 100%, 20%);
    transform: translate(0, -15%) rotate(-4deg);
    transform-origin: center center;
    box-shadow: 0 0 20px 15px hsl(48, 100%, 20%);
    z-index: -1;
}

.g-both {
    background: hsl(199, 98%, 48%);
    box-shadow: 0 0 5px 2px hsl(199, 98%, 40%);
}

.g-both::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 5%;
    right: 5%;
    bottom: 15%;
    border-radius: 10px;
    background: hsl(199, 98%, 20%);
    transform: translate(0, -20%) rotate(-4deg);
    transform-origin: center center;
    box-shadow: 0 0 20px 15px hsl(199, 98%, 20%);
    z-index: -1;
}

.g-both::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 5%;
    right: 5%;
    bottom: 15%;
    border-radius: 10px;
    background: hsl(199, 98%, 20%);
    transform: translate(0, -20%) rotate(4deg);
    transform-origin: center center;
    box-shadow: 0 0 20px 15px hsl(199, 98%, 20%);
    z-index: -1;
}

.g-slide {
    background: hsl(150, 62%, 52%);
    box-shadow: 0 0 5px 2px hsl(150, 62%, 40%);
}

.g-slide::before {
    content: "";
    position: absolute;
    top: 15%;
    bottom: 20%;
    left: 90%;
    right: 5%;
    border-radius: 10px;
    background: hsl(150, 62%, 20%);
    transform: translate(105%, 10%) rotate(15deg);
    transform-origin: center center;
    box-shadow: 0 0 10px 7px hsl(150, 62%, 20%);
    z-index: -1;
}

.g-slide::after {
    content: "";
    position: absolute;
    top: 15%;
    bottom: 20%;
    left: 5%;
    right: 90%;
    border-radius: 10px;
    background: hsl(150, 62%, 20%);
    transform: translate(-105%, 10%) rotate(-15deg);
    transform-origin: center center;
    box-shadow: 0 0 10px 7px hsl(150, 62%, 20%);
    z-index: -1;
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height='350' scrolling='no' title='立体投影' src='//codepen.io/Chokcoco/embed/LgdRKE/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/LgdRKE/'>立体投影</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>