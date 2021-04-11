// declare module "*.module.css" {
//   const classNames: {
//     [className: string]: string;
//   };
//   export = classNames;
// }

export type NewLollyFormValues = {
  topColor: string;
  middleColor: string;
  bottomColor: string;
  recipientName: string;
  message: string;
  sendersName: string;
};

export type Lolly = NewLollyFormValues & {
  id: string;
};
