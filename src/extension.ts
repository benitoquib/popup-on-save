// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import * as path from "path";
import { exec } from "child_process";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Lista de archivos de sonido disponibles
  const soundFiles = [
    "audio1.mp3",
    "audio2.mp3", 
    "audio3.mp3",
    "audio4.mp3",
    "audio5.mp3"
  ];

  // Función para reproducir sonido
  async function playSound() {
    const config = vscode.workspace.getConfiguration('popupOnSave');
    const enableSounds = config.get<boolean>('enableSounds', true);

    if (!enableSounds) {
      return;
    }

    try {
      // Seleccionar sonido aleatorio
      const randomSound = soundFiles[Math.floor(Math.random() * soundFiles.length)];
      const soundPath = path.join(context.extensionPath, 'sounds', randomSound);

      // Verificar si el archivo existe
      const fs = require('fs');
      if (!fs.existsSync(soundPath)) {
        console.log(`Sound file not found: ${soundPath}`);
        return;
      }

      // Reproducir sonido usando PowerShell en Windows
      const command = `powershell -Command "Add-Type -AssemblyName presentationCore; $mediaPlayer = New-Object system.windows.media.mediaplayer; $mediaPlayer.open([uri]'${soundPath}'); $mediaPlayer.Play(); Start-Sleep 2"`;
      
      exec(command, (error) => {
        if (error) {
          console.error('Error playing sound:', error);
        }
      });

    } catch (error) {
      console.error('Error playing sound:', error);
    }
  }

  // Evento: cuando guardas un documento
  vscode.workspace.onDidSaveTextDocument(async (document) => {
    const config = vscode.workspace.getConfiguration('popupOnSave');
    const enableMessages = config.get<boolean>('enableMessages', true);

    // Reproducir sonido
    await playSound();

    // Mostrar mensaje si está habilitado
    if (enableMessages) {
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
    }
  });
}

// This method is called when your extension is deactivated
export function deactivate() {}
