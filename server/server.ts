import next from "next";
import express from "express";
import { Server } from "http";

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });

const handle = nextApp.getRequestHandler();

let server: Server;

export async function createServer(port: number): Promise<Server> {
  await nextApp.prepare();
  const expressApp = express();

  expressApp.all("*", (req, res) => handle(req, res));

  server = expressApp.listen(port, () => {
    console.log("Ready to accept connections", { port });
  });

  server.on("close", () => {
    nextApp.close();
  });

  return server;
}

export function getServer(): Server {
  if (!server) {
    throw new Error(
      "Server not yet initialized. Wait for `createServer` to finish!"
    );
  }

  return server;
}

if (require.main === module) {
  createServer(parseInt(process.env.APP_PORT || "3000", 10));
}
