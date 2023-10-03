## CSS-Doodle uses different graphic lines to achieve pattern art

CSS-Doodle uses different graphic lines to achieve pattern art

### CSS-doodle

[css-doodle](https://github.com/css-doodle/css-doodle) is a library based on Web-Component. Allows us to quickly create pages based on CSS Grid layout to achieve various CSS effects (perhaps called CSS art).

HTML：

```HTML
<main>

  <css-doodle grid="1x100" #1>
    :doodle {
      --rotate: @r(0, 360)deg;
    }
    @place-cell: center;
    @size: calc(100% - @calc(@index() - 1) * 1%);
    transform: rotate(calc(@index() * var(--rotate)));
    
    border-top: 2px solid hsla(
      calc(calc(100 - @index()) * 2.55), 
      80%, 
      65%,
      calc(@index() / 100)
    );
  </css-doodle>

  <css-doodle grid="1x100" #2>
    :doodle {
      --rotate: @r(0, 360)deg;
      --borderWidth: @r(1,4)px;
    }
    @place-cell: center;
    @size: calc(100% - @calc(@index() - 1) * 1%);
    transform: rotate(calc(@index() * var(--rotate)));
    
    :after {
      content: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
      overflow: hidden;
      color: transparent;
      text-decoration-line: underline;
      text-decoration-style: wavy;
      text-decoration-color: hsla(
        calc(calc(100 - @index()) * 2.55), 
        80%, 
        65%,
        calc(@index() / 100)
      );
      @size: 100%;
    }
  </css-doodle>

  <css-doodle grid="1x100" #3>
    :doodle {
      --rotate: @r(0, 360)deg;
      --borderWidth: @r(1,4)px;
    }
    @place-cell: center;
    @size: calc(100% - @calc(@index() - 1) * 1%);
    transform: rotate(calc(@index() * var(--rotate)));
    
    border-top: var(--borderWidth) dashed hsla(
      calc(calc(100 - @index()) * 2.55), 
      80%, 
      65%,
      calc(@index() / 100)
    );
    border-bottom: var(--borderWidth) dashed hsla(
      calc(calc(100 - @index()) * 2.55), 
      80%, 
      65%,
      calc(@index() / 100)
    );
  </css-doodle>

  <css-doodle grid="1x100" #4>
    :doodle {
      --rotate: @r(0, 360)deg;
    }
    @place-cell: center;
    @size: calc(100% - @calc(@index() - 1) * 1%);
    transform: rotate(calc(@index() * var(--rotate)));
    
    border-top: 5px dashed hsla(
      calc(calc(100 - @index()) * 2.55), 
      80%, 
      65%,
      calc(@index() / 100)
    );
    border-radius: 50%;
  </css-doodle>

  <css-doodle grid="1x100" #5>
    :doodle {
      --rotate: @r(0, 360)deg;
      --borderWidth: @r(2,4)px;
    }
    @place-cell: center;
    @size: calc(100% - @calc(@index() - 1) * 1%);
    transform: rotate(calc(@index() * var(--rotate)));
    
    border-top: var(--borderWidth) dashed hsla(
      calc(calc(100 - @index()) * 2.55), 
      80%, 
      65%,
      calc(@index() / 100)
    );
    border-radius: @r(10%, 50%);
  </css-doodle>

  <css-doodle grid="1x100" #6>
    :doodle {
      --rotate: @r(0, 360)deg;
      --borderWidth: @r(2,4)px;
    }
    @place-cell: center;
    @size: calc(100% - @calc(@index() - 1) * 1%);
    transform: rotate(calc(@index() * var(--rotate)));
    
    border:  var(--borderWidth) solid hsla(
      calc(calc(100 - @index()) * 2.55), 
      80%, 
      65%,
      calc(@index() / 100)
    );
    border-top: var(--borderWidth) dashed hsla(
      calc(calc(@index()) * 2.55), 
      50%, 
      50%,
      calc(@index() / 100)
    );
    border-bottom: var(--borderWidth) dashed hsla(
      calc(calc(@index()) * 2.55), 
      80%, 
      65%,
      calc(@index() / 100)
    );
    border-radius: @r(10%, 50%);
  </css-doodle>
  <p>
    CSS Art with
    <a target="_blank" href="http://yuanchuan.name/css-doodle/">
      &lt;css-doodle /&gt;
    </a>
  </p>
</main>
```

SCSS：
```scss
:root {
  --body-bg: #0a0c27;
  --doodle-bg: #000;
  --col: 6;
  --gap: 2px;
  --width: 95vw;
  --size: calc((var(--width) - (var(--col) - 1) * var(--gap)) / var(--col));
}

html, body {
  height: 100%;
  margin: 0;
  background: var(--body-bg);
}

body {
  display: flex;
  align-items: center;
}

main {
  display: grid;
  width: var(--width);
  margin: auto;
  background: var(--body-bg); 
  padding: calc(50vw - var(--width) / 2) 0;
  grid-template-columns: repeat(var(--col), 1fr);
  grid-gap: var(--gap);
  position: relative;
  padding-bottom: 5em;
}

p {
  position: absolute;
  bottom: 2em;
  margin: 0;
  width: 100%;
  text-align: center;
  font-family: cursive;
  font-size: .9em;
  line-height: 1;
  color: rgba(74, 78, 113, .5);
}
p a {
  text-decoration: none;
  color: rgba(128, 53, 101, .8);
  background: linear-gradient(to left, currentColor 50%, transparent 50%) 0 100% repeat-x;
  background-size: 2px 1px;
}
p a:hover {
  color: rgba(128, 53, 101, 1);
}

css-doodle {
  overflow: hidden;
  width: var(--size);
  height: var(--size);
  background: var(--doodle-bg);
}
```

The effect is as follows (Click the image below to refresh the effect)：

<iframe height="300" style="width: 100%;" scrolling="no" title="bg-artist-pattern" src="https://codepen.io/dvha/embed/yLGqqoQ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/yLGqqoQ">
  bg-artist-pattern</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>