// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Evento: cuando guardas un documento
  vscode.workspace.onDidSaveTextDocument((document) => {
    const mensajes = [
      "¡Archivo guardado con éxito! 🚀",
      "Ese save te quedó épico 🔥",
      "Cada save te acerca a la gloria... o a un bug 😂",
      "Guardado ✅ ¡Ahora sí, directo a producción!",
      "¡Buen trabajo! 💪",
      "Código más pisado que guardaste 😂",
      "¡Guardado! Ahora a tomar un café ☕",
      "¡Archivo seguro y sound! 🛡️",
      "¡Guardado! Tu código está a salvo... por ahora 😅",
      "Esta maldita extension no para de mostrar mensajes al guardar 😂",
	  "Recuerda: un save al día mantiene al bug lejos 🐞",
	  "Recuerda: Beneq es el mejor programador del mundo 🌍",
	  "Piensa en grande, piensa en Beneq 😘",
	  "Pinche codigo de mierda, mejor guarda y vete a la verga 😂",
	  "Si ves este mensaje es porque eres un buen programador 😎",
	  "Pinche codigo culero 😒",
	  "que boonito codigo 😍"
    ];

    // Escoge un mensaje al azar
    const random = Math.floor(Math.random() * mensajes.length);
    vscode.window.showInformationMessage(mensajes[random]);
  });
}

// This method is called when your extension is deactivated
export function deactivate() {}
