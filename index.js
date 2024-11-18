import { program } from 'Commander'
import got from 'got'
import express from 'express'
import NodeCache from 'node-cache'

const myCache = new NodeCache()
const app = express()

program
  .option('--port <number>')
  .option('--origin <url>')
  .option('--clear-cache')

program.parse()

const options = program.opts()

app.get(/\/.*/, async (req, res) => {
  const url = options.origin + req.path
  let data

  if(myCache.get(url) == undefined) {
    data = await got(url).json()
    myCache.set(url, data)
    res.set('X-Cache', 'MISS')
  } else {
    data = myCache.get(url)
    res.set('X-Cache', 'HIT')
  }
  
  res.send(data)
})

app.listen(options.port)