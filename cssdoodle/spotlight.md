## CSS-Doodle spotlight🎆

CSS-Doodle spotlight🎆

### CSS-doodle

[css-doodle](https://github.com/css-doodle/css-doodle) is a library based on Web-Component. Allows us to quickly create pages based on CSS Grid layout to achieve various CSS effects (perhaps called CSS art).

HTML：

```HTML
<!-- https://css-doodle.com -->

<css-doodle>
    :doodle { 
        @grid: 1x26 / 100vw 100vh; 
        background: #000;
    } 
    
    :container { 
        max-width: 70vw;
        margin: 0 auto;
    } 
    

    @even {
        position: relative;
        height: 70%;
        top: 10%;
        background: linear-gradient(to top, rgba(@r(50, 255), @r(255, 255), 255, 1), rgba(255, 255, 255, .1) 80%);
        transform: perspective(@r(7, 35)vmin) rotateX(-@r(15, 45)deg) skewX(@r(-60, 60)deg);
        transform-origin: center bottom;
        box-shadow: 0 0 2vmin .1vmin rgba(255, 255, 255, .7);
        opacity: 0;
        animation: fadeIn 7s infinite calc(@index() * 0.03s);
    }
    
    @keyframes fadeIn {
        1% {
            opacity: 1;
        }
        10% {
            opacity: 1;
            filter: hue-rotate(0);
        }
        50% {
            opacity: 1;
            transform: perspective(@r(10, 35)vmin) rotateX(-@r(15, 45)deg) skewX(0deg);
            filter: hue-rotate(360deg);
        }
        50.1% {
            opacity: 0;
        }
    }

</css-doodle>
```

SCSS：
```scss
html, body {
  margin: 0;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

The effect is as follows（Click the image below to refresh the effect）：

<iframe height="300" style="width: 100%;" scrolling="no" title="spotlight" src="https://codepen.io/dvha/embed/BavPPOr?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/BavPPOr">
  spotlight</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>