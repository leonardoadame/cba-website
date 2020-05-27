const templateData =
{
  site: {
    title: "CBA",
    subtitle: "Chromium Browser Automation (extension for chrome browser automation)",
    menuItems: ["", "documentation", "tutorial", "ready-projects",
      "what's-new"],
    listOfPages: function (pathname) {
      const query = templateData.site.queryPages;
      const {originalPathname} = query((page) => page.pathname === pathname)[0];
            
      pagesQuery = query((page) => page.originalPathname.startsWith(originalPathname) &&
        page.originalPathname.replace(originalPathname, "").split("/").length === 2);
        
      pagesQuery.sort((a, b) => {
        if (!a.weight)
          return 1;
        if (!b.weight)
          return -1;
        return a.weight - b.weight;
      });

      const items = pagesQuery.map((item) => 
        `<li><a href = '${item.pathname}'>${item.title}</a></li>`);
      
      const result = `<ul>${items.join("")}</ul>`;
      
      return result;
    }
  }
};

const port = {
  http: 3000
};
module.exports = { templateData, port };
