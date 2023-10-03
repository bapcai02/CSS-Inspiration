## clip-path achieves text breaking effect

clip-path achieves text breaking effect.

### clip-path

A very interesting CSS property.

The `clip-path` CSS property creates a clipping region where only part of the element is visible. Parts within the area are displayed and parts outside the area are hidden. The clipping region is the path defined by the referenced embedded URL or the path of the external SVG.

[MDN - clip-path](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)

### key point

The core idea is: use the pseudo-element of the element to copy two copies of the text, and then use clip-path to divide the element itself and the two pseudo-elements of the element into three parts, and control these three parts respectively.

Because clip-path is used to clip the element, only the clipped area of the element can be displayed, so we can control the three parts for animation respectively.

HTML：

```HTML
<h1 data-text="Text Crack">
    <span>Text Crack</span>
</h1>
```

SCSS：
```scss
body, html
{
    display: flex;
    height: 100%;
    width: 100%;
    background-color: #000;
    overflow: hidden;
    font-family: sans-serif;
}

h1 {
    position: relative;
    margin: auto;
    font-size: calc(20px + 5vw);
    font-weight: bold;
    color: #fff;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-shadow: 0 0 10px blue;
    user-select: none;
    white-space: nowrap;
    filter: blur(0.007em);
    animation: shake 2.5s linear forwards;
}

h1 span {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);
}

h1::before,
h1::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
}

h1::before {
    animation: crack1 2.5s linear forwards;
    clip-path: polygon(0% 0%, 10% 0%, 55% 100%, 0% 100%);
}

h1::after {
    animation: crack2 2.5s linear forwards;
    clip-path: polygon(44% 0%, 100% 0%, 100% 100%, 70% 100%);
}

@keyframes shake {
    5%,
    15%,
    25%,
    35%,
    55%,
    65%,
    75%,
    95% {
        filter: blur(0.018em);
        transform: translateY(0.018em) rotate(0deg);
    }

    10%,
    30%,
    40%,
    50%,
    70%,
    80%,
    90% {
        filter: blur(0.01em);
        transform: translateY(-0.018em) rotate(0deg);
    }

    20%,
    60% {
        filter: blur(0.03em);
        transform: translate(-0.018em, 0.018em) rotate(0deg);
    }

    45%,
    85% {
        filter: blur(0.03em);
        transform: translate(0.018em, -0.018em) rotate(0deg);
    }

    100% {
        filter: blur(0.007em);
        transform: translate(0) rotate(-0.5deg);
    }
}

@keyframes crack1 {
    0%,
    95% {
        transform: translate(-50%, -50%);
    }

    100% {
        transform: translate(-51%, -48%);
    }
}

@keyframes crack2 {
    0%,
    95% {
        transform: translate(-50%, -50%);
    }

    100% {
        transform: translate(-49%, -53%);
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="clippath-word-crack" src="https://codepen.io/dvha/embed/zYyLLGb?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/zYyLLGb">
  clippath-word-crack</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>