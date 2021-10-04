#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const subYears = require('date-fns/subYears');

const errorJsonFile = path.join(process.cwd(), '/data/errors.json');
const statichuntJsonFile = path.join(process.cwd(), '/data/statichunt.json');
const statichuntJsonData = fs.existsSync(statichuntJsonFile) ? JSON.parse(fs.readFileSync(statichuntJsonFile)) : {};
const themesMarkdownFolder = path.join(process.cwd(), '/content/theme')
const themesMarkdownFiles = fs.readdirSync(themesMarkdownFolder).map(relFilename => path.resolve(themesMarkdownFolder, relFilename))
const themesJsonFile = path.join(process.cwd(), '/data/themes.json');
const themesJsonData = fs.existsSync(themesJsonFile) ? JSON.parse(fs.readFileSync(themesJsonFile)) : {};
const hiresImagesFolder = path.join(process.cwd(), '/static/themes/sreenshots');
const thumbnailImagesFolder = path.join(process.cwd(), '/static/themes/thumbnails')
const staleBeforeDate = subYears(new Date(), 1);

module.exports = {
  errorJsonFile,
  themesJsonFile,
  themesMarkdownFolder,
  themesMarkdownFiles,
  themesJsonData,
  statichuntJsonFile,
  statichuntJsonData,
  hiresImagesFolder,
  thumbnailImagesFolder,
  staleBeforeDate
}