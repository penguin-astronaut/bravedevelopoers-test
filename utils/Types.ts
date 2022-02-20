export interface INewOperator {
  name: string;
  img: string;
  color: string;
}

export interface IOperator extends INewOperator {
  slug: string;
  isUserCreated: boolean;
}
