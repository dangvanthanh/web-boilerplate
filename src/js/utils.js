export const isLargeButton = () => {
  const site = /^(github.com)$/
  return site.exec(document.location.hostname)
}
