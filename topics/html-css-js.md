# HTML/CSS Resources

**Interactive:** [Code School: Discover DevTools &rarr;](https://www.codeschool.com/courses/discover-devtools)

## HTML: Hyptertext Markup Language
HTML is the *structure* of the page: what everything is and nothing else. (i.e. it says nothing about what things *look* like).

(You may hear "DOM" or *Document Object Model* around the internet — it's just a fancy way of saying the HTML that's been parsed by the browser into a tree.)

### Tags say what things are
MDN has [a list of HTML tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). For example, a paragraph with part of it emphasized is:
```html
    <p>I have a <em>lot</em> to talk about.</p>
```
### Attributes give more info to the tag
Each tag page on MDN lists attributes for that tag. For instance, the [anchor tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) (which makes a hyperlink) requires a URL (where to link to) as an attribute:

```html
<p>
  Go to <a href="http://dailybruin.com">Daily Bruin's</a> website.
</p>
```

## CSS: Cascading Stylesheets
As opposed to HTML, CSS only says what things *look* like — their style.

### Selectors say what to style
Use selectors to tell CSS which elements to style. [MDN has an overview of CSS selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors). The [CSS Zen Garden](http://www.csszengarden.com/) uses the same HTML but lets you swap out CSS stylesheets, showing the power of CSS and why structure/style should be separated.

Classes group elements together that might appear more than once, while IDs can only appear once on a page. Styles from IDs take precedence since they're much more specific. Add a class or an ID on an element as an attribute.

Some basics:
* Select an element with the name of the element. E.g. `h1`, `a`, or `video`.
* Select all elements with a class with a dot. E.g. `.byline`, `.my-class`, or `.another-class`.
* Select the *one* element with an ID with a hash. E.g. `#first-article` or `#main-menu`.

### Properties say what the elements look like
Again, MDN has an [excellent overview of CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference). Use them with a selector like this:

```css
#my-element {
  color: red;
  margin: 10px;
}
```

**Read:** [Introduction to the CSS box model &rarr;](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)   
**Read:** [Learn CSS Positioning in Ten Steps &rarr;](http://www.barelyfitz.com/screencast/html-training/css/positioning/)   
**Read:** [Specifics on CSS Specificity &rarr;](https://css-tricks.com/specifics-on-css-specificity/)   
**Read:** [CSS Guidelines: High-level advice and guidelines for writing sane, manageable, scalable CSS &rarr;](http://cssguidelin.es/)

## Responsive design
Instead of designing two separate versions of a website (like `dailybruin.com` and `m.dailybruin.com`), it is a good practice to design one site that changes styles depending on the screen size.

### Media queries: the magic sauce
In CSS, you can change properties based on the size of the browser. These are called "media queries." For instance:

```css
div#important {
    background-color: blue;
}
@media (min-width: 100px) and (max-width: 500px) {
    div#important {
        font-size: 200px;
        background-color: red;
    }
}
```

Everything inside the `@media` block is only applied when the browser's width is between 100px and 500px. So the `div#important` is normally blue but turns red within those values.

### The easier way: Bootstrap
That's hard to do without a good structure. To get started (with a nice grid system), use something like [Twitter Bootstrap](http://getbootstrap.com/) or [Zurb Foundation](http://foundation.zurb.com/) (both used at the Daily Bruin).

[Here's a basic demo](http://getbootstrap.com/css/#grid) of Bootstrap's grid system. When looking at it, try resizing your browser to see what happens.

Remember that Bootstrap is **mobile-first**: design with the smartphone-sized browser *first* then add other styles in to make it work well with larger browsers.

## Javascript
Made in 1999 Javascript (or more accurately "ECMAScript") is the main language interpreted by web browsers. It lets us add interactivity to web pages. (The "Java" part of the name was just a marketing ploy — it has nothing to do with the Java language. [More on that here](https://www.quora.com/Why-does-JavaScript-have-a-Java-part-in-its-name).)

Javascript is a functional language using C-style syntax. Functions are first-class objects and can be stored in variables.

Because of all this, Javascript is often dubbed [the world's most misunderstood language](http://javascript.crockford.com/javascript.html). Take the time to learn what's going on and you'll have a much better time.

**Read:** [A re-introduction to JavaScript (JS tutorial) &rarr;](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
