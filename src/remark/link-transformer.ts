import { visit } from "unist-util-visit";

const transformations: Record<string, (url: string) => string> = {
  "/_references/AIH/": () =>
    "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/aviation_instructors_handbook/aviation_instructors_handbook.pdf",
  "/_references/AFH/": () =>
    "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/00_afh_full.pdf",
  "/_references/PHAK/": () =>
    "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf",
};

const plugin = (options) => {
  const transformer = async (ast) => {
    visit(ast, "link", (node) => {
      if (node.url && transformations[node.url]) {
        const urlFn = transformations[node.url];
        node.url = urlFn(node.url);
      }
    });
  };
  return transformer;
};

export default plugin;
