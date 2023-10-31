import Image from "next/image";
import OilFreeHydratingFaceGelImage from "../../../../assets/products/on-grass/face-gel.png";
import {OutlineButton} from "../../../../components/uiKit/Button/Button";
import AntioxidantImage from "../../../../assets/products/on-grass/antioxidant.png";
import AntiAgeFaceDayCreamImage from "../../../../assets/products/on-grass/anti-age-face-day-cream.png";
import FacialCleanserImage from "../../../../assets/products/on-grass/facial-cleanser.png";

const DesktopPresentation = () => {
    return (
        <div className="hidden gap-6 px-20 lg:flex justify-center">
            <div className="group relative overflow-hidden">
                <Image src={OilFreeHydratingFaceGelImage} alt="Oil-free hydrating face gel" />
                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-60% duration-300 group-hover:translate-y-1/2" />
                <p className="absolute bottom-8 w-full text-center font-header text-2xl font-semibold leading-10 text-neutral-10 opacity-100 duration-300 group-hover:opacity-0">
                    Hydrating
                </p>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <OutlineButton
                        text="Discover"
                        className="group-hover:animate-ease-out group-hover:animate-duration-300 group-hover:animate-fade-up group-hover:animate-once bg-neutral-10 opacity-0 hover:!bg-neutral-10"
                    />
                </div>
            </div>
            <div className="group relative overflow-hidden">
                <Image src={AntioxidantImage} alt="Antioxidant face gel booster" />
                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-60% duration-300 group-hover:translate-y-1/2" />
                <p className="absolute bottom-8 w-full text-center font-header text-2xl font-semibold leading-10 text-neutral-10 opacity-100 duration-300 group-hover:opacity-0">
                    Moisturizing
                </p>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <OutlineButton
                        text="Discover"
                        className="group-hover:animate-ease-out group-hover:animate-duration-300 group-hover:animate-fade-up group-hover:animate-once bg-neutral-10 opacity-0 hover:!bg-neutral-10"
                    />
                </div>
            </div>
            <div className="group relative overflow-hidden">
                <Image src={AntiAgeFaceDayCreamImage} alt="Anti-age face day cream" />
                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-60% duration-300 group-hover:translate-y-1/2" />
                <p className="absolute bottom-8 w-full text-center font-header text-2xl font-semibold leading-10 text-neutral-10 opacity-100 duration-300 group-hover:opacity-0">
                    Anti-aging
                </p>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <OutlineButton
                        text="Discover"
                        className="group-hover:animate-ease-out group-hover:animate-duration-300 group-hover:animate-fade-up group-hover:animate-once bg-neutral-10 opacity-0 hover:!bg-neutral-10"
                    />
                </div>
            </div>
            <div className="group relative overflow-hidden">
                <Image src={FacialCleanserImage} alt="Facial cleanser" />
                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-60% duration-300 group-hover:translate-y-1/2" />
                <p className="absolute bottom-8 w-full text-center font-header text-2xl font-semibold leading-10 text-neutral-10 opacity-100 duration-300 group-hover:opacity-0">
                    Cleansing
                </p>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <OutlineButton
                        text="Discover"
                        className="group-hover:animate-ease-out group-hover:animate-duration-300 group-hover:animate-fade-up group-hover:animate-once bg-neutral-10 opacity-0 hover:!bg-neutral-10"
                    />
                </div>
            </div>
        </div>
    )
}

export default DesktopPresentation
