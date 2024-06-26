import { wppInstance } from "../../config/wpp-instance";

export class AutoResponse {
  execute() {
    wppInstance.on("message", (msg) => {
      if (
        msg.body.toLowerCase().includes("solicitar") ||
        msg.body.toLowerCase().includes("site") ||
        msg.body.toLowerCase().includes("pagina") ||
        msg.body.toLowerCase().includes("ajuda")
      ) {
        msg.reply(
          "*Frota CAP +  *Auto Atendimento**\n\nPara acompanhar, solicitar ou verificar o status de sua solicitação acesse o site ou baixo nosso app:\n\n*Site*:https://frotacap.josuecarvalho.cloud\n\n*"
        );
      }
    });
  }
}
