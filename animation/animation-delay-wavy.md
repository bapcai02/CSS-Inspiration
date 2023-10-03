## Use animation delay to implement wave animation

Wave effect using animation delay.

### key point

Just set a height-changing animation for each child element, and set a negative delay of different times for each element in sequence, and you can get a simple wave effect.

HTML (using Pug template engine):

```Pug
div.g-container
 -for(var i=0; i<24; i++)
    div.g-item
```

SCSS：
```scss
html,
body {
    width: 100%;
    height: 100%;
    display: flex;
    background: #fff;
}

$count: 24;
$speed: 1s;

:root {
    --angle: 15deg;
}

.g-container {
    position: relative;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: flex-end;
    border-radius: 50%;
    border: 2px solid #000;
    overflow: hidden;
    flex-shrink: 0;
    margin: auto;
}

.rect {
    border-radius: 0;
}

.g-item {
    --f: #{$speed / -24};
    --h: 50px;
    flex-grow: 1;
    background-color: #000;
    animation: heightChange $speed infinite ease-in-out alternate;
}

.g-container .g-item {
    animation: heightChange $speed infinite ease-in-out alternate,
        skewChange $speed infinite ease-in-out alternate;
}

@for $i from 0 to $count {
    .g-container {
        .g-item:nth-child(#{$i + 1}) {
            animation-delay: calc(var(--f) * #{$i}),
                calc(var(--f) * #{$i} - #{$speed / 2});
        }
    }
}

@keyframes heightChange {
    from {
        height: var(--h);
    }
    to {
        height: calc(var(--h) + 30px);
    }
}

@keyframes skewChange {
    from {
        transform: scale(1.2) translate3d(0, 10px, 0) skewY(calc(var(--angle) * 1));
    }
    to {
        transform: scale(1.2) translate3d(0, 10px, 0) skewY(calc(var(--angle) * -1));
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="animation-delay-wavy" src="https://codepen.io/dvha/embed/gOZjWQM?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/gOZjWQM">
  animation-delay-wavy</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>