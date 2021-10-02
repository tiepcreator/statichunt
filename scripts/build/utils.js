#!/usr/bin/env node
const parseGithubUrl = require('parse-github-url');

const getRepoName = (repoUrl) => {
    return parseGithubUrl(repoUrl).repo; // statichunthq/statichunt-theme-fresh
}

const getThemeKey = (repoUrl) => {
    if (!repoUrl) {
        throw Error("Unable to generate themeKey")
    }
    const repoName = getRepoName(repoUrl)
    const themeKey = repoName.replace("/", "-").toLowerCase();
    return themeKey
}

module.exports = {
    getThemeKey,
    getRepoName
}