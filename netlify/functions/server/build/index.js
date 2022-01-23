var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
var import_server2 = __toModule(require("react-dom/server"));
var import_styled_components2 = __toModule(require("styled-components"));

// app/styles.context.ts
init_react();
var import_react = __toModule(require("react"));
var import_styled_components = __toModule(require("styled-components"));
var StylesContext = (0, import_react.createContext)(null);
var ThemeContext = (0, import_react.createContext)({});
var lightTheme = {
  colors: {
    primary: "#2ec4b6",
    primaryHover: "#29B0A3",
    secondary: "#3a506b",
    dark: "#0b132b",
    border: "#edf2f4",
    red: "#e71d36",
    background: "#FFFFFF",
    textColor: "#4b5563",
    headingColor: "#111827",
    bkgPre: "#edf2f4",
    colorPre: "#edf2f4",
    bkgScrollbar: "#3a506b",
    bkgContent: "transparent",
    white: "#FFFFFF"
  }
};
var darkTheme = {
  colors: {
    primary: "#2ec4b6",
    primaryHover: "#29B0A3",
    secondary: "#3a506b",
    dark: "#0b132b",
    border: "#1b262c",
    red: "#e71d36",
    background: "#1c2128",
    textColor: "#edf2f4",
    headingColor: "#edf2f4",
    bkgPre: "#3a506b",
    colorPre: "#edf2f4",
    bkgScrollbar: "#3a506b",
    bkgContent: "transparent",
    white: "#FFFFFF"
  }
};
var ScrollBar = import_styled_components.css`
   ::-webkit-scrollbar {
      width: 0.625rem;
      background-color: transparent;
      border-top: 0.625rem solid transparent;
      border-bottom: 0.625rem solid transparent;
   }

   ::-webkit-scrollbar:hover {
      background-color: rgba(0, 0, 0, 0.05);
   }

   ::-webkit-scrollbar-thumb:vertical {
      background: ${({ theme: theme2 }) => theme2.colors.bkgScrollbar};
      border-radius: 6.25rem;
      background-clip: padding-box;
      border: 0.125rem solid transparent;
      min-height: 0.625rem;
   }

   ::-webkit-scrollbar-thumb:vertical:active {
      background: ${({ theme: theme2 }) => theme2.colors.bkgScrollbar};
      -webkit-border-radius: 6.25rem;
   }
   ::-webkit-scrollbar-thumb:vertical:hover {
      background: ${({ theme: theme2 }) => theme2.colors.bkgScrollbar};
      -webkit-border-radius: 6.25rem;
      width: 0.625rem;
   }

   .horizontal-scroll::-webkit-scrollbar:vertical {
      width: 0.4375rem;
   }

   .horizontal-scroll::-webkit-scrollbar:horizontal {
      height: 0.4375rem;
   }

   .horizontal-scroll::-webkit-scrollbar-thumb {
      background: ${({ theme: theme2 }) => theme2.colors.bkgScrollbar};
      border-radius: 0.4375rem;
   }

   .horizontal-scroll::-webkit-scrollbar-track {
      border-radius: 0.75rem;
      padding: 0.0625rem;
   }

   .horizontal-scroll::-webkit-scrollbar-thumb:hover {
      background: ${({ theme: theme2 }) => theme2.colors.bkgScrollbar};
   }
`;
var GlobalStyle = import_styled_components.createGlobalStyle`

   *{
      margin:0;
      font-size:16px;
      font-family: 'Roboto', sans-serif;
      box-sizing: border-box;
      ${ScrollBar};
      outline:none;
      box-sizing: border-box;
   }
   html, body {
      width: 100%;
      height: 100%;
      background-color:${({ theme: theme2 }) => theme2.colors.background};
   }

    h1{
      color:${({ theme: theme2 }) => theme2.colors.headingColor};
      font-weight:bold;
      font-size: 2em;
      //margin-top: 1.6em;
     // margin-bottom: .8em;
      line-height: 1.4;
      scroll-margin-top: 1.6em;
    }

    h2{
      font-size:1.4285714em;
      color:${({ theme: theme2 }) => theme2.colors.headingColor};
      font-weight:bold;
      margin-top: 1.6em;
      margin-bottom: .8em;
      line-height: 1.4;
      scroll-margin-top: 1.6em;
    }

    h3{
      color:${({ theme: theme2 }) => theme2.colors.headingColor};
      font-size: 1.2857143em;
      margin-top: 1.5555556em;
      margin-bottom: .4444444em;
      line-height: 1.5555556;
      scroll-margin-top: 1.5555556em;
    }

    h4{
      font-size:1rem;
      color:${({ theme: theme2 }) => theme2.colors.headingColor};
      font-weight:bold;
      margin-top: 1.6em;
      margin-bottom: .8em;
      line-height: 1.4;
      scroll-margin-top: 1.6em;
    }

   a{
      font-size: 1rem;
      line-height: 1.75;
      color:${({ theme: theme2 }) => theme2.colors.secondary};
      text-decoration:none;
      font-weight:600;
      color:${({ theme: theme2 }) => theme2.colors.textColor};
      &:hover{
         color:${({ theme: theme2 }) => theme2.colors.primary};
      }
   }

   p{
      font-weight:400;
      color:${({ theme: theme2 }) => theme2.colors.textColor};
      box-sizing: border-box;
      font-size: 1rem;
      line-height: 1.7142857;
      scroll-margin-top: 1.6em;

      code{
         display:inline;
         background-color:${({ theme: theme2 }) => theme2.colors.bkgPre};
         border-radius:.3rem;
         font-size:.85rem;
         font-family:Monospace;
         padding: 0.125rem 0.25rem;
         display:inline;
         color:${({ theme: theme2 }) => theme2.colors.textColor};
      }
      strong{
         font-weight: bold;
      }
   }

   strong{
     font-weight:500;
   }

   line-height, ul {
      font-size: 1rem;
      line-height: 1.75;
      color:${({ theme: theme2 }) => theme2.colors.textColor};
   }


   ul{
      font-weight:400;
      color:${({ theme: theme2 }) => theme2.colors.textColor};
      box-sizing: border-box;
      font-size: 1rem;
      scroll-margin-top: 1.6em;
   }

   li{
      font-weight:400;
      color:${({ theme: theme2 }) => theme2.colors.textColor};
      box-sizing: border-box;
      font-size: 1rem;
      scroll-margin-top: 1.6em;
      list-style-type: circle;
   }

   table{
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse;
      color: ${({ theme: theme2 }) => theme2.colors.textColor};
      box-shadow: 0 0.188rem 0.375rem rgba(0,0,0,0.16), 0 0.188rem 0.375rem rgba(0,0,0,0.23);
      border-radius:8px;

   td, th {
        &:first-child {
            padding-left: 2rem;

            @media screen and (max-width: 768px) {
               padding-left: 2rem ;
            }

            @media screen and (max-width: 576px) {
               padding-left: 2rem;
            }
        }

        &:last-child {
            padding-right: 2rem;

            @media screen and (max-width: 768px) {
               padding-left: 2rem ;
            }

            @media screen and (max-width: 576px) {
               padding-left: 2rem;
            }
        }
   }

   thead {
        tr {
            font-size: 1em;
            border-bottom: solid 0.063rem ${({ theme: theme2 }) => theme2.colors.border};
            line-height: 2.5rem;
            text-align: left;
        }
   }

   tbody {
        tr {
            font-size: 1em;
            line-height: 2.5rem;
            border-bottom: solid 0.063rem ${({ theme: theme2 }) => theme2.colors.border};
            will-change: red;

            &:last-child{
               border-bottom:none;
            }
        }
	}
   }

   blockquote{
      margin-top: 10px;
      background-color:${({ theme: theme2 }) => theme2.colors.border};
      padding: 1px 0 1px 15px;
      border-radius:5px;
      border-left: 10px solid ${({ theme: theme2 }) => theme2.colors.primary};
      font-style:italic;
      & p{
         margin-top:12px;
         margin-bottom:12px;
      }
   }
`;

// app/entry.server.tsx
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const sheet = new import_styled_components2.ServerStyleSheet();
  (0, import_server2.renderToString)(sheet.collectStyles(/* @__PURE__ */ React.createElement(StylesContext.Provider, {
    value: null
  }, /* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }))));
  const styles = sheet.getStyleElement();
  sheet.seal();
  const markup = import_server.default.renderToString(/* @__PURE__ */ React.createElement(StylesContext.Provider, {
    value: styles
  }, /* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  })));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/home/barbosa/javascript/react-create-form-docs/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());
var import_react2 = __toModule(require("react"));
var meta = () => {
  return { title: "React Create Form" };
};
var links = () => [
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" }
];
function App() {
  const styles = (0, import_react2.useContext)(StylesContext);
  const [theme2, setTheme] = (0, import_react2.useState)("light");
  function handleTheme(selectedTheme) {
    if (typeof window !== "undefined") {
      setTheme(selectedTheme);
      localStorage.setItem("theme", selectedTheme);
    }
  }
  (0, import_react2.useLayoutEffect)(() => {
    if (typeof window !== "undefined") {
      const currentTheme = localStorage.getItem("theme");
      handleTheme(currentTheme || "light");
    }
  }, []);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null), styles), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(ThemeContext.Provider, {
    value: { theme: theme2, setTheme: handleTheme }
  }, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null)), false));
}

// route-module:/home/barbosa/javascript/react-create-form-docs/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
init_react();
var import_remix4 = __toModule(require_remix());
var import_styled_components7 = __toModule(require("styled-components"));

// app/hocs/withHome.tsx
init_react();
var import_react4 = __toModule(require("react"));
var import_styled_components6 = __toModule(require("styled-components"));

// app/components/footer/index.tsx
init_react();
var import_react_router_dom = __toModule(require("react-router-dom"));

// app/components/footer/styles.ts
init_react();
var import_styled_components3 = __toModule(require("styled-components"));
var Container = import_styled_components3.default.footer`
  background: ${({ theme: theme2 }) => theme2.colors.dark};
  position: sticky;
  width:100%;
  display:flex;
  justify-content:center;
`;
var FooterContent = import_styled_components3.default.div`
display:grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-rows: repeat(3,auto); 
  column-gap: 10px;
  row-gap:10px;
  width:100%;
  overflow:hidden;
  padding:20px 10px;
  max-width:1440px;
  a{
    color:${({ theme: theme2 }) => theme2.colors.textColor};
    text-decoration:none;
    &:hover{
      color:${({ theme: theme2 }) => theme2.colors.primaryHover};
    }
  }
`;
var FooterInformation = import_styled_components3.default.div`
  color:${({ theme: theme2 }) => theme2.colors.textColor};
  width:100%;
  margin-top:10px;
  padding:0 15px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-direction:column;
`;
var FooterLogo = import_styled_components3.default.div`
  width:100%;
  display:flex;
  justify-content:start;
  align-items:center;
  flex-direction:column;
  padding:15px 10px;

  .footer-text{
    margin-top:10px;
      color:${({ theme: theme2 }) => theme2.colors.textColor};
  }
`;

// app/components/logo/index.ts
init_react();
var import_styled_components4 = __toModule(require("styled-components"));
var Logo = import_styled_components4.default.div`
   display:flex;
   align-items:center;
   cursor: pointer;
   & img{
      width:50px;
      height:50px;
   }

   & span{
      font-size:23px;
      color:${({ theme: theme2 }) => theme2.colors.primary};
   }
`;

// app/config/index.ts
init_react();
var Config = {
  repository: "https://github.com/use-form/use-form",
  docsRepository: "https://github.com/use-form/docs",
  twitter: "https://twitter.com/juciano_barbosa",
  branch: "master",
  siteName: "Use Form",
  siteSlogan: "Use Form provides a way to create complex forms easily.",
  path: "/",
  titleSuffix: " \u2013 useForm",
  nextLinks: true,
  prevLinks: true,
  navLinks: [
    {
      label: "Docs",
      path: "/docs"
    }
  ],
  defaultMenuCollapsed: false,
  font: true,
  footer: true,
  footerText: "MIT 2022 \xA9 Use Form.",
  footerEditOnGitHubLink: true
};

// app/assets/green_logo.svg
var green_logo_default = "/build/_assets/green_logo-TH2WTCVN.svg";

// app/components/footer/index.tsx
function Footer() {
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(FooterContent, null, /* @__PURE__ */ React.createElement(FooterLogo, null, /* @__PURE__ */ React.createElement(Logo, null, /* @__PURE__ */ React.createElement("img", {
    src: green_logo_default,
    alt: "logo",
    className: "logo"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "mr-2 font-extrabold hidden md:inline"
  }, Config.siteName)), /* @__PURE__ */ React.createElement("span", {
    className: "footer-text"
  }, Config.footerText)), /* @__PURE__ */ React.createElement(FooterInformation, null, /* @__PURE__ */ React.createElement("h1", null, "Docs"), /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: `${Config.path}docs/quick-start`
  }, "Quick start"), /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: `${Config.path}docs`
  }, "Docs")), /* @__PURE__ */ React.createElement(FooterInformation, null, /* @__PURE__ */ React.createElement("h1", null, "Community"), /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: Config.repository
  }, "Github"), /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: `${Config.repository}/issues`
  }, "Request a feature"), /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: `${Config.repository}/issues`
  }, "Report a bug"), /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: `${Config.repository}`
  }, "Leave us a start"))));
}

// app/components/navbar/index.tsx
init_react();
var import_react3 = __toModule(require("react"));
var import_io = __toModule(require("react-icons/io"));
var import_ti = __toModule(require("react-icons/ti"));

// app/components/navbar/styles.ts
init_react();
var import_styled_components5 = __toModule(require("styled-components"));
var Wrapper = import_styled_components5.default.nav`
   display:flex;
   width:100%;
   height:auto;
   overflow:hidden;
   justify-content:center;
   align-items:center;
   flex-direction: row;
   align-items: center;
   border-bottom: 1px solid ${({ theme: theme2 }) => theme2.colors.border};
   position:fixed;
   background-color: ${({ theme: theme2 }) => theme2.colors.background};
   z-index:1;
   flex-direction:column;
`;
var Container2 = import_styled_components5.default.div`
   display:flex;
   width:100%;
   height:60px;
   overflow:hidden;
   justify-content:space-between;
   align-items:center;
   padding:5px 0px 5px 20px;
   max-width:1440px;
   & div{
      display:flex;
      align-items:center;
   }
`;
var ActionButtons = import_styled_components5.default.div`
   display:flex;
   justify-content:space-around;
   align-items:center;
   margin:0 10px;
`;
var Button = import_styled_components5.default.button`
   border-radius:50%;
   border:none;
   cursor: pointer;
   width:40px;
   height:40px;
   outline:none;
   background-color:transparent;
   display:flex;
   align-items:center;
   justify-content:center;

   & svg{
      fill:${({ theme: theme2 }) => theme2.colors.primary};
      width:21px;
      height:21px;
   }

   &:hover{
      background-color:${({ theme: theme2 }) => theme2.colors.border};
   }

   & + button{
      margin:5px;
   }
`;
var ButtonLink = import_styled_components5.default.a`
   border-radius:50%;
   border:none;
   cursor: pointer;
   width:40px;
   height:40px;
   outline:none;
   background-color:transparent;
   display:flex;
   align-items:center;
   justify-content:center;

   & svg{
      fill:${({ theme: theme2 }) => theme2.colors.primary};
      width:21px;
      height:21px;
   }

   &:hover{
      background-color:${({ theme: theme2 }) => theme2.colors.border};
   }

   & + button{
      margin:5px;
   }
`;
var MenuButton = (0, import_styled_components5.default)(Button)`
   border:1px solid ${({ theme: theme2 }) => theme2.colors.border};

   @media (min-width:989px){
      display:none;
   }
`;
var Links2 = import_styled_components5.default.div`
   display:flex;
   justify-content:start;
   align-items:center;
   width:fit-content;
   padding-left:40px;

   a{
      padding:0 20px;
      text-decoration:none;
      font-weight:600;

      &:hover{
         color:${({ theme: theme2 }) => theme2.colors.primary};
      }
   }

   @media (max-width:600px){
      display:none;
   }
`;
var MobileLink = import_styled_components5.default.div`
   display:flex;
   flex-direction:column;
   width:100%;
   justify-content:flex-end;
   align-items:center;
   background-color:${({ theme: theme2 }) => theme2.colors.background};
   height:${({ isOpen }) => isOpen ? 60 : 10}px;

   @media (min-width:600px){
      display:none;
   }

   div{
      display:${({ isOpen }) => isOpen ? "flex" : "none"};
      width:100%;
      justify-content:start;
      padding: 0 20px 0 22px;

      a{
         text-decoration:none;
         padding-right:20px;
         font-weight:600;
         
         &:hover{
            color:${({ theme: theme2 }) => theme2.colors.primary};
         }
      }
   }

   button{
      bottom:0;
      cursor:pointer;
      background-color:transparent;
      border:none;
   }
`;

// app/components/navbar/index.tsx
var import_remix3 = __toModule(require_remix());
function Navbar({ setOpen }) {
  const { setTheme, theme: theme2 } = (0, import_react3.useContext)(ThemeContext);
  const { pathname } = (0, import_remix3.useLocation)();
  function handleTheme() {
    const selectedTheme = theme2 === "light" ? "dark" : "light";
    setTheme(selectedTheme);
  }
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Container2, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: Config.path
  }, /* @__PURE__ */ React.createElement(Logo, null, /* @__PURE__ */ React.createElement("img", {
    src: green_logo_default,
    alt: "logo",
    className: "logo"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "mr-2 font-extrabold hidden md:inline"
  }, Config.siteName)))), /* @__PURE__ */ React.createElement(ActionButtons, null, /* @__PURE__ */ React.createElement(ButtonLink, {
    target: "_blank",
    href: Config.twitter
  }, /* @__PURE__ */ React.createElement(import_io.IoLogoTwitter, null)), /* @__PURE__ */ React.createElement(ButtonLink, {
    target: "_blank",
    href: Config.repository
  }, /* @__PURE__ */ React.createElement(import_io.IoLogoGithub, null)), /* @__PURE__ */ React.createElement(Button, {
    onClick: handleTheme
  }, theme2 === "light" ? /* @__PURE__ */ React.createElement(import_io.IoMdMoon, null) : /* @__PURE__ */ React.createElement(import_io.IoIosSunny, null)), pathname !== Config.path && /* @__PURE__ */ React.createElement(MenuButton, {
    onClick: setOpen
  }, /* @__PURE__ */ React.createElement(import_ti.TiThMenu, null)))));
}
var navbar_default = Navbar;

// app/hocs/withHome.tsx
var Main = import_styled_components6.default.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
var Container3 = import_styled_components6.default.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;
var Content = import_styled_components6.default.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${({ theme: theme2 }) => theme2.colors.bkgContent};
  margin-top:60px;
`;
function HomeLayout({ children }) {
  return /* @__PURE__ */ import_react4.default.createElement(Main, null, /* @__PURE__ */ import_react4.default.createElement(navbar_default, {
    setOpen: () => {
    }
  }), /* @__PURE__ */ import_react4.default.createElement(Container3, null, /* @__PURE__ */ import_react4.default.createElement(Content, null, children)), /* @__PURE__ */ import_react4.default.createElement(Footer, null));
}
function withHome(Component) {
  return function DocsComponent(props) {
    const { theme: theme2 } = (0, import_react4.useContext)(ThemeContext);
    return /* @__PURE__ */ import_react4.default.createElement(import_styled_components6.ThemeProvider, {
      theme: theme2 === "light" ? lightTheme : darkTheme
    }, /* @__PURE__ */ import_react4.default.createElement(HomeLayout, null, /* @__PURE__ */ import_react4.default.createElement(Component, __spreadValues({}, props))), /* @__PURE__ */ import_react4.default.createElement(GlobalStyle, null));
  };
}

// route-module:/home/barbosa/javascript/react-create-form-docs/app/routes/index.tsx
var import_react_iframe = __toModule(require("react-iframe"));
var Hero = import_styled_components7.default.div`
  width:100%;
  background-color:${({ theme: theme2 }) => theme2.colors.primary};
  display:flex;
  justify-content:start;
  align-items:center;
  flex-direction:column;



  h1{
    font-size:3em;
    font-family: 'Roboto',sans-serif;
    color:${({ theme: theme2 }) => theme2.colors.white};
  }

  p{
    font-size:1.6em;
    font-family: 'Roboto',sans-serif;
    color:${({ theme: theme2 }) => theme2.colors.white};
  }

  div{

    padding:15px;

    .btn{
      border:1px solid ${({ theme: theme2 }) => theme2.colors.white};
      color:${({ theme: theme2 }) => theme2.colors.white};
      font-weight:600;
      font-size:1.3em;
      padding:10px 30px;
      border-radius:5px;
      background-color: ${({ theme: theme2 }) => theme2.colors.primary};
      transition:ease 300ms;
      margin:5px;
  
      &:hover{
        color: ${({ theme: theme2 }) => theme2.colors.primary};
        background-color: ${({ theme: theme2 }) => theme2.colors.white};
        cursor:pointer;
      }
    }
  
    .docs-btn{
      border:1px solid ${({ theme: theme2 }) => theme2.colors.white};
      color: ${({ theme: theme2 }) => theme2.colors.primary};
      font-weight:600;
      font-size:1.3em;
      padding:10px 30px;
      border-radius:5px;
      background-color: ${({ theme: theme2 }) => theme2.colors.white};
      transition:ease 300ms;
      margin:20px;
  
      &:hover{
        color: ${({ theme: theme2 }) => theme2.colors.primary};
        background-color: ${({ theme: theme2 }) => theme2.colors.white};
        cursor:pointer;
      }
    }
  }
`;
var Section = import_styled_components7.default.section`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-rows: repeat(3,auto); 
  column-gap: 10px;
  row-gap:10px;
  width:100%;
  max-width:1200px;
  margin:0 auto;
  background-color:${({ theme: theme2 }) => theme2.colors.background};
  padding:20px;
  
  & div{
    display:flex;
    justify-content:start;
    align-items:center;
    flex-direction:column;
    padding:20px;
    & h1, p{
    }

    & img{
      width:20%;
      height:auto;
    }
  }

`;
var CodeSandBox = import_styled_components7.default.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  padding-bottom:100px;

  h1{
    font-size:3em;
    font-family: 'Roboto',sans-serif;
    color:${({ theme: theme2 }) => theme2.colors.primary};
  }

  div{
    width:1040px;
    padding:2px;
    .sandbox{
      border:none;
      border-radius:8px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
  }
`;
function Index() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Hero, null, /* @__PURE__ */ React.createElement("h1", null, "Use Form"), /* @__PURE__ */ React.createElement("p", null, "Use Form provides you a simple way to create forms with React"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    className: "docs-btn",
    to: "/docs"
  }, "Read docs"), /* @__PURE__ */ React.createElement(import_remix4.Link, {
    className: "btn",
    to: "/docs/quick-start"
  }, "Quick start")), /* @__PURE__ */ React.createElement(CodeSandBox, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_iframe.default, {
    url: "https://codesandbox.io/embed/useform-forked-9ihe9?fontsize=14&hidenavigation=1&theme=dark",
    width: "100%",
    height: "650px",
    className: "sandbox",
    id: "myId",
    position: "relative"
  })))), /* @__PURE__ */ React.createElement(Section, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Easy"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "Less code. "), "UseForm is the easiest way to create forms with React. Create a form and use it wherever you want, don't worry with React Context, or Redux. You can share your form with other components just by using the hook created by createForm function.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Flexible"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "Create a form an use as onSubmit, onChange or debounced mode. "), "Create powerful forms with UseForm. You can create your own form with your own fields, and you can use your own validation rules. UseForm allows you to create form, and use it as a controlled or uncontrolled form.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Performance"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "Just one render. "), "There are many form libraries, most of which are heavy, and allow you to create just one kind of form, but with UseForm you can fulfill and submit a form with just one render."))));
}
var routes_default = withHome(Index);

// route-module:/home/barbosa/javascript/react-create-form-docs/app/routes/docs.tsx
var docs_exports = {};
__export(docs_exports, {
  default: () => docs_default
});
init_react();
var import_remix7 = __toModule(require_remix());

// app/hocs/withDocs.tsx
init_react();
var import_react7 = __toModule(require("react"));
var import_remix6 = __toModule(require_remix());
var import_styled_components11 = __toModule(require("styled-components"));

// app/components/contentFooter/index.tsx
init_react();
var import_react5 = __toModule(require("react"));

// app/components/contentFooter/styles.ts
init_react();
var import_styled_components8 = __toModule(require("styled-components"));
var Wrapper2 = import_styled_components8.default.div`
   display:flex;
   justify-content:space-between;
   padding : 50px 0;

   a{
      color:${({ theme: theme2 }) => theme2.colors.textColor};
      text-decoration:none;
      font-weight:600;
      display:flex;
      align-items: center;
      &:hover{
         color:${({ theme: theme2 }) => theme2.colors.primary};
      }
   }
`;

// app/components/contentFooter/index.tsx
var import_md = __toModule(require("react-icons/md"));
var import_remix5 = __toModule(require_remix());
var fixPath = (path) => {
  const pathWithFrontSlash = path.startsWith("/") ? path : `/${path}`;
  const pathWithBackSlash = pathWithFrontSlash.endsWith("/") ? pathWithFrontSlash : `${pathWithFrontSlash}/`;
  return pathWithBackSlash;
};
var createEditUrl = (repository, branch, path, filepathWithName) => {
  const normalizedPath = fixPath(path);
  return `${repository}/tree/${branch}${normalizedPath}src/pages${filepathWithName}.mdx`;
};
var EditOnGithubLink = ({
  repository,
  branch,
  path,
  filepathWithName
}) => {
  const href = createEditUrl(repository, branch, path, filepathWithName);
  return /* @__PURE__ */ import_react5.default.createElement("a", {
    className: "text-sm",
    href,
    target: "_blank"
  }, /* @__PURE__ */ import_react5.default.createElement(import_md.MdEdit, {
    size: "1.2rem"
  }), "\xA0Edit this page on GitHub");
};
function ContentFooter() {
  const { pathname } = (0, import_remix5.useLocation)();
  return /* @__PURE__ */ import_react5.default.createElement(Wrapper2, null, /* @__PURE__ */ import_react5.default.createElement(EditOnGithubLink, {
    repository: Config.docsRepository || Config.repository,
    branch: Config.branch,
    path: Config.path,
    filepathWithName: pathname
  }));
}

// app/components/sidebar/index.tsx
init_react();
var import_react6 = __toModule(require("react"));
var import_react_router_dom2 = __toModule(require("react-router-dom"));
var import_go = __toModule(require("react-icons/go"));
var import_styled_components10 = __toModule(require("styled-components"));

// app/components/sidebar/styles.ts
init_react();
var import_styled_components9 = __toModule(require("styled-components"));
var Aside = import_styled_components9.default.aside`
  position: fixed;
  display: flex;
  height: calc(100vh - 60px);
  flex-shrink: 0;
  border-right: 1px solid ${({ theme: theme2 }) => theme2.colors.border};
  flex-direction: column;
  padding: 20px 10px 10px 5px;
  margin-top:50px;
  position: sticky;
  overflow:auto;
  top:60px;
  transition: margin-left 0.5s ease-in-out;
  margin-left: ${({ open }) => open ? 0 : "-260px"};
  width: 260px;
  color: ${({ theme: theme2 }) => theme2.colors.textColor};

  ul{
    padding-left:0px;
  }
  li{
    margin:15px;
    border-radius:5px;
  }
`;
var Items = import_styled_components9.default.ul`

`;
var Item = import_styled_components9.default.li`
  list-style:none;
  cursor:pointer;
  & span{
    font-weight:600;
    font-size:1.2em;
  }
`;
var SubItems = import_styled_components9.default.ul`

`;
var Indicator = import_styled_components9.default.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${({ theme: theme2 }) => theme2.colors.textColor};
  margin: 3px;
`;
var SubItem = import_styled_components9.default.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 500;
  transition: all 0.5s ease-in-out;

  &:hover{
     cursor:pointer;
  }

  & a {
    display: flex;
    cursor: pointer;
    font-size: 16px;
    text-decoration: none;
    color: ${({ theme: theme2 }) => theme2.colors.textColor};
  }
   
  &.active {
    background-color: ${({ theme: theme2 }) => theme2.colors.border};
    a {
      color: ${({ theme: theme2 }) => theme2.colors.primary};
    }
    ${Indicator} {
      background-color: ${({ theme: theme2 }) => theme2.colors.primary};
    }
  }
   
  &:hover {
    ${Indicator} {
      background-color: ${({ theme: theme2 }) => theme2.colors.primary};
    }
    a {
      color: ${({ theme: theme2 }) => theme2.colors.primary};
    }
  }

`;

// app/components/sidebar/index.tsx
var links2 = [
  {
    label: "Introduction",
    link: "",
    subItems: [
      {
        label: "Readme",
        link: "/docs/"
      },
      {
        label: "Quick Start",
        link: "/docs/quick-start"
      }
    ]
  },
  {
    label: "How it works",
    link: "",
    subItems: [
      {
        label: "The concept",
        link: "/docs/concept"
      }
    ]
  },
  {
    label: "Creating a form",
    link: "",
    subItems: [
      {
        label: "Native elements",
        link: "/docs/native-elements"
      },
      {
        label: "Custom components",
        link: "/docs/custom-components"
      },
      {
        label: "Form validation",
        link: "/docs/form-validation"
      }
    ]
  },
  {
    label: "Using your Form",
    link: "",
    subItems: [
      {
        label: "As onChange form",
        link: "/docs/onchange-form"
      },
      {
        label: "As debounced form",
        link: "/docs/debounced-form"
      },
      {
        label: "As onSubmit form",
        link: "/docs/onsubmit-form"
      }
    ]
  }
];
function ActiveLink({ href, children }) {
  const { pathname } = (0, import_react_router_dom2.useLocation)();
  const theme2 = (0, import_react6.useContext)(import_styled_components10.ThemeContext);
  const isActive = (0, import_react6.useMemo)(() => pathname === href, [pathname, href]);
  return /* @__PURE__ */ import_react6.default.createElement(SubItem, {
    className: isActive ? "active" : ""
  }, /* @__PURE__ */ import_react6.default.createElement(import_go.GoChevronRight, {
    color: isActive ? theme2.colors.primary : "transparent"
  }), /* @__PURE__ */ import_react6.default.createElement(import_react_router_dom2.Link, {
    to: href,
    className: isActive ? "active" : ""
  }, children));
}
function Sidebar(_a) {
  var _b = _a, { open } = _b, rest = __objRest(_b, ["open"]);
  const [expanded, setExpanded] = (0, import_react6.useState)("");
  return /* @__PURE__ */ import_react6.default.createElement(Aside, {
    open
  }, /* @__PURE__ */ import_react6.default.createElement(Items, null, links2.map((link) => {
    var _a2;
    return /* @__PURE__ */ import_react6.default.createElement(Item, {
      key: link.label
    }, /* @__PURE__ */ import_react6.default.createElement("span", {
      onClick: () => setExpanded("")
    }, link.label), expanded === "", /* @__PURE__ */ import_react6.default.createElement(SubItems, null, (_a2 = link.subItems) == null ? void 0 : _a2.map((subItem) => /* @__PURE__ */ import_react6.default.createElement(ActiveLink, {
      key: subItem.label,
      href: subItem.link
    }, subItem.label))));
  })));
}
var sidebar_default = Sidebar;

// app/hocs/withDocs.tsx
var Main2 = import_styled_components11.default.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items:center;
  width: 100%;

  img{
      border-radius: 0.5rem;
      box-shadow: 0 0.188rem 0.375rem rgba(0,0,0,0.16), 0 0.188rem 0.375rem rgba(0,0,0,0.23);
      width:100%;
   }
`;
var MainContainer = import_styled_components11.default.div`
  max-width:1440px;
  width:100%;
`;
var Container4 = import_styled_components11.default.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
var MainContent = import_styled_components11.default.div`
  display: flex;
  width: ${({ open }) => !open ? "100%" : "calc(100% - 260px)"};
  height: calc(100% - 60px);
  position: sticky;
  justify-content: center;
  float: left;
  left: ${({ open }) => open ? "260px" : "0"};
  transition: all 0.5s ease-in-out;
`;
var Content2 = import_styled_components11.default.div`
  display: block;
  width: 100%;
  padding: 40px;
  margin-top:40px;
  max-width: 1040px;
  background-color: ${({ theme: theme2 }) => theme2.colors.bkgContent};
`;
function DocsLayout({ children }) {
  const [open, setOpen] = (0, import_react7.useState)(true);
  const { pathname } = (0, import_remix6.useLocation)();
  const resize = () => {
    if ((window == null ? void 0 : window.innerWidth) > 989) {
      setOpen(true);
    } else if ((window == null ? void 0 : window.innerWidth) <= 989) {
      setOpen(false);
    }
  };
  (0, import_react7.useEffect)(() => {
    window.addEventListener("resize", resize);
    resize();
  }, []);
  (0, import_react7.useEffect)(() => {
    resize();
  }, [pathname]);
  return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement(navbar_default, {
    setOpen: () => setOpen(!open)
  }), /* @__PURE__ */ import_react7.default.createElement(Main2, null, /* @__PURE__ */ import_react7.default.createElement(MainContainer, null, /* @__PURE__ */ import_react7.default.createElement(Container4, null, /* @__PURE__ */ import_react7.default.createElement(sidebar_default, {
    open
  }), /* @__PURE__ */ import_react7.default.createElement(MainContent, {
    open
  }, /* @__PURE__ */ import_react7.default.createElement(Content2, null, children, /* @__PURE__ */ import_react7.default.createElement(ContentFooter, null)))))), /* @__PURE__ */ import_react7.default.createElement(Footer, null));
}
function withDocs(Component) {
  return function DocsComponent(props) {
    const { theme: theme2 } = (0, import_react7.useContext)(ThemeContext);
    return /* @__PURE__ */ import_react7.default.createElement(import_styled_components11.ThemeProvider, {
      theme: theme2 === "light" ? lightTheme : darkTheme
    }, /* @__PURE__ */ import_react7.default.createElement(DocsLayout, null, /* @__PURE__ */ import_react7.default.createElement(Component, __spreadValues({}, props))), /* @__PURE__ */ import_react7.default.createElement(GlobalStyle, null));
  };
}

// route-module:/home/barbosa/javascript/react-create-form-docs/app/routes/docs.tsx
function Docs() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix7.Outlet, null));
}
var docs_default = withDocs(Docs);

// mdx:/home/barbosa/javascript/react-create-form-docs/app/routes/docs/custom-components.mdx
var custom_components_exports = {};
__export(custom_components_exports, {
  attributes: () => attributes,
  default: () => custom_components_default,
  filename: () => filename,
  headers: () => headers,
  links: () => links3,
  meta: () => meta2
});
init_react();
var import_react9 = __toModule(require("react"));

// app/components/demo/index.tsx
init_react();
var import_react8 = __toModule(require("react"));
var import_styled_components12 = __toModule(require("styled-components"));
var import_react_iframe2 = __toModule(require("react-iframe"));
var import_remix8 = __toModule(require_remix());
var CodeSandBox2 = import_styled_components12.default.div`
  width:100%;
  padding:10px 0;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;


  h1{
    font-size:3em;
    font-family: 'Roboto',sans-serif;
    color:${({ theme: theme2 }) => theme2.colors.primary};
    padding:20px;
  }

  div{
    width:100%;
    padding:2px;
    .sandbox{
      width:100%;
      border:none;
      border-radius:8px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
  }

  `;
function Demo(props) {
  const push = (0, import_remix8.useNavigate)();
  function redirect() {
    push("/docs");
  }
  return /* @__PURE__ */ import_react8.default.createElement(CodeSandBox2, null, /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement(import_react_iframe2.default, {
    url: props.url,
    width: "100%",
    height: "700px",
    className: "sandbox",
    id: "myId",
    position: "relative"
  })));
}
var demo_default = Demo;

// app/components/codeblock/index.tsx
init_react();
var import_prism_react_renderer = __toModule(require("prism-react-renderer"));
var import_palenight = __toModule(require("prism-react-renderer/themes/palenight"));
var import_md2 = __toModule(require("react-icons/md"));
var import_react_use_clipboard = __toModule(require("react-use-clipboard"));

// app/components/codeblock/styles.ts
init_react();
var import_styled_components13 = __toModule(require("styled-components"));
var Container5 = import_styled_components13.default.div`
  margin: 1rem 0;
  *{
    font-family:monospace;
    font-size: inherit;
    white-space: pre;
    font-size: .875rem;
    white-space: pre-wrap

    }
  & pre {
    border-radius: 0.5rem;
    padding-left:1rem;
    box-shadow: 0 0.188rem 0.375rem rgba(0,0,0,0.16), 0 0.188rem 0.375rem rgba(0,0,0,0.23);
  }

  & .header{
    display:flex;
    justify-content:flex-end;

  & .language{
    font-family:'Roboto', sans-serif!important;
    color: #ffffff;
    background-color: ${({ theme: theme2 }) => theme2.colors.primary};
    border: 0.063rem solid ${({ theme: theme2 }) => theme2.colors.primary};
    border-radius: 0 0 0.125rem 0.125rem;
    margin-right:0.313rem;
    width:max-content;
    padding:0.25rem;
    display:inline;
  }

  & button {
    background-color: ${({ theme: theme2 }) => theme2.colors.primary};
    border: 0.063rem solid ${({ theme: theme2 }) => theme2.colors.primary};
    cursor: pointer;
    padding-top:0.313rem;
    border-radius: 0 0 0.125rem 0.125rem;
    margin-right:0.625rem;

    &:hover{
      box-shadow: 0 0.188rem 0.375rem rgba(0,0,0,0.16), 0 0.188rem 0.375rem rgba(0,0,0,0.23);
    }
  }
  }
`;

// app/components/codeblock/index.tsx
function CodeBlock({ children, language }) {
  const [isCopied, setCopied] = (0, import_react_use_clipboard.default)(children, { successDuration: 1e3 });
  return /* @__PURE__ */ React.createElement(import_prism_react_renderer.default, __spreadProps(__spreadValues({}, import_prism_react_renderer.defaultProps), {
    code: children,
    language,
    theme: import_palenight.default
  }), ({ className, style, tokens, getLineProps, getTokenProps }) => /* @__PURE__ */ React.createElement(Container5, null, /* @__PURE__ */ React.createElement("pre", {
    className,
    style
  }, /* @__PURE__ */ React.createElement("div", {
    className: "header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "language"
  }, language), /* @__PURE__ */ React.createElement(CopyButton, {
    onClick: setCopied,
    isCopied
  })), tokens.map((line, i) => /* @__PURE__ */ React.createElement("div", __spreadValues({}, getLineProps({ line, key: i })), line.map((token, key) => /* @__PURE__ */ React.createElement("span", __spreadValues({}, getTokenProps({ token, key })))))))));
}
var CopyButton = (_a) => {
  var _b = _a, { isCopied } = _b, props = __objRest(_b, ["isCopied"]);
  return /* @__PURE__ */ React.createElement("button", __spreadValues({}, props), isCopied ? /* @__PURE__ */ React.createElement(import_md2.MdCheck, {
    color: "#fff"
  }) : /* @__PURE__ */ React.createElement(import_md2.MdContentCopy, {
    color: "#fff"
  }));
};

// mdx:/home/barbosa/javascript/react-create-form-docs/app/routes/docs/custom-components.mdx
var attributes = {
  "meta": {
    "title": "Custom components",
    "description": "Learn how to use useForm to work with custom components."
  }
};
function MDXContent(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    h3: "h3",
    p: "p",
    ul: "ul",
    li: "li",
    h2: "h2",
    code: "code",
    blockquote: "blockquote"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement(_components.h1, null, "Custom components"), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.h3, null, "What are custom components?"), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.p, null, "Usually, custom components are used to create a better user experience, for example when you want to provide a way to user select a collection of items or collect a range of dates or times, you can reach the same result using native elements, but with custom components, you can do it in a more user-friendly way."), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.p, null, "Different from native elements, custom components have an internal state controlled by state management, which means that they will be updated when the value changes, however, native elements are not, because you can use a reference to the element to update its value."), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.h3, null, "Let's see some examples of custom components."), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react9.default.createElement(_components.li, null, "Datepikers - are a component that allows you to select a date."), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.li, null, "Timepikers - are a component that allows you to select a time."), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.li, null, "Sliders - are a component that allows you to select a range of values."), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.li, null, "Selects, multi-selects components - are a component that allows you to select single or multiple values."), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.li, null, "Drag and drop components - are a component that allows you to drag and drop items."), "\n"), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.h2, null, "How to use custom components with useForm"), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.p, null, "To use custom components with useForm, you need to use the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "<Wrapper>"), " component and pass the component as a prop. Another important thing is that the custom component should have those props: ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "value"), ", ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "onChange"), ", ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "onBlur"), ". The ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "value"), " prop is the value of the component, the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "onChange"), " prop is the function that will be called when the value changes and the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "onBlur"), " prop is the function that will be called when the component loses focus."), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.h3, null, "Why do we need to use the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "<Wrapper>"), " component?"), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.p, null, "The ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "register"), " function is the only way to connect a field to the form, and the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "register"), " function returns a reference to the component, then we need to use the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "<Wrapper>"), " component to get the reference.\nUsually, custom components don't work with reference, in consequence, we need to use a wrapper to connect the custom component with a reference and finally connect to the form. And then you can use the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "register"), " function to register the custom component."), "\n", /* @__PURE__ */ import_react9.default.createElement("br", null), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react9.default.createElement(_components.li, null, "The ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "<Wrapper>"), " component is a wrapper that will be used to wrap the custom component, it will be used to add the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "onChange"), " and ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "onBlur"), " props to the native event handlers."), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.li, null, "The ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "<Wrapper>"), " component is also used to add the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "value"), " prop to the custom component."), "\n"), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.h2, null, "How to use custom components with useField"), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.p, null, "When we are creating the form doesn't matter if we are using native HTML elements or not, it's just a function that creates a store and returns a function to manage the form. So we don't need to worry about it for now. We just need to create the form store, also we can provide the initial values, initial errors, initial touched, and the validation schema, but for now, we will just provide the initial values."), "\n", /* @__PURE__ */ import_react9.default.createElement(CodeBlock, {
    language: "javascript"
  }, `import { createForm } from '@use-form/core'

const useUserForm = createForm({
  initialValues: {
    names: []
  },
 })
`), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.p, null, "So, now we are going to create the form component that will be used to manage the form, and we will use the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "<Wrapper>"), " component to wrap the custom component. All the props that the custom component will receive will be the props that the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "<Wrapper>"), " component will receive."), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.p, null, "To register the custom component, we will use the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "register"), " function, and we will pass it to ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "<Wrapper>"), " component by the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "ref"), " prop."), "\n", /* @__PURE__ */ import_react9.default.createElement(CodeBlock, {
    language: "jsx"
  }, `
import { Wrapper } from '@use-form/use-form'
import Select from 'select-component'

funtion UserForm(){
  const { register, handleSubmit } = useUserForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper component={Select} ref={register('names')} />
        options={[
          { value: 'John', label: 'John' },
          { value: 'Jane', label: 'Jane' },
          { value: 'Jack', label: 'Jack' },
        ]}
      />
    </form>
  )
}
`), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.blockquote, null, "\n", /* @__PURE__ */ import_react9.default.createElement(_components.p, null, "The wrapper component will look at the custom component props, and if the component doesn't have the following properties, ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "onChange"), ", ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "onBlur"), ", and ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "value"), " it will throw an error. In this case, you should build your own Wrapper component, or you can customize the component to add the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "onChange"), " and ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "onBlur"), " props."), "\n"));
  return MDXLayout ? /* @__PURE__ */ import_react9.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var custom_components_default = MDXContent;
var filename = "custom-components.mdx";
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta2 = typeof attributes !== "undefined" && attributes.meta;
var links3 = void 0;

// mdx:/home/barbosa/javascript/react-create-form-docs/app/routes/docs/form-validation.mdx
var form_validation_exports = {};
__export(form_validation_exports, {
  attributes: () => attributes2,
  default: () => form_validation_default,
  filename: () => filename2,
  headers: () => headers2,
  links: () => links4,
  meta: () => meta3
});
init_react();
var import_react10 = __toModule(require("react"));
var attributes2 = {
  "meta": {
    "title": "Form validation",
    "description": "Learn how to validate form values using use-form."
  }
};
function MDXContent2(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2",
    p: "p",
    ul: "ul",
    li: "li",
    h3: "h3",
    code: "code",
    blockquote: "blockquote"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement(_components.h1, null, "Forms validations"), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.h2, null, "Validation"), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Every website with forms should have validations, but what are form validations? Go to any popular website with a registration form, and you will be notice that they provide feedback when you don't fill in the form correctly. You'll see messages such as:"), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react10.default.createElement(_components.li, null, `"This field is required" (You can't leave this field blank).`), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.li, null, '"Please enter your phone number in the format xxx-xxxx" (A specific data format is required for it to be considered valid).'), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.li, null, '"Please enter a valid email address" (the data you entered is not in the right format).'), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.li, null, '"Your password needs to be between 8 and 30 characters long and contain one uppercase letter, one symbol, and a number." (A very specific data format is required for your data).'), "\n"), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.h3, null, "But why is this so important?"), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Form validation is a very important part of the web development process. It's a way to make sure that the data you enter is valid. If you don't validate your data, it's possible that your data will be lost or corrupted."), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Server-side validations are the last part of the validation, which means, even if the data is in the correct format it's possible that the data can't be stored because some data can't be duplicated like email or username, this kind of validation is done in server-side. Client-side validation deal with incorrect data format, like a valid email, or a valid password, which means, that before the data is submitted the client-side validates if it is a valid data format."), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.h2, null, "Description"), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "There are several validations solutions available, but when using ", /* @__PURE__ */ import_react10.default.createElement(_components.code, null, "useForm"), " the default solution is Yup. With yup the process of validations is simple and powerful."), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "The ", /* @__PURE__ */ import_react10.default.createElement(_components.code, null, "useForm"), " returns an error object, that has all errors, and this object is updated whenever the input state is changed or when the form is submitted if your form has validation."), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Usually you wannt to show the error message just when a field is touched, you can do that by using the ", /* @__PURE__ */ import_react10.default.createElement(_components.code, null, "touched"), " object. Thouched object is an object that has all the fields that are touched, and the value of the field is true if the field is touched."), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.h2, null, "Usage"), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Validation is performed whenever the state is changed. By default, ", /* @__PURE__ */ import_react10.default.createElement(_components.code, null, "useForm"), " uses the uncontrolled inputs option, this means that the values \u200B\u200Bare accessible when the onSubmit event is dispatched."), "\n", /* @__PURE__ */ import_react10.default.createElement(CodeBlock, {
    language: "jsx"
  }, `
import { createForm } from "@use-form/use-form";
import * as yup from "yup";

const useForm = createForm({
   initialValues:{
      name: "Jesse",
      email: "jesse@jesse.com",
      pets: ["felix"],
      accept: false,
   }   
})

const validation = yup.object().shape({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("This field must be a valid e-mail")
    .required("This field is required"),
  pets: yup.array(yup.string().required("This field is required")),
  accept: yup.bool().oneOf([true], "Field must be checked"),
});

function Form() {
  const { register, state, handleSubmit } = useForm({mode:'onChange'});

  const {errors, touched} = state;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
         <input ref={register("name")} />
         <span>{touched.name && errors.name}</span>
      </fieldset>
      <fieldset>
         <input ref={register("email")} />
         <span>{touched.email && errors.email}</span>
      </fieldset>
      <fieldset>
         <input ref={register("pets")} />
         <span>{touched.pets && errors.pets}</span>
      </fieldset>
      <input ref={register("pets.0")} />
      <fieldset>
         <input ref={register("accept")} />
         <span>{touched.accept && errors.accept}</span>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
}`), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.blockquote, null, "\n", /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "If you don't want to use Yup validation, you can use any other validation library, or write your own validation logic."), "\n"), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.h2, null, "Demo"), "\n", /* @__PURE__ */ import_react10.default.createElement(demo_default, {
    url: "https://codesandbox.io/s/use-form-validation-form-jmv9e"
  }));
  return MDXLayout ? /* @__PURE__ */ import_react10.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var form_validation_default = MDXContent2;
var filename2 = "form-validation.mdx";
var headers2 = typeof attributes2 !== "undefined" && attributes2.headers;
var meta3 = typeof attributes2 !== "undefined" && attributes2.meta;
var links4 = void 0;

// mdx:/home/barbosa/javascript/react-create-form-docs/app/routes/docs/native-elements.mdx
var native_elements_exports = {};
__export(native_elements_exports, {
  attributes: () => attributes3,
  default: () => native_elements_default,
  filename: () => filename3,
  headers: () => headers3,
  links: () => links5,
  meta: () => meta4
});
init_react();
var import_react11 = __toModule(require("react"));
var attributes3 = {
  "meta": {
    "title": "Native HTML elements",
    "description": "Learn how to use native HTML elements in order to create better forms."
  }
};
function MDXContent3(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2",
    p: "p",
    code: "code",
    h3: "h3",
    blockquote: "blockquote"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, /* @__PURE__ */ import_react11.default.createElement(_components.h1, null, "Native HTML elements"), "\n", /* @__PURE__ */ import_react11.default.createElement(_components.h2, null, "What is a native HTML element?"), "\n", /* @__PURE__ */ import_react11.default.createElement(_components.p, null, "Native HTML elements are elements that are built into the browser, like ", /* @__PURE__ */ import_react11.default.createElement(_components.code, null, "<input>"), ", ", /* @__PURE__ */ import_react11.default.createElement(_components.code, null, "<button>"), ", ", /* @__PURE__ */ import_react11.default.createElement(_components.code, null, "<select>"), ", etc. These elements are different from custom elements, which are elements that are created by developers. Native HTML elements are powerful and easy to use since ", /* @__PURE__ */ import_react11.default.createElement(_components.code, null, "useForm"), " uses a reference to register the fields, native elements are easy to register, trigger and listen to events. All that we need to do is to use the ", /* @__PURE__ */ import_react11.default.createElement(_components.code, null, "ref"), " property to register the element."), "\n", /* @__PURE__ */ import_react11.default.createElement(CodeBlock, {
    language: "jsx"
  }, `<input ref={register('fieldName')} />
`), "\n", /* @__PURE__ */ import_react11.default.createElement(_components.h3, null, "Let's create a full form example"), "\n", /* @__PURE__ */ import_react11.default.createElement(_components.p, null, "When we are creating the form doesn't matter if we are using native HTML elements or not, it's just a function that creates a store and returns a function to manage the form. So we don't need to worry about it for now. We just need to create the form store, also we can provide the initial values, initial errors, initial touched, and the validation schema, but for now, we will just provide the initial values."), "\n", /* @__PURE__ */ import_react11.default.createElement(CodeBlock, {
    language: "javascript"
  }, `import { createForm } from '@use-form/core'

const useUserForm = createForm({
  initialValues: {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
 })
`), "\n", /* @__PURE__ */ import_react11.default.createElement(_components.p, null, "In order to have a full form example, we need to create a form component and use the ", /* @__PURE__ */ import_react11.default.createElement(_components.code, null, "useUserForm"), " hook. In this step we need to register the fields, we can do that using the ", /* @__PURE__ */ import_react11.default.createElement(_components.code, null, "register"), " function."), "\n", /* @__PURE__ */ import_react11.default.createElement(_components.blockquote, null, "\n", /* @__PURE__ */ import_react11.default.createElement(_components.p, null, "The ", /* @__PURE__ */ import_react11.default.createElement(_components.code, null, "register"), " function is a function that receives the name of the field and returns a reference to the element. The reference is used to register the element, trigger, and listen to events. If you are using a library like Material UI or something similar, make sure that the input component use ", /* @__PURE__ */ import_react11.default.createElement(_components.code, null, "React.forwardRef"), ", otherwise you will need to use a Wrapper to register the element."), "\n"), "\n", /* @__PURE__ */ import_react11.default.createElement(CodeBlock, {
    language: "jsx"
  }, `
funtion UserForm(){
  const { register, handleSubmit } = useUserForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input ref={register('name')} />
      <input ref={register('email')} />
      <input ref={register('password')} />
      <input ref={register('confirmPassword')} />
      <button type="submit">Submit</button>
    </form>
  )
}
`), "\n", /* @__PURE__ */ import_react11.default.createElement(_components.p, null, "The last thing we need to know is about ", /* @__PURE__ */ import_react11.default.createElement(_components.code, null, "handleSubmit"), ", it's a function that receives another function as a parameter, this function is called when the form is submitted. The function receives the data of the form as a parameter and the second parameter is the answer of the validation (if the form is valid or not, it depends on the validation schema)."));
  return MDXLayout ? /* @__PURE__ */ import_react11.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var native_elements_default = MDXContent3;
var filename3 = "native-elements.mdx";
var headers3 = typeof attributes3 !== "undefined" && attributes3.headers;
var meta4 = typeof attributes3 !== "undefined" && attributes3.meta;
var links5 = void 0;

// mdx:/home/barbosa/javascript/react-create-form-docs/app/routes/docs/debounced-form.mdx
var debounced_form_exports = {};
__export(debounced_form_exports, {
  attributes: () => attributes4,
  default: () => debounced_form_default,
  filename: () => filename4,
  headers: () => headers4,
  links: () => links6,
  meta: () => meta5
});
init_react();
var import_react12 = __toModule(require("react"));
var attributes4 = {
  "meta": {
    "title": "debounced mode",
    "description": "When you use debounced form the debounce parameter delays the updating of the state until the user has stopped changing inputs for a predetermined amount of time."
  }
};
function MDXContent4(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2",
    p: "p",
    a: "a",
    code: "code",
    blockquote: "blockquote"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, /* @__PURE__ */ import_react12.default.createElement(_components.h1, null, "Debounced mode"), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.h2, null, "Introduction"), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "Debounce function forces a function to wait a certain amount of time before running again. The function is built to limit the number of times a function is called."), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "The debounce parameter delays the updating of the state until the user has stopped changing inputs for a predetermined amount of time."), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "The input value is set to state values and then updated via React events. Defining a form\u2019s input value via state is considered a controlled component. For controlled inputs, you will need a corresponding state and then a function to update that state with changes."), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, /* @__PURE__ */ import_react12.default.createElement(_components.a, {
    href: "https://reactjs.org/docs/forms.html"
  }, "React Docs")), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "It means that whenever state is changed the component, it is rendered again."), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "If you want to use this kind of form, you need only pass property ", /* @__PURE__ */ import_react12.default.createElement(_components.code, null, "mode:'debounced'"), "."), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "Also, it means that the validations are run in every state change, providing better user feedback.\nSee more in Controlled Inputs with validation."), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.h2, null, "Usage"), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, /* @__PURE__ */ import_react12.default.createElement(_components.code, null, "useForm"), " provides a ", /* @__PURE__ */ import_react12.default.createElement(_components.code, null, "register"), " function, this function returns all properties to manager a field."), "\n", /* @__PURE__ */ import_react12.default.createElement(CodeBlock, {
    language: "jsx"
  }, `import { createForm } from '@use-form/use-form'

const useForm = createForm({
  initialValues: {
    name: 'Anna',
    address: [
      {
        street: '123 Main St',
        city: 'Anytown',
      },
    ]
  }
})
`), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "Use dot notation to create advanced objects or to map object values. Type an entry name and type or an entry property object."), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.blockquote, null, "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "Dot notation is used to access nested objects. For example, if you have an object with a nested object, you can access the nested object using dot notation; ", /* @__PURE__ */ import_react12.default.createElement(_components.code, null, "info.name"), ".\nUse dot notation to access nested arrays. For example, if you\nhave an object with a nested array, you can access the nested array using dot notation;\n", /* @__PURE__ */ import_react12.default.createElement(_components.code, null, "info.array[2]"), "."), "\n"), "\n", /* @__PURE__ */ import_react12.default.createElement(CodeBlock, {
    language: "jsx"
  }, `
   function Form(){
    const { register } = useForm({ mode: 'debounced'})

    return (
      <form>
        <input ref={register('name')} />
        <input ref={register('address.street')} />
        <input ref={register('address.city')} />
      </form>
    )
   }
`), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.h2, null, "Demo"), "\n", /* @__PURE__ */ import_react12.default.createElement(demo_default, {
    url: "https://codesandbox.io/s/use-form-debounced-form-co37c"
  }));
  return MDXLayout ? /* @__PURE__ */ import_react12.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var debounced_form_default = MDXContent4;
var filename4 = "debounced-form.mdx";
var headers4 = typeof attributes4 !== "undefined" && attributes4.headers;
var meta5 = typeof attributes4 !== "undefined" && attributes4.meta;
var links6 = void 0;

// mdx:/home/barbosa/javascript/react-create-form-docs/app/routes/docs/onchange-form.mdx
var onchange_form_exports = {};
__export(onchange_form_exports, {
  attributes: () => attributes5,
  default: () => onchange_form_default,
  filename: () => filename5,
  headers: () => headers5,
  links: () => links7,
  meta: () => meta6
});
init_react();
var import_react13 = __toModule(require("react"));
var attributes5 = {
  "meta": {
    "title": "onChange mode",
    "description": "When using controlled forms, the input value is set to state values and then updated via React events. React form controlled is the most popular aproach in reactjs."
  }
};
function MDXContent5(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2",
    p: "p",
    code: "code",
    blockquote: "blockquote"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement(_components.h1, null, "onChange mode"), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.h2, null, "Description"), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.p, null, "There are two types of form input in React. We have the uncontrolled input and the controlled input.\nWhen using controlled forms, the input value is set to state values and then updated via React events.\nDefining a form input value via state is considered a controlled component. For controlled inputs, you will need a corresponding state and then a function to update that state with changes."), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.p, null, "Controlled inputs are the most popular in the react ecosystem, are easier to write and understanding. But when you think about performance controlled inputs are less powerful than uncontrolled inputs.Every time that component state is updated the component is rendered again and this affects the performance result."), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.h2, null, "Usage"), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.p, null, /* @__PURE__ */ import_react13.default.createElement(_components.code, null, "useForm"), " provides a ", /* @__PURE__ */ import_react13.default.createElement(_components.code, null, "register"), " function, this function returns all properties to manager a field."), "\n", /* @__PURE__ */ import_react13.default.createElement(CodeBlock, {
    language: "jsx"
  }, `
import { createForm } from '@use-form/use-form'

const useForm = createForm({
  initialValues: {
    name: 'Anna',
    address: [
      {
        street: '123 Main St',
        city: 'Anytown',
      },
    ]
  }
})
`), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.p, null, "Use dot notation to create advanced objects or to map object values. Type an entry name and type or an entry property object."), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.blockquote, null, "\n", /* @__PURE__ */ import_react13.default.createElement(_components.p, null, "Dot notation is used to access nested objects. For example, if you have an object with a nested object, you can access the nested object using dot notation; ", /* @__PURE__ */ import_react13.default.createElement(_components.code, null, "info.name"), ".\nUse dot notation to access nested arrays. For example, if you\nhave an object with a nested array, you can access the nested array using dot notation;\n", /* @__PURE__ */ import_react13.default.createElement(_components.code, null, "info.array[2]"), "."), "\n"), "\n", /* @__PURE__ */ import_react13.default.createElement(CodeBlock, {
    language: "jsx"
  }, `
   function Form(){
    const { register } = useForm({ mode: 'onChange'})

    return (
      <form>
        <input ref={register('name')} />
        <input ref={register('address.street')} />
        <input ref={register('address.city')} />
      </form>
    )
   }
`), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.h2, null, "Demo"), "\n", /* @__PURE__ */ import_react13.default.createElement(demo_default, {
    url: "https://codesandbox.io/s/use-form-controlled-form-kihgy"
  }));
  return MDXLayout ? /* @__PURE__ */ import_react13.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var onchange_form_default = MDXContent5;
var filename5 = "onchange-form.mdx";
var headers5 = typeof attributes5 !== "undefined" && attributes5.headers;
var meta6 = typeof attributes5 !== "undefined" && attributes5.meta;
var links7 = void 0;

// mdx:/home/barbosa/javascript/react-create-form-docs/app/routes/docs/onsubmit-form.mdx
var onsubmit_form_exports = {};
__export(onsubmit_form_exports, {
  attributes: () => attributes6,
  default: () => onsubmit_form_default,
  filename: () => filename6,
  headers: () => headers6,
  links: () => links8,
  meta: () => meta7
});
init_react();
var import_react14 = __toModule(require("react"));
var attributes6 = {
  "meta": {
    "title": "onSubmit mode",
    "description": "Uncontrolled forms are the most performant way to create react forms. With uncontrolled input values, there is no updating or changing of any states. What you submit is what you get."
  }
};
function MDXContent6(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2",
    p: "p",
    a: "a",
    code: "code",
    blockquote: "blockquote"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null, /* @__PURE__ */ import_react14.default.createElement(_components.h1, null, "onSubmit mode"), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.h2, null, "Description"), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.p, null, "There are two types of form input in React. We have the uncontrolled input and the controlled input. Uncontrolled inputs are like traditional HTML form inputs:"), "\n", /* @__PURE__ */ import_react14.default.createElement(CodeBlock, {
    language: "html"
  }, `<input type="text" />
`), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.p, null, "With uncontrolled input, there is no updating or changing of any states. When we use uncontrolled input is necessary to set a reference in input for manipulating and receives events, but with userForm it isn't necessary because userForm makes this for us.\nUncontrolled inputs are useful when performance is essential. But if the forms turn very complex debounce forms are the best option."), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.p, null, "Ps * You can use uncontrolled form with custom inputs but custom inputs use state in your internal logic.\nIf you want to use uncontrolled form with custom inputs and native inputs the uncontrolled approach is applied only native inputs."), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.p, null, /* @__PURE__ */ import_react14.default.createElement(_components.a, {
    href: "https://reactjs.org/docs/forms.html"
  }, "React Docs")), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.p, null, "By default, ", /* @__PURE__ */ import_react14.default.createElement(_components.code, null, "useForm"), " use uncontrolled form, isn't necessary to pass any value to useForm hook if you want to use this kind.\nBut when you use this kind of form, it is necessary to realize that values and events validation are available only when onSubmit event is dispatched."), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.p, null, "With this approach, it's possible to complete a form without any extra renders."), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.h2, null, "Usage"), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.p, null, /* @__PURE__ */ import_react14.default.createElement(_components.code, null, "useForm"), " provides a ", /* @__PURE__ */ import_react14.default.createElement(_components.code, null, "register"), " function, this function returns all properties to manager a field."), "\n", /* @__PURE__ */ import_react14.default.createElement(CodeBlock, {
    language: "jsx"
  }, `
import { createForm } from '@use-form/use-form'

const useForm = createForm({
  initialValues: {
    name: 'Anna',
    address: [
      {
        street: '123 Main St',
        city: 'Anytown',
      },
    ]
  }
})
`), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.p, null, "Use dot notation to create advanced objects or to map object values. Type an entry name and type or an entry property object."), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.blockquote, null, "\n", /* @__PURE__ */ import_react14.default.createElement(_components.p, null, "Dot notation is used to access nested objects. For example, if you have an object with a nested object, you can access the nested object using dot notation; ", /* @__PURE__ */ import_react14.default.createElement(_components.code, null, "info.name"), ".\nUse dot notation to access nested arrays. For example, if you\nhave an object with a nested array, you can access the nested array using dot notation;\n", /* @__PURE__ */ import_react14.default.createElement(_components.code, null, "info.array[2]"), "."), "\n"), "\n", /* @__PURE__ */ import_react14.default.createElement(CodeBlock, {
    language: "jsx"
  }, `import { Wrapper } from '@use-form/use-form'
import Select from 'select-component'

funtion UserForm(){
  const { register, handleSubmit } = useUserForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper component={Select} ref={register('names')} />
        options={[
          { value: 'John', label: 'John' },
          { value: 'Jane', label: 'Jane' },
          { value: 'Jack', label: 'Jack' },
        ]}
      />
    </form>
  )
}
`), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.h2, null, "Demo"), "\n", /* @__PURE__ */ import_react14.default.createElement(demo_default, {
    url: "https://codesandbox.io/s/use-form-uncontrolled-form-9ybmz"
  }));
  return MDXLayout ? /* @__PURE__ */ import_react14.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var onsubmit_form_default = MDXContent6;
var filename6 = "onsubmit-form.mdx";
var headers6 = typeof attributes6 !== "undefined" && attributes6.headers;
var meta7 = typeof attributes6 !== "undefined" && attributes6.meta;
var links8 = void 0;

// mdx:/home/barbosa/javascript/react-create-form-docs/app/routes/docs/create-form.mdx
var create_form_exports = {};
__export(create_form_exports, {
  attributes: () => attributes7,
  default: () => create_form_default,
  filename: () => filename7,
  headers: () => headers7,
  links: () => links9,
  meta: () => meta8
});
init_react();
var import_react15 = __toModule(require("react"));
var attributes7 = {
  "meta": {
    "title": "Create Form",
    "description": "Create form is a function that creates a form and you can use it as a hook."
  }
};
function MDXContent7(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react15.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var create_form_default = MDXContent7;
var filename7 = "create-form.mdx";
var headers7 = typeof attributes7 !== "undefined" && attributes7.headers;
var meta8 = typeof attributes7 !== "undefined" && attributes7.meta;
var links9 = void 0;

// mdx:/home/barbosa/javascript/react-create-form-docs/app/routes/docs/quick-start.mdx
var quick_start_exports = {};
__export(quick_start_exports, {
  attributes: () => attributes8,
  default: () => quick_start_default,
  filename: () => filename8,
  headers: () => headers8,
  links: () => links10,
  meta: () => meta9
});
init_react();
var import_react16 = __toModule(require("react"));
var attributes8 = {
  "meta": {
    "title": "Quick Start",
    "description": "Your first step to creating forms."
  }
};
function MDXContent8(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    h2: "h2",
    br: "br",
    h3: "h3",
    ul: "ul",
    li: "li",
    code: "code"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null, /* @__PURE__ */ import_react16.default.createElement(_components.h1, null, "Quick Start"), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.p, null, "Hey there!"), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.p, null, "It's really good to see you here, on this first page you will see some steps to create forms easily."), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.h2, null, "Description"), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.p, null, "Forms are an important part of web applications, and with React it's possible to create greats forms,", /* @__PURE__ */ import_react16.default.createElement(_components.br, null), "\n", "react hooks are a game-changer when we think about forms, with hooks is simple to create forms, and you can go on without libraries.", /* @__PURE__ */ import_react16.default.createElement(_components.br, null), "\n", "But when we want to build complex forms with nested fields and validations, might be a good idea to use a library, and you can find a lot of libraries to help you to create forms."), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.h3, null, "So, why UseForm?"), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.p, null, "There are some reasons why you face problems when you want to create forms, and with useForm, you can solve these problems."), "\n", /* @__PURE__ */ import_react16.default.createElement("br", null), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react16.default.createElement(_components.li, null, "State management -  A couple of years ago, you could think that Redux or MobX was a good solution to manage form state in react, but they weren't. Today you can use hooks to manage the form state, hooks like ", /* @__PURE__ */ import_react16.default.createElement(_components.code, null, "useStatew"), " and ", /* @__PURE__ */ import_react16.default.createElement(_components.code, null, "useReducer"), " are a good solution to manage the state. But managing values, touched fields and errors could be a problem if you don't have a standard way to manage them. Usually, real applications use nested objects as request payloads, and you should keep it to send the correct data to the server, manage nested values and errors could be a problem using just ", /* @__PURE__ */ import_react16.default.createElement(_components.code, null, "useState"), " and ", /* @__PURE__ */ import_react16.default.createElement(_components.code, null, "useReducer"), "."), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.li, null, "Errors-To deal with errors, you can use your validation solution, and it can work well with simple forms, but you can stuck with a lot of errors when you have nested fields."), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.li, null, "Touched fields - Maybe you want to show a message error just when the field is touched, so in order to do that you need to manage the touched fields, it can be really easy to do with ", /* @__PURE__ */ import_react16.default.createElement(_components.code, null, "useState"), " and ", /* @__PURE__ */ import_react16.default.createElement(_components.code, null, "useReducer"), ", but you can't do that very well with ", /* @__PURE__ */ import_react16.default.createElement(_components.code, null, "useState"), " and ", /* @__PURE__ */ import_react16.default.createElement(_components.code, null, "useReducer"), " when you have nested fields."), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.li, null, "Handle submit - When you want to handle submit, you need to manage the submit event, it's convenient when you have an already solution to do that."), "\n"), "\n", /* @__PURE__ */ import_react16.default.createElement("br", null), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.p, null, "UseForm provides a way to create complex forms easily, this hook returns an object of values \u200B\u200Bin the same shape that it receives, this is possible using dot notation. Therefore,\nit does not matter if the object is complex or has many properties or an array,\nthe result is the same. This process turns very easy to create forms from nested objects,\nthe same layers and properties are replicated in the final object,\nthis approach prevents you to type more code to convert an object from form to backend object type. The same process is realized with errors objects and touched objects."), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.h2, null, "What to expect with useForm"), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react16.default.createElement(_components.li, null, "Performer forms - useForm provides a way to complete a form and submit it without any rerender, by default useForm creates uncontrolled forms."), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.li, null, "Easy to write - useForm has an easy way to write forms with less code. register function return necessary input's properties and it is all we need to manage all events in a native HTML ", /* @__PURE__ */ import_react16.default.createElement(_components.code, null, "input"), ". Writhe forms without form tag."), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.li, null, "Easy validation - By default useForm uses yup validation, we can write complex validation without effort."), "\n"), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.h2, null, "Installation"), "\n", /* @__PURE__ */ import_react16.default.createElement(CodeBlock, {
    language: "bash"
  }, `npm install --save @use-form/use-form
  `), "\n", /* @__PURE__ */ import_react16.default.createElement(CodeBlock, {
    language: "bash"
  }, `yarn add @use-form/use-form
  `), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.h2, null, "Usage"), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.p, null, "With ", /* @__PURE__ */ import_react16.default.createElement(_components.code, null, "createForm"), " you can create a hook form and use it wherever you want,"), "\n", /* @__PURE__ */ import_react16.default.createElement(demo_default, {
    url: "https://codesandbox.io/s/use-form-quick-start-br05d"
  }));
  return MDXLayout ? /* @__PURE__ */ import_react16.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var quick_start_default = MDXContent8;
var filename8 = "quick-start.mdx";
var headers8 = typeof attributes8 !== "undefined" && attributes8.headers;
var meta9 = typeof attributes8 !== "undefined" && attributes8.meta;
var links10 = void 0;

// mdx:/home/barbosa/javascript/react-create-form-docs/app/routes/docs/concept.mdx
var concept_exports = {};
__export(concept_exports, {
  attributes: () => attributes9,
  default: () => concept_default,
  filename: () => filename9,
  headers: () => headers9,
  links: () => links11,
  meta: () => meta10
});
init_react();
var import_react17 = __toModule(require("react"));
var attributes9 = {
  "meta": {
    "title": "Concept",
    "description": "How UseForm works, and why we decided to do it this way."
  }
};
function MDXContent9(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    code: "code",
    h2: "h2",
    ul: "ul",
    li: "li",
    h3: "h3",
    blockquote: "blockquote"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, /* @__PURE__ */ import_react17.default.createElement(_components.h1, null, "Concept"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "When you are working on a project, you might want to use a form in different places, or maybe you have a form with a couple of steps in different components, how could you handle this?"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "The most common answer is to use React Context API, or if you are using a form library like ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "react-hook-form"), ", you can use the ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "useFormContext"), " hook, formik has a similar API. These APIS are based on React Context API, so you can use them in the same way."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "But for me this is not the best way to do that, the idea to have a provider whenever you want to share something is weird and not very useful. Besides declaring a provider you should pass the value to the provider, it's really strange for me, because we can do that without a provider, by storing the state in s external store as Zustand do, the UseForm use an external store, for this reason, we don't need to use a React Context API or something similar to store our form state."), "\n", /* @__PURE__ */ import_react17.default.createElement("br", null), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.h2, null, "How a store works"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "The store concept becomes very popular in React community by the way of Redux and MobX works, a store is a place where you could keep your state, in the store you can trust, it means that the store is the source of truth, and every change in the state is always a change in the store."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "To deliver every change we need to use a pattern called ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "Observable"), ", so whenever a change happens in the state, the observable can notify the subscribers that the state has changed."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "Now that we know the main concept of the store and the observable, we can go on and understand how UseForm uses it."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.h2, null, "How UseForm works"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "UseForm uses an external store to keep the form state, but it's not enough, we need to share the state with other components without React Context. For this reason, we have a function called ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "createForm"), ";\nThis function creates a form and returns a function that can be used as a hook, this hook is connected to the store, so whenever the store changes, the hook will be notified and the form will be updated."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "In other words, the ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "createForm"), " function creates a form and returns a function that has all resources to manage the form, if you use it ten times, it will be the same form and the same store being managed in different places."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "For that reason, we can use the same form in different components without providers or React Context API."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.h2, null, "Initial State"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "As the first step, we need to define the initial state of the form, this is the state that will be used when the form is created, we have ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "initialValues"), " and ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "initialErrors"), " properties, ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "initialTouched"), ", all of them are optional."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.h2, null, "Form Validation"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "The validation process can be done in two ways:"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "The first and most common is to use a ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "validationSchema"), ", this is an object that contains all the validation rules, the ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "validationSchema"), " should have the same shape from the ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "initialValues"), " object, so if you have a form with a ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "name"), " field, you should have a ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "name"), " field in the validationSchema, this rule is applied to nested fields, we recommend to use ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "Yup"), " library for this. The first way is the recommended way to use validation, because it's the most simple and easy to use, and you have a powerful validation library. If you decide to use this way, you should create and use the ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "validationSchema"), " when you create the form."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "The second way is to use a ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "validate"), " function, this function will be called every time then the form is updated, and it will receive the form values and the form errors, and it should return an object with the new form errors."), "\n"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.h2, null, "Native elements vs Custom elements"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "In web development we can find native elements like ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "<input>"), " and ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "<select>"), " and custom elements like ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "<Selectbox/>"), " and ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "<DatePicker/>"), ",\nthere are some differences between them, native elements are HTML elements that are created by the browser, and custom elements are created by the developer,\nthe developer can use native elements to build custom elements."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "By default ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "createForm"), " create a form using just a reference to communicate with fields, since fields like ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "<input>"), " and ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "<select>"), " are native elements, ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "createForm"), " can do it without problems,\nbut if you want to use custom elements, ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "createForm"), " can't do it because most of them doesn't have a reference to native elements, and custom elements normally have an internal state, so to work with custom elements as native elements, we need a ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "Wrapper"), " component."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.h3, null, "Wrapper"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "The Wrapper component will be used to wrap the custom elements, and it will be used to create a reference to the native element. (Custom elements should have commons properties like ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "value"), ", ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "onChange"), ", ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "onBlur"), ") and it will be used to create a reference to the native element."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.blockquote, null, "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "We need to use a Wrapper because we don't want to rerender the form every time the custom element changes. Wrapper prevents this and makes just the specific custom element rerender."), "\n"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.h2, null, "Controlled vs Uncontrolled vs Debounced forms"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "By default, UseForm creates an agnostic form, which means that the form can be used as you wish, as controlled, uncontrolled or debounced. This configuration should be provided when you are going to use it."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "Debounced forms are forms that are updated only when the user stops typing, this is useful when you have a form with a lot of fields, and you don't want to update the form every time the user types, but only when the user stops typing."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "Controlled forms are forms that are updated whenever the user types, this is useful if you want to give quick feedback to the user, like a form with a ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "name"), " field, you can use a controlled form to show the user the error when the field is empty before to submit the form."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "Uncontrolled forms are forms that are updated just when the form is submitted, which means that the form can be fulfilled with the values of the form and submitted without rerendering the form."), "\n"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "You can learn more about this in the pages for ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "controlled"), ", ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "uncontrolled"), ", and ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "debounced"), " forms."));
  return MDXLayout ? /* @__PURE__ */ import_react17.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var concept_default = MDXContent9;
var filename9 = "concept.mdx";
var headers9 = typeof attributes9 !== "undefined" && attributes9.headers;
var meta10 = typeof attributes9 !== "undefined" && attributes9.meta;
var links11 = void 0;

// mdx:/home/barbosa/javascript/react-create-form-docs/app/routes/docs/index.mdx
var docs_exports2 = {};
__export(docs_exports2, {
  attributes: () => attributes10,
  default: () => docs_default2,
  filename: () => filename10,
  headers: () => headers10,
  links: () => links12,
  meta: () => meta11
});
init_react();
var import_react18 = __toModule(require("react"));
var attributes10 = {
  "meta": {
    "title": "Readme",
    "description": "Your fist step to create form easily without effort."
  }
};
function MDXContent10(props = {}) {
  const _components = Object.assign({
    p: "p",
    img: "img",
    h1: "h1",
    blockquote: "blockquote",
    code: "code",
    h3: "h3",
    a: "a",
    h2: "h2",
    br: "br",
    ul: "ul",
    li: "li"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react18.default.createElement(import_react18.default.Fragment, null, /* @__PURE__ */ import_react18.default.createElement(_components.p, null, /* @__PURE__ */ import_react18.default.createElement(_components.img, {
    src: "https://raw.githubusercontent.com/use-form/use-form/main/img/logo3.png",
    alt: "Logo"
  })), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h1, null, "Welcome to useForm \u{1F44B}"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.blockquote, null, "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "useForm"), " provide a way to create complex forms easily."), "\n"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h3, null, "\u{1F3E0} ", /* @__PURE__ */ import_react18.default.createElement(_components.a, {
    href: "https://useform.org"
  }, "Homepage")), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h3, null, "\u2728 ", /* @__PURE__ */ import_react18.default.createElement(_components.a, {
    href: "https://codesandbox.io/s/useform-2u2ju"
  }, "Demo")), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h2, null, "Description"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "Forms are an important part of web applications, and with react it's possible to create greats forms,", /* @__PURE__ */ import_react18.default.createElement(_components.br, null), "\n", "react hooks are a game-changer when we think about forms, with hooks is simple to create forms, and you can go on without libraries.", /* @__PURE__ */ import_react18.default.createElement(_components.br, null), "\n", "But when we want to build complex forms with nested fields and validations, maight be a good idea to use a library, and you can find a lot of libraries to help you to create forms."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h3, null, "So, why UseForm?"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "There are some reasons why you face problems when you want to create forms, and with useForm you can solve this problems."), "\n", /* @__PURE__ */ import_react18.default.createElement("br", null), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react18.default.createElement(_components.li, null, "State management -  A couple of yeears ago, you could think that Redux or MobX was  a good solution to manage form state in react, but they wasn't. Today you can use hooks to manage form state, hooks like ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "useStatew"), " and ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "useReducer"), " are a good solution to manage state. But manage values, touched fields and errors could be a problem if you don't have a standard way to manager them. Usually real applications use nested objects as request paylooads, and you should keep it in order to send the correct data to the server, manage nested values and errors could be a problem using just ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "useState"), " and ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "useReducer"), "."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.li, null, "Errors - To deal with errors, you can use your woun validation solution, and it can work well with simple forms, but you can stuck with a lot of errors when you have nested fields."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.li, null, "Touched fields - Maybe you want to show a message error just when the field is touched, so in order to do that you need to manager the touched fields, it can be really easy to do with ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "useState"), " and ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "useReducer"), ", but you can't do that very well with ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "useState"), " and ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "useReducer"), " when you have nested fields."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.li, null, "Handle submit - When you want to handle submit, you need to manage the submit event, it's really convinient when you have a already solution to do that."), "\n"), "\n", /* @__PURE__ */ import_react18.default.createElement("br", null), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "UseForm provides a way to create complex forms easily, this hook returns an object of values \u200B\u200Bin the same shape that it receives, this is possible using dot notation. Therefore,\nit does not matter if the object is complex or has many properties or array,\nthe result is the same. This process turns very easily to create forms from an object with several layers,\nthe same layers and properties are replicated in the final object,\nthis approach prevents you to type more code to convert an object from form to backend object type. The same process is realized with errors object and touched objects."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h2, null, "What to expect with useForm"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react18.default.createElement(_components.li, null, "Performer forms - useForm provides a way to complete a form and submit it without any rerender, by default useForm creates uncontrolled forms."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.li, null, "Easy to write - useForm has an easy way to write forms with less code. register function return necessary input's properties and it is all we need to manage all events in a native HTML ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "input"), ". Writhe forms without form tag."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.li, null, "Easy validation - By default useForm uses yup validation, we can write complex validation without effort."), "\n"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h2, null, "Installation"), "\n", /* @__PURE__ */ import_react18.default.createElement(CodeBlock, {
    language: "bash"
  }, `npm install --save @use-form/use-form
  `), "\n", /* @__PURE__ */ import_react18.default.createElement(CodeBlock, {
    language: "bash"
  }, `yarn add @use-form/use-form
  `), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h2, null, "Usage"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "With ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "createForm"), " you can create a hook form and use it wherever you want,"), "\n", /* @__PURE__ */ import_react18.default.createElement("br", null), "\n", /* @__PURE__ */ import_react18.default.createElement(CodeBlock, {
    language: "javascript"
  }, `import { createForm } from '@use-form/core'

const useUserForm = createForm({
  initialValues: {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
 })
`), "\n", /* @__PURE__ */ import_react18.default.createElement(CodeBlock, {
    language: "jsx"
  }, `
funtion UserForm(){
  const { register, handleSubmit } = useUserForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input ref={register('name')} />
      <input ref={register('email')} />
      <input ref={register('password')} />
      <input ref={register('confirmPassword')} />
      <button type="submit">Submit</button>
    </form>
  )
}
`), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h3, null, /* @__PURE__ */ import_react18.default.createElement(_components.a, {
    href: "https://dev.to/jucian0/building-forms-with-useform-1cna"
  }, "Post")), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h2, null, "\u{1F91D} Contributing"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "Contributions, issues and feature requests are welcome!"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "Feel free to check ", /* @__PURE__ */ import_react18.default.createElement(_components.a, {
    href: "https://github.com/use-form/use-form/issues"
  }, "issues page"), ". You can also take a look at the ", /* @__PURE__ */ import_react18.default.createElement(_components.a, {
    href: "https://github.com/Jucian0/use-form/blob/main/CONTRIBUTING.md"
  }, "contributing guide"), "."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h2, null, "Show your support"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "Give a \u2B50\uFE0F if this project helped you!"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h2, null, "\u{1F4DD} License"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "Copyright \xA9 2020 ", /* @__PURE__ */ import_react18.default.createElement(_components.a, {
    href: "https://github.com/use-form"
  }, "useForm"), "."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "This project is ", /* @__PURE__ */ import_react18.default.createElement(_components.a, {
    href: "https://github.com/use-form/use-form/blob/53debd6986650f76561795f2069d6eebc5db6c65/LICENSE"
  }, "MIT"), " licensed."));
  return MDXLayout ? /* @__PURE__ */ import_react18.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var docs_default2 = MDXContent10;
var filename10 = "index.mdx";
var headers10 = typeof attributes10 !== "undefined" && attributes10.headers;
var meta11 = typeof attributes10 !== "undefined" && attributes10.meta;
var links12 = void 0;

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/docs": {
    id: "routes/docs",
    parentId: "root",
    path: "docs",
    index: void 0,
    caseSensitive: void 0,
    module: docs_exports
  },
  "routes/docs/custom-components": {
    id: "routes/docs/custom-components",
    parentId: "routes/docs",
    path: "custom-components",
    index: void 0,
    caseSensitive: void 0,
    module: custom_components_exports
  },
  "routes/docs/form-validation": {
    id: "routes/docs/form-validation",
    parentId: "routes/docs",
    path: "form-validation",
    index: void 0,
    caseSensitive: void 0,
    module: form_validation_exports
  },
  "routes/docs/native-elements": {
    id: "routes/docs/native-elements",
    parentId: "routes/docs",
    path: "native-elements",
    index: void 0,
    caseSensitive: void 0,
    module: native_elements_exports
  },
  "routes/docs/debounced-form": {
    id: "routes/docs/debounced-form",
    parentId: "routes/docs",
    path: "debounced-form",
    index: void 0,
    caseSensitive: void 0,
    module: debounced_form_exports
  },
  "routes/docs/onchange-form": {
    id: "routes/docs/onchange-form",
    parentId: "routes/docs",
    path: "onchange-form",
    index: void 0,
    caseSensitive: void 0,
    module: onchange_form_exports
  },
  "routes/docs/onsubmit-form": {
    id: "routes/docs/onsubmit-form",
    parentId: "routes/docs",
    path: "onsubmit-form",
    index: void 0,
    caseSensitive: void 0,
    module: onsubmit_form_exports
  },
  "routes/docs/create-form": {
    id: "routes/docs/create-form",
    parentId: "routes/docs",
    path: "create-form",
    index: void 0,
    caseSensitive: void 0,
    module: create_form_exports
  },
  "routes/docs/quick-start": {
    id: "routes/docs/quick-start",
    parentId: "routes/docs",
    path: "quick-start",
    index: void 0,
    caseSensitive: void 0,
    module: quick_start_exports
  },
  "routes/docs/concept": {
    id: "routes/docs/concept",
    parentId: "routes/docs",
    path: "concept",
    index: void 0,
    caseSensitive: void 0,
    module: concept_exports
  },
  "routes/docs/index": {
    id: "routes/docs/index",
    parentId: "routes/docs",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: docs_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
