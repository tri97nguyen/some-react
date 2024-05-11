import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import View from './pages/View/View.tsx'
import CreateOrder from './pages/CreateOrder/CreateOrder.tsx'
import Navbar from './Navbar.tsx'
import '@mantine/core/styles.css';
import { MantineProvider, Tabs } from '@mantine/core'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <Tabs defaultValue="gallery">
        <Tabs.List>
          <Tabs.Tab value="gallery" >
            Gallery
          </Tabs.Tab>
          <Tabs.Tab value="messages" >
            Messages
          </Tabs.Tab>
          <Tabs.Tab value="settings" >
            Settings
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery">
          <View/>
        </Tabs.Panel>

        <Tabs.Panel value="messages">
          <View />
        </Tabs.Panel>

        <Tabs.Panel value="settings">
          <CreateOrder />
        </Tabs.Panel>
      </Tabs> 
    </MantineProvider>
  </React.StrictMode>,
)
