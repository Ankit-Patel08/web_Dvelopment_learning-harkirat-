const express = require("express")

function add(n){
    let ans = 0;
    for(let i = 1; i <= n; i++){
        ans = ans+i;
    }
    return ans;
}

const app = express();

app.get("/", function(req, res){
    const n = req.query.n;
    const ans = add(n);
    res.send(ans.toString());
})

app.listen(3000);



/*

    // NOTES  ON Route Trafficking


    ## Route Trafficking (Traffic Routing)

**Route trafficking** (also called **traffic routing**) is the process of directing incoming network or HTTP requests to the correct destination, such as a specific route, function, or server.

---

### 🔑 Basic Concept

When a user sends a request (e.g., visiting a website or calling an API), the system must decide:

> “Where should this request go?”

This decision-making process is called **routing traffic**.

---

### 🌐 URL Structure and Routing

A URL consists of two important parts:

1. **Path (Used for Routing)**

   * Example: `/users`
   * Determines which route handler or function will be executed.

2. **Query Parameters (Used for Data)**

   * Example: `?id=10&role=admin`
   * Provides additional data to the selected route.

👉 **Important:**
Routing is done based on the **path**, not the query parameters.

---

### 🚀 Example (Express.js)

```js
app.get("/users", (req, res) => {
    console.log(req.query);
    res.send("Users route");
});
```

Request:

```
/users?id=10
```

* `/users` → decides the route
* `id=10` → extra data used inside the route

---

### 🔀 Types of Route Trafficking

1. **Application-Level Routing**

   * Done inside frameworks like Express.js
   * Example: `/home`, `/profile`

2. **Load Balancing**

   * Distributes traffic across multiple servers
   * Prevents server overload

3. **Geo-Based Routing**

   * Sends requests to the nearest server based on location

4. **A/B Testing Routing**

   * Directs users to different versions of a service

5. **Proxy/CDN Routing**

   * Tools like Nginx or Cloudflare route traffic between services

---

### 📦 Types of Request Data

* **Path Parameters:** `/users/10` → `req.params`
* **Query Parameters:** `/users?id=10` → `req.query`
* **Request Body:** Used in POST/PUT requests → `req.body`

---

### 🧠 Summary

* Route trafficking = directing requests to the correct destination
* Routing is mainly based on the **URL path**
* Query parameters are only used to pass additional data
* Can happen at multiple levels: application, server, or global network

---


## Use of Middleware, Nginx, and Cloudflare in Traffic Routing

Traffic routing can happen at different levels in a system. The three common layers are **Middleware (Application Level)**, **Nginx (Server Level)**, and **Cloudflare/CDN (Global Level)**.

---

### 1. 🧩 Middleware (Application Level)

**Use:**

* Handles routing inside your backend application (e.g., Express.js)
* Decides which function or controller should process the request

**Key Responsibilities:**

* Route handling (`/users`, `/login`)
* Authentication & authorization
* Rate limiting
* Logging and request validation

**Example:**

```js
app.get("/users", (req, res) => {
    res.send("Users data");
});
```

👉 Used when request has already reached your backend server

---

### 2. ⚙️ Nginx (Server Level)

**Use:**

* Acts as a **reverse proxy** and **load balancer**
* Routes traffic between multiple backend servers

**Key Responsibilities:**

* Load balancing (distribute traffic)
* Reverse proxy (forward requests to backend)
* SSL termination (HTTPS handling)
* Static file serving

**Example Use Case:**

* `/api` → Node.js server
* `/images` → static file server

👉 Used when you have **multiple servers or services**

---

### 3. 🌍 Cloudflare / CDN (Global Level)

**Use:**

* Routes traffic at a global scale using distributed servers
* Improves performance and security

**Key Responsibilities:**

* CDN caching (faster content delivery)
* DDoS protection
* Geo-based routing (nearest server)
* DNS management

**Example Use Case:**

* India user → nearest Asia server
* US user → nearest US server

👉 Used for **global performance and security**

---

### 🔁 Summary Table

| Layer       | Tool           | Use                                |
| ----------- | -------------- | ---------------------------------- |
| Application | Middleware     | Handle routes inside app           |
| Server      | Nginx          | Distribute traffic between servers |
| Global      | Cloudflare/CDN | Route traffic worldwide            |

---

### 🧠 Final Understanding

* **Middleware** → decides *which function runs*
* **Nginx** → decides *which server handles request*
* **Cloudflare** → decides *which location/server globally*

👉 All three work together to efficiently route traffic from user → server → application.


*/