import express from 'express'
import { join } from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import ContactList from './exercise/5-iteration/ContactList'
import contacts from './contacts.json'

const app = express()

app.get('/', (req, res) => {
  const html = renderToString(<ContactList contacts={contacts} />)
  res.send(`<html><head><link rel="stylesheet" href="/main.css" /></head><body>${html}</body></html>`)
})

app.get('/main.css', (req, res) => res.sendFile(join(__dirname, 'main.css')))

app.listen(1338)

console.log('http://localhost:1338')
