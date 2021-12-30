#!/usr/bin/env node
const { themeMap } = require("./write");
const { generateMarkdownData } = require("./markdown");
const config = require("./config");

const deleteOldThemes = async (themesMarkdown) => {
  const themesMarkdown = await generateMarkdownData(config.themesMarkdownFiles);
  const themesMarkdownMap = themeMap(themesMarkdown);
};

module.exports = {
  deleteOldThemes,
};
