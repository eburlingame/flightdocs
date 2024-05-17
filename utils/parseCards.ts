export type CardMeta = {
  title: string
  path: string
}

export const parseCardFile = (filepath: string): CardMeta => {
  const { readFileSync } = require('fs')

  const contents = readFileSync(filepath).toString()
  const pattern = /^#\s(.+?)$/gm
  const [match]: any = Array.from(contents.matchAll(pattern))

  if (!match) {
    throw new Error(`No title found on page ${filepath}`)
  }

  return {
    title: match[1],
    path: filepath.replace('./pages/', '/').replace('.mdx', ''),
  }
}

export const findCards = (dir: string, parents: string[]): CardMeta[] => {
  const { readdirSync, statSync } = require('fs')

  const files = readdirSync(dir)

  return files
    .filter(
      (filename: string) =>
        !filename.endsWith('index.mdx') && !filename.endsWith('index.tsx')
    )
    .flatMap((filename: string) => {
      const filePath = dir + '/' + filename
      const stat = statSync(filePath)

      if (stat.isDirectory()) {
        return findCards(filePath, [...parents, filePath])
      }

      if (filePath.endsWith('.mdx')) {
        return {
          ...parseCardFile(filePath),
          parents,
        }
      }

      return []
    })
}
