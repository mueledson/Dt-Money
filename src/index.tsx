import React from "react";
import ReactDOM from "react-dom/client";
import { createServer, Model } from "miragejs";
import { App } from "./App";
import { request } from "http";

createServer({

  models:{
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Dinheiro das férias trabalhadas",
          type: "deposit",
          category: "Dev",
          amout: 310,
          createdAt: new Date('2023-01-02 18:00:00'),
        },
        {
          id: 2,
          title: "EA Play",
          type: "withdraw",
          category: "Jogos",
          amout: 19,
          createdAt: new Date('2023-01-12 18:00:00'),
        }
      ],
    })
  },

  routes(){
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction")
    })

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create("transaction", data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);