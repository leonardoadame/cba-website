function listOfPages(pathname)
{
  const query = this.queryPages;
  const {originalPathname} = query((page) => page.pathname === pathname)[0];

  const pagesQuery = query((page) => page.originalPathname.startsWith(originalPathname) &&
    page.originalPathname.replace(originalPathname, "").split("/").length === 2);

  pagesQuery.sort(this.sortByWeight);

  const items = pagesQuery.map((item) =>
    `<li><a href = '/${item.pathname}'>${item.title}</a></li>`);

  return `<ul>${items.join("")}</ul>`;
}

/**
 * Get subpages according to the pages folder structure.
 * @param {Object} page     Page instance from site.queryPages
 * @param {Function} filter filter pages that should include subpages
 * @return {Object} returns passed pages object with populated `sub_pages`
 *                          properties sorted according to page weights
 */
function getSubPages(page, filter)
{
  const query = this.queryPages;
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
          this.getSubPages(subPage, filter);
        }
      }
    }
    page.sub_pages.sort(this.sortByWeight);
  }
  return page;
}

function sortByWeight(a, b)
{
  if (!a.weight)
    return 1;
  if (!b.weight)
    return -1;
  return a.weight - b.weight;
}

module.exports = {listOfPages, getSubPages, sortByWeight};
