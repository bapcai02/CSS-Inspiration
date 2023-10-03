## focus-within switch tab

Use `:focus-within` to implement tab switching function.

`:focus-within` It indicates that an element has focus, or that a descendant element of this element has focus. By focusing it, it or its descendants gain focus.

This means that when it or its descendants gain focus, :focus-within can be triggered.

### key point

+ This attribute is somewhat similar to Javascript's event bubbling. Starting from the focusable element and bubbling up to the root element html, you can receive and trigger the :focus-within event.
+ The idea of this example is to control other selectors by getting the focus state, and most importantly, use the parent's :not(:focus-within) to set the default style

HTML：

```html
<div class="container">
    <div class="nav-box">
        <button class="nav-A">Tab-A</button>
        <button class="nav-B">Tab-B</button>
        <div class="content-box">
            <div class="content-A">
                content-A
            </div>
            <div class="content-B">
                content-B
            </div>
        </div>
    </div>
</div>
```

SCSS：
```scss
.container {
    width: 300px;
    margin: 50px auto;
    padding: 10px;
    boder: 1px solid #ddd;
}

.nav-box {
    font-size: 0;
}

button {
    width: 150px; 
    height: 64px;
    box-sizing: border-box;
    outline: none;
    background: #fff;
    border: 1px solid #ddd;
    font-size: 18px;
    cursor: pointer;
}

button:focus-within {
    color: #fff;
    background: #ffcc00;
}

.content-box {
    font-size: 24px;
    border: 1px solid #ddd;
    height: 100px;
    div {
        display: none;
    }
}

.nav-box:not(:focus-within) {
    .nav-A {
        color: #fff;
        background: #ffcc00;
    }
    
    .content-A {
        display: block;
    }
}

.nav-A:focus-within ~ .content-box .content-A {
    display: block;
}

.nav-B:focus-within ~ .content-box .content-B {
    display: block;
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="pesudo-focus-within" src="https://codepen.io/dvha/embed/BavOLyV?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/BavOLyV">
  pesudo-focus-within</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>