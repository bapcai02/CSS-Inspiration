## Use filter:blur to enhance the 3D effect of text

Use filter:blur to enhance the 3D effect of text

### key point

1. The first character and the last character will be closest and farthest to us respectively under the leftmost effect and rightmost effect of rotation. Their effects should actually be the same, so the first character and the last character should be unified. Processing, and so on, the second character and the penultimate character are processed uniformly. Here you can use SASS to use `:nth-child` and `:nth-last-child` to write CSS code efficiently.
2. Each time half of the animation is clear and half is blurred, which needs to be treated differently. Use `animation-delay` to delay half of the animation and half of it.
3. You can use `text-shadow` to make the text more three-dimensional.


HTML：
```
<p>
    <span>C</span>
    <span>S</span>
    <span>S</span>
    <span>3</span>
    <span>D</span>
    <span>E</span>
    <span>F</span>
    <span>F</span>
    <span>E</span>
    <span>C</span>
    <span>T</span>
</p>
```

SCSS：
```scss
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

$count: 12;

body, html {
    width: 100%;
    height: 100%;
    display: flex;
    font-family: 'Lobster', cursive;
    perspective: 160vmin;
    overflow: hidden;
}

p {
    margin: auto;
    font-size: 24vmin;
    white-space: nowrap;
    transform-style: preserve-3d;
    animation: rotate 10s infinite ease-in-out;
    
    span {
        text-shadow: 
            1px 1px 0 rgba(0, 0, 0, .9),
            2px 2px 0 rgba(0, 0, 0, .7),
            3px 3px 0 rgba(0, 0, 0, .5),
            4px 4px 0 rgba(0, 0, 0, .3),
            5px 5px 0 rgba(0, 0, 0, .1);
        
        &:nth-child(-n+5) { 
            animation-delay: -5s; 
        }
    }
}

@for $i from 1 to 7 {
    span:nth-child(#{$i}), 
	span:nth-last-child(#{$i}) {
        animation: filterBlur-#{$i} 10s infinite ease-in-out;
	}
    @keyframes filterBlur-#{$i} {
        0% {
            filter: blur(0px) contrast(5);
        }
        50% {
            filter: blur(#{7 - $i}px) contrast(1);
        }
        100% {
            filter: blur(0px) contrast(5);
        }
    }
}
@keyframes rotate {
    0% {
        transform: rotateY(-45deg);
    }
    50% {
        transform: rotateY(45deg);
    }
    100% {
        transform: rotateY(-45deg);
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/dvha/embed/poqZOaJ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/poqZOaJ">
  Untitled</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>