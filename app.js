import express from 'express'
import { join } from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'

const app = express()

app.get('/', (req, res) => {
  const html = renderToString(<p>React goes here!</p>)
  res.send(`<html><head><link rel="stylesheet" href="/main.css" /></head><body>${html}</body></html>`)
})

app.get('/main.css', (req, res) => res.sendFile(join(__dirname, 'main.css')))

app.listen(1337)

console.log('http://localhost:1337')
