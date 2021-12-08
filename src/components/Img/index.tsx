import "./index.scss";

import { useMemo, useState } from "react";

import LoadingNote from "./components/LoadingNote";

type ImgProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  MemoImgProps &
  LoadingProps;

type MemoImgProps = {
  src: string;
  alt: string;
  imgClassName?: string;
};

type LoadingProps = {
  loadingMask?: boolean; // 是否需要加载状态
};

/**
 * @param props 相关api如下\
 * **`img`标签仅提供三个api**
 * - `src`: 图片src
 * - `alt`: 图片alt
 * - `imgClassName`: `img`标签的类名
 * **加载相关api**
 * - loadingMask: boolean, 是否需要加载态，默认为true，若图片小于1rem请修改此属性为false
 * **其它均加在img外部container上，支持所有div属性**
 */

function Img(props: ImgProps) {
  const {
    src,
    imgClassName,
    alt,
    className = "",
    loadingMask = true,
    ...containerProps
  } = props;
  const [isLoading, setIsLoading] = useState(true);

  const memoImg = useMemo(
    () => (
      <img
        src={src}
        alt={alt}
        className={`img-memo ${imgClassName}`}
        onLoad={() => setIsLoading(false)}
      />
    ),
    [src, alt, imgClassName]
  );

  return (
    <div {...containerProps} className={`img ${className}`}>
      {memoImg}
      {isLoading && loadingMask && (
        <div className="img-loading">
          <LoadingNote />
        </div>
      )}
    </div>
  );
}

export default Img;
