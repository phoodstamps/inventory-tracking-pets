# inventory-tracking-pets

## Backend setup - Nodejs
```
Run node server with nodemon enabled and debugger:
    cd backend

    npm install --development

    docker-compose build

    docker-compose up
```

### Inventory Api Endpoints
```
GET all shipments - http://localhost:7878/api/

POST new shipment - http://localhost:7878/api/create-shipment/
  body of request:
    - vendor: "vendor name"
    - invoice: "invoice number"
    - shipDate: "shipment date"

UPDATE shipment - http://localhost:7878/api/update-shipment/id:
  url will contain shipment id of shipment record to be deleted
  body of request will contain fields being updated:
    - vendor: "vendor name"
    - invoice: "invoice number"
    - shipDate: "shipment date"

DELETE shipment - http://localhost:7878/api/delete-shipment/id:
  url will contain shipment id of shipment record to be deleted

```


## Frontend setup - Vue
```
npm install

Compiles and hot-reloads for development:
    npm run serve

Compiles and minifies for Production:
    npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
