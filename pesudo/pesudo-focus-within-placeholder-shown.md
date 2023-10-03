## placeholder-shown cooperates with focus-within to realize input input interaction

Use `:placeholder-shown` && `:focus-within` to implement input input interaction.

+ `:focus-within`: is a CSS pseudo-class that indicates that an element obtains focus, or that a descendant element of this element obtains focus. In other words, the element itself or one of its descendants matches the :focus pseudo-class
+ `:placeholder-shown`: CSS pseudo-class that takes effect when the `<input>` or `<textarea>` element displays placeholder text

-----

HTML:

```html
<div class="g-container">
   <input type="text" placeholder="Enter the content you want to query" class="g_input_search" >
   <button type="button" class="g_button_search">GO</button>
</div>
```

SCSS：
```scss
.g-container {
    position: relative;
    margin: 100px auto;
    display: flex;
    flex-wrap: wrap;
    width: 500px;
    height: 60px;
    overflow: hidden;
    transition: 0.3s;

    & > * {
        border: none;
        outline: none;
    }

    .g_input_search {
        padding: 0 15px;
        height: 100%;
        width: 100%;
        border: 1px solid #ddd;
        font-size: 18px;
        box-sizing: border-box;

        &:not(:placeholder-shown) {
            border: 1px solid #03a9f4;
            
            + .g_button_search {
                opacity: 1;
            }
        }

        &:placeholder-shown {
            
            + .g_button_search {
                opacity: 0;
            }
        }
    }

    .g_button_search {
        background: #03a9f4;
        color: #feffd4;
        font-size: 15px;
        cursor: pointer;
        width: 100px;
        height: calc(100% - 20px);
        transition: 0.3s;
        position: absolute;
        right: 10px;
        top: 10px;
    }
    
    &:focus-within {
        transform: translateY(-4px);
        border-color: #bbb;
        box-shadow: 4px 4px 10px 2px #ddd;
    }
}
```

The effect is as follows（Click `HTML/SCSS` to edit the code）：

<iframe height="300" style="width: 100%;" scrolling="no" title="pesudo-focus-within-placeholder-shown" src="https://codepen.io/dvha/embed/ExGegaV?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dvha/pen/ExGegaV">
  pesudo-focus-within-placeholder-shown</a> by HaDV (<a href="https://codepen.io/dvha">@dvha</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>