## Summer city sunset picture🌇

Summer city sunset picture🌇

### CSS-doodle

[css-doodle](https://github.com/css-doodle/css-doodle) is a library based on Web-Component. Allows us to quickly create pages based on CSS Grid layout to achieve various CSS effects (perhaps called CSS art).

HTML：

```HTML
<!-- https://css-doodle.com -->

<css-doodle>
    :doodle { @grid: 1x35 / 100vw 100vh; } 
    :container { 
        background: #ffcabb; 
        background: linear-gradient(to top, #ffcabb 50%, #de93b6 100%); 
        background-repeat: no-repeat; 
    } 
    
    position: relative; 
    align-self: end;
    height: @rand(10%, 75%);
    background: linear-gradient(to
    top, #725392 0%, #b764ac 100%);
    margin-left: @rand(0.1, 1)vw;
    z-index: 1;
    transform: scaleX(@rand(.8, 1.9));
    
    ::before { 
        content: ""; 
        position: absolute; 
        bottom: 0; 
        left: @rand(-20, 12)px; 
        right: @rand(-20, 12)px; 
        top: @rand(15, 55)%; 
        background: linear-gradient(to
        top, #352864 0%, #4d4280 100%); 
        z-index: 3; 
    } 
    
    ::after { 
        content: "";
        position: absolute;
        width: .1vw;
        height: .12vw;
        top: @rand(15, 20)%;
        left: @rand(10, 20)%;
        z-index: 5;
        box-shadow: 
            @rand(0.1, 2.1)vw @rand(0, 10)vh .5px rgba(246, 212, 0, .7),
            @rand(0.1, 2.1)vw @rand(10, 15)vh .5px rgba(246, 212, 0, .6), 
            @rand(0.1, 2.1)vw @rand(15, 22)vh .5px rgba(246, 212, 0, .7), 
            @rand(0.1, 2.1)vw @rand(22, 30)vh .5px rgba(246, 212, 0, .6), 
            @rand(0.1, 2.1)vw @rand(30, 40)vh .5px rgba(246, 212, 0, .8);
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

body::after {
    content: "";
    position: absolute;
    top: 10vmin;
    right: 20vmin;
    background: #fff;
    width: 8vh;
    height: 8vh;
    border-radius: 50%;
    box-shadow: 0 0 20px 2px rgba(253, 220, 189, 0.9);
}
```

The effect is as follows（Click the image below to refresh the effect）：

<iframe height="300" style="width: 100%;" scrolling="no" title="sunset" src="https://codepen.io/dvha/embed/GRPBBey?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/GRPBBey">
  sunset</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>