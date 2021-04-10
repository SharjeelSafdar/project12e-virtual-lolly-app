declare module "*.module.css" {
  const classNames: {
    [className: string]: string;
  };
  export = classNames;
}
