import { createServer } from "../server/server";
import request from "supertest";
import { Server } from "http";

describe("/api", () => {
  let server: Server;

  beforeAll(async () => {
    server = await createServer(0);
  });

  afterAll(() => {
    server.close();
  });

  it("should respond for both /hello and /world", async () => {
    await request(server).get("/api/hello").expect(200);

    // TODO: this one fails, WHY????
    await request(server).get("/api/world").expect(200);
  });
});
