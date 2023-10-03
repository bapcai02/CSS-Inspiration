## Box-shadow implements ring progress bar animation

Box-shadow implements ring progress bar animation. This is really a strange skill.

### key point

+ The movement of the ring progress bar is essentially the result of the delayed movement of the shadow sequence.

HTML：

```html
<div class="container">
    <div class="shadow">Hover Me</div>
</div>

```

SCSS：
```scss
$color: #e91e63;

body {
    background: #000;
}

.container {
    position: relative;
    overflow: hidden;
    width: 124px;
    height: 124px;
    overflow: hidden;
    margin: 100px auto;
    border-radius: 50%;
}

.shadow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    line-height: 120px;
    border-radius: 50%;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 60px -60px 0 2px $color, -60px -60px 0 2px $color,
        -60px 60px 0 2px $color, 60px 60px 0 2px $color;
    text-align: center;
    
    &:hover {
        animation: border .5s ease forwards;
    }
}

@keyframes border{
  0% {
    box-shadow: 60px -60px 0 2px $color, -60px -60px 0 2px $color, -60px 60px 0 2px $color, 60px 60px 0 2px $color, 0 0 0 2px transparent;
  }
  25% {
    box-shadow: 0 -125px 0 2px $color, -60px -60px 0 2px $color, -60px 60px 0 2px $color, 60px 60px 0 2px $color, 0 0 0 2px #fff;
  }
  50% {
    box-shadow: 0 -125px 0 2px $color, -125px 0px 0 2px $color, -60px 60px 0 2px $color, 60px 60px 0 2px $color, 0 0 0 2px #fff;
  }
  75% {
    box-shadow: 0 -125px 0 2px $color, -125px 0px 0 2px $color, 0px 125px 0 2px $color, 60px 60px 0 2px $color, 0 0 0 2px #fff;
  }
  100% {
    box-shadow: 0 -125px 0 2px $color, -125px 0px 0 2px $color, 0px 125px 0 2px $color, 120px 40px 0 2px $color, 0 0 0 2px #fff;
  } 
}
```
The effect is as follows (Click `HTML/SCSS` to edit the code):

<iframe height='265' scrolling='no' title='Box-shadow implements ring progress bar animation' src='//codepen.io/Chokcoco/embed/RqNLZJ/?height=265&theme-id=0&default-tab =result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/RqNLZJ/ '>Box-shadow implements ring progress bar animation</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https:/ /codepen.io'>CodePen</a>.
</iframe>