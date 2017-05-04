export const log = (...args) => {
  console.log(...args)
}

export const isSite = () => {
  const site = /^(github.com)$/
  return site.exec(document.location.hostname)
}
