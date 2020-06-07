const templateData =
{
  site: {
    title: "CBA",
    subtitle: "Chromium Browser Automation (extension for chrome browser automation)",
    menuItems: ["", "documentation", "tutorial", "ready-projects",
      "what's-new"],
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
    getSubPages: function (nav)
    {
      const query = templateData.site.queryPages
      const subPages = query(({originalPathname}) =>
      {
        const parentPath = `${nav.originalPathname}/`;
        return originalPathname.startsWith(parentPath) &&
               !(originalPathname.substring(parentPath.length).includes("/"));
      });

      if (subPages.length)
      {
        nav.sub_items = [];
        for (const subPage of subPages)
        {
          if (subPage.menu !== false)
          {
            nav.sub_items.push(subPage);
            templateData.site.getSubPages(subPage);
          }
        }
        nav.sub_items.sort(templateData.site.sortByWeight);
      }
      return nav;
    }
  }
};

const port = {
  http: 3000
};
module.exports = { templateData, port };
