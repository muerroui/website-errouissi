const { createServer } = require('node:http');
const next = require('next');

process.env.NODE_ENV = 'production';
const port = Number(process.env.PORT || 3000);
const app = next({ dev: false, dir: __dirname, hostname: '0.0.0.0', port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res).catch(() => {
      if (!res.headersSent) res.statusCode = 500;
      res.end();
    });
  }).listen(port);
}).catch((error) => {
  console.error('Next.js startup failed:', error.message);
  process.exit(1);
});
