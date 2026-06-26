# Trabajo Práctico Final Integrador – Programación Visual – Grupo 5

## Descripción

Este Trabajo Práctico Final consiste en el desarrollo de un **Panel de Control de Clientes** utilizando **React** y **Vite**, integrando todos los conceptos trabajados durante el cuatrimestre.

La aplicación permite la gestión de clientes mediante el consumo de la API pública **FakeStoreAPI**, implementando autenticación, navegación entre vistas, manejo de estado global, consumo de servicios REST y componentes reutilizables.

Durante el desarrollo se aplicaron conceptos fundamentales de React como Context API, Hooks, React Router, consumo de APIs con `fetch` y diseño de interfaces utilizando Material UI.

---

# Integrantes

- Gutiérrez Camila Gimena — **CamilaGGutierrez**
- Robles Diego — **DiegoFedericoGabrielRobles**
- Meriles Aaron — **AaronMeriles**
- Ponzetti Juan — **JuanPoNZEtti**

---

# Tecnologías Utilizadas

## React

Desarrollo de la aplicación mediante componentes funcionales reutilizables.

## Vite

Entorno de desarrollo moderno y de alto rendimiento.

## React Router DOM

Navegación entre vistas sin recarga de la aplicación.

## Context API

Administración del estado global del administrador autenticado.

## Hooks de React

- useState
- useEffect
- useContext
- useParams

## Material UI

Diseño de la interfaz utilizando componentes modernos y responsivos.

## JavaScript ES6+

Programación modular utilizando funciones asíncronas (`async/await`) y Fetch API.

## FakeStoreAPI

Consumo de servicios REST para la gestión de clientes.

---

# Funcionalidades Implementadas

## Módulo A – Autenticación

- Inicio de sesión del administrador.
- Selección del sector (Soporte o Gerencia).
- Estado global mediante Context API.
- Persistencia de sesión mediante LocalStorage.
- Protección de rutas con React Router.
- Cierre de sesión.

---

## Módulo B – Gestión de Clientes

- Consumo de clientes desde FakeStoreAPI.
- Visualización en tabla.
- Buscador por apellido.
- Buscador por ciudad.
- Indicador de carga.
- Manejo de errores.
- Navegación hacia la ficha del cliente.

---

## Módulo C – Alta de Clientes

- Formulario de registro.
- Validación mediante componentes controlados.
- Petición HTTP POST.
- Captura del ID generado por la API.
- Mensaje de confirmación mediante Alert.

---

## Módulo D – Ficha del Cliente

- Obtención dinámica del ID mediante React Router.
- Consulta individual del cliente.
- Visualización de datos personales.
- Visualización de dirección completa.
- Visualización de credenciales.
- Control de permisos según el rol del administrador.
- Eliminación de clientes (solo Gerencia).

---

# Estructura del Proyecto

```text
src/
│
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   │
│   └── common/
│       ├── BuscadorClientes.jsx
│       ├── TablaClientes.jsx
│       └── FormularioCliente.jsx
│
├── context/
│   └── AdminContext.jsx
│
├── services/
│   └── clienteService.js
│
├── views/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── ListaClientes.jsx
│   └── DetalleCliente.jsx
│
├── App.jsx
└── main.jsx
```

---

# API Utilizada

## FakeStoreAPI

### Obtener todos los clientes

```
GET https://fakestoreapi.com/users
```

# Objetivos Académicos

Este trabajo permitió aplicar conocimientos sobre:

- Componentes funcionales.
- React Hooks.
- Context API.
- Estado Global.
- Persistencia mediante LocalStorage.
- React Router DOM.
- Componentes reutilizables.
- Arquitectura modular.
- Consumo de APIs REST.
- Programación asíncrona con async/await.
- Manejo de eventos.
- Interfaces responsivas con Material UI.

---