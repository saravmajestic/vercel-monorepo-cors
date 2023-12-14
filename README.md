# vercel-monorepo-cors

### Testing instructions

- run `npm install` in `api` and `web` directory
- From root directory, run `npm run start:api` and `npm run start:web` in separate terminals
- This will open `http://localhost:3000` in browser. Click `Learn react` button
- Throws cors error in dev tools -> console.

### Workaround
- updated vercel.json
- ```
  {
  "routes": [
    {
      "src": "/api/(.*)",
      "status": 200,
      "methods": ["POST", "OPTIONS", "GET", "PATCH", "DELETE", "PUT"],
      "headers": {
        "Access-Control-Allow-Headers": "Authorization, Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers, Access-Control-Allow-Credentials, Access-Control-Expose-Headers, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT"
      }
    }
  ],
  "functions": {
    "api/src/routes/*.ts": {
      "memory": 3008,
      "maxDuration": 300
    }
  }
}
```
