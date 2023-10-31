import {ImageProps} from "next/image";

export interface BannerItemProps extends Pick<ImageProps, 'src' | 'alt' | 'priority'> {
    title?: string;
}
