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

**Request Example**

```sh
curl -X GET https://shop-api-wx9a.onrender.com/api/shop
```

**Response Example**

```json
[
  {
    "name": "Call Of Dutty",
    "price": 50.99,
    "image": "img-url.com",
    "category": "Playstation",
    "stripeId": "stripeId",
    "id": "679cb4c3c4f0af3addd1804b"
  }
]
```

### Create a Product

**Request Example**

```sh
curl -X POST https://shop-api-wx9a.onrender.com/api/shop \
     -H "Content-Type: application/json" \
     -d '{
    "name": "Spiderman 2",
    "price": 58,
    "image": "img-url.com",
    "category": "Steam"
}'
```

### Checkout (Stripe Payment)

**Request Example**

```sh
curl -X POST https://shop-api-wx9a.onrender.com/api/shop/checkout \
     -H "Content-Type: application/json" \
     -d '[{
    "name": "Spiderman 2",
    "price": 58,
    "image": "img-url.com",
    "category": "Steam",
    "stripeId": "stripeId",
    "qty": 1
}]'
```

> [!NOTE]  
> The response from the server is a URL that need to be managed by the frontend to redirect the user to the Striple checkout page.

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

   > [!IMPORTANT]  
   > Users are redirected to the homepage after completing the payment

4. Start the server:
   ```sh
   npm start
   ```

## :globe_with_meridians: Deployment

This API is hosted on Render at: [https://shop-api-wx9a.onrender.com](https://shop-api-wx9a.onrender.com)
