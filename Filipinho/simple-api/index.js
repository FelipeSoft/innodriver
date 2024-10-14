import express from "express";

const app = express();

// Permite que a API transite com arquivos JSON
app.use(express.json());

// Permite que a API entenda ações em URLs (URL Params e Query URL)
app.use(express.urlencoded({ extended: true }));

// Receba solicitações HTTP (Hypertext Transfer Protocol)
// https://localhost:8080
app.get("/", (request, response) => {
    // Condição que foi finalizada uma operação

    // 1XX -> Aguardando, ou, em processamento
    // 2XX -> Sucesso
    // 3XX -> Redirecionamento
    // 4XX -> Erro do cliente de API
    // 5XX -> Erro do servidor de API

    return response.status(200).json({
        message: "Hello World!"
    });
});

app.get("/user/:id", (request, response) => {
    const { id } = request.params;
    return response.status(200).json({ id });
});

app.post("/user/create", (request, response) => {
    const { email } = request.body;
    return response.status(201).json({
        message: "O e-mail do usuário é " + email
    }); 
});

app.listen(8080, () => {
    console.log("Express server listening on port 8080");
});


