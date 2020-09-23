import express, { Request, Response } from "express";

const app = express();

function getRequest(req: Request, res: Response) {
  console.log("BOOM1");
  res.json({});
}

app.get("/request", getRequest);

app.listen(11223, () => {
  console.log(`Listening on port 11223`);
});
