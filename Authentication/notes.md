# 🔐 Authentication - Complete Master Notes

## 📌 What is Authentication?

Authentication is the process of verifying **who a user is**.

> It answers: "Are you really who you claim to be?"

### 🧠 Examples:

* Login with email + password
* OTP verification
* Fingerprint / Face unlock

---

## 🔄 Authentication vs Authorization

| Concept        | Meaning          |
| -------------- | ---------------- |
| Authentication | Who are you?     |
| Authorization  | What can you do? |

---

## 🌐 Why Authentication is Needed?

HTTP is **stateless**, meaning:

* Server does NOT remember users between requests

So we need a mechanism to:

> Identify the user in every request after login

---

# 🔑 Types of Authentication (All in One)

---

## 1. Password-Based Authentication

### 📌 Description:

User provides:

* Username / Email
* Password

### 🔄 Flow:

1. User enters credentials
2. Server checks database
3. If valid → authenticated

### ⚠️ Important:

* Never store plain passwords ❌
* Always hash passwords (bcrypt) ✅

---

## 2. Session-Based Authentication (Cookie-Based)

### 📌 Description:

Server stores session data, client stores only session ID in a cookie.

### 🔄 Flow:

1. User logs in
2. Server creates session (DB / memory)
3. Server sends session ID via cookie
4. Browser sends cookie automatically
5. Server verifies session

### ✅ Pros:

* Secure (if configured properly)
* Easy to implement

### ❌ Cons:

* Stateful (server stores data)
* Hard to scale

---

## 3. Token-Based Authentication

### 📌 Description:

Server generates a token and sends it to client.

Client stores token and sends it in every request.

### 🔄 Flow:

1. Login
2. Server generates token
3. Client stores token
4. Client sends token in headers
5. Server verifies token

### 📦 Example:

```
Authorization: Bearer <token>
```

### ✅ Pros:

* Stateless
* Scalable

### ❌ Cons:

* Needs secure storage on client

---

## 4. JWT (JSON Web Token) Authentication

### 📌 Description:

A special type of token that contains user data.

### 🧱 Structure:

```
header.payload.signature
```

### 🔄 Flow:

1. User logs in
2. Server generates JWT
3. Client stores JWT
4. Sends JWT in requests
5. Server verifies signature

### ✅ Pros:

* Stateless
* Fast (no DB lookup needed usually)
* Self-contained

### ❌ Cons:

* Cannot easily revoke
* Larger size

---

## 5. OAuth Authentication

### 📌 Description:

Third-party authentication (social login)

### 🧠 Examples:

* Login with Google
* Login with GitHub

### 🔄 Flow:

1. User clicks provider login
2. Redirect to provider
3. User authenticates
4. Provider returns token
5. App logs user in

### ✅ Pros:

* No password handling
* Secure

### ❌ Cons:

* Complex

---

## 6. Multi-Factor Authentication (MFA)

### 📌 Description:

Uses multiple verification methods

### 🧠 Examples:

* Password + OTP
* Password + biometric

### ✅ Pros:

* Very secure

### ❌ Cons:

* Slower user experience

---

## 7. Biometric Authentication

### 📌 Description:

Uses physical characteristics

### 🧠 Examples:

* Fingerprint
* Face ID
* Iris scan

---

## 8. API Key Authentication

### 📌 Description:

Client sends API key with request

### 📦 Example:

```
x-api-key: abc123
```

### ⚠️ Note:

* Not ideal for user authentication
* Mostly used in backend-to-backend APIs

---

## 9. Basic Authentication

### 📌 Description:

Username and password sent in header (base64 encoded)

### 📦 Example:

```
Authorization: Basic base64(username:password)
```

### ⚠️ Warning:

* Not secure without HTTPS

---

## 10. Bearer Authentication

### 📌 Description:

Client sends token in Authorization header

### 📦 Example:

```
Authorization: Bearer <token>
```

👉 Commonly used with JWT

---

# ⚔️ Comparison

| Type    | Stateful | Storage  | Usage            |
| ------- | -------- | -------- | ---------------- |
| Session | Yes      | Server   | Traditional apps |
| Token   | No       | Client   | APIs             |
| JWT     | No       | Client   | Modern apps      |
| OAuth   | No       | External | Social login     |

---

# 🧠 Core Concepts

## 🔐 Hashing

* Use bcrypt
* Never store plain passwords

## 🍪 Cookies

* Stored in browser
* Automatically sent with requests

## 🔑 Tokens

* Proof of authentication

## 🧱 Middleware

* Protect routes
* Validate user identity

---

# 🚀 Recommended Learning Path

1. Basic login system
2. Password hashing (bcrypt)
3. Session-based authentication
4. JWT authentication
5. Middleware for protected routes
6. Refresh tokens
7. OAuth (advanced)

---

# 🎯 Final Summary

* Authentication = Identity verification
* Authorization = Access control
* Session = Server remembers user
* Token = Client carries identity
* JWT = Self-contained token
* OAuth = Third-party login

---
 