#!/usr/bin/env node
const urlSlug = require('url-slug');
const {getThemeKey, getRepoName} = require('./utils');
const ora = require('ora');
const spinner = ora('Loading')
const allowedSsg = ["hugo", "jekyll", "gatsby", "nextjs", "next", "unibit"]
const allowedCms = ["contentful", "sanity", "no-cms"]

const generateStatichunt = (frontmatter) => {
    const themeKey = getThemeKey(frontmatter.github)

    spinner.text = `${frontmatter.file}`

    let statichuntData = {
        theme_key: themeKey
    };

    const ssgArray = frontmatter.ssg || []
    const cmsArray = frontmatter.cms || []

    if (ssgArray.some(ssg => allowedSsg.includes(urlSlug(ssg))) && cmsArray.some(cms => allowedCms.includes(urlSlug(cms)))) {
        if (ssgArray.length > 1) {
            statichuntData.createUrl = `https://app.statichunt.com/create?theme=${frontmatter.github}`
        } else {
            statichuntData.createUrl = `https://app.statichunt.com/create?theme=${frontmatter.github}&ssg=${urlSlug(ssgArray)}`
        }
    }

    // manual overrides
    const manualDisabled = [
        'https://github.com/runbytech/gatsby-theme-ultronele',
        'https://github.com/YoussefRaafatNasry/portfolYOU',
        'https://github.com/qwtel/hydejack',
        'https://github.com/joshgerdes/jekyll-uno',
        'https://github.com/GDGToulouse/devfest-theme-hugo',
        'https://github.com/h-enk/doks',
        'https://github.com/ahmadiqbal1/jekyll-webpack-boilerplate',
        'https://github.com/SupunKavinda/jekyll-theme-leaf.git',
        'https://github.com/techonomics69/gatsby-netlify-form-example',
        'https://github.com/lawrencecchen/headless-comments',
        'https://github.com/Joy3Luo/Joy3luo.github.io',
        'https://github.com/chrisbobbe/jekyll-theme-prologue',
        'https://github.com/adityatelange/hugo-PaperMod/',
        'https://github.com/Kentico/kontent-jekyll-blog',
        'https://github.com/longpdo/neumorphism',
        'https://github.com/puresyntax71/hugo-theme-chunky-poster',
        'https://github.com/sharadcodes/jekyll-theme-dark-reader',
        'https://github.com/wkocjan/gatsby-theme-intro',
        'https://github.com/jameshamann/jekyll-material-theme',
        'https://github.com/fncnt/vncnt-hugo',
        'https://github.com/wizlee/gatsby-portfolio',
        'https://github.com/EmaSuriano/gatsby-starter-mate',
        'https://github.com/guangmean/Niello',
        'https://github.com/fabien0102/gatsby-starter',
        'https://github.com/netlify-templates/one-click-hugo-cms'

    ];
    manualDisabled.forEach(url => {
        if (url === frontmatter.github) {
            if (statichuntData.createUrl) {
                delete statichuntData.createUrl
            }
        }
    })
    const manualEnabled = ['https://github.com/rohitguptab/rg-portfolio', 'https://github.com/narative/gatsby-theme-novela']
    manualEnabled.forEach(url => {
        if (url === frontmatter.github) {
            statichuntData.createUrl = `https://app.statichunt.com/create?theme=${frontmatter.github}&ssg=${urlSlug(frontmatter.ssg)}&cms=${urlSlug(frontmatter.cms)}`
        }
    })
    if (statichuntData.createUrl) {
        return statichuntData;
    }
    return false;

};

const generateStatichuntData = (markdownData) => {
    spinner.start("Fetching Statichunt Data");
    const statichuntData = markdownData.map(theme => {
        return generateStatichunt(theme)
    }).filter(statichunt => statichunt.createUrl);
    spinner.succeed("Success - Fetching Statichunt Data");
    return statichuntData;
};

module.exports = {
    generateStatichuntData
}