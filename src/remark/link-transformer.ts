import { visit } from "unist-util-visit";

const plugin = (options) => {
  const transformer = async (ast) => {
    let number = 1;

    visit(ast, "link", (node) => {
      if (node.url && node.url.startsWith("/_references/AIH/")) {
        node.url =
          "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/aviation_instructors_handbook/aviation_instructors_handbook.pdf";
      }
    });
  };
  return transformer;
};

export default plugin;
