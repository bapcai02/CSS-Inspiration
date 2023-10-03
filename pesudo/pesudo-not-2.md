## Use the :not() pseudo-class to control special border styles

Use the `:not()` pseudo-class to control special border styles.

### Usage

The CSS negation pseudo-class, :not(X), is a simple functional marker function that takes the selector X as a parameter. It matches elements that do not match the description of parameter selector X.

### not Key points of pseudo-class

+ You can use this pseudo-class to write a completely useless selector. For example, :not(*) matches any element that is not an element, so this rule will never be applied.
+ This pseudo-class can be used to increase the priority of rules. For example, #foo:not(#bar) and #foo will match the same element. But the former has higher priority.
+ :not(foo) will match any non-foo element, including html and body.
+ This selector will only be applied to one element, you cannot use it to exclude all parent elements. For example, body :not(table) a will still be applied to `<a>` inside the table, because `<tr>` will be matched by the :not() part of the selector.

-------

HTML:
```html
<ul>
     <li>Right border</li>
     <li>Right border</li>
     <li>Right border</li>
     <li>Right border</li>
</ul>
```

SCSS：
```scss
ul {
    margin: 50px auto;
    width: 400px;
    height: 48px;
    font-size: 24px;
    display: flex;
    flex-direction: row;
}

ul li {
    width: 100px;
    line-height: 48px;
    text-align: center;   
}

ul li:not(:last-child) {
    border-right: 1px solid #666;
}
```

The effect is as follows：

<iframe height="350" style="width: 100%;" scrolling="no" title="Use :not() to Style Borders on Lists" src="https://codepen.io/Chokcoco/embed/EMYGQZ?height=350&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/EMYGQZ'>Use :not() to Style Borders on Lists</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>