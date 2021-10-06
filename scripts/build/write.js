#!/usr/bin/env node
const fs = require('fs');
const config = require('./config')
const {getThemeKey} = require('./utils');

const writeThemesFile = (themes) => {
  // Load existing themes.json and update it
  let themesData = themes
  // themes.forEach(theme => {
  //     themesData[theme.theme_key] = theme;
  // })
  let sortedThemesData = {}
  Object.keys(themesData).sort().forEach(key => {
    sortedThemesData[key] = themesData[key];
  });
  console.log(`Writing ${config.themesJsonFile}...`);
  fs.writeFileSync(config.themesJsonFile, JSON.stringify(sortedThemesData, null, 2));
}

const writeErrorFile = (errorLog) => {
  console.log(`Writing ${config.errorJsonFile}...`);
  fs.writeFileSync(config.errorJsonFile, JSON.stringify(errorLog, null, 2));
}

const writeStatichuntFile = (statichunt) => {
  let statichuntData = config.statichuntJsonData
  statichunt.forEach(theme => {
    statichuntData[theme.theme_key] = theme;
  })
  let sortedStatichuntData = {}
  Object.keys(statichuntData).sort().forEach(key => {
    sortedStatichuntData[key] = statichuntData[key];
  });
  console.log(`Writing ${config.statichuntJsonFile}...`);
  fs.writeFileSync(config.statichuntJsonFile, JSON.stringify(sortedStatichuntData, null, 2));
}

const themeMap = (themes) => {
  return themes.reduce((accumulator, theme) => {
    const themeKey = getThemeKey(theme.github, theme.product);
    return {
      ...accumulator,
      [themeKey]: theme
    };
  });
}

module.exports = {
  writeThemesFile,
  writeErrorFile,
  writeStatichuntFile,
  themeMap
}
