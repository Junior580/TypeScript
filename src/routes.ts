import { Request, Response } from "express";
import createUser from "./services/CreateUsers";
export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: "fulano@teste.com.br",
        password: "123",
        techs: [
            "NodeJs",
            "ReactJs",
            "ReactNative",
            { tittle: "Javascript", experience: 100 },
        ],
    });

    return response.json({ message: "Hello World" });
}
