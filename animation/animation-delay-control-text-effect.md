## Use animation-delay to achieve text fading effect

Use animation-delay to achieve text fade effect

### key point

1. The `transition-duration` in the hover state is different from that in the non-hover state, because during the process of canceling the hover, the time of the animation disappearing process is usually required to be shorter;
2. Using the SASS loop `@for $i from 1 to 21 {}`, incrementally adds an incremental `transition-delay` to each `span` and its pseudo-elements;

### 线性渐变
HTML：
```HTML
<div class="button">Button</div>
<div class="g-wrap"></div>
<p><span data-text="Lorem">Lorem</span> <span data-text="ipsum">ipsum</span> <span data-text="dolor">dolor</span> <span data-text="sit">sit</span> <span data-text="amet">amet</span> <span data-text="consectetur">consectetur</span> <span data-text="adipisicing">adipisicing</span> <span data-text="elit.">elit.</span> <span data-text="Mollitia">Mollitia</span> <span data-text="nostrum">nostrum</span> <span data-text="placeat">placeat</span> <span data-text="consequatur">consequatur</span> <span data-text="deserunt">deserunt</span> <span data-text="velit">velit</span> <span data-text="ducimus">ducimus</span> <span data-text="possimus">possimus</span> <span data-text="commodi">commodi</span> <span data-text="temporibus">temporibus</span> <span data-text="debitis">debitis</span> <span data-text="quam.">quam.</span></p>
```

CSS：
```CSS
html,
body {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
}

.button {
    // position: fixed;
    top: 0;
    left: 0;
    width: 120px;
    height: 64px;
    line-height: 64px;
    text-align: center;
    border: 1px solid #eee;
    cursor: pointer;
    transition: .3s all;
    z-index: 1;

    &:hover {
        background: #eee;
    }
}

.button:hover ~ .g-wrap {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: .3s background linear;
    background: rgba(0, 0, 0, .5);
    // z-index: -1;
}

p {
    position: relative;
    margin: 50px auto;
    width: 500px;
    height: 250px;
    font-size: 22px;
    line-height: 1.5;
    overflow: hidden;
    z-index: 2;
}

p span {
    position: relative;
    display: inline-block;
    opacity: 0;
    transform: translateY(15px) translateZ(0);
    transition-property: transform, opacity;
    transition-duration: .3s, .2s;
    transition-timing-function: cubic-bezier(.23,1,.32,1), linear;

}

.button:hover ~ p span {
    opacity: 1;
    color: #ddd;
    transform: translateY(0) translateZ(0);
    transition-property: transform, opacity;
    transition-duration: 1s, .2s;
    transition-timing-function: cubic-bezier(.23,1,.32,1), linear;

}

p span:after,
p span:before {
    position: absolute;
    content: attr(data-text);
    top: 0;
    left: 0;
    z-index: 1;
    transform: translateZ(0);
    will-change: opacity;
}

// p span:before {
//     color: #fff;
//     transition: opacity .6s .2s;
// }

// .button:hover ~ p span:before {
//     opacity: 0;
//     transition: opacity .6s .3s;
// }

p span:after {
    color: #e62541;
    transition-property: opacity;
    transition-duration: .1s;
    transition-timing-function: cubic-bezier(.23,1,.32,1);
}

.button:hover ~ p span:after {
    opacity: 0;
    transition-property: opacity;
    transition-duration: .4s;
    transition-timing-function: cubic-bezier(.23,1,.32,1);
}

@for $i from 1 to 21 {
    p span:nth-child(#{$i}) {
        transition-delay: #{$i * 0.04}s;
        
        &::after {
            transition-delay: #{$i * 0.04 + 0.2}s;
        }
    }
}
```

The effect is as follows（Hover Button trigger effect）：

<iframe height="300" style="width: 100%;" scrolling="no" title="animation-delay-control-text-effect" src="https://codepen.io/dvha/embed/dywjWQb?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/dywjWQb">
  animation-delay-control-text-effect</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>