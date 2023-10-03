## Multiple solutions to implement cross-row or cross-column layout

Multiple solutions to achieve multiple solutions to achieve cross-row or cross-column layout

HTML：

```pug
// pug template engine
div.g-container

    h2 float accomplish
    div.g-float
        - for(var i=0; i<3; i++)
            div.g-item #{i}
            
    h2 flex accomplish
    div.g-flex
        - for(var i=0; i<3; i++)
            div.g-item #{i}
            
    h2 grid accomplish
    div.g-grid
        - for(var i=0; i<3; i++)
            div.g-item #{i}
```

SCSS：
```scss
.g-container {
    margin: 20px auto;
    width: 400px;
}

.g-item {
    width: 190px;
    height: 190px;
    box-sizing: border-box;
    border: 1px solid #666;
    border-radius: 10px;
    line-height: 190px;
    font-size: 32px;
    text-align: center;
    cursor:pointer;
    margin: 5px;
    transition: .1s all;
}

.g-float {
    overflow: hidden;
    
    .g-item {
        float: left;
    }
    
    .g-item:first-child {
        height: 390px;
    }

    .g-item:first-child:hover {
        height: 190px;
        width: 390px;
    }
}

h2 {
    font-size: 28px;
    text-align: center;
    margin: 30px auto
}


.g-flex {
    width: 400px;
    height: 400px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
    
    .g-item:first-child {
        height: 390px;
    }
}

.g-flex:hover {
    flex-direction: row;

    .g-item:first-child {
        height: 190px;
        width: 390px;
    }
}

.g-grid {
    width: 400px;
    height: 400px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, 50%);
    
    .g-item {
        width: unset;
        height: unset;
    }
    
    .g-item:first-child {
        grid-row: 1 / 3;
        grid-column: 1 / 2;
    }
}

.g-grid:hover {
    .g-item:first-child {
        grid-row: 1 / 2;
        grid-column: 1 / 3;
    }
}
```

The effect is as follows：

<iframe height="300" style="width: 100%;" scrolling="no" title="multi-row-or-column" src="https://codepen.io/dvha/embed/rNoZeRK?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/rNoZeRK">
  multi-row-or-column</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>