declare module '*module.css' {
  const styles: {
    [className: string]: string
  }
  export default styles
}


declare module '*.scss' {
  const classes: {
    [name: string]: string;
  };
  export default classes;
}

type QueryResult<T> = {
  statusCode: string;
  message: string;
  data: T;
}
