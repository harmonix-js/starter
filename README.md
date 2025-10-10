# 🪄 Harmonix Starter Templates

A collection of official starter templates for quickly bootstrapping new Harmonix projects.

## 🚀 Quick Start

You can scaffold a new Harmonix project using the **`create-harmonix`** CLI.

```bash
pnpm create harmonix@latest [<dir>] -- [-t,--template=<template>]
```

**Example:** Create a new project named `my-bot` using the `v1` template:

```bash
pnpm create harmonix@latest my-bot -- -t v1
```

If no template is specified, the CLI will use the latest stable version by default.

## 🛠️ Contributing

We welcome contributions to improve existing templates or add new ones!

- Each template is maintained in ts own branch (see [all branches](https://github.com/harmonix-js/starter/branches)).
- To update a specific template, open a Pull Request targeting that branch.

**Note:** Please avoid commiting lock-files such as `pnpm-lock.yaml` and `package-lock.json` to template branches!

## 📄 License

[MIT](./LICENSE) - Made with 💜 by the Harmonix team
