## Use background-attachment to implement rolling shadows

Here, we use the two attributes `background-attachment: srcoll` and `background-attachment: local` to hide the shadow background by superimposing two layers of background during the initial scrolling. When actually scrolling, the superimposed part is moved. Go, just expose the shadow part.

See this article for details: [Using pure CSS to achieve rolling shadow effect](https://juejin.cn/post/6913725602428600334)

HTML：

```html
<div class="g-table">
    <table>
        <thead>
            <tr>
                <th>Date</th>
                 <th>Name</th>
                 <th>Address</th>
            </tr>    
        </thead>
    </table>
    <div class="g-scroll">
        <table>
            <tbody>
                <tr>
                    <td>2021-01-01</td>
                    <td>XXXXX</td>
                    <td>DDDDD</td>
                </tr>    
            </tbody>
        </table>
    </div>
</div>
```

SCSS：
```scss
.g-table {
    margin: 50px auto;
    width: 450px;
}

table {
    position: relative;
    width: 450px;
    border: 1px solid #ccc;
    text-align: center;
    
    tbody {
        border-collapse: separate;
        height: 200px;
    }
    
    td, th {
        width: 150px;
        padding: 5px;
        border: 1px solid #ccc;
    }
}

.g-scroll {
    top: -1px;
    position: relative;
    height: 200px;
    overflow-y: scroll;
    overflow-x: hidden;
    background: 
        linear-gradient(#fff, transparent) top / 100% 100px,
        radial-gradient(at 50% -15px, rgba(0, 0, 0, .8), transparent 70%) top / 100000% 12px;
    background-repeat: no-repeat;
    background-attachment: local, scroll;
}
```

The effect is as follows（Scroll the table to see the effect）：

<iframe height="300" style="width: 100%;" scrolling="no" title="bg-attachment-scroll-shadow" src="https://codepen.io/dvha/embed/OJrwZWa?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/OJrwZWa">
  bg-attachment-scroll-shadow</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>