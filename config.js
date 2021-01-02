const argv = require("minimist")(process.argv.slice(2));

const templateData =
{
  site: {
    title: "CBA",
    subtitle: "Chromium Browser Automation (extension for chrome browser automation)",
    menuItems: ["", "documentation", "tutorial", "ready-projects",
      "releases"],
    sortByWeight: (a, b) =>
    {
      if (!a.weight)
        return 1;
      if (!b.weight)
        return -1;
      return a.weight - b.weight;
    },
    listOfPages: function (pathname)
    {
      const query = templateData.site.queryPages;
      const {originalPathname} = query((page) => page.pathname === pathname)[0];

      const pagesQuery = query((page) => page.originalPathname.startsWith(originalPathname) &&
        page.originalPathname.replace(originalPathname, "").split("/").length === 2);

      pagesQuery.sort(templateData.site.sortByWeight);

      const items = pagesQuery.map((item) =>
        `<li><a href = '${item.pathname}'>${item.title}</a></li>`);

      return `<ul>${items.join("")}</ul>`;
    },
    /**
     * Get subpages according to the pages folder structure.
     * @param {Object} page     Page instance from site.queryPages
     * @param {Function} filter filter pages that should include subpages
     * @return {Object} returns passed pages object with populated `sub_pages`
     *                          properties sorted according to page weights
     */
    getSubPages: function (page, filter)
    {
      const query = templateData.site.queryPages;
      const subPages = query(({originalPathname}) =>
      {
        const parentPath = `${page.originalPathname}/`;
        return originalPathname.startsWith(parentPath) &&
               !(originalPathname.substring(parentPath.length).includes("/"));
      });

      if (subPages.length)
      {
        page.sub_pages = [];
        for (const subPage of subPages)
        {
          if (subPage.menu !== false)
          {
            page.sub_pages.push(subPage);
            if (!filter || filter(subPage))
            {
              templateData.site.getSubPages(subPage, filter);
            }
          }
        }
        page.sub_pages.sort(templateData.site.sortByWeight);
      }
      return page;
    }
  }
};

const port = {
  http: 3000
};

const lessOptions = {};
const jsModuleOptions = {};
if (!argv.dev)
{
  lessOptions.sourceMap = false;
  lessOptions.minify = true;
  jsModuleOptions.minify = {sourceMap: false}
}

module.exports = { templateData, port, lessOptions, jsModuleOptions };
