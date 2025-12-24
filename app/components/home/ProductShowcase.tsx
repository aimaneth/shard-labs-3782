import { FC } from "react";
import { withBasePath } from "../../utils/base-path";

export const ProductShowcase: FC = () => {
    return (
        <section className="oui-w-full oui-flex oui-justify-center oui-px-4 md:oui-px-0 oui-mb-32 oui-relative oui-z-20" style={{ marginTop: "50px" }}>
            <div className="home-showcase-container">
                <div className="home-showcase-inner">
                    <img
                        src={withBasePath("/screenshot-trading.png")}
                        alt="Shard DEX Trading Interface"
                        className="home-showcase-img"
                    />
                    <div className="home-showcase-glow" />
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
