import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles.css'

// Configuración de la app
const app = createApp(App)

// Plugins
app.use(router)

// Configuración global
app.config.errorHandler = (err, instance, info) => {
  console.error('Error en Vue:', err)
  console.error('Info:', info)
}

app.config.warnHandler = (msg, instance, trace) => {
  // Ignorar warnings específicos en producción
  if (process.env.NODE_ENV === 'production') {
    return
  }
  console.warn(msg, trace)
}

// Montar la app
app.mount('#app')

// Registrar Service Worker para PWA (opcional)
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(err => {
      console.error('Error al registrar Service Worker:', err)
    })
  })
}