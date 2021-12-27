# Statichunt

[Statichunt](https://statichunt.com/) is a free open source Jamstack directory that lists hundreds of themes, starters, and resources for Jamstack sites. <br> Visit Website: https://statichunt.com/

## Submit A Theme

Anyone can submit an open-source theme by adding a markdown file to the `content/theme` folder. 

1. Fork this repo and create a new markdown `.md` file in `content/theme` folder. For example `meghna-hugo.md`. Another option is to add a new file using the [Github UI](https://github.com/statichunt/statichunt/tree/master/content/theme) _(click the "add file" button)_ 
2. Add the required front-matter as shown in the **Example Theme** below.
3. Submit a pull request

> **Tip:** Do not generate the Github stars or theme screenshots. Please just submit the markdown file in your pull request.

**Example Theme**
```yaml
---
title: "Your Theme Name"
github: https://github.com/username/repo
demo: https://www.demo.com # Please make sure this links to a theme demo and not your personal/business site. The demo url must use https
author: Authorname
date: 2022-01-01 # Enter the date you submitted the theme YYYY-MM-DD
ssg:
  - Next # at least 1 ssg is required
cms:
  - No CMS # at least 1 cms is required. If your theme uses markdown (no CMS) the cms should be "No CMS"
css: # css is optional
  - Bootstrap 
archetype: # archetype is optional
  - Blog
  - Portfolio
description: This is an amazing theme and this is a small description about it!
---

# A simple starter kit for NextJs

This theme is a lightweight starter kit. It also gives you a well organised starting point to extend it for yourself.

## Features

* Customisable design tokens to make it your own  
* Customisable global data and navigation  
* Tags and tag archives  
* Progressively enhanced, semantic and accessible  
```

## Contribution Guidelines

* Any open source themes with a public github repo can be submitted.
* Please make sure the demo URL links to a demo of the theme and not your personal or business site.


## Develop Locally

Github stars, image thumbnails and last commit date are generated at build time when this site is deployed to Netlify. Basically the Netlify site runs `npm run deploy`

This site is built on [Hugo](https://gohugo.io/)

Development Server

```
hugo serve
```

Build Site

```
hugo
```

Generate Github stars, image screenshots etc

```
npm install
export GITHUB_TOKEN=XXX (for Windows use export => SET)
npm run deploy
```

> Generating github data requires a Github Token. You can generate this token in your Github account at settings > developer settings > personal access tokens https://github.com/settings/tokens

## Feedback
What would make this project better? Let us know what you think of this project.

hey@statichunt.com

If you love this project please give a star to the project.

## Acknowledgments
This project is inspired by the amazing work of [Robert Austin](https://github.com/JugglerX) and more than 150 contributors on Github.

Built with [Hugo](https://gohugo.io/), hosted by [Netlify](https://www.netlify.com/)