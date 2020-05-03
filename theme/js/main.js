// Mobile Menu
const mobMenu = document.querySelector("#mobile-nav select");
mobMenu.addEventListener("change", e =>
{
  window.location.pathname = e.target.selectedOptions[0].value;
});

//dirTree = require("directory-tree");


//filteredTree = dirTree('/pages', ['.ejs']);
//console.log(filteredTree);

const headerMenuItems = ["documentation", "tutorial"];
const flyoutPages = site.queryPages(({originalPathname}) => headerMenuItems.includes(originalPathname.split("/")[0]));
const navigation = [];
console.log(originalPathname);
//for (const {originalPathname, pathname, title} of flyoutPages) {
  // TODO: replicate navigation array from config.js using originalPathname.
  // You can use https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split 
  // to split up the originalPathname into parts, create nested structure and populate array.
  // example values of local variables:
  // originalPathname = "documentation/actions/inject";
  // pathname = "inject";
  // title = "Inject";
}