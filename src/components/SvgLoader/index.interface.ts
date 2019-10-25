export interface SVGLoaderInterface extends SVGLoaderIconInterface {
  name: 'edit';
}

export interface SVGLoaderIconInterface {
  width?: number | string;
  height?: number | string;
  className?: string;
}
