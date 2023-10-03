## Use translate3d\perspective to achieve 3D parallax effect 2

Achieve 3D parallax effects with translate3d\perspective2.

Parallax Scrolling refers to making multiple layers of background move at different speeds to form a three-dimensional motion effect and bring an excellent visual experience. As a hot trend in web design, more and more websites apply this technology.

### key point

+ We set transform-style: preserve-3d and perspective: xpx to the container, then the child elements in this container will be located in 3D space,

+ Then set different transform: translateZ() for the child elements. At this time, the distance of different elements from the screen (our eyes) in the 3D Z-axis direction is also different.

+ When scrolling the scroll bar, since the child elements are set to different transform: translateZ(), the up and down distance translateY of their scrolling is also different relative to the screen (our eyes), which achieves the effect of scrolling parallax.

For detailed analysis, please see: [Scrolling Parallax? CSS is a piece of cake](https://www.cnblogs.com/coco1s/p/9453938.html)

HTML：

```pug
// pug template
div.g-container
    - for(var i=0; i<10; i++)
        div.g-section CSS Parallax
```

SCSS：
```scss
$length: 10;

@function randomNum($max, $min: 0, $u: 1) {
	@return ($min + random($max)) * $u;
}

body {
    background: #000;
    font-family: "lato", lucida grande,lucida sans unicode,lucida,helvetica,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
}

.g-container {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow: scroll;
    transform-style: preserve-3d;
    // perspective: 1px;
    // mix-blend-mode: lighten;
    filter: blur(5px) contrast(5px);
    animation: perspectiveChange 10s infinite ease-in alternate;
}

.g-section {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    text-align: center;
    line-height: 100vh;
    padding: 30vh 0;
    font-size: 15vh;
}

@for $i from 1 through $length {
    .g-section:nth-child(#{$i}) {
        transform: translate3d(-200px, 0, -#{$i}px) scale(#{$i * 0.1 + 1 });
        $hue : $i * 35deg;
        color : hsla($hue, 100%, 60%, .8);
        // text-shadow: 0px 0px 1px hsla($hue, 100%, 60%, .9);
        z-index: #{$i};
    }
}

@keyframes perspectiveChange {
    0% {
        perspective: 12;
    }
    100% {
        perspective: 120;
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="parallax-3d-2" src="https://codepen.io/dvha/embed/abPjWaX?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/abPjWaX">
  parallax-3d-2</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>