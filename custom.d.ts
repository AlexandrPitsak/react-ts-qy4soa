declare module '*.svg?inline' {
    const content: any
    export default content
  }

  declare module "*.jpg" {
    const path: string;
    export default path;
}

declare module "*.png" {
    const path: string;
    export default path;
}

declare module "*.webp" {
  const value: any;
  export = value;
}

declare module "*.mp4" {
  const value: any;
  export = value;
}
declare module "*.mov" {
  const value: any;
  export = value;
}