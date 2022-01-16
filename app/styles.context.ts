import { createContext } from "react";
import { createGlobalStyle, css, DefaultTheme } from "styled-components";

export const StylesContext = createContext<null | React.ReactElement<{}, string | React.JSXElementConstructor<any>>[]>(null);
export const ThemeContext = createContext<any>({})

declare module "styled-components" {
   export interface DefaultTheme {
      colors: {
         bkgContent: string;
         primary: string
         primaryHover:string
         secondary: string
         dark: string
         border: string
         red: string
         background: string
         textColor: string
         headingColor:string
         bkgPre: string
         colorPre: string
         bkgScrollbar: string
         white: string
      }
   }
}

export const lightTheme:DefaultTheme = {
   colors: {
     primary: '#2ec4b6',
     primaryHover:'#29B0A3',
     secondary: '#3a506b',
     dark: '#0b132b',
     border: '#edf2f4',
     red: '#e71d36',
     background: '#FFFFFF',
     textColor: '#4b5563',
     headingColor:'#111827',
     bkgPre: '#edf2f4',
     colorPre: '#edf2f4',
     bkgScrollbar: '#3a506b',
     bkgContent:"#fafafa",
       white: '#FFFFFF'
   },
 }
 
 export const darkTheme = {
   colors: {
     primary: '#2ec4b6',
     primaryHover:'#29B0A3',
     secondary: '#3a506b',
     dark: '#0b132b',
     border: '#1b262c',
     red: '#e71d36',
     background: '#1c2128',
     textColor: '#edf2f4',
     headingColor:'#edf2f4',
     bkgPre: '#3a506b',
     colorPre: '#edf2f4',
     bkgScrollbar: '#3a506b',
     bkgContent:"#fafafa",
     white: '#FFFFFF'
   },
 }

 export const ScrollBar = css`
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
      background: ${({theme})=> theme.colors.bkgScrollbar};
      border-radius: 6.25rem;
      background-clip: padding-box;
      border: 0.125rem solid transparent;
      min-height: 0.625rem;
   }

   ::-webkit-scrollbar-thumb:vertical:active {
      background: ${({theme})=> theme.colors.bkgScrollbar};
      -webkit-border-radius: 6.25rem;
   }
   ::-webkit-scrollbar-thumb:vertical:hover {
      background: ${({theme})=> theme.colors.bkgScrollbar};
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
      background: ${({theme})=> theme.colors.bkgScrollbar};
      border-radius: 0.4375rem;
   }

   .horizontal-scroll::-webkit-scrollbar-track {
      border-radius: 0.75rem;
      padding: 0.0625rem;
   }

   .horizontal-scroll::-webkit-scrollbar-thumb:hover {
      background: ${({theme})=> theme.colors.bkgScrollbar};
   }
`

 export const GlobalStyle = createGlobalStyle`
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
      background-color:${({ theme }) => theme.colors.background};
   }

   h1{
    font-size: 1.875rem;
    line-height: 2.25rem;
    }

   a{
    font-size: 1rem;
    line-height: 1.75;
    color:${({theme})=> theme.colors.secondary};
   }

   p{
    margin-top: 1.25em;
    margin-bottom: 1.25em;
    font-size: 1rem;
    line-height: 1.75;
    color:${({theme})=> theme.colors.textColor};
   }

   strong{
     font-weight:500;
   }

   line-height, ul {
    font-size: 1rem;
    line-height: 1.75;
    color:${({theme})=> theme.colors.textColor};
   }
`
