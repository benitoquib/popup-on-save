# Changelog

## [1.1.0] - 2025-10-02

### Añadido
- 🎵 **¡NUEVA FUNCIONALIDAD!** Sonidos aleatorios al guardar archivos
  - 5 sonidos diferentes que se reproducen aleatoriamente
  - Integración perfecta con Windows usando PowerShell
  - Archivos de audio incluidos en la extensión
- ⚙️ **Configuraciones personalizables**:
  - `popupOnSave.enableSounds`: Activar/desactivar sonidos (por defecto: activado)
  - `popupOnSave.soundVolume`: Control de volumen (0.0 a 1.0, por defecto: 0.5)
  - `popupOnSave.enableMessages`: Activar/desactivar mensajes popup (por defecto: activado)
- 🔧 **Panel de configuración** accesible desde Settings > Extensions > Popup on Save

### Mejorado
- 🎯 **Experiencia de usuario**: Ahora puedes personalizar completamente la extensión
- 🛡️ **Manejo de errores**: Verificación de archivos de audio antes de reproducir
- 📝 **Código más limpio**: Mejor organización y manejo de configuraciones

## [1.0.1] - 2025-10-02

### Cambiado
- 🔧 **Mejorado activación de la extensión**: Añadidos eventos de activación específicos
  - `onStartupFinished`: Asegura que la extensión se active al iniciar VS Code
  - `onSave`: Optimiza la activación para el evento de guardado
- ⚡ **Mejor rendimiento**: Activación más eficiente y predecible
- 🛠️ **Estabilidad mejorada**: Reduce posibles fallos de activación

## [0.0.1] - 2025-10-02

### Añadido
- ✨ **Funcionalidad inicial**: Mensajes aleatorios cada vez que guardas un archivo
- 🎭 **17 mensajes divertidos** en español con emojis variados:
  - Mensajes motivacionales: "¡Archivo guardado con éxito! 🚀"
  - Mensajes graciosos: "Ese save te quedó épico 🔥"
  - Mensajes reflexivos: "Cada save te acerca a la gloria... o a un bug 😂"
  - Mensajes de descanso: "¡Guardado! Ahora a tomar un café ☕"
  - Mensajes técnicos con humor: "Recuerda: un save al día mantiene al bug lejos 🐞"
  - Mensajes personalizados del autor
- 🚀 **Activación automática** al iniciar VS Code
- ⚡ **Funcionamiento inmediato** sin configuración necesaria
- 🎯 **Integración perfecta** con el evento `onDidSaveTextDocument` de VS Code

### Configuración del Entorno
- ⚙️ **VS Code Engine**: Mínimo v1.104.0
- 🏗️ **TypeScript**: Configuración con compilación estricta
- 📝 **ESLint**: Configuración con TypeScript y reglas modernas
- 🧪 **Testing**: Framework configurado con VS Code Test
- 📦 **Build**: Scripts de compilación y empaquetado con VSCE

### Compatibilidad
- ✅ Compatible con VS Code v1.104.0 y superiores
- ✅ Funciona en Windows, macOS y Linux
- ✅ Sin dependencias externas en runtime
- ✅ Tamaño ligero de la extensión

---


---

## Enlaces

- � [Reportar Bugs](https://github.com/benitoquib/popup-on-save/issues)
- 💡 [Solicitar Características](https://github.com/benitoquib/popup-on-save/issues)
- 📖 [Documentación](https://github.com/benitoquib/popup-on-save#readme)
- 🏪 [Marketplace](https://marketplace.visualstudio.com/items?itemName=beneqinformatica.popup-on-save)

---

*¡Gracias por usar Popup on Save! Que cada save sea una experiencia divertida* 🎉