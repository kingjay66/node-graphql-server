import http from 'http'

const keep_alive = () =>
  setInterval(
    () =>
      http.get(
        { host: process.env.APP_URL || 'localhost', port: 80, path: '/' },
        res =>
          res.on('data', _ => {
            console.log('KEEP-ALIVE')
          }),
      ),
    20 * 60 * 1000, // 20 minutes
  )

export default keep_alive
