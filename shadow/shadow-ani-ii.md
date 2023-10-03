## box-shadow implements background animation 2

box-shadow implements background animation.

### key point

+ When the blur radius and expansion radius of box-shadow are both 0, we can get a shadow the same size as the element
+ box-shadow can set up multiple layers, that is, multi-layer shadows, and can perform transition animation (tween animation)
+ background-image: linear-gradient(), that is, gradient background cannot be animated

HTML:

```html
<div></div>
```
SCSS：
```scss
@function listShadowOne() {
	$n: 10;
    $m: 5;
	$list: ();
    @for $j from 0 to $m {
        @for $i from 0 to $n {
            $list: $list, $i*10vmin $j*2*10vmin #fff;
	    }
    }

	@return $list;
}

@function listShadowThree() {
	$n: 10;
    $m: 5;
	$list: ();
    @for $j from 0 to $m {
        @for $i from 0 to $n {
            $list: $list, $i*10vmin ($j*2-1)*10vmin #fff;
	    }
    }

	@return $list;
}

@function listShadowTwo() {
	$n: 10;
    $m: 5;
	$list: ();
    
    @for $j from 0 to $m {
        @for $i from 0 to $n {
            $list: $list, $i*10vmin $j*2*10vmin-10vmin #00f1fc;
	    }
    }

	@return $list;
}

@function listShadowFour() {
	$n: 10;
    $m: 5;
	$list: ();
    
    @for $j from 0 to $m {
        @for $i from 0 to $n {
            $list: $list, $i*10vmin ($j*2-1)*10vmin+10vmin #fd0130;
	    }
    }

	@return $list;
}


body {
    background: #000;
    overflow: hidden;
}

div {
    position: relative;
    width: 100vmin;
    height: 100vmin;
    margin: 0 auto;
    background: #000;
    animation: scale 5s infinite alternate;
    transform-origin: center center;
}

div::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5vmin;
    height: 5vmin;
    // background: #fff;
    box-shadow: listShadowOne();
    animation: radiusChange 5s infinite alternate;
}

div::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5vmin;
    height: 5vmin;
    // background: #fff;
    box-shadow: listShadowThree();
    animation: radiusChangeAfter 5s infinite alternate;
}

@keyframes radiusChange {
    25% {
        box-shadow: listShadowOne();
        border-radius: 50%;
    }
    50% {
        box-shadow: listShadowTwo();
        border-radius: 0%;
    }
    100% {
        box-shadow: listShadowOne();
        border-radius: 50%;
    }
}

@keyframes radiusChangeAfter {
    25% {
        box-shadow: listShadowThree();
        border-radius: 50%;
    }
    50% {
        box-shadow: listShadowFour();
        border-radius: 0%;
    }
    100% {
        box-shadow: listShadowThree();
        border-radius: 50%;
    }
}

@keyframes scale {
    25% {
        transform: scale(2);
    }
    50% {
        transform: scale(2);
    }
}
```

The effect is as follows (Click `HTML/SCSS` to edit the code):

<iframe height='350' scrolling='no' title='box-shadow implements similar linear gradient background animation' src='//codepen.io/Chokcoco/embed/dggoZw/?height=265&theme-id=0&default-tab =result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/dggoZw/ '>box-shadow implements similar linear gradient background animation</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https:/ /codepen.io'>CodePen</a>.
</iframe>