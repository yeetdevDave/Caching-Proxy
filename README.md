# Caching Proxy

Caching Proxy is a (project)[https://roadmap.sh/projects/caching-server] to build a CLI tool that starts a caching proxy server, it will forward requests to the actual server and cache the responses. If the same request is made again, it will return the cached response instead of forwarding the request to the server.

## Installation

```
git clone https://github.com/yeetdevDave/Caching-Proxy.git
cd Caching-Proxy
npm install
```

## How to use

`caching-proxy --port <number> --origin <url>`

### Example

`caching-proxy --port 3000 --origin http://dummyjson.com`
