# UseMnemonic.js
UseMnemonic is a small JavaScript library that adds the popular mnemonics feature to your website.

## Getting started

### Installation
Just include the script inside your document:
```html
<script src="UseMnemonic.min.js"></script>
```

### Usage
To apply mnemnoics to your website you'll at first have to define the mnemonic key inside your elements. To do this, just add the control character (`_`) in front of your character you want to use:
```html
<button>_Open File</button>
```
After executing the command
```js
UseMnemonic.run();
```
the control character will disappear. 
To show or hide the mnemonic keys use the `Alt` key (or `Option` on Mac).

### Syntax
 `UseMnemonic.run`  has the following optional arguments:

 
 
| Argument | Description |
|---|---|
| `selector` | A CSS selector that defines the elements that can contain mnemonic keys.<br><em>Default</em>: `button`, `label`, `a` and `.UseMnemonic`.|
| `controlChar` | The control character that defines the mnemonic key.<br><em>Default</em>: `_` (it's recommened to either use `_` or `&`) |



### Actions 
Executed when using the mnemonic key:
| Element | Action |
|---|---|
| `button`, `a`,<br>`.UseMnemonic` | A click event using the `click` method. |
| `label` | If an `input` element is present: Input will be focused.<br>Otherwise a click event. |

### License
UseMnemonic.js is licensed under the MIT license.
