import type { Config } from "tailwindcss";
const config: Config = {
  content:["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme:{extend:{colors:{paper:"#f4f2ec",ink:"#292725",muted:"#696762",line:"#d9d5cb",maya:{paper:"#f7fafa",mist:"#eaf3f3",ink:"#1d2b30",muted:"#4a6068",line:"#d0e0e0",sea:"#1f4e5f",glass:"#dfeceb",amber:"#8f6420"}},fontFamily:{display:["Cormorant Garamond","Georgia","serif"],body:["Jost","Arial","sans-serif"],serif:["Georgia","Times New Roman","serif"],sans:["Arial","Helvetica","sans-serif"]}}},
  plugins:[]
};
export default config;
