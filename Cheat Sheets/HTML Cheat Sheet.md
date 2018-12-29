# HTML5 Cheat Sheet

## At the Beginning/End
Tag | Notes
--- | -----
!DOCTYPE | Defines the document type. Use `<!DOCTYPE html>` on line one.
html |  Defines an HTML document. Use `<html lang="en">` at the top and close it in the bottom.

## Include in `<header>`
Tag | Notes | Attributes
--- | ----- | ----------
title | Defines the page title.
meta | Defines meta information.<br>`<meta charset="UTF-8">`<br>`<meta name="viewport" content="width=device-width, initial-scale=1">` | **charset**, **content**, **http-equiv**, **name**
link | Defines a resource reference. `<link rel="stylesheet" href="css/style.css">` | **href**, **hreflang**, **media**, **rel**, **sizes**, **type**




## Page Areas
Tag | Notes | Attributes
--- | ----- | ---
body | Defines the content body section.
header | specifies a header for a document or section. Can have several in one document.
footer | Defines a footer section.
nav | Defines navigation links.
article | Defines independent, self-contained content. An article should make sense on its own, and it should be possible to read it independently from the rest of the web site. | cite, pubdate
section | Defines a section | cite
aside | Defines some content aside from the content it is placed in (like a sidebar). Should be related to the surrounding content
main | specifies the main content of a document. content should be unique to the document. Can only be one and must not be nested in `<article>`, `<aside>`, `<footer>`, `<header>`, or `<nav>`

```
Example Structure:

body
  |- nav
  |- section
    |- header
    |- aside
    |- (content)
  |- section
    |- header
    |- (content)
  |- article
  |- footer
```








## Body Parts
Tag | Notes
--- | -----


## Other



TO ADD:
```
<!-->
<a>
<abbr>
<acronym>
<address>
<applet>
<area>
<audio>
<b>
<base>
<basefont>
<bdi>
<bdo>
<big>
<blockquote>
<br>
<button>
<canvas>
<caption>
<center>
<cite>
<code>
<col>
<colgroup>
<data>
<datalist>
<dd>
<del>
<details>
<dfn>
<dialog>
<dir>
<div>
<dl>
<dt>
<em>
<embed>
<fieldset>
<figcaption>
<figure>
<font>
<form>
<frame>
<frameset>
<h1> - <h6>
<hr>
<i>
<iframe>
<img>
<input>
<ins>
<kbd>
<label>
<legend>
<li>
<map>
<mark>
<meter>
<noframes>
<noscript>
<object>
<ol>
<optgroup>
<option>
<output>
<p>
<param>
<picture>
<pre>
<progress>
<q>
<rp>
<rt>
<ruby>
<s>
<samp>
<script>

<select>
<small>
<source>
<span>
<strike>
<strong>
<style>
<sub>
<summary>
<sup>
<svg>
<table>
<tbody>
<td>
<template>
<textarea>
<tfoot>
<th>
<thead>
<time>
<tr>
<track>
<tt>
<u>
<ul>
<var>
<video>
<wbr>
```