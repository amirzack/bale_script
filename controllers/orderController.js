import asyncHandler from "express-async-handler";
import axios from "axios";
import { HttpsProxyAgent } from "https-proxy-agent";
import { SocksProxyAgent } from "socks-proxy-agent";

export const getDataBaleMessenger = asyncHandler(async (req, res) => {
  console.log(`${process.env.CHAT_ID}`);
  try {
    const data = await axios.get(
      `${process.env.BALE_URL}/bot${process.env.BALE_TOKEN}/getMe`
    );
    console.log(data.data);
    res.status(200).json(data.data);
  } catch (error) {
    console.error("Error getting bot data:", error.message);
    res.status(500).send("Failed to fetch bot info");
  }
});

//POST api/v1/webhook/bale
export const webhookHandlerBaleMessenger = asyncHandler(async (req, res) => {
  if (req.method === "POST") {
    const order = req.body;
    const { id } = order;
    console.log("webhook recieved : ", id);

    const message = `سفارش جدید ثبت شد: 
    شماره سفارش: ${id}
    مبلغ: ${order.total} تومان
    نام مشتری: ${order.billing.first_name} ${order.billing.last_name}
    درگاه : ${order.payment_method}
    آیتم ها : ${order.line_items
      .map(
        (item) =>
          `کالا: ${item.name}, شناسه: ${item.id}, تعداد: ${item.quantity}`
      )
      .join("- - -")}

    ${`http://localhost/crm/wp-admin/admin.php?page=wc-orders&action=edit&id=${id}`}

    `;

    try {
      await axios.post(
        `${process.env.BALE_URL}/bot${process.env.BALE_TOKEN}/sendMessage`,
        {
          chat_id: process.env.CHAT_ID,
          text: message,
        }
      );

      console.log("Message sent to Bale successfully");
      res.status(200).send("پیام ارسال شد");
    } catch (error) {
      console.error("Error sending message to Bale:", error.message);
      res.status(500).send("Failed to send message");
    }
  } else {
    res.status(405).send("Method not allowed");
  }
});

//POST api/v1/webhook/telegram

// export const webhookHandlerTelegramMessenger = asyncHandler(
//   async (req, res) => {
//     if (req.method === "POST") {
//       const order = req.body;
//       const { id } = order;
//       console.log("webhook recieved : ", id);

//       const message = `سفارش جدید ثبت شد: 
//     شماره سفارش: ${id}
//     مبلغ: ${order.total} تومان
//     نام مشتری: ${order.billing.first_name} ${order.billing.last_name}
//     درگاه : ${order.payment_method}
//     آیتم ها : ${order.line_items
//       .map(
//         (item) =>
//           `کالا: ${item.name}, شناسه: ${item.id}, تعداد: ${item.quantity}`
//       )
//       .join("- - -")}

//     ${`http://localhost/crm/wp-admin/admin.php?page=wc-orders&action=edit&id=${id}`}

//     `;

//       // const socksAgent = new SocksProxyAgent(
//       //   `socks5://${process.env.SOCKS_URL}:${process.env.SOCKS_PORT}`
//       // );
//       // const httpsAgent = new HttpsProxyAgent("https://103.197.49.12:8080");

//       const agent = new HttpsProxyAgent({
//         host: "", // نام سرور پروکسی
//         port: "", // پورت پروکسی
//         auth: "", // یوزر و پسورد به فرمت یوزر:پسورد
//       });

//       try {
//         await axios.post(
//           `${process.env.TELEGRAM_URL}/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
//           {
//             chat_id: process.env.CHAT_ID_TELEGRAM,
//             text: message,
//           },
//           {
//             httpsAgent: agent,
//           }
//         );

//         console.log("Message sent to Telegram successfully");
//         res.status(200).send("پیام ارسال شد");
//       } catch (error) {
//         console.error(
//           "Error sending message to Telegram:",
//           error.response || error.message
//         );
//         res.status(500).send("Failed to send message");
//       }
//     } else {
//       res.status(405).send("Method not allowed");
//     }
//   }
// );
