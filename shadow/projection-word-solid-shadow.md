## Three-dimensional text shadow

CSS implements three-dimensional text shadow.

### key point

+ The key point of three-dimensional text shadow is the superposition of multiple layers of text-shadow
+ The SASS function is reasonably used here to automatically calculate the CSS code of multiple layers of text-shadow.
+ Use Sass's color function to gradually implement hierarchical shadow colors
     - fade-out: Change the transparency of a color to make it more transparent
     - desaturate: Change the saturation value of a color to make it less saturated

HTML:

```html
<div>Txt Shadow</div>
<div class="left"> TxT Long Shadow</div>
```

SCSS:
```scss
body {
    background: #03a9f4;
}

@function makelongrightshadow($color) {
    $val: 0px 0px $color;
    @for $i from 1 through 50 {
        $color: fade-out(desaturate($color, 1%), .02);
        $val: #{$val}, #{$i}px #{$i}px #{$color};
    }
    @return $val;
}

@function makelongleftshadow($color) {
    $val: 0px 0px $color;
    @for $i from 1 through 50 {
        $color: fade-out(desaturate($color, 1%), .02);
        $val: #{$val}, -#{$i}px #{$i}px #{$color};
    }
    @return $val;
}

div {
    text-align: center;
    font-size: 20vmin;
    line-height: 45vh;
    text-shadow: makelongrightshadow(hsla(14, 100%, 30%, 1));
    color: hsl(14, 100%, 60%);
}

.left {
    text-shadow: makelongleftshadow(hsla(231, 50%, 30%, 1));
    color: hsl(231, 50%, 60%);
}

```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height='350' scrolling='no' title='立体文字阴影' src='//codepen.io/Chokcoco/embed/JmgNNa/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/JmgNNa/'>立体文字阴影</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>