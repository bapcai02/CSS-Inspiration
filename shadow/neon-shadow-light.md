## box-shadow achieves neon text effect

### key point

+ Multiple shadow transition effects and white font overlay

HTML:

```html
<div>
     <p class="pink">PINK</p>
</div>
<div>
     <p class="orange">Box-Shadow</p>
</div>
<div>
     <p class="yellow">YELLOW</p>
</div>

```
SCSS：
```scss
body {
    background: #111;
    text-align: center;
}

p {
    display: inline;
    font-family: 'Lobster';
    text-align: center;
    font-size: 20vmin;
    line-height: 40vmin;
    color: #fff;
    cursor: pointer;
    
    &:hover {
        color: #fff;
    }
}

.pink {
    filter: brightness(110%);
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #E91E63, 0 0 35px #E91E63, 0 0 40px #E91E63, 0 0 50px #E91E63, 0 0 75px #E91E63;
    animation: pink 1.5s ease-in-out infinite alternate;
}

.orange {
    color: #ff5722;
}

.orange:hover {
    animation: orange 1.5s ease-in-out infinite alternate;
}

.yellow {
    color: #ffeb3b;
}

.yellow:hover {
    animation: yellow 1.5s ease-in-out infinite alternate;
}

@keyframes pink {
  to {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #E91E63, 0 0 70px #E91E63, 0 0 80px #E91E63, 0 0 100px #E91E63, 0 0 150px #E91E63;
  }
}

@keyframes orange {
    to {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff5722, 0 0 70px #ff5722, 0 0 80px #ff5722, 0 0 100px #ff5722, 0 0 150px #ff5722;
        
    }
    from {
        filter: brightness(110%);
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff5722, 0 0 35px #ff5722, 0 0 40px #ff5722, 0 0 50px #ff5722, 0 0 75px #ff5722;
  }
}

@keyframes yellow {
    to {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ffeb3b, 0 0 70px #ffeb3b, 0 0 80px #ffeb3b, 0 0 100px #ffeb3b, 0 0 150px #ffeb3b;
        
    }
    from {
        filter: brightness(110%);
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ffeb3b, 0 0 35px #ffeb3b, 0 0 40px #ffeb3b, 0 0 50px #ffeb3b, 0 0 75px #ffeb3b;
  }
}
```

The effect is as follows (Click `HTML/SCSS` to edit the code):

<iframe height='350' scrolling='no' title='box-shadow achieves neon text effect' src='//codepen.io/Chokcoco/embed/WaLdwX/?height=265&theme-id=0&default- tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/WaLdwX /'>box-shadow achieves neon text effect</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https ://codepen.io'>CodePen</a>.
</iframe>