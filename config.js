const templateData =
{
  site: {
    title: "CBA",
    subtitle: "Chromium Browser Automation (extension for chrome browser automation)",
    menuItems: ["", "documentation", "tutorial", "ready-projects",
      "what's-new"],
    pagesList: function (absolutePath) {
      optionsList = templateData.site.queryPages(({originalPathname}) => {
        return originalPathname && originalPathname.split('/')[0] == absolutePath.split('/')[0] && 
            originalPathname.split('/')[1] == absolutePath.split('/')[1]});
      arr = [];
      for (const {title, pathname, originalPathname} of optionsList) {
        if (originalPathname !== absolutePath) {
          arr.push(`<li><a href = '${pathname}'>${title}</a></li>`)
        }
      }
      return `<ul>${arr.join('')}</ul>`;
    }
  }
};

const port = {
  http: 3000
};
module.exports = { templateData, port };
