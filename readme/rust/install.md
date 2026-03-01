# wsl

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

# actualizar

`rustup update`

# cargo

**Cargo: la herramienta de Rust para compilar y gestionar paquetes
Cuando instalas Rustup también obtienes la última versión estable de la herramienta de compilación y gestión de paquetes de Rust, conocida como Cargo. Cargo hace un montón de cosas:**

- construye tu proyecto con `cargo build`
- ejecuta tu proyecto con `cargo run`
- ejecuta los tests de tu proyecto con `cargo test`
- genera la documentación de tu proyecto con `cargo doc`
- publica una biblioteca en crates.io con `cargo publish`

# Para verificar que tienes Rust y Cargo instalados, puedes ejecutar esto en tu terminal favorito:

`cargo --version`

# agregar rust al PATH

```bash
. "$HOME/.cargo/env"
```

# verify

```bash
rustc --version
rustup --version
```
