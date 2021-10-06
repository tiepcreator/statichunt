#!/usr/bin/env node
const parseGithubUrl = require('parse-github-url');
const getRepoName = (repoUrl) => {
  return parseGithubUrl(repoUrl).repo; // statichunthq/statichunt-theme-fresh
}

const getThemeKey = (repoUrl, productUrl) => {
  if (repoUrl) {
    let repoName = getRepoName(repoUrl)
    let themeKey = repoName.replace("/", "-").toLowerCase();
    return themeKey
  } else if (productUrl) {
    let themeUrl = new URL(productUrl)
    let themePath = themeUrl.pathname.replace("/", "").toLowerCase();
    let themeKey = themePath.replace(/\//g, "-").slice(0, -1);
    return themeKey
  }
}

module.exports = {
  getThemeKey,
  getRepoName
}