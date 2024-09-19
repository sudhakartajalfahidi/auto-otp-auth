# Bank OTP Sync Microservice

## Overview

This microservice handles user authentication and OTP (One-Time Password) management. It provides endpoints for user login, OTP reception, and OTP verification. Built using Node.js, Express, and MySQL, it is designed to be deployed on AWS EC2.

## Features

- **User Authentication**: Login endpoint for users.
- **OTP Reception**: Endpoint to receive and store OTPs sent from the frontend.
- **OTP Verification**: Endpoint to verify OTPs and delete them if valid.

## Prerequisites

- Node.js
- MySQL Database
- AWS EC2 instance (for deployment)

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/sudhakartajalfahidi/auto-otp-auth.git
   cd auto-otp-auth
