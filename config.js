const argv = require("minimist")(process.argv.slice(2));
const {getSubPages, listOfPages, sortByWeight} = require("./helpers");
const notification = require("./notification.json");

const templateData =
{
  site: {
    title: "CBA",
    subtitle: "Chromium Browser Automation (extension for chrome browser automation)",
    menuItems: ["", "documentation", "tutorial", "ready-projects", "releases"],
    github: "https://github.com/browser-automation/cba-website",
    notification
  }
};

const port = {
array.forEach(element => {
    http: 3000
  
});};

const lessOptions = {};
const jsModuleOptions = {};
if (!argv.dev)
{
  lessOptions.sourceMap = false;
  lessOptions.minify = true;
  jsModuleOptions.minify = {sourceMap: false}
}

templateData.site.listOfPages = listOfPages.bind(templateData.site);
templateData.site.getSubPages = getSubPages.bind(templateData.site);
templateData.site.sortByWeight = sortByWeight.bind(templateData.site);

// Set image width and height in markdown ex. - `![test](image.png =100x200)`
const imgSize = require('markdown-it-imsize');
const markdownOptions = {
  plugins: [imgSize]
}

module.exports = { templateData, port, lessOptions, jsModuleOptions,
  markdownOptions };
