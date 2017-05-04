import { log, isSite } from './utils'

if (isSite) {
  log('true')
} else {
  log('false')
}
