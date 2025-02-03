readme_content = """
# 📦 Order Notification Bot for Telegram & Bale

This is a backend project built with Node.js to create a bot that receives new orders from your WooCommerce store and sends notifications to your Telegram group or Bale channel.

## 🌍 Project Overview

- **Purpose**: The bot fetches new order data from WooCommerce and sends notifications to Telegram and Bale channels.
- **Environment**: 
    - Node.js
    - Express
    - Environment variables to keep sensitive data secure

---

## 🛠️ Requirements

Before running this bot, make sure to set up the following:

1. **Node.js** installed on your system.
2. **WooCommerce Webhook** in your WordPress site to send new orders to the bot.
3. **Telegram & Bale API Tokens** and necessary configuration details.

---

## ⚙️ Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/order-notification-bot.git
cd order-notification-bot
```
2. Install Dependencies:
npm install

3. Set up Environment Variables
Create a .env file in the root directory and fill it with the following information:

PORT=3000
BALE_TOKEN=your-bale-token
BALE_URL=https://tapi.bale.ai
CHAT_ID="@chat_id"

TELEGRAM_TOKEN="your-telegram-token"
TELEGRAM_URL=https://api.telegram.org
CHAT_ID_TELEGRAM="your-telegram-chat-id"

SOCKS_URL=103.197.49.12
SOCKS_PORT=8080

Make sure to replace placeholders with your actual tokens and URLs.

4. Configure WooCommerce Webhook
Go to your WordPress WooCommerce settings and create a webhook for new orders. Set the webhook to send requests to the bot URL (http://your-server-url:3000/notify-order).

🚀 Running the Bot
Once you've set up everything, run the bot with:
npm start
The bot will start listening for incoming order notifications and will send them to your configured Telegram or Bale group.
 Notes

This bot listens for order notifications from WooCommerce and automatically sends them to Telegram or Bale based on your configuration.
Make sure your server can handle incoming requests and is exposed to the internet for the webhook to work.
Use a proxy like SOCKS5 for improved security and to avoid detection.

🧑‍💻 Contributions
Feel free to fork this repository, make improvements, and submit pull requests. Your contributions are always welcome!

💬 License
This project is licensed under the MIT License. """
