import { visit } from "unist-util-visit";

const transformations: Record<string, (url: string) => string> = {
  "/_references/AIH/": () =>
    "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/aviation_instructors_handbook/aviation_instructors_handbook.pdf",

  "/_references/AFH/": () =>
    "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/00_afh_full.pdf",

  "/_references/PHAK/": () =>
    "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf",

  "/_references/IFH/": () =>
    "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf",

  "/_references/AC-61-65/": () =>
    "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_61-65J.pdf",

  "/_references/14-CFR/": (url: string) => {
    const sectionAndParagraph = url.replace("/_references/14-CFR/", "");
    const section = sectionAndParagraph.replace(/\([a-zA-Z]+\)$/, "");

    return `https://www.ecfr.gov/current/title-14/section-${section}#p-${sectionAndParagraph}`;
  },

  "/_references/AIM/": (url: string) => {
    const sectionId = url.replace("/_references/AIM/", "");
    const [chapter, section, paragraph] = sectionId.split("-");
    return `https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap${chapter}_section_${section}.html#$paragraph${sectionId}`;
  },

  "/_references/Pilot-Controller-Glossary/": () =>
    "https://www.faa.gov/air_traffic/publications/atpubs/pcg_html/",
};

const plugin = (options) => {
  const transformer = async (ast) => {
    visit(ast, "link", (node) => {
      if (node.url) {
        for (const key in transformations) {
          if (node.url.startsWith(key)) {
            const urlFn = transformations[key];
            node.url = urlFn(node.url);
          }
        }
      }
    });
  };
  return transformer;
};

export default plugin;
