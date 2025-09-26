# Palantir Foundry MCP Server

This repository implements a [Model Context Protocol
(MCP)](https://github.com/modelcontextprotocol) server that exposes
parts of the Palantir Foundry SDK.\
It follows a layered design with clear separation of concerns:

- **services/** → Thin wrappers around the Foundry SDK functions.
- **handlers/** → Error-handling and formatting into the MCP response
  shape.
- **tools/** → Definitions of MCP tools (names, schemas, metadata)
  that bind to handlers.

---

## 🚀 Running the server

This project is designed to be run through the [MCP
Inspector](https://github.com/modelcontextprotocol/inspector) during
development.

### 1. Install dependencies

```bash
npm install
```

### 2. Authentication

This project requires a Foundry API token to authenticate requests.

Create a `.env` file in the project root with the following content:

```env
FOUNDRY_TOKEN=<your-foundry-token-here>
```

---

### 3. Development (with Inspector)

Inspector is installed as a dev dependency. A server configuration file
(`mcp.json`) defines how to start the Foundry MCP server.

Run:

```bash
npm run inspect
```

This will:

- Launch the MCP Inspector proxy.
- Open the browser UI.
- Start your MCP server with the configuration from `mcp.json`.

---

## 🗂 Project structure

    src/
      foundry-client.ts   # Foundry SDK client setup
      mcp-server.ts       # MCP server entrypoint
      services/           # SDK wrappers
      handlers/           # Handler functions (map service → MCP response)
      tools/              # MCP tool definitions

---

## 📝 Notes

- The server currently implements **Ontologies** (ontologies, object
  types, objects) and **Users** (list, get, search, current).
- Additional functionality can be added incrementally by following the
  established **service → handler → tool** pattern.
