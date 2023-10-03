## Unilateral projection

CSS implements single sided shadow.

### key point

+ The first four parameters of outer box-shadow: x offset value, y offset value, blur radius, and expansion radius.
+ The core of unilateral projection is the fourth parameter: expansion radius. This parameter will expand or reduce the size of the projection according to the value you specify. If we use a negative expansion radius, and its value is exactly equal to the blur radius, then the size of the projection will be exactly the same as the size of the element to which the projection belongs, unless using offset to move it, otherwise we won't see any shadow.

HTML:
```html
<div class='left'>左</div>
<div class='right'>右</div>
<div class='top'>上</div>
<div class='bottom'>下</div>
```

SCSS：
```scss

.left {
    box-shadow: -7px 0 5px -5px #333;
}

.right {
    box-shadow: 7px 0 5px -5px #333;
}

.top {
    box-shadow: 0 -7px 5px -5px #333;
}

.bottom {
    box-shadow: 0 7px 5px -5px #333;
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height='350' scrolling='no' title='css 3D text shadow' src='//codepen.io/Chokcoco/embed/pergRb/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/pergRb/'>css 3D text shadow</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>