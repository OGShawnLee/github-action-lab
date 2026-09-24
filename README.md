# 🚀 Laboratorio de GitHub Actions

¡Bienvenido al laboratorio de aprendizaje de **GitHub Actions**! Este repositorio está diseñado para ayudarte a comprender los fundamentos de la integración continua y despliegue continuo (CI/CD) utilizando la plataforma de automatización nativa de GitHub.

---

## 📌 ¿Qué es GitHub Actions?

**GitHub Actions** es una plataforma de automatización y CI/CD que permite compilar, probar y desplegar código directamente desde tu repositorio de GitHub cuando ocurren eventos específicos (como un `push`, un `pull_request` o según un horario programado).

---

## 🧱 Conceptos Clave

1. **Workflows (Flujos de trabajo)**:
   - Procesos automatizados configurables que ejecutan uno o más *jobs*.
   - Se definen en archivos `.yml` o `.yaml` dentro de la carpeta:
     ```text
     .github/workflows/
     ```

2. **Events (Eventos)**:
   - Actividades que disparan la ejecución del workflow (ej. `push`, `pull_request`, `schedule`, o manual con `workflow_dispatch`).

3. **Jobs (Trabajos)**:
   - Conjunto de *steps* (pasos) que se ejecutan en un mismo *runner* (máquina virtual o contenedor).
   - Por defecto, los jobs se ejecutan en paralelo a menos que se defina una dependencia entre ellos (`needs:`).

4. **Steps (Pasos)**:
   - Tareas individuales dentro de un job. Pueden ejecutar comandos de consola (`run: ...`) o invocar una *Action* reutilizable (`uses: ...`).

5. **Actions**:
   - Bloques de construcción reutilizables y empaquetados (puedes crearlos tú mismo o usar los de la comunidad en GitHub Marketplace, como `actions/checkout@v4`).

6. **Runners**:
   - Servidores que ejecutan los workflows. GitHub provee runners basados en Linux (`ubuntu-latest`), Windows (`windows-latest`) y macOS (`macos-latest`), aunque también puedes usar tus propios servidores (*self-hosted runners*).

---

## 🧪 Estructura de un Flujo de Trabajo

Para crear tu primer workflow, crea un archivo en `.github/workflows/primer-workflow.yml`:

```yaml
name: Mi Primer Flujo de Trabajo

# 1. ¿Cuándo se ejecuta?
on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]
  workflow_dispatch: # Permite ejecutarlo manualmente desde la pestaña Actions

# 2. ¿Qué tareas ejecuta?
jobs:
  saludo:
    runs-on: ubuntu-latest # Entorno de ejecución

    steps:
      # Descarga el código del repositorio en el runner
      - name: Descargar repositorio
        uses: actions/checkout@v4

      # Ejecuta comandos en la terminal
      - name: Imprimir mensaje
        run: echo "¡Hola! GitHub Actions se está ejecutando correctamente."

      - name: Mostrar fecha y hora
        run: date
```

---

## 🛠️ Pasos para Probarlo

1. **Crea la estructura de carpetas**:
   ```bash
   mkdir -p .github/workflows
   ```
2. **Copia el archivo de ejemplo** en `.github/workflows/primer-workflow.yml`.
3. **Haz commit y push** a tu repositorio en GitHub:
   ```bash
   git add .
   git commit -m "feat: agregar primer workflow de GitHub Actions"
   git push origin main
   ```
4. **Verifica la ejecución**:
   - Ve a tu repositorio en GitHub en el navegador.
   - Haz clic en la pestaña **Actions**.
   - Selecciona el flujo ejecutado para inspeccionar los logs en tiempo real.

---

## 📚 Recursos Recomendados

- [Documentación oficial de GitHub Actions](https://docs.github.com/es/actions)
- [GitHub Marketplace](https://github.com/marketplace?type=actions) (Explora acciones de la comunidad)
