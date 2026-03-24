declare module "scrolly-video/dist/ScrollyVideo.esm.jsx" {
  import { ForwardRefExoticComponent, RefAttributes } from "react";

  interface ScrollyVideoProps {
    src: string;
    cover?: boolean;
    sticky?: boolean;
    full?: boolean;
    trackScroll?: boolean;
    lockScroll?: boolean;
    transitionSpeed?: number;
    frameThreshold?: number;
    useWebCodecs?: boolean;
    videoPercentage?: number;
    debug?: boolean;
    onReady?: () => void;
    onChange?: () => void;
  }

  interface ScrollyVideoHandle {
    setVideoPercentage: (percentage: number, options?: object) => void;
  }

  const ScrollyVideo: ForwardRefExoticComponent<
    ScrollyVideoProps & RefAttributes<ScrollyVideoHandle>
  >;

  export default ScrollyVideo;
}
