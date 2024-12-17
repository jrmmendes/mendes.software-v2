# Mendes.software
This is a simple portfolio page. Simple HTML, CSS (SCSS) and JS

## Setup
The only requirement is to have `sass` installed globally:

```shell
npm i -g sass
```

Then, compile the SCSS files inside `_scss` into `_css` folder. This project aims to use [ITCSS](https://willianjusten.com.br/organizando-seu-css-com-itcss), but it's not strict about it. 

## TL;DR
Start the webserver:
```shell
vite . --host
```

Start the sass compiler:
```shell
sass -w _scss/style.scss:_css/style.css
```

## Stack
- Plain HTML, CSS and JS
- sass (SCSS syntax)
- Fontello