# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![screenshot mobile](https://github.com/Lo-Deck/Fylo-dark-theme-landing-page/blob/main/screenshot/Fylo%20landing%20page%20with%20dark%20theme-mobile.png).
![screenshot desktop](https://github.com/Lo-Deck/Fylo-dark-theme-landing-page/blob/main/screenshot/Fylo%20landing%20page%20with%20dark%20theme-desktop.png).
![screenshot desktop-error](https://github.com/Lo-Deck/Fylo-dark-theme-landing-page/blob/main/screenshot/Fylo%20landing%20page%20with%20dark%20theme-desktop-error.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Fylo-dark-theme-landing-page).
- Live Site URL: [Website](https://lo-deck.github.io/Fylo-dark-theme-landing-page/).


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS


### What I learned

I learned how to validate a `form` and display an error message

```js
if(!myForm[0].validity.valid)
{

     const spanError = document.createElement('span');

     spanError.innerText = 'Error, please check your email';

     spanError.id = 'error';

     myForm[0].insertAdjacentElement('afterend', spanError);

}
```


### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.