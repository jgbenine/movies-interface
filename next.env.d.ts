declare module'*.scss' {
  const content: any;
  export default content;
}

namespace NodeJS {
  interface ProcessEnv {
    API_TOKEN: string;
  }
}