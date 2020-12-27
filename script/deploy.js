const Git = require('simple-git')
const path = require('path')
const shell = require('shelljs')
const fs = require('fs')

async function main() {
  const destPath = path.resolve(__dirname, '../')
  const distPath = path.resolve(__dirname, '../dist')
  const nowStr = new Date().toLocaleString()

  const git = Git(destPath)

  await git.checkout('gh-pages')

  console.log('[git] deploying')

  shell.ls(distPath).forEach(v => {
    let gitFile = path.resolve(destPath, v)
    if (fs.existsSync(gitFile)) {
      shell.rm('-rf', gitFile)
    }
    shell.cp('-r', path.resolve(distPath, v), destPath)
    console.log(`[cp] ${gitFile}`)
  })

  console.log('[git] deploying...')
  git.add('.')
    .commit(`deploy(page): version ${nowStr}`)
    .push(() => console.log('[git] delploy done'))

  await git.checkout('main')
}

main()