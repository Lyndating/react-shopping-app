# React-Shopping-App

React-shopping-app is an application that contains the primary functions of an online shopping website. The application is based on REACT.js linked to Express.js back-end by using firebase cloud functions and firestore to handle API requests.

## Technologies

Project created with: 

* ReactJS

* Express.JS

* Cors.JS

* Axios

* Firebase  DB

* Firebase Authentication

* Firebase Cloud functions

* [Stripe JS](https://stripe.com/docs/stripe-js/react#element-components)

* Material UI

* Jest

* Moment

* Currency-Format

* CSS

  

## Try it out

You can access and use the application at [Shop Now](https://shopping-react-app-deecf.web.app)

###  Login:

*  Email: jt@ga.co
* Password: chicken

### Test Payment:

* Card Number: 4242 4242 4242 4242
* MM/YY: 04/24
* CVC: 242
* ZIP: 42424

##  App Pages Overview

<img src="/public/images/Shopping_Flow_Chart.drawio.png" alt="flow_chart">



-----------------------------------------------------------------------------------------

## Features/User Guide

* Users could [Sign In](https://shopping-react-app-deecf.web.app/login) by clicking the "Sign in" from the Header nav that we direct to the login/signup page.  There is another "Create an account" button at the footer to set up a new user account.
* An email address and password are required.
* All the users could access the category link and those new products listed on the home page.
* The category Icons allow the user to access the [page](https://shopping-react-app-deecf.web.app/category/Electrical) listing all the products under that specific category. 
* The "New Arrivals" section list the top rating products on the Home page. Users could click the "Add Item" button to add the product to the shopping cart or click the product card and head to the product show page. 
* If the cart is not empty, the shopping bag icon at the top corner of the header will count and display the total added item in the cart. 
* On the [product show page](https://shopping-react-app-deecf.web.app/products/Q7XTFmYInf60WHVYoH3G), the user could choose the quantity of product to add to the cart. The list of links above the product image gives the user access back to the product list under that category, or back to the home page directly.
* Users could head to the [checkout page](https://shopping-react-app-deecf.web.app/checkout) by clicking the little shopping bag icon at the right corner of the header. If the cart is empty, the checkout page will display the "Continue shopping " button to direct the user back to the home page. 
* The amount displayed on the checkout page will sum to the total amount of all the products in the cart, and users allow to change the quantity of each product as well as remove the product. 
* Once the user clicks the button "Continue to checkout", if the user is signed in, it will head to the payment page, otherwise it will direct to the login page. 
* On the [payment page](https://shopping-react-app-deecf.web.app/payment), users need to enter the delivery address as well as contact details before the payment section. If users need any changes on products, the arrow  "Shopping bag" on the top could send the customer back to the checkout page. 
* Users could click "Continue to billing" to make the final payment. If users forget to fill up the delivery address form before going ahead, it will pop up a reminder message. 
* Users need to provide their card number, and expiry date(MM/YY) as well as 3 digit CVC to process the payment.
* Once the payment is made successfully, it will direct to the [Orders page](https://shopping-react-app-deecf.web.app/orders), which is listing the order history sorted by descending order.



## Screenshots

## Web Pages View

### Home Page
<span><img src="/public/images/W-HomePage1.png" width="400" alt="web_home_page">
<img src="/public/images/W-HomePage2.png" width="400" alt="web_home_page"></span>

### Sign up / Log in Page
<span><img src="/public/images/W-SignUpPage1png.png" width="400" alt="web_sign_up">
<img src="/public/images/W-SignInPage1.png" width="400" alt="web_log_in"></span>

### Product List Page
<span><img src="/public/images/W-Category1.png" width="400" alt="web_product_list">
<img src="/public/images/W-Category2.png" width="400" alt="web_product_list"></span>

### Product Show Page
<span><img src="/public/images/W-ProductShow1.png" width="400" alt="web_product_show">
<img src="/public/images/W-ProductShow2.png" width="400" alt="web_product_show"></span>

### Checkout Page
<span><img src="/public/images/W-Checkout1.png" width="400" alt="web_checkout">
<img src="/public/images/W-PaymentPage1.png" width="400" alt="web_payment"></span>
<span><img src="/public/images/W-PaymentPage2.png" width="400" alt="web_payment">
<img src="/public/images/W-PaymentPage3.png" width="400" alt="web_payment"></span>

### Order Page
<span><img src="/public/images/W-OrderPage.png">

## Mobile Pages View

### Home Page
<span><img src="/public/images/M-HomePage3.png" width="400" alt="web_home_page">
<img src="/public/images/M-HomePage4.png" width="400" alt="web_home_page"></span>

### Sign up / Log in Page
<span><img src="/public/images/M-SignupPage.png" width="400" alt="web_sign_up">
<img src="/public/images/M-LoginPage.png" width="400" alt="web_log_in"></span>

### Product List Page
<span><img src="/public/images/M-Category3.png" width="400" alt="web_product_list">
<img src="/public/images/M-Category4.png" width="400" alt="web_product_list"></span>

### Product Show Page
<span><img src="/public/images/M-ProductShow2.png" width="400" alt="web_product_show">
<img src="/public/images/M-ProductShow3.png" width="400" alt="web_product_show"></span>

### Checkout Page
<span><img src="/public/images/M-CheckoutPage1.png" width="400" alt="web_checkout">
<img src="/public/images/M-PaymentPage1.png" width="400" alt="web_payment"></span>
<span><img src="/public/images/M-PaymentPage2.png" width="400" alt="web_payment">
<img src="/public/images/M-PaymentPage3.png" width="400" alt="web_payment"></span>
<span><img src="/public/images/M-PaymentPage3.png" width="400" alt="web_payment">
<img src="/public/images/M-PaymentPage4.png" width="400" alt="web_payment"></span>

### Order Page
<span><img src="/public/images/M-OrderPage.png"></span>
