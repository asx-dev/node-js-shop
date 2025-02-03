# :shopping_cart: Node.js Ecommerce API

This project is a RESTful API built with Node.js and Express, designed to power an e-commerce platform. It provides essential functionalities such as product listing, product creation, and checkout handling using Stripe for payment processing. The API is backed by MongoDB, with Mongoose as the ODM.

## :rocket: Features

- **Product Management**: Fetch the list of products or create new ones.
- **Secure Payments**: Handle online payments via Stripe API.
- **Scalable Architecture**: Built with Express and MongoDB for high performance and scalability.

## :computer: Technologies Used

- **Backend Framework**: Express
- **Database**: MongoDB
- **ODM**: Mongoose
- **Payment Integration**: Stripe

## :lock: API Endpoints

### Get Product List

```sh
# Endpoint Retrieves the list of available products
GET /api/shop

# Request Example
curl -X GET https://shop-api-wx9a.onrender.com/api/shop

# Response Example
[
  { "id": "1", "name": "Product A", "price": 19.99 },
  { "id": "2", "name": "Product B", "price": 29.99 }
]
```

### Create a Product

```sh
# Endpoint to add a new product to the database
POST /api/shop

# Request Example
curl -X POST https://shop-api-wx9a.onrender.com/api/shop \
     -H "Content-Type: application/json" \
     -d '{ "name": "New Product", "price": 25.99 }'
```

### Checkout (Stripe Payment)

```sh
# Endpoint to process payments using Stripe
POST /api/shop/checkout

# Request Example
curl -X POST https://shop-api-wx9a.onrender.com/api/shop/checkout \
     -H "Content-Type: application/json" \
     -d '{ "token": "stripe-token", "amount": 4999 }'
```

## :floppy_disk: Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/asx-dev/nodejs-ecommerce-api.git
   cd nodejs-ecommerce-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables (`.env` file):

   ```sh
   MONGO_URI=your_mongodb_connection_string
   STRIPE_SECRET_KEY=your_stripe_secret_key
   HOMEPAGE_URL=your_homepage_url
   ```

   > **⚠️ Important:** Users are redirected to the homepage after completing the payment.

4. Start the server:
   ```sh
   npm start
   ```

## :globe_with_meridians: Deployment

This API is hosted on Render at: [https://shop-api-wx9a.onrender.com](https://shop-api-wx9a.onrender.com)
