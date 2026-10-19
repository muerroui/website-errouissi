const { createServer } = require('node:http');
const { parse } = require('node:url');
const next = require('next');

process.env.NODE_ENV = 'production';

// In Phusion Passenger on cPanel, process.env.PORT can be 'passenger', a unix socket path, or a port number.
// Do NOT wrap with Number(), which evaluates to NaN for non-numeric strings and crashes Next.js.
const rawPort = process.env.PORT;
const port = rawPort && !isNaN(Number(rawPort)) ? Number(rawPort) : (rawPort || 3000);

const app = next({ dev: false, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl).catch((err) => {
      console.error('Request error:', err);
      if (!res.headersSent) res.statusCode = 500;
      res.end();
    });
  });

  server.listen(port, () => {
    console.log(`> Ready on ${port}`);
  });
}).catch((error) => {
  console.error('Next.js startup failed:', error);
  process.exit(1);
});

